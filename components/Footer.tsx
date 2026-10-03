'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  ShieldCheck,
  Zap,
  Heart,
  Scale,
  Shield,
} from 'lucide-react'
import { InfinityLogo } from './InfinityLogo'
import { siteSettings } from '@/config/siteSettings'

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
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-900 pt-16 pb-24 lg:pb-12 font-sans transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* MAIN MINIMALIST GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-zinc-200/80 dark:border-zinc-900">
          
          {/* Brand Identity & Social Channels (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block group" aria-label="Infinity Taekwondo Home">
              <InfinityLogo
                variant="full"
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              World Taekwondo Olympic syllabus, sports biomechanics, and martial leadership in Phnom Penh, Cambodia.
            </p>

            {/* Minimalist Social Icon Links */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={siteSettings.socials[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-white hover:bg-brand-red dark:hover:bg-brand-red transition-colors flex items-center justify-center touch-press cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteSettings.socials[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-white hover:bg-brand-red dark:hover:bg-brand-red transition-colors flex items-center justify-center touch-press cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteSettings.socials[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-white hover:bg-brand-red dark:hover:bg-brand-red transition-colors flex items-center justify-center touch-press cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={siteSettings.socials[3].url}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-white hover:bg-brand-red dark:hover:bg-brand-red transition-colors flex items-center justify-center touch-press cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteSettings.socials[4].url}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-white hover:bg-brand-red dark:hover:bg-brand-red transition-colors flex items-center justify-center touch-press cursor-pointer"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 1. Academy (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 dark:text-white block">
              Academy
            </span>
            <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
              <li>
                <Link href="/academy" className="hover:text-brand-red dark:hover:text-white transition-colors block py-0.5">
                  Syllabus
                </Link>
              </li>
              <li>
                <Link href="/library" className="hover:text-brand-red dark:hover:text-white transition-colors block py-0.5">
                  Library Hub
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-brand-red dark:hover:text-white transition-colors block py-0.5">
                  Coaches &amp; Athletes
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-brand-red dark:hover:text-white transition-colors block py-0.5">
                  Memberships
                </Link>
              </li>
            </ul>
          </div>

          {/* 2. Organization (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 dark:text-white block">
              Organization
            </span>
            <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
              <li>
                <Link href="/about" className="hover:text-brand-red dark:hover:text-white transition-colors block py-0.5">
                  About &amp; Story
                </Link>
              </li>
              <li>
                <Link href="/collaborations" className="hover:text-brand-red dark:hover:text-white transition-colors block py-0.5 font-medium text-zinc-900 dark:text-zinc-200">
                  Collaborations
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-brand-red dark:hover:text-white transition-colors block py-0.5">
                  Dojang Branches
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-brand-red dark:hover:text-white transition-colors block py-0.5">
                  Achievements
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Governance & Ethics (3 cols - PRESERVED & CLEAN) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 dark:text-white block">
              Governance &amp; Ethics
            </span>
            <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
              <li>
                <Link
                  href="/safeguarding"
                  className="hover:text-brand-red dark:hover:text-white transition-colors flex items-center gap-1.5 py-0.5 font-medium text-zinc-900 dark:text-zinc-200"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  Safeguarding &amp; Safe Sport
                </Link>
              </li>
              <li>
                <Link
                  href="/anti-doping"
                  className="hover:text-brand-red dark:hover:text-white transition-colors flex items-center gap-1.5 py-0.5 font-medium text-zinc-900 dark:text-zinc-200"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  Anti-Doping &amp; Clean Sport
                </Link>
              </li>
              <li>
                <Link
                  href="/equality"
                  className="hover:text-brand-red dark:hover:text-white transition-colors flex items-center gap-1.5 py-0.5 font-medium text-zinc-900 dark:text-zinc-200"
                >
                  <Heart className="w-3.5 h-3.5 text-brand-red shrink-0" />
                  Equality &amp; Diversity
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-brand-red dark:hover:text-white transition-colors flex items-center gap-1.5 py-0.5"
                >
                  <Shield className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-brand-red dark:hover:text-white transition-colors flex items-center gap-1.5 py-0.5"
                >
                  <Scale className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* MINIMALIST BOTTOM BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 dark:text-zinc-400 font-light">
          <p>© {new Date().getFullYear()} Infinity Taekwondo. All rights reserved.</p>
          <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-600 dark:text-zinc-400">
            <span>Kukkiwon Dan Certified</span>
            <span>&bull;</span>
            <span>World Taekwondo Standard</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
