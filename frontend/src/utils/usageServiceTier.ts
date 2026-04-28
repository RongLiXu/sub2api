export function normalizeUsageServiceTier(serviceTier?: string | null): string | null {
  const value = serviceTier?.trim().toLowerCase()
  if (!value) return null
  if (value === 'fast') return 'priority'
  if (value === 'default' || value === 'standard') return 'standard'
  if (value === 'priority' || value === 'flex') return value
  return value
}

export function formatUsageServiceTier(serviceTier?: string | null): string {
  const normalized = normalizeUsageServiceTier(serviceTier)
  if (!normalized) return 'standard'
  return normalized
}

export function getUsageServiceTierLabel(
  serviceTier: string | null | undefined,
  translate: (key: string) => string,
): string {
  const tier = formatUsageServiceTier(serviceTier)
  if (tier === 'priority') return translate('usage.serviceTierPriority')
  if (tier === 'flex') return translate('usage.serviceTierFlex')
  if (tier === 'standard') return translate('usage.serviceTierStandard')
  return tier
}

export function getUsageServiceTierMultiplier(
  serviceTier: string | null | undefined,
  model?: string | null,
): number {
  const tier = formatUsageServiceTier(serviceTier)
  if (tier === 'flex') return 0.5
  if (tier !== 'priority') return 1

  return isGPT55StandardFamily(model) ? 2.5 : 2
}

function isGPT55StandardFamily(model?: string | null): boolean {
  const normalized = model?.trim().toLowerCase().replace(/[\s_]+/g, '-') ?? ''
  if (normalized === 'gpt-5.5') return true
  return normalized.startsWith('gpt-5.5-') && !normalized.startsWith('gpt-5.5-pro')
}
