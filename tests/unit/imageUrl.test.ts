/**
 * The picture-link helper, link format by link format. Plain Node tests, no browser and no server:
 *
 *   npm run test:unit
 */
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { matchRemotePattern } from 'next/dist/shared/lib/match-remote-pattern.js'
import { imageConfigDefault } from 'next/dist/shared/lib/image-config.js'
import nextConfig from '../../next.config.mjs'
import { OPTIMIZED_IMAGE_HOSTS, OPTIMIZED_IMAGE_REMOTE_PATTERNS } from '../../config/imageHosts.mjs'
import {
  OPTIMIZER_PATH,
  OPTIMIZER_QUALITY,
  OPTIMIZER_WIDTHS,
  describeImage,
  imageAttempts,
  isOptimizableUrl,
  optimizedImageUrl,
  resolveImageUrl,
} from '@/lib/imageUrl'

const DRIVE_ID = '1a2B3c4D5e6F7g8H9i0JkLmNoPqRsTuVw'
const DRIVE_THUMBNAIL = `https://drive.google.com/thumbnail?id=${DRIVE_ID}&sz=w1600`

describe('Google Drive links', () => {
  const sameFile = [
    ['share link (the usual one)', `https://drive.google.com/file/d/${DRIVE_ID}/view?usp=sharing`],
    ['share link with /edit', `https://drive.google.com/file/d/${DRIVE_ID}/edit`],
    ['share link with an account number', `https://drive.google.com/file/u/0/d/${DRIVE_ID}/view`],
    ['open?id=', `https://drive.google.com/open?id=${DRIVE_ID}`],
    ['open?id= with usp', `https://drive.google.com/open?id=${DRIVE_ID}&usp=drive_fs`],
    ['uc?id=', `https://drive.google.com/uc?id=${DRIVE_ID}`],
    ['uc?export=download&id=', `https://drive.google.com/uc?export=download&id=${DRIVE_ID}`],
    ['uc?export=view&id=', `https://drive.google.com/uc?export=view&id=${DRIVE_ID}`],
    ['an old thumbnail link', `https://drive.google.com/thumbnail?id=${DRIVE_ID}&sz=w200`],
    ['docs.google.com/uc', `https://docs.google.com/uc?id=${DRIVE_ID}`],
    ['the new download host', `https://drive.usercontent.google.com/download?id=${DRIVE_ID}&export=view&authuser=0`],
    ['no https://', `drive.google.com/file/d/${DRIVE_ID}/view`],
    ['with spaces and quotes around it', `  "https://drive.google.com/file/d/${DRIVE_ID}/view?usp=sharing"  `],
    ['in angle brackets', `<https://drive.google.com/file/d/${DRIVE_ID}/view>`],
  ] as const

  for (const [name, link] of sameFile) {
    it(`${name} becomes the thumbnail address`, () => {
      const result = describeImage(link)
      assert.equal(result.kind, 'google-drive')
      assert.equal(result.url, DRIVE_THUMBNAIL)
      assert.equal(result.host, 'drive.google.com')
      assert.equal(result.optimizable, true, 'Drive pictures go through the image optimizer')
      assert.equal(result.problem, undefined)
      assert.match(result.hint ?? '', /Anyone with the link/)
      assert.equal(resolveImageUrl(link), DRIVE_THUMBNAIL)
    })
  }

  it('offers other Drive addresses to try if the first fails', () => {
    const { alternatives } = describeImage(`https://drive.google.com/file/d/${DRIVE_ID}/view`)
    assert.deepEqual(alternatives, [`https://lh3.googleusercontent.com/d/${DRIVE_ID}=w1600`, `https://drive.google.com/uc?export=view&id=${DRIVE_ID}`])
  })

  it('keeps the resource key that older shared files need', () => {
    const result = describeImage(`https://drive.google.com/file/d/${DRIVE_ID}/view?resourcekey=0-AbC_dEf`)
    assert.equal(result.url, `${DRIVE_THUMBNAIL}&resourcekey=0-AbC_dEf`)
  })

  it('says a folder is not a picture', () => {
    for (const link of [`https://drive.google.com/drive/folders/${DRIVE_ID}`, `https://drive.google.com/drive/u/0/folders/${DRIVE_ID}?usp=sharing`]) {
      const result = describeImage(link)
      assert.equal(result.kind, 'page')
      assert.equal(result.url, null)
      assert.match(result.problem ?? '', /folder/)
    }
  })

  it('says a Google Doc, Sheet or Slides page is not a picture', () => {
    const result = describeImage(`https://docs.google.com/document/d/${DRIVE_ID}/edit`)
    assert.equal(result.kind, 'page')
    assert.match(result.problem ?? '', /not a picture/)
  })

  it('says a Drive link without a file is not a picture', () => {
    const result = describeImage('https://drive.google.com/drive/my-drive')
    assert.equal(result.kind, 'page')
    assert.equal(result.url, null)
  })

  it('leaves Drive picture-server addresses as they are', () => {
    const link = `https://lh3.googleusercontent.com/d/${DRIVE_ID}=w800`
    const result = describeImage(link)
    assert.equal(result.kind, 'google-drive')
    assert.equal(result.url, link)
    assert.equal(result.optimizable, true)
  })
})

describe('Google Photos links', () => {
  it('cannot turn a share page into a picture, and explains what to do', () => {
    for (const link of ['https://photos.app.goo.gl/AbCdEfGhIjKlMnOp9', 'https://photos.google.com/share/AF1QipAbCdEf?key=xyz', 'https://photos.google.com/photo/AF1QipAbCdEf']) {
      const result = describeImage(link)
      assert.equal(result.kind, 'page', link)
      assert.equal(result.url, null)
      assert.match(result.problem ?? '', /Copy image address/)
    }
  })

  it('accepts the picture address you get from "Copy image address"', () => {
    const link = 'https://lh3.googleusercontent.com/pw/AP1GczPAbCdEfGhIjKlMnOpQ=w1600-h1200-no'
    const result = describeImage(link)
    assert.equal(result.kind, 'google-photos')
    assert.equal(result.url, link)
    assert.equal(result.optimizable, true)
  })

  it('shows other Google picture servers straight from their host', () => {
    const result = describeImage('https://lh5.googleusercontent.com/abc123=s800')
    assert.equal(result.kind, 'google-photos')
    assert.equal(result.optimizable, false)
  })
})

describe('Dropbox links', () => {
  it('turns ?dl=0 into ?raw=1 on the old /s/ links', () => {
    const result = describeImage('https://www.dropbox.com/s/abc123xyz/coach-photo.jpg?dl=0')
    assert.equal(result.kind, 'dropbox')
    assert.equal(result.url, 'https://www.dropbox.com/s/abc123xyz/coach-photo.jpg?raw=1')
    assert.equal(result.optimizable, true)
  })

  it('keeps the key on the newer /scl/fi/ links', () => {
    const result = describeImage('https://www.dropbox.com/scl/fi/abc123/team.png?rlkey=k3yK3y&st=zz99&dl=0')
    assert.equal(result.url, 'https://www.dropbox.com/scl/fi/abc123/team.png?rlkey=k3yK3y&st=zz99&raw=1')
    assert.equal(result.optimizable, true)
  })

  it('handles ?dl=1, a missing www and a missing query', () => {
    assert.equal(resolveImageUrl('https://dropbox.com/s/abc123/a.jpg?dl=1'), 'https://www.dropbox.com/s/abc123/a.jpg?raw=1')
    assert.equal(resolveImageUrl('https://www.dropbox.com/s/abc123/a.jpg'), 'https://www.dropbox.com/s/abc123/a.jpg?raw=1')
  })

  it('leaves Dropbox direct-download addresses alone', () => {
    const link = 'https://dl.dropboxusercontent.com/s/abc123/a.jpg'
    assert.equal(resolveImageUrl(link), link)
    assert.equal(describeImage(link).optimizable, true)
  })

  it('says a shared folder is not a picture', () => {
    for (const link of ['https://www.dropbox.com/sh/abc123/AAAxyz?dl=0', 'https://www.dropbox.com/scl/fo/abc123/xyz?rlkey=k&dl=0']) {
      const result = describeImage(link)
      assert.equal(result.kind, 'page', link)
      assert.match(result.problem ?? '', /folder/)
    }
  })
})

describe('Imgur links', () => {
  it('turns a picture page into the picture itself', () => {
    const result = describeImage('https://imgur.com/AbCdE12')
    assert.equal(result.kind, 'imgur')
    assert.equal(result.url, 'https://i.imgur.com/AbCdE12.jpg')
    assert.equal(result.optimizable, true)
  })

  it('keeps the file type when the link has one', () => {
    assert.equal(resolveImageUrl('https://imgur.com/AbCdE12.png'), 'https://i.imgur.com/AbCdE12.png')
    assert.equal(resolveImageUrl('https://m.imgur.com/AbCdE12'), 'https://i.imgur.com/AbCdE12.jpg')
  })

  it('leaves direct picture addresses alone, and swaps a .gifv video wrapper for the .gif', () => {
    assert.equal(resolveImageUrl('https://i.imgur.com/AbCdE12.jpg'), 'https://i.imgur.com/AbCdE12.jpg')
    assert.equal(resolveImageUrl('https://i.imgur.com/AbCdE12.gifv'), 'https://i.imgur.com/AbCdE12.gif')
  })

  it('says an album or gallery is not one picture', () => {
    for (const link of ['https://imgur.com/a/AbCdE12', 'https://imgur.com/gallery/AbCdE12']) {
      const result = describeImage(link)
      assert.equal(result.kind, 'page', link)
      assert.match(result.problem ?? '', /album or gallery/)
    }
  })
})

describe('OneDrive links', () => {
  const decodeShare = (address: string) => {
    const token = /\/shares\/u!([^/]+)\/root\/content$/.exec(address)?.[1] ?? ''
    return Buffer.from(token.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8')
  }

  it('turns a 1drv.ms share link into OneDrive\'s public "shares" address', () => {
    const link = 'https://1drv.ms/i/s!AbCdEfGhIjKlMn'
    const result = describeImage(link)
    assert.equal(result.kind, 'onedrive')
    assert.match(result.url ?? '', /^https:\/\/api\.onedrive\.com\/v1\.0\/shares\/u![A-Za-z0-9_-]+\/root\/content$/)
    assert.equal(decodeShare(result.url ?? ''), link, 'the encoded token decodes back to the share link')
    assert.equal(result.optimizable, true)
  })

  it('encodes onedrive.live.com links with their query', () => {
    const link = 'https://onedrive.live.com/?cid=ABC123&id=ABC123%21456&authkey=%21xyz'
    const result = describeImage(link)
    assert.equal(decodeShare(result.url ?? ''), link)
  })

  it('says a OneDrive folder is not a picture', () => {
    assert.equal(describeImage('https://1drv.ms/f/s!AbCdEfGhIjKlMn').kind, 'page')
  })

  it('asks work or school (SharePoint) links to download, and shows them straight from their host', () => {
    const result = describeImage('https://contoso-my.sharepoint.com/:i:/g/personal/anna/EaBcDeF?e=xyz12')
    assert.equal(result.kind, 'onedrive')
    assert.equal(result.url, 'https://contoso-my.sharepoint.com/:i:/g/personal/anna/EaBcDeF?e=xyz12&download=1')
    assert.equal(result.optimizable, false)
  })
})

describe('YouTube links', () => {
  it('uses the thumbnail of a video link', () => {
    for (const link of ['https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://youtu.be/dQw4w9WgXcQ', 'https://www.youtube.com/shorts/dQw4w9WgXcQ']) {
      assert.equal(resolveImageUrl(link), 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg', link)
    }
  })

  it('leaves thumbnail addresses alone', () => {
    const link = 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    assert.equal(resolveImageUrl(link), link)
    assert.equal(describeImage(link).kind, 'youtube')
  })
})

describe('links that cannot work', () => {
  it('says Facebook and Instagram do not let other websites show their pictures', () => {
    const links = [
      'https://www.facebook.com/photo/?fbid=123456789',
      'https://m.facebook.com/story.php?story_fbid=1',
      'https://fb.me/abc',
      'https://scontent.fsgn5-1.fna.fbcdn.net/v/t39.30808-6/123.jpg?oh=abc&oe=65F00000',
      'https://www.instagram.com/p/CxAbCdEfGhI/',
      'https://instagram.fsgn5-1.fna.fbcdn.net/v/t51.2885-15/123.jpg',
      'https://scontent-iad3-1.cdninstagram.com/v/t51/123.jpg',
    ]
    for (const link of links) {
      const result = describeImage(link)
      assert.equal(result.kind, 'blocked', link)
      assert.equal(result.url, null)
      assert.match(result.problem ?? '', /does not let other websites show its pictures/)
      assert.match(result.problem ?? '', /Upload/)
    }
  })

  it('also covers TikTok, X, LinkedIn and Pinterest pages', () => {
    for (const link of ['https://www.tiktok.com/@club/video/1', 'https://x.com/club/status/1', 'https://twitter.com/club/status/1', 'https://www.linkedin.com/posts/club-1', 'https://www.pinterest.com/pin/123/']) {
      assert.equal(describeImage(link).kind, 'blocked', link)
    }
  })

  it('says a web page is not a picture', () => {
    for (const link of ['https://www.google.com/imgres?imgurl=x', 'https://unsplash.com/photos/abc-xyz', 'https://www.canva.com/design/DAF/view', 'https://example.com/team.html', 'https://example.com/flyer.pdf']) {
      const result = describeImage(link)
      assert.equal(result.kind, 'page', link)
      assert.equal(result.url, null)
      assert.ok(result.problem, link)
    }
  })

  it('does not mistake Unsplash and other picture servers for pages', () => {
    assert.equal(describeImage('https://images.unsplash.com/photo-1?w=800').kind, 'unsplash')
    assert.equal(describeImage('https://images.pexels.com/photos/1/a.jpeg').kind, 'direct')
  })

  it('says a file on your computer cannot be seen by visitors', () => {
    for (const link of ['C:\\Users\\Anna\\Pictures\\team.jpg', 'file:///C:/Users/Anna/team.jpg', '\\\\server\\share\\team.jpg']) {
      const result = describeImage(link)
      assert.equal(result.kind, 'invalid', link)
      assert.match(result.problem ?? '', /Upload/)
    }
  })

  it('says text that is not a link is not a link', () => {
    for (const text of ['hello there', 'javascript:alert(1)', 'ftp://example.com/a.jpg', 'blob:https://example.com/123']) {
      assert.equal(describeImage(text).kind, 'invalid', text)
      assert.equal(describeImage(text).url, null)
    }
  })

  it('hands back the pasted text unchanged when there is nothing to convert', () => {
    assert.equal(resolveImageUrl('  https://www.instagram.com/p/abc/  '), 'https://www.instagram.com/p/abc/')
    assert.equal(resolveImageUrl('hello there'), 'hello there')
  })
})

describe('ordinary addresses', () => {
  it('leave a normal picture address unchanged', () => {
    const link = 'https://example.org/photos/team-2026.jpg?size=large'
    const result = describeImage(link)
    assert.equal(result.kind, 'direct')
    assert.equal(result.url, link)
    assert.equal(result.host, 'example.org')
    assert.equal(result.optimizable, false, 'unknown hosts are never sent through the optimizer')
    assert.equal(result.problem, undefined)
    assert.equal(resolveImageUrl(link), link)
  })

  it('upgrade http:// and complete // and bare addresses', () => {
    assert.equal(resolveImageUrl('http://example.org/a.jpg'), 'https://example.org/a.jpg')
    assert.equal(resolveImageUrl('//example.org/a.jpg'), 'https://example.org/a.jpg')
    assert.equal(resolveImageUrl('example.org/a.jpg'), 'https://example.org/a.jpg')
  })

  it('leave pictures on this website alone', () => {
    for (const path of ['/uploads/coaches/keo-moni.jpg', '/Coaches/Master Keo.png']) {
      const result = describeImage(path)
      assert.equal(result.kind, 'local')
      assert.equal(result.url, path)
      assert.equal(result.optimizable, false)
      assert.equal(resolveImageUrl(path), path)
    }
  })

  it('recognise the stock photos the site already uses', () => {
    const link = 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1200&auto=format&fit=crop'
    const result = describeImage(link)
    assert.equal(result.kind, 'unsplash')
    assert.equal(result.url, link)
    assert.equal(result.optimizable, true)
  })

  it('accept an embedded data: picture', () => {
    assert.equal(describeImage('data:image/png;base64,iVBORw0KGgo=').kind, 'data')
  })

  it('treat nothing as nothing', () => {
    for (const nothing of ['', '   ', undefined, null]) {
      const result = describeImage(nothing)
      assert.equal(result.kind, 'empty')
      assert.equal(result.url, null)
      assert.equal(result.problem, undefined)
      assert.equal(resolveImageUrl(nothing), '')
    }
  })

  it('never throw, whatever is pasted', () => {
    for (const text of ['%', 'http://', 'https://%zz', '://', '\u0000', 'a'.repeat(5000), 'https://exa mple.com/a.jpg']) {
      assert.doesNotThrow(() => describeImage(text), text.slice(0, 20))
    }
  })
})

describe('the image optimizer allow-list', () => {
  it('has no wildcard hosts, which would turn the site into an open image proxy', () => {
    for (const { hostname } of OPTIMIZED_IMAGE_HOSTS) {
      assert.ok(hostname && !hostname.includes('*'), `wildcard or empty host: "${hostname}"`)
      assert.match(hostname, /^[a-z0-9.-]+\.[a-z]{2,}$/)
    }
  })

  it('is what next.config.mjs gives Next as images.remotePatterns', () => {
    assert.deepEqual(nextConfig.images.remotePatterns, OPTIMIZED_IMAGE_REMOTE_PATTERNS)
    assert.ok(OPTIMIZED_IMAGE_REMOTE_PATTERNS.every((pattern) => pattern.protocol === 'https'))
  })

  it('agrees with Next\'s own matching rules for every address the helper can produce', () => {
    const addresses = [
      DRIVE_THUMBNAIL,
      `https://drive.google.com/uc?export=view&id=${DRIVE_ID}`,
      `https://drive.google.com/file/d/${DRIVE_ID}/view`,
      `https://lh3.googleusercontent.com/d/${DRIVE_ID}=w1600`,
      'https://lh3.googleusercontent.com/pw/AP1Gcz=w800',
      'https://lh3.googleusercontent.com/a/ACg8oc=s96',
      'https://lh5.googleusercontent.com/pw/AP1Gcz',
      'https://www.dropbox.com/s/abc/a.jpg?raw=1',
      'https://www.dropbox.com/scl/fi/abc/a.jpg?rlkey=k&raw=1',
      'https://www.dropbox.com/scl/fo/abc/xyz',
      'https://dl.dropboxusercontent.com/s/abc/a.jpg',
      'https://uc1234.dl.dropboxusercontent.com/cd/0/inline/abc',
      'https://i.imgur.com/AbCdE12.jpg',
      'https://imgur.com/AbCdE12',
      'https://api.onedrive.com/v1.0/shares/u!aHR0cHM/root/content',
      'https://api.onedrive.com/v1.0/drives/me/items',
      'https://images.unsplash.com/photo-1?w=800',
      'https://source.unsplash.com/random',
      'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
      'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
      'https://example.org/a.jpg',
      'https://evil.example.com/https://images.unsplash.com/a.jpg',
      'https://images.unsplash.com.evil.example/a.jpg',
      'https://notdrive.google.com/thumbnail?id=1',
      'https://drive.google.com/thumbnail/extra?id=1',
    ]
    for (const address of addresses) {
      const url = new URL(address)
      const nextSays = OPTIMIZED_IMAGE_REMOTE_PATTERNS.some((pattern) => matchRemotePattern(pattern, url))
      assert.equal(isOptimizableUrl(address), nextSays, address)
    }
  })

  it('never offers the optimizer anything over plain http, or an SVG', () => {
    assert.equal(isOptimizableUrl('http://images.unsplash.com/a.jpg'), false)
    assert.equal(isOptimizableUrl('https://images.unsplash.com/logo.svg'), false)
    assert.equal(isOptimizableUrl('/uploads/a.jpg'), false)
    assert.equal(isOptimizableUrl('not a url'), false)
  })

  it('only asks the optimizer for widths and a quality that next.config.mjs and Next accept', () => {
    const allowedWidths = new Set<number>([...imageConfigDefault.deviceSizes, ...imageConfigDefault.imageSizes])
    const images: Record<string, unknown> = nextConfig.images
    assert.equal(images.deviceSizes, undefined, 'the site keeps Next\'s default sizes')
    assert.equal(images.imageSizes, undefined, 'the site keeps Next\'s default sizes')
    for (const width of OPTIMIZER_WIDTHS) assert.ok(allowedWidths.has(width), `width ${width} is not one Next accepts`)
    assert.ok(nextConfig.images.qualities.includes(OPTIMIZER_QUALITY), `quality ${OPTIMIZER_QUALITY} is not in images.qualities`)
  })
})

describe('optimizedImageUrl and imageAttempts', () => {
  it('builds the address Next\'s optimizer expects', () => {
    assert.equal(
      optimizedImageUrl('https://i.imgur.com/AbCdE12.jpg', 640),
      `${OPTIMIZER_PATH}?url=https%3A%2F%2Fi.imgur.com%2FAbCdE12.jpg&w=640&q=75`
    )
    // The address inside url= must survive a round trip, query string and all.
    const original = `${DRIVE_THUMBNAIL}&resourcekey=0-AbC`
    const inner = new URL(optimizedImageUrl(original, 828), 'https://site.test').searchParams.get('url')
    assert.equal(inner, original)
  })

  it('tries the optimizer first, then the picture\'s own host, for a Drive link', () => {
    const attempts = imageAttempts(describeImage(`https://drive.google.com/file/d/${DRIVE_ID}/view`))
    assert.deepEqual(
      attempts.map((attempt) => [attempt.optimized, attempt.optimized ? decodeURIComponent(attempt.src.split('url=')[1].split('&')[0]) : attempt.src]),
      [
        [true, DRIVE_THUMBNAIL],
        [true, `https://lh3.googleusercontent.com/d/${DRIVE_ID}=w1600`],
        [false, DRIVE_THUMBNAIL],
        [false, `https://lh3.googleusercontent.com/d/${DRIVE_ID}=w1600`],
        [false, `https://drive.google.com/uc?export=view&id=${DRIVE_ID}`],
      ]
    )
    const first = attempts[0]
    assert.ok(first.srcSet, 'an optimized attempt offers several widths')
    assert.equal(first.srcSet.split(', ').length, OPTIMIZER_WIDTHS.length)
    assert.match(first.srcSet, / 256w,/)
  })

  it('shows a picture from an unknown host straight from that host, with no optimizer', () => {
    const attempts = imageAttempts(describeImage('https://example.org/a.jpg'))
    assert.deepEqual(attempts, [{ address: 'https://example.org/a.jpg', src: 'https://example.org/a.jpg', optimized: false }])
  })

  it('has one attempt for a picture on this website, and none for a link that cannot work', () => {
    assert.deepEqual(imageAttempts(describeImage('/uploads/a.jpg')), [{ address: '/uploads/a.jpg', src: '/uploads/a.jpg', optimized: false }])
    assert.deepEqual(imageAttempts(describeImage('https://www.facebook.com/photo/?fbid=1')), [])
    assert.deepEqual(imageAttempts(describeImage('')), [])
  })
})
