import * as React from 'react'
import { cn } from '@/lib/utils'
import { Card3D } from './Card3D'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  enable3D?: boolean
  maxTilt?: number
  glass?: boolean
}

export function Card({
  className,
  enable3D = false,
  maxTilt = 5,
  glass = true,
  children,
  ...props
}: CardProps) {
  const content = (
    <div
      className={cn(
        'rounded-[14px] overflow-hidden transition-all duration-300',
        glass
          ? 'card-glass'
          : 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )

  if (enable3D) {
    return (
      <Card3D maxTilt={maxTilt} className="h-full">
        {content}
      </Card3D>
    )
  }

  return content
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6 sm:p-7 flex flex-col space-y-1.5', className)} {...props} />
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        'text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-900 dark:text-white leading-none',
        className
      )}
      {...props}
    />
  )
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed', className)}
      {...props}
    />
  )
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6 sm:p-7 pt-0', className)} {...props} />
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('p-6 sm:p-7 pt-0 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/80 mt-auto', className)}
      {...props}
    />
  )
}

export default Card
