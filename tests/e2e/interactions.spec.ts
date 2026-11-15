import { expect, test, type Page } from '@playwright/test'
import { expectDialogFocusFlow, setPrefs } from './helpers'

test.describe('navigation', () => {
  test.use({ viewport: { width: 1280, height: 800 } })

  test('the skip link is the first tab stop and jumps to the main content', async ({ page }) => {
    await setPrefs(page)
    await page.goto('/about')
    await page.keyboard.press('Tab')
    const skip = page.getByRole('link', { name: /skip to main content/i })
    await expect(skip).toBeFocused()
    await expect(skip).toBeVisible()
    await page.keyboard.press('Enter')
    await expect(page).toHaveURL(/#main-content$/)
  })

  test('back and forward keep working between pages', async ({ page }) => {
    await setPrefs(page)
    await page.goto('/')
    await page.getByRole('link', { name: 'Academy', exact: true }).first().click()
    await expect(page).toHaveURL(/\/academy$/)
    await expect(page.locator('h1')).toBeVisible()
    await page.goBack()
    await expect(page).toHaveURL(/\/$/)
    await expect(page.locator('h1')).toBeVisible()
    await page.goForward()
    await expect(page).toHaveURL(/\/academy$/)
    await expect(page.locator('h1')).toBeVisible()
  })

  test('keyboard focus is always visible', async ({ page }) => {
    await setPrefs(page)
    await page.goto('/')
    for (let stop = 1; stop <= 14; stop++) {
      await page.keyboard.press('Tab')
      const visible = await page.evaluate(() => {
        const element = document.activeElement
        if (!element || element === document.body) return true
        const style = getComputedStyle(element)
        return (style.outlineStyle !== 'none' && parseFloat(style.outlineWidth) > 0) || (style.boxShadow !== 'none' && style.boxShadow !== '')
      })
      expect(visible, `tab stop ${stop} shows a focus indicator`).toBe(true)
    }
  })
})

test.describe('phone menu', () => {
  test.use({ viewport: { width: 390, height: 844 }, hasTouch: true })

  test('opens, moves focus in, closes on Escape and returns focus to the button', async ({ page }) => {
    await setPrefs(page)
    await page.goto('/')
    await page.getByRole('button', { name: 'Open menu' }).click()
    const drawer = page.locator('#mobile-menu')
    await expect(drawer).toBeVisible()
    expect(await drawer.evaluate((element) => element.contains(document.activeElement))).toBe(true)
    await page.keyboard.press('Escape')
    await expect(drawer).toBeHidden()
    await expect(page.getByRole('button', { name: 'Open menu' })).toBeFocused()
  })
})

test.describe('language and theme', () => {
  test.use({ viewport: { width: 1280, height: 800 } })

  test('the language switcher changes the page language and remembers it', async ({ page }) => {
    await setPrefs(page)
    await page.goto('/')
    await page.getByRole('button', { name: /select language/i }).click()
    await page.locator('header button[lang="km"]').click()
    await expect(page.locator('html')).toHaveAttribute('lang', 'km')
    await page.reload()
    await expect(page.locator('html')).toHaveAttribute('lang', 'km')
  })

  test('the language menu closes on Escape and returns focus to its button', async ({ page }) => {
    await setPrefs(page)
    await page.goto('/')
    const trigger = page.getByRole('button', { name: /select language/i })
    await trigger.click()
    await expect(page.locator('header button[lang="km"]')).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(page.locator('header button[lang="km"]')).toBeHidden()
    await expect(trigger).toBeFocused()
  })

  test('the theme toggle switches the theme and remembers it', async ({ page }) => {
    await setPrefs(page, { theme: 'light' })
    await page.goto('/')
    await expect(page.locator('html')).not.toHaveClass(/dark/)
    await page.getByRole('button', { name: /switch to dark theme/i }).click()
    await expect(page.locator('html')).toHaveClass(/dark/)
    await page.reload()
    await expect(page.locator('html')).toHaveClass(/dark/)
  })
})

// Every dialog keeps the keyboard contract: focus in, Tab trapped, Escape closes, focus back on the opener.
test.describe('dialogs', () => {
  test.use({ viewport: { width: 1280, height: 800 } })

  const cards = (page: Page) => page.locator('main [role="button"]').first()
  const DIALOGS: { name: string; path: string; opener: (page: Page) => ReturnType<Page['locator']> }[] = [
    { name: 'course syllabus', path: '/academy', opener: (page) => page.getByRole('button', { name: /view syllabus/i }).first() },
    { name: 'coach profile', path: '/community', opener: cards },
    { name: 'trophy record', path: '/achievements', opener: cards },
    { name: 'history milestone', path: '/library/history', opener: cards },
  ]

  for (const dialog of DIALOGS) {
    test(`${dialog.name} (${dialog.path})`, async ({ page }) => {
      await setPrefs(page)
      await page.goto(dialog.path)
      await expectDialogFocusFlow(page, dialog.opener(page))
    })
  }
})

test.describe('search and empty states', () => {
  test.use({ viewport: { width: 1280, height: 800 } })

  test('a search with no match shows an empty state, and Reset brings the list back', async ({ page }) => {
    await setPrefs(page)
    await page.goto('/community')
    const search = page.getByLabel('Search coaches and specialties')
    await search.fill('zzzzzzzz')
    await expect(page.getByRole('heading', { name: 'No Coaches Found' })).toBeVisible()
    await page.getByRole('button', { name: /reset filters/i }).click()
    await expect(page.getByRole('heading', { name: 'No Coaches Found' })).toBeHidden()
    await expect(search).toHaveValue('')
  })
})
