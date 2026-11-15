import { readFileSync } from 'node:fs'
import path from 'node:path'
import { expect, type Locator, type Page } from '@playwright/test'

export const SITE = 'https://infinitytaekwondo.com'

/**
 * Every public page the production build prerendered, read from the build's own route manifest: a new page is
 * covered without touching the tests. (The sitemap source cannot be imported here: it pulls in Next-only modules.)
 * Error previews (/error/*), Next internals, non-HTML files and the generated metadata images
 * (/opengraph-image, /twitter-image, icons) are not pages to crawl.
 */
export const ROUTES: string[] = Object.keys(
  JSON.parse(readFileSync(path.join(process.cwd(), '.next', 'prerender-manifest.json'), 'utf8')).routes as Record<string, unknown>
)
  .filter((route) => !route.startsWith('/_') && !route.startsWith('/error') && !/\.[a-z0-9]+$/i.test(route) && !/^\/(opengraph-image|twitter-image|icon|apple-icon)$/.test(route))
  .sort()

/**
 * Language and theme live in localStorage; set them before the page's own scripts run. A value the visitor has
 * already chosen is kept, so a test can change it and check that a reload remembers the choice.
 */
export async function setPrefs(page: Page, { lang = 'en', theme = 'light' }: { lang?: string; theme?: 'light' | 'dark' } = {}) {
  await page.addInitScript(
    ([language, colourTheme]) => {
      try {
        if (localStorage.getItem('infinity_tkd_lang') === null) localStorage.setItem('infinity_tkd_lang', language)
        if (localStorage.getItem('theme') === null) localStorage.setItem('theme', colourTheme)
      } catch {
        // Storage can be blocked; the defaults apply then.
      }
    },
    [lang, theme]
  )
}

/** Third parties the page loads on purpose; their failures say nothing about this site. */
const THIRD_PARTY = /kaspersky|google|youtube|ytimg|unsplash|jsdelivr/i

/** Collects JavaScript errors, error-level console messages and failed same-site requests. */
export function trackErrors(page: Page): string[] {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(`pageerror: ${error.message}`))
  page.on('console', (message) => {
    if (message.type() !== 'error') return
    if (THIRD_PARTY.test(message.text()) || THIRD_PARTY.test(message.location().url)) return
    errors.push(`console: ${message.text()}`)
  })
  page.on('requestfailed', (request) => {
    const reason = request.failure()?.errorText ?? ''
    if (/ERR_ABORTED/i.test(reason) || THIRD_PARTY.test(request.url())) return
    errors.push(`requestfailed: ${request.url()} ${reason}`)
  })
  return errors
}

/** Pixels the page is wider than the window (0 means no sideways scrolling). */
export const overflowX = (page: Page) => page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)

/**
 * The keyboard contract of a modal dialog: focus moves into it, Tab and Shift+Tab never leave it, Escape closes
 * it, and focus returns to the control that opened it.
 */
export async function expectDialogFocusFlow(page: Page, opener: Locator) {
  await opener.scrollIntoViewIfNeeded()
  await opener.click()
  const dialog = page.getByRole('dialog')
  await expect(dialog).toBeVisible()
  const inside = () => dialog.evaluate((element) => element.contains(document.activeElement))
  expect(await inside(), 'focus moves into the dialog').toBe(true)
  for (let step = 1; step <= 30; step++) {
    await page.keyboard.press('Tab')
    expect(await inside(), `focus stays inside after Tab ${step}`).toBe(true)
  }
  await page.keyboard.press('Shift+Tab')
  expect(await inside(), 'focus stays inside after Shift+Tab').toBe(true)
  await page.keyboard.press('Escape')
  await expect(dialog).toBeHidden()
  await expect(opener, 'focus returns to the opener').toBeFocused()
}

/** Scrolls the whole page once, so lazy images load before a screenshot or a measurement. */
export async function scrollThrough(page: Page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.documentElement.scrollHeight; y += window.innerHeight * 0.8) {
      window.scrollTo(0, y)
      await new Promise((resolve) => setTimeout(resolve, 80))
    }
    window.scrollTo(0, 0)
  })
}
