/**
 * Text that goes into the RSS feed. Run with: npm run test:unit
 */
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { escapeXml } from '@/lib/xml'

describe('escapeXml', () => {
  it('escapes the five characters XML treats as markup', () => {
    assert.equal(escapeXml(`<a href="x">Tom & 'Jerry'</a>`), '&lt;a href=&quot;x&quot;&gt;Tom &amp; &apos;Jerry&apos;&lt;/a&gt;')
  })

  it('leaves ordinary text, accents, Khmer, Chinese, Korean and emoji as they are', () => {
    for (const text of ['Plain text, 123.', 'Café Étoile', 'កីឡាតេក្វាន់ដូ', '跆拳道', '태권도', 'Kick 🥋 high 🇰🇭', 'Line one\nLine two\ttabbed\r\n']) {
      assert.equal(escapeXml(text), text)
    }
  })

  it('removes characters XML 1.0 cannot hold at all (they would make the whole feed invalid)', () => {
    assert.equal(escapeXml('a\u0000b\u0001c\u0008d\u000Be\u000Cf\u000Eg\u001Fh'), 'abcdefgh')
    assert.equal(escapeXml('a￾b￿c'), 'abc')
    assert.equal(escapeXml('a\uD800b\uDFFFc'), 'abc', 'lone surrogate halves')
    assert.equal(escapeXml('Form feed\u000C in a title pasted from a PDF'), 'Form feed in a title pasted from a PDF')
  })

  it('removes them before escaping, so nothing can be smuggled between the characters', () => {
    assert.equal(escapeXml('<\u0000script>'), '&lt;script&gt;')
  })
})
