/**
 * Content blocks in a post: reading them, checking them. Run with: npm run test:unit
 *
 * The samples marked "as saved by the editor" are exactly what Markdoc's formatter writes, which is what the content
 * editor uses to save a post (generated with Markdoc.format on the same tags, including how it breaks a long tag over
 * several lines and how it escapes quotes).
 */
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { BLOCKS, BLOCK_NAMES, checkBlock, collectBlocks, splitBlocks, type PostSegment } from '@/lib/blogBlocks'

const blocksOf = (markdown: string) => splitBlocks(markdown).segments.filter((s): s is Extract<PostSegment, { type: 'block' }> => s.type === 'block').map((s) => s.block)
const timeOf = (run: () => unknown) => {
  const start = process.hrtime.bigint()
  run()
  return Number(process.hrtime.bigint() - start) / 1e6
}

describe('splitBlocks: text without blocks', () => {
  it('comes back as one segment, exactly as it was', () => {
    const text = '# Title\r\n\r\nSome **bold** text.\n\n- one\n- two\n\n| A | B |\n| --- | --- |\n| 1 | 2 |\n'
    assert.deepEqual(splitBlocks(text), { segments: [{ type: 'markdown', text }], problems: [] })
  })

  it('is empty for empty text', () => {
    assert.deepEqual(splitBlocks('').segments, [{ type: 'markdown', text: '' }])
  })

  it('does not read tags inside a code block', () => {
    const text = 'Example:\n\n```\n{% callout kind="note" %}\nnot a block\n{% /callout %}\n```\n\nDone.'
    const result = splitBlocks(text)
    assert.deepEqual(result.segments, [{ type: 'markdown', text }])
    assert.deepEqual(result.problems, [])
  })
})

describe('splitBlocks: as saved by the editor', () => {
  it('a callout between two paragraphs', () => {
    const result = splitBlocks('Before\n\n{% callout kind="note" title="Heads up" %}\nBody text.\n{% /callout %}\n\nAfter\n')
    assert.deepEqual(result.problems, [])
    assert.equal(result.segments.length, 3)
    assert.deepEqual(result.segments[0], { type: 'markdown', text: 'Before\n' })
    assert.deepEqual(result.segments[1], {
      type: 'block',
      block: { name: 'callout', attributes: { kind: 'note', title: 'Heads up' }, inner: 'Body text.', line: 3, innerLine: 4 },
    })
    assert.deepEqual(result.segments[2], { type: 'markdown', text: '\nAfter\n' })
  })

  it('a callout with no text, written as one self-closing tag', () => {
    const [block] = blocksOf('{% callout kind="tip" /%}\n')
    assert.equal(block.name, 'callout')
    assert.equal(block.inner, '')
    assert.deepEqual(block.attributes, { kind: 'tip' })
  })

  it('a short video', () => {
    const [block] = blocksOf('{% video url="https://youtu.be/dQw4w9WgXcQ" title="Demo" /%}\n')
    assert.deepEqual(block.attributes, { url: 'https://youtu.be/dQw4w9WgXcQ', title: 'Demo' })
  })

  it('a long tag that the editor breaks over several lines', () => {
    const text = '{% video\n   url="https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=42s"\n   title="Poomsae Taegeuk 1: full demonstration by Master Keo Moni" /%}\n\nNext paragraph'
    const result = splitBlocks(text)
    assert.deepEqual(result.problems, [])
    const [first, second] = result.segments
    assert.equal(first.type === 'block' && first.block.attributes.url, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=42s')
    assert.equal(first.type === 'block' && first.block.attributes.title, 'Poomsae Taegeuk 1: full demonstration by Master Keo Moni')
    assert.deepEqual(second, { type: 'markdown', text: '\nNext paragraph' })
  })

  it('quotes and backslashes in a value, which the editor escapes', () => {
    const [block] = blocksOf('{% button\n   label="Book a \\"free\\" trial \\\\ now"\n   href="/contact?subject=Free%20Trial"\n   style="primary" /%}')
    assert.equal(block.attributes.label, 'Book a "free" trial \\ now')
    assert.equal(block.attributes.href, '/contact?subject=Free%20Trial')
    assert.equal(block.attributes.style, 'primary')
  })

  it('values with Khmer letters, dashes and an escaped line break', () => {
    const [block] = blocksOf('{% callout kind="warning" title="កុំភ្លេច\\nline two — ok" %}\nx\n{% /callout %}')
    assert.equal(block.attributes.title, 'កុំភ្លេច\nline two — ok')
  })

  it('two questions in a row', () => {
    const blocks = blocksOf('{% faq question="Is it safe for kids?" %}\nYes.\n{% /faq %}\n\n{% faq question="What do I wear?" %}\nLoose clothes.\n{% /faq %}\n')
    assert.deepEqual(blocks.map((b) => [b.name, b.attributes.question, b.inner]), [['faq', 'Is it safe for kids?', 'Yes.'], ['faq', 'What do I wear?', 'Loose clothes.']])
  })

  it('a pull quote with a source', () => {
    const [block] = blocksOf('{% pullquote cite="Coach Sophea" %}\nDiscipline is a habit.\n{% /pullquote %}')
    assert.deepEqual(block.attributes, { cite: 'Coach Sophea' })
    assert.equal(block.inner, 'Discipline is a habit.')
  })

  it('a block inside a block: the outer one keeps its text, the inner one is read from it', () => {
    const text = '{% faq question="Q?" %}\nAnswer\n\n{% callout kind="note" title="" %}\nInner\n{% /callout %}\n{% /faq %}\n'
    const result = splitBlocks(text)
    assert.deepEqual(result.problems, [])
    const [outer] = blocksOf(text)
    assert.equal(outer.inner, 'Answer\n\n{% callout kind="note" title="" %}\nInner\n{% /callout %}')
    const [inner] = blocksOf(outer.inner)
    assert.deepEqual([inner.name, inner.attributes.kind, inner.inner], ['callout', 'note', 'Inner'])
  })

  it('does not read a tag inside a code block inside a block', () => {
    const text = '{% callout kind="note" %}\n```\n{% /callout %}\n```\nstill inside\n{% /callout %}\n'
    const [block] = blocksOf(text)
    assert.equal(block.inner, '```\n{% /callout %}\n```\nstill inside')
  })

  it('reads Windows line endings', () => {
    const [block] = blocksOf('{% callout kind="note" %}\r\nBody\r\n{% /callout %}\r\n')
    assert.equal(block.attributes.kind, 'note')
    assert.equal(block.inner, 'Body\r')
  })
})

describe('splitBlocks: problems are reported and the text is kept', () => {
  const problemsOf = (text: string) => splitBlocks(text).problems.map((p) => `${p.line}: ${p.message}`)
  const textOf = (text: string) => splitBlocks(text).segments.map((s) => (s.type === 'markdown' ? s.text : '[block]')).join('|')

  it('a block that is never closed', () => {
    const text = 'Intro\n\n{% callout kind="note" %}\nNo end.\n\nMore'
    assert.deepEqual(problemsOf(text), ['3: {% callout %} is never closed with {% /callout %}'])
    assert.equal(textOf(text), text, 'the text is still there')
  })

  it('a closing tag with nothing to close, and one that closes the wrong block', () => {
    assert.match(problemsOf('Text\n{% /callout %}\n')[0], /closing tag \{% \/callout %\} has no matching opening tag/)
    assert.match(problemsOf('{% callout kind="note" %}\n{% /faq %}\n{% /callout %}')[0], /\(the open one is \{% callout %\}\)/)
  })

  it('a tag the website does not know, whether or not it is closed', () => {
    assert.deepEqual(problemsOf('{% nope a="b" %}\nhi\n{% /nope %}'), ['1: {% nope %} is not a block the website knows', '3: {% /nope %} is not a block the website knows'])
    assert.deepEqual(problemsOf('{% table %}\n- A\n'), ['1: {% table %} is not a block the website knows'])
  })

  it('attribute text it cannot read', () => {
    assert.match(problemsOf('{% callout kind="note" oops %}\nx\n{% /callout %}')[0], /could not read the tag/)
  })

  it('a one-tag block that was opened like a wrapper', () => {
    assert.match(problemsOf('{% video url="https://youtu.be/dQw4w9WgXcQ" %}\n{% /video %}')[0], /must end with \/%\}/)
  })

  it('blocks nested deeper than allowed', () => {
    const open = (name: string) => `{% ${name} ${name === 'faq' ? 'question="q"' : ''} %}`
    const text = [open('faq'), open('faq'), open('faq'), open('faq'), 'deep', '{% /faq %}', '{% /faq %}', '{% /faq %}', '{% /faq %}'].join('\n')
    assert.match(problemsOf(text)[0], /go more than 3 levels deep/)
  })

  it('leaves a half-written tag as text', () => {
    const text = 'A line with {% inside it and a line that starts with\n{% but never ends'
    assert.equal(textOf(text), text)
    assert.deepEqual(problemsOf(text), [])
  })
})

describe('checkBlock', () => {
  const check = (name: keyof typeof BLOCKS, attributes: Record<string, string>) => checkBlock({ name, attributes }).map((problem) => problem.message)
  const levelOf = (name: keyof typeof BLOCKS, attributes: Record<string, string>) => checkBlock({ name, attributes }).map((problem) => problem.level)

  it('stops the deploy for a block that would show nothing or the wrong thing, and only warns about the rest', () => {
    assert.deepEqual(levelOf('faq', {}), ['error'], 'a question with no question')
    assert.deepEqual(levelOf('video', { url: 'https://vimeo.com/1' }), ['error'], 'a video that is not YouTube')
    assert.deepEqual(levelOf('video', {}), ['error'], 'a video with no link')
    assert.deepEqual(levelOf('button', { label: 'x', href: 'javascript:alert(1)' }), ['error'])
    assert.deepEqual(levelOf('button', { href: '/contact' }), ['error'], 'a button with no text')
    assert.deepEqual(levelOf('callout', { kind: 'danger' }), ['warning'], 'a style the website does not know: it uses the first')
    assert.deepEqual(levelOf('callout', { colour: 'red' }), ['warning'], 'an option the website does not use')
  })

  it('accepts blocks as the editor writes them', () => {
    assert.deepEqual(check('callout', { kind: 'safety', title: 'Safety first' }), [])
    assert.deepEqual(check('callout', {}), [])
    assert.deepEqual(check('video', { url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', title: 'x' }), [])
    assert.deepEqual(check('video', { url: 'https://youtu.be/dQw4w9WgXcQ' }), [])
    assert.deepEqual(check('button', { label: 'Book', href: '/contact', style: 'outline' }), [])
    assert.deepEqual(check('button', { label: 'Mail us', href: 'mailto:hello@example.com' }), [])
    assert.deepEqual(check('faq', { question: 'Why?' }), [])
    assert.deepEqual(check('pullquote', {}), [])
  })

  it('names what is wrong in plain English', () => {
    assert.match(check('callout', { kind: 'danger' })[0], /"kind" is "danger", it must be one of note, tip, warning, safety/)
    assert.match(check('callout', { colour: 'red' })[0], /"colour" is not an option of this block, so it is ignored/)
    assert.match(check('faq', { question: '  ' })[0], /"question" is empty/)
    assert.match(check('faq', {})[0], /"question" is empty/)
    assert.match(check('video', { url: 'https://vimeo.com/123' })[0], /use a YouTube link/)
    assert.match(check('video', { url: 'https://www.youtube.com/@channel' })[0], /use a YouTube link/)
    assert.match(check('button', { label: 'x', href: 'javascript:alert(1)' })[0], /must start with https:\/\//)
    assert.match(check('button', { label: 'x', href: '//evil.example' })[0], /must start with https:\/\//)
  })
})

describe('collectBlocks', () => {
  it('finds nested blocks and reports problems at the right line', () => {
    const text = ['Intro', '', '{% faq question="Q?" %}', 'Answer', '', '{% callout kind="loud" %}', 'Inner', '{% /callout %}', '{% /faq %}', '', '{% button label="Go" href="javascript:x" /%}'].join('\n')
    const { blocks, problems } = collectBlocks(text)
    assert.deepEqual(blocks.map((b) => [b.name, b.line]), [['faq', 3], ['callout', 6], ['button', 11]])
    assert.deepEqual(problems.map((p) => p.line), [6, 11])
    assert.deepEqual(problems.map((p) => p.level), ['warning', 'error'])
    assert.match(problems[0].message, /"kind" is "loud"/)
  })

  it('finds nothing in a post without blocks', () => {
    assert.deepEqual(collectBlocks('# Title\n\nJust text.'), { blocks: [], problems: [] })
  })
})

describe('the registry', () => {
  it('lists the blocks the editor offers', () => {
    assert.deepEqual([...BLOCK_NAMES].sort(), ['button', 'callout', 'faq', 'pullquote', 'video'])
  })
})

describe('splitBlocks stays fast on hostile text (up to the size limit of a post)', () => {
  const cases: [string, string][] = [
    ['25,000 blocks that are never closed', '{% callout kind="note" %}\n'.repeat(25_000)],
    ['25,000 closing tags with nothing to close', '{% /callout %}\n'.repeat(25_000)],
    ['25,000 tags that are never finished', '{% video\n'.repeat(25_000)],
    ['25,000 opened then closed in turn', '{% faq question="q" %}\ntext\n{% /faq %}\n'.repeat(8_000)],
    ['a few very long lines', `{% callout ${'kind="x" '.repeat(2_000)}%}\n`.repeat(10)],
    ['25,000 unknown tags', '{% nope %}\n'.repeat(25_000)],
  ]
  for (const [name, text] of cases) {
    it(name, () => {
      const ms = timeOf(() => splitBlocks(text))
      assert.ok(ms < 1500, `took ${ms.toFixed(0)} ms`)
      assert.ok(timeOf(() => collectBlocks(text)) < 3000)
    })
  }
})
