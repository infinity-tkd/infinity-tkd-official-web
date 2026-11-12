'use client'

import { AnimatedCounter } from '@/components/AnimatedCounter'
import { useLanguage } from '@/context/LanguageContext'

/** Three headline numbers on a quiet strip under the hero; they count up once when seen. */
export function StatsBanner() {
  const { t } = useLanguage()

  const stats = [
    { value: t.stats.students, label: t.stats.studentsLabel, duration: 2000 },
    { value: t.stats.experience, label: t.stats.experienceLabel, duration: 1600 },
    { value: t.stats.competitions, label: t.stats.competitionsLabel, duration: 2200 },
  ]

  return (
    <section
      id="brand-stats"
      className="scroll-mt-20 border-y border-zinc-200 bg-zinc-50 py-8 sm:py-10 dark:border-zinc-900 dark:bg-zinc-950"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <dl className="grid grid-cols-1 divide-y divide-zinc-200 text-center sm:grid-cols-3 sm:divide-x sm:divide-y-0 dark:divide-zinc-800">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse items-center justify-center py-4 sm:py-2">
              <dt className="mt-1.5 text-[11px] font-bold uppercase tracking-widest text-zinc-500 sm:text-xs">{stat.label}</dt>
              <dd className="text-3xl font-black leading-none tracking-tight text-zinc-900 sm:text-4xl md:text-5xl dark:text-white">
                <AnimatedCounter value={stat.value} duration={stat.duration} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
