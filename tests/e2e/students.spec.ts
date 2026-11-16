import { expect, test } from '@playwright/test'
import { setPrefs, trackErrors } from './helpers'

/**
 * Students are shown as short entries: a first name or initials, a photo, a belt and a short note. Never a
 * surname, an age, a "training since" year or a story. (This tests what the pages print, whoever is in the content.)
 */
const NO_PERSONAL_DETAILS = [/\bAge\s*\d/i, /\baged?\s+\d/i, /Training since/i, /Enrolled \d{4}/i, /Read Story/i, /Student Record/i, /Verified Honors/i, /Transformation & Dedication/i]

test.describe('/community: student spotlights', () => {
  test('are cards with a name, a belt and a short note, and nothing more about the person', async ({ page }) => {
    const errors = trackErrors(page)
    await setPrefs(page)
    await page.goto('/community')
    await expect(page.getByRole('heading', { level: 2, name: /Student Spotlights/ })).toBeVisible()

    const cards = page.locator('article')
    expect(await cards.count(), 'student cards').toBeGreaterThan(0)
    for (const card of await cards.all()) {
      const name = (await card.getByRole('heading', { level: 3 }).innerText()).trim()
      expect(name.length, 'a name is shown').toBeGreaterThan(0)
      expect(await card.locator('p').count(), `${name}: a short note`).toBe(1)
      expect(await card.locator('img').count(), `${name}: a photo`).toBe(1)
    }

    const text = await page.locator('body').innerText()
    for (const pattern of NO_PERSONAL_DETAILS) expect(text, String(pattern)).not.toMatch(pattern)
    expect(errors, errors.join('\n')).toEqual([])
  })

  test('have nothing more to open: a click shows no dialog', async ({ page }) => {
    await setPrefs(page)
    await page.goto('/community')
    await page.locator('article').first().click()
    await expect(page.getByRole('dialog')).toHaveCount(0)
  })

  test('can be searched, and a search with no match shows an empty state that Reset clears', async ({ page }) => {
    await setPrefs(page)
    await page.goto('/community')
    const total = await page.locator('article').count()
    await page.getByLabel('Search students').fill('zzzzzzzz')
    await expect(page.getByText('No Athletes Found')).toBeVisible()
    await expect(page.locator('article')).toHaveCount(0)
    await page.getByRole('button', { name: /Reset Filters/i }).last().click()
    await expect(page.locator('article')).toHaveCount(total)
  })

  test('are in Khmer, Chinese and Korean too, with no age or story either', async ({ page }) => {
    for (const lang of ['km', 'zh', 'ko'] as const) {
      await setPrefs(page, { lang })
      await page.goto('/community')
      await expect(page.locator('article').first()).toBeVisible()
      const text = await page.locator('body').innerText()
      for (const pattern of NO_PERSONAL_DETAILS) expect(text, `${lang} ${pattern}`).not.toMatch(pattern)
      await page.evaluate(() => localStorage.clear())
    }
  })
})

test.describe('/community: belt promotions', () => {
  test('list the new belt, the forms and the examiner, and show no age or story either', async ({ page }) => {
    await setPrefs(page)
    await page.goto('/community')
    await expect(page.getByText(/Examined by:/).first()).toBeVisible()
    expect(await page.getByText(/^Form:/).count(), 'forms shown').toBeGreaterThan(0)
    const text = await page.locator('body').innerText()
    for (const pattern of NO_PERSONAL_DETAILS) expect(text, String(pattern)).not.toMatch(pattern)
  })
})

test.describe('/achievements: medalists', () => {
  test('show a name, belt, medal and result, and the profile shows no age', async ({ page }) => {
    await setPrefs(page)
    await page.goto('/achievements')
    await page.getByRole('button', { name: /Student Medalists/ }).click()
    const first = page.locator('[role="button"]', { hasText: /Gold|Silver|Bronze|Special Honor|Finalist/ }).first()
    await first.scrollIntoViewIfNeeded()
    await first.click()
    const dialog = page.getByRole('dialog')
    await expect(dialog).toBeVisible()
    const text = await dialog.innerText()
    for (const pattern of NO_PERSONAL_DETAILS) expect(text, String(pattern)).not.toMatch(pattern)
    await page.keyboard.press('Escape')
    await expect(dialog).toBeHidden()
  })
})
