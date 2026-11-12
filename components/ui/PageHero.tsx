import * as React from 'react'
import { cn } from '@/lib/utils'

/** Small uppercase pill that sits above section and page titles. */
export function Eyebrow({
  children,
  icon: Icon,
  className,
}: {
  children: React.ReactNode
  icon?: React.ElementType
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-brand-red/30 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest backdrop-blur-md',
        className
      )}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
      {children}
    </span>
  )
}

interface PageHeroProps {
  eyebrow: string
  eyebrowIcon?: React.ElementType
  title: string
  /** Optional second line rendered in brand red. */
  accent?: string
  description?: string
  align?: 'left' | 'center'
  children?: React.ReactNode
}

/**
 * Standard page header: eyebrow pill, heavy uppercase title with a red accent word, and a light
 * supporting paragraph, on the plain page background. Clears the fixed navbar.
 */
export function PageHero({
  eyebrow,
  eyebrowIcon,
  title,
  accent,
  description,
  align = 'center',
  children,
}: PageHeroProps) {
  const centered = align === 'center'

  return (
    <section className="relative pt-24 sm:pt-28 pb-10 sm:pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className={cn('max-w-3xl', centered && 'mx-auto text-center')}>
          <Eyebrow icon={eyebrowIcon} className="mb-4 sm:mb-5">
            {eyebrow}
          </Eyebrow>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.95] text-zinc-900 dark:text-white break-words">
            {title}
            {accent && (
              <>
                {' '}
                <span className="text-brand-red">{accent}</span>
              </>
            )}
          </h1>
          {description && (
            <p className="mt-4 sm:mt-5 text-base sm:text-lg font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
              {description}
            </p>
          )}
          {children && <div className={cn('mt-6 sm:mt-8', centered && 'flex justify-center')}>{children}</div>}
        </div>
      </div>
    </section>
  )
}
