import type { Language } from '@/data/translations'

/** The locale each website language writes dates in. */
export const DATE_LOCALES: Record<Language, string> = { en: 'en-GB', km: 'km-KH', zh: 'zh-CN', ko: 'ko-KR' }

/**
 * "2026-11-20" as a long date in the visitor's language ("20 November 2026"). Noon UTC keeps the day the same in every
 * time zone. Gives the date as written when it cannot be read, so a card never shows "Invalid Date".
 */
export function formatNewsDate(iso: string, language: Language = 'en'): string {
  const date = new Date(`${iso}T12:00:00Z`)
  if (Number.isNaN(date.getTime())) return iso
  return date.toLocaleDateString(DATE_LOCALES[language] ?? DATE_LOCALES.en, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
}
