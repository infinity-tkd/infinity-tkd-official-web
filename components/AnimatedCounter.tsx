'use client'

import * as React from 'react'

interface AnimatedCounterProps {
  value: string | number
  duration?: number
  className?: string
  startDelay?: number
  /**
   * Count up from 0 the first time the number scrolls into view (stats). Off for values that
   * should simply be shown, such as prices: they still roll from the old to the new number when
   * the value changes.
   */
  countUp?: boolean
}

/** "500+" -> { prefix: '', target: 500, decimals: 0, suffix: '+' }; null when there is no number. */
function parseValue(value: string) {
  const match = value.match(/[\d,.]+/)
  if (!match || match.index === undefined) return null
  const digits = match[0].replace(/,/g, '')
  const target = parseFloat(digits)
  if (!Number.isFinite(target)) return null
  return {
    prefix: value.slice(0, match.index),
    suffix: value.slice(match.index + match[0].length),
    target,
    decimals: digits.includes('.') ? digits.split('.')[1].length : 0,
  }
}

/**
 * Animated number. Counts up to `value` (e.g. "500+", "$120", "4.9") once it scrolls into view,
 * and when `value` later changes (e.g. monthly -> annual price) rolls from the number on screen
 * to the new one. Always ends on `value` exactly as given. Server HTML, reduced motion and
 * browsers without IntersectionObserver show the final value.
 */
export function AnimatedCounter({ value, duration = 1800, className = '', startDelay = 100, countUp = true }: AnimatedCounterProps) {
  const valueStr = String(value)
  const [displayValue, setDisplayValue] = React.useState(valueStr)
  const elementRef = React.useRef<HTMLSpanElement>(null)
  // The number currently on screen, once the counter has shown one (null before the first view).
  const shownRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    const element = elementRef.current
    const parsed = parseValue(valueStr)
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!element || !parsed || reducedMotion || !('IntersectionObserver' in window)) {
      setDisplayValue(valueStr)
      shownRef.current = parsed?.target ?? null
      return
    }

    const { prefix, suffix, target, decimals } = parsed
    // Fixed locale so the count looks the same for every visitor and matches the final value.
    const format = (n: number) => (decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString('en-US'))
    let frame = 0
    let timer: ReturnType<typeof setTimeout> | undefined

    const animate = (from: number) => {
      let start: number | null = null
      const step = (now: number) => {
        if (start === null) start = now
        const progress = Math.min((now - start) / duration, 1)
        if (progress >= 1) {
          shownRef.current = target
          setDisplayValue(valueStr)
          return
        }
        const eased = 1 - Math.pow(2, -10 * progress)
        const current = from + (target - from) * eased
        shownRef.current = current
        setDisplayValue(`${prefix}${format(current)}${suffix}`)
        frame = requestAnimationFrame(step)
      }
      frame = requestAnimationFrame(step)
    }

    // Already showing a number: roll from it to the new value right away.
    if (shownRef.current !== null) {
      if (shownRef.current !== target) animate(shownRef.current)
      else setDisplayValue(valueStr)
      return () => cancelAnimationFrame(frame)
    }

    if (!countUp || target === 0) {
      shownRef.current = target
      setDisplayValue(valueStr)
      return
    }

    setDisplayValue(`${prefix}${format(0)}${suffix}`)
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        observer.disconnect()
        timer = setTimeout(() => animate(0), startDelay)
      },
      { threshold: 0.1 }
    )
    observer.observe(element)

    return () => {
      observer.disconnect()
      if (timer) clearTimeout(timer)
      cancelAnimationFrame(frame)
    }
  }, [valueStr, duration, startDelay, countUp])

  return (
    <span ref={elementRef} className={`inline-block font-black tabular-nums tracking-tight ${className}`}>
      {displayValue}
    </span>
  )
}
