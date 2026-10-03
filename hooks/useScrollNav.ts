'use client'

import * as React from 'react'

export interface ScrollNavState {
  /** True when navigation should be visible (scrolling up or near top) */
  isNavVisible: boolean
  /** True when user has scrolled past initial offset (> 15px) */
  isScrolled: boolean
  /** Current window scroll Y coordinate */
  scrollY: number
  /** Direction of the last scroll change */
  scrollDirection: 'up' | 'down' | null
}

export interface UseScrollNavOptions {
  /** Minimum downward scroll delta (px) required to trigger hiding (prevents micro-jitter). Default: 10 */
  downThreshold?: number
  /** Minimum upward scroll delta (px) required to trigger revealing. Default: 6 */
  upThreshold?: number
  /** Distance from top of page where navigation remains unconditionally visible. Default: 60 */
  minScrollY?: number
  /** When true (e.g. mobile drawer menu open), prevents hiding. Default: false */
  disabled?: boolean
}

/**
 * High-performance scroll navigation hook with requestAnimationFrame throttling,
 * edge overscroll protection, and hysteresis to prevent jitter.
 */
export function useScrollNav(options?: UseScrollNavOptions): ScrollNavState {
  const {
    downThreshold = 10,
    upThreshold = 6,
    minScrollY = 60,
    disabled = false,
  } = options || {}

  const [isNavVisible, setIsNavVisible] = React.useState(true)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [scrollY, setScrollY] = React.useState(0)
  const [scrollDirection, setScrollDirection] = React.useState<'up' | 'down' | null>(null)

  const lastScrollYRef = React.useRef(0)
  const tickingRef = React.useRef(false)

  React.useEffect(() => {
    if (typeof window === 'undefined') return

    if (disabled) {
      setIsNavVisible(true)
      return
    }

    const handleScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = Math.max(0, window.scrollY)
          const previousScrollY = lastScrollYRef.current
          const diff = currentScrollY - previousScrollY

          // 1. Scrolled background styling threshold
          setIsScrolled(currentScrollY > 15)
          setScrollY(currentScrollY)

          // 2. Near top of page: always keep navigation visible
          if (currentScrollY <= minScrollY) {
            setIsNavVisible(true)
            setScrollDirection(null)
            lastScrollYRef.current = currentScrollY
            tickingRef.current = false
            return
          }

          // 3. Prevent glitching during iOS Safari rubber-band overscroll at bottom
          const maxScrollY = document.documentElement.scrollHeight - window.innerHeight
          if (currentScrollY >= maxScrollY - 20) {
            tickingRef.current = false
            return
          }

          // 4. Directional threshold checks with hysteresis
          if (diff > downThreshold) {
            // Scrolling down -> hide header and mobile footer nav
            setIsNavVisible(false)
            setScrollDirection('down')
            lastScrollYRef.current = currentScrollY
          } else if (diff < -upThreshold) {
            // Scrolling up -> smoothly reveal header and mobile footer nav
            setIsNavVisible(true)
            setScrollDirection('up')
            lastScrollYRef.current = currentScrollY
          }

          tickingRef.current = false
        })
        tickingRef.current = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [downThreshold, upThreshold, minScrollY, disabled])

  return { isNavVisible, isScrolled, scrollY, scrollDirection }
}
