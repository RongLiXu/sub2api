import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { describe, expect, it } from 'vitest'

const componentPath = resolve(dirname(fileURLToPath(import.meta.url)), '../HomeView.vue')
const componentSource = readFileSync(componentPath, 'utf8')

describe('HomeView model plaza entry', () => {
  it('hides model plaza buttons when backend mode is enabled', () => {
    expect(componentSource).toContain('const showModelsPlazaButton = computed(() => !appStore.backendModeEnabled)')
    expect(componentSource.match(/v-if="showModelsPlazaButton"/g)?.length).toBe(2)
  })
})
