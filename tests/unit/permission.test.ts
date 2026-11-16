/**
 * Permission to publish, and the names shown for students. Run with: npm run test:unit
 *
 * Nobody has confirmed the permission of the entries that were on the website before it was recorded: the repository
 * must never say they did. A new entry cannot go live without the tick.
 */
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { looksLikeFullName } from '@/lib/content/names'
import { countToConfirm, permissionStateOf } from '@/lib/content/permission'
import { ContentError, file } from '@/lib/content/validate'

describe('permissionStateOf', () => {
  it('knows the two saved states, and an old file with true', () => {
    assert.equal(permissionStateOf('confirmed'), 'confirmed')
    assert.equal(permissionStateOf('to-confirm'), 'to-confirm')
    assert.equal(permissionStateOf(true), 'confirmed')
  })

  it('treats anything else as no tick at all', () => {
    for (const value of [false, '', undefined, null, 'yes', 'true', 'Confirmed', 'to confirm', 1, 0, {}, []]) {
      assert.equal(permissionStateOf(value), null, JSON.stringify(value))
    }
  })
})

describe('requirePermission', () => {
  const check = (entry: Record<string, unknown>) => file('content/students.json', { entries: [entry] }).get('entries').items()[0].requirePermission()

  it('lets an entry through that is confirmed, or still to confirm (live before permission was recorded)', () => {
    assert.doesNotThrow(() => check({ permissionToPublish: 'confirmed' }))
    assert.doesNotThrow(() => check({ permissionToPublish: 'to-confirm' }))
    assert.doesNotThrow(() => check({ permissionToPublish: true }))
  })

  it('stops an entry with no tick, saying where and what to do', () => {
    for (const entry of [{}, { permissionToPublish: false }, { permissionToPublish: '' }, { permissionToPublish: 'maybe' }]) {
      assert.throws(
        () => check(entry),
        (error: unknown) =>
          error instanceof ContentError && /content\/students\.json > entries\[0\]: has no "Permission to publish" tick/.test(error.message),
        JSON.stringify(entry)
      )
    }
  })
})

describe('countToConfirm', () => {
  it('counts the entries still to confirm, wherever they are in a content file', () => {
    const content = {
      spotlights: [{ permissionToPublish: 'to-confirm' }, { permissionToPublish: 'confirmed' }],
      promotions: [{ permissionToPublish: 'to-confirm' }],
      records: [{ competitors: [{ permissionToPublish: 'to-confirm' }, { permissionToPublish: 'to-confirm' }, {}] }],
      note: 'to-confirm',
    }
    assert.equal(countToConfirm(content), 4)
  })

  it('counts nothing in content that has none', () => {
    for (const content of [{}, [], null, undefined, 'to-confirm', 5, { spotlights: [{ permissionToPublish: 'confirmed' }, { permissionToPublish: true }] }]) {
      assert.equal(countToConfirm(content), 0, JSON.stringify(content))
    }
  })
})

describe('looksLikeFullName', () => {
  it('is true for a first name and a whole surname', () => {
    for (const name of ['Sokha Rith', 'Sophea Pich', 'Kimleang Seng Chan', ' Dara  Chan ', 'Mary Ann Smith', 'សុខា រិទ្ធ']) assert.equal(looksLikeFullName(name), true, name)
  })

  it('is false for a first name, or a first name with an initial', () => {
    for (const name of ['Sokha', 'Borey K.', 'Borey K', 'Borey V.', 'Mary-Ann', 'S. R.', 'Kim', '']) assert.equal(looksLikeFullName(name), false, name)
  })
})
