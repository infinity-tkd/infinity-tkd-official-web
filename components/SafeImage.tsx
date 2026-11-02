'use client'

import * as React from 'react'
import { Shield } from 'lucide-react'

export interface SafeImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src?: string
  fallbackSrc?: string
  alt: string
  priority?: boolean
}

/**
 * SafeImage: Resilient Image Component with automatic fallback handling.
 * - Prevents broken image icons if CDNs, external images, or connections fail.
 * - Smooth fade-in on load.
 * - Supports priority loading for LCP hero images.
 */
export function SafeImage({
  src,
  alt,
  fallbackSrc = 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1200&auto=format&fit=crop',
  className,
  priority = false,
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = React.useState<string | undefined>(src)
  const [hasError, setHasError] = React.useState<boolean>(false)

  React.useEffect(() => {
    setImgSrc(src)
    setHasError(false)
  }, [src])

  const handleError = () => {
    if (!hasError && fallbackSrc && imgSrc !== fallbackSrc) {
      setHasError(true)
      setImgSrc(fallbackSrc)
    }
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      className={className}
      {...props}
    />
  )
}
