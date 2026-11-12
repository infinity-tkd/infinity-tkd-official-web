'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { SafeGrid } from '@/components/SafeGrid'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { tournamentAchievements } from '@/data/achievements'
import { useLanguage } from '@/context/LanguageContext'

const FEATURED_COUNT = 3

export function RecordsSection() {
  const { t, localizeList } = useLanguage()
  // Localized so the featured records follow the selected language like the rest of the page.
  const records = React.useMemo(() => localizeList(tournamentAchievements).slice(0, FEATURED_COUNT), [localizeList])

  return (
    <section className="border-t border-zinc-200 bg-zinc-50 py-16 sm:py-20 lg:py-24 dark:border-zinc-900 dark:bg-zinc-950">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
          <SectionHeader align="left" eyebrow={t.achievements.badge} title={t.community.recentVictories} />

          <Link
            href="/achievements"
            className="inline-flex min-h-[44px] shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-red hover:underline touch-press"
          >
            {t.community.viewTrophyWall} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <SafeGrid className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3" isolateItems>
          {records.map((record) => (
            <article
              key={record.id}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40"
            >
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-zinc-500">{record.year}</span>
                  <span className="rounded-lg bg-zinc-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    {record.medal} Medal
                  </span>
                </div>
                <h3 className="mb-1 text-lg font-black uppercase text-zinc-900 dark:text-white">{record.tournament}</h3>
                <p className="mb-3 text-xs font-bold uppercase text-brand-red">{record.division}</p>
                <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{record.description}</p>
              </div>

              <div className="flex items-center gap-1.5 border-t border-zinc-200 pt-3 text-xs font-semibold text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
                <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-zinc-400" aria-hidden="true" />
                <span className="truncate">{record.athleteOrTeam}</span>
              </div>
            </article>
          ))}
        </SafeGrid>
      </div>
    </section>
  )
}
