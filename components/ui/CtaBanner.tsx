import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonStyles } from './Button'

interface CtaBannerProps {
  eyebrow?: string
  title: string
  description?: string
  href: string
  label: string
}

/** Dark call-to-action band used at the end of content pages. */
export function CtaBanner({ eyebrow, title, description, href, label }: CtaBannerProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-brand-red/40 bg-zinc-900 p-8 sm:p-12 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-red/20 blur-[100px]"
      />
      <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="max-w-lg space-y-2">
          {eyebrow && <span className="block text-xs font-bold uppercase tracking-widest text-brand-red">{eyebrow}</span>}
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">{title}</h3>
          {description && <p className="text-sm sm:text-base font-light leading-relaxed text-zinc-400">{description}</p>}
        </div>
        <Link href={href} className={buttonStyles({ variant: 'primary', size: 'lg', className: 'whitespace-nowrap' })}>
          {label} <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}
