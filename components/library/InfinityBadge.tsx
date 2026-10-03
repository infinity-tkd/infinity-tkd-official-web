'use client'

import * as React from 'react'
import type { DifficultyLevel } from '@/data/library'
import { Sparkles, Shield, Flame, Zap, Award, Compass } from 'lucide-react'

interface InfinityDifficultyBadgeProps {
  difficulty: DifficultyLevel
  beltLevel?: string
  size?: 'sm' | 'md' | 'lg'
  showSubtitle?: boolean
  className?: string
}

export function InfinityDifficultyBadge({
  difficulty,
  beltLevel,
  size = 'md',
  showSubtitle = false,
  className = '',
}: InfinityDifficultyBadgeProps) {
  // Size configurations
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[9px] gap-1',
    md: 'px-3 py-1 text-[10px] gap-1.5',
    lg: 'px-4 py-1.5 text-xs gap-2',
  }

  const iconSizes = {
    sm: 'w-2.5 h-2.5',
    md: 'w-3 h-3',
    lg: 'w-3.5 h-3.5',
  }

  // Unique Theme Styling per Difficulty Tier
  switch (difficulty) {
    case 'Beginner':
      return (
        <div
          className={`inline-flex items-center font-mono font-black uppercase tracking-wider rounded-xl border shadow-sm backdrop-blur-md transition-all ${
            sizeClasses[size]
          } bg-gradient-to-r from-emerald-950/80 via-zinc-900/90 to-emerald-950/80 text-emerald-400 border-emerald-500/40 hover:border-emerald-400 hover:shadow-[0_0_12px_rgba(16,185,129,0.3)] ${className}`}
        >
          {/* Dual mini belt pip (White & Green) */}
          <div className="flex items-center gap-0.5 shrink-0">
            <span className="w-1.5 h-3 rounded-sm bg-white shadow-[0_0_4px_white]" />
            <span className="w-1.5 h-3 rounded-sm bg-emerald-500 shadow-[0_0_4px_rgba(16,185,129,0.8)]" />
          </div>

          <Shield className={`${iconSizes[size]} text-emerald-400 shrink-0`} />

          <span>Beginner (White–Green)</span>

          {showSubtitle && (
            <span className="text-[9px] font-normal text-emerald-500/80 lowercase pl-1 border-l border-emerald-500/30">
              {beltLevel || 'foundation'}
            </span>
          )}
        </div>
      )

    case 'Intermediate':
      return (
        <div
          className={`inline-flex items-center font-mono font-black uppercase tracking-wider rounded-xl border shadow-sm backdrop-blur-md transition-all ${
            sizeClasses[size]
          } bg-gradient-to-r from-blue-950/80 via-zinc-900/90 to-red-950/80 text-blue-400 border-blue-500/40 hover:border-blue-400 hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] ${className}`}
        >
          {/* Dual mini belt pip (Blue & Red) */}
          <div className="flex items-center gap-0.5 shrink-0">
            <span className="w-1.5 h-3 rounded-sm bg-blue-500 shadow-[0_0_4px_rgba(59,130,246,0.8)]" />
            <span className="w-1.5 h-3 rounded-sm bg-brand-red shadow-[0_0_4px_rgba(239,47,56,0.8)]" />
          </div>

          <Zap className={`${iconSizes[size]} text-blue-400 shrink-0`} />

          <span>Intermediate (Blue–Red)</span>

          {showSubtitle && (
            <span className="text-[9px] font-normal text-blue-300/80 lowercase pl-1 border-l border-blue-500/30">
              {beltLevel || 'power & control'}
            </span>
          )}
        </div>
      )

    case 'Advanced':
      return (
        <div
          className={`inline-flex items-center font-mono font-black uppercase tracking-wider rounded-xl border shadow-md backdrop-blur-md transition-all ${
            sizeClasses[size]
          } bg-gradient-to-r from-black via-zinc-900 to-black text-white border-brand-red/60 hover:border-brand-red hover:shadow-[0_0_15px_rgba(239,47,56,0.4)] ${className}`}
        >
          {/* Black Belt Gold Stripe Pip */}
          <div className="flex items-center gap-0.5 shrink-0">
            <span className="w-2 h-3.5 rounded-sm bg-zinc-950 border border-amber-400/80 flex items-center justify-center">
              <span className="w-1 h-0.5 bg-amber-400 rounded-full" />
            </span>
          </div>

          <Flame className={`${iconSizes[size]} text-brand-red shrink-0 animate-pulse`} />

          <span className="text-zinc-100">
            Advanced <span className="text-brand-red">(Black Belt)</span>
          </span>

          {showSubtitle && (
            <span className="text-[9px] font-normal text-zinc-400 lowercase pl-1 border-l border-zinc-700">
              {beltLevel || 'dan rank'}
            </span>
          )}
        </div>
      )

    case 'Elite':
      return (
        <div
          className={`inline-flex items-center font-mono font-black uppercase tracking-wider rounded-xl border shadow-lg backdrop-blur-md transition-all relative overflow-hidden group ${
            sizeClasses[size]
          } bg-gradient-to-r from-purple-950 via-zinc-900 to-red-950 text-purple-300 border-purple-500/50 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] ${className}`}
        >
          {/* Shimmer animation line */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

          {/* Infinity TKD Demo Team Emblem */}
          <div className="flex items-center gap-0.5 shrink-0">
            <span className="w-2 h-3.5 rounded-sm bg-purple-600 shadow-[0_0_6px_rgba(168,85,247,0.9)] flex items-center justify-center text-[7px] text-white font-black">
              ∞
            </span>
          </div>

          <Sparkles className={`${iconSizes[size]} text-amber-400 shrink-0 animate-spin-slow`} />

          <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-amber-300 bg-clip-text text-transparent">
            Elite / Demo Team
          </span>

          {showSubtitle && (
            <span className="text-[9px] font-normal text-purple-300/80 lowercase pl-1 border-l border-purple-500/30">
              {beltLevel || 'high acrobatics'}
            </span>
          )}
        </div>
      )
  }
}

// ==============================================================================
// DISCIPLINE CATEGORY UNIQUE BADGE
// ==============================================================================
interface InfinityCategoryBadgeProps {
  category: string
  className?: string
}

export function InfinityCategoryBadge({ category, className = '' }: InfinityCategoryBadgeProps) {
  switch (category) {
    case 'poomsae':
      return (
        <span className={`px-2.5 py-1 rounded-xl text-[9px] font-mono font-bold uppercase tracking-wider bg-brand-red/10 text-brand-red border border-brand-red/30 flex items-center gap-1 ${className}`}>
          <Compass className="w-2.5 h-2.5" /> Poomsae (Forms)
        </span>
      )
    case 'kicking-fundamentals':
      return (
        <span className={`px-2.5 py-1 rounded-xl text-[9px] font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1 ${className}`}>
          <Zap className="w-2.5 h-2.5" /> Fundamental Kicks
        </span>
      )
    case 'kicking-advanced':
      return (
        <span className={`px-2.5 py-1 rounded-xl text-[9px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1 ${className}`}>
          <Flame className="w-2.5 h-2.5" /> Advanced 540 Kicks
        </span>
      )
    case 'hand-techniques':
      return (
        <span className={`px-2.5 py-1 rounded-xl text-[9px] font-mono font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/30 flex items-center gap-1 ${className}`}>
          <Shield className="w-2.5 h-2.5" /> Hand Techniques
        </span>
      )
    case 'stances':
      return (
        <span className={`px-2.5 py-1 rounded-xl text-[9px] font-mono font-bold uppercase tracking-wider bg-amber-800/20 text-amber-300 border border-amber-700/30 flex items-center gap-1 ${className}`}>
          <Award className="w-2.5 h-2.5" /> Stances (Seogi)
        </span>
      )
    case 'tricking-acrobatics':
      return (
        <span className={`px-2.5 py-1 rounded-xl text-[9px] font-mono font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/30 flex items-center gap-1 ${className}`}>
          <Sparkles className="w-2.5 h-2.5" /> Tricking &amp; Acrobatics
        </span>
      )
    default:
      return (
        <span className={`px-2.5 py-1 rounded-xl text-[9px] font-mono font-bold uppercase tracking-wider bg-zinc-800 text-zinc-300 border border-zinc-700 ${className}`}>
          {category}
        </span>
      )
  }
}
