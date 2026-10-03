'use client'

import * as React from 'react'
import { AlertTriangle, RotateCcw, ShieldAlert, Inbox, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

// -----------------------------------------------------------------------------
// Types & Interfaces
// -----------------------------------------------------------------------------

export interface SafeGridProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onError'> {
  children?: React.ReactNode
  className?: string
  /** Isolates errors per child so one failed card does not crash sibling cards */
  isolateItems?: boolean
  /** Shows skeleton loading cards */
  isLoading?: boolean
  skeletonCount?: number
  skeletonHeight?: string
  /** Fallback when no items are available */
  isEmpty?: boolean
  emptyState?: React.ReactNode
  emptyTitle?: string
  emptyMessage?: string
  /** Custom fallback text for error states */
  fallbackTitle?: string
  fallbackMessage?: string
  /** Callback triggered when user clicks retry */
  onRetry?: () => void
  /** Telemetry error logger */
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
  errorInfo: React.ErrorInfo | null
  retryCount: number
}

// -----------------------------------------------------------------------------
// Item-Level Resilient Error Boundary
// -----------------------------------------------------------------------------

interface ItemBoundaryProps {
  children: React.ReactNode
  fallbackTitle?: string
  onRetry?: () => void
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
}

class GridItemBoundary extends React.Component<ItemBoundaryProps, ErrorBoundaryState> {
  constructor(props: ItemBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null, retryCount: 0 }
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ errorInfo })
    this.props.onError?.(error, errorInfo)
    console.error('[SafeGrid Item Error caught]:', error, errorInfo)
  }

  handleRetry = () => {
    this.setState((prev) => ({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: prev.retryCount + 1,
    }))
    this.props.onRetry?.()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          aria-live="assertive"
          className="p-5 sm:p-6 rounded-[14px] border border-red-500/30 bg-red-50/60 dark:bg-red-950/20 text-zinc-900 dark:text-zinc-100 flex flex-col justify-between min-h-[160px] transition-all backdrop-blur-sm"
        >
          <div>
            <div className="flex items-center gap-2 text-brand-red mb-2 font-bold text-xs uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>Card Render Error</span>
            </div>
            <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 line-clamp-2">
              {this.props.fallbackTitle || 'Unable to display this item'}
            </p>
            {process.env.NODE_ENV !== 'production' && this.state.error?.message && (
              <p className="text-[11px] font-mono text-red-600 dark:text-red-400 mt-2 p-2 rounded bg-black/5 dark:bg-white/5 truncate">
                {this.state.error.message}
              </p>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-red-200/50 dark:border-red-900/40 flex items-center justify-between">
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
              Retried {this.state.retryCount} time{this.state.retryCount === 1 ? '' : 's'}
            </span>
            <button
              type="button"
              onClick={this.handleRetry}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-red text-white hover:bg-brand-dark-red active:scale-95 transition-all shadow-sm cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Retry
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// -----------------------------------------------------------------------------
// Container-Level Resilient Error Boundary
// -----------------------------------------------------------------------------

interface ContainerBoundaryProps {
  children: React.ReactNode
  fallbackTitle?: string
  fallbackMessage?: string
  className?: string
  onRetry?: () => void
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
}

interface ContainerBoundaryState extends ErrorBoundaryState {
  showDetails: boolean
}

class GridContainerBoundary extends React.Component<
  ContainerBoundaryProps,
  ContainerBoundaryState
> {
  constructor(props: ContainerBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
      showDetails: false,
    }
  }

  static getDerivedStateFromError(error: Error): Partial<ContainerBoundaryState> {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ errorInfo })
    this.props.onError?.(error, errorInfo)
    console.error('[SafeGrid Container Error caught]:', error, errorInfo)
  }

  handleRetry = () => {
    this.setState((prev) => ({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: prev.retryCount + 1,
    }))
    this.props.onRetry?.()
  }

  render() {
    if (this.state.hasError) {
      const isDev = process.env.NODE_ENV !== 'production'
      return (
        <div
          role="alert"
          aria-live="assertive"
          className={cn(
            'w-full rounded-[14px] border border-red-500/30 bg-zinc-50 dark:bg-zinc-900/80 p-6 sm:p-8 text-center relative overflow-hidden transition-all shadow-lg',
            this.props.className
          )}
        >
          {/* Subtle Red Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand-red/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-md mx-auto flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mb-4 ring-8 ring-brand-red/5">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
              {this.props.fallbackTitle || 'Content Temporarily Unavailable'}
            </h3>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 font-light leading-relaxed">
              {this.props.fallbackMessage ||
                'An unexpected error occurred while rendering this section. Our system caught it automatically.'}
            </p>

            {/* Diagnostic Details in Development */}
            {isDev && this.state.error && (
              <div className="w-full text-left mt-4 text-xs">
                <button
                  type="button"
                  onClick={() => this.setState((prev) => ({ showDetails: !prev.showDetails }))}
                  className="flex items-center gap-1 font-mono text-[11px] text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 mb-1 cursor-pointer"
                >
                  {this.state.showDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  {this.state.showDetails ? 'Hide error stack' : 'Inspect error stack'}
                </button>
                {this.state.showDetails && (
                  <div className="p-3 bg-zinc-900 text-red-300 dark:bg-black/90 dark:text-red-400 rounded-lg font-mono text-[10px] overflow-x-auto max-h-40 border border-zinc-800">
                    <p className="font-bold">{this.state.error.toString()}</p>
                    {this.state.errorInfo?.componentStack && (
                      <pre className="mt-2 whitespace-pre-wrap opacity-75 leading-tight">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    )}
                  </div>
                )}
              </div>
            )}

            <div className="flex items-center gap-3 mt-6">
              <button
                type="button"
                onClick={this.handleRetry}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-red text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-dark-red active:scale-95 transition-all shadow-brand-glow cursor-pointer min-h-[44px]"
              >
                <RotateCcw className="w-4 h-4" />
                Try Again {this.state.retryCount > 0 && `(${this.state.retryCount})`}
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// -----------------------------------------------------------------------------
// SafeGrid Component: Full Auto Error Handling Grid Container
// -----------------------------------------------------------------------------

export function SafeGrid({
  children,
  className = 'grid grid-cols-1 md:grid-cols-2 gap-4 mb-12',
  isolateItems = true,
  isLoading = false,
  skeletonCount = 2,
  skeletonHeight = 'h-40',
  isEmpty = false,
  emptyState,
  emptyTitle = 'No Items Available',
  emptyMessage = 'There is currently no information to display in this section.',
  fallbackTitle,
  fallbackMessage,
  onRetry,
  onError,
  ...props
}: SafeGridProps) {
  // 1. Loading Skeleton State
  if (isLoading) {
    return (
      <div className={cn(className)} {...props}>
        {Array.from({ length: skeletonCount }).map((_, idx) => (
          <div
            key={`skeleton-${idx}`}
            className={cn(
              'w-full rounded-[14px] border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/40 p-6 animate-pulse flex flex-col justify-between',
              skeletonHeight
            )}
          >
            <div className="space-y-2.5">
              <div className="h-4 bg-zinc-300 dark:bg-zinc-800 rounded w-1/4" />
              <div className="h-6 bg-zinc-300 dark:bg-zinc-800 rounded w-3/4" />
              <div className="h-3 bg-zinc-300 dark:bg-zinc-800 rounded w-1/2" />
            </div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800/60 rounded w-1/3 mt-4" />
          </div>
        ))}
      </div>
    )
  }

  // Count valid children
  const childrenCount = React.Children.count(children)

  // 2. Empty State Handling
  if (isEmpty || childrenCount === 0) {
    if (emptyState) {
      return (
        <div className={cn(className)} {...props}>
          <div className="col-span-full">{emptyState}</div>
        </div>
      )
    }

    return (
      <div className={cn(className)} {...props}>
        <div className="col-span-full p-8 sm:p-10 rounded-[14px] border border-dashed border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/20 text-center flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-600 flex items-center justify-center mb-3">
            <Inbox className="w-6 h-6" />
          </div>
          <h4 className="text-base font-bold uppercase tracking-tight text-zinc-800 dark:text-zinc-200">
            {emptyTitle}
          </h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-sm">
            {emptyMessage}
          </p>
        </div>
      </div>
    )
  }

  // 3. Normal Execution with Container & Item Isolation
  return (
    <GridContainerBoundary
      className={className}
      fallbackTitle={fallbackTitle}
      fallbackMessage={fallbackMessage}
      onRetry={onRetry}
      onError={onError}
    >
      <div className={cn(className)} {...props}>
        {isolateItems
          ? React.Children.map(children, (child, idx) => (
              <GridItemBoundary
                key={React.isValidElement(child) && child.key ? child.key : `safe-grid-item-${idx}`}
                fallbackTitle={fallbackTitle}
                onRetry={onRetry}
                onError={onError}
              >
                {child}
              </GridItemBoundary>
            ))
          : children}
      </div>
    </GridContainerBoundary>
  )
}

export default SafeGrid
