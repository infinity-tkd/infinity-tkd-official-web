import * as React from 'react'

export type ScrollRevealDirection = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade'

export interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  /** Kept for existing call sites; content no longer animates in on scroll. */
  direction?: ScrollRevealDirection
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  once?: boolean
}

/**
 * Section wrapper. Sections used to fade and slide in as they scrolled into view; the calm design
 * system shows content as soon as it is on screen (no motion tied to scrolling, nothing ever
 * hidden), so this now renders a plain wrapper and keeps the old props for compatibility.
 */
export function ScrollReveal({
  children,
  direction: _direction,
  delay: _delay,
  duration: _duration,
  threshold: _threshold,
  once: _once,
  className,
  ...rest
}: ScrollRevealProps) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}
