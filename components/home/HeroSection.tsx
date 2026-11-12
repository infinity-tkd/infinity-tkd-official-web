'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowRight, Building2, ChevronDown, Pause, Play } from 'lucide-react'
import { HeroLogoMotion } from '@/components/home/HeroLogoMotion'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { buttonStyles } from '@/components/ui/Button'
import { useLanguage } from '@/context/LanguageContext'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2070&auto=format&fit=crop'

type Motion = 'auto' | 'playing' | 'paused'

export function HeroSection() {
  const { t } = useLanguage()
  // The logo's light loops without end, so visitors get a pause control (WCAG 2.2.2). "auto" plays unless the
  // system asks for reduced motion; CSS reads that preference, so the logo and the button are right before hydration.
  const [motion, setMotion] = React.useState<Motion>('auto')
  const toggleMotion = () =>
    setMotion((current) => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const running = current === 'playing' || (current === 'auto' && !reduce)
      return running ? 'paused' : 'playing'
    })

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pb-20 pt-16 sm:pt-20 md:min-h-[94vh] md:pt-24 lg:min-h-screen">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        {/* A neutral fade over the photo: the page colour, never a tint. */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/70 via-white/90 to-white dark:from-black/40 dark:via-black/85 dark:to-black" />
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
        {/* Brand moment: the belt ties itself into the Infinity loop above the name, then a light keeps
            running through it, forming the logo lockup. */}
        <HeroLogoMotion
          motion={motion}
          label={t.hero.badge}
          className="mx-auto mb-5 h-auto w-44 sm:mb-7 sm:w-56 md:w-72 xl:w-80"
        />

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
            <Building2 className="h-4 w-4" aria-hidden="true" /> {t.nav.locations}
          </Link>
        </div>
      </div>

      <a
        href="#brand-stats"
        aria-label="Scroll to dojang overview and statistics"
        className="absolute bottom-6 left-1/2 z-20 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full text-zinc-400 transition-colors hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red dark:text-zinc-500 dark:hover:text-white"
      >
        <ChevronDown className="h-6 w-6" aria-hidden="true" />
      </a>

      {/* Shows Pause while the logo runs and Play while it rests (CSS picks one, see .hero-motion-toggle). */}
      <button
        type="button"
        data-motion={motion}
        onClick={toggleMotion}
        className="hero-motion-toggle absolute bottom-6 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-white sm:right-6 lg:right-8"
      >
        <span className="hm-when-running inline-flex">
          <Pause className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">{t.hero.pauseMotion}</span>
        </span>
        <span className="hm-when-paused inline-flex">
          <Play className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">{t.hero.playMotion}</span>
        </span>
      </button>
    </section>
  )
}
