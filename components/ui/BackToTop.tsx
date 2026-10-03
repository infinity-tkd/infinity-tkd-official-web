'use client'

import * as React from 'react'
import { ChevronUp } from 'lucide-react'

export function BackToTop() {
  const [isVisible, setIsVisible] = React.useState(false)
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const docHeight = document.documentElement.scrollHeight - window.innerHeight
          setIsVisible(scrollY > 350)
          if (docHeight > 0) {
            setProgress(Math.min(1, Math.max(0, scrollY / docHeight)))
          } else {
            setProgress(0)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const radius = 17
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference * (1 - progress)

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top of page"
      className={`fixed bottom-24 lg:bottom-8 right-5 lg:right-8 z-40 p-2 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-xl transition-all duration-300 group touch-press focus:outline-none focus:ring-2 focus:ring-brand-red ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
          : 'opacity-0 translate-y-6 pointer-events-none scale-90'
      }`}
    >
      <svg className="w-10 h-10 -rotate-90 pointer-events-none" viewBox="0 0 44 44">
        {/* Background Track */}
        <circle
          cx="22"
          cy="22"
          r={radius}
          className="text-zinc-200 dark:text-zinc-800"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
        />
        {/* Active Progress Ring */}
        <circle
          cx="22"
          cy="22"
          r={radius}
          className="text-brand-red"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset,
            transition: 'stroke-dashoffset 100ms ease-out',
          }}
        />
      </svg>
      {/* Icon */}
      <span className="absolute inset-0 flex items-center justify-center text-zinc-700 dark:text-zinc-200 group-hover:text-brand-red group-hover:-translate-y-0.5 transition-all">
        <ChevronUp className="w-4 h-4" />
      </span>
    </button>
  )
}
