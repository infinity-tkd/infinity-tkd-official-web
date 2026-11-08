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
import { prefetchFor } from '@/config/navigation'
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

  // Native-style tab bar: frosted glass, hairline edge, tint-only active state, sentence-case labels.
  return (
    <nav
      aria-label="Mobile navigation"
      className={cn(
        'lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200/70 dark:border-white/[0.06] bg-white/85 dark:bg-black/80 backdrop-blur-xl backdrop-saturate-150 pb-[env(safe-area-inset-bottom,0px)] transition-transform duration-300 ease-out-expo',
        isNavVisible ? 'translate-y-0' : 'translate-y-full'
      )}
    >
      <div className="mx-auto grid h-14 max-w-lg grid-cols-5 items-center px-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const labelClass = cn(
            'mt-1 max-w-full truncate px-1 text-[11px] font-semibold leading-none transition-colors',
            item.isActive ? 'text-brand-red' : 'text-zinc-500 dark:text-zinc-400'
          )

          return (
            <Link
              key={item.href}
              href={item.href}
              prefetch={prefetchFor(item.href)}
              aria-current={item.isActive ? 'page' : undefined}
              className="group flex min-h-[44px] cursor-pointer flex-col items-center justify-center touch-press"
            >
              {item.isSpecial ? (
                <span
                  className={cn(
                    'flex h-7 w-7 items-center justify-center rounded-xl transition-colors duration-200',
                    item.isActive ? 'bg-brand-red text-white' : 'bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white'
                  )}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
              ) : (
                <Icon
                  aria-hidden="true"
                  className={cn(
                    'h-[22px] w-[22px] transition-colors duration-200',
                    item.isActive ? 'text-brand-red' : 'text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white'
                  )}
                  strokeWidth={item.isActive ? 2.25 : 1.75}
                />
              )}
              <span className={labelClass}>{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
