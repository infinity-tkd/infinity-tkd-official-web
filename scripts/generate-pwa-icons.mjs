/**
 * Regenerates the app icons in public/icons from the official belt-loop artwork in components/InfinityLogo.tsx:
 * the home-screen icons the web app manifest points at, the Apple touch icon and the 32px favicon.
 *
 *   npm run icons
 *
 * The Infinity symbol (brand red) sits on the brand's near-black. The maskable icon keeps the symbol inside the
 * 80% safe circle, so Android can crop it to any shape without cutting the logo.
 */
import { mkdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const root = path.resolve(import.meta.dirname, '..')
const outDir = path.join(root, 'public', 'icons')
const source = readFileSync(path.join(root, 'components', 'InfinityLogo.tsx'), 'utf8')

const pathData = ['path1', 'path2', 'path3'].map((name) => {
  const match = source.match(new RegExp(`const ${name} =\\s*'([^']+)'`))
  if (!match) throw new Error(`${name} not found in components/InfinityLogo.tsx`)
  return match[1]
})

const BACKGROUND = '#09090b'
const RED = '#EF2F38'
// The symbol spans x 105-470 and y 260-430 of the logo's coordinates; its centre is (287.5, 345).
const SYMBOL = { width: 365, centreX: 287.5, centreY: 345 }

// fraction: how much of the icon's width the symbol spans.
const ICONS = [
  { file: 'icon-192.png', size: 192, fraction: 0.72 },
  { file: 'icon-512.png', size: 512, fraction: 0.72 },
  { file: 'icon-maskable-512.png', size: 512, fraction: 0.6 },
  { file: 'apple-touch-icon.png', size: 180, fraction: 0.72 },
  { file: 'favicon-32.png', size: 32, fraction: 0.84 },
]

mkdirSync(outDir, { recursive: true })
for (const { file, size, fraction } of ICONS) {
  const scale = (fraction * size) / SYMBOL.width
  const x = size / 2 - SYMBOL.centreX * scale
  const y = size / 2 - SYMBOL.centreY * scale
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">` +
    `<rect width="${size}" height="${size}" fill="${BACKGROUND}"/>` +
    `<g transform="translate(${x} ${y}) scale(${scale})" fill="${RED}">${pathData.map((d) => `<path d="${d}"/>`).join('')}</g></svg>`
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(path.join(outDir, file))
  console.log(`public/icons/${file} (${size}x${size})`)
}
