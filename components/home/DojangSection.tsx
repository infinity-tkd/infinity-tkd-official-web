'use client'

import Link from 'next/link'
import { ArrowRight, Flame } from 'lucide-react'
import { Card3D } from '@/components/ui/Card3D'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useLanguage } from '@/context/LanguageContext'

export function DojangSection() {
  const { t } = useLanguage()

  const highlights = [
    { title: t.dojang.poomsaeTitle, description: t.dojang.poomsaeDesc },
    { title: t.dojang.trickingTitle, description: t.dojang.trickingDesc },
  ]

  return (
    <section
      id="dojang"
      className="py-16 sm:py-20 lg:py-24 relative scroll-mt-20 overflow-hidden border-t border-zinc-200 bg-zinc-50 transition-colors duration-500 dark:border-zinc-900 dark:bg-zinc-950"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/10 blur-[130px]"
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <ScrollReveal direction="left" className="order-2 md:order-1">
            <div className="mb-4 flex items-center gap-3 sm:mb-6">
              <Flame className="h-5 w-5 text-brand-red drop-shadow-[0_0_8px_rgba(239,47,56,0.8)]" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red">{t.dojang.badge}</span>
            </div>

            <h2 className="mb-4 text-3xl font-black uppercase leading-none tracking-tighter text-zinc-900 dark:text-white sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
              {t.dojang.title1} <span className="text-brand-red">{t.dojang.title2}</span>
            </h2>

            <p className="mb-6 text-sm font-light leading-relaxed text-zinc-700 dark:text-zinc-300 sm:mb-8 sm:text-base md:text-lg">
              {t.dojang.desc}
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:mb-10 sm:grid-cols-2 sm:gap-6">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="border-l-2 border-zinc-300 pl-4 transition-all duration-300 hover:border-brand-red dark:border-zinc-800"
                >
                  <h3 className="mb-1 text-base font-bold text-zinc-900 dark:text-white sm:text-lg">{item.title}</h3>
                  <p className="text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400">{item.description}</p>
                </div>
              ))}
            </div>

            <Link
              href="/academy"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-red transition-colors hover:text-zinc-900 dark:hover:text-white touch-press"
            >
              <span>{t.dojang.btn}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="right" className="group perspective-1000 relative order-1 md:order-2">
            <Card3D maxTilt={4} className="w-full">
              <div className="group relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 rounded-xl bg-gradient-to-tr from-brand-red/30 to-transparent opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
                />
                <div className="relative z-10 h-[320px] overflow-hidden rounded-2xl border border-zinc-200 shadow-2xl dark:border-zinc-800 sm:h-[400px] md:h-[460px] lg:h-[520px]">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop"
                    alt="Infinity Taekwondo students in action sparring"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    quality={70}
                    className="object-cover object-center grayscale transition-all duration-700 group-hover:grayscale-0"
                  />
                </div>
              </div>
            </Card3D>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
