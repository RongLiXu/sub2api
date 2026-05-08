<template>
  <div
    class="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.12),_transparent_32%),linear-gradient(180deg,_#f7faf8_0%,_#eef4f1_100%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_28%),linear-gradient(180deg,_#0b1411_0%,_#101916_100%)]"
  >
    <div class="pointer-events-none absolute inset-0 opacity-60">
      <div class="absolute -left-24 top-10 h-64 w-64 rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-500/10"></div>
      <div class="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-500/10"></div>
      <div class="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-lime-200/25 blur-3xl dark:bg-lime-400/10"></div>
    </div>

    <header class="relative z-10 px-6 py-4">
      <nav class="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div class="flex items-center gap-4">
          <router-link to="/home" class="flex items-center gap-3">
            <div class="h-10 w-10 overflow-hidden rounded-2xl bg-white shadow-md shadow-black/5 dark:bg-dark-800">
              <img :src="siteLogo || '/logo.png'" :alt="t('common.logoAlt')" class="h-full w-full object-contain" />
            </div>
            <div>
              <div class="text-sm font-semibold tracking-wide text-gray-900 dark:text-white">
                {{ siteName }}
              </div>
              <div class="text-xs text-gray-500 dark:text-dark-300">
                {{ t('modelsPage.headerEyebrow') }}
              </div>
            </div>
          </router-link>

          <div class="hidden items-center gap-2 md:flex">
            <router-link
              to="/home"
              class="rounded-full px-3 py-1.5 text-sm text-gray-600 transition-colors hover:bg-white/70 hover:text-gray-900 dark:text-dark-300 dark:hover:bg-dark-800/70 dark:hover:text-white"
            >
              {{ t('modelsPage.navHome') }}
            </router-link>
            <span class="rounded-full bg-gray-900 px-3 py-1.5 text-sm font-medium text-white dark:bg-white dark:text-dark-950">
              {{ t('nav.models') }}
            </span>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <LocaleSwitcher />
          <a
            v-if="docUrl"
            :href="docUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-lg p-2 text-gray-500 transition-colors hover:bg-white/70 hover:text-gray-700 dark:text-dark-400 dark:hover:bg-dark-800 dark:hover:text-white"
            :title="t('home.viewDocs')"
          >
            <Icon name="book" size="md" />
          </a>
          <button
            @click="toggleTheme"
            class="rounded-lg p-2 text-gray-500 transition-colors hover:bg-white/70 hover:text-gray-700 dark:text-dark-400 dark:hover:bg-dark-800 dark:hover:text-white"
            :title="isDark ? t('home.switchToLight') : t('home.switchToDark')"
          >
            <Icon v-if="isDark" name="sun" size="md" />
            <Icon v-else name="moon" size="md" />
          </button>
          <router-link
            v-if="isAuthenticated"
            :to="dashboardPath"
            class="inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-dark-950 dark:hover:bg-white"
          >
            {{ t('home.dashboard') }}
          </router-link>
          <router-link
            v-else
            to="/login"
            class="inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-dark-950 dark:hover:bg-white"
          >
            {{ t('home.login') }}
          </router-link>
        </div>
      </nav>
    </header>

    <main class="relative z-10 px-6 pb-16 pt-8">
      <div class="mx-auto flex max-w-7xl flex-col gap-8">
        <section class="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.7fr)]">
          <div class="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] backdrop-blur dark:border-white/10 dark:bg-dark-900/80">
            <div class="mb-4 inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
              {{ t('modelsPage.headerEyebrow') }}
            </div>
            <h1 class="max-w-4xl text-4xl font-semibold tracking-tight text-gray-900 dark:text-white md:text-5xl">
              {{ t('modelsPage.title') }}
            </h1>
            <p class="mt-4 max-w-3xl text-base leading-7 text-gray-600 dark:text-dark-300 md:text-lg">
              {{ t('modelsPage.subtitle') }}
            </p>

            <div class="mt-8 flex flex-wrap gap-3">
              <router-link
                to="/home"
                class="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:text-gray-900 dark:border-dark-700 dark:bg-dark-800 dark:text-dark-200 dark:hover:border-dark-500 dark:hover:text-white"
              >
                {{ t('modelsPage.backHome') }}
              </router-link>
              <button
                type="button"
                @click="loadModels"
                :disabled="loading"
                class="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Icon name="refresh" size="sm" class="mr-2" :class="loading ? 'animate-spin' : ''" />
                {{ t('modelsPage.refresh') }}
              </button>
            </div>
          </div>

          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div
              v-for="stat in statsCards"
              :key="stat.key"
              class="rounded-[1.75rem] border border-white/70 bg-white/75 p-5 shadow-[0_18px_50px_-32px_rgba(15,23,42,0.45)] backdrop-blur dark:border-white/10 dark:bg-dark-900/75"
            >
              <div class="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-dark-400">
                {{ stat.label }}
              </div>
              <div class="mt-3 text-3xl font-semibold text-gray-900 dark:text-white">
                {{ stat.value }}
              </div>
              <div class="mt-2 text-sm text-gray-500 dark:text-dark-300">
                {{ stat.hint }}
              </div>
            </div>
          </div>
        </section>

        <section class="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] backdrop-blur dark:border-white/10 dark:bg-dark-900/80">
          <div class="grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px]">
            <label class="relative block">
              <Icon
                name="search"
                size="md"
                class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-dark-400"
              />
              <input
                v-model="searchQuery"
                type="text"
                class="input h-12 rounded-2xl border-0 bg-gray-100/90 pl-11 shadow-none ring-1 ring-transparent transition focus:bg-white focus:ring-emerald-500 dark:bg-dark-800/90 dark:focus:bg-dark-800"
                :placeholder="t('modelsPage.searchPlaceholder')"
              />
            </label>

            <label class="block">
              <span class="sr-only">{{ t('modelsPage.providerFilter') }}</span>
              <select
                v-model="selectedProvider"
                class="input h-12 w-full rounded-2xl border-0 bg-gray-100/90 shadow-none ring-1 ring-transparent transition focus:bg-white focus:ring-emerald-500 dark:bg-dark-800/90 dark:focus:bg-dark-800"
              >
                <option value="">{{ t('modelsPage.allProviders') }}</option>
                <option v-for="provider in providerOptions" :key="provider" :value="provider">
                  {{ provider }}
                </option>
              </select>
            </label>
          </div>

          <div class="mt-5 flex flex-wrap items-center gap-2">
            <span class="text-xs font-medium uppercase tracking-[0.18em] text-gray-500 dark:text-dark-400">
              {{ t('modelsPage.capabilityFilter') }}
            </span>
            <button
              v-for="capability in capabilityOptions"
              :key="capability.key"
              type="button"
              @click="toggleCapability(capability.key)"
              class="rounded-full border px-3 py-1.5 text-sm transition-colors"
              :class="selectedCapabilities.has(capability.key)
                ? 'border-emerald-500 bg-emerald-500 text-white'
                : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-gray-900 dark:border-dark-700 dark:bg-dark-800 dark:text-dark-300 dark:hover:border-dark-500 dark:hover:text-white'"
            >
              {{ capability.label }}
            </button>
          </div>
        </section>

        <section v-if="errorMessage" class="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/20 dark:bg-red-900/20 dark:text-red-200">
          {{ errorMessage }}
        </section>

        <section v-if="loading" class="rounded-[2rem] border border-white/70 bg-white/80 px-6 py-20 text-center shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] backdrop-blur dark:border-white/10 dark:bg-dark-900/80">
          <Icon name="refresh" size="lg" class="mx-auto animate-spin text-gray-400 dark:text-dark-400" />
          <p class="mt-4 text-sm text-gray-500 dark:text-dark-300">{{ t('common.loading') }}</p>
        </section>

        <section v-else-if="filteredModels.length === 0" class="rounded-[2rem] border border-dashed border-gray-300 bg-white/70 px-6 py-20 text-center dark:border-dark-600 dark:bg-dark-900/70">
          <p class="text-lg font-medium text-gray-800 dark:text-white">{{ t('modelsPage.emptyTitle') }}</p>
          <p class="mt-2 text-sm text-gray-500 dark:text-dark-300">{{ t('modelsPage.emptyDescription') }}</p>
        </section>

        <section v-else class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="model in filteredModels"
            :key="model.name"
            class="group rounded-[2rem] border bg-white/80 p-6 shadow-[0_20px_60px_-34px_rgba(15,23,42,0.4)] backdrop-blur transition-transform duration-200 hover:-translate-y-1 dark:bg-dark-900/80"
            :class="platformBorderClass(model.platform)"
          >
            <div class="flex items-start justify-between gap-4">
              <div>
                <div class="flex flex-wrap items-center gap-2">
                  <span
                    class="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide"
                    :class="platformBadgeClass(model.platform)"
                  >
                    <PlatformIcon
                      v-if="isKnownPlatform(model.platform)"
                      :platform="model.platform"
                      size="xs"
                    />
                    {{ providerLabel(model) }}
                  </span>
                  <span class="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-gray-500 dark:bg-dark-800 dark:text-dark-300">
                    {{ modeLabel(model.mode) }}
                  </span>
                </div>
                <h2 class="mt-3 break-all text-xl font-semibold text-gray-900 dark:text-white">
                  {{ model.name }}
                </h2>
              </div>
              <div class="rounded-2xl bg-gray-100 px-3 py-2 text-right dark:bg-dark-800">
                <div class="text-[11px] uppercase tracking-[0.18em] text-gray-500 dark:text-dark-400">
                  {{ t('modelsPage.contextWindow') }}
                </div>
                <div class="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                  {{ formatContextWindow(model) }}
                </div>
              </div>
            </div>

            <dl class="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div class="rounded-2xl bg-gray-50 px-3 py-3 dark:bg-dark-800/80">
                <dt class="text-xs uppercase tracking-[0.18em] text-gray-500 dark:text-dark-400">
                  {{ t('modelsPage.inputPrice') }}
                </dt>
                <dd class="mt-1 font-semibold text-gray-900 dark:text-white">
                  {{ formatTokenPrice(model.input_price) }}
                </dd>
              </div>
              <div class="rounded-2xl bg-gray-50 px-3 py-3 dark:bg-dark-800/80">
                <dt class="text-xs uppercase tracking-[0.18em] text-gray-500 dark:text-dark-400">
                  {{ t('modelsPage.outputPrice') }}
                </dt>
                <dd class="mt-1 font-semibold text-gray-900 dark:text-white">
                  {{ formatTokenPrice(model.output_price) }}
                </dd>
              </div>
              <div class="rounded-2xl bg-gray-50 px-3 py-3 dark:bg-dark-800/80">
                <dt class="text-xs uppercase tracking-[0.18em] text-gray-500 dark:text-dark-400">
                  {{ t('modelsPage.cacheWritePrice') }}
                </dt>
                <dd class="mt-1 font-semibold text-gray-900 dark:text-white">
                  {{ formatTokenPrice(model.cache_write_price) }}
                </dd>
              </div>
              <div class="rounded-2xl bg-gray-50 px-3 py-3 dark:bg-dark-800/80">
                <dt class="text-xs uppercase tracking-[0.18em] text-gray-500 dark:text-dark-400">
                  {{ t('modelsPage.cacheReadPrice') }}
                </dt>
                <dd class="mt-1 font-semibold text-gray-900 dark:text-white">
                  {{ formatTokenPrice(model.cache_read_price) }}
                </dd>
              </div>
              <div class="rounded-2xl bg-gray-50 px-3 py-3 dark:bg-dark-800/80">
                <dt class="text-xs uppercase tracking-[0.18em] text-gray-500 dark:text-dark-400">
                  {{ t('modelsPage.imageTokenPrice') }}
                </dt>
                <dd class="mt-1 font-semibold text-gray-900 dark:text-white">
                  {{ formatTokenPrice(model.image_output_price) }}
                </dd>
              </div>
              <div class="rounded-2xl bg-gray-50 px-3 py-3 dark:bg-dark-800/80">
                <dt class="text-xs uppercase tracking-[0.18em] text-gray-500 dark:text-dark-400">
                  {{ t('modelsPage.imagePrice') }}
                </dt>
                <dd class="mt-1 font-semibold text-gray-900 dark:text-white">
                  {{ formatPerImagePrice(model.per_image_price) }}
                </dd>
              </div>
            </dl>

            <div v-if="model.max_output_tokens > 0 || model.max_tokens > 0" class="mt-4 rounded-2xl border border-dashed border-gray-200 px-4 py-3 text-sm text-gray-600 dark:border-dark-700 dark:text-dark-300">
              <span class="font-medium text-gray-900 dark:text-white">{{ t('modelsPage.outputLimit') }}:</span>
              {{ formatOutputWindow(model) }}
            </div>

            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="tag in capabilityTags(model)"
                :key="tag"
                class="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-dark-800 dark:text-dark-200"
              >
                {{ tag }}
              </span>
            </div>
          </article>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import LocaleSwitcher from '@/components/common/LocaleSwitcher.vue'
import Icon from '@/components/icons/Icon.vue'
import PlatformIcon from '@/components/common/PlatformIcon.vue'
import modelsAPI, { type PublicModelCatalogItem } from '@/api/models'
import { useAppStore } from '@/stores/app'
import { useAuthStore } from '@/stores/auth'
import { formatScaled } from '@/utils/pricing'
import { extractApiErrorMessage } from '@/utils/apiError'
import { platformBadgeClass, platformBorderClass } from '@/utils/platformColors'
import type { GroupPlatform } from '@/types'

const { t } = useI18n()
const appStore = useAppStore()
const authStore = useAuthStore()

const loading = ref(false)
const errorMessage = ref('')
const models = ref<PublicModelCatalogItem[]>([])
const searchQuery = ref('')
const selectedProvider = ref('')
const selectedCapabilities = ref(new Set<string>())
const isDark = ref(document.documentElement.classList.contains('dark'))

const siteName = computed(() => appStore.cachedPublicSettings?.site_name || appStore.siteName || 'Sub2API')
const siteLogo = computed(() => appStore.cachedPublicSettings?.site_logo || appStore.siteLogo || '')
const docUrl = computed(() => appStore.cachedPublicSettings?.doc_url || appStore.docUrl || '')

const isAuthenticated = computed(() => authStore.isAuthenticated)
const isAdmin = computed(() => authStore.isAdmin)
const dashboardPath = computed(() => (isAdmin.value ? '/admin/dashboard' : '/dashboard'))

const providerOptions = computed(() =>
  Array.from(
    new Set(models.value.map((item) => item.provider?.trim()).filter((item): item is string => Boolean(item))),
  ).sort((a, b) => a.localeCompare(b)),
)

const capabilityOptions = computed(() => [
  { key: 'vision', label: t('modelsPage.capabilities.vision') },
  { key: 'function_calling', label: t('modelsPage.capabilities.functionCalling') },
  { key: 'prompt_caching', label: t('modelsPage.capabilities.promptCaching') },
  { key: 'service_tier', label: t('modelsPage.capabilities.serviceTier') },
  { key: 'tiered_pricing', label: t('modelsPage.capabilities.tieredPricing') },
])

const filteredModels = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  return models.value.filter((model) => {
    const provider = (model.provider || '').toLowerCase()
    const platform = (model.platform || '').toLowerCase()
    const searchableTags = capabilityTags(model).join(' ').toLowerCase()
    const searchHit =
      !q ||
      model.name.toLowerCase().includes(q) ||
      provider.includes(q) ||
      platform.includes(q) ||
      searchableTags.includes(q)

    const providerHit = !selectedProvider.value || model.provider === selectedProvider.value
    const capabilityHit = Array.from(selectedCapabilities.value).every((key) => matchesCapability(model, key))

    return searchHit && providerHit && capabilityHit
  })
})

const statsCards = computed(() => {
  const total = models.value.length
  const providers = providerOptions.value.length
  const visionCount = models.value.filter((item) => item.supports_vision).length
  const functionCount = models.value.filter((item) => item.supports_function_calling).length
  return [
    {
      key: 'models',
      label: t('modelsPage.stats.totalModels'),
      value: total.toLocaleString(),
      hint: t('modelsPage.stats.totalModelsHint'),
    },
    {
      key: 'providers',
      label: t('modelsPage.stats.providers'),
      value: providers.toLocaleString(),
      hint: t('modelsPage.stats.providersHint'),
    },
    {
      key: 'vision',
      label: t('modelsPage.stats.visionReady'),
      value: visionCount.toLocaleString(),
      hint: t('modelsPage.stats.visionReadyHint'),
    },
    {
      key: 'functions',
      label: t('modelsPage.stats.functionCallingReady'),
      value: functionCount.toLocaleString(),
      hint: t('modelsPage.stats.functionCallingReadyHint'),
    },
  ]
})

function isKnownPlatform(value: string): value is GroupPlatform {
  return value === 'anthropic' || value === 'openai' || value === 'gemini' || value === 'antigravity'
}

function providerLabel(model: PublicModelCatalogItem): string {
  return model.provider || model.platform || t('common.unknown')
}

function formatTokenPrice(value: number): string {
  if (value <= 0) return '-'
  return `${formatScaled(value, 1_000_000)} / 1M`
}

function formatPerImagePrice(value: number): string {
  if (value <= 0) return '-'
  return `${formatScaled(value, 1)} / ${t('modelsPage.perImageUnit')}`
}

function formatCompactNumber(value: number): string {
  if (value <= 0) return '-'
  if (value >= 1_000_000) return `${trimDecimal(value / 1_000_000)}M`
  if (value >= 1_000) return `${trimDecimal(value / 1_000)}K`
  return String(value)
}

function trimDecimal(value: number): string {
  return value.toFixed(value >= 100 ? 0 : value >= 10 ? 1 : 2).replace(/\.0+$/, '').replace(/(\.\d*[1-9])0+$/, '$1')
}

function formatContextWindow(model: PublicModelCatalogItem): string {
  return model.max_input_tokens > 0 ? formatCompactNumber(model.max_input_tokens) : '-'
}

function formatOutputWindow(model: PublicModelCatalogItem): string {
  const output = model.max_output_tokens > 0 ? formatCompactNumber(model.max_output_tokens) : '-'
  const fallback = model.max_tokens > 0 ? formatCompactNumber(model.max_tokens) : '-'
  return output !== '-' ? output : fallback
}

function modeLabel(mode: string): string {
  const normalized = mode?.trim().toLowerCase()
  switch (normalized) {
    case 'chat':
      return t('modelsPage.modes.chat')
    case 'image_generation':
      return t('modelsPage.modes.imageGeneration')
    case 'embedding':
      return t('modelsPage.modes.embedding')
    case 'completion':
      return t('modelsPage.modes.completion')
    default:
      return normalized || t('common.unknown')
  }
}

function capabilityTags(model: PublicModelCatalogItem): string[] {
  const tags: string[] = []
  if (model.supports_vision) tags.push(t('modelsPage.capabilities.vision'))
  if (model.supports_function_calling) tags.push(t('modelsPage.capabilities.functionCalling'))
  if (model.supports_prompt_caching) tags.push(t('modelsPage.capabilities.promptCaching'))
  if (model.supports_service_tier) tags.push(t('modelsPage.capabilities.serviceTier'))
  if (model.token_pricing_tiers?.length > 0) tags.push(t('modelsPage.capabilities.tieredPricing'))
  return tags
}

function matchesCapability(model: PublicModelCatalogItem, key: string): boolean {
  switch (key) {
    case 'vision':
      return model.supports_vision
    case 'function_calling':
      return model.supports_function_calling
    case 'prompt_caching':
      return model.supports_prompt_caching
    case 'service_tier':
      return model.supports_service_tier
    case 'tiered_pricing':
      return (model.token_pricing_tiers?.length || 0) > 0
    default:
      return true
  }
}

function toggleCapability(key: string) {
  const next = new Set(selectedCapabilities.value)
  if (next.has(key)) {
    next.delete(key)
  } else {
    next.add(key)
  }
  selectedCapabilities.value = next
}

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme')
  if (
    savedTheme === 'dark' ||
    (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
}

async function loadModels() {
  loading.value = true
  errorMessage.value = ''
  try {
    models.value = await modelsAPI.listPublicModels()
  } catch (err: unknown) {
    errorMessage.value = extractApiErrorMessage(err, t('common.error'))
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  initTheme()
  authStore.checkAuth()
  if (!appStore.publicSettingsLoaded) {
    appStore.fetchPublicSettings()
  }
  loadModels()
})
</script>
