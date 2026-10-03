'use client'

import * as React from 'react'
import { translations, type Language, languages, type LanguageOption } from '@/data/translations'
import { getLocalizedField, getLocalizedItem, getLocalizedList } from '@/lib/i18n'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.en
  currentLanguageOption: LanguageOption
  availableLanguages: LanguageOption[]
  localize: <T extends Record<string, any>>(item: T | null | undefined) => T
  localizeField: <T extends Record<string, any>>(item: T | null | undefined, field: keyof T) => any
  localizeList: <T extends Record<string, any>>(items: T[] | null | undefined) => T[]
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>('en')
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('infinity_tkd_lang') as Language
    if (saved && (saved === 'en' || saved === 'km' || saved === 'zh' || saved === 'ko')) {
      setLanguageState(saved)
      document.documentElement.lang = saved
    }
  }, [])

  const setLanguage = React.useCallback((lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('infinity_tkd_lang', lang)
    document.documentElement.lang = lang
  }, [])

  const currentLanguageOption = React.useMemo(() => {
    return languages.find((l) => l.code === language) || languages[0]
  }, [language])

  const t = React.useMemo(() => {
    return translations[language] || translations.en
  }, [language])

  const localize = React.useCallback(
    <T extends Record<string, any>>(item: T | null | undefined): T => {
      return getLocalizedItem(item, language)
    },
    [language]
  )

  const localizeField = React.useCallback(
    <T extends Record<string, any>>(item: T | null | undefined, field: keyof T): any => {
      return getLocalizedField(item, field, language)
    },
    [language]
  )

  const localizeList = React.useCallback(
    <T extends Record<string, any>>(items: T[] | null | undefined): T[] => {
      return getLocalizedList(items, language)
    },
    [language]
  )

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        currentLanguageOption,
        availableLanguages: languages,
        localize,
        localizeField,
        localizeList,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
