import type * as React from 'react'

/** A large quotation with an optional source. Its text is Markdown, rendered by the caller. */
export function PullQuote({ cite, children }: { cite?: string; children?: React.ReactNode }) {
  return (
    <figure className="my-10 border-l-4 border-brand-red pl-5 sm:pl-8">
      <blockquote className="[&>*:last-child]:mb-0 [&_p]:mb-3 [&_p]:text-xl [&_p]:font-bold [&_p]:leading-snug [&_p]:text-zinc-900 sm:[&_p]:text-2xl dark:[&_p]:text-white">
        {children}
      </blockquote>
      {cite && <figcaption className="mt-3 text-sm font-medium text-zinc-500 dark:text-zinc-400">{cite}</figcaption>}
    </figure>
  )
}
