'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { LibraryItem } from '@/data/library'
import { SafeImage } from '@/components/SafeImage'
import { cn } from '@/lib/utils'

interface DisciplineCardProps {
  item: LibraryItem
  onSelect: (item: LibraryItem) => void
}

type Accent = 'red' | 'amber' | 'emerald' | 'blue' | 'purple'

// Full class strings (no interpolation) so Tailwind can see them.
const ACCENTS: Record<Accent, { hangul: string; link: string; hover: string }> = {
  red: {
    hangul: 'text-red-300',
    link: 'text-brand-red',
    hover: 'hover:border-brand-red/50',
  },
  amber: {
    hangul: 'text-amber-300',
    link: 'text-amber-600 dark:text-amber-400',
    hover: 'hover:border-amber-500/50',
  },
  emerald: {
    hangul: 'text-emerald-300',
    link: 'text-emerald-600 dark:text-emerald-400',
    hover: 'hover:border-emerald-500/50',
  },
  blue: {
    hangul: 'text-blue-300',
    link: 'text-blue-600 dark:text-blue-400',
    hover: 'hover:border-blue-500/50',
  },
  purple: {
    hangul: 'text-purple-300',
    link: 'text-purple-600 dark:text-purple-400',
    hover: 'hover:border-purple-500/50',
  },
}

interface ShellProps extends DisciplineCardProps {
  accent: Accent
  /** Short line under the image (description, key fact...). */
  children?: React.ReactNode
  /** Left side of the footer (belt level, read time...). */
  meta?: React.ReactNode
}

/**
 * Shared card shell for the curriculum encyclopedia grid.
 * The title <button> is the real (keyboard / screen-reader) control that opens the quick view; the
 * whole card also responds to mouse clicks for convenience. The footer link to the full page stops
 * propagation, so the two actions never collide and no interactive element is nested in another.
 */
function DisciplineCard({ item, onSelect, accent, children, meta }: ShellProps) {
  const a = ACCENTS[accent]

  return (
    <article
      onClick={() => onSelect(item)}
      className={cn(
        'group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70',
        'transition-[border-color,box-shadow,transform] duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-lg',
        a.hover
      )}
    >
      <div className="relative h-36 overflow-hidden bg-zinc-200 dark:bg-zinc-800">
        <SafeImage
          src={item.image}
          alt=""
          className="h-full w-full object-cover grayscale transition-[filter,transform] duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
        <div className="absolute inset-x-3.5 bottom-3 text-white sm:inset-x-4">
          <span className={cn('type-hangul block truncate', a.hangul)}>{item.koreanName}</span>
          <h3 className="truncate text-[15px] font-black uppercase leading-tight tracking-tight">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onSelect(item)
              }}
              aria-label={`Quick view: ${item.name}`}
              // Buttons don't inherit text-transform (Tailwind preflight resets it), so restate it.
              className="max-w-full min-h-[28px] truncate text-left uppercase focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
            >
              {item.name}
            </button>
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-3.5 sm:p-4">{children}</div>

      <div className="flex items-center justify-between gap-3 border-t border-zinc-100 px-3.5 py-2.5 dark:border-zinc-800 sm:px-4">
        <span className="type-meta truncate">{meta}</span>
        <Link
          href={`/library/${item.category}/${item.slug}`}
          onClick={(e) => e.stopPropagation()}
          className={cn(
            'inline-flex min-h-[32px] shrink-0 items-center gap-1 text-xs font-semibold transition-opacity hover:opacity-80',
            a.link
          )}
        >
          Open <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}

function Summary({ children }: { children?: React.ReactNode }) {
  if (!children) return null
  return <p className="type-body-sm line-clamp-2">{children}</p>
}

/** "Label: value" fact line used by kicking / hand cards. */
function Fact({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <p className="type-body-sm truncate">
      <span className="text-zinc-500 dark:text-zinc-500">{label} </span>
      <span className="font-medium text-zinc-800 dark:text-zinc-200">{value}</span>
    </p>
  )
}

export function PoomsaeCard(props: DisciplineCardProps) {
  const { item } = props
  return (
    <DisciplineCard {...props} accent="red" meta={`${item.totalMovements || 18} movements · ${item.beltLevel}`}>
      <Summary>{item.meaning || item.summary}</Summary>
    </DisciplineCard>
  )
}

export function StanceCard(props: DisciplineCardProps) {
  const { item } = props
  const rearPercent = item.weightDistribution?.includes('70%')
    ? 70
    : item.weightDistribution?.includes('90%')
      ? 90
      : item.weightDistribution?.includes('65%')
        ? 35
        : 50
  const frontPercent = 100 - rearPercent

  return (
    <DisciplineCard {...props} accent="amber" meta={item.beltLevel}>
      <div className="space-y-1.5">
        <div className="flex items-baseline justify-between">
          <span className="type-meta">Weight front / rear</span>
          <span className="text-xs font-semibold tabular-nums text-amber-600 dark:text-amber-400">
            {frontPercent}% / {rearPercent}%
          </span>
        </div>
        <div className="flex h-1 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800" aria-hidden="true">
          <div className="h-full bg-amber-400" style={{ width: `${frontPercent}%` }} />
          <div className="h-full bg-amber-600" style={{ width: `${rearPercent}%` }} />
        </div>
      </div>
    </DisciplineCard>
  )
}

export function KickingCard(props: DisciplineCardProps) {
  const { item } = props
  return (
    <DisciplineCard {...props} accent="emerald" meta={item.beltLevel}>
      <Fact label="Impact:" value={item.strikingSurface} />
    </DisciplineCard>
  )
}

export function HandCard(props: DisciplineCardProps) {
  const { item } = props
  return (
    <DisciplineCard {...props} accent="blue" meta={item.beltLevel}>
      <Fact label="Target:" value={item.targetArea} />
    </DisciplineCard>
  )
}

export function AcrobaticCard(props: DisciplineCardProps) {
  const { item } = props
  return (
    <DisciplineCard {...props} accent="purple" meta={item.difficulty}>
      <Summary>{item.summary}</Summary>
    </DisciplineCard>
  )
}

export function HistoryCard(props: DisciplineCardProps) {
  const { item } = props
  return (
    <DisciplineCard {...props} accent="red" meta={item.readTime ?? 'Heritage'}>
      <Summary>{item.summary}</Summary>
    </DisciplineCard>
  )
}

export function RuleCard(props: DisciplineCardProps) {
  const { item } = props
  return (
    <DisciplineCard {...props} accent="blue" meta={item.sourceName ?? 'Rulebook'}>
      <Summary>{item.summary}</Summary>
    </DisciplineCard>
  )
}

export function HosinsulCard(props: DisciplineCardProps) {
  const { item } = props
  return (
    <DisciplineCard {...props} accent="emerald" meta={item.beltLevel}>
      <Summary>{item.summary}</Summary>
    </DisciplineCard>
  )
}
