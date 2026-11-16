/**
 * Gets a picture ready to be saved in the website's files from the content editor.
 *
 * Every upload becomes a commit in the repository and stays in its history for good, so pictures are kept small:
 * they are scaled down to at most 1600 px on the long side and saved again as JPEG (or WebP when they have
 * transparent areas). Saving again also removes the hidden data phone photos carry, such as the place they were
 * taken, which matters for pictures of children. A picture that is still over the limit is refused with advice to
 * use a link instead.
 *
 * Runs in the browser only (canvas). The plain helpers at the top are shared with the unit tests.
 */

/** The most one saved picture may weigh. Anything bigger should be a link (Google Drive, Imgur...). */
export const MAX_UPLOAD_BYTES = 1_000_000
/** The biggest file we will even try to shrink. */
export const MAX_ORIGINAL_BYTES = 25_000_000
/** Pictures are scaled down to fit inside this many pixels on the long side. */
export const MAX_EDGE = 1600

const MIME_BY_EXTENSION: Record<string, string> = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
  gif: 'image/gif',
  avif: 'image/avif',
}
const EXTENSION_BY_MIME: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/gif': 'gif',
  'image/avif': 'avif',
}

/** What the file picker should offer. SVG is left out on purpose: an SVG file can carry scripts. */
export const UPLOAD_ACCEPT = Object.values(MIME_BY_EXTENSION)
  .filter((mime, index, all) => all.indexOf(mime) === index)
  .join(',')

/** A problem the editor can fix, in plain English. */
export class UploadError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'UploadError'
  }
}

export interface PreparedUpload {
  /** Name to save under: letters, numbers and dashes, with a short random ending so two uploads never clash. */
  filename: string
  extension: string
  data: Uint8Array
  originalBytes: number
  /** True when the picture was scaled down or saved again. */
  changed: boolean
}

export function formatBytes(bytes: number): string {
  if (bytes < 1000) return `${bytes} bytes`
  if (bytes < 1_000_000) return `${Math.round(bytes / 1000)} KB`
  return `${(bytes / 1_000_000).toFixed(1)} MB`
}

/** "photo.JPG" -> "jpg". null for types that are not allowed. */
export function uploadExtension(filename: string, mime = ''): string | null {
  const fromName = /\.([A-Za-z0-9]+)$/.exec(filename)?.[1]?.toLowerCase()
  if (fromName && MIME_BY_EXTENSION[fromName]) return fromName === 'jpeg' ? 'jpg' : fromName
  return EXTENSION_BY_MIME[mime.toLowerCase()] ?? null
}

/** "Coach Moni's Photo (1).JPG" -> "coach-moni-s-photo-1-3fa9c1.jpg" */
export function safeUploadName(original: string, extension: string, random: string = randomSuffix()): string {
  const base = original
    .replace(/\.[A-Za-z0-9]+$/, '')
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40)
    .replace(/-+$/, '')
  return `${base || 'picture'}-${random}.${extension}`
}

function randomSuffix(): string {
  const bytes = new Uint8Array(3)
  crypto.getRandomValues(bytes)
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('')
}

/** The size a picture is scaled to: it fits inside MAX_EDGE on its long side and is never enlarged. */
export function scaledSize(width: number, height: number, maxEdge = MAX_EDGE): { width: number; height: number } {
  const longSide = Math.max(width, height)
  if (longSide <= maxEdge) return { width, height }
  const scale = maxEdge / longSide
  return { width: Math.max(1, Math.round(width * scale)), height: Math.max(1, Math.round(height * scale)) }
}

// ---------------------------------------------------------------------------------------------
// Browser only
// ---------------------------------------------------------------------------------------------

const toBlob = (canvas: HTMLCanvasElement, type: string, quality: number) =>
  new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, type, quality))

/** True when any pixel is see-through (checked on the already small canvas). */
function hasTransparency(context: CanvasRenderingContext2D, width: number, height: number): boolean {
  const { data } = context.getImageData(0, 0, width, height)
  for (let i = 3; i < data.length; i += 4) if (data[i] < 250) return true
  return false
}

const TOO_BIG_ADVICE = 'Put the picture on Google Drive or Imgur and paste its link instead.'

export async function prepareUpload(file: File): Promise<PreparedUpload> {
  const extension = uploadExtension(file.name, file.type)
  if (!extension) throw new UploadError('Use a JPG, PNG, WebP, GIF or AVIF picture. SVG files are not allowed.')
  if (file.size > MAX_ORIGINAL_BYTES) {
    throw new UploadError(`This file is ${formatBytes(file.size)}, which is too big to upload. ${TOO_BIG_ADVICE}`)
  }

  // Animated GIFs and AVIF cannot be redrawn without losing something: keep them, if they are small enough.
  if (extension === 'gif' || extension === 'avif') {
    if (file.size > MAX_UPLOAD_BYTES) {
      throw new UploadError(`This ${extension.toUpperCase()} is ${formatBytes(file.size)}. Pictures must be under ${formatBytes(MAX_UPLOAD_BYTES)} to upload. ${TOO_BIG_ADVICE}`)
    }
    return { filename: safeUploadName(file.name, extension), extension, data: new Uint8Array(await file.arrayBuffer()), originalBytes: file.size, changed: false }
  }

  let bitmap: ImageBitmap
  try {
    bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' })
  } catch {
    throw new UploadError('This file could not be read as a picture. Try saving it again as a JPG or PNG.')
  }

  const { width, height } = scaledSize(bitmap.width, bitmap.height)
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const context = canvas.getContext('2d', { willReadFrequently: true })
  if (!context) throw new UploadError('This browser cannot shrink pictures. Use a link instead.')
  context.drawImage(bitmap, 0, 0, width, height)
  bitmap.close()

  // Photos become JPEG. Pictures with see-through parts (logos, cut-outs) keep them as WebP, or as PNG where
  // the browser cannot write WebP.
  const transparent = extension === 'png' || extension === 'webp' ? hasTransparency(context, width, height) : false
  const attempts: Array<[string, number]> = transparent
    ? [['image/webp', 0.88], ['image/webp', 0.75], ['image/png', 1]]
    : [['image/jpeg', 0.86], ['image/jpeg', 0.76], ['image/jpeg', 0.66]]

  let best: Blob | null = null
  for (const [type, quality] of attempts) {
    if (!transparent) {
      // JPEG has no transparency: paint white behind the picture first.
      context.globalCompositeOperation = 'destination-over'
      context.fillStyle = '#ffffff'
      context.fillRect(0, 0, width, height)
    }
    const blob = await toBlob(canvas, type, quality)
    if (!blob || blob.type !== type) continue
    best = blob
    if (blob.size <= MAX_UPLOAD_BYTES) break
  }

  if (!best) throw new UploadError('This browser could not shrink the picture. Use a link instead.')
  if (best.size > MAX_UPLOAD_BYTES) {
    throw new UploadError(`Even shrunk, this picture is ${formatBytes(best.size)}. Pictures must be under ${formatBytes(MAX_UPLOAD_BYTES)} to upload. ${TOO_BIG_ADVICE}`)
  }

  const savedExtension = EXTENSION_BY_MIME[best.type] ?? extension
  return {
    filename: safeUploadName(file.name, savedExtension),
    extension: savedExtension,
    data: new Uint8Array(await best.arrayBuffer()),
    originalBytes: file.size,
    changed: true,
  }
}
