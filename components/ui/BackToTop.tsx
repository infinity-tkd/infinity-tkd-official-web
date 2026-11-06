'use client'

import * as React from 'react'
import { ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const RADIUS = 17
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

/**
 * Floating "back to top" button with a scroll-progress ring.
 * Only the visibility flip uses React state; the ring is updated directly on the DOM,
 * so scrolling does not re-render the component every frame.
 */
export function BackToTop() {
  const [isVisible, setIsVisible] = React.useState(false)
  const ringRef = React.useRef<SVGCircleElement>(null)

  React.useEffect(() => {
    let ticking = false

    const update = () => {
      ticking = false
      const scrollY = window.scrollY
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, scrollY / scrollable)) : 0
      setIsVisible(scrollY > 400) // React bails out when the value is unchanged
      if (ringRef.current) ringRef.current.style.strokeDashoffset = String(CIRCUMFERENCE * (1 - progress))
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top of page"
      tabIndex={isVisible ? 0 : -1}
      className={cn(
        'group fixed bottom-[calc(5rem+env(safe-area-inset-bottom,0px))] right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full',
        'border border-zinc-200 bg-white/85 shadow-lg backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/85',
        'transition-[opacity,transform] duration-300 ease-out-expo touch-press focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red',
        'lg:bottom-8 lg:right-8',
        isVisible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      )}
    >
      <svg className="pointer-events-none absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 44 44" aria-hidden="true">
        <circle cx="22" cy="22" r={RADIUS} className="text-zinc-200 dark:text-zinc-800" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle
          ref={ringRef}
          cx="22"
          cy="22"
          r={RADIUS}
          className="text-brand-red"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          style={{ strokeDasharray: CIRCUMFERENCE, strokeDashoffset: CIRCUMFERENCE }}
        />
      </svg>
      <ChevronUp className="relative h-4 w-4 text-zinc-700 transition-transform duration-300 group-hover:-translate-y-0.5 dark:text-zinc-200" />
    </button>
  )
}
