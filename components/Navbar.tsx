'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, BookOpen, ChevronDown, Flame, Layers, Shield, Sparkles, X, Zap } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { InfinityLogo } from './InfinityLogo'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useLanguage } from '@/context/LanguageContext'
import { useScrollNavContext } from '@/context/ScrollNavContext'
import { NAV_GROUPS, isGroupActive, prefetchFor, type NavGroup } from '@/config/navigation'
// The small categories module, not the '@/data/library' barrel (which assembles the full technique list).
import { libraryCategoriesMeta } from '@/data/library/categories'
import { cn } from '@/lib/utils'

const categoryIcons: Record<string, React.ElementType> = { BookOpen, Zap, Flame, Shield, Layers, Sparkles }

const triggerClass =
  'relative flex items-center gap-1.5 py-2 whitespace-nowrap text-xs font-bold uppercase tracking-wider transition-colors duration-300 hover:text-brand-red'

export function Navbar() {
  const { isNavVisible, isScrolled, isMobileMenuOpen, setIsMobileMenuOpen } = useScrollNavContext()
  const [openMenu, setOpenMenu] = React.useState<NavGroup['id'] | null>(null)
  const pathname = usePathname()
  const { t, localizeList } = useLanguage()

  const categories = React.useMemo(() => localizeList(libraryCategoriesMeta), [localizeList])

  // Close every menu on navigation.
  React.useEffect(() => {
    setOpenMenu(null)
    setIsMobileMenuOpen(false)
  }, [pathname, setIsMobileMenuOpen])

  // Escape closes menus; growing past the mobile breakpoint closes the drawer.
  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenMenu(null)
        setIsMobileMenuOpen(false)
      }
    }
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize, { passive: true })
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [setIsMobileMenuOpen])

  // Lock page scroll while the mobile drawer is open.
  React.useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const closeMobile = () => setIsMobileMenuOpen(false)

  const renderCategoryGrid = (variant: 'desktop' | 'mobile') =>
    categories.map((cat) => {
      const Icon = categoryIcons[cat.iconName] || BookOpen
      const iconStyle = { backgroundColor: `${cat.accentColor}20`, color: cat.accentColor }

      if (variant === 'desktop') {
        return (
          <Link
            key={cat.id}
            href={`/library/${cat.id}`}
            prefetch={false}
            onClick={() => setOpenMenu(null)}
            className="group/item flex flex-col justify-between rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/60 p-2.5 transition-all hover:border-brand-red/50 hover:bg-white dark:hover:bg-zinc-900"
          >
            <div className="mb-1 flex items-center gap-2">
              <div className="shrink-0 rounded-lg p-1.5 transition-transform group-hover/item:scale-110" style={iconStyle}>
                <Icon className="h-3.5 w-3.5" />
              </div>
              <span className="type-hangul truncate text-brand-red">{cat.koreanTitle.split('(')[0]}</span>
            </div>
            <h5 className="truncate text-[11px] font-bold uppercase leading-tight text-zinc-900 dark:text-white transition-colors group-hover/item:text-brand-red">
              {cat.title}
            </h5>
          </Link>
        )
      }

      return (
        <Link
          key={cat.id}
          href={`/library/${cat.id}`}
          prefetch={false}
          onClick={closeMobile}
          className="flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-2.5"
        >
          <div className="shrink-0 rounded-md p-1" style={iconStyle}>
            <Icon className="h-3.5 w-3.5" />
          </div>
          <span className="truncate text-[11px] font-bold uppercase text-zinc-900 dark:text-white">{cat.title}</span>
        </Link>
      )
    })

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)] border-b transition-[background-color,border-color,transform] duration-300 ease-out-expo',
        isScrolled
          ? 'border-zinc-200/70 dark:border-white/[0.06] bg-white/80 dark:bg-black/75 backdrop-blur-xl backdrop-saturate-150'
          : 'border-transparent bg-gradient-to-b from-white/70 to-transparent dark:from-black/40 dark:via-black/10',
        !isNavVisible && !isMobileMenuOpen ? '-translate-y-full lg:translate-y-0' : 'translate-y-0'
      )}
    >
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 64px bar at every breakpoint: slimmer and calmer than the old 80px desktop header. */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2 transition-transform duration-300 hover:scale-[1.02] sm:gap-3"
            aria-label="Infinity Taekwondo Home"
          >
            <InfinityLogo
              variant="full"
              className="h-8 w-auto transition-opacity duration-300 group-hover:opacity-90 sm:h-9"
            />
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex xl:gap-8">
            {NAV_GROUPS.map((group) => {
              const isOpen = openMenu === group.id
              const active = isGroupActive(pathname, group)
              const isMega = group.kind === 'mega'

              return (
                <div
                  key={group.id}
                  // The mega menu is positioned against the header container (not its trigger),
                  // so its wrapper must not establish a containing block.
                  className={isMega ? 'static' : 'relative'}
                  onMouseEnter={() => setOpenMenu(group.id)}
                  onMouseLeave={() => setOpenMenu(null)}
                  onFocus={() => setOpenMenu(group.id)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpenMenu(null)
                  }}
                >
                  <Link
                    href={group.href}
                    prefetch={prefetchFor(group.href)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className={cn(
                      triggerClass,
                      active ? 'font-black text-brand-red' : 'text-zinc-700 dark:text-zinc-300'
                    )}
                  >
                    <span>{group.label(t)}</span>
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        'h-3.5 w-3.5 opacity-60 transition-transform duration-300',
                        isOpen && 'rotate-180 text-brand-red opacity-100'
                      )}
                    />
                    <span
                      aria-hidden="true"
                      className={cn(
                        '-bottom-0.5 absolute inset-x-0 h-0.5 rounded-full bg-brand-red transition-opacity duration-300',
                        active ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                  </Link>

                  {isOpen && isMega && (
                    // Centered with auto margins (not a translate): the fade-in-up animation owns `transform`.
                    <div className="pointer-events-auto absolute inset-x-0 top-full z-50 mx-auto w-[min(680px,calc(100vw-2rem))] animate-fade-in-up pt-2">
                      <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5 shadow-2xl backdrop-blur-2xl">
                        <div className="mb-3 flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3">
                          <div>
                            <span className="block text-[11px] font-bold uppercase tracking-widest text-brand-red">
                              Kukkiwon Standard Encyclopedia
                            </span>
                            <h4 className="text-sm font-black uppercase text-zinc-900 dark:text-white">Curriculum Knowledge Hub</h4>
                          </div>
                          <Link
                            href="/library"
                            prefetch={false}
                            onClick={() => setOpenMenu(null)}
                            className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-brand-red hover:underline"
                          >
                            View all {categories.length} disciplines <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>
                        <div className="grid grid-cols-3 gap-2">{renderCategoryGrid('desktop')}</div>
                      </div>
                    </div>
                  )}

                  {isOpen && !isMega && (
                    <div
                      className={cn(
                        'pointer-events-auto absolute top-full z-50 w-80 animate-fade-in-up pt-2',
                        // Keep right-most menu on-screen at narrow desktop widths.
                        group.id === 'about' ? 'right-0' : 'left-0'
                      )}
                    >
                      <ul className="space-y-1 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-2.5 shadow-2xl backdrop-blur-2xl">
                        {group.items.map((item) => {
                          const Icon = item.icon
                          return (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                prefetch={prefetchFor(item.href)}
                                onClick={() => setOpenMenu(null)}
                                className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900"
                              >
                                <span className="shrink-0 rounded-lg bg-brand-red/10 p-2 text-brand-red transition-transform group-hover:scale-105">
                                  <Icon className="h-4 w-4" aria-hidden="true" />
                                </span>
                                <span>
                                  <span className="block text-xs font-bold uppercase text-zinc-900 dark:text-white transition-colors group-hover:text-brand-red">
                                    {item.label(t)}
                                  </span>
                                  <span className="block text-[13px] leading-snug text-zinc-500">{item.description}</span>
                                </span>
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Desktop actions */}
          <div className="hidden shrink-0 items-center gap-2.5 lg:flex xl:gap-3">
            <LanguageSwitcher variant="header" />
            <ThemeToggle />
            <Link
              href="/contact"
              className="group relative overflow-hidden rounded-xl bg-brand-red px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-white shadow-sm transition-all duration-300 hover:shadow-brand-glow touch-press"
            >
              <span className="relative z-10 flex items-center gap-1.5 transition-colors duration-300 group-hover:text-black">
                {t.nav.bookTrial} <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0"
              />
            </Link>
          </div>

          {/* Mobile / tablet actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            <LanguageSwitcher variant="header" />
            <ThemeToggle />
            <Link
              href="/contact"
              className="hidden min-h-[44px] items-center gap-1.5 rounded-xl bg-brand-red px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:shadow-brand-glow sm:inline-flex touch-press"
            >
              <span>{t.nav.bookTrial}</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 p-2.5 text-zinc-900 dark:text-white transition-colors touch-press"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <span className="flex w-4 flex-col gap-1" aria-hidden="true">
                  <span className="h-0.5 w-full rounded-full bg-current" />
                  <span className="h-0.5 w-full rounded-full bg-current" />
                  <span className="h-0.5 w-3/4 self-end rounded-full bg-current" />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / tablet drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 z-50 h-[calc(100dvh-4rem)] animate-fade-in overflow-y-auto border-t border-zinc-200 dark:border-zinc-900 bg-white dark:bg-black pb-28 touch-scroll lg:hidden"
        >
          <nav aria-label="Mobile" className="container mx-auto space-y-6 px-4 py-6">
            <div className="divide-y divide-zinc-100 dark:divide-zinc-900">
              {NAV_GROUPS.filter((group) => group.kind !== 'mega').map((group, index) => (
                <div key={group.id} className="space-y-1 py-2">
                  <span className="block px-3 pt-1 font-mono text-[11px] text-zinc-500">
                    {String(index + 1).padStart(2, '0')}. {group.label(t)}
                  </span>
                  {group.items.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        prefetch={prefetchFor(item.href)}
                        onClick={closeMobile}
                        className="flex items-center gap-2.5 rounded-xl p-3 text-xs font-bold uppercase text-zinc-800 dark:text-zinc-200 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900 sm:text-sm"
                      >
                        <Icon className="h-4 w-4 text-brand-red" aria-hidden="true" />
                        {item.label(t)}
                      </Link>
                    )
                  })}
                </div>
              ))}
            </div>

            {/* Curriculum library */}
            <div className="space-y-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 p-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-widest text-brand-red">
                  {t.nav.library} ({categories.length})
                </span>
                <Link
                  href="/library"
                  prefetch={false}
                  onClick={closeMobile}
                  className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 hover:text-brand-red"
                >
                  View all →
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-2">{renderCategoryGrid('mobile')}</div>
            </div>

            <Link
              href="/contact"
              onClick={closeMobile}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red p-4 text-xs font-bold uppercase tracking-widest text-white shadow-brand-glow touch-press"
            >
              {t.nav.bookTrial} <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
