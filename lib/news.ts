/**
 * News: short announcements (a grading date, a holiday closure, an event) shown on the home page and on /news.
 *
 * Reads and checks content/news.json, which the content editor (/keystatic) saves. Pure (no files, no Next.js) so
 * `npm run check:data`, the unit tests and the pages all use the same reader; data/news.ts hands it the file.
 *
 * An announcement is a headline, a date, a short text, and optionally a picture and a link. The picture can be any
 * link the picture helper understands (Google Drive share links included, lib/imageUrl.ts). The link can only be one
 * that is safe in a page (lib/safeHref.ts). Khmer, Chinese and Korean versions of the headline, the text and the link
 * words are optional; anything left out is shown in English.
 */
import { compact, file, translationsOf } from '@/lib/content/validate'
import { isSafeHref } from '@/lib/safeHref'

/** The longest text the editor lets someone save. */
export const NEWS_TEXT_LIMIT = 400
/** The longest text the website still accepts (a hand-edited file); beyond this it is not a short announcement. */
const NEWS_TEXT_HARD_LIMIT = 1000

export interface NewsItem {
  /** Made from the date ("news-2026-11-20", then "-2", "-3" for more on the same day): a stable address for the card. */
  id: string
  title: string
  /** YYYY-MM-DD */
  date: string
  text: string
  image?: string
  linkUrl?: string
  /** The words on the link; the page says "Read more" when there are none. */
  linkLabel?: string
  translations?: {
    km?: Partial<Pick<NewsItem, 'title' | 'text' | 'linkLabel'>>
    zh?: Partial<Pick<NewsItem, 'title' | 'text' | 'linkLabel'>>
    ko?: Partial<Pick<NewsItem, 'title' | 'text' | 'linkLabel'>>
  }
}

/** True for a date that exists: 2026-02-28 yes, 2026-02-31 and 2026-13-01 no. */
export function isRealDate(value: string): boolean {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)
  if (!match) return false
  const [year, month, day] = [Number(match[1]), Number(match[2]), Number(match[3])]
  const date = new Date(Date.UTC(year, month - 1, day))
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day
}

/** Reads the announcements of a content file, newest first (same day: by headline). Throws a ContentError that names the problem. */
export function readNews(value: unknown, fileName = 'content/news.json'): NewsItem[] {
  const items = file(fileName, value)
    .get('items')
    .items()
    .map((item): Omit<NewsItem, 'id'> => {
      const dateNode = item.get('date')
      const date = dateNode.text()
      if (!isRealDate(date)) dateNode.fail(`"${date}" is not a date like 2026-11-20`)

      const textNode = item.get('text')
      const text = textNode.text()
      if (text.length > NEWS_TEXT_HARD_LIMIT) textNode.fail(`is ${text.length} characters long. News is for short announcements (up to ${NEWS_TEXT_LIMIT}); write a blog post for more`)

      const linkNode = item.get('linkUrl')
      const linkUrl = linkNode.optionalText()
      if (linkUrl && !isSafeHref(linkUrl)) {
        linkNode.fail(`"${linkUrl}" cannot be used as a link. Use a page of this website like /contact, or an address that starts with https://, mailto: or tel:`)
      }

      return compact({
        title: item.get('title').text(),
        date,
        text,
        image: item.get('image').optionalText(),
        linkUrl,
        linkLabel: item.get('linkLabel').optionalText(),
        translations: translationsOf(item.get('translations'), { title: 'text', text: 'text', linkLabel: 'text' }) as NewsItem['translations'],
      })
    })

  items.sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title))

  const perDay = new Map<string, number>()
  return items.map((item) => {
    const count = (perDay.get(item.date) ?? 0) + 1
    perDay.set(item.date, count)
    return { id: count === 1 ? `news-${item.date}` : `news-${item.date}-${count}`, ...item }
  })
}
