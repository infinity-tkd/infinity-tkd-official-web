import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { expect, test } from '@playwright/test'
import { MarkdownContent } from '@/components/blog/MarkdownContent'
import { PostBody } from '@/components/blog/PostBody'

/**
 * What a post's text turns into on the page, block by block, rendered on the server (no browser needed).
 * The first test is the important one: a post with no blocks must come out exactly as it did before blocks existed.
 */
const body = (markdown: string) => renderToStaticMarkup(<PostBody>{markdown}</PostBody>)
const plain = (markdown: string) => renderToStaticMarkup(<MarkdownContent>{markdown}</MarkdownContent>)
const count = (haystack: string, needle: string) => haystack.split(needle).length - 1

const A_POST = `Belts are the most visible part of Taekwondo.

## Two families of rank

- **Geup** are the "student" ranks
- Dan are the "degree" ranks

| Belt | Meaning |
| --- | --- |
| White | Purity |

[Book a class](/contact) or read [the rules](https://example.com/rules).

![Two students](/uploads/blog/pic.jpg "A caption")

\`\`\`
{% callout kind="note" %}
not a block
{% /callout %}
\`\`\`
`

test('a post with no blocks comes out exactly as it did before', () => {
  expect(body(A_POST)).toBe(plain(A_POST))
  expect(body('')).toBe('')
})

test.describe('callout', () => {
  test('each style has its own label and look; red is for warnings and safety only', () => {
    const note = body('{% callout kind="note" %}\nText\n{% /callout %}')
    expect(note).toContain('<aside aria-label="Note"')
    expect(note).toContain('border-zinc-200')
    expect(note).not.toContain('border-brand-red')
    const warning = body('{% callout kind="warning" %}\nText\n{% /callout %}')
    expect(warning).toContain('aria-label="Warning"')
    expect(warning).toContain('border-brand-red/30')
    expect(body('{% callout kind="safety" %}\nText\n{% /callout %}')).toContain('aria-label="Safety first"')
    expect(body('{% callout kind="tip" %}\nText\n{% /callout %}')).toContain('aria-label="Tip"')
  })

  test('a heading replaces the label; a style the website does not know is a note', () => {
    const custom = body('{% callout kind="tip" title="Good to know" %}\nText\n{% /callout %}')
    expect(custom).toContain('aria-label="Good to know"')
    expect(custom).toContain('>Good to know</p>')
    expect(body('{% callout kind="loud" %}\nText\n{% /callout %}')).toContain('aria-label="Note"')
    expect(body('{% callout /%}')).toContain('aria-label="Note"')
  })

  test('its text is Markdown, and nothing in it is trusted', () => {
    const markup = body('{% callout kind="note" title="<script>alert(1)</script>" %}\nA **bold** word and a [link](/pricing).\n\n- one\n- two\n\n<script>alert(2)</script>\n{% /callout %}')
    expect(markup).toContain('<strong')
    expect(markup).toContain('href="/pricing"')
    expect(markup).toContain('<li')
    expect(markup).not.toContain('<script')
  })
})

test.describe('video', () => {
  const VIDEO = '{% video url="https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=42s" title="Taegeuk 1 demonstration" /%}'

  test('shows the video picture and a play button, and loads no player until play is pressed', () => {
    const markup = body(VIDEO)
    expect(markup).toContain('aria-label="Play video: Taegeuk 1 demonstration"')
    expect(markup).toContain('https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg')
    expect(markup).not.toContain('<iframe')
    expect(markup).not.toContain('youtube-nocookie.com')
  })

  test('keeps a link to YouTube that works without JavaScript', () => {
    expect(body(VIDEO)).toMatch(/<a href="https:\/\/www\.youtube\.com\/watch\?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer"[^>]*>Watch on YouTube/)
  })

  test('understands the usual YouTube link shapes', () => {
    for (const url of ['https://youtu.be/dQw4w9WgXcQ', 'https://www.youtube.com/shorts/dQw4w9WgXcQ', 'https://m.youtube.com/watch?v=dQw4w9WgXcQ', 'https://www.youtube.com/embed/dQw4w9WgXcQ']) {
      expect(body(`{% video url="${url}" title="x" /%}`), url).toContain('hqdefault.jpg')
    }
  })

  test('shows nothing for a link that is not a YouTube video', () => {
    for (const url of ['https://vimeo.com/123', 'https://www.youtube.com/@channel', 'javascript:alert(1)', 'not a link', '']) {
      expect(body(`{% video url="${url}" title="x" /%}`), url).toBe('')
    }
  })

  test('its title is text', () => {
    const markup = body('{% video url="https://youtu.be/dQw4w9WgXcQ" title="<img src=x onerror=alert(1)>" /%}')
    expect(markup).not.toContain('<img src=x')
    expect(markup).toContain('&lt;img')
  })
})

test.describe('button', () => {
  test('a page of this website is a normal link', () => {
    const markup = body('{% button label="Book a trial" href="/contact?subject=Free%20Trial" style="primary" /%}')
    expect(markup).toContain('href="/contact?subject=Free%20Trial"')
    expect(markup).not.toContain('target=')
    expect(markup).toContain('bg-brand-red')
    expect(markup).toContain('Book a trial')
  })

  test('another website opens in a new tab, safely, and says so', () => {
    const markup = body('{% button label="Read the rules" href="https://example.com/rules" style="outline" /%}')
    expect(markup).toContain('target="_blank" rel="noopener noreferrer"')
    expect(markup).toContain('(opens in a new tab)')
    expect(markup).toContain('border-zinc-300')
    expect(markup).not.toContain('bg-brand-red ')
  })

  test('mailto and tel work; a style that is not known is the main style', () => {
    expect(body('{% button label="Mail us" href="mailto:hello@example.com" /%}')).toContain('href="mailto:hello@example.com"')
    expect(body('{% button label="Call" href="tel:+85512345678" style="huge" /%}')).toContain('bg-brand-red')
  })

  test('an address that is not allowed is never a link: the label shows as text', () => {
    for (const href of ['javascript:alert(1)', '//evil.example', 'data:text/html,x', 'https://user:pw@evil.example', 'ftp://example.com']) {
      const markup = body(`{% button label="Go" href="${href}" /%}`)
      expect(markup, href).not.toContain('<a')
      expect(markup, href).not.toContain('href=')
      expect(markup, href).toContain('>Go</p>')
    }
  })

  test('without a label or an address it shows nothing', () => {
    expect(body('{% button href="/contact" /%}')).toBe('')
    expect(body('{% button label="Go" /%}')).toBe('')
  })
})

test.describe('pull quote and questions', () => {
  test('a pull quote has its text and its source', () => {
    const markup = body('{% pullquote cite="Coach Sophea" %}\nDiscipline is a **habit**.\n{% /pullquote %}')
    expect(markup).toMatch(/<figure[^>]*><blockquote/)
    expect(markup).toContain('<strong')
    expect(markup).toContain('>Coach Sophea</figcaption>')
    expect(body('{% pullquote %}\nNo source.\n{% /pullquote %}')).not.toContain('figcaption')
  })

  test('questions that follow each other are one list of native, keyboard-friendly disclosures', () => {
    const markup = body('{% faq question="Is it safe?" %}\nYes.\n{% /faq %}\n\n{% faq question="What do I wear?" %}\nLoose clothes.\n{% /faq %}\n')
    expect(count(markup, '<details')).toBe(2)
    expect(count(markup, 'space-y-3')).toBe(1)
    expect(markup).toContain('<summary')
    expect(markup).toContain('Is it safe?')
    expect(markup).toContain('Loose clothes.')
  })

  test('a question after some text starts a new list', () => {
    const markup = body('{% faq question="One?" %}\nA\n{% /faq %}\n\nA paragraph in between.\n\n{% faq question="Two?" %}\nB\n{% /faq %}\n')
    expect(count(markup, 'space-y-3')).toBe(2)
    expect(markup).toContain('A paragraph in between.')
  })

  test('a question without its question text is a "Question" (the build check refuses it before it goes live)', () => {
    expect(body('{% faq %}\nAnswer\n{% /faq %}')).toContain('>Question</span>')
  })
})

test.describe('blocks in blocks, and text that is not a block', () => {
  test('a callout inside an answer', () => {
    const markup = body('{% faq question="Q?" %}\nAnswer\n\n{% callout kind="warning" %}\nInner text\n{% /callout %}\n{% /faq %}')
    expect(markup).toMatch(/<details[\s\S]*<aside aria-label="Warning"[\s\S]*Inner text[\s\S]*<\/aside>[\s\S]*<\/details>/)
  })

  test('nesting stops at three levels: deeper is shown as the text it is, and the page still renders', () => {
    const level = (n: number) => `{% faq question="Level ${n}" %}`
    const markup = body([level(1), level(2), level(3), level(4), 'deepest text', '{% /faq %}', '{% /faq %}', '{% /faq %}', '{% /faq %}'].join('\n'))
    expect(markup).toContain('Level 1')
    expect(markup).toContain('Level 3')
    expect(markup).toContain('deepest text')
  })

  test('a tag the website does not know, or one that is never closed, stays visible as text and nothing else breaks', () => {
    const unknown = body('Before\n\n{% nope a="b" %}\n\nAfter')
    expect(unknown).toContain('Before')
    expect(unknown).toContain('After')
    expect(unknown).toContain('{% nope')
    const unclosed = body('Before\n\n{% callout kind="note" %}\nNo end\n\nAfter')
    expect(unclosed).toContain('Before')
    expect(unclosed).toContain('No end')
    expect(unclosed).toContain('After')
    expect(unclosed).not.toContain('<aside')
  })

  test('a tag inside a code block is shown as code', () => {
    const markup = body('```\n{% callout kind="note" %}\nnot a block\n{% /callout %}\n```')
    expect(markup).toContain('<pre')
    expect(markup).not.toContain('<aside')
  })
})
