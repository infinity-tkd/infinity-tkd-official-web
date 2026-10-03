/**
 * ==============================================================================
 * INFINITY TAEKWONDO — UNIVERSAL DATA LOCALIZATION & TRANSLATION ENGINE
 * ==============================================================================
 *
 * Provides typed, zero-throw localization utilities for database models (.ts files).
 * Any entity can optionally define translated content for 'km', 'zh', or 'ko'.
 *
 * If translation data exists for the active language, it will be displayed seamlessly.
 * If translation data is missing or empty, it automatically defaults to English ('en').
 *
 * ==============================================================================
 */

import type { Language } from '@/data/translations'

/**
 * Generic interface to extend any database model with optional multilingual translations
 */
export interface WithTranslations<T> {
  translations?: {
    km?: Partial<T>
    zh?: Partial<T>
    ko?: Partial<T>
    [lang: string]: Partial<T> | undefined
  }
  [key: string]: any
}

/**
 * Retrieve a specific localized field from an object with automatic English fallback.
 *
 * @param item The database object (e.g. AcademyCourse, LibraryItem, DojangBranch)
 * @param field The field key to retrieve (e.g. 'title', 'description', 'summary')
 * @param language The target language ('en' | 'km' | 'zh' | 'ko')
 * @param defaultLang The fallback language (default: 'en')
 * @returns The translated string, or the default English value if no translation exists.
 */
export function getLocalizedField<T extends Record<string, any>>(
  item: T | null | undefined,
  field: keyof T,
  language: Language = 'en',
  defaultLang: Language = 'en'
): any {
  if (!item) return ''

  // 1. If language is English, return the default field directly
  if (language === defaultLang) {
    return item[field] ?? ''
  }

  // 2. Check nested translations object: item.translations[language][field]
  if (item.translations && typeof item.translations === 'object') {
    const langObj = item.translations[language]
    if (langObj && langObj[field] !== undefined && langObj[field] !== null && langObj[field] !== '') {
      return langObj[field]
    }
  }

  // 3. Check suffixed property key: item[`${field}_${language}`] (e.g. title_km)
  const suffixedKey = `${String(field)}_${language}`
  if (item[suffixedKey] !== undefined && item[suffixedKey] !== null && item[suffixedKey] !== '') {
    return item[suffixedKey]
  }

  // 4. Default fallback: Return English default value
  return item[field] ?? ''
}

/**
 * Retrieve a fully localized copy of a database item.
 * Any translated fields for the active language will override the defaults,
 * while non-translated fields preserve their original English values.
 *
 * @param item The database entity
 * @param language The active language
 * @returns A localized copy of the entity
 */
export function getLocalizedItem<T extends Record<string, any>>(
  item: T | null | undefined,
  language: Language = 'en'
): T {
  if (!item) return {} as T
  if (language === 'en') return { ...item }

  const localized: Record<string, any> = { ...item }

  // Merge translations object if present
  if (item.translations && typeof item.translations === 'object') {
    const langOverrides = item.translations[language]
    if (langOverrides && typeof langOverrides === 'object') {
      for (const [key, value] of Object.entries(langOverrides)) {
        if (value !== undefined && value !== null && value !== '') {
          localized[key] = value
        }
      }
    }
  }

  // Merge suffixed keys (e.g. name_km -> name)
  for (const key of Object.keys(item)) {
    if (key.endsWith(`_${language}`)) {
      const baseKey = key.slice(0, -(language.length + 1))
      if (item[key] !== undefined && item[key] !== null && item[key] !== '') {
        localized[baseKey] = item[key]
      }
    }
  }

  return localized as T
}

/**
 * Localize an entire list of database records.
 *
 * @param items Array of database items
 * @param language The active language
 * @returns Array of localized items with automatic English fallbacks
 */
export function getLocalizedList<T extends Record<string, any>>(
  items: T[] | null | undefined,
  language: Language = 'en'
): T[] {
  if (!Array.isArray(items)) return []
  if (language === 'en') return items
  return items.map((item) => getLocalizedItem(item, language))
}

export default {
  getLocalizedField,
  getLocalizedItem,
  getLocalizedList,
}
