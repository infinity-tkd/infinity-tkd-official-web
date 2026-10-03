'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ArrowRight,
  ChevronDown,
  BookOpen,
  Zap,
  Flame,
  Shield,
  Layers,
  Sparkles,
  Award,
  Users,
  CreditCard,
  Info,
  X,
  MapPin,
  HeartHandshake,
  GraduationCap,
  Briefcase,
  Lightbulb,
  Building2,
  ShoppingBag,
  Newspaper,
  ExternalLink,
} from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { InfinityLogo } from './InfinityLogo'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useLanguage } from '@/context/LanguageContext'
import { useScrollNavContext } from '@/context/ScrollNavContext'
import { siteSettings } from '@/config/siteSettings'
import { libraryCategoriesMeta } from '@/data/library'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Zap,
  Flame,
  Shield,
  Layers,
  Sparkles,
}

export function Navbar() {
  const { isNavVisible, isScrolled, isMobileMenuOpen, setIsMobileMenuOpen } = useScrollNavContext()
  
  // Dropdown states
  const [isAcademyMenuOpen, setIsAcademyMenuOpen] = React.useState(false)
  const [isLibraryMenuOpen, setIsLibraryMenuOpen] = React.useState(false)
  const [isCommunityMenuOpen, setIsCommunityMenuOpen] = React.useState(false)
  const [isAboutMenuOpen, setIsAboutMenuOpen] = React.useState(false)

  const pathname = usePathname()
  const { t, language } = useLanguage()

  const academyMenuRef = React.useRef<HTMLDivElement>(null)
  const libraryMenuRef = React.useRef<HTMLDivElement>(null)
  const communityMenuRef = React.useRef<HTMLDivElement>(null)
  const aboutMenuRef = React.useRef<HTMLDivElement>(null)

  // Auto-close mobile menu on desktop resize
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
        document.body.style.overflow = ''
      }
    }
    window.addEventListener('resize', handleResize, { passive: true })
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Lock body scroll when mobile menu is active
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const isAcademyActive = pathname === '/academy' || pathname === '/pricing' || pathname === '/incubator'
  const isLibraryActive = pathname?.startsWith('/library')
  const isCommunityActive = pathname === '/community' || pathname === '/achievements' || pathname === '/join-team'
  const isAboutActive = pathname === '/about' || pathname === '/collaborations' || pathname === '/locations'

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-zinc-200/80 dark:border-zinc-900/80 shadow-sm'
          : 'bg-gradient-to-b from-black/40 via-black/10 to-transparent',
        !isNavVisible && !isMobileMenuOpen ? '-translate-y-full lg:translate-y-0' : 'translate-y-0'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* LOGO */}
          <Link
            href="/"
            className="group flex items-center gap-2 sm:gap-3 transition-transform duration-300 hover:scale-[1.02] shrink-0"
            aria-label="Infinity Taekwondo Home"
          >
            <InfinityLogo
              variant="full"
              className="h-8 sm:h-9 md:h-10 w-auto drop-shadow-sm group-hover:drop-shadow-[0_0_12px_rgba(239,47,56,0.4)] transition-all duration-300"
            />
          </Link>

          {/* ================================================================== */}
          {/* DESKTOP RESTRUCTURED DROPDOWN NAVIGATION (1024px+) */}
          {/* ================================================================== */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {/* 1. Academy Dropdown (Syllabus, Pricing, Incubator, Pro Shop) */}
            <div
              ref={academyMenuRef}
              className="relative"
              onMouseEnter={() => setIsAcademyMenuOpen(true)}
              onMouseLeave={() => setIsAcademyMenuOpen(false)}
              onFocus={() => setIsAcademyMenuOpen(true)}
              onBlur={(e) => {
                if (!academyMenuRef.current?.contains(e.relatedTarget as Node)) {
                  setIsAcademyMenuOpen(false)
                }
              }}
            >
              <Link
                href="/academy"
                aria-expanded={isAcademyMenuOpen}
                aria-haspopup="true"
                className={cn(
                  'relative text-xs font-bold tracking-wider uppercase hover:text-brand-red transition-colors duration-300 flex items-center gap-1.5 py-2 whitespace-nowrap',
                  isAcademyActive ? 'text-brand-red font-black' : 'text-zinc-700 dark:text-zinc-300'
                )}
              >
                <span>{t.nav.academy}</span>
                <ChevronDown
                  className={cn(
                    'w-3.5 h-3.5 transition-transform duration-300 opacity-60',
                    isAcademyMenuOpen ? 'rotate-180 text-brand-red opacity-100' : ''
                  )}
                />
                <span
                  className={cn(
                    'absolute -bottom-0.5 left-0 right-0 h-0.5 bg-brand-red transition-all duration-300 rounded-full',
                    isAcademyActive ? 'opacity-100' : 'opacity-0'
                  )}
                />
              </Link>

              {/* Academy Dropdown Panel */}
              {isAcademyMenuOpen && (
                <div className="absolute top-full left-0 w-72 pt-2 animate-fade-in-up z-50 pointer-events-auto">
                  <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-[14px] shadow-2xl p-2.5 overflow-hidden backdrop-blur-2xl space-y-1">
                    <Link
                      href="/academy"
                      onClick={() => setIsAcademyMenuOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors flex items-start gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-brand-red/10 text-brand-red shrink-0 group-hover:scale-105 transition-transform">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold uppercase text-zinc-900 dark:text-white group-hover:text-brand-red transition-colors">
                          Training Syllabus
                        </h5>
                        <p className="text-[10px] text-zinc-500 font-light">Age divisions, belts &amp; weekly class formats</p>
                      </div>
                    </Link>

                    <Link
                      href="/pricing"
                      onClick={() => setIsAcademyMenuOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors flex items-start gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0 group-hover:scale-105 transition-transform">
                        <CreditCard className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold uppercase text-zinc-900 dark:text-white group-hover:text-brand-red transition-colors">
                          Memberships &amp; Pricing
                        </h5>
                        <p className="text-[10px] text-zinc-500 font-light">Flexible monthly plans &amp; family packages</p>
                      </div>
                    </Link>

                    <Link
                      href="/incubator"
                      onClick={() => setIsAcademyMenuOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors flex items-start gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500 shrink-0 group-hover:scale-105 transition-transform">
                        <Lightbulb className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold uppercase text-zinc-900 dark:text-white group-hover:text-brand-red transition-colors">
                          Student Incubator
                        </h5>
                        <p className="text-[10px] text-zinc-500 font-light">Cadet research &amp; martial leadership grants</p>
                      </div>
                    </Link>

                    <a
                      href={siteSettings.navigation.externalLinks?.store || '#'}
                      onClick={() => setIsAcademyMenuOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors flex items-start gap-3 group border-t border-zinc-100 dark:border-zinc-800/80"
                    >
                      <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500 shrink-0 group-hover:scale-105 transition-transform">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold uppercase text-zinc-900 dark:text-white group-hover:text-brand-red transition-colors flex items-center gap-1">
                          Pro Shop &amp; Store <ExternalLink className="w-2.5 h-2.5 text-zinc-400" />
                        </h5>
                        <p className="text-[10px] text-zinc-500 font-light">Official Doboks, sparring gear &amp; equipment</p>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Visual Mega-Menu: Curriculum Library */}
            <div
              ref={libraryMenuRef}
              className="relative"
              onMouseEnter={() => setIsLibraryMenuOpen(true)}
              onMouseLeave={() => setIsLibraryMenuOpen(false)}
              onFocus={() => setIsLibraryMenuOpen(true)}
              onBlur={(e) => {
                if (!libraryMenuRef.current?.contains(e.relatedTarget as Node)) {
                  setIsLibraryMenuOpen(false)
                }
              }}
            >
              <Link
                href="/library"
                aria-expanded={isLibraryMenuOpen}
                aria-haspopup="true"
                className={cn(
                  'relative text-xs font-bold tracking-wider uppercase hover:text-brand-red transition-colors duration-300 flex items-center gap-1.5 py-2 whitespace-nowrap',
                  isLibraryActive ? 'text-brand-red font-black' : 'text-zinc-700 dark:text-zinc-300'
                )}
              >
                <span>{t.nav.library}</span>
                <ChevronDown
                  className={cn(
                    'w-3.5 h-3.5 transition-transform duration-300 opacity-60',
                    isLibraryMenuOpen ? 'rotate-180 text-brand-red opacity-100' : ''
                  )}
                />
                <span
                  className={cn(
                    'absolute -bottom-0.5 left-0 right-0 h-0.5 bg-brand-red transition-all duration-300 rounded-full',
                    isLibraryActive ? 'opacity-100' : 'opacity-0'
                  )}
                />
              </Link>

              {/* Visual Mega-Menu Dropdown Panel (14px radius) */}
              {isLibraryMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] pt-2 animate-fade-in-up z-50 pointer-events-auto">
                  <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-[14px] shadow-2xl p-5 overflow-hidden backdrop-blur-2xl">
                    {/* Mega Menu Header */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-100 dark:border-zinc-800">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red block">
                          Kukkiwon Standard Encyclopedia
                        </span>
                        <h4 className="text-xs sm:text-sm font-black uppercase text-zinc-900 dark:text-white">
                          Curriculum Knowledge Hub
                        </h4>
                      </div>
                      <Link
                        href="/library"
                        onClick={() => setIsLibraryMenuOpen(false)}
                        className="text-[11px] font-bold uppercase tracking-wider text-brand-red hover:underline flex items-center gap-1"
                      >
                        View All {libraryCategoriesMeta.length} Disciplines <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    {/* 9 Disciplines Visual Grid */}
                    <div className="grid grid-cols-3 gap-2">
                      {libraryCategoriesMeta.map((cat) => {
                        const Icon = iconMap[cat.iconName] || BookOpen

                        return (
                          <Link
                            key={cat.id}
                            href={`/library/${cat.id}`}
                            onClick={() => setIsLibraryMenuOpen(false)}
                            className="group/item p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-brand-red/50 hover:bg-white dark:hover:bg-zinc-900 transition-all flex flex-col justify-between"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <div
                                className="p-1.5 rounded-lg shrink-0 transition-transform group-hover/item:scale-110"
                                style={{
                                  backgroundColor: `${cat.accentColor}20`,
                                  color: cat.accentColor,
                                }}
                              >
                                <Icon className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-[9px] font-mono uppercase text-brand-red truncate">
                                {cat.koreanTitle.split('(')[0]}
                              </span>
                            </div>

                            <div>
                              <h5 className="text-[11px] font-bold uppercase text-zinc-900 dark:text-white truncate group-hover/item:text-brand-red transition-colors leading-tight">
                                {cat.title}
                              </h5>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Community Dropdown (Coaches, Achievements, Join Team) */}
            <div
              ref={communityMenuRef}
              className="relative"
              onMouseEnter={() => setIsCommunityMenuOpen(true)}
              onMouseLeave={() => setIsCommunityMenuOpen(false)}
              onFocus={() => setIsCommunityMenuOpen(true)}
              onBlur={(e) => {
                if (!communityMenuRef.current?.contains(e.relatedTarget as Node)) {
                  setIsCommunityMenuOpen(false)
                }
              }}
            >
              <Link
                href="/community"
                aria-expanded={isCommunityMenuOpen}
                aria-haspopup="true"
                className={cn(
                  'relative text-xs font-bold tracking-wider uppercase hover:text-brand-red transition-colors duration-300 flex items-center gap-1.5 py-2 whitespace-nowrap',
                  isCommunityActive ? 'text-brand-red font-black' : 'text-zinc-700 dark:text-zinc-300'
                )}
              >
                <span>{t.nav.community}</span>
                <ChevronDown
                  className={cn(
                    'w-3.5 h-3.5 transition-transform duration-300 opacity-60',
                    isCommunityMenuOpen ? 'rotate-180 text-brand-red opacity-100' : ''
                  )}
                />
                <span
                  className={cn(
                    'absolute -bottom-0.5 left-0 right-0 h-0.5 bg-brand-red transition-all duration-300 rounded-full',
                    isCommunityActive ? 'opacity-100' : 'opacity-0'
                  )}
                />
              </Link>

              {/* Community Dropdown Panel */}
              {isCommunityMenuOpen && (
                <div className="absolute top-full left-0 w-72 pt-2 animate-fade-in-up z-50 pointer-events-auto">
                  <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-[14px] shadow-2xl p-2.5 overflow-hidden backdrop-blur-2xl space-y-1">
                    <Link
                      href="/community"
                      onClick={() => setIsCommunityMenuOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors flex items-start gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 shrink-0 group-hover:scale-105 transition-transform">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold uppercase text-zinc-900 dark:text-white group-hover:text-brand-red transition-colors">
                          Coaches &amp; Athletes
                        </h5>
                        <p className="text-[10px] text-zinc-500 font-light">Kukkiwon certified Master faculty &amp; demo team</p>
                      </div>
                    </Link>

                    <Link
                      href="/achievements"
                      onClick={() => setIsCommunityMenuOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors flex items-start gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500 shrink-0 group-hover:scale-105 transition-transform">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold uppercase text-zinc-900 dark:text-white group-hover:text-brand-red transition-colors">
                          Achievements &amp; Medals
                        </h5>
                        <p className="text-[10px] text-zinc-500 font-light">National &amp; international championship records</p>
                      </div>
                    </Link>

                    <Link
                      href="/join-team"
                      onClick={() => setIsCommunityMenuOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors flex items-start gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500 shrink-0 group-hover:scale-105 transition-transform">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold uppercase text-zinc-900 dark:text-white group-hover:text-brand-red transition-colors">
                          Join Coaching Staff
                        </h5>
                        <p className="text-[10px] text-zinc-500 font-light">Instructor careers &amp; assistant internships</p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 4. About & Organization Dropdown (Philosophy, Collaborations, Locations, Journal) */}
            <div
              ref={aboutMenuRef}
              className="relative"
              onMouseEnter={() => setIsAboutMenuOpen(true)}
              onMouseLeave={() => setIsAboutMenuOpen(false)}
              onFocus={() => setIsAboutMenuOpen(true)}
              onBlur={(e) => {
                if (!aboutMenuRef.current?.contains(e.relatedTarget as Node)) {
                  setIsAboutMenuOpen(false)
                }
              }}
            >
              <Link
                href="/about"
                aria-expanded={isAboutMenuOpen}
                aria-haspopup="true"
                className={cn(
                  'relative text-xs font-bold tracking-wider uppercase hover:text-brand-red transition-colors duration-300 flex items-center gap-1.5 py-2 whitespace-nowrap',
                  isAboutActive ? 'text-brand-red font-black' : 'text-zinc-700 dark:text-zinc-300'
                )}
              >
                <span>{t.nav.about}</span>
                <ChevronDown
                  className={cn(
                    'w-3.5 h-3.5 transition-transform duration-300 opacity-60',
                    isAboutMenuOpen ? 'rotate-180 text-brand-red opacity-100' : ''
                  )}
                />
                <span
                  className={cn(
                    'absolute -bottom-0.5 left-0 right-0 h-0.5 bg-brand-red transition-all duration-300 rounded-full',
                    isAboutActive ? 'opacity-100' : 'opacity-0'
                  )}
                />
              </Link>

              {/* About Dropdown Panel */}
              {isAboutMenuOpen && (
                <div className="absolute top-full right-0 w-80 pt-2 animate-fade-in-up z-50 pointer-events-auto">
                  <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-[14px] shadow-2xl p-2.5 overflow-hidden backdrop-blur-2xl space-y-1">
                    <Link
                      href="/about"
                      onClick={() => setIsAboutMenuOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors flex items-start gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-brand-red/10 text-brand-red shrink-0 group-hover:scale-105 transition-transform">
                        <Info className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold uppercase text-zinc-900 dark:text-white group-hover:text-brand-red transition-colors">
                          Philosophy &amp; Story
                        </h5>
                        <p className="text-[10px] text-zinc-500 font-light">Founding journey, core tenets &amp; executive faculty</p>
                      </div>
                    </Link>

                    <Link
                      href="/collaborations"
                      onClick={() => setIsAboutMenuOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors flex items-start gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 shrink-0 group-hover:scale-105 transition-transform">
                        <HeartHandshake className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold uppercase text-zinc-900 dark:text-white group-hover:text-brand-red transition-colors">
                          Global Collaborations
                        </h5>
                        <p className="text-[10px] text-zinc-500 font-light">World Taekwondo, Kukkiwon &amp; academic alliances</p>
                      </div>
                    </Link>

                    <Link
                      href="/locations"
                      onClick={() => setIsAboutMenuOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors flex items-start gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0 group-hover:scale-105 transition-transform">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold uppercase text-zinc-900 dark:text-white group-hover:text-brand-red transition-colors">
                          Dojang Locations
                        </h5>
                        <p className="text-[10px] text-zinc-500 font-light">Facility specifications, schedules &amp; interactive maps</p>
                      </div>
                    </Link>

                    <a
                      href={siteSettings.navigation.externalLinks?.blog || '#'}
                      onClick={() => setIsAboutMenuOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors flex items-start gap-3 group border-t border-zinc-100 dark:border-zinc-800/80"
                    >
                      <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500 shrink-0 group-hover:scale-105 transition-transform">
                        <Newspaper className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold uppercase text-zinc-900 dark:text-white group-hover:text-brand-red transition-colors flex items-center gap-1">
                          Martial Journal &amp; Blog <ExternalLink className="w-2.5 h-2.5 text-zinc-400" />
                        </h5>
                        <p className="text-[10px] text-zinc-500 font-light">Articles, tournament recaps &amp; master perspectives</p>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* ================================================================== */}
          {/* DESKTOP RIGHT ACTIONS (10-14px radius) */}
          {/* ================================================================== */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
            <LanguageSwitcher variant="header" />
            <ThemeToggle />

            <Link
              href="/contact"
              className="group relative px-4 py-2 rounded-xl bg-brand-red text-white font-bold text-[11px] tracking-widest uppercase transition-all duration-300 hover:shadow-brand-glow overflow-hidden shadow-sm touch-press"
            >
              <span className="relative z-10 flex items-center gap-1.5 group-hover:text-black transition-colors duration-300">
                {t.nav.bookTrial} <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            </Link>
          </div>

          {/* ================================================================== */}
          {/* MOBILE RIGHT CONTROLS (<1024px) */}
          {/* ================================================================== */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2">
            <LanguageSwitcher variant="header" />
            <ThemeToggle />

            {/* Tablet Direct CTA Button (640px - 1023px) */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[44px] rounded-xl bg-brand-red text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-brand-glow shadow-sm touch-press"
            >
              <span>{t.nav.bookTrial}</span>
              <ArrowRight className="w-3 h-3" />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 min-w-[44px] min-h-[44px] rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white transition-colors touch-press cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : (
                <div className="flex flex-col gap-1 w-4">
                  <span className="h-0.5 w-full bg-current rounded-full" />
                  <span className="h-0.5 w-full bg-current rounded-full" />
                  <span className="h-0.5 w-3/4 bg-current rounded-full self-end" />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* MOBILE FULLSCREEN ACCORDION DRAWER (<1024px) */}
      {/* ==================================================================== */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 sm:top-20 z-50 bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-900 overflow-y-auto animate-fade-in touch-scroll pb-28 h-[calc(100dvh-4rem)] sm:h-[calc(100dvh-5rem)]">
          <div className="container mx-auto px-4 py-6 space-y-6">
            {/* Primary Nav Hubs */}
            <div className="divide-y divide-zinc-100 dark:divide-zinc-900 font-bold uppercase text-xs sm:text-sm">
              {/* Academy Hub */}
              <div className="py-2 space-y-1">
                <span className="text-[10px] font-mono text-zinc-400 block px-3 pt-1">01. Academic Programs</span>
                <Link
                  href="/academy"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <GraduationCap className="w-4 h-4 text-brand-red" />
                    {t.nav.academy} Syllabus
                  </span>
                </Link>
                <Link
                  href="/pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-zinc-600 dark:text-zinc-400"
                >
                  <span className="flex items-center gap-2.5">
                    <CreditCard className="w-4 h-4 text-emerald-500" />
                    {t.nav.pricing}
                  </span>
                </Link>
                <Link
                  href="/incubator"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-zinc-600 dark:text-zinc-400"
                >
                  <span className="flex items-center gap-2.5">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    Student Incubator
                  </span>
                </Link>
                <a
                  href={siteSettings.navigation.externalLinks?.store || '#'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-zinc-600 dark:text-zinc-400"
                >
                  <span className="flex items-center gap-2.5">
                    <ShoppingBag className="w-4 h-4 text-purple-500" />
                    Pro Shop &amp; Gear Store
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </div>

              {/* Community Hub */}
              <div className="py-2 space-y-1">
                <span className="text-[10px] font-mono text-zinc-400 block px-3 pt-1">02. People &amp; Milestones</span>
                <Link
                  href="/community"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Users className="w-4 h-4 text-blue-500" />
                    {t.nav.community}
                  </span>
                </Link>
                <Link
                  href="/achievements"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-zinc-600 dark:text-zinc-400"
                >
                  <span className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-amber-500" />
                    {t.nav.achievements}
                  </span>
                </Link>
                <Link
                  href="/join-team"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-zinc-600 dark:text-zinc-400"
                >
                  <span className="flex items-center gap-2.5">
                    <Briefcase className="w-4 h-4 text-purple-500" />
                    Join Coaching Staff
                  </span>
                </Link>
              </div>

              {/* About & Organization Hub */}
              <div className="py-2 space-y-1">
                <span className="text-[10px] font-mono text-zinc-400 block px-3 pt-1">03. Philosophy &amp; Ecosystem</span>
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Info className="w-4 h-4 text-brand-red" />
                    {t.nav.about} Philosophy
                  </span>
                </Link>
                <Link
                  href="/collaborations"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-zinc-600 dark:text-zinc-400"
                >
                  <span className="flex items-center gap-2.5">
                    <HeartHandshake className="w-4 h-4 text-blue-500" />
                    Global Collaborations
                  </span>
                </Link>
                <Link
                  href="/locations"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-zinc-600 dark:text-zinc-400"
                >
                  <span className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-emerald-500" />
                    Dojang Locations
                  </span>
                </Link>
                <a
                  href={siteSettings.navigation.externalLinks?.blog || '#'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-zinc-600 dark:text-zinc-400"
                >
                  <span className="flex items-center gap-2.5">
                    <Newspaper className="w-4 h-4 text-amber-500" />
                    Martial Journal &amp; Blog
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </div>
            </div>

            {/* Curriculum Library Mega Sub-Section (14px radius) */}
            <div className="p-4 rounded-[14px] bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red">
                  {t.nav.library} ({libraryCategoriesMeta.length} Disciplines)
                </span>
                <Link
                  href="/library"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 hover:text-brand-red"
                >
                  View All →
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {libraryCategoriesMeta.map((cat) => {
                  const Icon = iconMap[cat.iconName] || BookOpen

                  return (
                    <Link
                      key={cat.id}
                      href={`/library/${cat.id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center gap-2"
                    >
                      <div
                        className="p-1 rounded-md shrink-0"
                        style={{
                          backgroundColor: `${cat.accentColor}20`,
                          color: cat.accentColor,
                        }}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase text-zinc-900 dark:text-white truncate">
                        {cat.title}
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Mobile Lead Gen CTA */}
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full p-4 rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-brand-glow touch-press"
              >
                {t.nav.bookTrial} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
