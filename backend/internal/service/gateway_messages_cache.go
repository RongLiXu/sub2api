package service

import (
	"context"
	"fmt"

	"github.com/Wei-Shaw/sub2api/internal/pkg/claude"
	"github.com/tidwall/gjson"
	"github.com/tidwall/sjson"
)

// stripMessageCacheControl 移除 $.messages[*].content[*].cache_control。
// 与 Parrot _strip_message_cache_control 语义一致。
//
// 旧策略为什么整体清空：客户端（特别是 Claude Code）经常把 cache_control 打在
// "当前最后一条 user message" 上；下一轮对话 messages 追加后，原本的最后一条
// 变成中间某条，cache_control 还挂着就导致"前缀签名变化"，破坏缓存命中。
// 统一由代理重新打断点（addMessageCacheBreakpoints）才能在多轮间稳定。
func stripMessageCacheControl(body []byte) []byte {
	messages := gjson.GetBytes(body, "messages")
	if !messages.IsArray() {
		return body
	}
	msgIdx := -1
	messages.ForEach(func(_, msg gjson.Result) bool {
		msgIdx++
		content := msg.Get("content")
		if !content.IsArray() {
			return true
		}
		blockIdx := -1
		content.ForEach(func(_, block gjson.Result) bool {
			blockIdx++
			if !block.Get("cache_control").Exists() {
				return true
			}
			path := fmt.Sprintf("messages.%d.content.%d.cache_control", msgIdx, blockIdx)
			if next, err := sjson.DeleteBytes(body, path); err == nil {
				body = next
			}
			return true
		})
		return true
	})
	return body
}

// addMessageCacheBreakpoints 在 messages 上注入两个稳定的 cache 断点：
//  1. 最后一条 message
//  2. 当 messages 数量 ≥ 4 时，倒数第二个 role=user 的 message
//
// 与 Parrot add_cache_breakpoints 一致。两个断点 + system prompt block 的断点
// + tools[-1] 的断点共同构成最多 4 个断点（Anthropic 上限）。
//
// cache_control ttl 策略：
//   - 若目标 block 已有 cache_control.ttl → 不覆盖
//   - 否则写入 {"type":"ephemeral","ttl": claude.DefaultCacheControlTTL}
//
// 调用前应先 stripMessageCacheControl 以保证幂等和稳定。
func addMessageCacheBreakpoints(body []byte) []byte {
	messages := gjson.GetBytes(body, "messages")
	if !messages.IsArray() {
		return body
	}
	arr := messages.Array()
	if len(arr) == 0 {
		return body
	}

	body = injectCacheControlOnLastContentBlock(body, len(arr)-1, &arr[len(arr)-1])

	if len(arr) >= 4 {
		userCount := 0
		for i := len(arr) - 1; i >= 0; i-- {
			if arr[i].Get("role").String() != "user" {
				continue
			}
			userCount++
			if userCount == 2 {
				body = injectCacheControlOnLastContentBlock(body, i, &arr[i])
				break
			}
		}
	}

	return body
}

// rewriteMessageCacheControlIfEnabled 按系统设置决定是否执行旧版 messages 缓存断点改写。
func (s *GatewayService) rewriteMessageCacheControlIfEnabled(ctx context.Context, body []byte) []byte {
	if s == nil || !s.isRewriteMessageCacheControlEnabled(ctx) {
		return body
	}
	body = stripMessageCacheControl(body)
	return addMessageCacheBreakpoints(body)
}

// rewriteManagedClaudeMessageCacheControlIfEnabled applies gateway-managed
// message cache breakpoints for Anthropic account types that do not run the
// Claude Code OAuth mimicry pipeline.
func (s *GatewayService) rewriteManagedClaudeMessageCacheControlIfEnabled(ctx context.Context, account *Account, body []byte) []byte {
	if account == nil || account.Platform != PlatformAnthropic || account.IsOAuth() {
		return body
	}
	if s != nil && s.isRewriteMessageCacheControlEnabled(ctx) {
		return s.rewriteMessageCacheControlIfEnabled(ctx, body)
	}
	return addManagedClaudeCacheBreakpoints(body)
}

// augmentClaudeClientCacheBreakpoints keeps a real claude-cli request intact
// while adding stable cache anchors when the client only anchors dynamic turns
// or omits anchors completely.
func augmentClaudeClientCacheBreakpoints(body []byte) []byte {
	return addManagedClaudeCacheBreakpoints(body)
}

func addManagedClaudeCacheBreakpoints(body []byte) []byte {
	if len(body) == 0 {
		return body
	}

	body, hasStableAnchor := addSystemCacheBreakpointIfMissing(body)
	body, toolAnchorAdded := addToolsCacheBreakpointIfMissing(body)
	hasStableAnchor = hasStableAnchor || toolAnchorAdded

	if idx, ok := stableMessageCacheBreakpointIndex(body, hasStableAnchor); ok {
		msg := gjson.GetBytes(body, fmt.Sprintf("messages.%d", idx))
		body = injectCacheControlOnLastContentBlock(body, idx, &msg)
	}

	return body
}

func addSystemCacheBreakpointIfMissing(body []byte) ([]byte, bool) {
	system := gjson.GetBytes(body, "system")
	if !system.Exists() {
		return body, false
	}
	if system.Type == gjson.String {
		blockRaw := fmt.Sprintf(
			`[{"type":"text","text":%s,"cache_control":{"type":"ephemeral","ttl":%q}}]`,
			mustJSONString(system.String()), claude.DefaultCacheControlTTL,
		)
		if next, err := sjson.SetRawBytes(body, "system", []byte(blockRaw)); err == nil {
			return next, true
		}
		return body, false
	}
	if !system.IsArray() {
		return body, false
	}
	arr := system.Array()
	if len(arr) == 0 {
		return body, false
	}
	anchor := false
	for _, item := range arr {
		if item.Get("cache_control").Exists() {
			anchor = true
		}
	}
	if anchor {
		return body, true
	}
	for i := len(arr) - 1; i >= 0; i-- {
		item := arr[i]
		if !item.IsObject() || item.Get("type").String() == "thinking" || item.Get("type").String() == "redacted_thinking" {
			continue
		}
		if next, err := sjson.SetRawBytes(body, fmt.Sprintf("system.%d.cache_control", i), []byte(fmt.Sprintf(`{"type":"ephemeral","ttl":%q}`, claude.DefaultCacheControlTTL))); err == nil {
			return next, true
		}
		return body, false
	}
	return body, false
}

func addToolsCacheBreakpointIfMissing(body []byte) ([]byte, bool) {
	tools := gjson.GetBytes(body, "tools")
	if !tools.IsArray() {
		return body, false
	}
	arr := tools.Array()
	if len(arr) == 0 {
		return body, false
	}
	anchor := false
	for _, tool := range arr {
		if tool.Get("cache_control").Exists() {
			anchor = true
		}
	}
	if anchor {
		return body, true
	}
	next := applyToolsLastCacheBreakpoint(body)
	return next, gjson.GetBytes(next, fmt.Sprintf("tools.%d.cache_control", len(arr)-1)).Exists()
}

func stableMessageCacheBreakpointIndex(body []byte, hasStableAnchor bool) (int, bool) {
	messages := gjson.GetBytes(body, "messages")
	if !messages.IsArray() {
		return 0, false
	}
	arr := messages.Array()
	if len(arr) == 0 {
		return 0, false
	}
	for _, msg := range arr {
		if messageHasCacheControl(msg) && msg.Get("role").String() != "user" {
			return 0, false
		}
	}

	lastIdx := len(arr) - 1
	lastRole := arr[lastIdx].Get("role").String()
	if lastRole == "user" {
		for i := lastIdx - 1; i >= 0; i-- {
			if messageHasCacheControl(arr[i]) {
				return i, false
			}
			if messageCanCarryCacheControl(arr[i]) {
				return i, true
			}
		}
		if hasStableAnchor {
			return 0, false
		}
		return lastIdx, messageCanCarryCacheControl(arr[lastIdx])
	}

	for i := lastIdx; i >= 0; i-- {
		if messageHasCacheControl(arr[i]) {
			return i, false
		}
		if messageCanCarryCacheControl(arr[i]) {
			return i, true
		}
	}
	return 0, false
}

func messageHasCacheControl(msg gjson.Result) bool {
	content := msg.Get("content")
	if !content.IsArray() {
		return false
	}
	for _, block := range content.Array() {
		if block.Get("cache_control").Exists() {
			return true
		}
	}
	return false
}

func messageCanCarryCacheControl(msg gjson.Result) bool {
	content := msg.Get("content")
	if content.Type == gjson.String {
		return true
	}
	return content.IsArray() && len(content.Array()) > 0
}

func (s *GatewayService) isRewriteMessageCacheControlEnabled(ctx context.Context) bool {
	if s == nil {
		return false
	}
	if s.settingService != nil {
		return s.settingService.IsRewriteMessageCacheControlEnabled(ctx)
	}
	return false
}

// injectCacheControlOnLastContentBlock 把 cache_control 断点打在 messages[idx]
// 的最后一个 content block 上。若 content 是 string，先升级成单块 text 数组
// （对齐 Parrot _inject_cache_on_msg 的行为）。
//
// msg 是调用方已持有的 gjson.Result 快照，用于省一次 GetBytes。
func injectCacheControlOnLastContentBlock(body []byte, idx int, msg *gjson.Result) []byte {
	content := msg.Get("content")

	if content.Type == gjson.String {
		text := content.String()
		blockRaw := fmt.Sprintf(
			`[{"type":"text","text":%s,"cache_control":{"type":"ephemeral","ttl":%q}}]`,
			mustJSONString(text), claude.DefaultCacheControlTTL,
		)
		if next, err := sjson.SetRawBytes(body, fmt.Sprintf("messages.%d.content", idx), []byte(blockRaw)); err == nil {
			body = next
		}
		return body
	}

	if !content.IsArray() {
		return body
	}
	contentArr := content.Array()
	if len(contentArr) == 0 {
		return body
	}
	lastBlockIdx := len(contentArr) - 1
	lastBlock := contentArr[lastBlockIdx]

	if cc := lastBlock.Get("cache_control"); cc.Exists() && cc.Get("ttl").String() != "" {
		return body
	}

	pathPrefix := fmt.Sprintf("messages.%d.content.%d.cache_control", idx, lastBlockIdx)
	existingCC := lastBlock.Get("cache_control")
	if existingCC.Exists() {
		if next, err := sjson.SetBytes(body, pathPrefix+".ttl", claude.DefaultCacheControlTTL); err == nil {
			body = next
		}
		return body
	}
	raw := fmt.Sprintf(`{"type":"ephemeral","ttl":%q}`, claude.DefaultCacheControlTTL)
	if next, err := sjson.SetRawBytes(body, pathPrefix, []byte(raw)); err == nil {
		body = next
	}
	return body
}

// mustJSONString 把一个 Go string 序列化为合法 JSON string（含引号），
// 用于 sjson.SetRawBytes 场景下手工拼 JSON。
func mustJSONString(s string) string {
	return fmt.Sprintf("%q", s)
}
