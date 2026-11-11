'use client'

import * as React from 'react'
import { INFINITY_SYMBOL } from '@/components/InfinityLogo'
import { cn } from '@/lib/utils'

/** Outline length of each logo path in viewBox units (SVG getTotalLength), so each draws exactly once. */
const LENGTHS = { left: 831.8, knot: 159.3, right: 831.9 } as const
/** Length of the travelling highlight, in the same units (about 8% of a loop). */
const GLINT = 64

type Part = keyof typeof LENGTHS

/** Draw order: the left loop, the right loop a beat later, then the knot ties them together. */
const PARTS: { part: Part; delay: string }[] = [
  { part: 'left', delay: '0.15s' },
  { part: 'right', delay: '0.35s' },
  { part: 'knot', delay: '1.1s' },
]

const lineStyle = (part: Part, delay: string) =>
  ({ '--len': LENGTHS[part], '--travel': -LENGTHS[part], '--delay': delay }) as React.CSSProperties

interface InfinityMotionProps {
  /**
   * hero: the belt draws itself into the Infinity loop, fills with Infinity Red, then a soft
   * highlight keeps travelling along it. loader: the outline draws and clears on a loop.
   */
  variant?: 'hero' | 'loader'
  /** Accessible name. Leave it out when the mark is decorative. */
  label?: string
  className?: string
}

/**
 * The Infinity Taekwondo belt-loop mark in motion. SVG and CSS only (styles in globals.css), using
 * the logo's own path data. Respects prefers-reduced-motion (shows the finished mark) and pauses
 * its endless highlight while it is off-screen.
 */
export function InfinityMotion({ variant = 'hero', label, className }: InfinityMotionProps) {
  const ref = React.useRef<SVGSVGElement>(null)

  React.useEffect(() => {
    const svg = ref.current
    if (!svg || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(([entry]) => {
      svg.toggleAttribute('data-paused', !entry.isIntersecting)
    })
    observer.observe(svg)
    return () => observer.disconnect()
  }, [])

  return (
    <svg
      ref={ref}
      viewBox={INFINITY_SYMBOL.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={cn('infinity-motion', variant === 'loader' && 'is-loader', className)}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      {variant === 'hero' && (
        <g className="im-fill">
          {PARTS.map(({ part }) => (
            <path key={part} d={INFINITY_SYMBOL[part]} />
          ))}
        </g>
      )}
      {PARTS.map(({ part, delay }) => (
        <path key={part} className="im-line" d={INFINITY_SYMBOL[part]} style={lineStyle(part, delay)} />
      ))}
      {variant === 'hero' &&
        (['left', 'right'] as const).map((part) => (
          <path
            key={`glint-${part}`}
            className={cn('im-glint', part === 'right' && 'is-reverse')}
            d={INFINITY_SYMBOL[part]}
            style={{ ...lineStyle(part, '0s'), strokeDasharray: `${GLINT} ${LENGTHS[part] - GLINT}` }}
          />
        ))}
    </svg>
  )
}
