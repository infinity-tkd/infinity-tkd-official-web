'use client'

import * as React from 'react'
import {
  isLanguage,
  languages,
  loadTranslations,
  translationsEn,
  type Language,
  type LanguageOption,
  type Translations,
} from '@/data/translations'
import { getLocalizedField, getLocalizedItem, getLocalizedList } from '@/lib/i18n'

const STORAGE_KEY = 'infinity_tkd_lang'
const PRETENDARD_STYLESHEET_ID = 'pretendard-css'
const PRETENDARD_STYLESHEET_URL =
  'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
  currentLanguageOption: LanguageOption
  availableLanguages: LanguageOption[]
  localize: <T extends Record<string, any>>(item: T | null | undefined) => T
  localizeField: <T extends Record<string, any>>(item: T | null | undefined, field: keyof T) => any
  localizeList: <T extends Record<string, any>>(items: T[] | null | undefined) => T[]
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined)

/** Korean typography uses Pretendard; it is only fetched when Korean is actually selected. */
function ensurePretendardLoaded() {
  if (document.getElementById(PRETENDARD_STYLESHEET_ID)) return
  const link = document.createElement('link')
  link.id = PRETENDARD_STYLESHEET_ID
  link.rel = 'stylesheet'
  link.href = PRETENDARD_STYLESHEET_URL
  document.head.appendChild(link)
}

function readSavedLanguage(): Language | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return isLanguage(saved) ? saved : null
  } catch {
    return null // storage unavailable (private mode / blocked)
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // `language` and its dictionary always change together, so the UI never shows a
  // mismatched pair (e.g. Khmer language code with English labels).
  const [state, setState] = React.useState<{ language: Language; t: Translations }>({
    language: 'en',
    t: translationsEn,
  })
  const latestRequest = React.useRef(0)

  const applyLanguage = React.useCallback(async (lang: Language) => {
    const requestId = ++latestRequest.current
    try {
      const dictionary = await loadTranslations(lang)
      if (requestId !== latestRequest.current) return // a newer selection superseded this one
      if (lang === 'ko') ensurePretendardLoaded()
      document.documentElement.lang = lang
      setState({ language: lang, t: dictionary })
    } catch (err) {
      console.error(`[i18n] Failed to load "${lang}" dictionary; keeping current language.`, err)
    }
  }, [])

  // Restore the visitor's saved language after hydration (server HTML is always English).
  React.useEffect(() => {
    const saved = readSavedLanguage()
    if (saved && saved !== 'en') void applyLanguage(saved)
  }, [applyLanguage])

  const setLanguage = React.useCallback(
    (lang: Language) => {
      try {
        localStorage.setItem(STORAGE_KEY, lang)
      } catch {
        // Non-fatal: the choice just won't persist across visits.
      }
      void applyLanguage(lang)
    },
    [applyLanguage]
  )

  const { language, t } = state

  const value = React.useMemo<LanguageContextType>(
    () => ({
      language,
      setLanguage,
      t,
      currentLanguageOption: languages.find((l) => l.code === language) ?? languages[0],
      availableLanguages: languages,
      localize: (item) => getLocalizedItem(item, language),
      localizeField: (item, field) => getLocalizedField(item, field, language),
      localizeList: (items) => getLocalizedList(items, language),
    }),
    [language, setLanguage, t]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
