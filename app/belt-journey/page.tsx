import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Milestone } from 'lucide-react'
import { BeltProgressionGuide } from '@/components/BeltProgressionGuide'
import { PageHero } from '@/components/ui/PageHero'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CtaBanner } from '@/components/ui/CtaBanner'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { TRAINING_DISCIPLINES } from '@/data/belts'
import { getBeltFormLinks } from '@/lib/beltForms'

const DESCRIPTION =
  'The Infinity Taekwondo belt journey from white belt to 2nd Dan: the poomsae at every rank, plus demonstration, tricking, hosinsul and board breaking in traditional Kukkiwon Taekwondo.'

export const metadata: Metadata = {
  title: 'Belt Journey: White Belt to 2nd Dan',
  description: DESCRIPTION,
  alternates: { canonical: '/belt-journey' },
  openGraph: {
    title: 'Belt Journey: White Belt to 2nd Dan | Infinity Taekwondo',
    description: DESCRIPTION,
    url: '/belt-journey',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Belt Journey: White Belt to 2nd Dan | Infinity Taekwondo',
    description: DESCRIPTION,
  },
}

export default function BeltJourneyPage() {
  return (
    <div className="bg-white text-zinc-900 transition-colors duration-500 dark:bg-black dark:text-white">
      <PageHero
        eyebrow="Belt journey"
        eyebrowIcon={Milestone}
        title="From white belt"
        accent="to 2nd Dan"
        description="Eight ranks of traditional Kukkiwon Taekwondo. Choose a belt to see its poomsae, what each discipline trains, and what the promotion test asks for."
      />

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BeltProgressionGuide forms={getBeltFormLinks()} syncHash hideIntro />
          <p className="type-meta mt-4 text-center">
            Students under 15 receive the equivalent Kukkiwon Poom (red-and-black belt) instead of a Dan; it converts to the
            matching Dan at 15.
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 py-16 sm:py-20 lg:py-24 dark:border-zinc-900 dark:bg-zinc-950">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionHeader
              eyebrow="What we train"
              title="One path,"
              accent="five disciplines"
              description="Every belt trains all five, at a level that grows with rank."
            />
          </ScrollReveal>

          <ul className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">
            {TRAINING_DISCIPLINES.map((discipline, index) => (
              <li key={discipline.key}>
                <ScrollReveal direction="up" delay={index * 60} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-black">
                    <span className="type-hangul text-brand-red">{discipline.korean}</span>
                    <h3 className="mt-1 text-base font-black uppercase tracking-tight">{discipline.label}</h3>
                    <p className="type-body-sm mt-2 text-zinc-600 dark:text-zinc-400">{discipline.description}</p>
                    {discipline.href && (
                      <Link
                        href={discipline.href}
                        className="mt-auto inline-flex items-center gap-1 pt-4 text-xs font-semibold text-brand-red hover:underline"
                      >
                        Open in the library <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ul>

          <div className="mt-12 sm:mt-16">
            <CtaBanner
              eyebrow="Start at white belt"
              title="Take the first step"
              description="Book a free trial class at our Olympic Stadium or Sen Sok branch."
              href="/contact"
              label="Book a free trial"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
