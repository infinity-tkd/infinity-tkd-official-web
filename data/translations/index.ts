import { en, type Translations } from './en'

export type Language = 'en' | 'km' | 'zh' | 'ko'

export interface LanguageOption {
  code: Language
  label: string
  nativeName: string
  flag: string
}

export const languages: LanguageOption[] = [
  { code: 'en', label: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'km', label: 'Khmer', nativeName: 'ភាសាខ្មែរ', flag: '🇰🇭' },
  { code: 'zh', label: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'ko', label: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
]

export type { Translations }

/** English ships with the app shell; every other dictionary is fetched on demand. */
export const translationsEn: Translations = en

export function isLanguage(value: unknown): value is Language {
  return value === 'en' || value === 'km' || value === 'zh' || value === 'ko'
}

const cache = new Map<Language, Translations>([['en', en]])

/**
 * Loads the UI dictionary for a language. Non-English dictionaries are code-split, so a
 * visitor who only reads English never downloads Khmer, Chinese or Korean strings.
 */
export async function loadTranslations(language: Language): Promise<Translations> {
  const cached = cache.get(language)
  if (cached) return cached

  let dictionary: Translations
  switch (language) {
    case 'km':
      dictionary = (await import('./km')).km
      break
    case 'zh':
      dictionary = (await import('./zh')).zh
      break
    case 'ko':
      dictionary = (await import('./ko')).ko
      break
    default:
      dictionary = en
  }
  cache.set(language, dictionary)
  return dictionary
}