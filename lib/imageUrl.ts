/**
 * Turns the picture links people paste into addresses a web page can really show.
 *
 * Editors copy "share" links: a Google Drive link opens a Drive page, not the picture, so an <img> pointing at it
 * stays empty. `describeImage()` recognises the common share-link formats and returns the direct picture address,
 * plus plain-English advice when a link cannot work (Facebook and Instagram, folders, albums...).
 *
 *   resolveImageUrl(link)       the direct address, or the link unchanged when there is nothing to convert
 *   describeImage(link)         everything: kind, direct address, fallbacks, problem and hint for the editor
 *   isOptimizableUrl(address)   may Vercel's image optimizer fetch it? (config/imageHosts.mjs is the allow-list)
 *   optimizedImageUrl(address)  the /_next/image address that serves a resized, cached copy
 *
 * Pure functions with no dependencies on React or Next, so the browser, the server and the tests all share them.
 * Used by components/SafeImage.tsx, components/ui/OptimizedImage.tsx and the editor's image field.
 */
import { OPTIMIZED_IMAGE_HOSTS } from '../config/imageHosts.mjs'

export type ImageKind =
  | 'empty' // nothing entered
  | 'local' // a file in this website's public folder, e.g. /uploads/coaches/x.jpg
  | 'data' // a picture embedded in the text (data:image/...)
  | 'direct' // an ordinary picture address on some other website
  | 'unsplash'
  | 'youtube'
  | 'google-drive'
  | 'google-photos'
  | 'dropbox'
  | 'imgur'
  | 'onedrive'
  | 'blocked' // a site that does not let other websites show its pictures (Facebook, Instagram...)
  | 'page' // a web page, folder or album, not the picture itself
  | 'invalid' // not a web address

export interface ImageSource {
  /** What was entered, trimmed. */
  input: string
  kind: ImageKind
  /** Friendly name of where the picture lives, for the editor ("Google Drive"). */
  label: string
  /** The direct picture address to use. null when this link cannot work. */
  url: string | null
  /** Other direct addresses to try, in order, when `url` does not load. */
  alternatives: string[]
  /** Host of `url`, lower case, or null. */
  host: string | null
  /** True when Vercel's image optimizer is allowed to fetch `url` (see config/imageHosts.mjs). */
  optimizable: boolean
  /** Plain English: why this link cannot work and what to do instead. Missing when the link is fine. */
  problem?: string
  /** Plain English: something worth knowing even when the link works (for example how to share a Drive file). */
  hint?: string
}

// ---------------------------------------------------------------------------------------------
// The image optimizer
// ---------------------------------------------------------------------------------------------

/** The address Next.js serves resized pictures from. */
export const OPTIMIZER_PATH = '/_next/image'

/**
 * Widths the optimizer accepts: the union of Next's default `deviceSizes` and `imageSizes`. The site does not change
 * those, so a width outside this list would be refused (HTTP 400). tests/unit/imageUrl.test.ts checks the list.
 */
export const OPTIMIZER_WIDTHS = [256, 384, 640, 750, 828, 1080, 1200, 1920] as const

/** The one quality every optimized picture uses; it must be listed in `images.qualities` in next.config.mjs. */
export const OPTIMIZER_QUALITY = 75

/** `/_next/image?url=...&w=...&q=...`: a resized, cached copy of the picture, fetched once by the server. */
export function optimizedImageUrl(url: string, width: number, quality: number = OPTIMIZER_QUALITY): string {
  return `${OPTIMIZER_PATH}?url=${encodeURIComponent(url)}&w=${width}&q=${quality}`
}

/** Same rules as Next's `remotePatterns` pathname: "/thumbnail" is exact, "/d/**" is everything under /d/. */
function pathMatches(pattern: string | undefined, pathname: string): boolean {
  if (pattern === undefined || pattern === '/**' || pattern === '**') return true
  if (pattern.endsWith('/**')) {
    const base = pattern.slice(0, -3)
    return pathname === base || pathname.startsWith(`${base}/`)
  }
  return pathname === pattern
}

/** True when Vercel's image optimizer may fetch this address (an https address on an allowed host and path). */
export function isOptimizableUrl(url: string): boolean {
  let parsed: URL
  try {
    parsed = new URL(url)
  } catch {
    return false
  }
  if (parsed.protocol !== 'https:') return false
  // The optimizer refuses SVG files (they can carry scripts); those are shown straight from their host.
  if (/\.svg$/i.test(parsed.pathname)) return false
  const host = parsed.hostname.toLowerCase()
  return OPTIMIZED_IMAGE_HOSTS.some((allowed) => allowed.hostname === host && pathMatches(allowed.pathname, parsed.pathname))
}

// ---------------------------------------------------------------------------------------------
// Reading what was pasted
// ---------------------------------------------------------------------------------------------

const FIX_BY_UPLOADING =
  'Save the picture to your computer and use Upload, or put it on Google Drive or Imgur and paste that link instead.'
const COPY_IMAGE_ADDRESS =
  'Open the picture, right-click it, choose "Copy image address" and paste that here. Or save it and use Upload.'

/** True when `host` is `domain` or one of its subdomains. */
const hostIs = (host: string, ...domains: string[]) => domains.some((domain) => host === domain || host.endsWith(`.${domain}`))

function hostOf(url: string): string | null {
  try {
    return new URL(url).hostname.toLowerCase()
  } catch {
    return null
  }
}

function finish(
  input: string,
  kind: ImageKind,
  label: string,
  url: string | null,
  extra: { alternatives?: string[]; problem?: string; hint?: string } = {}
): ImageSource {
  const source: ImageSource = {
    input,
    kind,
    label,
    url,
    alternatives: extra.alternatives ?? [],
    host: url ? hostOf(url) : null,
    optimizable: url ? isOptimizableUrl(url) : false,
  }
  if (extra.problem) source.problem = extra.problem
  if (extra.hint) source.hint = extra.hint
  return source
}

const broken = (input: string, kind: 'blocked' | 'page' | 'invalid', label: string, problem: string) => finish(input, kind, label, null, { problem })

/** Pasted text often has quotes or <angle brackets> around it, or a missing https://. */
function parseWebAddress(raw: string): URL | null {
  let text = raw
  if (text.startsWith('//')) text = `https:${text}`
  else if (!/^[a-z][a-z0-9+.-]*:/i.test(text) && /^[\w-]+(\.[\w-]+)+(:\d+)?([/?#]|$)/.test(text)) text = `https://${text}`
  try {
    return new URL(text)
  } catch {
    return null
  }
}

// ---------------------------------------------------------------------------------------------
// Google Drive and Google Photos
// ---------------------------------------------------------------------------------------------

const GOOGLE_ID = /^[A-Za-z0-9_-]{10,}$/
const DRIVE_FILE_PATH = /^\/file\/(?:u\/\d+\/)?d\/([A-Za-z0-9_-]{10,})/
const DRIVE_FOLDER_PATH = /^\/drive\/(?:u\/\d+\/)?(?:folders|mobile\/folders)\//
const DRIVE_HINT =
  'In Google Drive, share the file as "Anyone with the link" (Share > General access > Anyone with the link > Viewer). ' +
  'The website keeps a copy of the picture after the first visit, so Drive\'s limit on repeated downloads rarely matters.'

/** Drive picture address: Google's thumbnail service, which serves a resized picture of a file shared with "Anyone with the link". */
function driveSource(input: string, id: string, resourceKey: string | null): ImageSource {
  const key = resourceKey ? `&resourcekey=${encodeURIComponent(resourceKey)}` : ''
  return finish(input, 'google-drive', 'Google Drive', `https://drive.google.com/thumbnail?id=${id}&sz=w1600${key}`, {
    // Tried by the visitor's browser when the main address fails.
    alternatives: [`https://lh3.googleusercontent.com/d/${id}=w1600`, `https://drive.google.com/uc?export=view&id=${id}${key}`],
    hint: DRIVE_HINT,
  })
}

function fromGoogle(input: string, url: URL, host: string): ImageSource | null {
  if (hostIs(host, 'drive.google.com', 'docs.google.com', 'drive.usercontent.google.com')) {
    const { pathname, searchParams } = url
    if (host === 'docs.google.com' && /^\/(document|spreadsheets|presentation|forms|drawings)\//.test(pathname)) {
      return broken(input, 'page', 'Google Docs', 'This is a Google Docs, Sheets or Slides page, not a picture. Put the picture itself on Google Drive and paste its link.')
    }
    if (DRIVE_FOLDER_PATH.test(pathname)) {
      return broken(input, 'page', 'Google Drive folder', 'This is a Google Drive folder, not a picture. Open the picture, click Share, and paste that link.')
    }
    const id = DRIVE_FILE_PATH.exec(pathname)?.[1] ?? searchParams.get('id')
    if (id && GOOGLE_ID.test(id)) return driveSource(input, id, searchParams.get('resourcekey'))
    return broken(input, 'page', 'Google Drive', 'This Google Drive link does not point to a single file. Open the picture, click Share, and paste that link.')
  }

  if (host === 'photos.app.goo.gl' || host === 'photos.google.com' || (host === 'goo.gl' && url.pathname.startsWith('/photos'))) {
    return broken(
      input,
      'page',
      'Google Photos',
      `Google Photos links open a web page, not the picture. Open the photo in Google Photos, right-click it, choose "Copy image address" (it starts with https://lh3.googleusercontent.com/) and paste that. Or save it and use Upload.`
    )
  }

  if (/^lh\d+\.googleusercontent\.com$/.test(host)) {
    const isDrive = url.pathname.startsWith('/d/')
    return finish(input, isDrive ? 'google-drive' : 'google-photos', isDrive ? 'Google Drive' : 'Google Photos', url.toString(), {
      hint: isDrive ? DRIVE_HINT : 'The picture must still be shared in Google Photos. If it disappears later, upload it instead.',
    })
  }
  return null
}

// ---------------------------------------------------------------------------------------------
// Dropbox, Imgur, OneDrive, YouTube, Unsplash
// ---------------------------------------------------------------------------------------------

function fromDropbox(input: string, url: URL, host: string): ImageSource | null {
  if (host === 'dl.dropboxusercontent.com' || host.endsWith('.dl.dropboxusercontent.com') || host === 'dl.dropbox.com') {
    return finish(input, 'dropbox', 'Dropbox', url.toString())
  }
  if (!hostIs(host, 'dropbox.com')) return null
  if (/^\/(sh|scl\/fo)\//.test(url.pathname)) {
    return broken(input, 'page', 'Dropbox folder', 'This is a Dropbox folder, not a picture. Open the picture itself, click Share > Create link, and paste that.')
  }
  if (!/^\/(s|scl\/fi)\//.test(url.pathname)) {
    return broken(input, 'page', 'Dropbox', 'This Dropbox link does not point to a single picture. Open the picture itself, click Share > Create link, and paste that.')
  }
  // "?dl=0" opens a Dropbox page; "?raw=1" sends the file itself (Dropbox then redirects to its download server).
  const direct = new URL(url.toString())
  direct.hostname = 'www.dropbox.com'
  direct.searchParams.delete('dl')
  direct.searchParams.set('raw', '1')
  return finish(input, 'dropbox', 'Dropbox', direct.toString(), { hint: 'In Dropbox the link must let "anyone with the link" view the file.' })
}

function fromImgur(input: string, url: URL, host: string): ImageSource | null {
  if (!hostIs(host, 'imgur.com')) return null
  // .gifv is a video wrapper; the plain .gif is the picture.
  const fixExtension = (name: string) => name.replace(/\.gifv$/i, '.gif')
  const file = /^\/([A-Za-z0-9]{5,8})(\.[A-Za-z0-9]{3,4})?$/.exec(url.pathname)
  if (host === 'i.imgur.com') {
    if (!file) return broken(input, 'page', 'Imgur', 'This Imgur link does not point to one picture. Open the picture and use its own link.')
    const direct = `https://i.imgur.com/${fixExtension(file[1] + (file[2] ?? ''))}`
    return finish(input, 'imgur', 'Imgur', direct)
  }
  if (file) {
    // A picture page: imgur.com/AbCdEf (or imgur.com/AbCdEf.png). The picture itself is on i.imgur.com.
    return finish(input, 'imgur', 'Imgur', `https://i.imgur.com/${fixExtension(file[1] + (file[2] ?? '.jpg'))}`)
  }
  return broken(input, 'page', 'Imgur', 'This Imgur link is an album or gallery page. Open one picture, right-click it, choose "Copy image address" and paste that.')
}

const base64Url = (text: string) =>
  btoa(String.fromCharCode(...new TextEncoder().encode(text)))
    .replace(/=+$/, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')

function fromOneDrive(input: string, url: URL, host: string): ImageSource | null {
  if (host === 'api.onedrive.com') return finish(input, 'onedrive', 'OneDrive', url.toString())
  if (host === '1drv.ms' || host === 'onedrive.live.com') {
    if (host === '1drv.ms' && /^\/f\//.test(url.pathname)) {
      return broken(input, 'page', 'OneDrive folder', 'This is a OneDrive folder, not a picture. Open the picture itself, click Share, and paste that link.')
    }
    // OneDrive's public "shares" address turns any share link into the file itself: u! + the link, base64url encoded.
    url.hash = ''
    const direct = `https://api.onedrive.com/v1.0/shares/u!${base64Url(url.toString())}/root/content`
    return finish(input, 'onedrive', 'OneDrive', direct, {
      hint: 'In OneDrive the link must let "anyone with the link" view the file. If the preview stays empty, use Google Drive or Upload instead.',
    })
  }
  if (host.endsWith('.sharepoint.com')) {
    const direct = new URL(url.toString())
    direct.searchParams.set('download', '1')
    return finish(input, 'onedrive', 'OneDrive for work or school', direct.toString(), {
      hint: 'Work or school OneDrive links often do not open for visitors. If the preview stays empty, use Google Drive or Upload instead.',
    })
  }
  return null
}

function youTubeId(url: URL, host: string): string | null {
  let id: string | null | undefined = null
  if (host === 'youtu.be') id = url.pathname.slice(1).split('/')[0]
  else if (hostIs(host, 'youtube.com', 'youtube-nocookie.com')) {
    id = url.pathname === '/watch' ? url.searchParams.get('v') : /^\/(?:shorts|embed|live|v)\/([\w-]{11})/.exec(url.pathname)?.[1]
  }
  return id && /^[\w-]{11}$/.test(id) ? id : null
}

/** The 11-character id of a YouTube video link (watch, youtu.be, shorts, embed, live), or null for anything else. */
export function youtubeVideoId(input: string | null | undefined): string | null {
  const url = parseWebAddress((input ?? '').trim())
  if (!url || (url.protocol !== 'https:' && url.protocol !== 'http:')) return null
  return youTubeId(url, url.hostname.toLowerCase())
}

function fromYouTube(input: string, url: URL, host: string): ImageSource | null {
  if (host === 'i.ytimg.com' || host === 'img.youtube.com') return finish(input, 'youtube', 'YouTube thumbnail', url.toString())
  const id = youTubeId(url, host)
  if (!id) return null
  return finish(input, 'youtube', 'YouTube video', `https://i.ytimg.com/vi/${id}/hqdefault.jpg`, {
    hint: 'This is a video link, so the video\'s thumbnail picture is used.',
  })
}

// ---------------------------------------------------------------------------------------------
// Sites that cannot work, and pages that are not pictures
// ---------------------------------------------------------------------------------------------

const BLOCKED_SITES: { name: string; domains: string[] }[] = [
  { name: 'Facebook', domains: ['facebook.com', 'fb.com', 'fb.me', 'fb.watch', 'fbcdn.net'] },
  { name: 'Instagram', domains: ['instagram.com', 'cdninstagram.com'] },
  { name: 'TikTok', domains: ['tiktok.com'] },
  { name: 'X (Twitter)', domains: ['twitter.com', 'x.com', 't.co'] },
  { name: 'LinkedIn', domains: ['linkedin.com', 'licdn.com'] },
  { name: 'Pinterest', domains: ['pinterest.com', 'pin.it'] },
  { name: 'Snapchat', domains: ['snapchat.com'] },
  { name: 'Threads', domains: ['threads.net'] },
  { name: 'WhatsApp', domains: ['whatsapp.com', 'wa.me'] },
  { name: 'Telegram', domains: ['t.me', 'telegram.org'] },
  { name: 'Discord', domains: ['discord.com', 'discordapp.com', 'discordapp.net'] },
]

const PAGE_SITES: { name: string; domains: string[] }[] = [
  { name: 'Canva', domains: ['canva.com'] },
  { name: 'WeTransfer', domains: ['wetransfer.com', 'we.tl'] },
  { name: 'MEGA', domains: ['mega.nz', 'mega.io'] },
  { name: 'iCloud', domains: ['icloud.com'] },
  { name: 'Flickr', domains: ['flickr.com'] },
  { name: 'Unsplash', domains: ['unsplash.com'] },
  { name: 'Pexels', domains: ['pexels.com'] },
  { name: 'Pixabay', domains: ['pixabay.com'] },
]

// Search pages. Matched on the exact host, because drive.google.com and docs.google.com are Google too.
const SEARCH_PAGE_HOSTS = ['google.com', 'www.google.com', 'images.google.com', 'bing.com', 'www.bing.com']

// Picture hosts of the sites above (their *pages* are listed above; these serve real picture files).
const DIRECT_PICTURE_HOSTS = [
  'images.unsplash.com',
  'source.unsplash.com',
  'plus.unsplash.com',
  'images.pexels.com',
  'cdn.pixabay.com',
  'live.staticflickr.com',
  'i.pinimg.com',
  'pbs.twimg.com',
]

const NOT_A_PICTURE_FILE = /\.(html?|php|aspx?|jsp|pdf|docx?|xlsx?|pptx?|zip|mp[34]|mov|avi|webm)$/i

function fromSocialOrPage(input: string, host: string): ImageSource | null {
  const blocked = BLOCKED_SITES.find((site) => hostIs(host, ...site.domains))
  if (blocked) {
    return broken(input, 'blocked', blocked.name, `${blocked.name} does not let other websites show its pictures, and its picture links stop working after a few days. ${FIX_BY_UPLOADING}`)
  }
  if (DIRECT_PICTURE_HOSTS.includes(host)) return null
  const page = PAGE_SITES.find((site) => hostIs(host, ...site.domains))
  if (page) return broken(input, 'page', page.name, `This link opens a web page, not the picture itself. ${COPY_IMAGE_ADDRESS}`)
  if (SEARCH_PAGE_HOSTS.includes(host)) {
    return broken(input, 'page', 'Search page', `This link opens a search page, not the picture itself. ${COPY_IMAGE_ADDRESS}`)
  }
  return null
}

// ---------------------------------------------------------------------------------------------
// The one function everything else uses
// ---------------------------------------------------------------------------------------------

/** Works out what a pasted link or file path is and how to show it. Never throws. */
export function describeImage(input: string | null | undefined): ImageSource {
  // Pasted text often arrives with quotes or <angle brackets> around it.
  const raw = (input ?? '').trim().replace(/^<(.*)>$/, '$1').replace(/^(["'])(.*)\1$/, '$2').trim()

  if (!raw) return finish('', 'empty', 'No picture', null)
  if (raw.startsWith('/') && !raw.startsWith('//')) return finish(raw, 'local', 'File on this website', raw)
  if (/^[a-zA-Z]:[\\/]/.test(raw) || raw.startsWith('\\\\') || /^file:/i.test(raw)) {
    return broken(raw, 'invalid', 'File on your computer', 'That is a file on your computer, which visitors cannot see. Use the Upload button instead.')
  }
  if (/^data:image\//i.test(raw)) {
    return finish(raw, 'data', 'Embedded picture', raw, { hint: 'A picture embedded in the text makes pages heavy. Upload it or use a link instead.' })
  }

  const url = parseWebAddress(raw)
  if (!url || (url.protocol !== 'https:' && url.protocol !== 'http:')) {
    return broken(raw, 'invalid', 'Not a web address', 'That does not look like a picture link. A link starts with https://')
  }
  // Pages are served over https; an http:// picture would be blocked as "mixed content".
  url.protocol = 'https:'
  const host = url.hostname.toLowerCase()

  const known =
    fromSocialOrPage(raw, host) ??
    fromGoogle(raw, url, host) ??
    fromDropbox(raw, url, host) ??
    fromImgur(raw, url, host) ??
    fromOneDrive(raw, url, host) ??
    fromYouTube(raw, url, host)
  if (known) return known

  if (host === 'images.unsplash.com') return finish(raw, 'unsplash', 'Unsplash', url.toString())
  if (NOT_A_PICTURE_FILE.test(url.pathname)) {
    return broken(raw, 'page', host, `This link ends in "${url.pathname.split('.').pop()}", so it is a page or document, not a picture. ${COPY_IMAGE_ADDRESS}`)
  }
  return finish(raw, 'direct', host.replace(/^www\./, ''), url.toString())
}

/** The direct picture address for a pasted link, or the link itself (trimmed) when there is nothing to convert. */
export function resolveImageUrl(input: string | null | undefined): string {
  return describeImage(input).url ?? (input ?? '').trim()
}

/**
 * The address to put in a link preview (og:image, twitter:image) or in structured data: a direct https address, or a
 * path on this website. undefined when the picture cannot serve there, so the caller falls back to the site's own
 * image: a link that cannot work (Facebook, a folder, a file on someone's computer...) would only put junk in the
 * page's <head>, and a picture embedded in the text (data:) would put the whole file into it.
 */
export function metadataImageUrl(input: string | null | undefined): string | undefined {
  const source = describeImage(input)
  return source.url && source.kind !== 'data' ? source.url : undefined
}

// ---------------------------------------------------------------------------------------------
// What to try, in what order
// ---------------------------------------------------------------------------------------------

export interface ImageAttempt {
  /** The picture's own address (what an editor would recognise). */
  address: string
  /** What to put in the <img> element: `address` itself, or its /_next/image address when `optimized`. */
  src: string
  /** Sizes to choose from (only for pictures served through the optimizer). */
  srcSet?: string
  /** True when the picture is served through /_next/image (resized and cached by the server). */
  optimized: boolean
}

/**
 * The addresses to try for a picture from another website, best first. A browser moves on to the next one when
 * an address fails to load, and finally to a fallback photo of its own:
 *   1. through the optimizer (the server fetches the picture once, resizes it and caches it for a week);
 *   2. straight from the picture's own host (works when the server is refused but a visitor is not).
 * Pictures on this website (/uploads/...) and embedded ones have a single attempt, and a link that cannot work has none.
 */
export function imageAttempts(source: ImageSource, widths: readonly number[] = OPTIMIZER_WIDTHS): ImageAttempt[] {
  if (!source.url) return []
  if (source.kind === 'local' || source.kind === 'data') return [{ address: source.url, src: source.url, optimized: false }]

  const addresses = [source.url, ...source.alternatives]
  const attempts: ImageAttempt[] = []
  for (const address of addresses) {
    if (!isOptimizableUrl(address)) continue
    attempts.push({
      address,
      src: optimizedImageUrl(address, widths[Math.min(widths.length - 1, 4)]),
      srcSet: widths.map((width) => `${optimizedImageUrl(address, width)} ${width}w`).join(', '),
      optimized: true,
    })
  }
  for (const address of addresses) attempts.push({ address, src: address, optimized: false })
  return attempts
}
