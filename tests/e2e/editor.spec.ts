import { expect, test, type Route } from '@playwright/test'

/**
 * The content editor at /keystatic is for the team only. It must stay out of search results and the sitemap,
 * offer nothing without a login, and never lend its wider Content-Security-Policy to the public pages.
 * (A server without the editor's GitHub settings shows "not set up yet"; one with them shows the login. Both are fine here.)
 */
test.describe('content editor', () => {
  test('is blocked in robots.txt and is not in the sitemap', async ({ request, baseURL }) => {
    const robots = await (await request.get(`${baseURL}/robots.txt`)).text()
    expect(robots).toMatch(/^Disallow: \/keystatic$/m)
    const sitemap = await (await request.get(`${baseURL}/sitemap.xml`)).text()
    expect(sitemap).not.toContain('keystatic')
  })

  test('is marked noindex and does not show the site menus or footer', async ({ page }) => {
    const response = await page.goto('/keystatic')
    expect(response?.status()).toBe(200)
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/)
    await expect(page.locator('#main-content'), "the website's own <main> is not on the editor page").toHaveCount(0)
    await expect(page.locator('footer')).toHaveCount(0)
    await expect(page.getByText(/not set up yet|Log in with GitHub/).first()).toBeVisible()
  })

  test('carries the Infinity Taekwondo logo', async ({ page }) => {
    await page.goto('/keystatic')
    const logo = page.getByRole('img', { name: 'Infinity Taekwondo' }).first()
    await expect(logo).toBeVisible()
    const box = await logo.boundingBox()
    expect(box?.width, 'the mark is drawn at a visible size').toBeGreaterThanOrEqual(20)
  })

  test('has an API that offers and accepts nothing without a login', async ({ request, baseURL }) => {
    // 503 = not set up, 404 = GitHub mode (there is no file API at all): never 200.
    for (const path of ['/api/keystatic/tree', '/api/keystatic/blob/abc/content/pricing.json']) {
      expect([401, 403, 404, 503], path).toContain((await request.get(`${baseURL}${path}`)).status())
    }
    const write = await request.post(`${baseURL}/api/keystatic/update`, { data: {} })
    expect([401, 403, 404, 503], 'a write without a login').toContain(write.status())
  })

  test('has its own Content-Security-Policy and does not lend it to public pages', async ({ request, baseURL }) => {
    const editor = (await request.get(`${baseURL}/keystatic`)).headers()['content-security-policy'] ?? ''
    const home = (await request.get(`${baseURL}/`)).headers()['content-security-policy'] ?? ''
    expect(editor).toContain('connect-src')
    expect(editor).toContain('https://api.github.com')
    expect(editor).toContain('https://raw.githubusercontent.com')
    expect(home).not.toContain('https://api.github.com')
    expect(home).not.toContain('raw.githubusercontent.com')
    expect(home).toContain("img-src 'self' data: blob: https:")
    for (const csp of [editor, home]) expect(csp).toContain("frame-ancestors 'none'")
  })

  test('lets the editor page read the project files from GitHub in a real browser, and nothing from other hosts', async ({ page }) => {
    // GitHub is answered by the test itself, so no real request leaves this computer. A request that the page's own
    // security policy forbids never reaches these handlers: the fetch just fails ("Failed to fetch" in the editor).
    const answer = (route: Route) =>
      route.fulfill({ status: 200, contentType: 'application/json', headers: { 'access-control-allow-origin': '*' }, body: '{}' })
    for (const host of ['raw.githubusercontent.com', 'api.github.com', 'example.org']) await page.route(`https://${host}/**`, answer)
    await page.goto('/keystatic')
    const status = (url: string) => page.evaluate((address) => fetch(address).then((response) => response.status, () => 'blocked'), url)
    // While the GitHub project is public, Keystatic reads its files from raw.githubusercontent.com; saving goes through the API.
    expect(await status('https://raw.githubusercontent.com/infinity-tkd/example/0123abc/content/schedule.json')).toBe(200)
    expect(await status('https://api.github.com/graphql')).toBe(200)
    expect(await status('https://example.org/anything'), 'any other host stays blocked').toBe('blocked')
  })
})
