import { describe, expect, it } from 'vitest'

import { availableLocales, normalizeLocaleCode, toIntlLocale } from '../index'

describe('i18n locale aliases', () => {
  it('maps legacy locale codes to new app locale codes', () => {
    expect(normalizeLocaleCode('zh-TW')).toBe('hk')
    expect(normalizeLocaleCode('zh-hk')).toBe('hk')
    expect(normalizeLocaleCode('vi')).toBe('vn')
    expect(normalizeLocaleCode('vi-VN')).toBe('vn')
    expect(normalizeLocaleCode('fr-FR')).toBe('fr')
    expect(normalizeLocaleCode('ru-RU')).toBe('ru')
    expect(normalizeLocaleCode('ko-KR')).toBe('ko')
    expect(normalizeLocaleCode('th-TH')).toBe('th')
  })

  it('maps app locale codes to valid intl locales', () => {
    expect(toIntlLocale('hk')).toBe('zh-HK')
    expect(toIntlLocale('zh-TW')).toBe('zh-HK')
    expect(toIntlLocale('vn')).toBe('vi-VN')
    expect(toIntlLocale('vi')).toBe('vi-VN')
    expect(toIntlLocale('fr')).toBe('fr-FR')
    expect(toIntlLocale('ru')).toBe('ru-RU')
    expect(toIntlLocale('ko')).toBe('ko-KR')
    expect(toIntlLocale('th')).toBe('th-TH')
  })

  it('exposes updated locale options', () => {
    expect(availableLocales).toContainEqual({ code: 'hk', name: '繁體中文', flag: '🇭🇰' })
    expect(availableLocales).toContainEqual({ code: 'vn', name: 'Tiếng Việt', flag: '🇻🇳' })
    expect(availableLocales).toContainEqual({ code: 'fr', name: 'Français', flag: '🇫🇷' })
    expect(availableLocales).toContainEqual({ code: 'ru', name: 'Русский', flag: '🇷🇺' })
    expect(availableLocales).toContainEqual({ code: 'ko', name: '한국어', flag: '🇰🇷' })
    expect(availableLocales).toContainEqual({ code: 'th', name: 'ไทย', flag: '🇹🇭' })
  })
})
