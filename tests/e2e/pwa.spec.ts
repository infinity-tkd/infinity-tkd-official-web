import { expect, test } from '@playwright/test'

interface ManifestIcon {
  src: string
  sizes: string
  type?: string
  purpose?: string
}

/** Width and height from a PNG's header (bytes 16-24). */
function pngSize(bytes: Buffer) {
  return { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) }
}

test.describe('web app manifest', () => {
  test('is linked from the page and describes an installable standalone app', async ({ page, request, baseURL }) => {
    await page.goto('/')
    const href = await page.locator('link[rel="manifest"]').getAttribute('href')
    expect(href, 'manifest link').toBeTruthy()
    const response = await request.get(`${baseURL}${href}`)
    expect(response.ok()).toBe(true)
    const manifest = await response.json()
    expect(manifest).toMatchObject({ start_url: '/', scope: '/', display: 'standalone' })
    expect(manifest.name.length).toBeGreaterThan(0)
    expect(manifest.short_name.length, 'short_name fits under a home-screen icon').toBeLessThanOrEqual(12)
    const kinds = (manifest.icons as ManifestIcon[]).map((icon) => `${icon.sizes}:${icon.purpose ?? 'any'}`)
    expect(kinds, 'icons Chrome requires').toEqual(expect.arrayContaining(['192x192:any', '512x512:any', '512x512:maskable']))
    expect(manifest.shortcuts.length, 'launcher shortcuts').toBeGreaterThan(0)
  })

  test('every PNG icon exists and has the size it declares', async ({ page, request, baseURL }) => {
    await page.goto('/')
    const href = await page.locator('link[rel="manifest"]').getAttribute('href')
    const manifest = await (await request.get(`${baseURL}${href}`)).json()
    const icons = (manifest.icons as ManifestIcon[]).filter((icon) => icon.type === 'image/png')
    expect(icons.length).toBeGreaterThanOrEqual(3)
    for (const icon of icons) {
      const response = await request.get(`${baseURL}${icon.src}`)
      expect(response.status(), icon.src).toBe(200)
      expect(response.headers()['content-type'], icon.src).toContain('image/png')
      const { width, height } = pngSize(await response.body())
      expect(`${width}x${height}`, icon.src).toBe(icon.sizes)
    }
  })

  test('Chrome finds nothing that blocks installing it', async ({ page }) => {
    await page.goto('/')
    const session = await page.context().newCDPSession(page)
    const { installabilityErrors } = await session.send('Page.getInstallabilityErrors')
    // Playwright's browser context is incognito-style, where installing is impossible by definition.
    expect(installabilityErrors.filter((error) => error.errorId !== 'in-incognito')).toEqual([])
  })

  test('theme colour, Apple touch icon and viewport-fit are declared', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('meta[name="theme-color"]')).not.toHaveCount(0)
    await expect(page.locator('link[rel="apple-touch-icon"]')).toHaveAttribute('href', /apple-touch-icon\.png/)
    await expect(page.locator('meta[name="viewport"]')).toHaveAttribute('content', /viewport-fit=cover/)
    await expect(page.locator('meta[name="apple-mobile-web-app-title"]')).toHaveAttribute('content', 'Infinity TKD')
  })
})

// These run against a production build: the worker only registers there.
test.describe('service worker', () => {
  test('registers, controls the page, and caches nothing but the offline page', async ({ page }) => {
    await page.goto('/')
    await page.evaluate(async () => {
      await navigator.serviceWorker.ready
    })
    await page.reload()
    await expect.poll(() => page.evaluate(() => Boolean(navigator.serviceWorker.controller))).toBe(true)

    // Browse a little under the worker's control, then look inside the cache.
    await page.goto('/about')
    await page.goto('/library')
    const cached = await page.evaluate(async () => {
      const urls: string[] = []
      for (const name of await caches.keys()) {
        const cache = await caches.open(name)
        for (const request of await cache.keys()) urls.push(new URL(request.url).pathname)
      }
      return urls.sort()
    })
    expect(cached, 'pages, scripts and API responses must never be cached').toEqual(['/favicon.svg', '/offline.html'])
  })

  test('sw.js is served uncached, and the offline page is self-contained and not indexed', async ({ request, baseURL }) => {
    const worker = await request.get(`${baseURL}/sw.js`)
    expect(worker.headers()['cache-control']).toContain('no-store')
    expect(worker.headers()['content-type']).toContain('javascript')

    const offline = await (await request.get(`${baseURL}/offline.html`)).text()
    expect(offline).toContain('name="robots" content="noindex"')
    expect(offline, 'no external scripts, styles or images').not.toMatch(/(src|href)="https?:\/\//)
  })
})
