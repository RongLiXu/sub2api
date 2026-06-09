import { beforeEach, describe, expect, it, vi } from 'vitest'

const { get, post } = vi.hoisted(() => ({
  get: vi.fn(),
  post: vi.fn(),
}))

vi.mock('@/api/client', () => ({
  apiClient: {
    get,
    post,
  },
}))

import { bulkUpdate, exportData, list } from '@/api/admin/accounts'

describe('admin accounts api filters', () => {
  beforeEach(() => {
    get.mockReset()
    post.mockReset()
  })

  it('sends email filter together with keyword search when listing accounts', async () => {
    get.mockResolvedValue({ data: { items: [], total: 0, page: 1, page_size: 20, pages: 0 } })

    await list(1, 20, { search: 'alpha', email: 'owner@example.com' })

    expect(get).toHaveBeenCalledWith('/admin/accounts', expect.objectContaining({
      params: expect.objectContaining({
        search: 'alpha',
        email: 'owner@example.com',
      }),
    }))
  })

  it('preserves email filter in filtered bulk update payloads', async () => {
    post.mockResolvedValue({ data: { success: 0, failed: 0, results: [] } })

    await bulkUpdate({
      filters: { search: 'alpha', email: 'owner@example.com' },
      status: 'inactive',
    })

    expect(post).toHaveBeenCalledWith('/admin/accounts/bulk-update', expect.objectContaining({
      filters: expect.objectContaining({
        search: 'alpha',
        email: 'owner@example.com',
      }),
    }))
  })

  it('preserves email filter in account data export params', async () => {
    get.mockResolvedValue({ data: { exported_at: '2026-06-09T00:00:00Z', proxies: [], accounts: [] } })

    await exportData({ filters: { search: 'alpha', email: 'owner@example.com' } })

    expect(get).toHaveBeenCalledWith('/admin/accounts/data', expect.objectContaining({
      params: expect.objectContaining({
        search: 'alpha',
        email: 'owner@example.com',
      }),
    }))
  })
})
