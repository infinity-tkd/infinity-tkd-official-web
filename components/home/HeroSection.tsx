'use client'

import Link from 'next/link'
import { ArrowRight, Building2, ChevronDown } from 'lucide-react'
import { InfinityMotion } from '@/components/InfinityMotion'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { buttonStyles } from '@/components/ui/Button'
import { useLanguage } from '@/context/LanguageContext'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2070&auto=format&fit=crop'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pb-20 pt-16 sm:pt-20 md:min-h-[94vh] md:pt-24 lg:min-h-screen">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-brand-red/10 via-white to-white opacity-90 dark:from-brand-red/20 dark:via-black dark:to-black" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-red/15 via-transparent to-transparent opacity-80" />
        {/* Static (no looping animation): a full-bleed animated image forces constant repaints. */}
        <OptimizedImage
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={60}
          className="object-cover opacity-15 dark:opacity-30"
        />
      </div>

      <div className="container relative z-20 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Brand moment: the belt ties itself into the Infinity loop above the name, forming the
            logo lockup. Larger on tall tablet screens, where it also fills the hero's upper space. */}
        <InfinityMotion label={t.hero.badge} className="mx-auto mb-5 h-auto w-44 sm:mb-7 sm:w-56 md:w-72 xl:w-80" />

        <h1
          className="mb-4 animate-fade-in-up break-words text-4xl font-black uppercase leading-[0.95] tracking-tight text-zinc-900 dark:text-white sm:mb-6 sm:text-6xl sm:leading-none md:text-7xl lg:text-8xl xl:text-9xl"
          style={{ animationDelay: '0.15s' }}
        >
          {t.hero.title1} <span className="text-brand-red">{t.hero.title2}</span>
        </h1>

        <p
          className="mx-auto mb-8 max-w-2xl animate-fade-in-up px-2 text-[15px] font-light leading-relaxed text-zinc-700 dark:text-zinc-300 sm:mb-10 sm:text-base md:text-lg lg:text-xl"
          style={{ animationDelay: '0.25s' }}
        >
          {t.hero.subtitle}
        </p>

        <div
          className="mx-auto flex w-full max-w-md animate-fade-in-up flex-col items-center justify-center gap-3.5 px-4 sm:max-w-none sm:flex-row sm:gap-4"
          style={{ animationDelay: '0.35s' }}
        >
          <Link href="/academy" className={buttonStyles({ variant: 'primary', size: 'lg', className: 'w-full sm:w-auto' })}>
            {t.hero.ctaPrimary} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href="/locations" className={buttonStyles({ variant: 'outline', size: 'lg', className: 'w-full sm:w-auto' })}>
            <Building2 className="h-4 w-4 text-brand-red" aria-hidden="true" /> {t.nav.locations}
          </Link>
        </div>
      </div>

      <a
        href="#brand-stats"
        aria-label="Scroll to dojang overview and statistics"
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 animate-bounce rounded-full p-2 text-zinc-400 transition-colors hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red dark:text-zinc-500"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  )
}
