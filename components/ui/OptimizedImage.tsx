'use client'

import * as React from 'react'
import Image, { type ImageProps } from 'next/image'
import { describeImage, imageAttempts } from '@/lib/imageUrl'

const DEFAULT_FALLBACK = 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1200&auto=format&fit=crop'

type OptimizedImageProps = Omit<ImageProps, 'src'> & {
  src: string
  /** Shown if `src` fails to load, so a CDN hiccup never leaves a broken-image icon. */
  fallbackSrc?: string
}

/** One address to try. `direct` pictures skip Next's optimizer and load straight from their own host. */
interface Attempt {
  address: string
  direct: boolean
}

/**
 * The addresses to try for `src`, best first (lib/imageUrl.ts has the details). Files on this site, Unsplash photos
 * and YouTube thumbnails go through Next's optimizer exactly as they always did. A share link (Google Drive, Dropbox,
 * Imgur...) becomes its direct picture address; the optimizer is used for the hosts on config/imageHosts.mjs, and a
 * picture from any other host loads straight from that host. A link that cannot work has no attempts.
 */
function attemptsFor(src: string): Attempt[] {
  const source = describeImage(src)
  if (source.kind === 'empty') return [{ address: src, direct: false }]
  if (!source.url) return []
  if (source.kind === 'local' || source.kind === 'data' || source.kind === 'unsplash' || source.kind === 'youtube') {
    return [{ address: src, direct: false }]
  }
  return imageAttempts(source).map((attempt) => ({ address: attempt.address, direct: !attempt.optimized }))
}

/**
 * next/image with an automatic fallback. Next resizes and re-encodes (AVIF/WebP) remote images to
 * the rendered size, instead of shipping a 2000px+ original into a 300px card.
 * Always pass `sizes` for `fill` images so the browser picks the right candidate.
 */
export function OptimizedImage({ src, fallbackSrc = DEFAULT_FALLBACK, alt, unoptimized, referrerPolicy, ...props }: OptimizedImageProps) {
  const attempts = React.useMemo(() => attemptsFor(src), [src])
  const [attempt, setAttempt] = React.useState(0)

  React.useEffect(() => {
    setAttempt(0)
  }, [src])

  // After the last address has failed, the fallback photo.
  const current: Attempt = attempt < attempts.length ? attempts[attempt] : { address: fallbackSrc, direct: false }

  return (
    <Image
      {...props}
      src={current.address}
      alt={alt}
      unoptimized={unoptimized ?? (current.direct ? true : undefined)}
      referrerPolicy={current.direct ? 'no-referrer' : referrerPolicy}
      onError={() => {
        if (attempt < attempts.length) setAttempt(attempt + 1)
      }}
    />
  )
}
