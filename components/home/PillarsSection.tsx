'use client'

import { Activity, Camera, Scroll, Zap, type LucideIcon } from 'lucide-react'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { useLanguage } from '@/context/LanguageContext'
import type { Translations } from '@/data/translations'

interface Pillar {
  icon: LucideIcon
  image: string
  imageAlt: string
  title: (t: Translations) => string
  subtitle: (t: Translations) => string
  description: (t: Translations) => string
}

const PILLARS: Pillar[] = [
  {
    icon: Scroll,
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Recognized Poomsae',
    title: (t) => t.pillars.p1Title,
    subtitle: (t) => t.pillars.p1Subtitle,
    description: (t) => t.pillars.p1Desc,
  },
  {
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Freestyle Tricking',
    title: (t) => t.pillars.p2Title,
    subtitle: (t) => t.pillars.p2Subtitle,
    description: (t) => t.pillars.p2Desc,
  },
  {
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Sport Science',
    title: (t) => t.pillars.p3Title,
    subtitle: (t) => t.pillars.p3Subtitle,
    description: (t) => t.pillars.p3Desc,
  },
  {
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Creative Studio',
    title: (t) => t.pillars.p4Title,
    subtitle: (t) => t.pillars.p4Subtitle,
    description: (t) => t.pillars.p4Desc,
  },
]

/** The four training pillars: one photo card style, copy on a dark scrim (dark in both themes). */
export function PillarsSection() {
  const { t } = useLanguage()

  return (
    <section
      id="pillars"
      className="scroll-mt-20 border-y border-zinc-200 bg-zinc-50 py-16 sm:py-20 lg:py-24 dark:border-zinc-900 dark:bg-zinc-950"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.pillars.badge}
          title={t.pillars.title1}
          accent={t.pillars.title2}
          description={t.pillars.subtitle}
          className="mb-12 sm:mb-16"
        />

        <ul className="grid auto-rows-[340px] grid-cols-1 gap-4 sm:auto-rows-[360px] sm:grid-cols-2 sm:gap-5 lg:auto-rows-[390px] lg:grid-cols-4">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon
            return (
              <li
                key={pillar.imageAlt}
                className="dark relative h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 text-white"
              >
                <div aria-hidden="true" className="absolute inset-0">
                  <OptimizedImage
                    src={pillar.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    quality={60}
                    className="object-cover opacity-50 grayscale"
                  />
                </div>
                {/* Scrim keeps the copy legible on bright photos. */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black via-black/75 to-transparent"
                />

                <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-black/40 text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
                  <h3 className="text-xl font-black uppercase tracking-tight sm:text-2xl">{pillar.title(t)}</h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-widest text-zinc-300">{pillar.subtitle(t)}</p>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-300 sm:line-clamp-4 lg:line-clamp-none">
                    {pillar.description(t)}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
