/** Colour helpers for text drawn in data-driven colours (belt colours, badges). */

const channels = (hex: string) => {
  const n = parseInt(hex.replace('#', ''), 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

/** WCAG relative luminance of a #RRGGBB colour. */
export function luminance(hex: string) {
  const [r, g, b] = channels(hex).map((v) => {
    const s = v / 255
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

/** WCAG contrast ratio between two #RRGGBB colours (1 to 21). */
export function contrastRatio(a: string, b: string) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

/**
 * The closest shade of `hex` that reaches `min` contrast on `background`: darkened toward black on
 * light backgrounds, lightened toward white on dark ones. Returns `hex` unchanged when it already
 * passes, e.g. a yellow belt becomes dark gold on white but stays yellow on black.
 */
export function readableOn(hex: string, background: string, min = 4.5) {
  const target = luminance(background) > 0.18 ? 0 : 255
  const rgb = channels(hex)
  for (let step = 0; step <= 20; step++) {
    const t = step / 20
    const mixed = `#${rgb.map((c) => Math.round(c + (target - c) * t).toString(16).padStart(2, '0')).join('')}`
    if (contrastRatio(mixed, background) >= min) return mixed
  }
  return target ? '#ffffff' : '#000000'
}

/**
 * Fill and text colour for a small label on a data-driven colour. Keeps the site's white-on-colour
 * badge style, deepening the fill just enough for 4.5:1 (brand red #EF2F38 becomes a slightly deeper
 * red), except on clearly light fills such as yellow or bright green, which get black text instead.
 */
export function badgeColors(hex: string): { backgroundColor: string; color: string } {
  if (contrastRatio('#ffffff', hex) >= 4.5) return { backgroundColor: hex, color: '#ffffff' }
  if (contrastRatio('#000000', hex) >= 7) return { backgroundColor: hex, color: '#000000' }
  return { backgroundColor: readableOn(hex, '#ffffff'), color: '#ffffff' }
}
