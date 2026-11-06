import { ChevronDown, ListTree } from 'lucide-react'
import type { BlogHeading } from '@/lib/blog'
import { cn } from '@/lib/utils'

interface TableOfContentsProps {
  headings: BlogHeading[]
  /** Renders as a closed-by-default disclosure (for small screens). */
  collapsible?: boolean
  className?: string
}

const shellClass = 'rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60'
const labelClass = 'flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand-red'

function HeadingList({ headings }: { headings: BlogHeading[] }) {
  return (
    <ol className="space-y-0.5">
      {headings.map((heading) => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            className={cn(
              'block border-l-2 border-transparent py-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:border-brand-red hover:text-brand-red transition-colors',
              heading.level === 3 ? 'pl-6 text-[13px]' : 'pl-3'
            )}
          >
            {heading.text}
          </a>
        </li>
      ))}
    </ol>
  )
}

/** "On this page" list. Plain anchors and a native <details>: no client JS needed. */
export function TableOfContents({ headings, collapsible = false, className }: TableOfContentsProps) {
  if (headings.length < 3) return null

  if (collapsible) {
    return (
      <nav aria-label="Table of contents" className={cn(shellClass, className)}>
        <details className="group">
          <summary className={cn(labelClass, 'cursor-pointer list-none justify-between p-4 [&::-webkit-details-marker]:hidden')}>
            <span className="flex items-center gap-2">
              <ListTree className="w-3.5 h-3.5" aria-hidden="true" />
              On this page
            </span>
            <ChevronDown className="w-4 h-4 transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="px-4 pb-4">
            <HeadingList headings={headings} />
          </div>
        </details>
      </nav>
    )
  }

  return (
    <nav aria-label="Table of contents" className={cn(shellClass, 'p-5', className)}>
      <p className={cn(labelClass, 'mb-3')}>
        <ListTree className="w-3.5 h-3.5" aria-hidden="true" />
        On this page
      </p>
      <HeadingList headings={headings} />
    </nav>
  )
}
