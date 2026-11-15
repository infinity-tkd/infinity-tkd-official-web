import { readFileSync } from 'node:fs'
import path from 'node:path'
import vm from 'node:vm'
import { expect, test } from '@playwright/test'

/**
 * The service worker's decisions, run in Node against a stand-in for the worker environment. A real browser
 * cannot take the network away from a worker's own requests in a test, so this is where "what happens when the
 * network is down" is checked deterministically.
 */
const SOURCE = readFileSync(path.join(process.cwd(), 'public', 'sw.js'), 'utf8')

type Listener = (event: unknown) => void

function createWorker({ network }: { network: 'up' | 'down' }) {
  const listeners: Record<string, Listener> = {}
  const store = new Map<string, Map<string, Response>>()
  const cacheFor = (name: string) => {
    if (!store.has(name)) store.set(name, new Map())
    return store.get(name)!
  }
  const caches = {
    // Like the real CacheStorage, opening a cache creates it, so it shows up in keys() before anything is stored.
    open: async (name: string) => {
      const cache = cacheFor(name)
      return {
        addAll: async (urls: string[]) => urls.forEach((url) => cache.set(url, new Response(`cached ${url}`))),
        match: async (url: string) => cache.get(url),
      }
    },
    keys: async () => [...store.keys()],
    delete: async (name: string) => store.delete(name),
  }
  const calls = { skipWaiting: 0, claim: 0, networkFetches: 0 }
  const scope = {
    addEventListener: (type: string, listener: Listener) => {
      listeners[type] = listener
    },
    skipWaiting: async () => void calls.skipWaiting++,
    clients: { claim: async () => void calls.claim++ },
    registration: { navigationPreload: { enable: async () => {} } },
  }
  const fetchMock = async () => {
    calls.networkFetches++
    if (network === 'down') throw new TypeError('Failed to fetch')
    return new Response('live page')
  }
  vm.runInNewContext(SOURCE, { self: scope, caches, fetch: fetchMock, Response })

  const dispatch = async (type: string, event: Record<string, unknown>) => {
    const waits: Promise<unknown>[] = []
    listeners[type]({ ...event, waitUntil: (promise: Promise<unknown>) => waits.push(promise) })
    await Promise.all(waits)
  }
  const navigate = async (mode: string) => {
    let answer: Promise<Response> | undefined
    listeners.fetch({
      request: { mode, url: 'https://example.test/page' },
      preloadResponse: Promise.resolve(undefined),
      respondWith: (promise: Promise<Response>) => (answer = promise),
    })
    return answer ? await answer : undefined
  }
  return { store, caches, calls, dispatch, navigate }
}

test.describe('service worker logic', () => {
  test('install stores the offline page and takes over immediately', async () => {
    const worker = createWorker({ network: 'up' })
    await worker.dispatch('install', {})
    expect([...worker.store.get('infinity-offline-v1')!.keys()].sort()).toEqual(['/favicon.svg', '/offline.html'])
    expect(worker.calls.skipWaiting).toBe(1)
  })

  test('activate deletes only this worker\'s old caches and claims open pages', async () => {
    const worker = createWorker({ network: 'up' })
    await worker.caches.open('infinity-offline-v0')
    await worker.caches.open('infinity-offline-v1')
    await worker.caches.open('someone-elses-cache')
    await worker.dispatch('install', {})
    await worker.dispatch('activate', {})
    expect(await worker.caches.keys()).toEqual(expect.arrayContaining(['infinity-offline-v1', 'someone-elses-cache']))
    expect(await worker.caches.keys()).not.toContain('infinity-offline-v0')
    expect(worker.calls.claim).toBe(1)
  })

  test('a page request goes to the network first and is never stored', async () => {
    const worker = createWorker({ network: 'up' })
    await worker.dispatch('install', {})
    const response = await worker.navigate('navigate')
    expect(await response!.text()).toBe('live page')
    expect([...worker.store.get('infinity-offline-v1')!.keys()].sort()).toEqual(['/favicon.svg', '/offline.html'])
  })

  test('with the network down, a page request gets the offline page', async () => {
    const worker = createWorker({ network: 'down' })
    await worker.dispatch('install', {})
    const response = await worker.navigate('navigate')
    expect(await response!.text()).toBe('cached /offline.html')
  })

  test('scripts, images and API calls are left alone', async () => {
    const worker = createWorker({ network: 'up' })
    await worker.dispatch('install', {})
    expect(await worker.navigate('cors')).toBeUndefined()
    expect(await worker.navigate('no-cors')).toBeUndefined()
    expect(worker.calls.networkFetches).toBe(0)
  })
})
