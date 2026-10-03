import * as React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { CollaborationShowcase } from '@/components/collaborations/CollaborationShowcase'
import {
  Shield,
  GraduationCap,
  Award,
  HeartHandshake,
  ArrowRight,
  Sparkles,
  Globe,
  Building2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Institutional Collaborations & Global Alliances | Infinity Taekwondo',
  description:
    'Explore Infinity Taekwondo’s global partnerships with World Taekwondo (WT), Kukkiwon World Headquarters, national federations, sport universities, and athletic equipment innovators.',
}

export default function CollaborationsPage() {
  return (
    <div className="bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white min-h-screen pt-20 sm:pt-24 pb-20 font-sans selection:bg-brand-red selection:text-white transition-colors duration-500 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* ------------------------------------------------------------------ */}
        {/* HERO SECTION (14px radius) */}
        {/* ------------------------------------------------------------------ */}
        <div className="p-8 sm:p-12 md:p-16 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider bg-brand-red/10 text-brand-red border border-brand-red/20">
                Institutional Ecosystem
              </span>
              <span className="text-zinc-400">&bull;</span>
              <span className="text-[10px] font-mono text-zinc-500">Global Alliances &amp; Governance</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-zinc-900 dark:text-white mb-4">
              Strategic Collaborations &amp; Global Alliances
            </h1>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-light leading-relaxed mb-6">
              Infinity Taekwondo partners with Olympic governing bodies, certified master academies, universities, and performance equipment innovators to ensure world-class martial education, international certification, and competitive athlete pathways.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <div>
                <span className="text-zinc-400 block text-[10px]">Governing Body</span>
                <strong className="text-brand-red text-sm font-black">World Taekwondo</strong>
              </div>
              <div>
                <span className="text-zinc-400 block text-[10px]">Dan Certification</span>
                <strong className="text-zinc-900 dark:text-white text-sm font-black">100% Kukkiwon</strong>
              </div>
              <div>
                <span className="text-zinc-400 block text-[10px]">PSS Technology</span>
                <strong className="text-zinc-900 dark:text-white text-sm font-black">Daedo Gen-2</strong>
              </div>
              <div>
                <span className="text-zinc-400 block text-[10px]">Community Reach</span>
                <strong className="text-emerald-500 text-sm font-black">250+ Youths/Yr</strong>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* INTERACTIVE COLLABORATIONS SHOWCASE & MODAL */}
        {/* ------------------------------------------------------------------ */}
        <CollaborationShowcase />

        {/* ------------------------------------------------------------------ */}
        {/* PARTNER LEAD GENERATION CTA (14px radius) */}
        {/* ------------------------------------------------------------------ */}
        <div className="mt-16 p-8 sm:p-12 rounded-[14px] bg-zinc-900 text-white border border-brand-red/40 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red block">
              Institutional Synergy
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
              Partner With Infinity Taekwondo
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              We collaborate with international schools, sports academies, universities, corporate wellness programs, and philanthropic foundations. Inquire about creating a custom program.
            </p>
          </div>

          <Link
            href="/contact?subject=New%20Institutional%20Partnership%20Proposal"
            className="px-8 py-4 rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-brand-glow whitespace-nowrap inline-flex items-center gap-2 touch-press"
          >
            Submit Partnership Proposal <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
