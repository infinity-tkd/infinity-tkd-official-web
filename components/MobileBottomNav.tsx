'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  GraduationCap,
  BookOpen,
  MapPin,
  Sparkles,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/context/LanguageContext'
import { useScrollNavContext } from '@/context/ScrollNavContext'

export function MobileBottomNav() {
  const pathname = usePathname()
  const { language } = useLanguage()
  const { isNavVisible } = useScrollNavContext()

  // Labels per language for bottom tabs
  const labels = {
    home: language === 'km' ? 'ទំព័រដើម' : language === 'zh' ? '首页' : language === 'ko' ? '홈' : 'Home',
    academy: language === 'km' ? 'កម្មវិធី' : language === 'zh' ? '课程' : language === 'ko' ? '아카데미' : 'Academy',
    library: language === 'km' ? 'បណ្ណាល័យ' : language === 'zh' ? '文库' : language === 'ko' ? '기술문고' : 'Library',
    locations: language === 'km' ? 'ទីតាំង' : language === 'zh' ? '道馆' : language === 'ko' ? '도장위치' : 'Locations',
    trial: language === 'km' ? 'សាកល្បង' : language === 'zh' ? '预约' : language === 'ko' ? '체험' : 'Trial',
  }

  const isHome = pathname === '/'
  const isAcademy = pathname === '/academy' || pathname === '/pricing' || pathname === '/incubator'
  const isLibrary = pathname?.startsWith('/library')
  const isLocations = pathname === '/locations'
  const isTrial = pathname === '/contact'

  const navItems = [
    {
      href: '/',
      label: labels.home,
      icon: Home,
      isActive: isHome,
    },
    {
      href: '/academy',
      label: labels.academy,
      icon: GraduationCap,
      isActive: isAcademy,
    },
    {
      href: '/library',
      label: labels.library,
      icon: BookOpen,
      isActive: isLibrary,
    },
    {
      href: '/locations',
      label: labels.locations,
      icon: MapPin,
      isActive: isLocations,
    },
    {
      href: '/contact?subject=Free%20Trial%20Booking',
      label: labels.trial,
      icon: Sparkles,
      isActive: isTrial,
      isSpecial: true,
    },
  ]

  return (
    <nav
      aria-label="Mobile Navigation"
      className={cn(
        'lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-zinc-200/80 dark:border-zinc-900/80 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.4)] pb-[env(safe-area-inset-bottom,0px)] transition-transform duration-300 ease-in-out',
        isNavVisible ? 'translate-y-0' : 'translate-y-full'
      )}
    >
      <div className="grid grid-cols-5 h-14 sm:h-16 items-center px-1 max-w-lg mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon

          if (item.isSpecial) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center py-1 group min-h-[44px] touch-press cursor-pointer"
                aria-label={item.label}
              >
                <div
                  className={cn(
                    'w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-all duration-300 shadow-brand-glow',
                    item.isActive
                      ? 'bg-brand-red text-white scale-105 ring-2 ring-brand-red/30'
                      : 'bg-brand-red/10 text-brand-red hover:bg-brand-red hover:text-white'
                  )}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span
                  className={cn(
                    'text-[9px] sm:text-[10px] font-bold uppercase tracking-tight sm:tracking-wider mt-0.5 transition-colors',
                    item.isActive ? 'text-brand-red' : 'text-zinc-600 dark:text-zinc-400'
                  )}
                >
                  {item.label}
                </span>
              </Link>
            )
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center py-1 group relative min-h-[44px] touch-press cursor-pointer"
              aria-label={item.label}
            >
              <div className="relative">
                <Icon
                  className={cn(
                    'w-5 h-5 transition-all duration-300',
                    item.isActive
                      ? 'text-brand-red scale-110'
                      : 'text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white'
                  )}
                />
                {item.isActive && (
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_6px_#EF2F38]" />
                )}
              </div>
              <span
                className={cn(
                  'text-[9px] sm:text-[10px] uppercase font-bold tracking-tight sm:tracking-wider mt-1 transition-colors truncate max-w-full px-1',
                  item.isActive
                    ? 'text-brand-red font-black'
                    : 'text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white'
                )}
              >
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
