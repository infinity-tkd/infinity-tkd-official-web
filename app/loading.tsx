import * as React from 'react'
import { InfinityLogo } from '@/components/InfinityLogo'

export default function Loading() {
  return (
    <div
      className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 text-center"
      role="status"
      aria-live="polite"
      aria-label="Loading page content"
    >
      <div className="relative p-6 sm:p-8 rounded-full bg-zinc-950/80 border border-brand-red/30 shadow-brand-glow backdrop-blur-md mb-6">
        <InfinityLogo variant="symbol" className="w-20 sm:w-28 h-auto text-brand-red" animated={true} />
      </div>

      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
          Loading Dojang Platform
        </span>
      </div>

      <div className="w-36 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
        <div className="w-full h-full bg-brand-red animate-[pulse_1s_ease-in-out_infinite]" />
      </div>
      <span className="sr-only">Loading content, please wait...</span>
    </div>
  )
}
