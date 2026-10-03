import * as React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'brand' | 'secondary' | 'outline' | 'gold' | 'green' | 'blue' | 'ghost' | 'neutral'
  size?: 'sm' | 'md' | 'lg'
}

const variantStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
  brand:
    'bg-brand-red/10 text-brand-red border-brand-red/30 shadow-sm shadow-brand-red/10 dark:bg-brand-red/15 dark:border-brand-red/40',
  secondary:
    'bg-zinc-100 text-zinc-800 border-zinc-200 dark:bg-zinc-900 dark:text-zinc-200 dark:border-zinc-800',
  neutral:
    'bg-zinc-900 text-white border-zinc-800 dark:bg-white dark:text-zinc-950 dark:border-zinc-200',
  outline:
    'bg-transparent text-zinc-700 border-zinc-300 dark:text-zinc-300 dark:border-zinc-700',
  gold:
    'bg-amber-500/10 text-amber-700 border-amber-500/30 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/40',
  green:
    'bg-emerald-500/10 text-emerald-700 border-emerald-500/30 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/40',
  blue:
    'bg-blue-500/10 text-blue-700 border-blue-500/30 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-500/40',
  ghost:
    'bg-transparent text-zinc-500 border-transparent dark:text-zinc-400',
}

const sizeStyles: Record<NonNullable<BadgeProps['size']>, string> = {
  sm: 'text-[10px] px-2 py-0.5 font-bold uppercase tracking-wider',
  md: 'text-xs px-2.5 py-1 font-bold uppercase tracking-widest',
  lg: 'text-sm px-3.5 py-1.5 font-bold uppercase tracking-widest',
}

export function Badge({
  children,
  className,
  variant = 'brand',
  size = 'md',
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-lg border backdrop-blur-md font-sans transition-colors',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
