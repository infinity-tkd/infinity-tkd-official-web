/*
 * Infinity Taekwondo service worker: an offline fallback, and nothing else.
 *
 * It never stores pages, scripts, API responses or anything about the visitor. A page request always goes to
 * the network first; only when the network fails does it answer with the cached /offline.html. Every other
 * request (scripts, images, API calls) is left to the browser, so there is no stale content to invalidate.
 *
 * Updating: change VERSION. The new worker activates at once and deletes the old cache.
 * Retiring it: replace this file with `self.addEventListener('install', () => self.skipWaiting());
 * self.addEventListener('activate', () => self.registration.unregister());` and every visitor drops it
 * on their next visit (the file is served with no-store, so they always see the latest version).
 */
const VERSION = 'v1'
const CACHE_PREFIX = 'infinity-offline-'
const CACHE = `${CACHE_PREFIX}${VERSION}`
const OFFLINE_URL = '/offline.html'
// Only what the offline page itself needs.
const PRECACHE = [OFFLINE_URL, '/favicon.svg']

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys()
      await Promise.all(names.filter((name) => name.startsWith(CACHE_PREFIX) && name !== CACHE).map((name) => caches.delete(name)))
      // Start the page request while the worker wakes up, instead of after it.
      if (self.registration.navigationPreload) await self.registration.navigationPreload.enable()
      await self.clients.claim()
    })()
  )
})

self.addEventListener('fetch', (event) => {
  const request = event.request
  // Only page navigations are handled; everything else goes straight to the network and the browser cache.
  if (request.mode !== 'navigate') return

  event.respondWith(
    (async () => {
      try {
        const preloaded = await event.preloadResponse
        return preloaded || (await fetch(request))
      } catch {
        const cache = await caches.open(CACHE)
        const offline = await cache.match(OFFLINE_URL)
        return offline || Response.error()
      }
    })()
  )
})
