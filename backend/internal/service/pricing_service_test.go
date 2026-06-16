package service

import (
	"encoding/json"
	"os"
	"path/filepath"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestParsePricingData_ParsesPriorityAndServiceTierFields(t *testing.T) {
	svc := &PricingService{}
	body := []byte(`{
		"gpt-5.4": {
			"input_cost_per_token": 0.0000025,
			"input_cost_per_token_priority": 0.000005,
			"input_cost_per_token_flex": 0.00000125,
			"output_cost_per_token": 0.000015,
			"output_cost_per_token_priority": 0.00003,
			"output_cost_per_token_flex": 0.0000075,
			"cache_creation_input_token_cost": 0.0000025,
			"cache_read_input_token_cost": 0.00000025,
			"cache_read_input_token_cost_priority": 0.0000005,
			"cache_read_input_token_cost_flex": 0.000000125,
			"supports_service_tier": true,
			"supports_prompt_caching": true,
			"litellm_provider": "openai",
			"mode": "chat"
		}
	}`)

	data, err := svc.parsePricingData(body)
	require.NoError(t, err)
	pricing := data["gpt-5.4"]
	require.NotNil(t, pricing)
	require.InDelta(t, 5e-6, pricing.InputCostPerTokenPriority, 1e-12)
	require.InDelta(t, 1.25e-6, pricing.InputCostPerTokenFlex, 1e-12)
	require.InDelta(t, 3e-5, pricing.OutputCostPerTokenPriority, 1e-12)
	require.InDelta(t, 7.5e-6, pricing.OutputCostPerTokenFlex, 1e-12)
	require.InDelta(t, 5e-7, pricing.CacheReadInputTokenCostPriority, 1e-12)
	require.InDelta(t, 1.25e-7, pricing.CacheReadInputTokenCostFlex, 1e-12)
	require.True(t, pricing.SupportsServiceTier)
}

func TestGetModelPricing_Gpt53CodexSparkUsesGpt51CodexPricing(t *testing.T) {
	sparkPricing := &LiteLLMModelPricing{InputCostPerToken: 1}
	gpt53Pricing := &LiteLLMModelPricing{InputCostPerToken: 9}

	svc := &PricingService{
		pricingData: map[string]*LiteLLMModelPricing{
			"gpt-5.1-codex": sparkPricing,
			"gpt-5.3":       gpt53Pricing,
		},
	}

	got := svc.GetModelPricing("gpt-5.3-codex-spark")
	require.Same(t, sparkPricing, got)
}

func TestGetModelPricing_Gpt53CodexFallbackStillUsesGpt52Codex(t *testing.T) {
	gpt52CodexPricing := &LiteLLMModelPricing{InputCostPerToken: 2}

	svc := &PricingService{
		pricingData: map[string]*LiteLLMModelPricing{
			"gpt-5.2-codex": gpt52CodexPricing,
		},
	}

	got := svc.GetModelPricing("gpt-5.3-codex")
	require.Same(t, gpt52CodexPricing, got)
}

func TestGetModelPricing_OpenAIFallbackMatchedLoggedAsInfo(t *testing.T) {
	logSink, restore := captureStructuredLog(t)
	defer restore()

	gpt52CodexPricing := &LiteLLMModelPricing{InputCostPerToken: 2}
	svc := &PricingService{
		pricingData: map[string]*LiteLLMModelPricing{
			"gpt-5.2-codex": gpt52CodexPricing,
		},
	}

	got := svc.GetModelPricing("gpt-5.3-codex")
	require.Same(t, gpt52CodexPricing, got)

	require.True(t, logSink.ContainsMessageAtLevel("[Pricing] OpenAI fallback matched gpt-5.3-codex -> gpt-5.2-codex", "info"))
	require.False(t, logSink.ContainsMessageAtLevel("[Pricing] OpenAI fallback matched gpt-5.3-codex -> gpt-5.2-codex", "warn"))
}

func TestGetModelPricing_Gpt54UsesStaticFallbackWhenRemoteMissing(t *testing.T) {
	svc := &PricingService{
		pricingData: map[string]*LiteLLMModelPricing{
			"gpt-5.1-codex": &LiteLLMModelPricing{InputCostPerToken: 1.25e-6},
		},
	}

	got := svc.GetModelPricing("gpt-5.4")
	require.NotNil(t, got)
	require.InDelta(t, 2.5e-6, got.InputCostPerToken, 1e-12)
	require.InDelta(t, 1.5e-5, got.OutputCostPerToken, 1e-12)
	require.InDelta(t, 2.5e-7, got.CacheReadInputTokenCost, 1e-12)
	require.Equal(t, 272000, got.LongContextInputTokenThreshold)
	require.InDelta(t, 2.0, got.LongContextInputCostMultiplier, 1e-12)
	require.InDelta(t, 1.5, got.LongContextOutputCostMultiplier, 1e-12)
}

func TestGetModelPricing_Gpt55UsesDedicatedStaticFallbackWhenRemoteMissing(t *testing.T) {
	svc := &PricingService{
		pricingData: map[string]*LiteLLMModelPricing{
			"gpt-5.1-codex": {InputCostPerToken: 1.25e-6},
		},
	}

	got := svc.GetModelPricing("gpt-5.5")
	require.NotNil(t, got)
	require.InDelta(t, 5e-6, got.InputCostPerToken, 1e-12)
	require.InDelta(t, 12.5e-6, got.InputCostPerTokenPriority, 1e-12)
	require.InDelta(t, 2.5e-6, got.InputCostPerTokenFlex, 1e-12)
	require.InDelta(t, 30e-6, got.OutputCostPerToken, 1e-12)
	require.InDelta(t, 75e-6, got.OutputCostPerTokenPriority, 1e-12)
	require.InDelta(t, 15e-6, got.OutputCostPerTokenFlex, 1e-12)
	require.InDelta(t, 0.5e-6, got.CacheReadInputTokenCost, 1e-12)
	require.InDelta(t, 1.25e-6, got.CacheReadInputTokenCostPriority, 1e-12)
	require.InDelta(t, 0.25e-6, got.CacheReadInputTokenCostFlex, 1e-12)
	require.Equal(t, 272000, got.LongContextInputTokenThreshold)
	require.True(t, got.SupportsServiceTier)
}

func TestGetModelPricing_Gpt55ProUsesDedicatedStaticFallbackWhenRemoteMissing(t *testing.T) {
	svc := &PricingService{
		pricingData: map[string]*LiteLLMModelPricing{
			"gpt-5.1-codex": {InputCostPerToken: 1.25e-6},
		},
	}

	got := svc.GetModelPricing("gpt-5.5-pro")
	require.NotNil(t, got)
	require.InDelta(t, 30e-6, got.InputCostPerToken, 1e-12)
	require.Zero(t, got.InputCostPerTokenPriority)
	require.InDelta(t, 180e-6, got.OutputCostPerToken, 1e-12)
	require.Zero(t, got.OutputCostPerTokenPriority)
	require.InDelta(t, 15e-6, got.InputCostPerTokenFlex, 1e-12)
	require.InDelta(t, 90e-6, got.OutputCostPerTokenFlex, 1e-12)
	require.Zero(t, got.CacheReadInputTokenCost)
	require.Zero(t, got.CacheReadInputTokenCostPriority)
	require.Equal(t, 272000, got.LongContextInputTokenThreshold)
}

func TestGetModelPricing_Gpt54ProUsesDedicatedStaticFallbackWhenRemoteMissing(t *testing.T) {
	svc := &PricingService{
		pricingData: map[string]*LiteLLMModelPricing{
			"gpt-5.4": {InputCostPerToken: 2.5e-6},
		},
	}

	for _, model := range []string{"gpt-5.4-pro", "gpt-5.4-pro-2026-03-05"} {
		t.Run(model, func(t *testing.T) {
			got := svc.GetModelPricing(model)
			require.NotNil(t, got)
			require.InDelta(t, 30e-6, got.InputCostPerToken, 1e-12)
			require.Zero(t, got.InputCostPerTokenPriority)
			require.InDelta(t, 15e-6, got.InputCostPerTokenFlex, 1e-12)
			require.InDelta(t, 180e-6, got.OutputCostPerToken, 1e-12)
			require.Zero(t, got.OutputCostPerTokenPriority)
			require.InDelta(t, 90e-6, got.OutputCostPerTokenFlex, 1e-12)
			require.Zero(t, got.CacheReadInputTokenCost)
			require.Equal(t, 272000, got.LongContextInputTokenThreshold)
			require.InDelta(t, 2.0, got.LongContextInputCostMultiplier, 1e-12)
			require.InDelta(t, 1.5, got.LongContextOutputCostMultiplier, 1e-12)
		})
	}
}

func TestDefaultPricingIncludesCodexAutoReview(t *testing.T) {
	data, err := os.ReadFile(filepath.Join("..", "..", "resources", "model-pricing", "model_prices_and_context_window.json"))
	require.NoError(t, err)

	svc := &PricingService{}
	pricingData, err := svc.parsePricingData(data)
	require.NoError(t, err)
	svc.pricingData = pricingData

	got := svc.GetModelPricing("codex-auto-review")
	require.NotNil(t, got)
	require.InDelta(t, 5e-6, got.InputCostPerToken, 1e-12)
	require.InDelta(t, 3e-5, got.OutputCostPerToken, 1e-12)
	require.InDelta(t, 5e-7, got.CacheReadInputTokenCost, 1e-12)
}

func TestGetModelPricing_Gpt54MiniUsesDedicatedStaticFallbackWhenRemoteMissing(t *testing.T) {
	svc := &PricingService{
		pricingData: map[string]*LiteLLMModelPricing{
			"gpt-5.1-codex": {InputCostPerToken: 1.25e-6},
		},
	}

	got := svc.GetModelPricing("gpt-5.4-mini")
	require.NotNil(t, got)
	require.InDelta(t, 7.5e-7, got.InputCostPerToken, 1e-12)
	require.InDelta(t, 1.5e-6, got.InputCostPerTokenPriority, 1e-12)
	require.InDelta(t, 3.75e-7, got.InputCostPerTokenFlex, 1e-12)
	require.InDelta(t, 4.5e-6, got.OutputCostPerToken, 1e-12)
	require.InDelta(t, 9e-6, got.OutputCostPerTokenPriority, 1e-12)
	require.InDelta(t, 2.25e-6, got.OutputCostPerTokenFlex, 1e-12)
	require.InDelta(t, 7.5e-8, got.CacheReadInputTokenCost, 1e-12)
	require.InDelta(t, 1.5e-7, got.CacheReadInputTokenCostPriority, 1e-12)
	require.InDelta(t, 3.75e-8, got.CacheReadInputTokenCostFlex, 1e-12)
	require.Zero(t, got.LongContextInputTokenThreshold)
}

func TestGetModelPricing_Gpt54NanoUsesDedicatedStaticFallbackWhenRemoteMissing(t *testing.T) {
	svc := &PricingService{
		pricingData: map[string]*LiteLLMModelPricing{
			"gpt-5.1-codex": {InputCostPerToken: 1.25e-6},
		},
	}

	got := svc.GetModelPricing("gpt-5.4-nano")
	require.NotNil(t, got)
	require.InDelta(t, 2e-7, got.InputCostPerToken, 1e-12)
	require.InDelta(t, 1.25e-6, got.OutputCostPerToken, 1e-12)
	require.InDelta(t, 2e-8, got.CacheReadInputTokenCost, 1e-12)
	require.Zero(t, got.LongContextInputTokenThreshold)
}

func TestGetModelPricing_ImageModelDoesNotFallbackToTextModel(t *testing.T) {
	imagePricing := &LiteLLMModelPricing{InputCostPerToken: 3}
	textPricing := &LiteLLMModelPricing{InputCostPerToken: 9}

	svc := &PricingService{
		pricingData: map[string]*LiteLLMModelPricing{
			"gpt-image-2": imagePricing,
			"gpt-5.4":     textPricing,
		},
	}

	got := svc.GetModelPricing("gpt-image-3")
	require.Same(t, imagePricing, got)
}

func TestDefaultPricingIncludesGemini35FlashOfficialPricing(t *testing.T) {
	data, err := os.ReadFile(filepath.Join("..", "..", "resources", "model-pricing", "model_prices_and_context_window.json"))
	require.NoError(t, err)

	svc := &PricingService{}
	pricingData, err := svc.parsePricingData(data)
	require.NoError(t, err)

	pricing := pricingData["gemini-3.5-flash"]
	require.NotNil(t, pricing)
	require.InDelta(t, 1.5e-6, pricing.InputCostPerToken, 1e-12)
	require.InDelta(t, 2.7e-6, pricing.InputCostPerTokenPriority, 1e-12)
	require.InDelta(t, 7.5e-7, pricing.InputCostPerTokenFlex, 1e-12)
	require.InDelta(t, 7.5e-6, pricing.OutputCostPerToken, 1e-12)
	require.InDelta(t, 13.5e-6, pricing.OutputCostPerTokenPriority, 1e-12)
	require.InDelta(t, 3.75e-6, pricing.OutputCostPerTokenFlex, 1e-12)
	require.InDelta(t, 2.5e-7, pricing.CacheReadInputTokenCost, 1e-12)
	require.InDelta(t, 4.5e-7, pricing.CacheReadInputTokenCostPriority, 1e-12)
	require.InDelta(t, 1.25e-7, pricing.CacheReadInputTokenCostFlex, 1e-12)
	require.True(t, pricing.SupportsServiceTier)
	require.Equal(t, 1048576, pricing.MaxInputTokens)
	require.Equal(t, 65536, pricing.MaxOutputTokens)
}

func TestDefaultPricingIncludesGemini31FlashLiteOfficialPricing(t *testing.T) {
	data, err := os.ReadFile(filepath.Join("..", "..", "resources", "model-pricing", "model_prices_and_context_window.json"))
	require.NoError(t, err)

	svc := &PricingService{}
	pricingData, err := svc.parsePricingData(data)
	require.NoError(t, err)

	pricing := pricingData["gemini-3.1-flash-lite"]
	require.NotNil(t, pricing)
	require.InDelta(t, 3e-7, pricing.InputCostPerToken, 1e-12)
	require.InDelta(t, 5.4e-7, pricing.InputCostPerTokenPriority, 1e-12)
	require.InDelta(t, 1.5e-7, pricing.InputCostPerTokenFlex, 1e-12)
	require.InDelta(t, 2.5e-6, pricing.OutputCostPerToken, 1e-12)
	require.InDelta(t, 4.5e-6, pricing.OutputCostPerTokenPriority, 1e-12)
	require.InDelta(t, 1.25e-6, pricing.OutputCostPerTokenFlex, 1e-12)
	require.InDelta(t, 2.5e-8, pricing.CacheReadInputTokenCost, 1e-12)
	require.InDelta(t, 4.5e-8, pricing.CacheReadInputTokenCostPriority, 1e-12)
	require.InDelta(t, 1.25e-8, pricing.CacheReadInputTokenCostFlex, 1e-12)
	require.True(t, pricing.SupportsServiceTier)
	require.Equal(t, 1048576, pricing.MaxInputTokens)
	require.Equal(t, 65536, pricing.MaxOutputTokens)
}

func TestParsePricingData_PreservesPriorityAndServiceTierFields(t *testing.T) {
	raw := map[string]any{
		"gpt-5.4": map[string]any{
			"input_cost_per_token":                 2.5e-6,
			"input_cost_per_token_priority":        5e-6,
			"output_cost_per_token":                15e-6,
			"output_cost_per_token_priority":       30e-6,
			"cache_read_input_token_cost":          0.25e-6,
			"cache_read_input_token_cost_priority": 0.5e-6,
			"supports_service_tier":                true,
			"supports_prompt_caching":              true,
			"litellm_provider":                     "openai",
			"mode":                                 "chat",
		},
	}
	body, err := json.Marshal(raw)
	require.NoError(t, err)

	svc := &PricingService{}
	pricingMap, err := svc.parsePricingData(body)
	require.NoError(t, err)

	pricing := pricingMap["gpt-5.4"]
	require.NotNil(t, pricing)
	require.InDelta(t, 2.5e-6, pricing.InputCostPerToken, 1e-12)
	require.InDelta(t, 5e-6, pricing.InputCostPerTokenPriority, 1e-12)
	require.InDelta(t, 15e-6, pricing.OutputCostPerToken, 1e-12)
	require.InDelta(t, 30e-6, pricing.OutputCostPerTokenPriority, 1e-12)
	require.InDelta(t, 0.25e-6, pricing.CacheReadInputTokenCost, 1e-12)
	require.InDelta(t, 0.5e-6, pricing.CacheReadInputTokenCostPriority, 1e-12)
	require.True(t, pricing.SupportsServiceTier)
}

func TestParsePricingData_PreservesServiceTierPriorityFields(t *testing.T) {
	svc := &PricingService{}
	pricingData, err := svc.parsePricingData([]byte(`{
		"gpt-5.4": {
			"input_cost_per_token": 0.0000025,
			"input_cost_per_token_priority": 0.000005,
			"output_cost_per_token": 0.000015,
			"output_cost_per_token_priority": 0.00003,
			"cache_read_input_token_cost": 0.00000025,
			"cache_read_input_token_cost_priority": 0.0000005,
			"supports_service_tier": true,
			"litellm_provider": "openai",
			"mode": "chat"
		}
	}`))
	require.NoError(t, err)

	pricing := pricingData["gpt-5.4"]
	require.NotNil(t, pricing)
	require.InDelta(t, 0.0000025, pricing.InputCostPerToken, 1e-12)
	require.InDelta(t, 0.000005, pricing.InputCostPerTokenPriority, 1e-12)
	require.InDelta(t, 0.000015, pricing.OutputCostPerToken, 1e-12)
	require.InDelta(t, 0.00003, pricing.OutputCostPerTokenPriority, 1e-12)
	require.InDelta(t, 0.00000025, pricing.CacheReadInputTokenCost, 1e-12)
	require.InDelta(t, 0.0000005, pricing.CacheReadInputTokenCostPriority, 1e-12)
	require.True(t, pricing.SupportsServiceTier)
}

func TestParsePricingData_PreservesLongContextMultiplierFields(t *testing.T) {
	svc := &PricingService{}
	pricingData, err := svc.parsePricingData([]byte(`{
		"mimo-v2.5-pro": {
			"input_cost_per_token": 0.000001,
			"output_cost_per_token": 0.000003,
			"cache_read_input_token_cost": 0.0000002,
			"long_context_input_token_threshold": 262144,
			"long_context_input_cost_multiplier": 2,
			"long_context_output_cost_multiplier": 2,
			"supports_prompt_caching": true,
			"litellm_provider": "openai",
			"mode": "chat"
		}
	}`))
	require.NoError(t, err)

	pricing := pricingData["mimo-v2.5-pro"]
	require.NotNil(t, pricing)
	require.Equal(t, 262144, pricing.LongContextInputTokenThreshold)
	require.InDelta(t, 2.0, pricing.LongContextInputCostMultiplier, 1e-12)
	require.InDelta(t, 2.0, pricing.LongContextOutputCostMultiplier, 1e-12)
}

func TestParsePricingData_PreservesTokenPricingTiers(t *testing.T) {
	svc := &PricingService{}
	pricingData, err := svc.parsePricingData([]byte(`{
		"glm-4.7": {
			"input_cost_per_token": 0.000002,
			"output_cost_per_token": 0.000008,
			"cache_read_input_token_cost": 0.0000004,
			"litellm_provider": "zhipu",
			"mode": "chat",
			"token_pricing_tiers": [
				{
					"max_input_tokens": 32000,
					"max_output_tokens": 200,
					"input_cost_per_token": 0.000002,
					"output_cost_per_token": 0.000008,
					"cache_read_input_token_cost": 0.0000004
				},
				{
					"min_input_tokens": 32000,
					"max_input_tokens": 200000,
					"input_cost_per_token": 0.000004,
					"output_cost_per_token": 0.000016,
					"cache_read_input_token_cost": 0.0000008
				}
			]
		}
	}`))
	require.NoError(t, err)

	pricing := pricingData["glm-4.7"]
	require.NotNil(t, pricing)
	require.Len(t, pricing.TokenPricingTiers, 2)
	require.Equal(t, 32000, pricing.TokenPricingTiers[0].MaxInputTokens)
	require.Equal(t, 200, pricing.TokenPricingTiers[0].MaxOutputTokens)
	require.InDelta(t, 4e-6, pricing.TokenPricingTiers[1].InputCostPerToken, 1e-12)
	require.InDelta(t, 16e-6, pricing.TokenPricingTiers[1].OutputCostPerToken, 1e-12)
}

func TestBundledPricing_DeepSeekV4UsesOfficialListPrices(t *testing.T) {
	body, err := os.ReadFile("../../resources/model-pricing/model_prices_and_context_window.json")
	require.NoError(t, err)

	svc := &PricingService{}
	pricingData, err := svc.parsePricingData(body)
	require.NoError(t, err)

	flash := pricingData["deepseek-v4-flash"]
	require.NotNil(t, flash)
	require.InDelta(t, 2.8e-8, flash.CacheReadInputTokenCost, 1e-12) // $0.028 / 1M tokens launch list price
	require.InDelta(t, 1.4e-7, flash.InputCostPerToken, 1e-12)       // $0.14 / 1M tokens
	require.InDelta(t, 2.8e-7, flash.OutputCostPerToken, 1e-12)      // $0.28 / 1M tokens

	pro := pricingData["deepseek-v4-pro"]
	require.NotNil(t, pro)
	require.InDelta(t, 1.45e-8, pro.CacheReadInputTokenCost, 1e-12) // $0.0145 / 1M tokens list price
	require.InDelta(t, 1.74e-6, pro.InputCostPerToken, 1e-12)       // $1.74 / 1M tokens
	require.InDelta(t, 3.48e-6, pro.OutputCostPerToken, 1e-12)      // $3.48 / 1M tokens
}

func TestBundledPricing_ClaudeLatestUsesOfficialListPrices(t *testing.T) {
	body, err := os.ReadFile("../../resources/model-pricing/model_prices_and_context_window.json")
	require.NoError(t, err)

	svc := &PricingService{}
	pricingData, err := svc.parsePricingData(body)
	require.NoError(t, err)

	opus47 := pricingData["claude-opus-4-7"]
	require.NotNil(t, opus47)
	require.InDelta(t, 5e-6, opus47.InputCostPerToken, 1e-12)              // $5 / 1M tokens
	require.InDelta(t, 25e-6, opus47.OutputCostPerToken, 1e-12)            // $25 / 1M tokens
	require.InDelta(t, 0.5e-6, opus47.CacheReadInputTokenCost, 1e-12)      // $0.50 / 1M tokens
	require.InDelta(t, 6.25e-6, opus47.CacheCreationInputTokenCost, 1e-12) // $6.25 / 1M tokens
	require.InDelta(t, 10e-6, opus47.CacheCreationInputTokenCostAbove1hr, 1e-12)

	sonnet46 := pricingData["claude-sonnet-4-6"]
	require.NotNil(t, sonnet46)
	require.InDelta(t, 3e-6, sonnet46.InputCostPerToken, 1e-12)         // $3 / 1M tokens
	require.InDelta(t, 15e-6, sonnet46.OutputCostPerToken, 1e-12)       // $15 / 1M tokens
	require.InDelta(t, 0.3e-6, sonnet46.CacheReadInputTokenCost, 1e-12) // $0.30 / 1M tokens
	require.InDelta(t, 3.75e-6, sonnet46.CacheCreationInputTokenCost, 1e-12)
	require.InDelta(t, 6e-6, sonnet46.CacheCreationInputTokenCostAbove1hr, 1e-12)

	haiku45 := pricingData["claude-haiku-4-5"]
	require.NotNil(t, haiku45)
	require.InDelta(t, 1e-6, haiku45.InputCostPerToken, 1e-12)         // $1 / 1M tokens
	require.InDelta(t, 5e-6, haiku45.OutputCostPerToken, 1e-12)        // $5 / 1M tokens
	require.InDelta(t, 0.1e-6, haiku45.CacheReadInputTokenCost, 1e-12) // $0.10 / 1M tokens
	require.InDelta(t, 2e-6, haiku45.CacheCreationInputTokenCostAbove1hr, 1e-12)

	haiku35 := pricingData["claude-3-5-haiku-latest"]
	require.NotNil(t, haiku35)
	require.InDelta(t, 0.8e-6, haiku35.InputCostPerToken, 1e-12)         // $0.80 / 1M tokens
	require.InDelta(t, 4e-6, haiku35.OutputCostPerToken, 1e-12)          // $4 / 1M tokens
	require.InDelta(t, 0.08e-6, haiku35.CacheReadInputTokenCost, 1e-12)  // $0.08 / 1M tokens
	require.InDelta(t, 1e-6, haiku35.CacheCreationInputTokenCost, 1e-12) // $1 / 1M tokens
	require.InDelta(t, 1.6e-6, haiku35.CacheCreationInputTokenCostAbove1hr, 1e-12)

	opus3 := pricingData["claude-3-opus-latest"]
	require.NotNil(t, opus3)
	require.InDelta(t, 1.5e-5, opus3.InputCostPerToken, 1e-12)             // $15 / 1M tokens
	require.InDelta(t, 7.5e-5, opus3.OutputCostPerToken, 1e-12)            // $75 / 1M tokens
	require.InDelta(t, 1.5e-6, opus3.CacheReadInputTokenCost, 1e-12)       // $1.50 / 1M tokens
	require.InDelta(t, 1.875e-5, opus3.CacheCreationInputTokenCost, 1e-12) // $18.75 / 1M tokens
	require.InDelta(t, 3e-5, opus3.CacheCreationInputTokenCostAbove1hr, 1e-12)
}

func TestParsePricingData_NormalizesClaudeOfficialPricing(t *testing.T) {
	svc := &PricingService{}
	body := []byte(`{
		"claude-sonnet-4-6": {
			"input_cost_per_token": 0.000003,
			"output_cost_per_token": 0.000015,
			"cache_creation_input_token_cost": 0.00000375,
			"cache_read_input_token_cost": 0.0000003,
			"supports_prompt_caching": true,
			"litellm_provider": "anthropic",
			"mode": "chat"
		},
		"claude-3-5-haiku-latest": {
			"input_cost_per_token": 0.000001,
			"output_cost_per_token": 0.000005,
			"cache_creation_input_token_cost": 0.00000125,
			"cache_creation_input_token_cost_above_1hr": 0.000006,
			"cache_read_input_token_cost": 0.0000001,
			"supports_prompt_caching": true,
			"litellm_provider": "anthropic",
			"mode": "chat"
		}
	}`)

	data, err := svc.parsePricingData(body)
	require.NoError(t, err)

	sonnet46 := data["claude-sonnet-4-6"]
	require.NotNil(t, sonnet46)
	require.InDelta(t, 6e-6, sonnet46.CacheCreationInputTokenCostAbove1hr, 1e-12)

	haiku35 := data["claude-3-5-haiku-latest"]
	require.NotNil(t, haiku35)
	require.InDelta(t, 0.8e-6, haiku35.InputCostPerToken, 1e-12)
	require.InDelta(t, 4e-6, haiku35.OutputCostPerToken, 1e-12)
	require.InDelta(t, 1e-6, haiku35.CacheCreationInputTokenCost, 1e-12)
	require.InDelta(t, 1.6e-6, haiku35.CacheCreationInputTokenCostAbove1hr, 1e-12)
	require.InDelta(t, 0.08e-6, haiku35.CacheReadInputTokenCost, 1e-12)
}

func TestBundledPricing_ZhipuGLMUsesOfficialListPrices(t *testing.T) {
	body, err := os.ReadFile("../../resources/model-pricing/model_prices_and_context_window.json")
	require.NoError(t, err)

	svc := &PricingService{}
	pricingData, err := svc.parsePricingData(body)
	require.NoError(t, err)

	glm51 := pricingData["glm-5.1"]
	require.NotNil(t, glm51)
	require.InDelta(t, 6e-6, glm51.InputCostPerToken, 1e-12)         // ¥6 / 1M tokens
	require.InDelta(t, 24e-6, glm51.OutputCostPerToken, 1e-12)       // ¥24 / 1M tokens
	require.InDelta(t, 1.3e-6, glm51.CacheReadInputTokenCost, 1e-12) // ¥1.3 / 1M tokens
	require.Len(t, glm51.TokenPricingTiers, 2)
	require.InDelta(t, 8e-6, glm51.TokenPricingTiers[1].InputCostPerToken, 1e-12)   // ¥8 / 1M tokens
	require.InDelta(t, 28e-6, glm51.TokenPricingTiers[1].OutputCostPerToken, 1e-12) // ¥28 / 1M tokens

	glm52 := pricingData["glm-5.2"]
	require.NotNil(t, glm52)
	require.InDelta(t, 6e-6, glm52.InputCostPerToken, 1e-12)         // ¥6 / 1M tokens
	require.InDelta(t, 24e-6, glm52.OutputCostPerToken, 1e-12)       // ¥24 / 1M tokens
	require.InDelta(t, 1.3e-6, glm52.CacheReadInputTokenCost, 1e-12) // ¥1.3 / 1M tokens
	require.Len(t, glm52.TokenPricingTiers, 2)
	require.InDelta(t, 8e-6, glm52.TokenPricingTiers[1].InputCostPerToken, 1e-12)   // ¥8 / 1M tokens
	require.InDelta(t, 28e-6, glm52.TokenPricingTiers[1].OutputCostPerToken, 1e-12) // ¥28 / 1M tokens

	glm47 := pricingData["glm-4.7"]
	require.NotNil(t, glm47)
	require.Len(t, glm47.TokenPricingTiers, 3)
	require.Equal(t, 200, glm47.TokenPricingTiers[0].MaxOutputTokens)
	require.InDelta(t, 3e-6, glm47.TokenPricingTiers[1].InputCostPerToken, 1e-12)   // ¥3 / 1M tokens
	require.InDelta(t, 14e-6, glm47.TokenPricingTiers[1].OutputCostPerToken, 1e-12) // ¥14 / 1M tokens
	require.InDelta(t, 4e-6, glm47.TokenPricingTiers[2].InputCostPerToken, 1e-12)   // ¥4 / 1M tokens
	require.InDelta(t, 16e-6, glm47.TokenPricingTiers[2].OutputCostPerToken, 1e-12) // ¥16 / 1M tokens

	free := pricingData["glm-4.7-flash"]
	require.NotNil(t, free)
	require.Zero(t, free.InputCostPerToken)
	require.Zero(t, free.OutputCostPerToken)
}

func TestBundledPricing_Qwen36UsesOfficialListPrices(t *testing.T) {
	body, err := os.ReadFile("../../resources/model-pricing/model_prices_and_context_window.json")
	require.NoError(t, err)

	svc := &PricingService{}
	pricingData, err := svc.parsePricingData(body)
	require.NoError(t, err)

	maxPreview := pricingData["qwen3.6-max-preview"]
	require.NotNil(t, maxPreview)
	require.InDelta(t, 9e-6, maxPreview.InputCostPerToken, 1e-12)   // ¥9 / 1M tokens
	require.InDelta(t, 54e-6, maxPreview.OutputCostPerToken, 1e-12) // ¥54 / 1M tokens
	require.InDelta(t, 1.8e-6, maxPreview.CacheReadInputTokenCost, 1e-12)
	require.Len(t, maxPreview.TokenPricingTiers, 2)
	require.InDelta(t, 15e-6, maxPreview.TokenPricingTiers[1].InputCostPerToken, 1e-12)  // ¥15 / 1M tokens
	require.InDelta(t, 90e-6, maxPreview.TokenPricingTiers[1].OutputCostPerToken, 1e-12) // ¥90 / 1M tokens

	plus := pricingData["qwen3.6-plus"]
	require.NotNil(t, plus)
	require.InDelta(t, 2e-6, plus.InputCostPerToken, 1e-12)   // ¥2 / 1M tokens
	require.InDelta(t, 12e-6, plus.OutputCostPerToken, 1e-12) // ¥12 / 1M tokens
	require.InDelta(t, 0.4e-6, plus.CacheReadInputTokenCost, 1e-12)
	require.Len(t, plus.TokenPricingTiers, 2)
	require.InDelta(t, 8e-6, plus.TokenPricingTiers[1].InputCostPerToken, 1e-12)   // ¥8 / 1M tokens
	require.InDelta(t, 48e-6, plus.TokenPricingTiers[1].OutputCostPerToken, 1e-12) // ¥48 / 1M tokens

	flash := pricingData["qwen3.6-flash"]
	require.NotNil(t, flash)
	require.InDelta(t, 1.2e-6, flash.InputCostPerToken, 1e-12)  // ¥1.2 / 1M tokens
	require.InDelta(t, 7.2e-6, flash.OutputCostPerToken, 1e-12) // ¥7.2 / 1M tokens
	require.InDelta(t, 0.24e-6, flash.CacheReadInputTokenCost, 1e-12)
	require.Len(t, flash.TokenPricingTiers, 2)
	require.InDelta(t, 4.8e-6, flash.TokenPricingTiers[1].InputCostPerToken, 1e-12)   // ¥4.8 / 1M tokens
	require.InDelta(t, 28.8e-6, flash.TokenPricingTiers[1].OutputCostPerToken, 1e-12) // ¥28.8 / 1M tokens

	open35b := pricingData["qwen3.6-35b-a3b"]
	require.NotNil(t, open35b)
	require.InDelta(t, 1.8e-6, open35b.InputCostPerToken, 1e-12)   // ¥1.8 / 1M tokens
	require.InDelta(t, 10.8e-6, open35b.OutputCostPerToken, 1e-12) // ¥10.8 / 1M tokens

	open27b := pricingData["qwen3.6-27b"]
	require.NotNil(t, open27b)
	require.InDelta(t, 3e-6, open27b.InputCostPerToken, 1e-12)   // ¥3 / 1M tokens
	require.InDelta(t, 18e-6, open27b.OutputCostPerToken, 1e-12) // ¥18 / 1M tokens
}

// ---------------------------------------------------------------------------
// ListModelNamesByProvider
// ---------------------------------------------------------------------------

func TestListModelNamesByProvider_ReturnsMatchingModels(t *testing.T) {
	svc := &PricingService{
		pricingData: map[string]*LiteLLMModelPricing{
			"claude-opus-4-5-20251101": {LiteLLMProvider: "anthropic", InputCostPerToken: 1.5e-5},
			"claude-sonnet-4-5":        {LiteLLMProvider: "anthropic", InputCostPerToken: 3e-6},
			"gpt-4o":                   {LiteLLMProvider: "openai", InputCostPerToken: 5e-6},
			"gemini-2.5-pro":           {LiteLLMProvider: "google", InputCostPerToken: 1.25e-6},
		},
	}

	got := svc.ListModelNamesByProvider("anthropic")
	require.ElementsMatch(t, []string{"claude-opus-4-5-20251101", "claude-sonnet-4-5"}, got)
	// Must be sorted
	require.Equal(t, "claude-opus-4-5-20251101", got[0])
	require.Equal(t, "claude-sonnet-4-5", got[1])
}

func TestListModelNamesByProvider_CaseInsensitive(t *testing.T) {
	svc := &PricingService{
		pricingData: map[string]*LiteLLMModelPricing{
			"gpt-4o": {LiteLLMProvider: "OpenAI", InputCostPerToken: 5e-6},
		},
	}

	got := svc.ListModelNamesByProvider("openai")
	require.Equal(t, []string{"gpt-4o"}, got)

	got2 := svc.ListModelNamesByProvider("OPENAI")
	require.Equal(t, []string{"gpt-4o"}, got2)
}

func TestListModelNamesByProvider_NoMatch(t *testing.T) {
	svc := &PricingService{
		pricingData: map[string]*LiteLLMModelPricing{
			"gpt-4o": {LiteLLMProvider: "openai", InputCostPerToken: 5e-6},
		},
	}

	got := svc.ListModelNamesByProvider("anthropic")
	require.NotNil(t, got)
	require.Empty(t, got)
}

func TestListModelNamesByProvider_EmptyCatalog(t *testing.T) {
	svc := &PricingService{
		pricingData: map[string]*LiteLLMModelPricing{},
	}

	got := svc.ListModelNamesByProvider("openai")
	require.NotNil(t, got)
	require.Empty(t, got)
}
