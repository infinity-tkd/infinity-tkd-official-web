import { expect, test } from '@playwright/test'
import { setPrefs, trackErrors } from './helpers'

/**
 * News on the real site (a production build). The repository ships with no announcements, so these tests see the
 * empty states; what a card looks like is covered without a browser by news.logic.spec.tsx, and the page, its
 * metadata, the sitemap and the layout at every width by routes.spec.ts, a11y.spec.ts and layout.spec.ts.
 */
test.describe('/news', () => {
  test('is a page of its own with one heading, a friendly empty state and no errors', async ({ page }) => {
    const errors = trackErrors(page)
    await setPrefs(page)
    const response = await page.goto('/news')
    expect(response?.status()).toBe(200)
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(/Latest\s+News/i)
    await expect(page.getByText('No announcements right now')).toBeVisible()
    await expect(page.locator('main article, #main-content article')).toHaveCount(0)
    expect(errors, errors.join('\n')).toEqual([])
  })

  test('names itself for search engines: title, description, canonical, a breadcrumb and a collection', async ({ page }) => {
    await page.goto('/news')
    await expect(page).toHaveTitle(/News & Announcements \| Infinity Taekwondo$/)
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /\/news$/)
    const types = await page
      .locator('script[type="application/ld+json"]')
      .evaluateAll((nodes) => nodes.map((node) => (JSON.parse(node.textContent ?? '{}') as { '@type'?: string })['@type']))
    expect(types).toEqual(expect.arrayContaining(['BreadcrumbList', 'CollectionPage']))
  })

  // One test (so one fresh page) per language: setPrefs only fills in a language that is not stored yet.
  for (const [lang, heading, message] of [
    ['km', 'ព័ត៌មាន', 'មិនទាន់មានសេចក្តីជូនដំណឹងនៅឡើយទេ'],
    ['zh', '最新', '暂时没有公告'],
    ['ko', '최신', '아직 공지가 없습니다'],
  ] as const) {
    test(`follows the language (${lang}): the heading and the empty message, no English left over`, async ({ page }) => {
      await setPrefs(page, { lang })
      await page.goto('/news')
      await expect(page.getByRole('heading', { level: 1 })).toContainText(heading)
      await expect(page.getByText(message)).toBeVisible()
      await expect(page.getByText('No announcements right now')).toHaveCount(0)
    })
  }
})

test.describe('news in the navigation', () => {
  test('is in the About menu of the header, next to the blog', async ({ page }) => {
    await setPrefs(page)
    await page.setViewportSize({ width: 1280, height: 800 })
    await page.goto('/')
    // The menu titles are links (a second tap follows the link), opened by hover or focus.
    await page.getByRole('link', { name: 'About', exact: true }).first().hover()
    const link = page.locator('header a[href="/news"]').first()
    await expect(link).toBeVisible()
    await expect(link).toContainText('News & Announcements')
  })

  test('is in the footer, and the link opens the page', async ({ page }) => {
    await setPrefs(page)
    await page.goto('/contact')
    const link = page.locator('footer a[href="/news"]')
    await expect(link).toHaveCount(1)
    await link.scrollIntoViewIfNeeded()
    await link.click()
    await expect(page).toHaveURL(/\/news$/)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })

  test('is in the phone menu', async ({ page }) => {
    await setPrefs(page)
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/')
    await page.getByRole('button', { name: /menu/i }).first().click()
    await expect(page.locator('a[href="/news"]').first()).toBeAttached()
  })
})

test.describe('news on the home page', () => {
  test('shows no news section while there are no announcements, and nothing breaks', async ({ page }) => {
    const errors = trackErrors(page)
    await setPrefs(page)
    await page.goto('/')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(page.getByRole('heading', { name: "What's new at the dojang" })).toHaveCount(0)
    expect(errors, errors.join('\n')).toEqual([])
  })
})
