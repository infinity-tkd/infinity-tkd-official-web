'use client'

import * as React from 'react'

interface AnimatedCounterProps {
  value: string | number
  duration?: number
  className?: string
  startDelay?: number
}

/**
 * Universal animated counter component.
 * Features automatic error handling, works in all environments, browsers, and devices.
 * Uses requestAnimationFrame with automatic fallback to standard timer.
 */
export function AnimatedCounter({
  value,
  duration = 1800,
  className = '',
  startDelay = 100,
}: AnimatedCounterProps) {
  const valueStr = String(value)
  const [displayValue, setDisplayValue] = React.useState<string>(valueStr)
  const [hasAnimated, setHasAnimated] = React.useState(false)
  const elementRef = React.useRef<HTMLSpanElement>(null)

  // Parse string value (e.g. "500+", "15+", "80+", "$120")
  const numericMatch = valueStr.match(/[\d,.]+/)
  const rawNumStr = numericMatch ? numericMatch[0].replace(/,/g, '') : '0'
  const targetNumber = parseFloat(rawNumStr) || 0
  const isFloat = rawNumStr.includes('.')
  const decimals = isFloat ? rawNumStr.split('.')[1].length : 0

  const prefix = numericMatch ? valueStr.slice(0, numericMatch.index) : ''
  const suffix = numericMatch
    ? valueStr.slice((numericMatch.index ?? 0) + numericMatch[0].length)
    : ''

  React.useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || targetNumber === 0) {
      setDisplayValue(valueStr)
      return
    }

    // Initialize display with 0 for animation start
    setDisplayValue(`${prefix}0${suffix}`)

    let animationFrameId: number
    let startTime: number | null = null
    let delayTimer: any

    const startAnimation = () => {
      try {
        if (typeof window === 'undefined' || !window.requestAnimationFrame) {
          // Standard timer fallback
          setDisplayValue(valueStr)
          setHasAnimated(true)
          return
        }

        const step = (timestamp: number) => {
          if (!startTime) startTime = timestamp
          const elapsed = timestamp - startTime

          if (elapsed < duration) {
            const progress = Math.min(elapsed / duration, 1)
            const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            const current = targetNumber * easeOut

            const formattedNumber = isFloat
              ? current.toFixed(decimals)
              : Math.floor(current).toLocaleString()

            setDisplayValue(`${prefix}${formattedNumber}${suffix}`)
            animationFrameId = requestAnimationFrame(step)
          } else {
            const formattedNumber = isFloat
              ? targetNumber.toFixed(decimals)
              : targetNumber.toLocaleString()

            setDisplayValue(`${prefix}${formattedNumber}${suffix}`)
            setHasAnimated(true)
          }
        }

        animationFrameId = requestAnimationFrame(step)
      } catch (e) {
        setDisplayValue(valueStr)
        setHasAnimated(true)
      }
    }

    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries
          if (entry && entry.isIntersecting && !hasAnimated) {
            delayTimer = setTimeout(startAnimation, startDelay)
            observer.disconnect()
          }
        },
        { threshold: 0.1 }
      )

      if (elementRef.current) {
        observer.observe(elementRef.current)
      }

      return () => {
        observer.disconnect()
        if (delayTimer) clearTimeout(delayTimer)
        if (animationFrameId && typeof window !== 'undefined') cancelAnimationFrame(animationFrameId)
      }
    } else {
      // Fallback for browsers without IntersectionObserver
      delayTimer = setTimeout(startAnimation, startDelay)
      return () => {
        if (delayTimer) clearTimeout(delayTimer)
        if (animationFrameId && typeof window !== 'undefined') cancelAnimationFrame(animationFrameId)
      }
    }
  }, [valueStr, targetNumber, duration, startDelay, isFloat, decimals, prefix, suffix, hasAnimated])

  return (
    <span
      ref={elementRef}
      className={`inline-block font-black tabular-nums tracking-tight ${className}`}
    >
      {displayValue}
    </span>
  )
}
