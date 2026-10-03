import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'brand-glow'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  isLoading?: boolean
}

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-brand-red text-white hover:bg-zinc-900 dark:hover:bg-white dark:hover:text-black shadow-brand-glow hover:shadow-brand-glow-lg border border-transparent',
  'brand-glow':
    'bg-brand-red text-white shadow-brand-glow-lg hover:shadow-[0_0_35px_rgba(239,47,56,0.7)] border border-white/20',
  secondary:
    'bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800',
  outline:
    'bg-transparent text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-700 hover:border-brand-red hover:text-brand-red dark:hover:border-brand-red dark:hover:text-brand-red',
  ghost:
    'bg-transparent text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 hover:text-brand-red dark:hover:text-brand-red border border-transparent',
}

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'min-h-[36px] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg',
  md: 'min-h-[44px] px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-widest rounded-xl',
  lg: 'min-h-[52px] px-8 py-3.5 text-sm font-bold uppercase tracking-widest rounded-xl',
  icon: 'w-11 h-11 min-w-[44px] min-h-[44px] p-2.5 rounded-xl flex items-center justify-center',
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-sans font-bold cursor-pointer select-none transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
