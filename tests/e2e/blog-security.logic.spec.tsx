import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { expect, test } from '@playwright/test'
import { MarkdownContent } from '@/components/blog/MarkdownContent'
import { jsonLdString } from '@/lib/structuredData'

/**
 * What a hostile or careless post turns into on the page. The post body goes through the real renderer
 * (components/blog/MarkdownContent.tsx), rendered on the server, no browser needed.
 * See docs/blog-security.md for the reasoning behind each rule.
 */
const html = (markdown: string) => renderToStaticMarkup(<MarkdownContent>{markdown}</MarkdownContent>)

test.describe('a post cannot put markup or script on the page', () => {
  test('raw HTML is shown as text, never as elements', () => {
    const markup = html('<script>alert(1)</script>\n\n<img src=x onerror="alert(2)">\n\n<div onclick="alert(3)">block</div>\n\n<iframe src="https://evil.example"></iframe>')
    for (const element of ['<script', '<img', '<div', '<iframe']) expect(markup, element).not.toContain(element)
    // (The words "onerror=" are still in the page, as text. What matters is that no real tag carries them.)
    expect(markup).not.toMatch(/<[^>]*\son(error|click|load)=/i)
    expect(markup).toContain('&lt;script&gt;')
  })

  test('a link that is not allowed becomes plain text', () => {
    const markup = html(
      [
        '[a](javascript:alert(1))',
        '[b](JaVaScRiPt:alert(1))',
        '[c](data:text/html,<script>alert(1)</script>)',
        '[d](//evil.example)',
        '[f](vbscript:msgbox(1))',
        '[g](https://user:secret@evil.example)',
        '[h](file:///etc/passwd)',
      ].join('\n\n')
    )
    expect(markup).not.toContain('<a ')
    expect(markup).not.toMatch(/href=/i)
    for (const label of ['a', 'b', 'c', 'd', 'f', 'g', 'h']) expect(markup).toContain(`<span>${label}</span>`)
  })

  test('a backslash trick cannot leave the site: the reader turns the backslash into %5C, which is a path on this site', () => {
    const markup = html('[e](/\\evil.example)')
    expect(markup).toContain('href="/%5Cevil.example"')
    expect(markup).not.toMatch(/href="\/\\/)
  })

  test('the links an author is meant to write still work, and outside ones open safely', () => {
    const markup = html('[home](/pricing#plans) [section](#top) [mail](mailto:hello@example.com) [call](tel:+85512345678) [out](https://example.com/page)')
    expect(markup).toContain('href="/pricing#plans"')
    expect(markup).toContain('href="#top"')
    expect(markup).toContain('href="mailto:hello@example.com"')
    expect(markup).toContain('href="tel:+85512345678"')
    expect(markup).toMatch(/<a href="https:\/\/example\.com\/page" target="_blank" rel="noopener noreferrer"/)
  })

  test('a picture that cannot be a picture shows nothing from its address', () => {
    const markup = html('![x](javascript:alert(1))\n\n![y](data:text/html;base64,PHNjcmlwdD4=)\n\n![z](C:\\Users\\me\\photo.jpg)')
    expect(markup).not.toMatch(/javascript:/i)
    expect(markup).not.toMatch(/text\/html/i)
    expect(markup).not.toMatch(/C:\\/)
  })
})

test.describe('headings cannot take over ids the page uses', () => {
  test('a heading named like the skip-link target or the related-posts label gets another id', () => {
    const markup = html('## Main content\n\n### Related heading\n\n## What to bring')
    expect(markup).toContain('id="section-main-content"')
    expect(markup).toContain('id="section-related-heading"')
    expect(markup).toContain('id="what-to-bring"')
    expect(markup).not.toContain('id="main-content"')
    expect(markup).not.toContain('id="related-heading"')
  })
})

test.describe('a caption comes from the picture title', () => {
  test('a picture alone on its line with a caption becomes a figure with a figcaption', () => {
    const markup = html('![Two students](/uploads/blog/pic.jpg "Photo by Coach Sophea")')
    expect(markup).toMatch(/<figure class="my-8">/)
    expect(markup).toContain('<figcaption class="mt-3 text-center text-sm text-zinc-500 dark:text-zinc-400">Photo by Coach Sophea</figcaption>')
    expect(markup).not.toContain('<p class')
  })

  test('a picture without a caption keeps the markup it always had', () => {
    const markup = html('![Two students](/uploads/blog/pic.jpg)')
    expect(markup).not.toContain('<figure')
    expect(markup).toMatch(/^<p class="mb-6[^"]*"><img /)
  })

  test('a caption is text: markup in it is escaped', () => {
    const markup = html('![x](/uploads/blog/pic.jpg "<b>bold</b> & <script>alert(1)</script>")')
    expect(markup).not.toContain('<script')
    expect(markup).not.toContain('<b>')
    expect(markup).toContain('&lt;b&gt;bold&lt;/b&gt;')
  })

  test('a picture inside a sentence stays inline, without a figure (a figure inside a paragraph is invalid HTML)', () => {
    const markup = html('Look at ![icon](/uploads/blog/pic.jpg "A caption") here.')
    expect(markup).not.toContain('<figure')
  })
})

test.describe('structured data cannot close its own script tag', () => {
  test('the characters that could end the script are escaped', () => {
    const json = jsonLdString({ name: '</script><script>alert(1)</script>', description: '<!-- x --> & \u2028 \u2029' })
    expect(json).not.toContain('</script')
    expect(json).not.toContain('<')
    expect(json).toContain('\\u003c')
    expect(JSON.parse(json).name).toBe('</script><script>alert(1)</script>')
  })
})
