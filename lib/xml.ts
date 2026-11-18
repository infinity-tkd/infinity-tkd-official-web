/**
 * Text for an XML file (the RSS feed).
 *
 * XML 1.0 cannot hold most control characters at all, not even escaped. A single stray one in a post title (they
 * sneak in when text is pasted from a PDF or a Word file) makes the whole feed invalid, and every feed reader and
 * Google then refuses it. So they are removed, and the five characters XML treats as markup are escaped.
 */

// Everything XML 1.0 allows: tab, line feed, carriage return, and the characters from space up to the surrogate range,
// from U+E000 up to U+FFFD (so not U+FFFE or U+FFFF), and the supplementary planes (emoji...).
// With the `u` flag a lone surrogate is a character of its own, so it is matched (and removed) here as well.
const NOT_ALLOWED_IN_XML = /[^\u{9}\u{A}\u{D}\u{20}-\u{D7FF}\u{E000}-\u{FFFD}\u{10000}-\u{10FFFF}]/gu

export function escapeXml(value: string): string {
  return value
    .replace(NOT_ALLOWED_IN_XML, '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
