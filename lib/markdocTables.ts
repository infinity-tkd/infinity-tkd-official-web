/**
 * The content editor saves a post's text as Markdoc, which is Markdown plus a few extras. Almost everything it
 * writes is plain Markdown the blog already understands (headings, lists, bold, links, quotes, pictures). Tables
 * are the exception: Markdoc writes them as
 *
 *   {% table %}
 *   - Component
 *   - Maximum
 *   ---
 *   - Accuracy
 *   - 4.0
 *   {% /table %}
 *
 * which the blog's Markdown reader would show as plain text. `markdocTablesToGfm` turns each of those into the
 * ordinary pipe table (| Component | Maximum |), so posts written by hand and posts saved by the editor look the same.
 * Anything else inside {% %} is left alone; `npm run check:data` reports it, because the website cannot show it.
 *
 * It reads the text one line at a time, so it takes time in proportion to the length of the post. (A single regular
 * expression over the whole text got quadratically slower when a post held many "{% table %}" lines that were never
 * closed: a 1 MB file could keep the build busy for over a minute. tests/unit/markdocTables.test.ts guards this.)
 */

/** Lines longer than this cannot be a tag line; they are never tested. */
const MAX_TAG_LINE = 2000

// {% table %} (the tag may carry attributes, which we ignore) and {% /table %}, each on a line of its own.
const OPEN_TABLE = /^[ \t]*\{%[ \t]*table\b[^\n]*%\}[ \t]*$/
const CLOSE_TABLE = /^[ \t]*\{%[ \t]*\/table[ \t]*%\}[ \t]*$/

const withoutCarriageReturn = (line: string) => (line.endsWith('\r') ? line.slice(0, -1) : line)
const isTag = (pattern: RegExp, line: string) => line.length <= MAX_TAG_LINE && pattern.test(withoutCarriageReturn(line))

/** One row of a Markdoc table: a bullet list. A cell can continue on the next, indented line. */
function cellsOf(row: string): string[] {
  const cells: string[] = []
  for (const line of row.split(/\r?\n/)) {
    const start = /^-(?:\s+(.*))?$/.exec(line)
    if (start) cells.push((start[1] ?? '').trim())
    else if (cells.length && line.trim()) cells[cells.length - 1] += ` ${line.trim()}`
  }
  return cells
}

const pipeRow = (cells: string[], width: number) =>
  `| ${Array.from({ length: width }, (_, i) => (cells[i] ?? '').replace(/\|/g, '\\|')).join(' | ')} |`

/** The pipe-table lines for the body of one {% table %} block (empty when the block holds no rows). */
function tableLines(body: string): string[] {
  const rows = body
    .split(/^---[ \t]*\r?$/m)
    .map(cellsOf)
    .filter((cells) => cells.length > 0)
  if (rows.length === 0) return []
  const width = Math.max(...rows.map((cells) => cells.length))
  const [header, ...rest] = rows
  return [pipeRow(header, width), pipeRow(Array(width).fill('---'), width), ...rest.map((cells) => pipeRow(cells, width))]
}

export function markdocTablesToGfm(markdown: string): string {
  if (!markdown.includes('{%')) return markdown
  const lines = markdown.split('\n')
  const out: string[] = []
  let i = 0
  while (i < lines.length) {
    if (!isTag(OPEN_TABLE, lines[i])) {
      out.push(lines[i++])
      continue
    }
    let close = i + 1
    while (close < lines.length && !isTag(CLOSE_TABLE, lines[close])) close += 1
    if (close >= lines.length) {
      // Never closed. There is no closing line further down either, so nothing after this can be a table: keep the rest.
      out.push(...lines.slice(i))
      break
    }
    const converted = tableLines(lines.slice(i + 1, close).join('\n'))
    out.push(...(converted.length ? converted : ['']))
    i = close + 1
  }
  return out.join('\n')
}

/** The Markdoc tags in a post other than tables. The website cannot show these, so `check:data` reports them. */
export function unsupportedMarkdocTags(markdown: string): string[] {
  const tags = [...markdocTablesToGfm(markdown).matchAll(/\{%\s*\/?\s*([A-Za-z][\w-]*)/g)].map((match) => match[1])
  return [...new Set(tags)]
}
