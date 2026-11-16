/**
 * Reading a blog post safely: front matter, headings, links. Run with: npm run test:unit
 *
 * A post is a file that people (or someone who got into their account) write, so these tests are about what a hostile
 * or careless file can and cannot do while the website is being built.
 */
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { MAX_POST_CHARACTERS, extractHeadings, findMarkdownLinks, headingId, readPost, slugify, splitFrontMatter } from '@/lib/blogParse'

const GOOD = `---
title: "Poomsae: a first look"
description: How forms are judged.
date: 2026-11-03
updated: 2026-11-10
author: Coach Sophea
category: Competition
tags:
  - poomsae
  - rules
cover: /uploads/blog/cover.jpg
coverAlt: Two students in stances
featured: true
---
## First heading

Some **text**.

### Second heading
`

/** The time a function takes, in milliseconds. */
function timeOf(run: () => unknown): number {
  const start = process.hrtime.bigint()
  run()
  return Number(process.hrtime.bigint() - start) / 1e6
}

describe('readPost', () => {
  it('reads every front matter field and the text', () => {
    const result = readPost('poomsae-first-look', GOOD)
    assert.ok(result.ok)
    assert.equal(result.draft, false)
    const { post } = result
    assert.equal(post.title, 'Poomsae: a first look')
    assert.equal(post.description, 'How forms are judged.')
    assert.equal(post.date, '2026-11-03')
    assert.equal(post.updated, '2026-11-10')
    assert.equal(post.author, 'Coach Sophea')
    assert.equal(post.category, 'Competition')
    assert.equal(post.categorySlug, 'competition')
    assert.deepEqual(post.tags, ['poomsae', 'rules'])
    assert.deepEqual(post.cover, { src: '/uploads/blog/cover.jpg', alt: 'Two students in stances' })
    assert.equal(post.featured, true)
    assert.deepEqual(post.headings.map((h) => [h.level, h.text, h.id]), [[2, 'First heading', 'first-heading'], [3, 'Second heading', 'second-heading']])
  })

  it('uses defaults for the optional fields', () => {
    const result = readPost('short', '---\ntitle: T\ndescription: D\ncategory: C\ndate: "2026-01-02"\n---\nBody')
    assert.ok(result.ok)
    assert.equal(result.post.author, 'Infinity Taekwondo Coaching Team')
    assert.deepEqual(result.post.tags, [])
    assert.equal(result.post.cover, undefined)
    assert.equal(result.post.featured, false)
    assert.equal(result.post.readingMinutes, 1)
  })

  it('marks a draft', () => {
    const result = readPost('d', '---\ntitle: T\ndescription: D\ncategory: C\ndate: 2026-01-02\ndraft: true\n---\nBody')
    assert.ok(result.ok && result.draft)
  })

  it('turns tables saved by the content editor into tables the website reads', () => {
    const result = readPost('t', '---\ntitle: T\ndescription: D\ncategory: C\ndate: 2026-01-02\n---\n{% table %}\n- A\n- B\n---\n- 1\n- 2\n{% /table %}\n')
    assert.ok(result.ok)
    assert.match(result.post.content, /\| A \| B \|/)
    assert.doesNotMatch(result.post.content, /\{%/)
  })

  it('says in plain English what is missing', () => {
    const result = readPost('x', '---\ntitle: Only a title\n---\nBody')
    assert.ok(!result.ok)
    assert.match(result.reason, /description, category, date/)
  })

  it('refuses dates that are not YYYY-MM-DD, so the post is never skipped silently on the live site', () => {
    for (const date of ['2026-11-3', '3 November 2026', '2026-13-45', 'tomorrow']) {
      const result = readPost('x', `---\ntitle: T\ndescription: D\ncategory: C\ndate: "${date}"\n---\nBody`)
      assert.ok(!result.ok, date)
    }
  })

  it('explains a file with no front matter, including the common mistake of a blank first line', () => {
    for (const text of ['Just text', '\n---\ntitle: T\n---\nBody']) {
      const result = readPost('x', text)
      assert.ok(!result.ok)
      assert.match(result.reason, /must start with a line containing only ---/)
    }
  })

  it('explains broken YAML without throwing, with the tip about colons', () => {
    const result = readPost('x', '---\ntitle: Why: because\ndescription: [unclosed\n---\nBody')
    assert.ok(!result.ok)
    assert.match(result.reason, /invalid front matter/)
    assert.match(result.reason, /double quotes/)
  })

  it('ignores front matter that is not a list of fields', () => {
    for (const front of ['- just\n- a list', 'plain text']) {
      assert.ok(!readPost('x', `---\n${front}\n---\nBody`).ok)
    }
  })

  it('refuses a file bigger than the limit', () => {
    const result = readPost('big', `${GOOD}${'word '.repeat(MAX_POST_CHARACTERS / 5)}`)
    assert.ok(!result.ok)
    assert.match(result.reason, /bigger than 300 KB/)
  })

  it('uses a cover that is not text as no cover', () => {
    const result = readPost('x', '---\ntitle: T\ndescription: D\ncategory: C\ndate: 2026-01-02\ncover: [a, b]\n---\nBody')
    assert.ok(result.ok)
    assert.equal(result.post.cover, undefined)
  })
})

describe('front matter that tries to run code', () => {
  // gray-matter runs "---js" front matter with eval(). If it did here, the payload would set this flag on the build machine.
  const PAYLOAD = (language: string) =>
    `---${language}\n({ title: (globalThis.__frontMatterRan = true, "pwned"), description: "d", category: "c", date: "2026-01-02" })\n---\nBody`

  for (const language of ['js', 'javascript', 'JS']) {
    it(`refuses ---${language} and does not run it`, () => {
      delete (globalThis as Record<string, unknown>).__frontMatterRan
      const result = readPost('evil', PAYLOAD(language))
      assert.ok(!result.ok, `---${language} was accepted`)
      assert.equal((globalThis as Record<string, unknown>).__frontMatterRan, undefined, `---${language} front matter was executed`)
    })
  }

  it('also refuses it in the tool that checks content before a build', () => {
    delete (globalThis as Record<string, unknown>).__frontMatterRan
    const result = splitFrontMatter(PAYLOAD('js'))
    assert.ok(!result.ok)
    assert.equal((globalThis as Record<string, unknown>).__frontMatterRan, undefined)
  })

  it('does not accept the other front matter languages gray-matter knows about', () => {
    for (const language of ['toml', 'coffee', 'cson']) {
      assert.ok(!readPost('x', `---${language}\ntitle = "x"\n---\nBody`).ok, language)
    }
  })

  it('cannot change what every object in the program inherits', () => {
    readPost('x', '---\n__proto__:\n  polluted: yes\nconstructor:\n  prototype:\n    polluted: yes\ntitle: T\ndescription: D\ncategory: C\ndate: 2026-01-02\n---\nBody')
    assert.equal(({} as Record<string, unknown>).polluted, undefined)
  })

  it('does not choke on YAML that tries to blow up through anchors and aliases', () => {
    const bomb = [
      'a: &a ["lol","lol","lol","lol","lol","lol","lol","lol","lol"]',
      'b: &b [*a,*a,*a,*a,*a,*a,*a,*a,*a]',
      'c: &c [*b,*b,*b,*b,*b,*b,*b,*b,*b]',
      'd: &d [*c,*c,*c,*c,*c,*c,*c,*c,*c]',
      'e: &e [*d,*d,*d,*d,*d,*d,*d,*d,*d]',
      'f: &f [*e,*e,*e,*e,*e,*e,*e,*e,*e]',
      'g: &g [*f,*f,*f,*f,*f,*f,*f,*f,*f]',
      'tags: *g',
    ].join('\n')
    let result: ReturnType<typeof readPost> | undefined
    const ms = timeOf(() => {
      result = readPost('x', `---\ntitle: T\ndescription: D\ncategory: C\ndate: 2026-01-02\n${bomb}\n---\nBody`)
    })
    assert.ok(ms < 500, `took ${ms.toFixed(0)} ms`)
    assert.ok(result?.ok)
  })

  it('survives a front matter nested far too deep for a parser', () => {
    const result = readPost('x', `---\ntitle: T\ndescription: D\ncategory: C\ndate: 2026-01-02\ntags: ${'['.repeat(50_000)}\n---\nBody`)
    assert.equal(typeof result.ok, 'boolean') // an answer, not an exception
  })
})

describe('headings and the table of contents', () => {
  it('finds ## and ### headings, ignores code, and strips inline formatting', () => {
    const headings = extractHeadings('# Title\n\n## **Bold** and [link](/x)\n\n```\n## not a heading\n```\n\n### Third `code` ##\n#### too deep\n')
    assert.deepEqual(headings.map((h) => [h.level, h.text]), [[2, 'Bold and link'], [3, 'Third code']])
  })

  it('never gives a heading the id of something the page itself uses', () => {
    assert.equal(headingId('Main content'), 'section-main-content')
    assert.equal(headingId('Related heading'), 'section-related-heading')
    assert.equal(headingId('Root'), 'section-root')
    assert.equal(headingId('What to bring'), 'what-to-bring')
    assert.deepEqual(extractHeadings('## Main content\n').map((h) => h.id), ['section-main-content'])
  })

  it('makes URL-safe slugs that keep Khmer, Chinese and Korean letters', () => {
    assert.equal(slugify('Café Étoile!'), 'cafe-etoile')
    assert.equal(slugify('  --Hello,   World--  '), 'hello-world')
    assert.equal(slugify('កីឡាតេក្វាន់ដូ'), 'កីឡាតេក្វាន់ដូ')
    assert.equal(slugify('跆拳道 入门'), '跆拳道-入门')
  })

  it('stays fast on lines built to make a pattern slow', () => {
    for (const line of ['#'.repeat(250_000), `## ${'a '.repeat(120_000)}`, `## ${'#'.repeat(250_000)}`, `## ${'] ['.repeat(80_000)}`]) {
      const ms = timeOf(() => extractHeadings(`${line}\n`.repeat(2)))
      assert.ok(ms < 200, `took ${ms.toFixed(0)} ms`)
    }
  })
})

describe('findMarkdownLinks', () => {
  it('lists links and pictures with their line numbers', () => {
    const links = findMarkdownLinks('Text [one](https://a.example/x) and ![pic](/uploads/blog/p.jpg "caption").\n\n[two](/pricing#plans)\n[three]( <javascript:alert(1)> )')
    assert.deepEqual(
      links.map((l) => [l.image, l.address, l.line]),
      // (An address ends at the first ")" or space: enough to see where a link goes.)
      [[false, 'https://a.example/x', 1], [true, '/uploads/blog/p.jpg', 1], [false, '/pricing#plans', 3], [false, 'javascript:alert(1', 4]]
    )
  })

  it('skips code blocks', () => {
    assert.deepEqual(findMarkdownLinks('```\n[x](https://a.example)\n```\n[y](https://b.example)'), [{ image: false, address: 'https://b.example', line: 4 }])
  })

  it('stays fast on text built to make a pattern slow (a whole post of it, up to the size limit)', () => {
    // Lines just under the 5,000-character limit the scan reads, repeated until the post is about 300 KB.
    for (const pattern of ['![', '[a](', '](', '[x]( ', '![x](<']) {
      const line = pattern.repeat(Math.floor(4900 / pattern.length))
      const text = `${line}\n`.repeat(60)
      const ms = timeOf(() => findMarkdownLinks(text))
      assert.ok(ms < 1500, `took ${ms.toFixed(0)} ms for ${pattern}...`)
    }
    const longAddress = `[x](${'a'.repeat(4900)}\n`.repeat(60)
    assert.ok(timeOf(() => findMarkdownLinks(longAddress)) < 1500)
    // Lines over the limit are not read at all.
    assert.deepEqual(findMarkdownLinks(`[x](https://a.example) ${'z'.repeat(6000)}`), [])
  })
})
