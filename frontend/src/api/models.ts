import { apiClient } from './client'

export interface PublicModelPricingTier {
  min_input_tokens?: number
  max_input_tokens?: number
  min_output_tokens?: number
  max_output_tokens?: number
  input_cost_per_token: number
  output_cost_per_token: number
  cache_read_input_token_cost?: number
}

export interface PublicModelCatalogItem {
  name: string
  platform: string
  provider: string
  mode: string
  input_price: number
  output_price: number
  cache_write_price: number
  cache_read_price: number
  image_output_price: number
  per_image_price: number
  max_input_tokens: number
  max_output_tokens: number
  max_tokens: number
  supports_prompt_caching: boolean
  supports_service_tier: boolean
  supports_function_calling: boolean
  supports_vision: boolean
  token_pricing_tiers: PublicModelPricingTier[]
}

export async function listPublicModels(options?: { signal?: AbortSignal }): Promise<PublicModelCatalogItem[]> {
  const { data } = await apiClient.get<PublicModelCatalogItem[]>('/models', {
    signal: options?.signal,
  })
  return data
}

const modelsAPI = {
  listPublicModels,
}

export default modelsAPI
