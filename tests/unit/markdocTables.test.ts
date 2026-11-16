/**
 * The content editor writes tables as Markdoc tags; the blog reads Markdown pipe tables. Run with: npm run test:unit
 */
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { markdocTablesToGfm, unsupportedMarkdocTags } from '@/lib/markdocTables'

// Exactly what the editor wrote when the "Poomsae vs. Kyorugi" post was saved.
const SAVED_BY_EDITOR = `A performance is judged out of 10.0:

{% table %}
- Component
- Maximum
- What judges look at
---
- Accuracy
- 4.0
- Correct stances, techniques and sequence; points are deducted for errors
---
- Presentation
- 6.0
- Speed and power, rhythm and tempo, and expression of energy
{% /table %}

## Kyorugi: sparring with strategy
`

const WRITTEN_BY_HAND = `A performance is judged out of 10.0:

| Component | Maximum | What judges look at |
| --- | --- | --- |
| Accuracy | 4.0 | Correct stances, techniques and sequence; points are deducted for errors |
| Presentation | 6.0 | Speed and power, rhythm and tempo, and expression of energy |

## Kyorugi: sparring with strategy
`

describe('markdocTablesToGfm', () => {
  it('turns a table saved by the editor into the pipe table the blog reads', () => {
    assert.equal(markdocTablesToGfm(SAVED_BY_EDITOR), WRITTEN_BY_HAND)
  })

  it('leaves text without tables exactly as it is', () => {
    const text = '# Title\n\nSome **bold** text and a [link](/blog).\n\n- one\n- two\n'
    assert.equal(markdocTablesToGfm(text), text)
  })

  it('handles several tables and Windows line endings', () => {
    const one = '{% table %}\r\n- A\r\n- B\r\n---\r\n- 1\r\n- 2\r\n{% /table %}'
    const converted = markdocTablesToGfm(`${one}\r\n\r\nbetween\r\n\r\n${one}`)
    assert.equal(converted.match(/\| A \| B \|/g)?.length, 2)
    assert.ok(!converted.includes('{%'))
  })

  it('keeps empty cells, pads short rows and escapes a pipe inside a cell', () => {
    const converted = markdocTablesToGfm('{% table %}\n- Name\n- Note\n---\n-\n- a | b\n---\n- only one\n{% /table %}')
    assert.equal(converted, '| Name | Note |\n| --- | --- |\n|  | a \\| b |\n| only one |  |')
  })

  it('joins a cell that continues on the next line', () => {
    const converted = markdocTablesToGfm('{% table %}\n- Head\n---\n- first line\n  second line\n{% /table %}')
    assert.equal(converted, '| Head |\n| --- |\n| first line second line |')
  })

  it('ignores attributes on the table tag', () => {
    assert.equal(markdocTablesToGfm('{% table width="100%" %}\n- A\n---\n- 1\n{% /table %}'), '| A |\n| --- |\n| 1 |')
  })

  it('leaves a table that is never closed as it is', () => {
    const text = 'Intro\n\n{% table %}\n- A\n---\n- 1\n\nMore text'
    assert.equal(markdocTablesToGfm(text), text)
  })

  it('removes a table with no rows', () => {
    assert.equal(markdocTablesToGfm('a\n{% table %}\n{% /table %}\nb'), 'a\n\nb')
  })

  // A regular expression over the whole text got quadratically slower with every unclosed tag: this much text took
  // about 8 seconds, so a hostile or broken post could keep the build busy for minutes. Reading line by line is linear.
  it('stays fast on a post made of tags that are never closed', () => {
    const text = '{% table %}\n'.repeat(25_000) // about 300 KB, the biggest post the website reads
    for (const run of [() => markdocTablesToGfm(text), () => unsupportedMarkdocTags(text)]) {
      const start = process.hrtime.bigint()
      run()
      const ms = Number(process.hrtime.bigint() - start) / 1e6
      assert.ok(ms < 1000, `took ${ms.toFixed(0)} ms`)
    }
  })

  it('stays fast on very long lines and on many closed tables', () => {
    const longLine = `{% table ${'x '.repeat(100_000)}%}\n- A\n{% /table %}`
    const many = '{% table %}\n- A\n---\n- 1\n{% /table %}\n'.repeat(5_000)
    for (const text of [longLine, many, `{% ${'%} '.repeat(50_000)}`]) {
      const start = process.hrtime.bigint()
      markdocTablesToGfm(text)
      const ms = Number(process.hrtime.bigint() - start) / 1e6
      assert.ok(ms < 1000, `took ${ms.toFixed(0)} ms`)
    }
  })
})

describe('unsupportedMarkdocTags', () => {
  it('finds tags the website cannot show, and ignores tables', () => {
    assert.deepEqual(unsupportedMarkdocTags(`${SAVED_BY_EDITOR}\n{% callout type="note" %}Hi{% /callout %}\n{% video src="x" /%}`), ['callout', 'video'])
  })

  it('finds nothing in an ordinary post', () => {
    assert.deepEqual(unsupportedMarkdocTags(SAVED_BY_EDITOR), [])
    assert.deepEqual(unsupportedMarkdocTags(WRITTEN_BY_HAND), [])
  })
})
