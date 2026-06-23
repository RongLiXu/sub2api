import { describe, expect, it } from 'vitest'

import en from '../locales/en'
import fr from '../locales/fr'
import ja from '../locales/ja'
import ko from '../locales/ko'
import ru from '../locales/ru'
import th from '../locales/th'
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

  it('keeps admin usage cache token labels localized in added locales', () => {
    expect(ja.usage.cacheBreakdown).toBe('キャッシュトークン内訳')
    expect(vi.usage.cacheBreakdown).toBe('Chi tiết token cache')
    expect(fr.usage.cacheBreakdown).toBe('Détail des tokens cache')
    expect(ru.usage.cacheBreakdown).toBe('Разбивка токенов кэша')
    expect(ko.usage.cacheBreakdown).toBe('캐시 토큰 상세')
    expect(th.usage.cacheBreakdown).toBe('รายละเอียด token แคช')
    expect(zhTW.usage.cacheBreakdown).toBe('快取 Token 明細')
    expect(zhTW.usage.cacheCreationTokensLabel).toBe('快取建立')
    expect(zhTW.usage.cacheReadTokensLabel).toBe('快取讀取')
  })

  it('keeps risk control navigation localized in ja, vi, and zh-TW', () => {
    expect(ja.nav.riskControl).toBe('風控センター')
    expect(vi.nav.riskControl).toBe('Trung tâm kiểm soát rủi ro')
    expect(zhTW.nav.riskControl).toBe('風控中心')
  })

  it('keeps key page titles localized in fr, ru, ko, and th', () => {
    expect(fr.auth.createAccount).not.toBe(en.auth.createAccount)
    expect(fr.dashboard.title).not.toBe(en.dashboard.title)
    expect(fr.profile.title).not.toBe(en.profile.title)

    expect(ru.auth.createAccount).not.toBe(en.auth.createAccount)
    expect(ru.dashboard.title).not.toBe(en.dashboard.title)
    expect(ru.profile.title).not.toBe(en.profile.title)

    expect(ko.auth.createAccount).not.toBe(en.auth.createAccount)
    expect(ko.dashboard.title).not.toBe(en.dashboard.title)
    expect(ko.profile.title).not.toBe(en.profile.title)

    expect(th.auth.createAccount).not.toBe(en.auth.createAccount)
    expect(th.dashboard.title).not.toBe(en.dashboard.title)
    expect(th.profile.title).not.toBe(en.profile.title)
  })

  it('keeps account email filter localized in all supported locales', () => {
    expect(en.admin.accounts.emailFilter).toBe('Filter by email...')
    expect(zh.admin.accounts.emailFilter).toBe('按邮箱筛选...')
    expect(ja.admin.accounts.emailFilter).not.toBe(en.admin.accounts.emailFilter)
    expect(vi.admin.accounts.emailFilter).not.toBe(en.admin.accounts.emailFilter)
    expect(fr.admin.accounts.emailFilter).not.toBe(en.admin.accounts.emailFilter)
    expect(ru.admin.accounts.emailFilter).not.toBe(en.admin.accounts.emailFilter)
    expect(ko.admin.accounts.emailFilter).not.toBe(en.admin.accounts.emailFilter)
    expect(th.admin.accounts.emailFilter).not.toBe(en.admin.accounts.emailFilter)
    expect(zhTW.admin.accounts.emailFilter).toBe(zh.admin.accounts.emailFilter)
  })

  it('keeps added locale key structure complete', () => {
    expect(flattenKeys(ja).sort()).toEqual(flattenKeys(en).sort())
    expect(flattenKeys(vi).sort()).toEqual(flattenKeys(en).sort())
    expect(flattenKeys(fr).sort()).toEqual(flattenKeys(en).sort())
    expect(flattenKeys(ru).sort()).toEqual(flattenKeys(en).sort())
    expect(flattenKeys(ko).sort()).toEqual(flattenKeys(en).sort())
    expect(flattenKeys(th).sort()).toEqual(flattenKeys(en).sort())
    expect(flattenKeys(zhTW).sort()).toEqual(flattenKeys(zh).sort())
  })

  it('keeps runtime placeholders unchanged in added locales', () => {
    expectMatchingPlaceholders(en, ja)
    expectMatchingPlaceholders(en, vi)
    expectMatchingPlaceholders(en, fr)
    expectMatchingPlaceholders(en, ru)
    expectMatchingPlaceholders(en, ko)
    expectMatchingPlaceholders(en, th)
    expectMatchingPlaceholders(zh, zhTW)
  })

  it('keeps inline HTML styles valid in added locales', () => {
    const styles = [
      ...collectInlineStyles(ja),
      ...collectInlineStyles(vi),
      ...collectInlineStyles(fr),
      ...collectInlineStyles(ru),
      ...collectInlineStyles(ko),
      ...collectInlineStyles(th),
      ...collectInlineStyles(zhTW)
    ]

    expect(styles.length).toBeGreaterThan(0)
    for (const style of styles) {
      expect(isAscii(style)).toBe(true)
      expect(style).not.toMatch(/nền|viền|bán kính|cỡ chữ|lề|背|backorder|forderfdf|<bgin|font-sizeGoogle/i)
    }
  })
})
