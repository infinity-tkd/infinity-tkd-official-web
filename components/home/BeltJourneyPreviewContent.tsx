'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowRight, Footprints, Milestone } from 'lucide-react'
import { TRAINING_DISCIPLINES, beltProgression, type BeltRank } from '@/data/belts'
import type { BeltFormLink } from '@/lib/beltForms'
import { DanBars } from '@/components/belts/DanBars'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { buttonStyles } from '@/components/ui/Button'
import { useLanguage } from '@/context/LanguageContext'

/** "Taegeuk 2 · 3", "Keumgang → Jitae", "Cheonkwon · Hansu · Ilyeo". */
function formsSummary(belt: BeltRank, forms: Record<string, BeltFormLink>) {
  const names = belt.forms.map((id) => forms[id]?.name ?? id)
  if (names.length > 1 && names.every((name) => name.startsWith('Taegeuk '))) {
    return `Taegeuk ${names.map((name) => name.replace('Taegeuk ', '')).join(' · ')}`
  }
  return names.length > 3 ? `${names[0]} → ${names[names.length - 1]}` : names.join(' · ')
}

/**
 * Every rank from white belt to 2nd Dan at a glance, with its forms, the disciplines trained at
 * every belt, and a link to the full interactive page (/belt-journey).
 */
export function BeltJourneyPreviewContent({ forms }: { forms: Record<string, BeltFormLink> }) {
  const { t, localizeList } = useLanguage()
  const copy = t.beltJourney
  const belts = React.useMemo(() => localizeList(beltProgression), [localizeList])
  const disciplines = React.useMemo(() => localizeList(TRAINING_DISCIPLINES), [localizeList])

  return (
    <section aria-label={copy.eyebrow} className="relative overflow-hidden bg-white py-16 transition-colors duration-500 sm:py-20 lg:py-24 dark:bg-black">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeader eyebrow={copy.eyebrow} eyebrowIcon={Milestone} title={copy.title} accent={copy.accent} description={copy.homeDescription} />
        </ScrollReveal>

        <ol className="relative mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4 lg:grid-cols-8">
          {/* Thin line linking the belts on wide screens */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-6 right-6 top-[22px] hidden h-px bg-gradient-to-r from-zinc-200 via-brand-red/50 to-zinc-900 lg:block dark:from-zinc-800 dark:to-zinc-300"
          />
          {belts.map((belt, index) => {
            const hasWalkthrough = belt.forms.some((id) => forms[id]?.hasWalkthrough)
            return (
              <li key={belt.id} className="relative">
                <ScrollReveal direction="up" delay={index * 60} className="h-full">
                  <Link
                    href={`/belt-journey#${belt.id}`}
                    className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-4 transition-colors duration-300 hover:border-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-brand-red"
                  >
                    <span
                      className="relative block h-3 overflow-hidden rounded-lg border transition-transform duration-300 group-hover:scale-x-[1.04]"
                      style={{ backgroundColor: belt.hex, borderColor: belt.borderHex }}
                      aria-hidden="true"
                    >
                      <DanBars count={belt.danBars} className="right-3" />
                    </span>

                    <span className="type-meta mt-3 tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-sm font-black uppercase leading-tight tracking-tight text-zinc-900 dark:text-white">{belt.shortName}</span>
                    <span className="type-meta mt-0.5">{belt.rankTitle}</span>

                    <span className="mt-3 flex items-start gap-1.5 text-xs font-semibold leading-snug text-zinc-800 dark:text-zinc-200">
                      {formsSummary(belt, forms)}
                      {hasWalkthrough && <Footprints className="mt-px h-3.5 w-3.5 shrink-0 text-brand-red" aria-label={copy.hasWalkthrough} />}
                    </span>
                    {belt.alsoTrains?.length ? (
                      <span className="type-meta mt-1 leading-snug">
                        + {belt.alsoTrains.map((extra) => extra.replace(/\s*\(.*\)$/, '')).join(' · ')}
                      </span>
                    ) : null}

                    <span className="mt-auto inline-flex items-center gap-1 pt-3 text-xs font-semibold text-brand-red transition-transform duration-300 group-hover:translate-x-0.5">
                      {copy.view} <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </span>
                  </Link>
                </ScrollReveal>
              </li>
            )
          })}
        </ol>

        <ScrollReveal direction="up" delay={120}>
          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-5 dark:border-zinc-800 dark:bg-zinc-800">
            {disciplines.map((discipline) => (
              <div key={discipline.key} className="bg-zinc-50 p-4 dark:bg-zinc-950">
                <p className="text-sm font-bold text-zinc-900 dark:text-white">
                  {discipline.label}
                  {discipline.korean !== discipline.label && <span className="type-hangul text-zinc-400"> {discipline.korean}</span>}
                </p>
                <p className="type-body-sm mt-1 text-zinc-600 dark:text-zinc-400">{discipline.summary}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <Link href="/belt-journey" className={buttonStyles({ variant: 'primary', size: 'lg' })}>
            {copy.openFull} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <p className="type-meta">
            <Footprints className="mr-1 inline h-3.5 w-3.5 text-brand-red" aria-hidden="true" />
            {copy.walkthroughNote}
          </p>
        </div>
      </div>
    </section>
  )
}
