'use client'

import * as React from 'react'
import { INFINITY_SYMBOL } from '@/components/InfinityLogo'
import { cn } from '@/lib/utils'

/**
 * The belt's centre line, computed from the logo's own paths (viewBox units). The light runs along it as one
 * journey: from the bottom belt end up the band and round the left loop, out along the left tail, under the
 * band, through the knot, under the other band, round the right loop and up the band to the top belt end.
 */
const BELT = {
  left: {
    d: 'M314.37 413.03L186.73 323.7L180.52 319.99L175.04 317.44L169.63 315.64L163.68 314.5L160.83 314.36L157.36 314.57L153.44 315.16L149.44 316.12L146.37 317.11L142.73 318.63L139.3 320.46L136.09 322.58L133.11 325L130.88 327.14L128.29 330.1L126.41 332.63L124.34 335.98L122.59 339.51L121.42 342.43L120.27 346.2L119.59 349.28L119.07 353.18L118.91 357.11L119.11 361.05L119.52 364.11L120.37 367.93L121.3 370.93L122.75 374.58L124.5 378.11L126.55 381.48L128.9 384.66L130.99 387.04L133.88 389.76L136.34 391.68L139.66 393.77L142.49 395.19L145.43 396.36L148.44 397.28L151.51 397.96L155.38 398.49L159.27 398.67L163.15 398.53L166.87 398.1L169.6 397.51L179.1 394.53L191.8 389.58L227.91 373.17',
    length: 388.27,
  },
  knot: { d: 'M263.63 356.6L311.09 334.34', length: 52.42 },
  right: {
    d: 'M346.64 316.91L382.75 300.49L395.45 295.54L404.95 292.57L407.67 291.97L411.4 291.54L415.27 291.4L419.16 291.59L423.04 292.11L426.11 292.79L429.12 293.72L432.05 294.89L434.88 296.31L438.21 298.4L440.67 300.32L443.55 303.04L445.65 305.41L448 308.59L450.05 311.96L451.79 315.49L453.25 319.15L454.18 322.15L455.02 325.96L455.43 329.03L455.63 332.96L455.47 336.89L454.95 340.8L454.28 343.87L453.12 347.64L451.96 350.57L450.2 354.09L448.13 357.44L446.26 359.98L443.67 362.93L441.44 365.08L438.45 367.5L435.25 369.62L431.82 371.44L428.17 372.96L425.11 373.96L421.1 374.91L417.19 375.51L413.72 375.71L410.87 375.57L404.92 374.43L399.5 372.63L394.02 370.09L387.82 366.38L260.18 277.04',
    length: 388.27,
  },
  /** Where the strip passes under the left and the right band (hidden stretches of the journey). */
  under: [39.38, 39.6],
} as const

type Part = 'left' | 'knot' | 'right'

/** Where each part starts along the journey. */
const START: Record<Part, number> = {
  left: 0,
  knot: BELT.left.length + BELT.under[0],
  right: BELT.left.length + BELT.under[0] + BELT.knot.length + BELT.under[1],
}
const JOURNEY = START.right + BELT.right.length

/**
 * The light: stacked dashes that share one head, so it is brightest at the front and fades along its tail.
 * A soft blur (applied before the belt clip, so the belt's edges stay crisp) melts the steps into one gradient.
 */
const LIGHT = [
  { dash: 170, alpha: 0.1 },
  { dash: 110, alpha: 0.14 },
  { dash: 64, alpha: 0.22 },
  { dash: 28, alpha: 0.5 },
] as const
const TAIL = LIGHT[0].dash
/** One lap: the light's head travels the journey and its tail clears the far end, then the next one enters. */
const PERIOD = JOURNEY + TAIL
const CYCLE_S = 6.5
/** Each lap eases in and out: unhurried at the belt ends, fastest as it bursts through the knot. */
const EASE = [0.45, 0.05, 0.55, 0.95] as const

/** Time fraction of a lap at which the eased light has travelled `progress` of it. */
function lapTimeAt(progress: number) {
  const [x1, y1, x2, y2] = EASE
  const curve = (t: number, a: number, b: number) => 3 * (1 - t) ** 2 * t * a + 3 * (1 - t) * t ** 2 * b + t ** 3
  let lo = 0
  let hi = 1
  for (let i = 0; i < 32; i++) {
    const mid = (lo + hi) / 2
    if (curve(mid, y1, y2) < progress) lo = mid
    else hi = mid
  }
  return curve((lo + hi) / 2, x1, x2)
}

/** The knot flexes when the brightest part of the light is inside it (the pulse peaks halfway through its keyframes). */
const KNOT_PEAK = START.knot + BELT.knot.length / 2 + 14
const PULSE_SHIFT_S = lapTimeAt(KNOT_PEAK / PERIOD) * CYCLE_S - CYCLE_S / 2

const round = (n: number) => Math.round(n * 100) / 100
const vars = (v: Record<string, string | number>) => v as React.CSSProperties

const PARTS: Part[] = ['left', 'knot', 'right']

interface HeroLogoMotionProps {
  /** auto: plays unless the visitor prefers reduced motion. playing / paused: the visitor's own choice. */
  motion: 'auto' | 'playing' | 'paused'
  label: string
  className?: string
}

/**
 * The Infinity Taekwondo mark, alive: the belt ties itself into the Infinity loop (each end wraps into its
 * loop and the knot pulls them together), then a light keeps running through the belt, endlessly, and the knot
 * flexes each time it passes. SVG + CSS only (styles in globals.css), so it starts with the first paint.
 * Reduced motion shows the finished mark, still, until the visitor presses play.
 */
export function HeroLogoMotion({ motion, label, className }: HeroLogoMotionProps) {
  const ref = React.useRef<SVGSVGElement>(null)
  const uid = `hm${React.useId().replace(/[^a-zA-Z0-9]/g, '')}`

  // Hold the endless part while the mark is off-screen.
  React.useEffect(() => {
    const svg = ref.current
    if (!svg || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(([entry]) => {
      svg.toggleAttribute('data-offscreen', !entry.isIntersecting)
    })
    observer.observe(svg)
    return () => observer.disconnect()
  }, [])

  const clip = (part: Part) => `url(#${uid}-${part})`

  return (
    <svg
      ref={ref}
      viewBox={INFINITY_SYMBOL.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={cn('hero-mark', className)}
      data-motion={motion}
      role="img"
      aria-label={label}
      focusable="false"
      style={vars({ '--cycle': `${CYCLE_S}s`, '--flow-ease': `cubic-bezier(${EASE.join(', ')})` })}
    >
      <defs>
        {PARTS.map((part) => (
          <clipPath key={part} id={`${uid}-${part}`}>
            <path d={INFINITY_SYMBOL[part]} />
          </clipPath>
        ))}
        <filter id={`${uid}-soft`} filterUnits="userSpaceOnUse" x="95" y="250" width="385" height="190">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {/* 1. The belt ties itself: each end wraps into its loop (the right one is drawn from its far end). */}
      <g clipPath={clip('left')}>
        <path className="hm-draw" d={BELT.left.d} style={vars({ '--len': BELT.left.length, '--draw-from': BELT.left.length + 1 })} />
      </g>
      <g clipPath={clip('right')}>
        <path className="hm-draw" d={BELT.right.d} style={vars({ '--len': BELT.right.length, '--draw-from': -(BELT.right.length + 1) })} />
      </g>

      {/* 2. The finished mark, shown the moment the draw completes (covers every corner exactly). */}
      <path className="hm-fill" d={INFINITY_SYMBOL.left} />
      <path className="hm-fill" d={INFINITY_SYMBOL.right} />

      {/* 3. The knot pulls the loops together, then flexes as the light runs through it. */}
      <g className="hm-tie">
        <path className="hm-knot" d={INFINITY_SYMBOL.knot} style={vars({ '--pulse-shift': `${round(PULSE_SHIFT_S)}s` })} />
      </g>

      {/* 4. The light, clipped to each part so it slips under the bands where the strip does. */}
      {PARTS.map((part) => (
        <g key={part} clipPath={clip(part)}>
          <g filter={`url(#${uid}-soft)`}>
            {LIGHT.map(({ dash, alpha }) => {
              const from = round(dash + START[part])
              return (
                <path
                  key={dash}
                  className="hm-light"
                  d={BELT[part].d}
                  style={vars({ '--dash': dash, '--gap': round(PERIOD - dash), '--from': from, '--to': round(from - PERIOD), '--a': alpha })}
                />
              )
            })}
          </g>
        </g>
      ))}
    </svg>
  )
}
