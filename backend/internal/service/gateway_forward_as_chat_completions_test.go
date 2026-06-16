//go:build unit

package service

import (
	"io"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
	"time"

	"github.com/Wei-Shaw/sub2api/internal/config"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/require"
	"github.com/tidwall/gjson"
)

func TestExtractCCReasoningEffortFromBody(t *testing.T) {
	t.Parallel()

	t.Run("nested reasoning.effort", func(t *testing.T) {
		got := extractCCReasoningEffortFromBody([]byte(`{"reasoning":{"effort":"HIGH"}}`), "gpt-5.5-low")
		require.NotNil(t, got)
		require.Equal(t, "high", *got)
	})

	t.Run("flat reasoning_effort", func(t *testing.T) {
		got := extractCCReasoningEffortFromBody([]byte(`{"reasoning_effort":"x-high"}`), "")
		require.NotNil(t, got)
		require.Equal(t, "xhigh", *got)
	})

	t.Run("codex model_reasoning_effort", func(t *testing.T) {
		got := extractCCReasoningEffortFromBody([]byte(`{"model":"gpt-5.","model_reasoning_effort":"high"}`), "gpt-5.")
		require.NotNil(t, got)
		require.Equal(t, "high", *got)
	})

	t.Run("derive from gpt-5.5 model suffix", func(t *testing.T) {
		got := extractCCReasoningEffortFromBody([]byte(`{"model":"gpt-5.5-high"}`), "gpt-5.5-high")
		require.NotNil(t, got)
		require.Equal(t, "high", *got)
	})

	t.Run("derive from gpt-5.5-pro model suffix", func(t *testing.T) {
		got := extractCCReasoningEffortFromBody([]byte(`{"model":"gpt-5.5-pro-xhigh"}`), "gpt-5.5-pro-xhigh")
		require.NotNil(t, got)
		require.Equal(t, "xhigh", *got)
	})

	t.Run("DeepSeek max", func(t *testing.T) {
		got := extractCCReasoningEffortFromBody([]byte(`{"reasoning_effort":"Max"}`))
		require.NotNil(t, got)
		require.Equal(t, "xhigh", *got)
	})

	t.Run("missing effort", func(t *testing.T) {
		require.Nil(t, extractCCReasoningEffortFromBody([]byte(`{"model":"gpt-5"}`), "gpt-5"))
	})
}

func TestHandleCCBufferedFromAnthropic_PreservesMessageStartCacheUsageAndReasoning(t *testing.T) {
	t.Parallel()
	gin.SetMode(gin.TestMode)

	rec := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(rec)

	reasoningEffort := "high"
	resp := &http.Response{
		Header: http.Header{"x-request-id": []string{"rid_cc_buffered"}},
		Body: io.NopCloser(strings.NewReader(strings.Join([]string{
			`event: message_start`,
			`data: {"type":"message_start","message":{"id":"msg_1","type":"message","role":"assistant","content":[],"model":"claude-sonnet-4.5","stop_reason":"","usage":{"input_tokens":12,"cache_read_input_tokens":0,"cached_tokens":9,"cache_creation_input_tokens":0,"cache_creation":{"ephemeral_5m_input_tokens":1,"ephemeral_1h_input_tokens":2}}}}`,
			``,
			`event: content_block_start`,
			`data: {"type":"content_block_start","index":0,"content_block":{"type":"text","text":"hello"}}`,
			``,
			`event: message_delta`,
			`data: {"type":"message_delta","delta":{"stop_reason":"end_turn"},"usage":{"output_tokens":7}}`,
			``,
		}, "\n"))),
	}

	svc := &GatewayService{}
	result, err := svc.handleCCBufferedFromAnthropic(resp, c, "gpt-5", "claude-sonnet-4.5", &reasoningEffort, time.Now())
	require.NoError(t, err)
	require.NotNil(t, result)
	require.Equal(t, 12, result.Usage.InputTokens)
	require.Equal(t, 7, result.Usage.OutputTokens)
	require.Equal(t, 9, result.Usage.CacheReadInputTokens)
	require.Equal(t, 3, result.Usage.CacheCreationInputTokens)
	require.Equal(t, 1, result.Usage.CacheCreation5mTokens)
	require.Equal(t, 2, result.Usage.CacheCreation1hTokens)
	require.NotNil(t, result.ReasoningEffort)
	require.Equal(t, "high", *result.ReasoningEffort)
}

func TestHandleCCStreamingFromAnthropic_PreservesMessageStartCacheUsageAndReasoning(t *testing.T) {
	t.Parallel()
	gin.SetMode(gin.TestMode)

	rec := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(rec)

	reasoningEffort := "medium"
	resp := &http.Response{
		Header: http.Header{"x-request-id": []string{"rid_cc_stream"}},
		Body: io.NopCloser(strings.NewReader(strings.Join([]string{
			`event: message_start`,
			`data: {"type":"message_start","message":{"id":"msg_2","type":"message","role":"assistant","content":[],"model":"claude-sonnet-4.5","stop_reason":"","usage":{"input_tokens":20,"cache_read_input_tokens":0,"cached_tokens":11,"cache_creation_input_tokens":0,"cache_creation":{"ephemeral_5m_input_tokens":3,"ephemeral_1h_input_tokens":1}}}}`,
			``,
			`event: content_block_start`,
			`data: {"type":"content_block_start","index":0,"content_block":{"type":"text","text":"hello"}}`,
			``,
			`event: message_delta`,
			`data: {"type":"message_delta","delta":{"stop_reason":"end_turn"},"usage":{"output_tokens":8}}`,
			``,
			`event: message_stop`,
			`data: {"type":"message_stop"}`,
			``,
		}, "\n"))),
	}

	svc := &GatewayService{}
	result, err := svc.handleCCStreamingFromAnthropic(resp, c, "gpt-5", "claude-sonnet-4.5", &reasoningEffort, time.Now(), true)
	require.NoError(t, err)
	require.NotNil(t, result)
	require.Equal(t, 20, result.Usage.InputTokens)
	require.Equal(t, 8, result.Usage.OutputTokens)
	require.Equal(t, 11, result.Usage.CacheReadInputTokens)
	require.Equal(t, 4, result.Usage.CacheCreationInputTokens)
	require.Equal(t, 3, result.Usage.CacheCreation5mTokens)
	require.Equal(t, 1, result.Usage.CacheCreation1hTokens)
	require.NotNil(t, result.ReasoningEffort)
	require.Equal(t, "medium", *result.ReasoningEffort)
	require.Contains(t, rec.Body.String(), `[DONE]`)
}

func TestHandleCCNonStreamingFromAnthropic_PreservesCacheUsageFallbacks(t *testing.T) {
	t.Parallel()
	gin.SetMode(gin.TestMode)

	rec := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(rec)

	reasoningEffort := "high"
	resp := &http.Response{
		Header: http.Header{"x-request-id": []string{"rid_cc_json"}},
		Body: io.NopCloser(strings.NewReader(`{
			"id":"msg_json",
			"type":"message",
			"role":"assistant",
			"model":"claude-sonnet-4.5",
			"content":[{"type":"text","text":"ok"}],
			"stop_reason":"end_turn",
			"usage":{
				"input_tokens":21,
				"output_tokens":5,
				"cache_read_input_tokens":0,
				"cached_tokens":13,
				"cache_creation_input_tokens":0,
				"cache_creation":{"ephemeral_5m_input_tokens":2,"ephemeral_1h_input_tokens":3}
			}
		}`)),
	}

	svc := &GatewayService{}
	result, err := svc.handleCCNonStreamingFromAnthropic(resp, c, "gpt-5", "claude-sonnet-4.5", &reasoningEffort, time.Now())
	require.NoError(t, err)
	require.NotNil(t, result)
	require.False(t, result.Stream)
	require.Equal(t, 21, result.Usage.InputTokens)
	require.Equal(t, 5, result.Usage.OutputTokens)
	require.Equal(t, 13, result.Usage.CacheReadInputTokens)
	require.Equal(t, 5, result.Usage.CacheCreationInputTokens)
	require.Equal(t, 2, result.Usage.CacheCreation5mTokens)
	require.Equal(t, 3, result.Usage.CacheCreation1hTokens)
	require.NotNil(t, result.ReasoningEffort)
	require.Equal(t, "high", *result.ReasoningEffort)
}

func TestForwardAsChatCompletions_AnthropicAPIKey_PromotesStringSystemToStableCacheAnchor(t *testing.T) {
	t.Parallel()
	gin.SetMode(gin.TestMode)

	rec := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(rec)
	c.Request = httptest.NewRequest(http.MethodPost, "/v1/chat/completions", nil)

	body := []byte(`{
		"model":"claude-opus-4-7",
		"messages":[
			{"role":"system","content":"stable system prompt"},
			{"role":"user","content":"dynamic current task"}
		],
		"stream":false
	}`)

	upstreamSSE := strings.Join([]string{
		`event: message_start`,
		`data: {"type":"message_start","message":{"id":"msg_1","type":"message","role":"assistant","model":"claude-opus-4-7","content":[],"usage":{"input_tokens":12}}}`,
		"",
		`event: content_block_start`,
		`data: {"type":"content_block_start","index":0,"content_block":{"type":"text","text":"ok"}}`,
		"",
		`event: message_delta`,
		`data: {"type":"message_delta","delta":{"stop_reason":"end_turn"},"usage":{"output_tokens":7}}`,
		"",
		`event: message_stop`,
		`data: {"type":"message_stop"}`,
		"",
	}, "\n")
	upstream := &anthropicHTTPUpstreamRecorder{
		resp: &http.Response{
			StatusCode: http.StatusOK,
			Header: http.Header{
				"Content-Type": []string{"text/event-stream"},
				"x-request-id": []string{"rid-cc-system-string-cache"},
			},
			Body: io.NopCloser(strings.NewReader(upstreamSSE)),
		},
	}

	svc := &GatewayService{
		cfg:              &config.Config{},
		httpUpstream:     upstream,
		rateLimitService: &RateLimitService{},
		settingService: NewSettingService(&gatewayTTLSettingRepo{data: map[string]string{
			SettingKeyRewriteMessageCacheControl: "false",
		}}, &config.Config{}),
		tlsFPProfileService: &TLSFingerprintProfileService{},
	}

	result, err := svc.ForwardAsChatCompletions(t.Context(), c, newAnthropicAPIKeyAccountForTest(), body, nil)
	require.NoError(t, err)
	require.NotNil(t, result)
	require.False(t, gjson.GetBytes(upstream.lastBody, "stream").Bool())
	require.True(t, gjson.GetBytes(upstream.lastBody, "system").IsArray())
	require.Equal(t, "stable system prompt", gjson.GetBytes(upstream.lastBody, "system.0.text").String())
	require.Equal(t, "ephemeral", gjson.GetBytes(upstream.lastBody, "system.0.cache_control.type").String())
	require.Equal(t, "5m", gjson.GetBytes(upstream.lastBody, "system.0.cache_control.ttl").String())
}
