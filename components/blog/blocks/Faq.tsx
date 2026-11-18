import type * as React from 'react'
import { ChevronDown } from 'lucide-react'

/** One question that opens to its answer. A native <details>: it works without JavaScript and with a keyboard. */
export function FaqItem({ question, children }: { question: string; children?: React.ReactNode }) {
  return (
    <details className="group rounded-2xl border border-zinc-200 bg-white open:bg-zinc-50 dark:border-zinc-800 dark:bg-black dark:open:bg-zinc-900">
      <summary className="flex min-h-[48px] cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-3 text-base font-bold text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red dark:text-white [&::-webkit-details-marker]:hidden">
        <span className="min-w-0">{question}</span>
        <ChevronDown className="h-5 w-5 shrink-0 text-zinc-400 transition-transform group-open:rotate-180" aria-hidden="true" />
      </summary>
      {children && <div className="px-5 pb-2 pt-1 [&>*:last-child]:mb-4 [&_p]:text-base [&_p]:leading-7">{children}</div>}
    </details>
  )
}

/** Questions that follow each other are shown as one list. */
export function FaqGroup({ children }: { children: React.ReactNode }) {
  return <div className="my-8 space-y-3">{children}</div>
}
