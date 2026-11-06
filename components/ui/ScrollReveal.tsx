'use client'

import * as React from 'react'

export type ScrollRevealDirection = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade'

export interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  direction?: ScrollRevealDirection
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  once?: boolean
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 500,
  threshold = 0.15,
  className = '',
  once = true,
  ...rest
}: ScrollRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const element = ref.current
    if (!element) return

    // Immediately show if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (once) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, once])

  // Uses the individual `translate`/`scale` properties and resets them to `none` once revealed.
  // A lingering transform would make this wrapper the containing block for any `position: fixed`
  // descendant (modals, drawers) and clip/misplace them.
  const initialMotion: React.CSSProperties =
    direction === 'up'
      ? { translate: '0 16px' }
      : direction === 'down'
        ? { translate: '0 -16px' }
        : direction === 'left'
          ? { translate: '16px 0' }
          : direction === 'right'
            ? { translate: '-16px 0' }
            : direction === 'zoom'
              ? { scale: '0.97' }
              : {}

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        ...(isVisible ? { translate: 'none', scale: 'none' } : initialMotion),
        transitionProperty: 'opacity, translate, scale',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: isVisible ? undefined : 'opacity, translate',
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
