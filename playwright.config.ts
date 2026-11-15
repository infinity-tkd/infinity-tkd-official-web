import { defineConfig } from '@playwright/test'

/**
 * End-to-end and regression tests. They run against a production build, because that is what visitors get
 * (and the service worker only registers there):
 *
 *   npm run build
 *   npm run test:e2e              routes, accessibility, interactions, forms, PWA
 *   npm run test:visual:update    capture reference screenshots before a change (kept local, not committed)
 *   npm run test:visual           compare against them after the change
 *
 * Without PLAYWRIGHT_BASE_URL a server is started on port 3100. The tests drive the installed Google Chrome;
 * set PW_CHANNEL= (empty) to use Playwright's own Chromium instead (`npx playwright install chromium`).
 */
const port = 3100
const external = process.env.PLAYWRIGHT_BASE_URL
const baseURL = external ?? `http://localhost:${port}`
const channel = process.env.PW_CHANNEL === undefined ? 'chrome' : process.env.PW_CHANNEL || undefined

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 45_000,
  expect: { timeout: 8_000 },
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : 4,
  reporter: [['list'], ['html', { open: 'never' }]],
  snapshotPathTemplate: '{testDir}/__screenshots__/{projectName}/{arg}{ext}',
  use: { baseURL, channel, trace: 'retain-on-failure', screenshot: 'only-on-failure' },
  projects: [
    { name: 'e2e', testIgnore: /visual\.spec\.ts/ },
    { name: 'visual', testMatch: /visual\.spec\.ts/ },
  ],
  webServer: external
    ? undefined
    : { command: `npm run start -- -p ${port}`, url: baseURL, reuseExistingServer: true, timeout: 90_000 },
})
