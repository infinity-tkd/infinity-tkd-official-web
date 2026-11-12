import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { formatPostDate, type BlogPostMeta } from '@/lib/blog'

interface PostCardProps {
  post: BlogPostMeta
  /** Large horizontal layout used for the lead story. */
  featured?: boolean
  /** Mark the cover as the LCP image (first card on the page). */
  priority?: boolean
  /** Title level: 2 when the cards sit straight under the page h1, 3 under a section h2. */
  headingLevel?: 2 | 3
}

function CoverImage({ post, priority, sizes }: { post: BlogPostMeta; priority?: boolean; sizes: string }) {
  if (!post.cover) {
    // No cover photo: branded fallback so text-only posts still look intentional.
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center overflow-hidden bg-zinc-100 dark:bg-zinc-900"
      >
        {/* A faint watermark: CSS-generated, so it is decoration rather than text to read. */}
        <span
          data-glyph="태권도"
          className="select-none text-6xl sm:text-7xl font-black tracking-tighter text-zinc-300 dark:text-zinc-800 before:content-[attr(data-glyph)]"
        />
      </div>
    )
  }
  return (
    <Image
      src={post.cover.src}
      alt={post.cover.alt}
      fill
      sizes={sizes}
      priority={priority}
      quality={70}
      className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03] motion-reduce:transition-none"
    />
  )
}

export function PostCard({ post, featured = false, priority = false, headingLevel = 3 }: PostCardProps) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  return (
    <article
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40',
        'transition-[transform,border-color] duration-300 ease-out-expo hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0',
        featured ? 'grid lg:grid-cols-2' : 'flex flex-col h-full'
      )}
    >
      <div
        className={cn(
          'relative overflow-hidden bg-zinc-200 dark:bg-zinc-800',
          featured ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[360px]' : 'aspect-[16/10]'
        )}
      >
        <CoverImage
          post={post}
          priority={priority}
          sizes={featured ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'}
        />
        <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-lg bg-brand-red text-white text-[11px] font-bold uppercase tracking-widest">
          {post.category}
        </span>
      </div>

      <div className={cn('flex flex-col flex-1', featured ? 'p-6 sm:p-8 lg:p-10 justify-center' : 'p-5 sm:p-6')}>
        <div className="flex items-center gap-3 text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-3">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          <span aria-hidden="true">•</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3 h-3" aria-hidden="true" />
            {post.readingMinutes} min read
          </span>
        </div>

        <Heading
          className={cn(
            'font-black uppercase tracking-tight leading-tight text-zinc-900 dark:text-white group-hover:text-brand-red transition-colors',
            featured ? 'text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4' : 'text-lg sm:text-xl mb-2'
          )}
        >
          {/* The stretched ::after makes the whole card one link target. */}
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            {post.title}
          </Link>
        </Heading>

        <p
          className={cn(
            'leading-relaxed text-zinc-600 dark:text-zinc-400',
            featured ? 'text-base sm:text-lg line-clamp-4' : 'text-sm line-clamp-3'
          )}
        >
          {post.description}
        </p>

        <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-red">
          Read article
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </article>
  )
}
