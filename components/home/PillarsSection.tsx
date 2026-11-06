'use client'

import { Activity, Camera, Scroll, Zap, type LucideIcon } from 'lucide-react'
import { Card3D } from '@/components/ui/Card3D'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { useLanguage } from '@/context/LanguageContext'
import type { Translations } from '@/data/translations'

type PillarAccent = 'red' | 'white' | 'green' | 'orange'

// Full class strings (no interpolation) so Tailwind can see every utility at build time.
const ACCENTS: Record<PillarAccent, { card: string; chip: string; subtitle: string }> = {
  red: {
    card: 'border-brand-red/30 hover:border-brand-red hover:shadow-brand-glow',
    chip: 'border-brand-red/30 bg-brand-red/10 text-brand-red',
    subtitle: 'text-brand-red',
  },
  white: {
    card: 'border-white/20 hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]',
    chip: 'border-white/20 bg-white/10 text-white',
    subtitle: 'text-zinc-300',
  },
  green: {
    card: 'border-brand-green/30 hover:border-brand-green hover:shadow-[0_0_30px_rgba(9,187,0,0.3)]',
    chip: 'border-brand-green/30 bg-brand-green/10 text-brand-green',
    subtitle: 'text-brand-green',
  },
  orange: {
    card: 'border-brand-orange/30 hover:border-brand-orange hover:shadow-[0_0_30px_rgba(255,87,51,0.3)]',
    chip: 'border-brand-orange/30 bg-brand-orange/10 text-brand-orange',
    subtitle: 'text-brand-orange',
  },
}

interface Pillar {
  accent: PillarAccent
  icon: LucideIcon
  image: string
  imageAlt: string
  imageClass: string
  title: (t: Translations) => string
  subtitle: (t: Translations) => string
  description: (t: Translations) => string
}

const PILLARS: Pillar[] = [
  {
    accent: 'red',
    icon: Scroll,
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Recognized Poomsae',
    imageClass: 'opacity-40 group-hover:opacity-60 mix-blend-luminosity group-hover:mix-blend-normal grayscale',
    title: (t) => t.pillars.p1Title,
    subtitle: (t) => t.pillars.p1Subtitle,
    description: (t) => t.pillars.p1Desc,
  },
  {
    accent: 'white',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Freestyle Tricking',
    imageClass: 'opacity-30 group-hover:opacity-50 grayscale',
    title: (t) => t.pillars.p2Title,
    subtitle: (t) => t.pillars.p2Subtitle,
    description: (t) => t.pillars.p2Desc,
  },
  {
    accent: 'green',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Sport Science',
    imageClass: 'opacity-40 group-hover:opacity-60 grayscale group-hover:grayscale-0',
    title: (t) => t.pillars.p3Title,
    subtitle: (t) => t.pillars.p3Subtitle,
    description: (t) => t.pillars.p3Desc,
  },
  {
    accent: 'orange',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Creative Studio',
    imageClass: 'opacity-40 group-hover:opacity-60 grayscale group-hover:grayscale-0',
    title: (t) => t.pillars.p4Title,
    subtitle: (t) => t.pillars.p4Subtitle,
    description: (t) => t.pillars.p4Desc,
  },
]

export function PillarsSection() {
  const { t } = useLanguage()

  return (
    <section id="pillars" className="py-16 sm:py-20 lg:py-24 relative scroll-mt-20 overflow-hidden bg-zinc-900 text-white dark:bg-black">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-brand-red/5 blur-[140px]"
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="mb-12 sm:mb-16">
          <SectionHeader
            tone="dark"
            eyebrow={t.pillars.badge}
            title={t.pillars.title1}
            accent={t.pillars.title2}
            description={t.pillars.subtitle}
          />
        </ScrollReveal>

        <div className="grid auto-rows-[340px] grid-cols-1 gap-4 sm:auto-rows-[360px] sm:grid-cols-2 sm:gap-5 lg:auto-rows-[390px] lg:grid-cols-4">
          {PILLARS.map((pillar, index) => {
            const accent = ACCENTS[pillar.accent]
            const Icon = pillar.icon
            return (
              <ScrollReveal key={pillar.imageAlt} direction="up" delay={50 * (index + 1)} className="h-full">
                <Card3D maxTilt={6} className="h-full">
                  <div
                    className={`group relative h-full overflow-hidden rounded-2xl border bg-zinc-900/60 backdrop-blur-xl transition-all duration-500 ${accent.card}`}
                  >
                    <div className="absolute right-6 top-6 z-20">
                      <div
                        className={`rounded-xl border p-3 transition-transform duration-500 group-hover:scale-110 ${accent.chip}`}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Scrim keeps the copy legible on bright photos */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-3/4 bg-gradient-to-t from-black via-black/75 to-transparent"
                    />
                    <div className="absolute bottom-0 left-0 z-20 w-full p-5 sm:p-6 lg:p-7">
                      <h3 className="mb-1 text-xl font-black uppercase tracking-tighter text-white sm:text-2xl">
                        {pillar.title(t)}
                      </h3>
                      <p className={`mb-2 text-xs font-bold uppercase tracking-widest ${accent.subtitle}`}>
                        {pillar.subtitle(t)}
                      </p>
                      <p className="line-clamp-3 text-xs font-light leading-relaxed text-zinc-300 sm:line-clamp-4 lg:line-clamp-none">
                        {pillar.description(t)}
                      </p>
                    </div>

                    <div aria-hidden="true" className="absolute inset-0 z-0">
                      <OptimizedImage
                        src={pillar.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        quality={60}
                        className={`object-cover transition-all duration-700 ${pillar.imageClass}`}
                      />
                    </div>
                  </div>
                </Card3D>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
