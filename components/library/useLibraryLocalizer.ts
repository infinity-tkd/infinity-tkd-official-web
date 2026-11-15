'use client'

import * as React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import type { LibraryItem } from '@/data/library/types'

interface Tables {
  poomsae: (item: LibraryItem, language: string) => LibraryItem
  kicking: (item: LibraryItem, language: 'en' | 'km' | 'zh' | 'ko') => LibraryItem
}

let pending: Promise<Tables> | null = null

/** The Poomsae and kicking translation tables are about 300 KB of Khmer, Chinese and Korean text; fetched once, on demand. */
function loadTables(): Promise<Tables> {
  pending ??= Promise.all([
    import('@/data/library/poomsae/poomsaeTranslations'),
    import('@/data/library/kicking/kickingTranslationsDetailed'),
  ]).then(([poomsae, kicking]) => ({ poomsae: poomsae.decoratePoomsaeItem, kicking: kicking.getLocalizedKickingItem }))
  return pending
}

/**
 * Returns a function that shows a library item in the visitor's language.
 *
 * English needs no translation, so English visitors never download the big Poomsae and kicking tables
 * (they used to ship in the bundle of every library page). For Khmer, Chinese and Korean the tables load right
 * after the page does; until they arrive, items show whatever translation the item itself carries.
 */
export function useLibraryLocalizer() {
  const { language, localize } = useLanguage()
  const [tables, setTables] = React.useState<Tables | null>(null)

  React.useEffect(() => {
    if (language === 'en') return
    let active = true
    loadTables().then((loaded) => {
      if (active) setTables(loaded)
    })
    return () => {
      active = false
    }
  }, [language])

  return React.useCallback(
    (item: LibraryItem): LibraryItem => {
      if (language === 'en') return item
      if (tables && item.category === 'poomsae') return tables.poomsae(item, language)
      if (tables && (item.category === 'kicking-fundamentals' || item.category === 'kicking-advanced')) {
        return tables.kicking(item, language)
      }
      return localize(item)
    },
    [language, localize, tables]
  )
}
