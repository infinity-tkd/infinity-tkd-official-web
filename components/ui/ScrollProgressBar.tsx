'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'

/** Blog articles only (/blog/<slug>): elsewhere the back-to-top ring already shows scroll progress. */
const isArticle = (pathname: string | null) =>
  !!pathname && /^\/blog\/[^/]+$/.test(pathname) && !pathname.endsWith('.xml')

/**
 * Thin reading-progress line under the top edge of a blog article.
 * Updates the bar's transform directly (no React re-render per scroll frame).
 */
export function ScrollProgressBar() {
  const barRef = React.useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const show = isArticle(pathname)

  React.useEffect(() => {
    if (!show) return
    let ticking = false

    const update = () => {
      ticking = false
      const bar = barRef.current
      if (!bar) return
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0
      bar.style.transform = `scaleX(${progress})`
      bar.style.opacity = progress > 0.005 ? '1' : '0'
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [show])

  if (!show) return null

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5">
      <div
        ref={barRef}
        className="h-full origin-left bg-brand-red opacity-0 transition-opacity duration-200"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}
