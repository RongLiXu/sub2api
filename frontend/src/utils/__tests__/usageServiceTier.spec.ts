import { describe, expect, it } from 'vitest'

import {
  formatUsageServiceTier,
  getUsageServiceTierLabel,
  getUsageServiceTierMultiplier,
  normalizeUsageServiceTier,
} from '@/utils/usageServiceTier'

describe('usageServiceTier utils', () => {
  it('normalizes fast/default aliases', () => {
    expect(normalizeUsageServiceTier('fast')).toBe('priority')
    expect(normalizeUsageServiceTier(' default ')).toBe('standard')
    expect(normalizeUsageServiceTier('STANDARD')).toBe('standard')
  })

  it('preserves supported tiers', () => {
    expect(normalizeUsageServiceTier('priority')).toBe('priority')
    expect(normalizeUsageServiceTier('flex')).toBe('flex')
  })

  it('formats empty values as standard', () => {
    expect(formatUsageServiceTier()).toBe('standard')
    expect(formatUsageServiceTier('')).toBe('standard')
  })

  it('passes through unknown non-empty tiers for display fallback', () => {
    expect(normalizeUsageServiceTier('custom-tier')).toBe('custom-tier')
    expect(formatUsageServiceTier('custom-tier')).toBe('custom-tier')
  })

  it('maps tiers to translated labels', () => {
    const translate = (key: string) => ({
      'usage.serviceTierPriority': 'Fast',
      'usage.serviceTierFlex': 'Flex',
      'usage.serviceTierStandard': 'Standard',
    })[key] ?? key

    expect(getUsageServiceTierLabel('fast', translate)).toBe('Fast')
    expect(getUsageServiceTierLabel('flex', translate)).toBe('Flex')
    expect(getUsageServiceTierLabel(undefined, translate)).toBe('Standard')
    expect(getUsageServiceTierLabel('custom-tier', translate)).toBe('custom-tier')
  })

  it('returns display multipliers for service tier pricing', () => {
    expect(getUsageServiceTierMultiplier('priority', 'gpt-5.5')).toBe(2.5)
    expect(getUsageServiceTierMultiplier('fast', 'gpt-5.5-high')).toBe(2.5)
    expect(getUsageServiceTierMultiplier('priority', 'gpt-5.5-pro')).toBe(2)
    expect(getUsageServiceTierMultiplier('priority', 'gpt-5.4')).toBe(2)
    expect(getUsageServiceTierMultiplier('flex', 'gpt-5.4')).toBe(0.5)
    expect(getUsageServiceTierMultiplier('standard', 'gpt-5.4')).toBe(1)
    expect(getUsageServiceTierMultiplier(undefined, 'gpt-5.4')).toBe(1)
  })
})
