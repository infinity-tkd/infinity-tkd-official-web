'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface Card3DProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  /** Maximum tilt angle in degrees. Default: 5 (restrained, luxury feel) */
  maxTilt?: number
  /** Alias for maxTilt */
  max?: number
  /** Depth translation factor */
  depth?: number
  /** Scale multiplier on hover. Default: 1.015 */
  scale?: number
  /** Enables dynamic radial light glare tracking. Default: true */
  glare?: boolean
  /** Disabled 3D effect completely (e.g. for static states). Default: false */
  disabled?: boolean
}

/**
 * Card3D: Lightweight, 60/120fps hardware-accelerated 3D tilt component.
 * - Uses direct DOM CSS variable manipulation via requestAnimationFrame (0 React re-renders).
 * - Graceful fallback on touch/mobile devices and prefers-reduced-motion.
 * - Dynamic lighting and specular glare reflection.
 */
export function Card3D({
  children,
  className,
  maxTilt,
  max,
  depth,
  scale = 1.015,
  glare = true,
  disabled = false,
  ...props
}: Card3DProps) {
  const cardRef = React.useRef<HTMLDivElement>(null)
  const glareRef = React.useRef<HTMLDivElement>(null)
  const rafRef = React.useRef<number | null>(null)
  const effectiveMaxTilt = maxTilt ?? max ?? 5

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || !cardRef.current) return

      // Cancel previous frame if pending
      if (rafRef.current) cancelAnimationFrame(rafRef.current)

      rafRef.current = requestAnimationFrame(() => {
        const card = cardRef.current
        if (!card) return

        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        // Normalized offsets (-1 to 1)
        const normX = (x - centerX) / centerX
        const normY = (y - centerY) / centerY

        // Rotations: moving mouse up (negative normY) tilts card back (positive rotateX)
        const rotateX = -normY * effectiveMaxTilt
        const rotateY = normX * effectiveMaxTilt

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`

        if (glare && glareRef.current) {
          const glareX = (x / rect.width) * 100
          const glareY = (y / rect.height) * 100
          glareRef.current.style.opacity = '0.35'
          glareRef.current.style.background = `radial-gradient(circle 240px at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.25), transparent 70%)`
        }
      })
    },
    [disabled, effectiveMaxTilt, scale, glare]
  )

  const handleMouseLeave = React.useCallback(() => {
    if (disabled || !cardRef.current) return

    if (rafRef.current) cancelAnimationFrame(rafRef.current)

    const card = cardRef.current
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'

    if (glare && glareRef.current) {
      glareRef.current.style.opacity = '0'
    }
  }, [disabled, glare])

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative preserve-3d will-change-transform transition-transform duration-300 ease-out',
        className
      )}
      {...props}
    >
      {children}
      {glare && !disabled && (
        <div
          ref={glareRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] opacity-0 transition-opacity duration-300"
        />
      )}
    </div>
  )
}

export default Card3D
