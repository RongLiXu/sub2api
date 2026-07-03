import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const read = (path: string) => readFileSync(resolve(process.cwd(), path), 'utf8')

describe('proxy failed status UI contract', () => {
  it('allows failed proxy status in API and shared types', () => {
    const types = read('src/types/index.ts')
    const api = read('src/api/admin/proxies.ts')

    expect(types).toContain("status: 'active' | 'inactive' | 'expired' | 'failed'")
    expect(api).toContain("status?: 'active' | 'inactive' | 'expired' | 'failed'")
  })

  it('exposes failed status filters and delete failed proxies action', () => {
    const view = read('src/views/admin/ProxiesView.vue')
    const zh = read('src/i18n/locales/zh.ts')
    const en = read('src/i18n/locales/en.ts')

    expect(view).toContain("{ value: 'failed', label: t('admin.proxies.failed') }")
    expect(view).toContain('confirmDeleteFailedProxies')
    expect(view).toContain("status: 'failed'")
    expect(zh).toContain("deleteFailedAction: '删除失败代理'")
    expect(en).toContain("deleteFailedAction: 'Delete Failed'")
  })

  it('uses wide reauthorization dialogs', () => {
    const adminReauth = read('src/components/admin/account/ReAuthAccountModal.vue')
    const accountReauth = read('src/components/account/ReAuthAccountModal.vue')

    expect(adminReauth).toContain('width="wide"')
    expect(accountReauth).toContain('width="wide"')
  })
})
