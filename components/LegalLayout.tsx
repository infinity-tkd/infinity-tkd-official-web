'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ChevronDown,
  ChevronUp,
  Search,
  ShieldCheck,
  FileText,
  Printer,
  Mail,
  ArrowRight,
  Sparkles,
  HelpCircle,
  X,
  Shield,
  Scale,
  Heart,
  Zap,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

interface LegalLayoutProps {
  title: string
  subtitle: string
  lastUpdated: string
  sidebar: React.ReactNode
  children: React.ReactNode
  policyType?: 'privacy' | 'terms' | 'safeguarding' | 'anti-doping' | 'equality' | string
}

export function LegalLayout({
  title,
  subtitle,
  lastUpdated,
  sidebar,
  children,
  policyType = 'privacy',
}: LegalLayoutProps) {
  const [isTocOpen, setIsTocOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState('')
  const [activeSectionId, setActiveSectionId] = React.useState<string>('')
  const { language } = useLanguage()
  const pathname = usePathname()

  // ScrollSpy to highlight active section in TOC
  React.useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('.legal-article h2[id]')
      const scrollPos = window.scrollY + 180

      headings.forEach((heading) => {
        const top = (heading as HTMLElement).offsetTop
        const height = (heading as HTMLElement).offsetHeight
        const id = heading.getAttribute('id')
        if (scrollPos >= top && scrollPos < top + height + 500 && id) {
          setActiveSectionId(id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handlePrint = () => {
    window.print()
  }

  const legalPolicies = [
    { href: '/privacy', label: 'Privacy Policy', labelKm: 'គោលការណ៍ឯកជនភាព', labelZh: '隐私政策', labelKo: '개인정보 처리방침', icon: Shield },
    { href: '/terms', label: 'Terms of Service', labelKm: 'លក្ខខណ្ឌប្រើប្រាស់', labelZh: '服务条款', labelKo: '이용약관', icon: Scale },
    { href: '/safeguarding', label: 'Safeguarding & Safe Sport', labelKm: 'សុវត្ថិភាព & ការពារកុមារ', labelZh: '青少年保护与安全运动', labelKo: '아동 보호 및 안전 규정', icon: ShieldCheck },
    { href: '/anti-doping', label: 'Anti-Doping & Clean Sport', labelKm: 'ប្រឆាំងសារធាតុញៀនកីឡា', labelZh: '反兴奋剂与纯洁体育', labelKo: '도핑 방지 규정', icon: Zap },
    { href: '/equality', label: 'Equality & Inclusion', labelKm: 'សមភាព & បរិយាប័ន្ន', labelZh: '平等、多元与包容', labelKo: '평등 및 포용 정책', icon: Heart },
  ]

  return (
    <div className="bg-zinc-50 dark:bg-black min-h-screen pt-24 pb-20 transition-colors duration-500 font-sans relative selection:bg-brand-red selection:text-white">
      {/* Ambient Background Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-red/5 blur-[160px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Policy Switcher Pill Bar */}
        <div className="mb-6 overflow-x-auto pb-2">
          <div className="flex items-center gap-1.5 p-1.5 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm w-max min-w-full sm:min-w-0">
            {legalPolicies.map((pol) => {
              const isCurrent = pathname === pol.href
              const Icon = pol.icon
              const label =
                language === 'km'
                  ? pol.labelKm
                  : language === 'zh'
                  ? pol.labelZh
                  : language === 'ko'
                  ? pol.labelKo
                  : pol.label

              return (
                <Link
                  key={pol.href}
                  href={pol.href}
                  className={`px-3.5 py-2.5 min-h-[44px] rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-1.5 touch-press ${
                    isCurrent
                      ? 'bg-brand-red text-white shadow-brand-glow'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{label}</span>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Hero Header Banner (14px radius) */}
        <div className="mb-8 p-6 sm:p-10 md:p-12 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brand-red/10 text-brand-red text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 border border-brand-red/20">
                <ShieldCheck className="w-3.5 h-3.5" /> {subtitle}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-zinc-900 dark:text-white leading-tight">
                {title}
              </h1>
              <div className="flex items-center gap-2 text-zinc-500 text-xs mt-2 font-mono">
                <span>Last Revised:</span>
                <span className="font-bold text-zinc-800 dark:text-zinc-200 px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                  {lastUpdated}
                </span>
                <span>•</span>
                <span>Phnom Penh, Cambodia</span>
              </div>
            </div>

            {/* Quick Actions (Print) */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                onClick={handlePrint}
                className="px-4 py-2.5 min-h-[44px] rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 touch-press cursor-pointer border border-zinc-200 dark:border-zinc-700"
              >
                <Printer className="w-3.5 h-3.5 text-zinc-500" /> Print Document
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start relative">
          {/* Sidebar Navigation */}
          <aside className="lg:w-72 shrink-0 lg:sticky lg:top-28 w-full space-y-4">
            {/* Desktop TOC (14px radius) */}
            <div className="hidden lg:block p-5 rounded-[14px] bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-zinc-200 dark:border-zinc-800">
                <span className="font-bold uppercase tracking-widest text-xs text-zinc-400">
                  Navigation Index
                </span>
                <span className="text-[10px] font-mono text-zinc-400">Jump To Section</span>
              </div>
              <nav className="space-y-1">{sidebar}</nav>
            </div>

            {/* Mobile Collapsible TOC (14px radius) */}
            <div className="lg:hidden w-full border border-zinc-200 dark:border-zinc-800 rounded-[14px] bg-white dark:bg-zinc-900/60 shadow-sm overflow-hidden">
              <button
                onClick={() => setIsTocOpen(!isTocOpen)}
                className="w-full flex items-center justify-between p-4 text-left font-bold text-xs text-zinc-900 dark:text-white uppercase tracking-wider cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-brand-red" />
                  Table of Contents
                </span>
                {isTocOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {isTocOpen && (
                <nav className="p-4 pt-0 border-t border-zinc-200 dark:border-zinc-800 space-y-1">
                  {sidebar}
                </nav>
              )}
            </div>

            {/* Governance Contact Card */}
            <div className="p-5 rounded-[14px] bg-zinc-900 text-white border border-zinc-800 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red block">
                Compliance &amp; Ethics Desk
              </span>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Have questions regarding safeguarding, anti-doping, or equal access at Infinity TKD?
              </p>
              <a
                href="mailto:compliance@infinitytkd.com"
                className="text-xs font-bold text-brand-red hover:underline block truncate"
              >
                compliance@infinitytkd.com
              </a>
            </div>
          </aside>

          {/* Legal Article Body */}
          <main className="flex-1 w-full min-w-0">
            <article className="legal-article p-6 sm:p-10 md:p-12 rounded-[14px] bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-8 text-zinc-700 dark:text-zinc-300 font-light text-xs sm:text-sm leading-relaxed">
              {children}
            </article>
          </main>
        </div>
      </div>
    </div>
  )
}
