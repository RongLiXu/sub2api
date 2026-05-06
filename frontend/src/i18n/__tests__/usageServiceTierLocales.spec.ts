import { describe, expect, it } from 'vitest'

import en from '../locales/en'
import ja from '../locales/ja'
import vi from '../locales/vi'
import zh from '../locales/zh'
import zhTW from '../locales/zh-TW'

function flattenKeys(value: unknown, prefix = ''): string[] {
  if (!value || typeof value !== 'object') {
    return [prefix]
  }

  if (Array.isArray(value)) {
    return value.flatMap((item, index) => flattenKeys(item, `${prefix}[${index}]`))
  }

  return Object.entries(value).flatMap(([key, child]) => {
    const nextPrefix = prefix ? `${prefix}.${key}` : key
    return flattenKeys(child, nextPrefix)
  })
}

function flattenEntries(value: unknown, prefix = ''): Array<[string, unknown]> {
  if (!value || typeof value !== 'object') {
    return [[prefix, value]]
  }

  if (Array.isArray(value)) {
    return value.flatMap((item, index) => flattenEntries(item, `${prefix}[${index}]`))
  }

  return Object.entries(value).flatMap(([key, child]) => {
    const nextPrefix = prefix ? `${prefix}.${key}` : key
    return flattenEntries(child, nextPrefix)
  })
}

function extractPlaceholders(value: unknown): string[] {
  if (typeof value !== 'string') {
    return []
  }

  return [...value.matchAll(/\{([^{}]+)\}/g)]
    .map((match) => match[1].trim())
    .filter((placeholder) => !placeholder.startsWith("'") && !placeholder.startsWith('"'))
    .sort()
}

function expectMatchingPlaceholders(source: Record<string, unknown>, target: Record<string, unknown>) {
  const sourceEntries = new Map(flattenEntries(source))
  const targetEntries = new Map(flattenEntries(target))

  for (const [key, sourceValue] of sourceEntries) {
    expect(extractPlaceholders(targetEntries.get(key)), key).toEqual(extractPlaceholders(sourceValue))
  }
}

function collectInlineStyles(value: Record<string, unknown>): string[] {
  return flattenEntries(value)
    .flatMap(([, entry]) => {
      if (typeof entry !== 'string') {
        return []
      }

      return [...entry.matchAll(/style="([^"]*)"/g)].map((match) => match[1])
    })
}

function isAscii(value: string): boolean {
  return [...value].every((char) => char.charCodeAt(0) <= 0x7f)
}

describe('usage service tier locale keys', () => {
  it('contains zh labels for service tier tooltip', () => {
    expect(zh.usage.serviceTier).toBe('服务档位')
    expect(zh.usage.serviceTierPriority).toBe('Fast')
    expect(zh.usage.serviceTierFlex).toBe('Flex')
    expect(zh.usage.serviceTierStandard).toBe('Standard')
    expect(zh.usage.userRate).toBe('用户倍率')
  })

  it('contains en labels for service tier tooltip', () => {
    expect(en.usage.serviceTier).toBe('Service tier')
    expect(en.usage.serviceTierPriority).toBe('Fast')
    expect(en.usage.serviceTierFlex).toBe('Flex')
    expect(en.usage.serviceTierStandard).toBe('Standard')
    expect(en.usage.userRate).toBe('User rate')
  })

  it('contains labels for added locales', () => {
    expect(ja.usage.serviceTier).toBe('サービス層')
    expect(vi.usage.serviceTier).toBe('Bậc dịch vụ')
    expect(zhTW.usage.serviceTier).toBe('服務檔位')
    expect(ja.usage.serviceTierPriority).toBe('Fast')
    expect(vi.usage.serviceTierFlex).toBe('Flex')
    expect(zhTW.usage.serviceTierStandard).toBe('Standard')
  })

  it('keeps added locale key structure complete', () => {
    expect(flattenKeys(ja).sort()).toEqual(flattenKeys(en).sort())
    expect(flattenKeys(vi).sort()).toEqual(flattenKeys(en).sort())
    expect(flattenKeys(zhTW).sort()).toEqual(flattenKeys(zh).sort())
  })

  it('keeps runtime placeholders unchanged in added locales', () => {
    expectMatchingPlaceholders(en, ja)
    expectMatchingPlaceholders(en, vi)
    expectMatchingPlaceholders(zh, zhTW)
  })

  it('keeps inline HTML styles valid in added locales', () => {
    const styles = [
      ...collectInlineStyles(ja),
      ...collectInlineStyles(vi),
      ...collectInlineStyles(zhTW)
    ]

    expect(styles.length).toBeGreaterThan(0)
    for (const style of styles) {
      expect(isAscii(style)).toBe(true)
      expect(style).not.toMatch(/nền|viền|bán kính|cỡ chữ|lề|背|backorder|forderfdf|<bgin|font-sizeGoogle/i)
    }
  })
})
