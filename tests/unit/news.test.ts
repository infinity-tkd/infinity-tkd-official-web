/**
 * News: reading the announcements, and writing their dates. Run with: npm run test:unit
 */
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { describeImage } from '@/lib/imageUrl'
import { ContentError } from '@/lib/content/validate'
import { NEWS_TEXT_LIMIT, isRealDate, readNews } from '@/lib/news'
import { formatNewsDate } from '@/lib/newsFormat'

const item = (fields: Record<string, unknown>) => ({ title: 'Grading day', date: '2026-12-20', text: 'Belt grading at the Olympic branch.', ...fields })
const read = (...items: Record<string, unknown>[]) => readNews({ items })
const readingFails = (items: Record<string, unknown>[], pattern: RegExp) =>
  assert.throws(() => readNews({ items }), (error: unknown) => error instanceof ContentError && pattern.test(error.message))

describe('isRealDate', () => {
  it('accepts dates that exist, leap days included', () => {
    for (const date of ['2026-11-20', '2028-02-29', '2026-12-31', '2026-01-01']) assert.equal(isRealDate(date), true, date)
  })

  it('refuses dates that do not exist or are not written as YYYY-MM-DD', () => {
    for (const date of ['2026-02-29', '2026-02-31', '2026-13-01', '2026-00-10', '2026-04-31', '2026-1-1', '26-11-20', '20 November 2026', 'tomorrow', '']) {
      assert.equal(isRealDate(date), false, date)
    }
  })
})

describe('readNews', () => {
  it('reads nothing as an empty list: the website then shows no news section', () => {
    assert.deepEqual(readNews({ items: [] }), [])
    assert.deepEqual(readNews({}), [])
    assert.deepEqual(readNews(undefined), [])
  })

  it('reads a headline, a date and a text, and leaves the optional parts out', () => {
    assert.deepEqual(read(item({})), [{ id: 'news-2026-12-20', title: 'Grading day', date: '2026-12-20', text: 'Belt grading at the Olympic branch.' }])
  })

  it('reads the picture, the link and its words, and trims blanks', () => {
    const [announcement] = read(
      item({ image: ' https://drive.google.com/file/d/1a2B3c4D5e6F7g8H9i0JkLmNoPqRsTuVw/view?usp=sharing ', linkUrl: ' /contact ', linkLabel: ' Book now ', text: '  Two lines\nof text  ' })
    )
    assert.equal(announcement.image, 'https://drive.google.com/file/d/1a2B3c4D5e6F7g8H9i0JkLmNoPqRsTuVw/view?usp=sharing')
    assert.equal(announcement.linkUrl, '/contact')
    assert.equal(announcement.linkLabel, 'Book now')
    assert.equal(announcement.text, 'Two lines\nof text')
  })

  it('keeps the picture as pasted, and the picture helper understands a Google Drive share link', () => {
    const [announcement] = read(item({ image: 'https://drive.google.com/file/d/1a2B3c4D5e6F7g8H9i0JkLmNoPqRsTuVw/view?usp=sharing' }))
    const picture = describeImage(announcement.image)
    assert.equal(picture.kind, 'google-drive')
    assert.equal(picture.problem, undefined)
  })

  it('lists the newest first, and the same day by headline, whatever order the editor saved them in', () => {
    const news = read(item({ title: 'Old', date: '2026-01-05' }), item({ title: 'Zeta', date: '2026-12-20' }), item({ title: 'Alpha', date: '2026-12-20' }), item({ title: 'Middle', date: '2026-06-01' }))
    assert.deepEqual(news.map((n) => n.title), ['Alpha', 'Zeta', 'Middle', 'Old'])
  })

  it('gives each announcement an address made from its date, with -2, -3 for more on the same day', () => {
    const news = read(item({ title: 'B', date: '2026-12-20' }), item({ title: 'A', date: '2026-12-20' }), item({ title: 'C', date: '2026-12-20' }), item({ title: 'D', date: '2026-11-01' }))
    assert.deepEqual(news.map((n) => n.id), ['news-2026-12-20', 'news-2026-12-20-2', 'news-2026-12-20-3', 'news-2026-11-01'])
  })

  it('reads the translations: only what was filled in, only the languages that were added', () => {
    const [announcement] = read(
      item({
        translations: [
          { language: 'km', title: 'ថ្ងៃប្រឡង', text: '', linkLabel: '' },
          { language: 'zh', title: '', text: '', linkLabel: '' },
        ],
      })
    )
    assert.deepEqual(announcement.translations, { km: { title: 'ថ្ងៃប្រឡង' } })
  })

  it('says exactly where a wrong value is', () => {
    readingFails([item({}), item({ date: '2026-02-31' })], /content\/news\.json > items\[1\]\.date: "2026-02-31" is not a date like 2026-11-20/)
    readingFails([item({ title: '' })], /items\[0\]\.title: is missing/)
    readingFails([item({ text: '   ' })], /items\[0\]\.text: is missing/)
    readingFails([item({ date: undefined })], /items\[0\]\.date: is missing/)
  })

  it('refuses a link that is not safe in a page, so it can never go live', () => {
    for (const linkUrl of ['javascript:alert(1)', '//evil.example', 'data:text/html,x', 'https://user:pw@evil.example', 'not a link', 'ftp://example.com']) {
      readingFails([item({ linkUrl })], /items\[0\]\.linkUrl: .* cannot be used as a link/)
    }
    for (const linkUrl of ['/contact', '/blog/my-post#top', 'https://example.com/page', 'mailto:hello@example.com', 'tel:+85512345678']) {
      assert.doesNotThrow(() => read(item({ linkUrl })), linkUrl)
    }
  })

  it('accepts a text up to the editor limit and well beyond it (a hand-edited file), but not a whole article', () => {
    assert.doesNotThrow(() => read(item({ text: 'x'.repeat(NEWS_TEXT_LIMIT) })))
    assert.doesNotThrow(() => read(item({ text: 'x'.repeat(900) })))
    readingFails([item({ text: 'x'.repeat(1001) })], /items\[0\]\.text: is 1001 characters long. News is for short announcements/)
  })
})

describe('formatNewsDate', () => {
  it('writes a long date in the visitor language', () => {
    assert.equal(formatNewsDate('2026-11-20', 'en'), '20 November 2026')
    assert.match(formatNewsDate('2026-11-20', 'zh'), /2026年11月20日/)
    assert.match(formatNewsDate('2026-11-20', 'ko'), /2026년 11월 20일/)
    assert.match(formatNewsDate('2026-11-20', 'km'), /2026|២០២៦/)
  })

  it('is the same day in every time zone (noon UTC)', () => {
    const before = process.env.TZ
    try {
      for (const zone of ['Pacific/Kiritimati', 'Pacific/Pago_Pago', 'Asia/Phnom_Penh', 'America/Los_Angeles']) {
        process.env.TZ = zone
        assert.equal(formatNewsDate('2026-03-01', 'en'), '1 March 2026', zone)
      }
    } finally {
      if (before === undefined) delete process.env.TZ
      else process.env.TZ = before
    }
  })

  it('gives back what it was given when it is not a date, never "Invalid Date"', () => {
    assert.equal(formatNewsDate('soon', 'en'), 'soon')
    assert.equal(formatNewsDate('', 'ko'), '')
  })
})
