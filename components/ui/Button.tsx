import * as React from 'react'
import { cn } from '@/lib/utils'

export type ButtonVariant = 'primary' | 'brand-glow' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon'

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-sans font-bold cursor-pointer select-none transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2'

const variantStyles: Record<ButtonVariant, string> = {
  // Small white-on-red text already sits on the deeper #D0272F (globals.css), so hover goes one step darker.
  primary: 'bg-brand-red text-white hover:bg-brand-700 border border-transparent',
  // Kept as an alias of primary: the calm design system has no glowing buttons.
  'brand-glow': 'bg-brand-red text-white hover:bg-brand-700 border border-transparent',
  secondary:
    'bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800',
  outline:
    'bg-transparent text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-700 hover:border-brand-red hover:text-brand-red dark:hover:border-brand-red dark:hover:text-brand-red',
  ghost:
    'bg-transparent text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 hover:text-brand-red dark:hover:text-brand-red border border-transparent',
}

// Heights: sm 36 / md 44 (minimum comfortable touch target) / lg 48. Radius: 8px (rounded-xl token).
const sizeStyles: Record<ButtonSize, string> = {
  sm: 'min-h-[36px] px-3.5 py-1.5 text-xs uppercase tracking-wider rounded-xl',
  md: 'min-h-[44px] px-5 py-2.5 text-xs uppercase tracking-widest rounded-xl',
  lg: 'min-h-[48px] px-7 py-3 text-xs sm:text-[13px] uppercase tracking-widest rounded-xl',
  icon: 'w-11 h-11 min-w-[44px] min-h-[44px] p-2.5 rounded-xl',
}

/**
 * Class string for button styling. Use it on `<Link>` / `<a>` so links and buttons
 * share one look:  <Link href="/contact" className={buttonStyles({ variant: 'primary' })} />
 */
export function buttonStyles({
  variant = 'primary',
  size = 'md',
  className,
}: { variant?: ButtonVariant; size?: ButtonSize; className?: string } = {}) {
  return cn(baseStyles, variantStyles[variant], sizeStyles[size], className)
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = 'primary', size = 'md', isLoading = false, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        aria-busy={isLoading || undefined}
        className={buttonStyles({ variant, size, className })}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
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
