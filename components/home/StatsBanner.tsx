'use client'

import { AnimatedCounter } from '@/components/AnimatedCounter'
import { useLanguage } from '@/context/LanguageContext'

export function StatsBanner() {
  const { t } = useLanguage()

  const stats = [
    { value: t.stats.students, label: t.stats.studentsLabel, duration: 2000 },
    { value: t.stats.experience, label: t.stats.experienceLabel, duration: 1600 },
    { value: t.stats.competitions, label: t.stats.competitionsLabel, duration: 2200 },
  ]

  return (
    <section id="brand-stats" className="relative z-20 scroll-mt-20 overflow-hidden bg-brand-red py-8 text-white shadow-xl sm:py-9">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.15),transparent_60%)]"
      />
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 divide-y divide-white/20 text-center sm:grid-cols-3 sm:gap-4 sm:divide-x sm:divide-y-0 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center py-2 ${index > 0 ? 'pt-4 sm:pt-2' : ''}`}
            >
              <span className="text-3xl font-black leading-none tracking-tight sm:text-4xl md:text-5xl">
                <AnimatedCounter value={stat.value} duration={stat.duration} />
              </span>
              <span className="mt-1.5 text-[11px] font-bold uppercase tracking-widest text-white/90 sm:text-xs md:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
