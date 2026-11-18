import { expect, test } from '@playwright/test'
import { achievements } from '@/lib/keystatic/achievements'
import { permissionToPublish } from '@/lib/keystatic/fields'
import { news } from '@/lib/keystatic/news'
import { students } from '@/lib/keystatic/students'

/**
 * What the editor offers for the content people are named in, and for news. No browser needed.
 * Students are short entries (a first name or initials, a photo and a short note), so the forms hold no surname, age
 * or story; the permission tick keeps "to confirm" apart from "confirmed".
 */

/** The names of the fields of the items in an array field of a singleton. */
function itemFields(schema: Record<string, unknown>, listName: string): string[] {
  const list = schema[listName] as { element: { fields: Record<string, unknown> } }
  return Object.keys(list.element.fields)
}

test.describe('student entries are short', () => {
  test('a spotlight is a name, a permission tick, a belt, a group, a photo and a short note', () => {
    expect(itemFields(students.schema, 'spotlights')).toEqual(['name', 'permissionToPublish', 'beltRank', 'beltHex', 'category', 'image', 'note', 'translations'])
  })

  test('a promotion has no more of the person than a name', () => {
    expect(itemFields(students.schema, 'promotions')).toEqual(['studentName', 'permissionToPublish', 'promotedTo', 'beltHex', 'date', 'examiningMaster', 'poomsaeDemonstrated'])
  })

  test('an award winner has no age', () => {
    const records = achievements.schema.records as unknown as { element: { fields: Record<string, { element?: { fields: Record<string, unknown> } }> } }
    const winnerFields = Object.keys(records.element.fields.competitors.element?.fields ?? {})
    expect(winnerFields).toContain('name')
    expect(winnerFields).not.toContain('age')
  })
})

test.describe('the permission tick', () => {
  const field = permissionToPublish()

  test('a new entry starts unticked and cannot be saved like that', () => {
    expect(field.defaultValue()).toBe('')
    expect(() => field.validate('')).toThrow(/tick the box/)
  })

  test('a ticked entry is "confirmed", and one that was live before permission was recorded stays "to-confirm"', () => {
    expect(field.validate('confirmed')).toBe('confirmed')
    expect(field.validate('to-confirm')).toBe('to-confirm')
    expect(field.parse('to-confirm')).toBe('to-confirm')
    expect(field.parse('confirmed')).toBe('confirmed')
  })

  test('an old file with true is read as confirmed; nothing else is', () => {
    expect(field.parse(true)).toBe('confirmed')
    for (const stored of [false, undefined, 'yes', 5]) expect(field.parse(stored as never)).toBe('')
  })

  test('is saved as it is, and an empty tick is not saved at all', () => {
    expect(field.serialize('confirmed')).toEqual({ value: 'confirmed' })
    expect(field.serialize('to-confirm')).toEqual({ value: 'to-confirm' })
    expect(field.serialize('')).toEqual({ value: undefined })
  })
})

test.describe('news', () => {
  const announcement = (news.schema.items as unknown as { element: { fields: Record<string, { validate(value: string): unknown }> } }).element.fields

  test('an announcement is a headline, a date, a short text, an optional picture and link, and translations', () => {
    expect(itemFields(news.schema, 'items')).toEqual(['title', 'date', 'text', 'image', 'linkUrl', 'linkLabel', 'translations'])
  })

  test('an announcement with no link can be saved (the editor checks the pattern on an empty box too)', () => {
    expect(() => announcement.linkUrl.validate('')).not.toThrow()
  })

  test('a link must be a page of this website, https, mailto or tel', () => {
    for (const link of ['/contact', '/blog/my-post#top', 'https://example.com/page', 'mailto:hello@example.com', 'tel:+85512345678']) {
      expect(() => announcement.linkUrl.validate(link), link).not.toThrow()
    }
    for (const link of ['javascript:alert(1)', '//evil.example', 'not a link', 'ftp://example.com', '/with space', 'data:text/html,x']) {
      expect(() => announcement.linkUrl.validate(link), link).toThrow(/must start with https/)
    }
  })

  test('the headline and the text are required and have limits', () => {
    expect(() => announcement.title.validate('')).toThrow()
    expect(() => announcement.title.validate('x'.repeat(101))).toThrow()
    expect(() => announcement.text.validate('')).toThrow()
    expect(() => announcement.text.validate('x'.repeat(401))).toThrow()
    expect(() => announcement.text.validate('x'.repeat(400))).not.toThrow()
  })
})
