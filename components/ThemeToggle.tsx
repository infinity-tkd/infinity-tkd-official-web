'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isRotating, setIsRotating] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-11 h-11 rounded-xl bg-zinc-100 dark:bg-zinc-900 ring-1 ring-zinc-200 dark:ring-zinc-800 animate-pulse" />
    )
  }

  const isDark = resolvedTheme === 'dark'

  const toggleTheme = () => {
    setIsRotating(true)
    setTheme(isDark ? 'light' : 'dark')
    setTimeout(() => setIsRotating(false), 300)
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900/70 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-300 focus:outline-none ring-1 ring-zinc-200 dark:ring-zinc-800 cursor-pointer overflow-hidden group shadow-sm hover:shadow-brand-glow flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 touch-press"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <div
        className={`transform transition-transform duration-300 ${
          isRotating ? 'rotate-180 scale-90' : 'rotate-0 scale-100'
        }`}
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300 drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]" />
        ) : (
          <Moon className="w-4 h-4 text-zinc-800 group-hover:-rotate-12 transition-transform duration-300 drop-shadow-[0_0_6px_rgba(0,0,0,0.3)]" />
        )}
      </div>
    </button>
  )
}
