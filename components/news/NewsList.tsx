'use client'

import * as React from 'react'
import { NewsCard } from '@/components/news/NewsCard'
import { useLanguage } from '@/context/LanguageContext'
import { newsItems, type NewsItem } from '@/data/news'
import { formatNewsDate } from '@/lib/newsFormat'
import type { Language } from '@/data/translations'

export interface NewsLabels {
  readMore: string
  newTab: string
  emptyTitle: string
  emptyText: string
}

/** The announcements as cards, or a friendly message when there are none. (Pure: the page below supplies the language.) */
export function NewsGrid({ items, language, labels }: { items: NewsItem[]; language: Language; labels: NewsLabels }) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-300 p-10 text-center dark:border-zinc-800">
        <p className="text-lg font-bold uppercase">{labels.emptyTitle}</p>
        <p className="mt-2 text-sm font-light text-zinc-600 dark:text-zinc-400">{labels.emptyText}</p>
      </div>
    )
  }
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.id}>
          <NewsCard item={item} dateLabel={formatNewsDate(item.date, language)} readMore={labels.readMore} newTab={labels.newTab} headingLevel={2} />
        </li>
      ))}
    </ul>
  )
}

/** Every announcement, newest first, in the visitor's language (English where it was not translated). */
export function NewsList() {
  const { t, language, localizeList } = useLanguage()
  const items = React.useMemo(() => localizeList(newsItems), [localizeList])
  return (
    <NewsGrid
      items={items}
      language={language}
      labels={{ readMore: t.common.readMore, newTab: t.news.opensInNewTab, emptyTitle: t.news.emptyTitle, emptyText: t.news.emptyText }}
    />
  )
}
