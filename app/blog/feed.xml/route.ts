import { getAllPostMetas } from '@/lib/blog'
import { siteSettings } from '@/config/siteSettings'

// Generated at build time; redeploying publishes new posts to the feed.
export const dynamic = 'force-static'

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export function GET() {
  const baseUrl = siteSettings.brand.canonicalDomain
  const posts = getAllPostMetas()
  const lastBuildDate = new Date(posts[0] ? `${posts[0].date}T12:00:00Z` : Date.now()).toUTCString()

  const items = posts
    .map((post) => {
      const url = `${baseUrl}/blog/${post.slug}`
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${post.date}T12:00:00Z`).toUTCString()}</pubDate>
      <category>${escapeXml(post.category)}</category>
      <description>${escapeXml(post.description)}</description>
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Infinity Taekwondo - Martial Journal &amp; Blog</title>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/blog/feed.xml" rel="self" type="application/rss+xml" />
    <description>Training guides, belt and grading advice and stories from the Infinity Taekwondo dojangs in Phnom Penh.</description>
    <language>en</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
${items}
  </channel>
</rss>
`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
