'use client'

import * as React from 'react'

/**
 * Registers the offline-fallback service worker (public/sw.js) in production, once the page has loaded so it
 * never competes with the first paint. Registration is optional: private modes and blocked storage simply
 * skip it, and the site behaves the same without it.
 */
export function ServiceWorkerRegister() {
  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production' || !('serviceWorker' in navigator)) return

    const register = () => {
      // updateViaCache: 'none' makes the browser re-fetch sw.js itself on each check, so a new version is
      // picked up promptly even though the file is also served with no-store.
      navigator.serviceWorker.register('/sw.js', { scope: '/', updateViaCache: 'none' }).catch(() => {})
    }

    if (document.readyState === 'complete') register()
    else window.addEventListener('load', register, { once: true })
    return () => window.removeEventListener('load', register)
  }, [])

  return null
}
