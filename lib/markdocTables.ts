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
 */

// {% table %} ... {% /table %} on lines of their own (the tag may carry attributes, which we ignore).
const TABLE_BLOCK = /^[ \t]*\{%\s*table\b[^\n]*?%\}[ \t]*\r?\n([\s\S]*?)^[ \t]*\{%\s*\/table\s*%\}[ \t]*$/gm

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

export function markdocTablesToGfm(markdown: string): string {
  if (!markdown.includes('{%')) return markdown
  return markdown.replace(TABLE_BLOCK, (_block, body: string) => {
    const rows = body
      .split(/^---[ \t]*$/m)
      .map(cellsOf)
      .filter((cells) => cells.length > 0)
    if (rows.length === 0) return ''
    const width = Math.max(...rows.map((cells) => cells.length))
    const [header, ...rest] = rows
    return [pipeRow(header, width), pipeRow(Array(width).fill('---'), width), ...rest.map((cells) => pipeRow(cells, width))].join('\n')
  })
}

/** The Markdoc tags in a post other than tables. The website cannot show these, so `check:data` reports them. */
export function unsupportedMarkdocTags(markdown: string): string[] {
  const tags = [...markdown.replace(TABLE_BLOCK, '').matchAll(/\{%\s*\/?\s*([A-Za-z][\w-]*)/g)].map((match) => match[1])
  return [...new Set(tags)]
}
