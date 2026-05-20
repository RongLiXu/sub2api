type LocaleValue = string | number | boolean | null | undefined | LocaleObject | LocaleValue[]

type LocaleObject = {
  [key: string]: LocaleValue
}

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends (infer U)[]
    ? DeepPartial<U>[]
    : T[K] extends Record<string, unknown>
      ? DeepPartial<T[K]>
      : T[K]
}

function isPlainObject(value: LocaleValue): value is LocaleObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function cloneLocaleValue(value: LocaleValue): LocaleValue {
  if (Array.isArray(value)) {
    return value.map((item) => cloneLocaleValue(item))
  }

  if (isPlainObject(value)) {
    return mergeLocaleMessages({}, value)
  }

  return value
}

export function mergeLocaleMessages<T extends LocaleObject>(base: T, overrides: DeepPartial<T>): T {
  const result: LocaleObject = {}

  for (const [key, value] of Object.entries(base)) {
    result[key] = cloneLocaleValue(value)
  }

  for (const [key, value] of Object.entries(overrides)) {
    if (value === undefined) {
      continue
    }

    const current = result[key]
    if (isPlainObject(current) && isPlainObject(value)) {
      result[key] = mergeLocaleMessages(current, value)
      continue
    }

    result[key] = cloneLocaleValue(value)
  }

  return result as T
}

export function pruneLocaleMessagePaths<T extends LocaleObject>(source: T, paths: string[]): T {
  const result = mergeLocaleMessages({} as T, source as DeepPartial<T>)

  for (const path of paths) {
    const segments = path
      .split('.')
      .map((segment) => segment.trim())
      .filter(Boolean)
    if (segments.length === 0) {
      continue
    }

    let current: LocaleObject | undefined = result
    for (let index = 0; index < segments.length - 1; index += 1) {
      const next: LocaleValue = current?.[segments[index]]
      if (!isPlainObject(next)) {
        current = undefined
        break
      }
      current = next
    }

    if (!current) {
      continue
    }
    delete current[segments[segments.length - 1]]
  }

  return result
}
