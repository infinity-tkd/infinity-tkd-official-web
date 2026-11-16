import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { expect, test } from '@playwright/test'
import { LatestNewsSection, HOME_NEWS_COUNT } from '@/components/home/LatestNews'
import { NewsCard } from '@/components/news/NewsCard'
import { NewsGrid } from '@/components/news/NewsList'
import type { NewsItem } from '@/lib/news'
import { getLocalizedList } from '@/lib/i18n'

/**
 * What an announcement turns into on the page, rendered on the server (no browser needed): the card, the list on
 * /news, the section on the home page, and the fallback to English for the languages that were not translated.
 */
const ITEM: NewsItem = { id: 'news-2026-11-20', title: 'Grading day', date: '2026-11-20', text: 'Belt grading at the Olympic branch.' }
const LABELS = { readMore: 'Read more', newTab: '(opens in a new tab)', emptyTitle: 'No announcements right now', emptyText: 'Check back soon.' }
const HOME_LABELS = { eyebrow: 'News & Announcements', title: "What's new at the dojang", viewAll: 'All news', readMore: 'Read more', newTab: '(opens in a new tab)' }

const card = (item: Partial<NewsItem> = {}, props: Partial<React.ComponentProps<typeof NewsCard>> = {}) =>
  renderToStaticMarkup(<NewsCard item={{ ...ITEM, ...item }} dateLabel="20 November 2026" readMore="Read more" newTab="(opens in a new tab)" {...props} />)

test.describe('the card', () => {
  test('shows the date, the headline and the text, and has an address of its own', () => {
    const markup = card()
    expect(markup).toContain('<article id="news-2026-11-20"')
    expect(markup).toContain('<time dateTime="2026-11-20"')
    expect(markup).toContain('>20 November 2026</time>')
    expect(markup).toContain('>Grading day</h3>')
    expect(markup).toContain('Belt grading at the Olympic branch.')
  })

  test('a heading level can be chosen, and lines the editor typed stay lines', () => {
    expect(card({}, { headingLevel: 2 })).toContain('>Grading day</h2>')
    expect(card({ text: 'First line\nSecond line' })).toMatch(/class="[^"]*whitespace-pre-line[^"]*">First line\nSecond line<\/p>/)
  })

  test('without a picture there is no image box at all; with one there is a decorative image', () => {
    expect(card()).not.toContain('<img')
    const withPicture = card({ image: '/uploads/news/grading-3fa9c1.jpg' })
    expect(withPicture).toContain('<img')
    expect(withPicture).toContain('src="/uploads/news/grading-3fa9c1.jpg"')
    expect(withPicture).toContain('alt=""')
  })

  test('a Google Drive share link works as the picture, through the image optimizer', () => {
    const markup = card({ image: 'https://drive.google.com/file/d/1a2B3c4D5e6F7g8H9i0JkLmNoPqRsTuVw/view?usp=sharing' }).replaceAll('&amp;', '&')
    expect(markup).toContain('/_next/image?url=')
    expect(markup).toContain(encodeURIComponent('https://drive.google.com/thumbnail?id=1a2B3c4D5e6F7g8H9i0JkLmNoPqRsTuVw&sz=w1600'))
  })

  test('a page of this website is a normal link with the default words', () => {
    const markup = card({ linkUrl: '/contact?subject=Free%20Trial' })
    expect(markup).toContain('href="/contact?subject=Free%20Trial"')
    expect(markup).toContain('Read more')
    expect(markup).not.toContain('target=')
  })

  test('another website opens in a new tab, safely, and says so; the announcement can set the words', () => {
    const markup = card({ linkUrl: 'https://example.com/rules', linkLabel: 'See the rules' })
    expect(markup).toContain('href="https://example.com/rules"')
    expect(markup).toContain('target="_blank" rel="noopener noreferrer"')
    expect(markup).toContain('See the rules')
    expect(markup).toContain('(opens in a new tab)')
  })

  test('mailto and tel are links that do not open a new tab', () => {
    for (const linkUrl of ['mailto:hello@example.com', 'tel:+85512345678']) {
      const markup = card({ linkUrl })
      expect(markup).toContain(`href="${linkUrl}"`)
      expect(markup).not.toContain('target=')
    }
  })

  test('an address that is not safe is never a link, even if a file was edited by hand', () => {
    for (const linkUrl of ['javascript:alert(1)', '//evil.example', 'data:text/html,x', 'https://user:pw@evil.example']) {
      const markup = card({ linkUrl })
      expect(markup, linkUrl).not.toContain('<a ')
      expect(markup, linkUrl).not.toContain('href=')
    }
  })

  test('nothing in an announcement is trusted as HTML', () => {
    const markup = card({ title: '<script>alert(1)</script>', text: '<img src=x onerror=alert(2)>', linkUrl: '/contact', linkLabel: '<b>bold</b>' })
    expect(markup).not.toContain('<script')
    expect(markup).not.toContain('<img')
    expect(markup).not.toContain('<b>')
    expect(markup).toContain('&lt;script&gt;')
  })
})

test.describe('the news page list', () => {
  test('shows a friendly message when there are no announcements', () => {
    const markup = renderToStaticMarkup(<NewsGrid items={[]} language="en" labels={LABELS} />)
    expect(markup).toContain('No announcements right now')
    expect(markup).toContain('Check back soon.')
    expect(markup).not.toContain('<article')
  })

  test('lists every announcement in the order given, under the page heading, with dates in the visitor language', () => {
    const items: NewsItem[] = [ITEM, { ...ITEM, id: 'news-2026-10-01', title: 'Holiday closure', date: '2026-10-01', text: 'Closed for Pchum Ben.' }]
    const english = renderToStaticMarkup(<NewsGrid items={items} language="en" labels={LABELS} />)
    expect((english.match(/<article/g) ?? []).length).toBe(2)
    expect(english.indexOf('Grading day')).toBeLessThan(english.indexOf('Holiday closure'))
    expect(english).toContain('>20 November 2026</time>')
    expect(english).toContain('>Grading day</h2>')
    const korean = renderToStaticMarkup(<NewsGrid items={items} language="ko" labels={LABELS} />)
    expect(korean).toContain('2026년 11월 20일')
  })
})

test.describe('the home page section', () => {
  const many = (count: number): NewsItem[] =>
    Array.from({ length: count }, (_, i) => ({ ...ITEM, id: `news-2026-11-${20 - i}`, title: `Announcement ${i + 1}`, date: `2026-11-${String(20 - i).padStart(2, '0')}` }))

  test('shows nothing at all when there is no announcement', () => {
    expect(renderToStaticMarkup(<LatestNewsSection items={[]} language="en" labels={HOME_LABELS} />)).toBe('')
  })

  test('shows the latest few, a heading, and a link to all of them', () => {
    const markup = renderToStaticMarkup(<LatestNewsSection items={many(5)} language="en" labels={HOME_LABELS} />)
    expect(HOME_NEWS_COUNT).toBe(3)
    expect((markup.match(/<article/g) ?? []).length).toBe(3)
    expect(markup).toContain('Announcement 1')
    expect(markup).toContain('Announcement 3')
    expect(markup).not.toContain('Announcement 4')
    expect(markup).toContain("What&#x27;s new at the dojang")
    expect(markup).toMatch(/<a [^>]*href="\/news"[^>]*>All news/)
  })

  test('shows one announcement when there is one', () => {
    expect((renderToStaticMarkup(<LatestNewsSection items={many(1)} language="en" labels={HOME_LABELS} />).match(/<article/g) ?? []).length).toBe(1)
  })
})

test.describe('four languages, English where nothing was translated', () => {
  const item: NewsItem = {
    ...ITEM,
    linkUrl: '/contact',
    translations: { km: { title: 'ថ្ងៃប្រឡង', text: 'ការប្រឡងខ្សែក្រវាត់។' }, zh: { title: '升带考核日' } },
  }

  test('a translated field is used, and every other field stays English', () => {
    const [km] = getLocalizedList([item], 'km')
    expect([km.title, km.text, km.linkUrl, km.date]).toEqual(['ថ្ងៃប្រឡង', 'ការប្រឡងខ្សែក្រវាត់។', '/contact', '2026-11-20'])
    const [zh] = getLocalizedList([item], 'zh')
    expect([zh.title, zh.text]).toEqual(['升带考核日', 'Belt grading at the Olympic branch.'])
  })

  test('a language with no translation shows the English announcement unchanged', () => {
    const [ko] = getLocalizedList([item], 'ko')
    expect([ko.title, ko.text]).toEqual(['Grading day', 'Belt grading at the Olympic branch.'])
    expect(getLocalizedList([item], 'en')[0]).toBe(item)
  })
})
