import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { buttonStyles } from '@/components/ui/Button'
import type { ButtonStyle } from '@/lib/blogBlocks'
import { isInternalHref, isSafeHref } from '@/lib/safeHref'

/**
 * A button in a post. The address goes through the same rules as every link in a post (lib/safeHref.ts); one that
 * fails them shows the label as plain text, never as a link.
 */
export function ButtonBlock({ label, href, style }: { label: string; href: string; style: ButtonStyle }) {
  if (!isSafeHref(href)) return <p className="my-6 font-bold text-zinc-900 dark:text-white">{label}</p>
  const className = buttonStyles({ variant: style === 'outline' ? 'outline' : 'primary', size: 'lg', className: 'w-full sm:w-auto' })
  return (
    <p className="my-8">
      {isInternalHref(href) && !href.startsWith('#') ? (
        <Link href={href} className={className}>
          {label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      ) : isInternalHref(href) ? (
        <a href={href} className={className}>
          {label}
        </a>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
          {label}
          {/^https?:/i.test(href) && <ExternalLink className="h-4 w-4" aria-hidden="true" />}
          {/^https?:/i.test(href) && <span className="sr-only"> (opens in a new tab)</span>}
        </a>
      )}
    </p>
  )
}
