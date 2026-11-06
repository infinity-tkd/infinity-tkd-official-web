import * as React from 'react'
import { cn } from '@/lib/utils'
import { Eyebrow } from './PageHero'

interface SectionHeaderProps {
  eyebrow: string
  eyebrowIcon?: React.ElementType
  title: string
  /** Optional trailing words rendered in brand red. */
  accent?: string
  description?: string
  align?: 'center' | 'left'
  /** `dark` for sections on a permanently dark background. */
  tone?: 'auto' | 'dark'
  className?: string
}

/** Section title block: eyebrow pill, heavy uppercase heading, light supporting copy. */
export function SectionHeader({
  eyebrow,
  eyebrowIcon,
  title,
  accent,
  description,
  align = 'center',
  tone = 'auto',
  className,
}: SectionHeaderProps) {
  const dark = tone === 'dark'
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      <Eyebrow
        icon={eyebrowIcon}
        className={cn('mb-4 sm:mb-6', dark && 'border-white/10 bg-white/5 text-zinc-300')}
      >
        {eyebrow}
      </Eyebrow>
      <h2
        className={cn(
          'text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.02]',
          dark ? 'text-white' : 'text-zinc-900 dark:text-white'
        )}
      >
        {title}
        {accent && (
          <>
            {' '}
            <span className="text-brand-red">{accent}</span>
          </>
        )}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-light leading-relaxed',
            dark ? 'text-zinc-400' : 'text-zinc-600 dark:text-zinc-400'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
