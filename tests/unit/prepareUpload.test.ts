/**
 * The plain helpers behind picture uploads in the content editor (the shrinking itself needs a browser).
 * Run with: npm run test:unit
 */
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { MAX_EDGE, MAX_UPLOAD_BYTES, UPLOAD_ACCEPT, formatBytes, safeUploadName, scaledSize, uploadExtension } from '@/lib/keystatic/prepareUpload'

describe('uploadExtension', () => {
  it('accepts the picture types the website can show, in any letter case', () => {
    assert.equal(uploadExtension('photo.JPG'), 'jpg')
    assert.equal(uploadExtension('photo.jpeg'), 'jpg')
    assert.equal(uploadExtension('logo.PNG'), 'png')
    assert.equal(uploadExtension('a.webp'), 'webp')
    assert.equal(uploadExtension('a.gif'), 'gif')
    assert.equal(uploadExtension('a.avif'), 'avif')
  })

  it('refuses SVG (it can carry scripts) and anything that is not a picture', () => {
    for (const name of ['logo.svg', 'notes.pdf', 'movie.mp4', 'script.js', 'noextension']) assert.equal(uploadExtension(name), null, name)
  })

  it('falls back to the file type when the name has no usable extension', () => {
    assert.equal(uploadExtension('IMG_0001', 'image/jpeg'), 'jpg')
    assert.equal(uploadExtension('download', 'image/png'), 'png')
    assert.equal(uploadExtension('download', 'image/svg+xml'), null)
  })

  it('offers no SVG in the file picker', () => {
    assert.ok(!UPLOAD_ACCEPT.includes('svg'))
    assert.ok(UPLOAD_ACCEPT.includes('image/jpeg'))
  })
})

describe('safeUploadName', () => {
  it('makes a short, plain name: lowercase letters, numbers and dashes, plus a short ending', () => {
    assert.equal(safeUploadName("Coach Moni's Photo (1).JPG", 'jpg', '3fa9c1'), 'coach-moni-s-photo-1-3fa9c1.jpg')
  })

  it('drops accents and symbols, and falls back to "picture" when nothing is left', () => {
    assert.equal(safeUploadName('Café Étoile — Team.png', 'png', 'aaaaaa'), 'cafe-etoile-team-aaaaaa.png')
    assert.equal(safeUploadName('កុមារ.jpg', 'jpg', 'bbbbbb'), 'picture-bbbbbb.jpg')
  })

  it('keeps long names to a sensible length', () => {
    const name = safeUploadName(`${'a'.repeat(200)}.jpg`, 'jpg', 'cccccc')
    assert.ok(name.length <= 40 + '-cccccc.jpg'.length)
  })

  it('gives two uploads of the same file different names', () => {
    assert.notEqual(safeUploadName('team.jpg', 'jpg'), safeUploadName('team.jpg', 'jpg'))
  })

  it('never contains a path or a space', () => {
    for (const original of ['../../etc/passwd.jpg', 'a b c.jpg', 'C:\\x\\y.jpg', 'a/b.jpg']) {
      assert.match(safeUploadName(original, 'jpg'), /^[a-z0-9]+(-[a-z0-9]+)*\.jpg$/, original)
    }
  })
})

describe('scaledSize', () => {
  it('scales a big picture down to fit, keeping its shape', () => {
    assert.deepEqual(scaledSize(4000, 3000), { width: 1600, height: 1200 })
    assert.deepEqual(scaledSize(3000, 4000), { width: 1200, height: 1600 })
  })

  it('never enlarges a small picture', () => {
    assert.deepEqual(scaledSize(800, 600), { width: 800, height: 600 })
    assert.deepEqual(scaledSize(MAX_EDGE, 100), { width: MAX_EDGE, height: 100 })
  })

  it('never produces a zero-sized picture', () => {
    assert.deepEqual(scaledSize(100000, 10), { width: 1600, height: 1 })
    assert.equal(scaledSize(100000, 1).height, 1)
  })
})

describe('formatBytes and the limit', () => {
  it('says sizes in words an editor understands', () => {
    assert.equal(formatBytes(500), '500 bytes')
    assert.equal(formatBytes(490_000), '490 KB')
    assert.equal(formatBytes(2_112_394), '2.1 MB')
  })

  it('keeps a saved picture under 1 MB, because every upload stays in the repository for good', () => {
    assert.equal(MAX_UPLOAD_BYTES, 1_000_000)
  })
})
