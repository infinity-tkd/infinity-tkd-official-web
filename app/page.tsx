'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ChevronDown,
  Flame,
  Activity,
  Camera,
  Scroll,
  Award,
  Sparkles,
  Zap,
  Users,
  Trophy,
  Target,
  ShieldCheck,
  Building2,
  MapPin,
  Calendar,
  Clock,
  Phone,
  Mail,
  Navigation,
} from 'lucide-react'
import { InfinityLogo } from '@/components/InfinityLogo'
import { BeltProgressionGuide } from '@/components/BeltProgressionGuide'
import { ProgramPathfinder } from '@/components/ProgramPathfinder'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { tournamentAchievements } from '@/data/achievements'
import { dojangBranches } from '@/data/locations'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { SafeImage } from '@/components/SafeImage'
import { SafeGrid } from '@/components/SafeGrid'
import { Card3D } from '@/components/ui/Card3D'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useLanguage } from '@/context/LanguageContext'

export default function HomePage() {
  const { t, localizeList } = useLanguage()
  const localizedBranches = React.useMemo(() => localizeList(dojangBranches), [localizeList])

  return (
    <div className="bg-white dark:bg-black text-zinc-900 dark:text-white selection:bg-brand-red selection:text-white transition-colors duration-500 font-sans overflow-x-hidden">
      {/* =========================================================================
          1. HERO SECTION (Fully Responsive: Desktop, iPad/Tablet, Mobile)
         ========================================================================= */}
      <section className="relative min-h-[90vh] md:min-h-[94vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24 pb-20">
        {/* Background Gradients & Imagery */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-red/10 via-white to-white dark:from-brand-red/20 dark:via-black dark:to-black opacity-90 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-red/15 via-transparent to-transparent opacity-80 z-10" />
          <SafeImage
            src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2070&auto=format&fit=crop"
            alt="Infinity Taekwondo Hero Background"
            priority
            className="w-full h-full object-cover opacity-15 dark:opacity-30 scale-105 animate-[pulse_12s_ease-in-out_infinite]"
          />
        </div>

        {/* Subtle Watermark Hangul */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] sm:text-[14vw] font-black text-black/[0.03] dark:text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter whitespace-nowrap z-0">
          태권도 INFINITY
        </div>

        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <div className="inline-block mb-4 sm:mb-6 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 py-1.5 px-3.5 sm:px-4 border border-brand-red/30 rounded-xl text-brand-red text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase bg-brand-red/5 backdrop-blur-md shadow-brand-glow">
              <Sparkles className="w-3.5 h-3.5 shrink-0" /> {t.hero.badge}
            </span>
          </div>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight sm:tracking-tighter mb-4 sm:mb-6 uppercase leading-[0.95] sm:leading-none animate-fade-in-up drop-shadow-xl text-zinc-900 dark:text-white break-words"
            style={{ animationDelay: '0.15s' }}
          >
            {t.hero.title1} <span className="text-brand-red">{t.hero.title2}</span>
          </h1>

          <p
            className="text-sm sm:text-base md:text-xl lg:text-2xl font-light text-zinc-700 dark:text-zinc-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up px-2"
            style={{ animationDelay: '0.25s' }}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center items-center animate-fade-in-up px-4 max-w-md sm:max-w-none mx-auto w-full"
            style={{ animationDelay: '0.35s' }}
          >
            <Link
              href="/academy"
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-brand-red text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-zinc-900 dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-brand-glow hover:shadow-brand-glow-lg flex items-center justify-center gap-2 touch-press"
            >
              {t.hero.ctaPrimary} <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/locations"
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:border-brand-red hover:text-brand-red transition-all duration-300 flex items-center justify-center gap-2 touch-press"
            >
              <Building2 className="w-4 h-4 text-brand-red" /> {t.nav.locations}
            </Link>
          </div>
        </div>

        {/* Accessible Scroll Indicator */}
        <a
          href="#brand-stats"
          aria-label="Scroll to dojang overview and statistics"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-20 p-2 text-zinc-400 dark:text-zinc-500 hover:text-brand-red dark:hover:text-brand-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-full"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
      </section>

      {/* =========================================================================
          2. BRAND STATS BANNER (Responsive 3-Col on Tablet & Desktop, 1-Col on Mobile)
         ========================================================================= */}
      <section id="brand-stats" className="bg-brand-red text-white py-8 sm:py-9 relative z-20 shadow-xl overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 md:gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/20">
            <div className="py-2 flex flex-col items-center justify-center">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none">
                <AnimatedCounter value={t.stats.students} duration={2000} />
              </span>
              <span className="text-[11px] sm:text-xs md:text-sm uppercase font-bold tracking-widest mt-1.5 text-white/90">
                {t.stats.studentsLabel}
              </span>
            </div>

            <div className="py-2 flex flex-col items-center justify-center pt-4 sm:pt-2">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none">
                <AnimatedCounter value={t.stats.experience} duration={1600} />
              </span>
              <span className="text-[11px] sm:text-xs md:text-sm uppercase font-bold tracking-widest mt-1.5 text-white/90">
                {t.stats.experienceLabel}
              </span>
            </div>

            <div className="py-2 flex flex-col items-center justify-center pt-4 sm:pt-2">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none">
                <AnimatedCounter value={t.stats.competitions} duration={2200} />
              </span>
              <span className="text-[11px] sm:text-xs md:text-sm uppercase font-bold tracking-widest mt-1.5 text-white/90">
                {t.stats.competitionsLabel}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. THE DOJANG (Martial Arts Core Foundation)
         ========================================================================= */}
      <section id="dojang" className="relative py-20 sm:py-28 md:py-32 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 overflow-hidden transition-colors duration-500 scroll-mt-20">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-red/10 blur-[130px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <ScrollReveal direction="left" className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Flame className="w-5 h-5 text-brand-red drop-shadow-[0_0_8px_rgba(239,47,56,0.8)]" />
                <span className="font-bold uppercase tracking-widest text-xs text-brand-red">
                  {t.dojang.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-4 sm:mb-6 leading-none text-zinc-900 dark:text-white">
                {t.dojang.title1} <span className="text-brand-red">{t.dojang.title2}</span>
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 font-light">
                {t.dojang.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
                <div className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 hover:border-brand-red transition-all duration-300">
                  <h4 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white mb-1">
                    {t.dojang.poomsaeTitle}
                  </h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">
                    {t.dojang.poomsaeDesc}
                  </p>
                </div>
                <div className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 hover:border-brand-red transition-all duration-300">
                  <h4 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white mb-1">
                    {t.dojang.trickingTitle}
                  </h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">
                    {t.dojang.trickingDesc}
                  </p>
                </div>
              </div>

              <Link
                href="/academy"
                className="inline-flex items-center gap-2 text-brand-red font-bold uppercase tracking-widest text-xs hover:text-zinc-900 dark:hover:text-white transition-colors group touch-press"
              >
                <span>{t.dojang.btn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </ScrollReveal>

            {/* High-Impact Visual */}
            <ScrollReveal direction="right" className="order-1 md:order-2 relative group perspective-1000">
              <Card3D maxTilt={4} className="w-full">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-tr from-brand-red/30 to-transparent blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 rounded-xl" />
                  <SafeImage
                    src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop"
                    alt="Infinity Taekwondo Action Sparring"
                    className="relative z-10 rounded-[14px] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 w-full h-[320px] sm:h-[400px] md:h-[460px] lg:h-[520px] object-cover object-center border border-zinc-200 dark:border-zinc-800"
                  />
                </div>
              </Card3D>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. INTERACTIVE BELT PROGRESSION SHOWCASE
         ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white dark:bg-black transition-colors duration-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <ScrollReveal direction="up">
            <BeltProgressionGuide />
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          5. PILLARS OF INFINITY BENTO GRID (Responsive 4-Col Desktop, 2-Col Tablet, 1-Col Mobile)
         ========================================================================= */}
      <section id="pillars" className="py-20 sm:py-28 bg-zinc-900 dark:bg-black text-white relative overflow-hidden scroll-mt-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <ScrollReveal direction="up" className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                {t.pillars.badge}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-4 leading-none">
              {t.pillars.title1} <span className="text-brand-red">{t.pillars.title2}</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              {t.pillars.subtitle}
            </p>
          </ScrollReveal>

          {/* Bento Grid (14px radius) with Interactive 3D Spatial Tilt */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-[340px] sm:auto-rows-[360px] lg:auto-rows-[390px]">
            {/* 1. Recognized Poomsae */}
            <ScrollReveal direction="up" delay={50} className="h-full">
              <Card3D maxTilt={6} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-[14px] border border-brand-red/30 bg-zinc-900/60 backdrop-blur-xl hover:border-brand-red transition-all duration-500 hover:shadow-brand-glow">
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-6 right-6 z-20">
                    <div className="p-3 bg-brand-red/10 rounded-xl border border-brand-red/30 text-brand-red group-hover:scale-110 transition-transform duration-500">
                      <Scroll className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-5 sm:p-6 lg:p-8 w-full z-20">
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter mb-1 text-white">
                      {t.pillars.p1Title}
                    </h3>
                    <p className="text-brand-red text-xs font-bold uppercase tracking-widest mb-2">
                      {t.pillars.p1Subtitle}
                    </p>
                    <p className="text-zinc-300 text-xs leading-relaxed transition-all duration-300 block line-clamp-3 sm:line-clamp-4 lg:line-clamp-none font-light">
                      {t.pillars.p1Desc}
                    </p>
                  </div>
                  <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                    <SafeImage
                      src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2940&auto=format&fit=crop"
                      className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700"
                      alt="Recognized Poomsae"
                    />
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>

            {/* 2. Freestyle Tricking */}
            <ScrollReveal direction="up" delay={100} className="h-full">
              <Card3D maxTilt={6} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-[14px] border border-white/20 bg-zinc-900/60 backdrop-blur-xl hover:border-white/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                  <div className="absolute top-6 right-6 z-20">
                    <div className="p-3 bg-white/10 rounded-xl border border-white/20 text-white group-hover:scale-110 transition-transform duration-500">
                      <Zap className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-5 sm:p-6 lg:p-8 w-full z-20">
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter mb-1 text-white">
                      {t.pillars.p2Title}
                    </h3>
                    <p className="text-zinc-300 text-xs font-bold uppercase tracking-widest mb-2">
                      {t.pillars.p2Subtitle}
                    </p>
                    <p className="text-zinc-300 text-xs leading-relaxed transition-all duration-300 block line-clamp-3 sm:line-clamp-4 lg:line-clamp-none font-light">
                      {t.pillars.p2Desc}
                    </p>
                  </div>
                  <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700">
                    <SafeImage
                      src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2938&auto=format&fit=crop"
                      className="w-full h-full object-cover grayscale"
                      alt="Freestyle Tricking"
                    />
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>

            {/* 3. Sport Science Lab */}
            <ScrollReveal direction="up" delay={150} className="h-full">
              <Card3D maxTilt={6} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-[14px] border border-brand-green/30 bg-zinc-900/60 backdrop-blur-xl hover:border-brand-green transition-all duration-500 hover:shadow-[0_0_30px_rgba(9,187,0,0.3)]">
                  <div className="absolute top-6 right-6 z-20">
                    <div className="p-3 bg-brand-green/10 rounded-xl border border-brand-green/30 text-brand-green group-hover:scale-110 transition-transform duration-500">
                      <Activity className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-5 sm:p-6 lg:p-8 w-full z-20">
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter mb-1 text-white">
                      {t.pillars.p3Title}
                    </h3>
                    <p className="text-brand-green text-xs font-bold uppercase tracking-widest mb-2">
                      {t.pillars.p3Subtitle}
                    </p>
                    <p className="text-zinc-300 text-xs leading-relaxed transition-all duration-300 block line-clamp-3 sm:line-clamp-4 lg:line-clamp-none font-light">
                      {t.pillars.p3Desc}
                    </p>
                  </div>
                  <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                    <SafeImage
                      src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2940&auto=format&fit=crop"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      alt="Sport Science"
                    />
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>

            {/* 4. Creative Media Studio */}
            <ScrollReveal direction="up" delay={200} className="h-full">
              <Card3D maxTilt={6} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-[14px] border border-brand-orange/30 bg-zinc-900/60 backdrop-blur-xl hover:border-brand-orange transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,87,51,0.3)]">
                  <div className="absolute top-6 right-6 z-20">
                    <div className="p-3 bg-brand-orange/10 rounded-xl border border-brand-orange/30 text-brand-orange group-hover:scale-110 transition-transform duration-500">
                      <Camera className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-5 sm:p-6 lg:p-8 w-full z-20">
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter mb-1 text-white">
                      {t.pillars.p4Title}
                    </h3>
                    <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">
                      {t.pillars.p4Subtitle}
                    </p>
                    <p className="text-zinc-300 text-xs leading-relaxed transition-all duration-300 block line-clamp-3 sm:line-clamp-4 lg:line-clamp-none font-light">
                      {t.pillars.p4Desc}
                    </p>
                  </div>
                  <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                    <SafeImage
                      src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2942&auto=format&fit=crop"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      alt="Creative Studio"
                    />
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. DOJANG LOCATIONS PREVIEW (Olympic Branch & Kouk Khleang Branch)
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-500 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-red/5 blur-[160px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-brand-red/30 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-4">
              <Building2 className="w-3.5 h-3.5" /> {t.locations.badge}
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-zinc-900 dark:text-white leading-tight">
              {t.locations.heroTitle1} <span className="text-brand-red">{t.locations.heroTitle2}</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg mt-3 font-light leading-relaxed">
              {t.locations.heroSubtitle}
            </p>
          </ScrollReveal>

          <SafeGrid className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {localizedBranches.map((branch) => (
              <Card3D key={branch.id} maxTilt={4} scale={1.01} className="h-full">
                <div className="h-full rounded-[14px] overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 shadow-lg hover:shadow-brand-glow hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between">
                  {/* Top Cover Banner */}
                  <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-zinc-950 overflow-hidden">
                    <SafeImage
                      src={branch.image}
                      alt={branch.name}
                      className="w-full h-full object-cover grayscale opacity-65 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest bg-brand-red text-white inline-block mb-1.5 shadow-md">
                        {branch.isHeadquarters ? t.common.headquarters : t.common.branch02}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white leading-tight">
                        {branch.name}
                      </h3>
                      <p className="text-xs text-zinc-300 mt-1 flex items-center gap-1 font-light truncate">
                        <MapPin className="w-3.5 h-3.5 text-brand-red shrink-0" />
                        {branch.address.district}, {branch.address.city}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Schedule Highlight */}
                      <div className="mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-red flex items-center gap-1.5 mb-2">
                          <Clock className="w-3.5 h-3.5" /> {t.locations.operatingHours}
                        </span>
                        <div className="space-y-2">
                          {branch.scheduleGroups.map((group, sIdx) => (
                            <div
                              key={sIdx}
                              className="p-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 text-xs"
                            >
                              <div className="flex items-center justify-between gap-2 mb-1.5">
                                <span className="font-bold text-zinc-900 dark:text-white flex items-center gap-1.5 text-[11px] sm:text-xs">
                                  <Calendar className="w-3 h-3 text-brand-red shrink-0" />
                                  {group.label}
                                </span>
                                <span className="px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                                  {group.badge}
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-1.5">
                                {group.slots.map((slot, timeIdx) => (
                                  <span
                                    key={timeIdx}
                                    className="px-2 py-0.5 rounded-md bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-[10px] sm:text-[11px] font-medium text-zinc-700 dark:text-zinc-300"
                                  >
                                    {slot}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Contact Quick Info */}
                      <div className="pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                        <span className="flex items-center gap-1 font-semibold text-zinc-800 dark:text-zinc-200">
                          <Phone className="w-3.5 h-3.5 text-brand-red" /> {branch.phone}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-zinc-500 truncate">
                          <Mail className="w-3.5 h-3.5 text-brand-red" /> {branch.email}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 grid grid-cols-2 gap-2.5">
                      <Link
                        href="/locations"
                        className="py-2.5 px-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white font-bold uppercase text-[11px] tracking-wider hover:border-brand-red hover:text-brand-red transition-all flex items-center justify-center gap-1.5 text-center touch-press"
                      >
                        <Navigation className="w-3 h-3 text-brand-red" /> {t.common.viewDetails}
                      </Link>

                      <Link
                        href={`/contact?subject=Free%20Trial%20Class%20Booking&branch=${encodeURIComponent(
                          branch.name
                        )}`}
                        className="py-2.5 px-3 rounded-xl bg-brand-red text-white font-bold uppercase text-[11px] tracking-wider hover:bg-zinc-900 dark:hover:bg-white dark:hover:text-black transition-all shadow-brand-glow flex items-center justify-center gap-1 text-center touch-press"
                      >
                        {t.nav.bookTrial} <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card3D>
            ))}
          </SafeGrid>
        </div>
      </section>

      {/* =========================================================================
          7. INTERACTIVE PATHFINDER QUIZ
         ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white dark:bg-black transition-colors duration-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <ScrollReveal direction="up">
            <ProgramPathfinder />
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          8. FEATURED CHAMPIONSHIP RECORDS (Responsive 3-Col Desktop, 2-Col Tablet, 1-Col Mobile)
         ========================================================================= */}
      <section className="py-16 sm:py-20 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-1">
                  {t.achievements.badge}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                  {t.community.recentVictories}
                </h2>
              </div>

              <Link
                href="/achievements"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-red hover:underline touch-press"
              >
                {t.community.viewTrophyWall} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <SafeGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6" isolateItems>
              {tournamentAchievements.slice(0, 3).map((ach) => (
                <div
                  key={ach.id}
                  className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-zinc-400 uppercase">{ach.year}</span>
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase bg-amber-500/10 text-amber-500 border border-amber-500/30">
                        {ach.medal} Medal
                      </span>
                    </div>
                    <h3 className="text-lg font-black uppercase text-zinc-900 dark:text-white mb-1">
                      {ach.tournament}
                    </h3>
                    <p className="text-xs text-brand-red font-bold uppercase mb-3">{ach.division}</p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-4">
                      {ach.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-red shrink-0" />
                    <span className="truncate">{ach.athleteOrTeam}</span>
                  </div>
                </div>
              ))}
            </SafeGrid>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          9. COMMUNITY TESTIMONIALS
         ========================================================================= */}
      <ScrollReveal direction="up">
        <TestimonialsSection />
      </ScrollReveal>
    </div>
  )
}
