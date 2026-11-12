'use client'

import * as React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, MessageCircle, Rss, Send, Youtube } from 'lucide-react'
import { InfinityLogo } from './InfinityLogo'
import { siteSettings } from '@/config/siteSettings'
import { FOOTER_COLUMNS, MESSAGING_LINKS, prefetchFor } from '@/config/navigation'
import { useLanguage } from '@/context/LanguageContext'
import { cn } from '@/lib/utils'

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

/** Icons are matched by platform NAME, so reordering `siteSettings.socials` can never mislabel a link. */
const SOCIAL_ICONS: Record<string, React.ElementType> = {
  Instagram,
  Facebook,
  YouTube: Youtube,
  LinkedIn: Linkedin,
  TikTok: TikTokIcon,
}

const iconLinkClass =
  'flex h-11 w-11 min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 transition-colors hover:bg-brand-red hover:text-white touch-press'

export function Footer() {
  const { t } = useLanguage()

  const channels = [
    { label: 'WhatsApp', href: MESSAGING_LINKS.whatsapp, icon: MessageCircle },
    { label: 'Telegram', href: MESSAGING_LINKS.telegram, icon: Send },
    ...siteSettings.socials
      .filter((social) => SOCIAL_ICONS[social.platform])
      .map((social) => ({ label: social.platform, href: social.url, icon: SOCIAL_ICONS[social.platform] })),
  ]

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-900 bg-white dark:bg-black pb-24 pt-16 font-sans transition-colors duration-300 lg:pb-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 border-b border-zinc-200/80 dark:border-zinc-900 pb-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Brand + channels */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-4">
            <Link href="/" className="group inline-block" aria-label="Infinity Taekwondo Home">
              <InfinityLogo
                variant="full"
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            <p className="max-w-sm text-xs font-light leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-sm">
              {t.footer.tagline}
            </p>

            <ul className="flex flex-wrap items-center gap-2 pt-2">
              {channels.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className={iconLinkClass} aria-label={label}>
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
              <li>
                <a href="/blog/feed.xml" className={iconLinkClass} aria-label="Blog RSS feed">
                  <Rss className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div
              key={column.title(t)}
              className={cn('space-y-3', column.wide ? 'sm:col-span-2 lg:col-span-3' : 'lg:col-span-2')}
            >
              <span className="block text-[11px] font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                {column.title(t)}
              </span>
              <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} prefetch={prefetchFor(link.href)} className="block py-1.5 transition-colors hover:text-brand-red dark:hover:text-white">
                      {link.label(t)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-8 text-xs font-light text-zinc-500 dark:text-zinc-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Infinity Taekwondo. {t.footer.copyright}
          </p>
          <p className="flex items-center gap-2 font-mono text-[11px] text-zinc-600 dark:text-zinc-400">
            <span>Kukkiwon Dan Certified</span>
            <span aria-hidden="true">&bull;</span>
            <span>World Taekwondo Standard</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
