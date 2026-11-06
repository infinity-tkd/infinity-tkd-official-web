'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { SafeGrid } from '@/components/SafeGrid'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { tournamentAchievements } from '@/data/achievements'
import { useLanguage } from '@/context/LanguageContext'

const FEATURED_COUNT = 3

export function RecordsSection() {
  const { t, localizeList } = useLanguage()
  // Localized so the featured records follow the selected language like the rest of the page.
  const records = React.useMemo(() => localizeList(tournamentAchievements).slice(0, FEATURED_COUNT), [localizeList])

  return (
    <section className="border-t border-zinc-200 bg-zinc-50 py-16 transition-colors duration-500 dark:border-zinc-900 dark:bg-zinc-950 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:mb-12 sm:flex-row sm:items-center">
            <div>
              <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-brand-red">{t.achievements.badge}</span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-zinc-900 dark:text-white sm:text-3xl md:text-5xl">
                {t.community.recentVictories}
              </h2>
            </div>

            <Link
              href="/achievements"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-red hover:underline touch-press"
            >
              {t.community.viewTrophyWall} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <SafeGrid className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3" isolateItems>
            {records.map((record) => (
              <article
                key={record.id}
                className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
              >
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-zinc-500">{record.year}</span>
                    <span className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[11px] font-bold uppercase text-amber-600 dark:text-amber-500">
                      {record.medal} Medal
                    </span>
                  </div>
                  <h3 className="mb-1 text-lg font-black uppercase text-zinc-900 dark:text-white">{record.tournament}</h3>
                  <p className="mb-3 text-xs font-bold uppercase text-brand-red">{record.division}</p>
                  <p className="mb-4 text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-400">{record.description}</p>
                </div>

                <div className="flex items-center gap-1.5 border-t border-zinc-100 pt-3 text-xs font-semibold text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-brand-red" aria-hidden="true" />
                  <span className="truncate">{record.athleteOrTeam}</span>
                </div>
              </article>
            ))}
          </SafeGrid>
        </ScrollReveal>
      </div>
    </section>
  )
}
