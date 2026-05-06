import { describe, expect, it } from 'vitest'

import { availableLocales, normalizeLocaleCode, toIntlLocale } from '../index'

describe('i18n locale aliases', () => {
  it('maps legacy locale codes to new app locale codes', () => {
    expect(normalizeLocaleCode('zh-TW')).toBe('hk')
    expect(normalizeLocaleCode('zh-hk')).toBe('hk')
    expect(normalizeLocaleCode('vi')).toBe('vn')
    expect(normalizeLocaleCode('vi-VN')).toBe('vn')
  })

  it('maps app locale codes to valid intl locales', () => {
    expect(toIntlLocale('hk')).toBe('zh-HK')
    expect(toIntlLocale('zh-TW')).toBe('zh-HK')
    expect(toIntlLocale('vn')).toBe('vi-VN')
    expect(toIntlLocale('vi')).toBe('vi-VN')
  })

  it('exposes updated locale options', () => {
    expect(availableLocales).toContainEqual({ code: 'hk', name: '繁體中文', flag: '🇭🇰' })
    expect(availableLocales).toContainEqual({ code: 'vn', name: 'Tiếng Việt', flag: '🇻🇳' })
  })
})
