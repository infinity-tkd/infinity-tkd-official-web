import { expect, test } from '@playwright/test'
import { scrollThrough, setPrefs } from './helpers'

/**
 * Nothing may be cut off at the screen edge.
 *
 * A page whose outer wrapper hides sideways overflow never scrolls sideways, so the "sideways scrolling" check in
 * routes.spec.ts passes even when a row is wider than the screen and is simply clipped at both edges. That happens
 * between the phone and desktop layouts: a row that fits at one breakpoint is too wide for the widths just after
 * the next one starts. (The two billing switches on /pricing sat side by side from 640px, needed about 760px, and
 * were cut off between those widths.) On phones the usual cause is a grid with no base column template: its single
 * implicit column grows to the widest line that cannot wrap, so a card ends up wider than the screen. So this test
 * looks at small phones, at the widths around every Tailwind breakpoint, and at one page per library template.
 */
const WIDTHS = [320, 360, 375, 390, 414, 430, 600, 640, 700, 768, 820, 1023, 1024, 1280]
const PAGES = [
  '/',
  '/about',
  '/academy',
  '/belt-journey',
  '/pricing',
  '/locations',
  '/contact',
  '/collaborations',
  '/community',
  '/achievements',
  '/news',
  '/library',
  '/library/poomsae',
  '/library/poomsae/taegeuk-1-il-jang',
  '/library/kicking-fundamentals',
  '/library/kicking-fundamentals/front-kick-ap-chagi',
  '/library/hosinsul',
  '/library/competition-rules/world-kyorugi-scoring-system-points',
  '/library/history/ancient-korean-martial-origins-subak-taekkyeon',
]

/** Visible text or controls that stick out past an overflow-hidden wrapper that reaches the screen edge. */
function findCutOff(): string[] {
  const vw = document.documentElement.clientWidth
  const found: string[] = []
  const opacityOf = (element: Element) => {
    let opacity = 1
    for (let node: Element | null = element; node && opacity > 0.05; node = node.parentElement) opacity *= parseFloat(getComputedStyle(node).opacity)
    return opacity
  }
  const controls = 'a[href], button, input, select, textarea, summary, [role="tab"], img'
  for (const element of document.body.querySelectorAll(`${controls}, h1, h2, h3, h4, p, li, label, span`)) {
    const box = element.getBoundingClientRect()
    if (box.width <= 1 || box.height <= 1 || (box.left >= -1 && box.right <= vw + 1)) continue
    const hasText = [...element.childNodes].some((node) => node.nodeType === 3 && (node.textContent ?? '').trim())
    const style = getComputedStyle(element)
    if (!(hasText || element.matches(controls)) || style.position === 'fixed' || style.visibility === 'hidden') continue
    if (element.closest('[aria-hidden="true"], [hidden], [inert]') || opacityOf(element) < 0.1) continue
    // The nearest ancestor that clips sideways overflow; a row the visitor can scroll is fine.
    let clipper: Element | null = null
    let scrolls = false
    for (let node = element.parentElement; node && node !== document.body; node = node.parentElement) {
      const overflowX = getComputedStyle(node).overflowX
      if (overflowX === 'visible') continue
      if ((overflowX === 'auto' || overflowX === 'scroll') && node.scrollWidth > node.clientWidth + 1) {
        scrolls = true
        break
      }
      if (!clipper) clipper = node
    }
    if (scrolls || !clipper) continue
    const clip = clipper.getBoundingClientRect()
    if ((box.left < clip.left - 1 && clip.left <= 1) || (box.right > clip.right + 1 && clip.right >= vw - 1)) {
      const label = (element.getAttribute('aria-label') || element.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 30)
      found.push(`${element.tagName.toLowerCase()} "${label}" spans ${Math.round(box.left)}..${Math.round(box.right)} on a ${vw}px screen`)
    }
  }
  return found
}

for (const width of WIDTHS) {
  test.describe(`nothing is cut off at the screen edge @${width}px`, () => {
    test.use({ viewport: { width, height: 800 } })

    for (const path of PAGES) {
      test(path, async ({ page }) => {
        await setPrefs(page)
        await page.goto(path)
        await scrollThrough(page)
        // Reveal animations may still be moving elements; wait for them to settle before judging.
        await expect.poll(() => page.evaluate(findCutOff), { message: `${path} at ${width}px` }).toEqual([])
      })
    }
  })
}
