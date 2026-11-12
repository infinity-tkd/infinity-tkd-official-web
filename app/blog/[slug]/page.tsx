import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, ChevronRight, Clock, UserRound } from 'lucide-react'
import { MarkdownContent } from '@/components/blog/MarkdownContent'
import { PostCard } from '@/components/blog/PostCard'
import { ShareButtons } from '@/components/blog/ShareButtons'
import { TableOfContents } from '@/components/blog/TableOfContents'
import { CtaBanner } from '@/components/ui/CtaBanner'
import { formatPostDate, getAllPosts, getPostBySlug, getRelatedPosts, toMeta } from '@/lib/blog'
import { buildArticleJsonLd, buildBreadcrumbJsonLd, jsonLdString } from '@/lib/structuredData'
import { siteSettings } from '@/config/siteSettings'

// Unknown slugs 404 immediately instead of rendering on demand.
export const dynamicParams = false

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Article not found' }

  const path = `/blog/${post.slug}`
  const image = post.cover?.src ?? '/opengraph-image'

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    keywords: post.tags,
    alternates: { canonical: path },
    openGraph: {
      title: `${post.title} | Infinity Taekwondo`,
      description: post.description,
      url: path,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
      images: [{ url: image, alt: post.cover?.alt ?? post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [image],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const meta = toMeta(post)
  const related = getRelatedPosts(meta, 3)
  const path = `/blog/${post.slug}`
  const absoluteUrl = `${siteSettings.brand.canonicalDomain}${path}`

  const jsonLd = [
    buildArticleJsonLd({
      title: post.title,
      description: post.description,
      path,
      image: post.cover?.src,
      publishedAt: post.date,
      updatedAt: post.updated,
      author: post.author,
      section: post.category,
      keywords: post.tags,
    }),
    buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: post.title, path },
    ]),
  ]

  const hasToc = post.headings.length >= 3

  return (
    <div className="bg-white dark:bg-black text-zinc-900 dark:text-white">
      {jsonLd.map((data, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(data) }} />
      ))}

      <article className="pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
            <Link href="/" className="inline-flex min-h-[32px] items-center transition-colors hover:text-zinc-900 dark:hover:text-white">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
            <Link href="/blog" className="inline-flex min-h-[32px] items-center transition-colors hover:text-zinc-900 dark:hover:text-white">
              Blog
            </Link>
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
            <Link
              href={`/blog/category/${post.categorySlug}`}
              className="inline-flex min-h-[32px] items-center transition-colors hover:text-zinc-900 dark:hover:text-white"
            >
              {post.category}
            </Link>
          </nav>

          {/* Header */}
          <header className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.02] text-zinc-900 dark:text-white break-words">
              {post.title}
            </h1>
            <p className="mt-5 text-lg sm:text-xl font-light leading-relaxed text-zinc-600 dark:text-zinc-400">{post.description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
              <span className="inline-flex items-center gap-1.5 font-medium text-zinc-700 dark:text-zinc-300">
                <UserRound className="w-4 h-4 text-zinc-400" aria-hidden="true" />
                {post.author}
              </span>
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              {post.updated && post.updated !== post.date && (
                <span>Updated {formatPostDate(post.updated)}</span>
              )}
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" aria-hidden="true" />
                {post.readingMinutes} min read
              </span>
            </div>
          </header>

          {/* Cover */}
          {post.cover && (
            <div className="relative mt-8 sm:mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-900">
              <Image
                src={post.cover.src}
                alt={post.cover.alt}
                fill
                priority
                sizes="(min-width: 1024px) 1024px, 100vw"
                quality={75}
                className="object-cover"
              />
            </div>
          )}

          {/* Body + sticky contents */}
          <div className="mt-10 sm:mt-14 grid gap-8 lg:gap-14 lg:grid-cols-[minmax(0,1fr)_240px]">
            {hasToc && (
              <>
                {/* Phones/tablets: collapsed disclosure above the article */}
                <div className="lg:hidden">
                  <TableOfContents headings={post.headings} collapsible />
                </div>
                {/* Desktop: sticky sidebar */}
                <aside className="hidden lg:col-start-2 lg:row-start-1 lg:block">
                  <div className="sticky top-28">
                    <TableOfContents headings={post.headings} />
                  </div>
                </aside>
              </>
            )}

            <div className={hasToc ? 'lg:col-start-1 lg:row-start-1 min-w-0' : 'lg:col-span-2 max-w-3xl min-w-0'}>
              <MarkdownContent>{post.content}</MarkdownContent>

              {post.tags.length > 0 && (
                <ul className="mt-10 flex flex-wrap gap-2" aria-label="Tags">
                  {post.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400"
                    >
                      #{tag}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-8 flex flex-col gap-4 border-t border-zinc-200 dark:border-zinc-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <ShareButtons url={absoluteUrl} title={post.title} />
                <Link
                  href="/blog"
                  className="inline-flex min-h-[44px] items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-red hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" /> All articles
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section aria-labelledby="related-heading" className="container mx-auto mt-16 sm:mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 id="related-heading" className="mb-6 text-2xl sm:text-3xl font-black uppercase tracking-tight">
              Keep <span className="text-brand-red">reading</span>
            </h2>
            <ul className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <PostCard post={item} />
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="container mx-auto mt-16 sm:mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl">
          <CtaBanner
            eyebrow="Train with us"
            title="Ready to step on the mat?"
            description="Book a free trial class at either of our Phnom Penh dojangs and meet the coaching team."
            href="/contact?subject=Free%20Trial%20Booking"
            label="Book a free trial"
          />
        </div>
      </article>
    </div>
  )
}
