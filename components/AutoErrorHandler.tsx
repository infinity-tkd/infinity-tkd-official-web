'use client'

import * as React from 'react'
import { WifiOff, Zap, AlertTriangle, X, RotateCcw } from 'lucide-react'

interface ErrorNotice {
  id: string
  type: 'offline' | 'online' | 'unhandled'
  message: string
  details?: string
}

const RELOAD_LOCK = 'chunk_reload_lock'

/** A script chunk from an older deployment failed to load (the page is out of date). */
const isStaleChunkError = (text: string) =>
  text.includes('ChunkLoadError') || text.includes('Loading chunk') || text.includes('Failed to fetch dynamically imported module')

/**
 * Reloads once to pick up the new deployment. The lock lives in sessionStorage, which can throw (blocked
 * storage, some private modes); without a working lock it never reloads, so it can never loop.
 */
function reloadOnceForNewDeployment(): boolean {
  try {
    if (sessionStorage.getItem(RELOAD_LOCK)) return false
    sessionStorage.setItem(RELOAD_LOCK, 'true')
  } catch {
    return false
  }
  window.location.reload()
  return true
}

/**
 * AutoErrorHandler: global error and network listener.
 * - Tells the visitor when the connection drops and when it is back
 * - Logs unhandled errors and promise rejections (and shows them as notices in development)
 * - Reloads once when a script chunk from an older deployment fails to load
 */
export function AutoErrorHandler() {
  const [notices, setNotices] = React.useState<ErrorNotice[]>([])
  const [isOnline, setIsOnline] = React.useState<boolean>(true)

  // Auto-dismiss notices after timeout
  const removeNotice = React.useCallback((id: string) => {
    setNotices((prev) => prev.filter((n) => n.id !== id))
  }, [])

  const addNotice = React.useCallback(
    (notice: Omit<ErrorNotice, 'id'>, duration = 4000) => {
      const id = `${notice.type}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`
      setNotices((prev) => {
        // Keep at most 2 active alerts to avoid visual clutter
        const filtered = prev.filter((p) => p.type !== notice.type)
        return [...filtered, { ...notice, id }]
      })

      if (duration > 0) {
        setTimeout(() => {
          removeNotice(id)
        }, duration)
      }
    },
    [removeNotice]
  )

  React.useEffect(() => {
    if (typeof window === 'undefined') return

    // 1. Initial network state check
    setIsOnline(navigator.onLine)

    const handleOffline = () => {
      setIsOnline(false)
      addNotice(
        {
          type: 'offline',
          message: 'You are offline',
          details: 'This page stays open, but new pages will not load until the connection is back.',
        },
        0 // Sticky until restored
      )
    }

    const handleOnline = () => {
      setIsOnline(true)
      // Clear any offline notice and show reconnected confirmation
      setNotices((prev) => prev.filter((n) => n.type !== 'offline'))
      addNotice(
        {
          type: 'online',
          message: 'Back online',
          details: 'Everything is available again.',
        },
        3500
      )
    }

    // 2. Global Runtime Error Handler
    const handleGlobalError = (event: ErrorEvent) => {
      const errorMsg = event.message || ''

      // A chunk from an older deployment: reload once to pick up the new one.
      if (isStaleChunkError(errorMsg)) {
        console.warn('[AutoErrorHandler] Stale script chunk; reloading once.')
        if (reloadOnceForNewDeployment()) return
      }

      console.error('[AutoErrorHandler Auto-Captured Error]:', event.error || event.message)

      // Surface non-disruptive telemetry notice in dev mode or critical errors
      if (process.env.NODE_ENV !== 'production' && errorMsg) {
        addNotice(
          {
            type: 'unhandled',
            message: 'Runtime Warning Captured',
            details: errorMsg.slice(0, 90),
          },
          4000
        )
      }
    }

    // 3. Unhandled Promise Rejection Handler
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason
      const reasonStr = typeof reason === 'string' ? reason : reason?.message || ''

      // A chunk from an older deployment: reload once to pick up the new one.
      if (isStaleChunkError(reasonStr)) {
        console.warn('[AutoErrorHandler] Stale script chunk; reloading once.')
        if (reloadOnceForNewDeployment()) return
      }

      console.error('[AutoErrorHandler Auto-Captured Rejection]:', reason)

      // Surface non-disruptive telemetry notice in dev mode or critical rejections
      if (process.env.NODE_ENV !== 'production' && reasonStr) {
        addNotice(
          {
            type: 'unhandled',
            message: 'Async Rejection Handled',
            details: reasonStr.slice(0, 90),
          },
          4000
        )
      }
    }

    window.addEventListener('offline', handleOffline)
    window.addEventListener('online', handleOnline)
    window.addEventListener('error', handleGlobalError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    // The page loaded fine: allow one reload again for the next deployment.
    const lockTimer = setTimeout(() => {
      try {
        sessionStorage.removeItem(RELOAD_LOCK)
      } catch {
        // Storage unavailable: nothing to clear.
      }
    }, 5000)

    return () => {
      window.removeEventListener('offline', handleOffline)
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('error', handleGlobalError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
      clearTimeout(lockTimer)
    }
  }, [addNotice])

  if (notices.length === 0) return null

  return (
    <div
      aria-live="polite"
      className="fixed top-20 sm:top-24 right-4 left-4 sm:left-auto sm:max-w-md z-[100] flex flex-col gap-2 pointer-events-none transition-all duration-300"
    >
      {notices.map((notice) => (
        <div
          key={notice.id}
          className={`pointer-events-auto p-3.5 sm:p-4 rounded-xl border shadow-2xl backdrop-blur-xl animate-fade-in flex items-start justify-between gap-3 text-xs ${
            notice.type === 'offline'
              ? 'bg-amber-950/90 dark:bg-amber-950/95 border-amber-600/40 text-amber-200'
              : notice.type === 'online'
              ? 'bg-emerald-950/90 dark:bg-emerald-950/95 border-emerald-600/40 text-emerald-200'
              : 'bg-red-950/90 dark:bg-red-950/95 border-red-600/40 text-red-200'
          }`}
          role="status"
        >
          <div className="flex items-start gap-2.5">
            <div className="p-1.5 rounded-lg bg-black/30 shrink-0 mt-0.5">
              {notice.type === 'offline' && <WifiOff className="w-4 h-4 text-amber-400" />}
              {notice.type === 'online' && <Zap className="w-4 h-4 text-emerald-400" />}
              {notice.type === 'unhandled' && <AlertTriangle className="w-4 h-4 text-red-400" />}
            </div>
            <div>
              <div className="font-bold uppercase tracking-wider">{notice.message}</div>
              {notice.details && (
                <div className="font-light opacity-90 mt-0.5 leading-relaxed text-[11px]">
                  {notice.details}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            {notice.type === 'offline' && (
              <button
                onClick={() => window.location.reload()}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center touch-press"
                aria-label="Retry connection"
                title="Retry connection"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              onClick={() => removeNotice(notice.id)}
              className="p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center touch-press"
              aria-label="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
