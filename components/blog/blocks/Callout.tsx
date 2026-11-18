import type * as React from 'react'
import { Info, Lightbulb, ShieldCheck, TriangleAlert, type LucideIcon } from 'lucide-react'
import type { CalloutKind } from '@/lib/blogBlocks'
import { cn } from '@/lib/utils'

// The calm design system has one accent: neutral boxes for information, the brand red for what needs attention.
const KINDS: Record<CalloutKind, { label: string; Icon: LucideIcon; box: string; icon: string }> = {
  note: { label: 'Note', Icon: Info, box: 'border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900', icon: 'text-zinc-500 dark:text-zinc-400' },
  tip: { label: 'Tip', Icon: Lightbulb, box: 'border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900', icon: 'text-brand-red' },
  warning: { label: 'Warning', Icon: TriangleAlert, box: 'border-brand-red/30 bg-brand-red/5', icon: 'text-brand-red' },
  safety: { label: 'Safety first', Icon: ShieldCheck, box: 'border-brand-red/30 bg-brand-red/5', icon: 'text-brand-red' },
}

/** A highlighted box: a note, a tip, a warning or a safety reminder. Its text is Markdown, rendered by the caller. */
export function Callout({ kind, title, children }: { kind: CalloutKind; title?: string; children?: React.ReactNode }) {
  const { label, Icon, box, icon } = KINDS[kind]
  return (
    <aside aria-label={title || label} className={cn('my-8 rounded-2xl border p-5 sm:p-6', box)}>
      <div className="flex items-start gap-3">
        <Icon className={cn('mt-0.5 h-5 w-5 shrink-0', icon)} aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white">{title || label}</p>
          {children && <div className="[&>*:last-child]:mb-0 [&_p]:text-base [&_p]:leading-7 [&_ul]:text-base [&_ol]:text-base">{children}</div>}
        </div>
      </div>
    </aside>
  )
}
