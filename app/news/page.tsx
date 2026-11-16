'use client'

import { Megaphone } from 'lucide-react'
import { NewsList } from '@/components/news/NewsList'
import { PageHero } from '@/components/ui/PageHero'
import { useLanguage } from '@/context/LanguageContext'

/** Short announcements, newest first. The text comes from content/news.json (edited at /keystatic). */
export default function NewsPage() {
  const { t } = useLanguage()

  return (
    <div className="bg-white text-zinc-900 dark:bg-black dark:text-white">
      <PageHero eyebrow={t.news.badge} eyebrowIcon={Megaphone} title={t.news.heroTitle1} accent={t.news.heroTitle2} description={t.news.heroSubtitle} />

      <section className="pb-16 sm:pb-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <NewsList />
        </div>
      </section>
    </div>
  )
}
