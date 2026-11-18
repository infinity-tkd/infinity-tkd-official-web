/**
 * Which links inside a blog post may become real links.
 *
 * A post is text that people write and paste, so a link in it is never trusted just because it looks like a link.
 * Allowed:
 *   - https:// and http:// addresses with a real host and no name or password in front of it
 *   - mailto: and tel:
 *   - a path on this website ("/blog", "/pricing#plans") and a #section of the same page
 * Everything else is shown as plain text instead of a link: javascript:, data:, vbscript:, file:, a link written
 * as //other-site.com (which a browser treats as another website although it looks like a path), a backslash
 * trick (/\other-site.com), and addresses with spaces or hidden control characters in them.
 *
 * Pure and dependency-free: used by components/blog/MarkdownContent.tsx and by `npm run check:data`.
 */

// Control characters, spaces, backslashes, and the invisible characters (soft hyphen, zero-width and direction marks,
// line separators, the byte order mark) that make an address look different from what it is.
const FORBIDDEN_CHARACTERS = /[\u{0}-\u{20}\u{7F}-\u{9F}\u{AD}\u{200B}-\u{200F}\u{2028}-\u{202E}\u{2060}-\u{2064}\u{FEFF}\\]/u

/** True when `href` may be turned into a link. */
export function isSafeHref(href: string): boolean {
  if (!href || href.length > 2048 || FORBIDDEN_CHARACTERS.test(href)) return false

  // A section of the same page, or a path on this website. "//host" and "/\host" go to another website, so they are not paths.
  if (href.startsWith('#')) return true
  if (href.startsWith('/')) return !href.startsWith('//')

  if (/^mailto:[^<>"']+$/i.test(href)) return true
  if (/^tel:\+?[\d().%-]+$/i.test(href)) return true

  // The host starts right after "//" ("https:///x" is read by browsers as "https://x/", which no author means).
  if (!/^https?:\/\/[^/?#]/i.test(href)) return false
  try {
    const url = new URL(href)
    return (url.protocol === 'https:' || url.protocol === 'http:') && url.hostname !== '' && url.username === '' && url.password === ''
  } catch {
    return false
  }
}

/** True for a link that stays on this website: a path ("/blog") or a #section. Only meaningful when isSafeHref is true. */
export function isInternalHref(href: string): boolean {
  return href.startsWith('#') || (href.startsWith('/') && !href.startsWith('//'))
}
