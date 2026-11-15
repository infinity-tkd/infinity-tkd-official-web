import { expect, test, type Page, type Route } from '@playwright/test'
import { setPrefs } from './helpers'

interface FormUnderTest {
  name: string
  path: string
  endpoint: string
  /** Fills every required field with valid values. */
  fill: (page: Page) => Promise<void>
  /** The field that must hold a real email address. */
  email: string
}

const FORMS: FormUnderTest[] = [
  {
    name: 'contact',
    path: '/contact',
    endpoint: '/api/contact',
    email: '#contact-email',
    fill: async (page) => {
      await page.locator('#contact-name').fill('Test Student')
      await page.locator('#contact-email').fill('student@example.com')
      await page.locator('#contact-message').fill('Hello, I would like to book a free trial class.')
    },
  },
  {
    name: 'join the team',
    path: '/join-team',
    endpoint: '/api/join-team',
    email: '#join-email',
    fill: async (page) => {
      await page.locator('#join-name').fill('Master Test')
      await page.locator('#join-phone').fill('+855 12 345 678')
      await page.locator('#join-email').fill('coach@example.com')
      await page.locator('#join-why').fill('Fifteen years of coaching poomsae and kyorugi at club and national level.')
    },
  },
  {
    name: 'incubator',
    path: '/incubator',
    endpoint: '/api/incubator',
    email: '#incubator-email',
    fill: async (page) => {
      await page.locator('#incubator-name').fill('Test Student')
      await page.locator('#incubator-belt').fill('Green Belt')
      await page.locator('#incubator-phone').fill('+855 12 345 678')
      await page.locator('#incubator-email').fill('student@example.com')
      await page.locator('#incubator-summary').fill('A short film about training for the first black belt test.')
    },
  },
]

/** Intercepts the form's API endpoint, counting the calls that reach it. */
async function mockApi(page: Page, endpoint: string, respond: (route: Route) => Promise<void>) {
  const state = { calls: 0 }
  await page.route(`**${endpoint}`, async (route) => {
    state.calls++
    await respond(route)
  })
  return state
}

const submitButton = (page: Page) => page.locator('form button[type="submit"]')
// The form's own error message (Next also keeps an empty route announcer with role=alert on every page).
const formAlert = (page: Page) => page.locator('form [role="alert"]')

test.use({ viewport: { width: 1280, height: 800 } })

for (const form of FORMS) {
  test.describe(`${form.name} form`, () => {
    test.beforeEach(async ({ page }) => {
      await setPrefs(page)
      await page.goto(form.path)
    })

    test('an empty form is blocked before anything is sent', async ({ page }) => {
      const api = await mockApi(page, form.endpoint, (route) => route.fulfill({ json: { success: true } }))
      await submitButton(page).click()
      await page.waitForTimeout(400)
      expect(api.calls).toBe(0)
      await expect(page.locator('input:invalid, textarea:invalid').first()).toBeVisible()
    })

    test('a malformed email is blocked before anything is sent', async ({ page }) => {
      const api = await mockApi(page, form.endpoint, (route) => route.fulfill({ json: { success: true } }))
      await form.fill(page)
      await page.locator(form.email).fill('not-an-email')
      await submitButton(page).click()
      await page.waitForTimeout(400)
      expect(api.calls).toBe(0)
      await expect(page.locator(`${form.email}:invalid`)).toHaveCount(1)
    })

    test('a successful send shows the confirmation', async ({ page }) => {
      const api = await mockApi(page, form.endpoint, (route) => route.fulfill({ json: { success: true, message: 'Sent.' } }))
      await form.fill(page)
      await submitButton(page).click()
      await expect(submitButton(page)).toBeHidden()
      expect(api.calls).toBe(1)
    })

    test('a server error is explained and the form stays usable', async ({ page }) => {
      await mockApi(page, form.endpoint, (route) =>
        route.fulfill({ status: 502, json: { error: 'We could not deliver your message right now. Please reach us on WhatsApp or by phone instead.' } })
      )
      await form.fill(page)
      await submitButton(page).click()
      await expect(formAlert(page)).toBeVisible()
      await expect(submitButton(page)).toBeEnabled()
      await expect(page.locator(form.email)).toHaveValue(/@/)
    })

    test('a network failure is explained and the form stays usable', async ({ page }) => {
      await mockApi(page, form.endpoint, (route) => route.abort('failed'))
      await form.fill(page)
      await submitButton(page).click()
      await expect(formAlert(page)).toBeVisible()
      await expect(submitButton(page)).toBeEnabled()
    })

    test('a double click sends only once', async ({ page }) => {
      const api = await mockApi(page, form.endpoint, async (route) => {
        await new Promise((resolve) => setTimeout(resolve, 700))
        await route.fulfill({ json: { success: true } })
      })
      await form.fill(page)
      await submitButton(page).dblclick()
      await page.waitForTimeout(1200)
      expect(api.calls).toBe(1)
    })
  })
}
