import { describe, expect, it, vi } from 'vitest'

vi.mock('@/api/admin/accounts', () => ({
  getAntigravityDefaultModelMapping: vi.fn()
}))

import { allModels, buildModelMappingObject, getModelsByPlatform, splitModelMappingObject } from '../useModelWhitelist'

describe('useModelWhitelist', () => {
  it('openai 模型列表包含 GPT-5.5 和 GPT-5.4 官方快照', () => {
    const models = getModelsByPlatform('openai')

    expect(models).toContain('gpt-5.5')
    expect(models).toContain('gpt-5.5-pro')
    expect(models).toContain('gpt-5.4-pro')
    expect(models).toContain('gpt-5.4-pro-2026-03-05')
    expect(models).toContain('gpt-5.4')
    expect(models).toContain('gpt-5.4-mini')
    expect(models).toContain('gpt-5.4-2026-03-05')
    expect(models).toContain("codex-auto-review");
  })

  it('openai 模型列表包含 MiMo OpenAI 兼容模型', () => {
    const models = getModelsByPlatform('openai')

    expect(models).toContain('mimo-v2.5-pro')
    expect(models).toContain('mimo-v2.5')
    expect(models).toContain('mimo-v2-pro')
  })

  it('openai 模型列表包含 DeepSeek V4 OpenAI 兼容模型', () => {
    const models = getModelsByPlatform('openai')

    expect(models).toContain('deepseek-v4-flash')
    expect(models).toContain('deepseek-v4-pro')
  })

  it('deepseek 模型列表包含 DeepSeek V4 模型', () => {
    const models = getModelsByPlatform('deepseek')

    expect(models).toContain('deepseek-v4-flash')
    expect(models).toContain('deepseek-v4-pro')
  })

  it('allModels 会对跨平台重复模型去重，避免 DeepSeek V4 重复出现', () => {
    const deepseekV4Models = allModels
      .map(model => model.value)
      .filter(model => model === 'deepseek-v4-flash' || model === 'deepseek-v4-pro')

    expect(deepseekV4Models).toEqual(['deepseek-v4-flash', 'deepseek-v4-pro'])
  })

  it('anthropic 模型列表包含最新 Claude 官方模型', () => {
    const models = getModelsByPlatform('anthropic')

    expect(models).toContain('claude-opus-4-7')
    expect(models).toContain('claude-opus-4-6')
    expect(models).toContain('claude-sonnet-4-6')
    expect(models).toContain('claude-haiku-4-5')
    expect(models).toContain('claude-haiku-4-5-20251001')
    expect(models.indexOf('claude-opus-4-7')).toBeLessThan(models.indexOf('claude-3-5-sonnet-20241022'))
  })

  it('zhipu 模型列表包含最新 GLM 旗舰模型', () => {
    const models = getModelsByPlatform('zhipu')

    expect(models).toContain('glm-5.1')
    expect(models).toContain('glm-5')
    expect(models).toContain('glm-5-turbo')
    expect(models).toContain('glm-5v-turbo')
    expect(models).toContain('glm-4.7')
    expect(models).toContain('glm-4.7-flashx')
    expect(models).toContain('glm-4.7-flash')
    expect(models).toContain('glm-4.6v')
    expect(models).toContain('glm-4.6v-flashx')
    expect(models).toContain('glm-4.6v-flash')
    expect(models.indexOf('glm-5.1')).toBeLessThan(models.indexOf('glm-4'))
  })

  it('qwen 模型列表包含最新 Qwen3.6 模型', () => {
    const models = getModelsByPlatform('qwen')

    expect(models).toContain('qwen3.6-max-preview')
    expect(models).toContain('qwen3.6-plus')
    expect(models).toContain('qwen3.6-plus-2026-04-02')
    expect(models).toContain('qwen3.6-flash')
    expect(models).toContain('qwen3.6-flash-2026-04-16')
    expect(models).toContain('qwen3.6-35b-a3b')
    expect(models).toContain('qwen3.6-27b')
    expect(models.indexOf('qwen3.6-max-preview')).toBeLessThan(models.indexOf('qwen-turbo'))
  })

  it('openai 模型列表不再暴露已下线的 ChatGPT 登录 Codex 模型', () => {
    const models = getModelsByPlatform('openai')

    expect(models).not.toContain('gpt-5')
    expect(models).not.toContain('gpt-5.1')
    expect(models).not.toContain('gpt-5.1-codex')
    expect(models).not.toContain('gpt-5.1-codex-max')
    expect(models).not.toContain('gpt-5.1-codex-mini')
    expect(models).not.toContain('gpt-5.2-codex')
  })

  it('antigravity 模型列表包含图片模型兼容项', () => {
    const models = getModelsByPlatform('antigravity')

    expect(models).toContain('gemini-2.5-flash-image')
    expect(models).toContain('gemini-3.1-flash-image')
    expect(models).toContain('gemini-3-pro-image')
  })

  it('gemini 模型列表包含原生生图模型', () => {
    const models = getModelsByPlatform('gemini')

    expect(models).toContain('gemini-2.5-flash-image')
    expect(models).toContain('gemini-3.1-flash-image')
    expect(models.indexOf('gemini-3.1-flash-image')).toBeLessThan(models.indexOf('gemini-2.0-flash'))
    expect(models.indexOf('gemini-2.5-flash-image')).toBeLessThan(models.indexOf('gemini-2.5-flash'))
  })

  it('antigravity 模型列表会把新的 Gemini 图片模型排在前面', () => {
    const models = getModelsByPlatform('antigravity')

    expect(models.indexOf('gemini-3.1-flash-image')).toBeLessThan(models.indexOf('gemini-2.5-flash'))
    expect(models.indexOf('gemini-2.5-flash-image')).toBeLessThan(models.indexOf('gemini-2.5-flash-lite'))
  })

  it('whitelist 模式会忽略通配符条目', () => {
    const mapping = buildModelMappingObject('whitelist', ['claude-*', 'gemini-3.1-flash-image'], [])
    expect(mapping).toEqual({
      'gemini-3.1-flash-image': 'gemini-3.1-flash-image'
    })
  })

  it('whitelist 模式会保留 GPT-5.4 官方快照的精确映射', () => {
    const mapping = buildModelMappingObject('whitelist', ['gpt-5.4-2026-03-05'], [])

    expect(mapping).toEqual({
      'gpt-5.4-2026-03-05': 'gpt-5.4-2026-03-05'
    })
  })

  it('whitelist keeps GPT-5.4 mini exact mappings', () => {
    const mapping = buildModelMappingObject('whitelist', ['gpt-5.4-mini'], [])

    expect(mapping).toEqual({
      'gpt-5.4-mini': 'gpt-5.4-mini'
    })
  })

  it('combined 模式会同时保留白名单身份映射和模型映射', () => {
    const mapping = buildModelMappingObject(
      'combined',
      ['gpt-5.4', 'claude-*'],
      [
        { from: 'gpt-latest', to: 'gpt-5.4' },
        { from: 'gpt-5.4', to: 'gpt-5.4-mini' }
      ]
    )

    expect(mapping).toEqual({
      'gpt-5.4': 'gpt-5.4-mini',
      'gpt-latest': 'gpt-5.4'
    })
  })

  it('splitModelMappingObject 会把身份映射还原成白名单，其余保留为映射', () => {
    const parsed = splitModelMappingObject({
      'gpt-5.4': 'gpt-5.4',
      'gpt-latest': 'gpt-5.4',
      ' ': 'gpt-empty',
      broken: 123
    })

    expect(parsed).toEqual({
      allowedModels: ['gpt-5.4'],
      modelMappings: [{ from: 'gpt-latest', to: 'gpt-5.4' }]
    })
  })
})
