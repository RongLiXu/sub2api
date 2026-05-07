package service

import (
	"sort"
	"strings"
)

// PublicModelCatalogItem 是公开模型广场的标准价聚合条目。
// 数据直接来自全局 PricingService，不叠加用户/渠道/分组维度。
type PublicModelCatalogItem struct {
	Name                    string                    `json:"name"`
	Platform                string                    `json:"platform"`
	Provider                string                    `json:"provider"`
	Mode                    string                    `json:"mode"`
	InputPrice              float64                   `json:"input_price"`
	OutputPrice             float64                   `json:"output_price"`
	CacheWritePrice         float64                   `json:"cache_write_price"`
	CacheReadPrice          float64                   `json:"cache_read_price"`
	ImageOutputPrice        float64                   `json:"image_output_price"`
	PerImagePrice           float64                   `json:"per_image_price"`
	MaxInputTokens          int                       `json:"max_input_tokens"`
	MaxOutputTokens         int                       `json:"max_output_tokens"`
	MaxTokens               int                       `json:"max_tokens"`
	SupportsPromptCaching   bool                      `json:"supports_prompt_caching"`
	SupportsServiceTier     bool                      `json:"supports_service_tier"`
	SupportsFunctionCalling bool                      `json:"supports_function_calling"`
	SupportsVision          bool                      `json:"supports_vision"`
	TokenPricingTiers       []LiteLLMTokenPricingTier `json:"token_pricing_tiers,omitempty"`
}

// ModelCatalogService 提供公开模型目录聚合能力。
type ModelCatalogService struct {
	pricingService *PricingService
}

// NewModelCatalogService 创建公开模型目录服务。
func NewModelCatalogService(pricingService *PricingService) *ModelCatalogService {
	return &ModelCatalogService{pricingService: pricingService}
}

// ListPublicModels 列出标准模型价目表。
// 结果不依赖登录态，也不叠加渠道售价，只展示全局标准价。
func (s *ModelCatalogService) ListPublicModels() []PublicModelCatalogItem {
	if s == nil || s.pricingService == nil {
		return nil
	}

	s.pricingService.mu.RLock()
	defer s.pricingService.mu.RUnlock()

	out := make([]PublicModelCatalogItem, 0, len(s.pricingService.pricingData))
	for name, pricing := range s.pricingService.pricingData {
		if pricing == nil {
			continue
		}
		item := PublicModelCatalogItem{
			Name:                    name,
			Platform:                normalizePublicModelPlatform(pricing.LiteLLMProvider, name),
			Provider:                pricing.LiteLLMProvider,
			Mode:                    pricing.Mode,
			InputPrice:              pricing.InputCostPerToken,
			OutputPrice:             pricing.OutputCostPerToken,
			CacheWritePrice:         pricing.CacheCreationInputTokenCost,
			CacheReadPrice:          pricing.CacheReadInputTokenCost,
			ImageOutputPrice:        pricing.OutputCostPerImageToken,
			PerImagePrice:           pricing.OutputCostPerImage,
			MaxInputTokens:          pricing.MaxInputTokens,
			MaxOutputTokens:         pricing.MaxOutputTokens,
			MaxTokens:               pricing.MaxTokens,
			SupportsPromptCaching:   pricing.SupportsPromptCaching,
			SupportsServiceTier:     pricing.SupportsServiceTier,
			SupportsFunctionCalling: pricing.SupportsFunctionCalling,
			SupportsVision:          pricing.SupportsVision,
		}
		if len(pricing.TokenPricingTiers) > 0 {
			item.TokenPricingTiers = append([]LiteLLMTokenPricingTier(nil), pricing.TokenPricingTiers...)
		}
		out = append(out, item)
	}

	sort.SliceStable(out, func(i, j int) bool {
		leftPlatform := strings.ToLower(out[i].Platform)
		rightPlatform := strings.ToLower(out[j].Platform)
		if leftPlatform != rightPlatform {
			return leftPlatform < rightPlatform
		}
		leftProvider := strings.ToLower(out[i].Provider)
		rightProvider := strings.ToLower(out[j].Provider)
		if leftProvider != rightProvider {
			return leftProvider < rightProvider
		}
		return strings.ToLower(out[i].Name) < strings.ToLower(out[j].Name)
	})

	return out
}

func normalizePublicModelPlatform(provider, model string) string {
	providerLower := strings.ToLower(strings.TrimSpace(provider))
	modelLower := strings.ToLower(strings.TrimSpace(model))

	switch {
	case strings.Contains(providerLower, "anthropic"), strings.Contains(modelLower, "claude"):
		return "anthropic"
	case strings.Contains(providerLower, "openai"),
		strings.Contains(providerLower, "azure"),
		strings.HasPrefix(modelLower, "gpt-"),
		strings.HasPrefix(modelLower, "o1"),
		strings.HasPrefix(modelLower, "o3"),
		strings.HasPrefix(modelLower, "o4"):
		return "openai"
	case strings.Contains(providerLower, "gemini"),
		strings.Contains(providerLower, "vertex"),
		strings.Contains(providerLower, "google"),
		strings.HasPrefix(modelLower, "gemini"):
		return "gemini"
	case strings.Contains(providerLower, "antigravity"):
		return "antigravity"
	default:
		return providerLower
	}
}
