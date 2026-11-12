'use client'

import * as React from 'react'

export interface SafeImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src?: string
  fallbackSrc?: string
  alt: string
  priority?: boolean
}

const UNSPLASH = /^https:\/\/images\.unsplash\.com\//
// Candidate widths the browser can choose from (it picks the smallest that fills the slot).
const WIDTHS = [160, 320, 480, 640, 828, 1080, 1280, 1600, 1920]
// Assumed slot when a caller gives no `sizes`: half the screen on desktop, full width on phones.
const DEFAULT_SIZES = '(min-width: 1024px) 50vw, 100vw'

/** The same Unsplash photo at `width` px (Unsplash resizes on its CDN and serves WebP/AVIF). */
function unsplashAt(src: string, width: number) {
  const url = new URL(src)
  url.searchParams.set('w', String(width))
  if (!url.searchParams.has('auto')) url.searchParams.set('auto', 'format')
  if (!url.searchParams.has('q')) url.searchParams.set('q', '75')
  return url.toString()
}

/**
 * A srcSet for Unsplash photos, so phones and thumbnails download a photo close to the size they
 * show instead of one fixed 1000-2000px file. Never offers a width above the one the URL asked for
 * (or 1920px when it asked for none), so no image gets heavier than before.
 */
function unsplashSrcSet(src: string | undefined) {
  if (!src || !UNSPLASH.test(src)) return undefined
  try {
    const requested = Number(new URL(src).searchParams.get('w')) || 1920
    const widths = [...WIDTHS.filter((w) => w < requested), Math.min(requested, 1920)]
    return widths.map((w) => `${unsplashAt(src, w)} ${w}w`).join(', ')
  } catch {
    return undefined
  }
}

/**
 * SafeImage: resilient image with an automatic fallback.
 * - Swaps to `fallbackSrc` if the photo or its CDN fails, so no broken-image icon shows.
 * - Lazy-loads by default; `priority` loads eagerly for above-the-fold (LCP) images.
 * - Unsplash photos get a responsive srcSet. Pass `sizes` (e.g. "48px" for a thumbnail) when the
 *   image is not roughly full width on phones and half width on desktop.
 */
export function SafeImage({
  src,
  alt,
  fallbackSrc = 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1200&auto=format&fit=crop',
  className,
  priority = false,
  sizes,
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

  const srcSet = unsplashSrcSet(imgSrc)

  return (
    <img
      src={imgSrc}
      srcSet={srcSet}
      sizes={srcSet ? (sizes ?? DEFAULT_SIZES) : sizes}
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
