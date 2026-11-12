import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonStyles } from './Button'
import { cn } from '@/lib/utils'

interface CtaBannerProps {
  eyebrow?: string
  title: string
  description?: string
  href: string
  label: string
  /** Optional second, quieter action (outline button). */
  secondary?: { href: string; label: string }
}

/**
 * Dark call-to-action band used at the end of content pages. It is dark in both themes, so it
 * carries the `dark` class: its text uses the dark-surface colours (see globals.css).
 */
export function CtaBanner({ eyebrow, title, description, href, label, secondary }: CtaBannerProps) {
  return (
    <div className="dark relative overflow-hidden rounded-2xl border border-brand-red/40 bg-zinc-900 p-8 sm:p-12 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-red/20 blur-[100px]"
      />
      {/* With two actions the row needs more room, so it stacks until the large breakpoint. */}
      <div
        className={cn(
          'relative flex flex-col items-start justify-between gap-6',
          secondary ? 'lg:flex-row lg:items-center' : 'sm:flex-row sm:items-center'
        )}
      >
        <div className="max-w-xl space-y-2">
          {eyebrow && <span className="block text-xs font-bold uppercase tracking-widest text-brand-red">{eyebrow}</span>}
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">{title}</h3>
          {description && <p className="text-sm sm:text-base font-light leading-relaxed text-zinc-400">{description}</p>}
        </div>
        <div className={cn('flex w-full flex-col gap-3 sm:w-auto sm:flex-row', secondary ? 'lg:shrink-0' : 'sm:shrink-0')}>
          <Link href={href} className={buttonStyles({ variant: 'primary', size: 'lg', className: 'w-full whitespace-nowrap sm:w-auto' })}>
            {label} <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className={buttonStyles({ variant: 'outline', size: 'lg', className: 'w-full whitespace-nowrap sm:w-auto' })}
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
