<template>
  <BaseDialog :show="show" :title="t('admin.users.creditLedgerTitle')" width="wide" @close="$emit('close')">
    <div v-if="user" class="space-y-4">
      <div class="rounded-xl bg-gray-50 p-4 dark:bg-dark-700">
        <div class="flex items-center justify-between">
          <div>
            <p class="font-medium text-gray-900 dark:text-white">{{ user.email }}</p>
            <p class="text-sm text-gray-500">{{ t('admin.users.currentCreditBalance') }}: ${{ (user.credit_balance || 0).toFixed(2) }}</p>
          </div>
        </div>
      </div>

      <div v-if="loading" class="py-8 text-center text-gray-500">{{ t('common.loading') }}</div>
      <div v-else-if="items.length === 0" class="py-8 text-center text-gray-500">{{ t('admin.users.noCreditLedger') }}</div>
      <div v-else class="space-y-3">
        <div
          v-for="item in items"
          :key="item.id"
          class="rounded-xl border border-gray-200 bg-white p-4 dark:border-dark-600 dark:bg-dark-800"
        >
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-sm font-medium text-gray-900 dark:text-white">{{ formatEntryType(item.entry_type) }}</p>
              <p class="text-xs text-gray-500">{{ formatSource(item.source) }}</p>
              <p v-if="item.request_id" class="mt-1 font-mono text-xs text-gray-400">{{ item.request_id }}</p>
              <p v-if="item.notes" class="mt-1 text-xs text-gray-500">{{ item.notes }}</p>
            </div>
            <div class="text-right">
              <p :class="['text-sm font-semibold', item.amount >= 0 ? 'text-emerald-600' : 'text-red-600']">
                {{ item.amount >= 0 ? '+' : '' }}${{ Math.abs(item.amount).toFixed(2) }}
              </p>
              <p class="text-xs text-gray-500">{{ t('admin.users.balanceAfter') }}: ${{ item.balance_after.toFixed(2) }}</p>
              <p class="text-xs text-gray-400">{{ formatDateTime(item.created_at) }}</p>
            </div>
          </div>
        </div>
      </div>

      <Pagination
        v-if="pagination.total > pagination.page_size"
        :page="pagination.page"
        :total="pagination.total"
        :page-size="pagination.page_size"
        @update:page="loadItems"
      />
    </div>
  </BaseDialog>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { adminAPI } from '@/api/admin'
import type { AdminCreditLedgerItem, AdminUser } from '@/types'
import { formatDateTime } from '@/utils/format'
import BaseDialog from '@/components/common/BaseDialog.vue'
import Pagination from '@/components/common/Pagination.vue'

const props = defineProps<{ show: boolean; user: AdminUser | null }>()
defineEmits(['close'])
const { t } = useI18n()

const loading = ref(false)
const items = ref<AdminCreditLedgerItem[]>([])
const pagination = reactive({ page: 1, page_size: 20, total: 0 })

const formatEntryType = (value: string) => {
  const map: Record<string, string> = {
    admin_set: t('admin.users.creditEntryTypes.admin_set'),
    admin_add: t('admin.users.creditEntryTypes.admin_add'),
    admin_subtract: t('admin.users.creditEntryTypes.admin_subtract'),
    usage_deduct: t('admin.users.creditEntryTypes.usage_deduct'),
    redeem_grant: t('admin.users.creditEntryTypes.redeem_grant'),
    promo_grant: t('admin.users.creditEntryTypes.promo_grant')
  }
  return map[value] || value
}

const formatSource = (value: string) => {
  const map: Record<string, string> = {
    admin: t('admin.users.creditSources.admin'),
    usage_billing: t('admin.users.creditSources.usage_billing'),
    redeem: t('admin.users.creditSources.redeem'),
    promo: t('admin.users.creditSources.promo')
  }
  return map[value] || value
}

const loadItems = async (page = 1) => {
  if (!props.user) return
  loading.value = true
  pagination.page = page
  try {
    const res = await adminAPI.users.getUserCreditLedger(props.user.id, page, pagination.page_size)
    items.value = res.items
    pagination.total = res.total
  } finally {
    loading.value = false
  }
}

watch(() => props.show, (v) => {
  if (v) {
    void loadItems(1)
  }
})
</script>
