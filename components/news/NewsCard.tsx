import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { NewsPicture } from '@/components/news/NewsPicture'
import type { NewsItem } from '@/lib/news'
import { isInternalHref, isSafeHref } from '@/lib/safeHref'

export interface NewsCardProps {
  item: NewsItem
  /** The date written for the visitor's language ("20 November 2026"). */
  dateLabel: string
  /** The words on the link when the announcement gives none ("Read more"). */
  readMore: string
  /** Said to screen readers for a link to another website, which opens in a new tab. */
  newTab: string
  /** 2 when the cards sit straight under the page's h1, 3 under a section's h2. */
  headingLevel?: 2 | 3
}

const LINK_CLASS = 'mt-4 inline-flex min-h-[44px] items-center gap-2 self-start text-xs font-bold uppercase tracking-widest text-brand-red hover:underline touch-press'

/** The announcement's link. An address that is not safe in a page (lib/safeHref.ts) is never shown as a link. */
function NewsLink({ href, label, newTab }: { href: string; label: string; newTab: string }) {
  if (!isSafeHref(href)) return null
  if (isInternalHref(href) && !href.startsWith('#')) {
    return (
      <Link href={href} className={LINK_CLASS}>
        {label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    )
  }
  const otherSite = /^https?:/i.test(href)
  return (
    <a href={href} {...(otherSite ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className={LINK_CLASS}>
      {label}
      {otherSite ? <ExternalLink className="h-4 w-4" aria-hidden="true" /> : <ArrowRight className="h-4 w-4" aria-hidden="true" />}
      {otherSite && <span className="sr-only"> {newTab}</span>}
    </a>
  )
}

/** One short announcement: an optional picture, the date, the headline, the text and an optional link. */
export function NewsCard({ item, dateLabel, readMore, newTab, headingLevel = 3 }: NewsCardProps) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  return (
    <article
      id={item.id}
      className="flex h-full scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/40"
    >
      {/* Decorative: the headline right below says what this is about. A picture that cannot be shown leaves no box (NewsPicture). */}
      {item.image && <NewsPicture key={item.image} src={item.image} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <time dateTime={item.date} className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          {dateLabel}
        </time>
        <Heading className="mb-2 break-words text-lg font-black uppercase leading-tight tracking-tight text-zinc-900 sm:text-xl dark:text-white">{item.title}</Heading>
        <p className="whitespace-pre-line break-words text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.text}</p>
        {item.linkUrl && <NewsLink href={item.linkUrl} label={item.linkLabel ?? readMore} newTab={newTab} />}
      </div>
    </article>
  )
}
