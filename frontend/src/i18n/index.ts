import { createI18n } from 'vue-i18n'

type LocaleCode = 'en' | 'zh' | 'hk' | 'ja' | 'vn'

type LocaleMessages = Record<string, any>

const LOCALE_KEY = 'sub2api_locale'
const DEFAULT_LOCALE: LocaleCode = 'en'
const LOCALE_CODES: readonly LocaleCode[] = ['en', 'zh', 'hk', 'ja', 'vn']

const localeLoaders: Record<LocaleCode, () => Promise<{ default: LocaleMessages }>> = {
  en: () => import('./locales/en'),
  zh: () => import('./locales/zh'),
  hk: () => import('./locales/zh-TW'),
  ja: () => import('./locales/ja'),
  vn: () => import('./locales/vi')
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
  i18n.global.setLocaleMessage(locale, module.default)
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
  { code: 'vn', name: 'Tiếng Việt', flag: '🇻🇳' }
] as const

export default i18n
