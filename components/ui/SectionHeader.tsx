import * as React from 'react'
import { cn } from '@/lib/utils'
import { Eyebrow } from './PageHero'

interface SectionHeaderProps {
  eyebrow?: string
  eyebrowIcon?: React.ElementType
  /** pill (default): the red badge. text: a quiet grey label, for pages with many sections. */
  eyebrowStyle?: 'pill' | 'text'
  title: string
  /** Optional trailing words rendered in brand red. */
  accent?: string
  description?: string
  align?: 'center' | 'left'
  /** lg (default): home-page sections. md: sections inside a content page (28-40px). */
  size?: 'md' | 'lg'
  /** `dark` for sections on a permanently dark background. */
  tone?: 'auto' | 'dark'
  /** id for the heading, so a section can point at it with aria-labelledby. */
  id?: string
  className?: string
}

/** Section title block: eyebrow, heavy uppercase heading with a red accent, light supporting copy. */
export function SectionHeader({
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  eyebrowStyle = 'pill',
  title,
  accent,
  description,
  align = 'center',
  size = 'lg',
  tone = 'auto',
  id,
  className,
}: SectionHeaderProps) {
  const dark = tone === 'dark'
  const md = size === 'md'
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow &&
        (eyebrowStyle === 'text' ? (
          <p
            className={cn(
              'mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest sm:mb-4',
              dark ? 'text-zinc-400' : 'text-zinc-500'
            )}
          >
            {EyebrowIcon && <EyebrowIcon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />}
            {eyebrow}
          </p>
        ) : (
          <Eyebrow
            icon={EyebrowIcon}
            className={cn('mb-4 sm:mb-6', dark && 'border-white/10 bg-white/5 text-zinc-300')}
          >
            {eyebrow}
          </Eyebrow>
        ))}
      <h2
        id={id}
        className={cn(
          'font-black uppercase tracking-tight',
          md ? 'text-2xl leading-[1.08] sm:text-4xl md:text-5xl' : 'text-3xl leading-[1.02] sm:text-5xl md:text-6xl',
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
            'mt-3 font-light leading-relaxed sm:mt-4',
            md ? 'text-sm sm:text-base' : 'text-sm sm:text-base md:text-lg',
            dark ? 'text-zinc-400' : 'text-zinc-600 dark:text-zinc-400'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
