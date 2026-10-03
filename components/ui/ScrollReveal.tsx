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

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translate3d(0, 24px, 0)'
      case 'down':
        return 'translate3d(0, -24px, 0)'
      case 'left':
        return 'translate3d(24px, 0, 0)'
      case 'right':
        return 'translate3d(-24px, 0, 0)'
      case 'zoom':
        return 'scale3d(0.96, 0.96, 1)'
      case 'fade':
      default:
        return 'translate3d(0, 0, 0)'
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0) scale3d(1, 1, 1)' : getInitialTransform(),
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: isVisible ? 'auto' : 'opacity, transform',
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
