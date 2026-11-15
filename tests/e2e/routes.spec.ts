import { expect, test } from '@playwright/test'
import { ROUTES, SITE, overflowX, setPrefs, trackErrors } from './helpers'

const VIEWPORTS = [
  { name: 'phone', width: 360, height: 780 },
  { name: 'desktop', width: 1280, height: 800 },
] as const

const withoutTrailingSlash = (url: string) => url.replace(/\/$/, '')

// Every page in the sitemap, on a small phone and on a desktop: it loads, has one h1, never scrolls sideways,
// logs no errors, and (on desktop, once) carries the SEO basics.
for (const viewport of VIEWPORTS) {
  test.describe(`every route renders cleanly @${viewport.name}`, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } })

    for (const path of ROUTES) {
      test(path, async ({ page }) => {
        const errors = trackErrors(page)
        await setPrefs(page)
        const response = await page.goto(path)
        expect(response?.status(), 'HTTP status').toBe(200)
        await expect(page.locator('h1'), 'exactly one h1').toHaveCount(1)
        expect(await overflowX(page), 'sideways scrolling').toBeLessThanOrEqual(1)

        if (viewport.name === 'desktop') {
          const title = await page.title()
          expect(title.length, `title length of "${title}"`).toBeGreaterThanOrEqual(20)
          expect(title.length, `title length of "${title}"`).toBeLessThanOrEqual(70)
          const description = (await page.locator('meta[name="description"]').getAttribute('content')) ?? ''
          expect(description.length, 'description length').toBeGreaterThanOrEqual(110)
          expect(description.length, 'description length').toBeLessThanOrEqual(165)
          const canonical = (await page.locator('link[rel="canonical"]').getAttribute('href')) ?? ''
          expect(withoutTrailingSlash(canonical), 'canonical URL').toBe(withoutTrailingSlash(`${SITE}${path}`))
          await expect(page.locator('meta[property="og:image"]')).toHaveCount(1)
          const blocks = await page
            .locator('script[type="application/ld+json"]')
            .evaluateAll((nodes) => nodes.map((node) => JSON.parse(node.textContent ?? '')))
          expect(blocks.length, 'JSON-LD blocks').toBeGreaterThan(0)
        }

        expect(errors, errors.join('\n')).toEqual([])
      })
    }
  })
}

test('an unknown URL returns the 404 page', async ({ page }) => {
  const response = await page.goto('/this-page-does-not-exist')
  expect(response?.status()).toBe(404)
  await expect(page.locator('h1')).toHaveCount(1)
  await expect(page.locator('main a[href="/"]').first()).toBeVisible()
})

test('robots.txt points at the sitemap, and the sitemap lists every page', async ({ request, baseURL }) => {
  const robots = await (await request.get(`${baseURL}/robots.txt`)).text()
  expect(robots).toMatch(/Sitemap: .*\/sitemap\.xml/)
  const xml = await (await request.get(`${baseURL}/sitemap.xml`)).text()
  const listed = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname)
  expect(new Set(listed).size, 'duplicate sitemap URLs').toBe(listed.length)
  expect(ROUTES.filter((route) => !listed.includes(route)), 'pages missing from the sitemap').toEqual([])
  expect(listed.filter((route) => !ROUTES.includes(route)), 'sitemap URLs that are not pages').toEqual([])
})
