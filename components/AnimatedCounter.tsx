'use client'

import * as React from 'react'

interface AnimatedCounterProps {
  value: string | number
  duration?: number
  className?: string
  startDelay?: number
}

/** "500+" -> { prefix: '', target: 500, decimals: 0, suffix: '+' }; null when there is no number. */
function parseValue(value: string) {
  const match = value.match(/[\d,.]+/)
  if (!match || match.index === undefined) return null
  const digits = match[0].replace(/,/g, '')
  const target = parseFloat(digits)
  if (!Number.isFinite(target) || target === 0) return null
  return {
    prefix: value.slice(0, match.index),
    suffix: value.slice(match.index + match[0].length),
    target,
    decimals: digits.includes('.') ? digits.split('.')[1].length : 0,
  }
}

/**
 * Counts up to `value` (e.g. "500+", "$120", "4.9") once it scrolls into view, then shows `value`
 * exactly as given. Server HTML, visitors who prefer reduced motion and browsers without
 * IntersectionObserver always see the final value.
 */
export function AnimatedCounter({ value, duration = 1800, className = '', startDelay = 100 }: AnimatedCounterProps) {
  const valueStr = String(value)
  const [displayValue, setDisplayValue] = React.useState(valueStr)
  const elementRef = React.useRef<HTMLSpanElement>(null)

  React.useEffect(() => {
    const element = elementRef.current
    const parsed = parseValue(valueStr)
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!element || !parsed || reducedMotion || !('IntersectionObserver' in window)) {
      setDisplayValue(valueStr)
      return
    }

    const { prefix, suffix, target, decimals } = parsed
    // Fixed locale so the count looks the same for every visitor and matches the final value.
    const format = (n: number) => (decimals ? n.toFixed(decimals) : Math.floor(n).toLocaleString('en-US'))
    let frame = 0
    let timer: ReturnType<typeof setTimeout> | undefined

    const animate = () => {
      let start: number | null = null
      const step = (now: number) => {
        if (start === null) start = now
        const progress = Math.min((now - start) / duration, 1)
        if (progress >= 1) {
          setDisplayValue(valueStr)
          return
        }
        const eased = 1 - Math.pow(2, -10 * progress)
        setDisplayValue(`${prefix}${format(target * eased)}${suffix}`)
        frame = requestAnimationFrame(step)
      }
      frame = requestAnimationFrame(step)
    }

    setDisplayValue(`${prefix}${format(0)}${suffix}`)
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        observer.disconnect()
        timer = setTimeout(animate, startDelay)
      },
      { threshold: 0.1 }
    )
    observer.observe(element)

    return () => {
      observer.disconnect()
      if (timer) clearTimeout(timer)
      cancelAnimationFrame(frame)
    }
  }, [valueStr, duration, startDelay])

  return (
    <span ref={elementRef} className={`inline-block font-black tabular-nums tracking-tight ${className}`}>
      {displayValue}
    </span>
  )
}
