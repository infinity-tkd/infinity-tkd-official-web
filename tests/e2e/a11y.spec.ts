import axe from 'axe-core'
import { expect, test } from '@playwright/test'
import { setPrefs } from './helpers'

// WCAG 2.2 AA (plus axe's best practices) on representative pages, in both themes. Animations are off so
// colours are measured at rest.
const PAGES = [
  '/',
  '/about',
  '/academy',
  '/belt-journey',
  '/library',
  '/library/poomsae',
  '/library/poomsae/taegeuk-1-il-jang',
  '/library/competition-rules',
  '/library/history',
  '/pricing',
  '/contact',
  '/community',
  '/blog',
  '/blog/poomsae-vs-kyorugi',
  '/incubator',
  '/safeguarding',
]

test.use({ reducedMotion: 'reduce', viewport: { width: 1280, height: 800 } })

for (const theme of ['light', 'dark'] as const) {
  for (const path of PAGES) {
    test(`${path} (${theme})`, async ({ page }) => {
      await setPrefs(page, { theme })
      await page.goto(path)
      await page.waitForLoadState('load')
      // Lazy sections show a "Loading ..." placeholder first (briefly in a half-faded state); judge the page once
      // the real content has arrived.
      await page.waitForFunction(() => !/Loading[^\n]*\.\.\./.test(document.body.innerText), undefined, { timeout: 15_000 })
      await page.evaluate(axe.source)
      const violations = await page.evaluate(async () => {
        const axeApi = (window as unknown as { axe: typeof import('axe-core') }).axe
        const result = await axeApi.run(document, {
          runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'] },
          resultTypes: ['violations'],
        })
        return result.violations.map((violation) => ({
          rule: violation.id,
          impact: violation.impact,
          nodes: violation.nodes.slice(0, 3).map((node) => node.target.join(' ')),
        }))
      })
      expect(violations, JSON.stringify(violations, null, 2)).toEqual([])
    })
  }
}
