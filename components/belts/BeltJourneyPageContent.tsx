'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Milestone } from 'lucide-react'
import { BeltProgressionGuide } from '@/components/BeltProgressionGuide'
import { PageHero } from '@/components/ui/PageHero'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CtaBanner } from '@/components/ui/CtaBanner'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { TRAINING_DISCIPLINES } from '@/data/belts'
import type { BeltFormLink } from '@/lib/beltForms'
import { useLanguage } from '@/context/LanguageContext'

/** Body of /belt-journey, rendered in the visitor's language (the page itself keeps the metadata). */
export function BeltJourneyPageContent({ forms }: { forms: Record<string, BeltFormLink> }) {
  const { t, localizeList } = useLanguage()
  const copy = t.beltJourney
  const disciplines = React.useMemo(() => localizeList(TRAINING_DISCIPLINES), [localizeList])

  return (
    <div className="bg-white text-zinc-900 transition-colors duration-500 dark:bg-black dark:text-white">
      <PageHero eyebrow={copy.eyebrow} eyebrowIcon={Milestone} title={copy.title} accent={copy.accent} description={copy.pageDescription} />

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BeltProgressionGuide forms={forms} syncHash hideIntro />
          <p className="type-meta mt-4 text-center">{copy.poomNote}</p>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 py-16 sm:py-20 lg:py-24 dark:border-zinc-900 dark:bg-zinc-950">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionHeader
              eyebrow={copy.disciplinesEyebrow}
              title={copy.disciplinesTitle}
              accent={copy.disciplinesAccent}
              description={copy.disciplinesDescription}
            />
          </ScrollReveal>

          <ul className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">
            {disciplines.map((discipline, index) => (
              <li key={discipline.key}>
                <ScrollReveal direction="up" delay={index * 60} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-black">
                    {discipline.korean !== discipline.label && <span className="type-hangul text-brand-red">{discipline.korean}</span>}
                    <h3 className="mt-1 text-base font-black uppercase tracking-tight">{discipline.label}</h3>
                    <p className="type-body-sm mt-2 text-zinc-600 dark:text-zinc-400">{discipline.description}</p>
                    {discipline.href && (
                      <Link href={discipline.href} className="mt-auto inline-flex items-center gap-1 pt-4 text-xs font-semibold text-brand-red hover:underline">
                        {copy.openInLibrary} <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ul>

          <div className="mt-12 sm:mt-16">
            <CtaBanner eyebrow={copy.ctaEyebrow} title={copy.ctaTitle} description={copy.ctaDescription} href="/contact" label={copy.ctaLabel} />
          </div>
        </div>
      </section>
    </div>
  )
}
