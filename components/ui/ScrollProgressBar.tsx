'use client'

import * as React from 'react'

export function ScrollProgressBar() {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    let ticking = false

    const updateProgress = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight > 0) {
        const currentProgress = Math.min(1, Math.max(0, scrollY / docHeight))
        setProgress(currentProgress)
      } else {
        setProgress(0)
      }
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    updateProgress()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  if (progress <= 0.005) return null

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[60] pointer-events-none bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-brand-red via-red-500 to-amber-500 shadow-[0_0_10px_rgba(239,47,56,0.8)] origin-left transition-transform duration-75 ease-out"
        style={{
          transform: `scaleX(${progress})`,
          willChange: 'transform',
        }}
      />
    </div>
  )
}
