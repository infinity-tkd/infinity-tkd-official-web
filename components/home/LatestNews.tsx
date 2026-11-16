'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowRight, Megaphone } from 'lucide-react'
import { NewsCard } from '@/components/news/NewsCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { useLanguage } from '@/context/LanguageContext'
import { newsItems, type NewsItem } from '@/data/news'
import type { Language } from '@/data/translations'
import { formatNewsDate } from '@/lib/newsFormat'

/** How many announcements the home page shows; the rest are on /news. */
export const HOME_NEWS_COUNT = 3

export interface LatestNewsLabels {
  eyebrow: string
  title: string
  viewAll: string
  readMore: string
  newTab: string
}

/** The home page's news section. Nothing at all while there are no announcements. (Pure: the wrapper below supplies the language.) */
export function LatestNewsSection({ items, language, labels }: { items: NewsItem[]; language: Language; labels: LatestNewsLabels }) {
  const latest = items.slice(0, HOME_NEWS_COUNT)
  if (latest.length === 0) return null

  return (
    <section className="border-t border-zinc-200 bg-white py-16 sm:py-20 lg:py-24 dark:border-zinc-900 dark:bg-black">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
          <SectionHeader align="left" eyebrow={labels.eyebrow} eyebrowIcon={Megaphone} title={labels.title} />

          <Link
            href="/news"
            className="inline-flex min-h-[44px] shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-red hover:underline touch-press"
          >
            {labels.viewAll} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {latest.map((item) => (
            <li key={item.id}>
              <NewsCard item={item} dateLabel={formatNewsDate(item.date, language)} readMore={labels.readMore} newTab={labels.newTab} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/** The latest announcements on the home page, in the visitor's language. */
export function LatestNews() {
  const { t, language, localizeList } = useLanguage()
  const items = React.useMemo(() => localizeList(newsItems), [localizeList])
  return (
    <LatestNewsSection
      items={items}
      language={language}
      labels={{ eyebrow: t.news.badge, title: t.news.homeTitle, viewAll: t.news.viewAll, readMore: t.common.readMore, newTab: t.news.opensInNewTab }}
    />
  )
}
