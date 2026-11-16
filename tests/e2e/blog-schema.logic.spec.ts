import { expect, test } from '@playwright/test'
import { BLOCKS } from '@/lib/blogBlocks'
import { BLOG_FIELDS, TABLE_OF_CONTENTS_MODES } from '@/lib/blogParse'
import { postBlocks } from '@/lib/keystatic/blocks'
import { posts } from '@/lib/keystatic/blog'

/**
 * The content editor and the website must say the same thing: the fields a post can have, and the blocks it can hold.
 * (They are written in different places because the editor is a browser app and the website reads files on a server.)
 * No browser needed.
 */

/** The values a dropdown field offers. */
const valuesOf = (field: unknown): string[] =>
  ((field as { options?: { value: string }[] }).options ?? []).map((option) => option.value)

test.describe('blog fields', () => {
  test('the editor offers exactly the front matter fields the website reads', () => {
    const editorFields = Object.keys(posts.schema).filter((name) => name !== 'content')
    expect([...editorFields].sort()).toEqual([...BLOG_FIELDS].sort())
  })

  test('the table of contents dropdown offers exactly the modes the website understands', () => {
    expect(valuesOf(posts.schema.tableOfContents).sort()).toEqual([...TABLE_OF_CONTENTS_MODES].sort())
  })
})

test.describe('content blocks', () => {
  test('the editor offers exactly the blocks the website can show', () => {
    expect(Object.keys(postBlocks).sort()).toEqual(Object.keys(BLOCKS).sort())
  })

  for (const [name, spec] of Object.entries(BLOCKS)) {
    test(`${name}: same kind, same options, same dropdown values`, () => {
      const component = postBlocks[name as keyof typeof postBlocks]
      expect(component.kind).toBe(spec.kind)
      expect(Object.keys(component.schema).sort()).toEqual(Object.keys(spec.attributes).sort())
      for (const [attribute, rule] of Object.entries(spec.attributes as Record<string, { values?: readonly string[] }>)) {
        const field = component.schema[attribute as keyof typeof component.schema]
        if (rule.values) expect(valuesOf(field).sort(), `${name}.${attribute}`).toEqual([...rule.values].sort())
      }
    })
  }
})
