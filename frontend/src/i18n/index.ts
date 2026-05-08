import { createI18n } from 'vue-i18n'
import { mergeLocaleMessages } from './locales/mergeLocaleMessages'

type LocaleCode = 'en' | 'zh' | 'hk' | 'ja' | 'vn' | 'fr' | 'ru' | 'ko' | 'th'

type LocaleMessages = Record<string, any>

const LOCALE_KEY = 'sub2api_locale'
const DEFAULT_LOCALE: LocaleCode = 'en'
const LOCALE_CODES: readonly LocaleCode[] = ['en', 'zh', 'hk', 'ja', 'vn', 'fr', 'ru', 'ko', 'th']

const localeLoaders: Record<LocaleCode, () => Promise<{ default: LocaleMessages }>> = {
  en: () => import('./locales/en'),
  zh: () => import('./locales/zh'),
  hk: () => import('./locales/zh-TW'),
  ja: () => import('./locales/ja'),
  vn: () => import('./locales/vi'),
  fr: () => import('./locales/fr'),
  ru: () => import('./locales/ru'),
  ko: () => import('./locales/ko'),
  th: () => import('./locales/th')
}

const localePatchLoaders: Partial<Record<LocaleCode, () => Promise<{ default: LocaleMessages }>>> = {
  fr: () => import('./locales/fr.extra'),
  ru: () => import('./locales/ru.extra'),
  ko: () => import('./locales/ko.extra'),
  th: () => import('./locales/th.extra')
}

function isLocaleCode(value: string): value is LocaleCode {
  return LOCALE_CODES.includes(value as LocaleCode)
}

export function normalizeLocaleCode(value: string | null | undefined): LocaleCode | null {
  const normalized = String(value || '').trim()
  if (!normalized) {
    return null
  }

  if (isLocaleCode(normalized)) {
    return normalized
  }

  const lowercase = normalized.toLowerCase()
  if (lowercase === 'zh-tw' || lowercase === 'zh-hk' || lowercase === 'zh-mo') {
    return 'hk'
  }

  if (lowercase === 'vi' || lowercase === 'vi-vn') {
    return 'vn'
  }

  if (lowercase === 'fr' || lowercase === 'fr-fr') {
    return 'fr'
  }

  if (lowercase === 'ru' || lowercase === 'ru-ru') {
    return 'ru'
  }

  if (lowercase === 'ko' || lowercase === 'ko-kr') {
    return 'ko'
  }

  if (lowercase === 'th' || lowercase === 'th-th') {
    return 'th'
  }

  return null
}

export function toIntlLocale(locale: string | null | undefined): string {
  switch (normalizeLocaleCode(locale)) {
    case 'zh':
      return 'zh-CN'
    case 'hk':
      return 'zh-HK'
    case 'ja':
      return 'ja-JP'
    case 'vn':
      return 'vi-VN'
    case 'fr':
      return 'fr-FR'
    case 'ru':
      return 'ru-RU'
    case 'ko':
      return 'ko-KR'
    case 'th':
      return 'th-TH'
    case 'en':
    default:
      return 'en-US'
  }
}

function getDefaultLocale(): LocaleCode {
  const saved = normalizeLocaleCode(localStorage.getItem(LOCALE_KEY))
  if (saved) {
    return saved
  }

  const browserLang = navigator.language.toLowerCase()
  if (browserLang === 'zh-tw' || browserLang === 'zh-hk' || browserLang === 'zh-mo') {
    return 'hk'
  }

  if (browserLang.startsWith('zh')) {
    return 'zh'
  }

  if (browserLang.startsWith('ja')) {
    return 'ja'
  }

  if (browserLang.startsWith('vi')) {
    return 'vn'
  }

  if (browserLang.startsWith('fr')) {
    return 'fr'
  }

  if (browserLang.startsWith('ru')) {
    return 'ru'
  }

  if (browserLang.startsWith('ko')) {
    return 'ko'
  }

  if (browserLang.startsWith('th')) {
    return 'th'
  }

  return DEFAULT_LOCALE
}

export const i18n = createI18n({
  legacy: false,
  locale: getDefaultLocale(),
  fallbackLocale: DEFAULT_LOCALE,
  messages: {},
  // 禁用 HTML 消息警告 - 引导步骤使用富文本内容（driver.js 支持 HTML）
  // 这些内容是内部定义的，不存在 XSS 风险
  warnHtmlMessage: false
})

const loadedLocales = new Set<LocaleCode>()

export async function loadLocaleMessages(locale: LocaleCode): Promise<void> {
  if (loadedLocales.has(locale)) {
    return
  }

  const loader = localeLoaders[locale]
  const module = await loader()
  const patchLoader = localePatchLoaders[locale]
  if (patchLoader) {
    const patchModule = await patchLoader()
    i18n.global.setLocaleMessage(locale, mergeLocaleMessages(module.default, patchModule.default))
  } else {
    i18n.global.setLocaleMessage(locale, module.default)
  }
  loadedLocales.add(locale)
}

export async function initI18n(): Promise<void> {
  const current = getLocale()
  await loadLocaleMessages(current)
  document.documentElement.setAttribute('lang', toIntlLocale(current))
}

export async function setLocale(locale: string): Promise<void> {
  const normalizedLocale = normalizeLocaleCode(locale)
  if (!normalizedLocale) {
    return
  }

  await loadLocaleMessages(normalizedLocale)
  i18n.global.locale.value = normalizedLocale
  localStorage.setItem(LOCALE_KEY, normalizedLocale)
  document.documentElement.setAttribute('lang', toIntlLocale(normalizedLocale))

  // 同步更新浏览器页签标题，使其跟随语言切换
  const { resolveDocumentTitle } = await import('@/router/title')
  const { default: router } = await import('@/router')
  const { useAppStore } = await import('@/stores/app')
  const route = router.currentRoute.value
  const appStore = useAppStore()
  document.title = resolveDocumentTitle(route.meta.title, appStore.siteName, route.meta.titleKey as string)
}

export function getLocale(): LocaleCode {
  const current = normalizeLocaleCode(i18n.global.locale.value)
  return current || DEFAULT_LOCALE
}

export const availableLocales = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '简体中文', flag: '🇨🇳' },
  { code: 'hk', name: '繁體中文', flag: '🇭🇰' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'vn', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' }
] as const

export default i18n
