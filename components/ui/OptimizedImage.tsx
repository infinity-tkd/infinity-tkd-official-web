'use client'

import * as React from 'react'
import Image, { type ImageProps } from 'next/image'

const DEFAULT_FALLBACK = 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1200&auto=format&fit=crop'

type OptimizedImageProps = Omit<ImageProps, 'src'> & {
  src: string
  /** Shown if `src` fails to load, so a CDN hiccup never leaves a broken-image icon. */
  fallbackSrc?: string
}

/**
 * next/image with an automatic fallback. Next resizes and re-encodes (AVIF/WebP) remote images to
 * the rendered size, instead of shipping a 2000px+ original into a 300px card.
 * Always pass `sizes` for `fill` images so the browser picks the right candidate.
 */
export function OptimizedImage({ src, fallbackSrc = DEFAULT_FALLBACK, alt, ...props }: OptimizedImageProps) {
  const [current, setCurrent] = React.useState(src)

  React.useEffect(() => {
    setCurrent(src)
  }, [src])

  return (
    <Image
      {...props}
      src={current}
      alt={alt}
      onError={() => {
        if (current !== fallbackSrc) setCurrent(fallbackSrc)
      }}
    />
  )
}
