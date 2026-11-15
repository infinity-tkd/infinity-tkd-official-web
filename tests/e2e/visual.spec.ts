import { expect, test } from '@playwright/test'
import { scrollThrough, setPrefs } from './helpers'

/**
 * Visual regression. Reference screenshots are taken on this machine before a change and compared after it, so
 * they are not committed (fonts and rendering differ between machines):
 *
 *   npm run test:visual:update    on the code before your change
 *   npm run test:visual           on the code after it; a failure shows the expected, actual and diff images
 */
const PAGES = ['/', '/about', '/academy', '/library', '/library/poomsae/taegeuk-1-il-jang', '/pricing', '/locations', '/contact']
const VIEWPORTS = [
  { name: 'phone', width: 390, height: 844 },
  { name: 'tablet', width: 820, height: 1180 },
  { name: 'desktop', width: 1440, height: 900 },
] as const

for (const viewport of VIEWPORTS) {
  test.describe(viewport.name, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } })

    for (const path of PAGES) {
      test(path, async ({ page }) => {
        await setPrefs(page, { theme: 'light' })
        await page.goto(path)
        await page.waitForLoadState('load')
        await scrollThrough(page)
        const slug = path === '/' ? 'home' : path.slice(1).replace(/\//g, '-')
        // The first 7,000px: enough to catch a regression, and short enough that very long pages (the library
        // hub lists about 90 techniques) stay within what Chrome can capture as one image.
        const height = await page.evaluate(() => document.documentElement.scrollHeight)
        await expect(page).toHaveScreenshot(`${slug}-${viewport.name}.png`, {
          fullPage: true,
          clip: { x: 0, y: 0, width: viewport.width, height: Math.min(height, 7000) },
          animations: 'disabled',
          maxDiffPixelRatio: 0.015,
        })
      })
    }
  })
}
