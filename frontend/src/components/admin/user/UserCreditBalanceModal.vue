<template>
  <BaseDialog :show="show" :title="title" width="narrow" @close="$emit('close')">
    <form v-if="user" id="credit-balance-form" class="space-y-5" @submit.prevent="handleSubmit">
      <div class="flex items-center gap-3 rounded-xl bg-gray-50 p-4 dark:bg-dark-700">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
          <span class="text-lg font-medium text-primary-700">{{ user.email.charAt(0).toUpperCase() }}</span>
        </div>
        <div class="flex-1">
          <p class="font-medium text-gray-900 dark:text-white">{{ user.email }}</p>
          <p class="text-sm text-gray-500">
            {{ t('admin.users.currentCreditBalance') }}: ${{ formatAmount(user.credit_balance || 0) }}
          </p>
        </div>
      </div>

      <div>
        <label class="input-label">{{ t('admin.users.creditOperation') }}</label>
        <Select v-model="form.operation" :options="operationOptions" />
      </div>

      <div>
        <label class="input-label">{{ t('admin.users.creditAmount') }}</label>
        <div class="relative">
          <div class="absolute left-3 top-1/2 -translate-y-1/2 font-medium text-gray-500">$</div>
          <input v-model.number="form.amount" type="number" min="0" step="0.01" class="input pl-8" required />
        </div>
      </div>

      <div>
        <label class="input-label">{{ t('admin.users.notes') }}</label>
        <textarea v-model="form.notes" rows="3" class="input" />
      </div>
    </form>

    <template #footer>
      <div class="flex justify-end gap-3">
        <button class="btn btn-secondary" @click="$emit('close')">{{ t('common.cancel') }}</button>
        <button type="submit" form="credit-balance-form" class="btn btn-primary" :disabled="submitting || !form.amount">
          {{ submitting ? t('common.saving') : t('common.confirm') }}
        </button>
      </div>
    </template>
  </BaseDialog>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { adminAPI } from '@/api/admin'
import { useAppStore } from '@/stores/app'
import type { AdminUser } from '@/types'
import BaseDialog from '@/components/common/BaseDialog.vue'
import Select from '@/components/common/Select.vue'

const props = defineProps<{ show: boolean; user: AdminUser | null }>()
const emit = defineEmits(['close', 'success'])
const { t } = useI18n()
const appStore = useAppStore()

const submitting = ref(false)
const form = reactive({
  operation: 'add' as 'set' | 'add' | 'subtract',
  amount: 0,
  notes: ''
})

watch(() => props.show, (v) => {
  if (v) {
    form.operation = 'add'
    form.amount = 0
    form.notes = ''
  }
})

const title = computed(() => t('admin.users.adjustCreditBalance'))
const operationOptions = computed(() => [
  { value: 'set', label: t('admin.users.operationSet') },
  { value: 'add', label: t('admin.users.operationAdd') },
  { value: 'subtract', label: t('admin.users.operationSubtract') }
])

const formatAmount = (value: number) => value.toFixed(2)

const handleSubmit = async () => {
  if (!props.user) return
  submitting.value = true
  try {
    await adminAPI.users.updateCreditBalance(props.user.id, form.amount, form.operation, form.notes)
    appStore.showSuccess(t('common.success'))
    emit('success')
    emit('close')
  } catch (error: any) {
    appStore.showError(error.response?.data?.detail || t('common.error'))
  } finally {
    submitting.value = false
  }
}
</script>
