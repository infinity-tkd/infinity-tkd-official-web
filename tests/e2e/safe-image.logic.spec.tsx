import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { expect, test } from '@playwright/test'
import { SafeImage } from '@/components/SafeImage'

/**
 * What SafeImage puts in the page for each kind of picture, rendered on the server (no browser needed).
 * Pictures on this site, Unsplash and YouTube must keep exactly the markup they always had: that is what keeps the
 * public pages looking unchanged. Share links get the new treatment.
 */
const html = (props: Partial<React.ComponentProps<typeof SafeImage>>) =>
  renderToStaticMarkup(<SafeImage alt="A picture" className="h-full w-full" {...props} />).replaceAll('&amp;', '&')

const attribute = (markup: string, name: string) => new RegExp(`\\s${name}="([^"]*)"`, 'i').exec(markup)?.[1]
const FALLBACK = 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1200&auto=format&fit=crop'
const DRIVE_ID = '1a2B3c4D5e6F7g8H9i0JkLmNoPqRsTuVw'

test.describe('SafeImage keeps its markup for pictures it has always shown', () => {
  test('a file on this site', () => {
    const markup = html({ src: '/Coaches/master.jpg' })
    expect(attribute(markup, 'src')).toBe('/Coaches/master.jpg')
    expect(attribute(markup, 'loading')).toBe('lazy')
    expect(attribute(markup, 'class')).toBe('h-full w-full')
    for (const absent of ['srcset', 'referrerpolicy', 'style']) expect(attribute(markup, absent), absent).toBeUndefined()
  })

  test('an Unsplash photo: its own responsive srcSet, no optimizer, no referrer change', () => {
    const src = 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop'
    const markup = html({ src })
    expect(attribute(markup, 'src')).toBe(src)
    expect(attribute(markup, 'srcset')).toMatch(/^https:\/\/images\.unsplash\.com\/photo-1544717305-2782549b5136\?.*w=160/)
    expect(markup).not.toContain('/_next/image')
    for (const absent of ['referrerpolicy', 'style']) expect(attribute(markup, absent), absent).toBeUndefined()
  })

  test('a YouTube thumbnail', () => {
    const src = 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg'
    const markup = html({ src })
    expect(attribute(markup, 'src')).toBe(src)
    expect(markup).not.toContain('/_next/image')
    expect(attribute(markup, 'referrerpolicy')).toBeUndefined()
  })

  test('no picture at all', () => {
    expect(attribute(html({ src: undefined }), 'src')).toBeUndefined()
  })
})

test.describe('SafeImage shows the links editors paste', () => {
  test('a Google Drive share link goes through the image optimizer, without a referrer, in a box that does not jump', () => {
    const markup = html({ src: `https://drive.google.com/file/d/${DRIVE_ID}/view?usp=sharing` })
    const thumbnail = `https://drive.google.com/thumbnail?id=${DRIVE_ID}&sz=w1600`
    expect(attribute(markup, 'src')).toBe(`/_next/image?url=${encodeURIComponent(thumbnail)}&w=828&q=75`)
    expect(attribute(markup, 'srcset')).toContain(`/_next/image?url=${encodeURIComponent(thumbnail)}&w=256&q=75 256w`)
    expect(attribute(markup, 'referrerpolicy')).toBe('no-referrer')
    expect(attribute(markup, 'style')).toContain('aspect-ratio:auto 4 / 3')
    expect(attribute(markup, 'loading')).toBe('lazy')
  })

  test('a picture from a host that is not on the allow-list loads straight from that host', () => {
    const markup = html({ src: 'https://example.org/photos/team.jpg' })
    expect(attribute(markup, 'src')).toBe('https://example.org/photos/team.jpg')
    expect(markup).not.toContain('/_next/image')
    expect(attribute(markup, 'referrerpolicy')).toBe('no-referrer')
    expect(attribute(markup, 'style')).toContain('aspect-ratio:auto 4 / 3')
  })

  test('a caller that sizes the picture itself is left alone', () => {
    expect(attribute(html({ src: 'https://example.org/a.jpg', style: { aspectRatio: '1 / 1' } }), 'style')).toBe('aspect-ratio:1 / 1')
    expect(attribute(html({ src: 'https://example.org/a.jpg', width: 120, height: 120 }), 'style')).toBeUndefined()
  })

  test('a link that cannot work shows the fallback photo without asking the other site', () => {
    for (const src of ['https://www.facebook.com/photo/?fbid=1', 'https://www.instagram.com/p/abc/', `https://drive.google.com/drive/folders/${DRIVE_ID}`]) {
      const markup = html({ src })
      expect(attribute(markup, 'src'), src).toBe(FALLBACK)
    }
  })

  test('the fallback photo can be chosen by the caller', () => {
    expect(attribute(html({ src: 'https://www.facebook.com/photo/?fbid=1', fallbackSrc: '/fallback.jpg' }), 'src')).toBe('/fallback.jpg')
  })
})
