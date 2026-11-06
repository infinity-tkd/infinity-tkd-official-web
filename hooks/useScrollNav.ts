'use client'

import * as React from 'react'

export interface ScrollNavState {
  /** True when navigation should be visible (scrolling up or near top) */
  isNavVisible: boolean
  /** True when user has scrolled past the initial offset (> 15px) */
  isScrolled: boolean
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
 * Scroll-driven navigation visibility.
 *
 * Performance: the scroll handler is rAF-throttled and only calls `setState` when a boolean
 * actually flips (React bails out on identical values), so scrolling does not re-render the
 * navigation on every frame. The raw scroll position is intentionally not exposed as state.
 */
export function useScrollNav(options?: UseScrollNavOptions): ScrollNavState {
  const { downThreshold = 10, upThreshold = 6, minScrollY = 60, disabled = false } = options || {}

  const [isNavVisible, setIsNavVisible] = React.useState(true)
  const [isScrolled, setIsScrolled] = React.useState(false)

  const lastScrollYRef = React.useRef(0)
  const tickingRef = React.useRef(false)

  React.useEffect(() => {
    if (disabled) {
      setIsNavVisible(true)
      return
    }

    const update = () => {
      tickingRef.current = false

      const currentScrollY = Math.max(0, window.scrollY)
      const diff = currentScrollY - lastScrollYRef.current

      setIsScrolled(currentScrollY > 15)

      // Near the top: navigation is always visible.
      if (currentScrollY <= minScrollY) {
        setIsNavVisible(true)
        lastScrollYRef.current = currentScrollY
        return
      }

      // Ignore iOS Safari rubber-band overscroll at the bottom of the page.
      const maxScrollY = document.documentElement.scrollHeight - window.innerHeight
      if (currentScrollY >= maxScrollY - 20) return

      if (diff > downThreshold) {
        setIsNavVisible(false)
        lastScrollYRef.current = currentScrollY
      } else if (diff < -upThreshold) {
        setIsNavVisible(true)
        lastScrollYRef.current = currentScrollY
      }
    }

    const handleScroll = () => {
      if (tickingRef.current) return
      tickingRef.current = true
      window.requestAnimationFrame(update)
    }

    update() // sync initial state (e.g. page restored mid-scroll)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [downThreshold, upThreshold, minScrollY, disabled])

  return { isNavVisible, isScrolled }
}
