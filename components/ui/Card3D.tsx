'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface Card3DProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  /** Maximum tilt angle in degrees. Capped at 4deg for a restrained, premium feel. */
  maxTilt?: number
  /** Alias for maxTilt */
  max?: number
  /** Kept for API compatibility; depth is implied by the perspective. */
  depth?: number
  /** Scale on hover. Default: 1.01 */
  scale?: number
  /** Soft light that follows the pointer. Default: true */
  glare?: boolean
  /** Disable the effect entirely. */
  disabled?: boolean
}

const MAX_TILT_DEG = 4

/** True only for a real mouse/trackpad and when the visitor has not asked for reduced motion. */
function canTilt(): boolean {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * Card3D: subtle pointer-driven 3D tilt.
 *
 * Performance:
 * - No React state: transforms are written straight to the DOM inside requestAnimationFrame.
 * - The card's rect is measured once on pointer-enter (not on every move), so moves never force layout.
 * - `will-change` is applied only while hovered; idle cards don't pin a GPU layer each.
 * - Completely inert on touch devices and with prefers-reduced-motion.
 */
export function Card3D({
  children,
  className,
  maxTilt,
  max,
  depth: _depth,
  scale = 1.01,
  glare = true,
  disabled = false,
  ...props
}: Card3DProps) {
  const cardRef = React.useRef<HTMLDivElement>(null)
  const glareRef = React.useRef<HTMLDivElement>(null)
  const rafRef = React.useRef<number | null>(null)
  const rectRef = React.useRef<DOMRect | null>(null)
  const [enabled, setEnabled] = React.useState(false)
  const tilt = Math.min(maxTilt ?? max ?? MAX_TILT_DEG, MAX_TILT_DEG)

  React.useEffect(() => {
    if (disabled) return
    setEnabled(canTilt())
  }, [disabled])

  const reset = React.useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    const card = cardRef.current
    if (!card) return
    card.style.transform = ''
    card.style.willChange = ''
    if (glareRef.current) glareRef.current.style.opacity = '0'
    rectRef.current = null
  }, [])

  const handlePointerEnter = React.useCallback(() => {
    const card = cardRef.current
    if (!enabled || !card) return
    rectRef.current = card.getBoundingClientRect()
    card.style.willChange = 'transform'
  }, [enabled])

  const handlePointerMove = React.useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!enabled || e.pointerType !== 'mouse') return
      const { clientX, clientY } = e
      if (rafRef.current) cancelAnimationFrame(rafRef.current)

      rafRef.current = requestAnimationFrame(() => {
        const card = cardRef.current
        const rect = rectRef.current ?? card?.getBoundingClientRect()
        if (!card || !rect) return

        const px = (clientX - rect.left) / rect.width // 0..1
        const py = (clientY - rect.top) / rect.height // 0..1
        const rotateX = (0.5 - py) * 2 * tilt
        const rotateY = (px - 0.5) * 2 * tilt

        card.style.transform = `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(${scale})`

        if (glare && glareRef.current) {
          glareRef.current.style.opacity = '1'
          glareRef.current.style.background = `radial-gradient(circle 260px at ${(px * 100).toFixed(1)}% ${(py * 100).toFixed(1)}%, rgba(255,255,255,0.12), transparent 70%)`
        }
      })
    },
    [enabled, tilt, scale, glare]
  )

  React.useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div
      ref={cardRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      className={cn('relative transition-transform duration-[400ms] ease-out-expo', enabled && 'preserve-3d', className)}
      {...props}
    >
      {children}
      {glare && enabled && (
        <div
          ref={glareRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-30 rounded-2xl opacity-0 transition-opacity duration-300"
        />
      )}
    </div>
  )
}

export default Card3D
