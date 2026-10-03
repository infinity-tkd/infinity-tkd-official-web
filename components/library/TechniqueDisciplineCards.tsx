'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  BookOpen,
  Zap,
  Flame,
  Shield,
  Layers,
  Sparkles,
  ExternalLink,
  Award,
  ShieldCheck,
  Scale,
  Calendar,
} from 'lucide-react'
import type { LibraryItem } from '@/data/library'
import { SafeImage } from '@/components/SafeImage'
import { Card3D } from '@/components/ui/Card3D'

interface DisciplineCardProps {
  item: LibraryItem
  onSelect: (item: LibraryItem) => void
}

// ==============================================================================
// 1. POOMSAE (FORMS) CLEAN CARD (NO BADGES)
// ==============================================================================
export function PoomsaeCard({ item, onSelect }: DisciplineCardProps) {
  return (
    <Card3D maxTilt={6} scale={1.02} className="h-full">
      <div
        onClick={() => onSelect(item)}
        className="h-full group relative p-3.5 sm:p-4 rounded-[14px] bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 hover:border-brand-red/60 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-xl hover:shadow-brand-red/10 overflow-hidden touch-press"
      >
        <div>
          <div className="relative h-32 sm:h-36 rounded-xl overflow-hidden mb-3 border border-zinc-100 dark:border-zinc-800 shadow-inner">
            <SafeImage
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white z-10">
              <span className="text-[9px] font-mono text-brand-red font-bold block">
                {item.koreanName}
              </span>
              <h3 className="text-sm sm:text-base font-black uppercase tracking-tight truncate">
                {item.name}
              </h3>
            </div>
          </div>

          {item.meaning && (
            <p className="text-[11px] text-zinc-600 dark:text-zinc-300 font-light line-clamp-2 leading-relaxed mb-2.5">
              {item.meaning}
            </p>
          )}

          <div className="flex items-center justify-between text-[10px] mb-2 text-zinc-500">
            <span>{item.beltLevel}</span>
            <strong className="font-mono text-zinc-900 dark:text-zinc-200 font-bold">
              {item.totalMovements || 18} Steps
            </strong>
          </div>
        </div>

        <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-2 text-[10px] font-bold uppercase tracking-wider text-brand-red">
          <span className="flex items-center gap-1">
            <BookOpen className="w-3 h-3" /> Details
          </span>
          <Link
            href={`/library/${item.category}/${item.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 hover:bg-brand-red hover:text-white text-zinc-700 dark:text-zinc-300 flex items-center gap-1 transition-all touch-press"
          >
            View <ExternalLink className="w-2.5 h-2.5" />
          </Link>
        </div>
      </div>
    </Card3D>
  )
}

// ==============================================================================
// 2. STANCES (SEOGI) CLEAN CARD (NO BADGES)
// ==============================================================================
export function StanceCard({ item, onSelect }: DisciplineCardProps) {
  const rearPercent = item.weightDistribution?.includes('70%')
    ? 70
    : item.weightDistribution?.includes('90%')
    ? 90
    : item.weightDistribution?.includes('65%')
    ? 35
    : 50
  const frontPercent = 100 - rearPercent

  return (
    <Card3D maxTilt={6} scale={1.02} className="h-full">
      <div
        onClick={() => onSelect(item)}
        className="h-full group relative p-3.5 sm:p-4 rounded-[14px] bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/60 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-xl hover:shadow-amber-500/10 overflow-hidden touch-press"
      >
        <div>
          <div className="relative h-32 sm:h-36 rounded-xl overflow-hidden mb-3 border border-zinc-100 dark:border-zinc-800 shadow-inner">
            <SafeImage
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white z-10">
              <span className="text-[9px] font-mono text-amber-400 font-bold block">
                {item.koreanName}
              </span>
              <h3 className="text-sm sm:text-base font-black uppercase tracking-tight truncate">
                {item.name}
              </h3>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800/80 mb-2.5 space-y-1">
            <div className="flex justify-between text-[10px]">
              <span className="text-zinc-500">Weight Distribution</span>
              <span className="font-mono font-bold text-amber-500">
                {frontPercent}% / {rearPercent}%
              </span>
            </div>
            <div className="w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full flex overflow-hidden">
              <div className="bg-amber-400 h-full" style={{ width: `${frontPercent}%` }} />
              <div className="bg-amber-600 h-full" style={{ width: `${rearPercent}%` }} />
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-2 text-[10px] font-bold uppercase tracking-wider text-amber-500">
          <span className="flex items-center gap-1">
            <Layers className="w-3 h-3" /> Details
          </span>
          <Link
            href={`/library/${item.category}/${item.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 hover:bg-amber-500 hover:text-white text-zinc-700 dark:text-zinc-300 flex items-center gap-1 transition-all touch-press"
          >
            View <ExternalLink className="w-2.5 h-2.5" />
          </Link>
        </div>
      </div>
    </Card3D>
  )
}

// ==============================================================================
// 3. KICKING CLEAN CARD (NO BADGES)
// ==============================================================================
export function KickingCard({ item, onSelect }: DisciplineCardProps) {
  return (
    <Card3D maxTilt={6} scale={1.02} className="h-full">
      <div
        onClick={() => onSelect(item)}
        className="h-full group relative p-3.5 sm:p-4 rounded-[14px] bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/60 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 overflow-hidden touch-press"
      >
        <div>
          <div className="relative h-32 sm:h-36 rounded-xl overflow-hidden mb-3 border border-zinc-100 dark:border-zinc-800 shadow-inner">
            <SafeImage
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white z-10">
              <span className="text-[9px] font-mono text-emerald-400 font-bold block">
                {item.koreanName}
              </span>
              <h3 className="text-sm sm:text-base font-black uppercase tracking-tight truncate">
                {item.name}
              </h3>
            </div>
          </div>

          {item.strikingSurface && (
            <div className="text-[10px] text-zinc-500 dark:text-zinc-400 mb-2 truncate">
              <span className="text-zinc-400">Impact: </span>
              <strong className="text-zinc-800 dark:text-zinc-200 font-medium">
                {item.strikingSurface}
              </strong>
            </div>
          )}
        </div>

        <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-2 text-[10px] font-bold uppercase tracking-wider text-emerald-500">
          <span className="flex items-center gap-1">
            <Zap className="w-3 h-3" /> Details
          </span>
          <Link
            href={`/library/${item.category}/${item.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 hover:bg-emerald-500 hover:text-white text-zinc-700 dark:text-zinc-300 flex items-center gap-1 transition-all touch-press"
          >
            View <ExternalLink className="w-2.5 h-2.5" />
          </Link>
        </div>
      </div>
    </Card3D>
  )
}

// ==============================================================================
// 4. HAND TECHNIQUES CLEAN CARD (NO BADGES)
// ==============================================================================
export function HandCard({ item, onSelect }: DisciplineCardProps) {
  return (
    <Card3D maxTilt={6} scale={1.02} className="h-full">
      <div
        onClick={() => onSelect(item)}
        className="h-full group relative p-3.5 sm:p-4 rounded-[14px] bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/60 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden touch-press"
      >
        <div>
          <div className="relative h-32 sm:h-36 rounded-xl overflow-hidden mb-3 border border-zinc-100 dark:border-zinc-800 shadow-inner">
            <SafeImage
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white z-10">
              <span className="text-[9px] font-mono text-blue-400 font-bold block">
                {item.koreanName}
              </span>
              <h3 className="text-sm sm:text-base font-black uppercase tracking-tight truncate">
                {item.name}
              </h3>
            </div>
          </div>

          {item.targetArea && (
            <div className="text-[10px] text-zinc-500 dark:text-zinc-400 mb-2 truncate">
              <span className="text-zinc-400">Target: </span>
              <strong className="text-zinc-800 dark:text-zinc-200 font-medium">
                {item.targetArea}
              </strong>
            </div>
          )}
        </div>

        <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-2 text-[10px] font-bold uppercase tracking-wider text-blue-500">
          <span className="flex items-center gap-1">
            <Shield className="w-3 h-3" /> Details
          </span>
          <Link
            href={`/library/${item.category}/${item.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 hover:bg-blue-500 hover:text-white text-zinc-700 dark:text-zinc-300 flex items-center gap-1 transition-all touch-press"
          >
            View <ExternalLink className="w-2.5 h-2.5" />
          </Link>
        </div>
      </div>
    </Card3D>
  )
}

// ==============================================================================
// 5. TRICKING & ACROBATICS CLEAN CARD (NO BADGES)
// ==============================================================================
export function AcrobaticCard({ item, onSelect }: DisciplineCardProps) {
  return (
    <Card3D maxTilt={6} scale={1.02} className="h-full">
      <div
        onClick={() => onSelect(item)}
        className="h-full group relative p-3.5 sm:p-4 rounded-[14px] bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/60 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-xl hover:shadow-purple-500/10 overflow-hidden touch-press"
      >
        <div>
          <div className="relative h-32 sm:h-36 rounded-xl overflow-hidden mb-3 border border-zinc-100 dark:border-zinc-800 shadow-inner">
            <SafeImage
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white z-10">
              <span className="text-[9px] font-mono text-purple-400 font-bold block">
                {item.koreanName}
              </span>
              <h3 className="text-sm sm:text-base font-black uppercase tracking-tight truncate">
                {item.name}
              </h3>
            </div>
          </div>

          <p className="text-[11px] text-zinc-600 dark:text-zinc-300 font-light line-clamp-2 leading-relaxed mb-2">
            {item.summary}
          </p>
        </div>

        <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-2 text-[10px] font-bold uppercase tracking-wider text-purple-500">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Details
          </span>
          <Link
            href={`/library/${item.category}/${item.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 hover:bg-purple-500 hover:text-white text-zinc-700 dark:text-zinc-300 flex items-center gap-1 transition-all touch-press"
          >
            View <ExternalLink className="w-2.5 h-2.5" />
          </Link>
        </div>
      </div>
    </Card3D>
  )
}

// ==============================================================================
// 6. HISTORY & HERITAGE CLEAN CARD (NO BADGES)
// ==============================================================================
export function HistoryCard({ item, onSelect }: DisciplineCardProps) {
  return (
    <Card3D maxTilt={6} scale={1.02} className="h-full">
      <div
        onClick={() => onSelect(item)}
        className="h-full group relative p-3.5 sm:p-4 rounded-[14px] bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 hover:border-red-500/60 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-xl hover:shadow-red-500/10 overflow-hidden touch-press"
      >
        <div>
          <div className="relative h-32 sm:h-36 rounded-xl overflow-hidden mb-3 border border-zinc-100 dark:border-zinc-800 shadow-inner">
            <SafeImage
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white z-10">
              <span className="text-[9px] font-mono text-red-400 font-bold block">
                {item.koreanName}
              </span>
              <h3 className="text-sm sm:text-base font-black uppercase tracking-tight truncate">
                {item.name}
              </h3>
            </div>
          </div>

          <p className="text-[11px] text-zinc-600 dark:text-zinc-300 font-light line-clamp-2 leading-relaxed mb-2">
            {item.summary}
          </p>
        </div>

        <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-2 text-[10px] font-bold uppercase tracking-wider text-brand-red">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" /> Heritage
          </span>
          <Link
            href={`/library/${item.category}/${item.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 hover:bg-brand-red hover:text-white text-zinc-700 dark:text-zinc-300 flex items-center gap-1 transition-all touch-press"
          >
            View <ExternalLink className="w-2.5 h-2.5" />
          </Link>
        </div>
      </div>
    </Card3D>
  )
}

// ==============================================================================
// 7. COMPETITION RULES CLEAN CARD (NO BADGES)
// ==============================================================================
export function RuleCard({ item, onSelect }: DisciplineCardProps) {
  return (
    <Card3D maxTilt={6} scale={1.02} className="h-full">
      <div
        onClick={() => onSelect(item)}
        className="h-full group relative p-3.5 sm:p-4 rounded-[14px] bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/60 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden touch-press"
      >
        <div>
          <div className="relative h-32 sm:h-36 rounded-xl overflow-hidden mb-3 border border-zinc-100 dark:border-zinc-800 shadow-inner">
            <SafeImage
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white z-10">
              <span className="text-[9px] font-mono text-blue-400 font-bold block">
                {item.koreanName}
              </span>
              <h3 className="text-sm sm:text-base font-black uppercase tracking-tight truncate">
                {item.name}
              </h3>
            </div>
          </div>

          <p className="text-[11px] text-zinc-600 dark:text-zinc-300 font-light line-clamp-2 leading-relaxed mb-2">
            {item.summary}
          </p>
        </div>

        <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-2 text-[10px] font-bold uppercase tracking-wider text-blue-500">
          <span className="flex items-center gap-1">
            <Scale className="w-3 h-3" /> Rulebook
          </span>
          <Link
            href={`/library/${item.category}/${item.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 hover:bg-blue-500 hover:text-white text-zinc-700 dark:text-zinc-300 flex items-center gap-1 transition-all touch-press"
          >
            View <ExternalLink className="w-2.5 h-2.5" />
          </Link>
        </div>
      </div>
    </Card3D>
  )
}

// ==============================================================================
// 8. HOSINSUL (SELF-DEFENSE) CLEAN CARD (NO BADGES)
// ==============================================================================
export function HosinsulCard({ item, onSelect }: DisciplineCardProps) {
  return (
    <Card3D maxTilt={6} scale={1.02} className="h-full">
      <div
        onClick={() => onSelect(item)}
        className="h-full group relative p-3.5 sm:p-4 rounded-[14px] bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/60 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 overflow-hidden touch-press"
      >
        <div>
          <div className="relative h-32 sm:h-36 rounded-xl overflow-hidden mb-3 border border-zinc-100 dark:border-zinc-800 shadow-inner">
            <SafeImage
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white z-10">
              <span className="text-[9px] font-mono text-emerald-400 font-bold block">
                {item.koreanName}
              </span>
              <h3 className="text-sm sm:text-base font-black uppercase tracking-tight truncate">
                {item.name}
              </h3>
            </div>
          </div>

          <p className="text-[11px] text-zinc-600 dark:text-zinc-300 font-light line-clamp-2 leading-relaxed mb-2">
            {item.summary}
          </p>
        </div>

        <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-2 text-[10px] font-bold uppercase tracking-wider text-emerald-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" /> Self-Defense
          </span>
          <Link
            href={`/library/${item.category}/${item.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 hover:bg-emerald-500 hover:text-white text-zinc-700 dark:text-zinc-300 flex items-center gap-1 transition-all touch-press"
          >
            View <ExternalLink className="w-2.5 h-2.5" />
          </Link>
        </div>
      </div>
    </Card3D>
  )
}
