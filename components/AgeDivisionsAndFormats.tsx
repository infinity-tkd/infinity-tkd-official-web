'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowRight, Check, Clock, ShieldCheck, Smile, Target, Users } from 'lucide-react'
import { studentAgeDivisions, classFormats } from '@/data/ageDivisions'
import { useLanguage } from '@/context/LanguageContext'
import { SafeImage } from '@/components/SafeImage'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SegmentedControl } from '@/components/ui/SegmentedControl'

const iconMap = {
  Users,
  Smile,
  Target,
}

/** Age groups (one shown at a time) and the three class formats. Used on Pricing and the Academy. */
export function AgeDivisionsAndFormats() {
  const { localizeList } = useLanguage()
  const [selectedAgeId, setSelectedAgeId] = React.useState<string>(studentAgeDivisions[0].id)

  const localizedAges = React.useMemo(() => localizeList(studentAgeDivisions), [localizeList])
  const localizedFormats = React.useMemo(() => localizeList(classFormats), [localizeList])
  const activeAge = localizedAges.find((a) => a.id === selectedAgeId) || localizedAges[0]

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* Age groups */}
      <section>
        <SectionHeader
          size="md"
          eyebrowStyle="text"
          eyebrow="All Ages Welcome · Tigers to Golden Age"
          title="Training Tailored For"
          accent="Every Stage of Life"
          description="From toddlers developing balance and listening skills to active seniors preserving joint mobility, our certified Kukkiwon masters scale martial science safely for every age."
        />

        <div className="mt-10 flex justify-center">
          <SegmentedControl
            semantics="tabs"
            idBase="age"
            label="Age group"
            value={selectedAgeId}
            onChange={setSelectedAgeId}
            scrollable
            options={localizedAges.map((division) => ({
              value: division.id,
              label: (
                <>
                  <span>{division.name}</span>
                  <span className="font-semibold tracking-normal opacity-60">{division.ageRange.replace('Ages ', '')}</span>
                </>
              ),
            }))}
          />
        </div>

        <div
          key={activeAge.id}
          id="age-panel"
          role="tabpanel"
          aria-labelledby={`age-tab-${activeAge.id}`}
          className="mt-6 grid animate-fade-in items-center gap-8 rounded-2xl border border-zinc-200 bg-white p-5 sm:p-8 lg:grid-cols-12 lg:gap-12 dark:border-zinc-800 dark:bg-zinc-900/40"
        >
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900">
              <SafeImage src={activeAge.image} alt={activeAge.name} className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs font-semibold text-zinc-500">
              {activeAge.ageRange} · {activeAge.koreanTitle}
            </p>
            <h3 className="mt-2 text-2xl font-black uppercase tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
              {activeAge.name}
            </h3>
            <p className="mt-2 text-base font-semibold leading-snug text-zinc-800 dark:text-zinc-200">{activeAge.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{activeAge.developmentFocus}</p>

            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">Core age-calibrated syllabus</p>
            <ul className="mt-3 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {activeAge.keyCurriculum.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 border-t border-zinc-200 pt-5 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-zinc-400" aria-hidden="true" />
                Class duration:{' '}
                <strong className="font-semibold text-zinc-900 dark:text-white">{activeAge.classDuration}</strong>
              </span>
              <span className="inline-flex min-w-0 items-center gap-2">
                <ShieldCheck className="h-4 w-4 shrink-0 text-zinc-400" aria-hidden="true" />
                <span className="truncate">{activeAge.safetyMeasures.split(',')[0]}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Class formats */}
      <section>
        <SectionHeader
          size="md"
          eyebrowStyle="text"
          eyebrow="Flexible Training Formats"
          title="Choose Your"
          accent="Class Format"
          description="Whether you want the high-energy camaraderie of group sessions, dedicated child-focused classes, or personalized 1-on-1 master assessment."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          {localizedFormats.map((format) => {
            const Icon = iconMap[format.iconName] || Users
            return (
              // The whole card answers the pointer; the Inquire link covers it (stretched link).
              <article
                key={format.id}
                className="group relative flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-[transform,border-color] duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-zinc-300 sm:p-8 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="rounded-lg bg-zinc-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    {format.badge}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">{format.title}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-brand-red">{format.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{format.description}</p>

                <ul className="mt-5 space-y-2.5">
                  {format.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400 dark:text-zinc-500" aria-hidden="true" />
                      <span className="leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <div className="flex items-center justify-between gap-3 border-t border-zinc-200 pt-4 dark:border-zinc-800">
                    <span className="text-sm text-zinc-500">Ratio {format.ratio}</span>
                    <Link
                      href={`/contact?subject=Inquiry%20regarding%20${encodeURIComponent(format.title)}`}
                      className="inline-flex min-h-[44px] items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-red after:absolute after:inset-0 after:rounded-2xl after:content-['']"
                    >
                      Inquire
                      <span className="sr-only"> about {format.title}</span>
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}
