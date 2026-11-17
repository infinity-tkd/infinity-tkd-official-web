'use client'

import * as React from 'react'
import { preconnect } from 'react-dom'
import { describeImage, imageAttempts } from '@/lib/imageUrl'

export interface SafeImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src?: string
  fallbackSrc?: string
  alt: string
  priority?: boolean
  /**
   * Called once when every address has failed and there is no fallback photo to show (`fallbackSrc=""`), so the caller can
   * leave the empty box out. A link that cannot work at all has no address to fail: check `describeImage(src).url` first.
   */
  onExhausted?: () => void
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

/** One address to try. `remote` pictures come from another website that this site does not control. */
interface Attempt {
  src: string | undefined
  srcSet?: string
  remote: boolean
}

/**
 * The addresses to try for `src`, best first (lib/imageUrl.ts has the details). Files on this site, Unsplash
 * photos and YouTube thumbnails are shown exactly as they always were. A share link (Google Drive, Dropbox, Imgur...)
 * becomes its direct picture address and goes through the image optimizer first, then straight from its own host.
 * A link that cannot work (Facebook, a folder...) has no attempts, so the fallback photo shows without a request.
 */
function attemptsFor(src: string | undefined): Attempt[] {
  const source = describeImage(src)
  if (source.kind === 'empty') return [{ src, remote: false }]
  if (!source.url) return []
  if (source.kind === 'local' || source.kind === 'data' || source.kind === 'unsplash' || source.kind === 'youtube') {
    return [{ src, remote: false }]
  }
  return imageAttempts(source).map((attempt) => ({ src: attempt.src, srcSet: attempt.srcSet, remote: true }))
}

/**
 * SafeImage: resilient image with an automatic fallback.
 * - Understands the links editors paste (Google Drive, Dropbox, Imgur, OneDrive...) and shows the picture itself.
 *   Those pictures are resized and cached by the server when their host is on the allow-list (config/imageHosts.mjs),
 *   and loaded straight from their own host, without a referrer and in a box that does not jump, when it is not.
 * - Swaps to the next address, and finally to `fallbackSrc`, if the photo or its host fails, so no broken-image icon shows.
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
  style,
  referrerPolicy,
  onExhausted,
  ...props
}: SafeImageProps) {
  const attempts = React.useMemo(() => attemptsFor(src), [src])
  const [attempt, setAttempt] = React.useState(0)

  React.useEffect(() => {
    setAttempt(0)
  }, [src])

  // After the last address has failed, the fallback photo (when there is one).
  const last = attempts.length - 1
  const current: Attempt =
    attempt < attempts.length ? attempts[attempt] : fallbackSrc ? { src: fallbackSrc, remote: false } : (attempts[last] ?? { src: undefined, remote: false })

  const handleError = () => {
    if (attempt < attempts.length && (attempt < last || fallbackSrc)) setAttempt(attempt + 1)
    else onExhausted?.()
  }

  const srcSet = current.srcSet ?? unsplashSrcSet(current.src)

  // An above-the-fold photo from Unsplash: open the connection while the page is still being parsed, so the
  // image (often the page's largest element) does not also wait for a DNS lookup and TLS handshake. React puts
  // the hint in <head> during the server render.
  if (priority && current.src && UNSPLASH.test(current.src)) preconnect('https://images.unsplash.com')

  // A picture from another website has an unknown shape: until it loads, hold a 4:3 box (then the real shape),
  // so the page does not jump. Ignored when the caller sets the size itself.
  const reservesSpace = current.remote && props.width === undefined && props.height === undefined && style?.aspectRatio === undefined

  return (
    // A plain img on purpose: Unsplash resizes on its own CDN (the srcSet above), and the fallback swap
    // needs the element's own error event.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={current.src}
      srcSet={srcSet}
      sizes={srcSet ? (sizes ?? DEFAULT_SIZES) : sizes}
      alt={alt}
      onError={handleError}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      referrerPolicy={current.remote ? 'no-referrer' : referrerPolicy}
      style={reservesSpace ? { aspectRatio: 'auto 4 / 3', ...style } : style}
      className={className}
      {...props}
    />
  )
}
