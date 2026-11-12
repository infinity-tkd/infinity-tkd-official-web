import * as React from 'react'
import { cn } from '@/lib/utils'

export interface Card3DProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  /** Kept for existing call sites; cards no longer tilt. */
  maxTilt?: number
  /** Kept for existing call sites; cards no longer tilt. */
  max?: number
  /** Kept for existing call sites; cards no longer tilt. */
  depth?: number
  /** Kept for existing call sites; cards no longer scale. */
  scale?: number
  /** Kept for existing call sites; there is no pointer glare. */
  glare?: boolean
  disabled?: boolean
}

/**
 * Card wrapper. It used to tilt toward the pointer; the calm design system keeps cards still, and
 * hover feedback comes from each card's own border or colour. Kept as a plain wrapper so existing
 * call sites keep their layout (`relative` root, any className).
 */
export function Card3D({
  children,
  className,
  maxTilt: _maxTilt,
  max: _max,
  depth: _depth,
  scale: _scale,
  glare: _glare,
  disabled: _disabled,
  ...props
}: Card3DProps) {
  return (
    <div className={cn('relative', className)} {...props}>
      {children}
    </div>
  )
}

export default Card3D
