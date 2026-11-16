/**
 * The announcements shown on the home page and on /news. They live in content/news.json, which the content editor
 * (/keystatic) saves; lib/news.ts reads and checks that file, so a wrong value stops the build with a message that
 * names the file, the place inside it and the problem.
 */
import raw from '../content/news.json' with { type: 'json' }
import { readNews } from '@/lib/news'

export type { NewsItem } from '@/lib/news'

/** Newest first. Empty until someone adds an announcement: the home page then shows no news section at all. */
export const newsItems = readNews(raw)
