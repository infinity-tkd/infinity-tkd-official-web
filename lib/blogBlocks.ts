/**
 * Content blocks inside a blog post: a callout, a video, a button, a pull quote, a question and answer.
 *
 * The content editor offers them in its "+" menu and saves them as Markdoc tags in the post file:
 *
 *   {% callout kind="tip" title="Good to know" %}
 *   Text of the callout, as normal Markdown.
 *   {% /callout %}
 *
 *   {% video url="https://youtu.be/dQw4w9WgXcQ" title="What a first class looks like" /%}
 *
 * (Markdoc breaks a long tag over several lines: the attributes go on lines of their own. Both forms are read.)
 *
 * This file is the one list of what exists: `splitBlocks` cuts a post into plain Markdown and blocks for
 * components/blog/PostBody.tsx, `checkBlock` says in plain English what is wrong with a block, and the editor's block
 * definitions (lib/keystatic/blocks.tsx) are built from the same lists, which tests/e2e/blog-schema.logic.spec.ts checks.
 *
 * Pure, and linear in the length of the post: it reads each line once, with a stack, so a post made of thousands of
 * unclosed tags cannot make it slow (tests/unit/blogBlocks.test.ts).
 */
import { youtubeVideoId } from '@/lib/imageUrl'
import { isSafeHref } from '@/lib/safeHref'

export const CALLOUT_KINDS = ['note', 'tip', 'warning', 'safety'] as const
export type CalloutKind = (typeof CALLOUT_KINDS)[number]
export const BUTTON_STYLES = ['primary', 'outline'] as const
export type ButtonStyle = (typeof BUTTON_STYLES)[number]

export interface BlockSpec {
  /** wrapper: has text of its own between an opening and a closing tag. block: one tag, closed with /%}. */
  kind: 'wrapper' | 'block'
  /** The attributes it may carry. `values` limits an attribute to a list. */
  attributes: Record<string, { required?: boolean; values?: readonly string[] }>
}

export const BLOCKS = {
  callout: { kind: 'wrapper', attributes: { kind: { values: CALLOUT_KINDS }, title: {} } },
  video: { kind: 'block', attributes: { url: { required: true }, title: {} } },
  button: { kind: 'block', attributes: { label: { required: true }, href: { required: true }, style: { values: BUTTON_STYLES } } },
  pullquote: { kind: 'wrapper', attributes: { cite: {} } },
  faq: { kind: 'wrapper', attributes: { question: { required: true } } },
} as const satisfies Record<string, BlockSpec>

export type BlockName = keyof typeof BLOCKS
export const BLOCK_NAMES = Object.keys(BLOCKS) as BlockName[]
const isBlockName = (name: string): name is BlockName => Object.hasOwn(BLOCKS, name)

export interface PostBlock {
  name: BlockName
  attributes: Record<string, string>
  /** The Markdown between the opening and the closing tag ('' for a block with no text of its own). */
  inner: string
  /** 1-based line of the opening tag, and of the first line of `inner`. */
  line: number
  innerLine: number
}

export type PostSegment = { type: 'markdown'; text: string } | { type: 'block'; block: PostBlock }

export interface BlockProblem {
  /** 1-based line in the post's text. */
  line: number
  message: string
  /** error: the post must be fixed before it goes live. warning: it works, but not as the author probably meant. */
  level: 'error' | 'warning'
}

/** Blocks may sit inside other blocks (a callout inside an answer) up to this depth. */
export const MAX_BLOCK_DEPTH = 3
/** A tag may take up to this many lines (Markdoc puts each attribute of a long tag on its own line). */
const MAX_TAG_LINES = 12
/** Lines longer than this are never read as tags. */
const MAX_TAG_TEXT = 4000

interface ParsedTag {
  name: string
  closing: boolean
  selfClosing: boolean
  attributes: Record<string, string>
  /** Attribute text the reader could not understand (empty when everything was read). */
  leftover: string
}

const ATTRIBUTE = /\s*([A-Za-z_][\w-]*)=("(?:[^"\\]|\\.)*"|[^\s"][^\s"]*)/y

function parseAttributes(text: string): { attributes: Record<string, string>; leftover: string } {
  const attributes: Record<string, string> = {}
  ATTRIBUTE.lastIndex = 0
  let position = 0
  for (let match = ATTRIBUTE.exec(text); match; match = ATTRIBUTE.exec(text)) {
    position = ATTRIBUTE.lastIndex
    const [, name, raw] = match
    let value = raw
    if (raw.startsWith('"')) {
      try {
        value = JSON.parse(raw) as string // Markdoc writes strings as JSON
      } catch {
        value = raw.slice(1, -1)
      }
    }
    attributes[name] = value
  }
  return { attributes, leftover: text.slice(position).trim() }
}

/** Reads the tag that starts on line `start` ("{% name ... %}", possibly over several lines). null when there is none. */
function readTag(lines: string[], start: number): { tag: ParsedTag; end: number } | null {
  let text = lines[start].trim()
  if (!text.startsWith('{%') || text.length > MAX_TAG_TEXT) return null
  let end = start
  while (!text.endsWith('%}') && end + 1 < lines.length && end - start < MAX_TAG_LINES && text.length < MAX_TAG_TEXT) {
    end += 1
    text += ` ${lines[end].trim()}`
  }
  if (!text.endsWith('%}')) return null

  let inner = text.slice(2, -2).trim()
  const selfClosing = inner.endsWith('/')
  if (selfClosing) inner = inner.slice(0, -1).trimEnd()
  const head = /^(\/?)\s*([A-Za-z][\w-]*)/.exec(inner)
  if (!head) return null
  const { attributes, leftover } = parseAttributes(inner.slice(head[0].length))
  return { tag: { name: head[2], closing: head[1] === '/', selfClosing, attributes, leftover }, end }
}

const FENCE = /^ {0,3}(```|~~~)/

export interface SplitResult {
  segments: PostSegment[]
  problems: BlockProblem[]
}

/**
 * Cuts a post into plain Markdown and blocks. Text with no tag in it comes back as one unchanged Markdown segment.
 * A tag that cannot be used (unknown, never closed, in the wrong place) is left in the text and reported in `problems`.
 */
export function splitBlocks(markdown: string): SplitResult {
  const lines = markdown.split('\n')
  const segments: PostSegment[] = []
  const problems: BlockProblem[] = []
  let text: string[] = [] // plain Markdown waiting to be written out
  const flush = () => {
    if (text.length > 0) segments.push({ type: 'markdown', text: text.join('\n') })
    text = []
  }

  interface Open {
    name: BlockName
    tag: ParsedTag
    /** index of the opening line, and of the first line after the whole opening tag */
    openLine: number
    innerStart: number
  }
  const stack: Open[] = []
  let inFence = false

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i]
    if (FENCE.test(line)) inFence = !inFence
    const read = !inFence && /^\s*\{%/.test(line) ? readTag(lines, i) : null
    if (!read) {
      if (stack.length === 0) text.push(line)
      continue
    }

    const { tag, end } = read
    const lineNumber = i + 1
    const keepAsText = () => {
      if (stack.length === 0) for (let k = i; k <= end; k += 1) text.push(lines[k])
    }

    if (tag.leftover) {
      problems.push({ line: lineNumber, level: 'error', message: `could not read the tag {% ${tag.name} ... %}: "${tag.leftover.slice(0, 40)}"` })
      keepAsText()
    } else if (!isBlockName(tag.name)) {
      problems.push({ line: lineNumber, level: 'error', message: `{% ${tag.closing ? '/' : ''}${tag.name} %} is not a block the website knows` })
      keepAsText()
    } else if (tag.closing) {
      const top = stack[stack.length - 1]
      if (!top || top.name !== tag.name) {
        problems.push({
          line: lineNumber,
          level: 'error',
          message: `the closing tag {% /${tag.name} %} has no matching opening tag${top ? ` (the open one is {% ${top.name} %})` : ''}`,
        })
        keepAsText()
      } else {
        stack.pop()
        if (stack.length === 0) {
          flush()
          segments.push({
            type: 'block',
            block: {
              name: top.name,
              attributes: top.tag.attributes,
              inner: lines.slice(top.innerStart, i).join('\n'),
              line: top.openLine + 1,
              innerLine: top.innerStart + 1,
            },
          })
        }
      }
    } else if (stack.length >= MAX_BLOCK_DEPTH) {
      problems.push({ line: lineNumber, level: 'error', message: `blocks inside blocks go more than ${MAX_BLOCK_DEPTH} levels deep` })
      keepAsText()
    } else if (tag.selfClosing) {
      if (stack.length === 0) {
        flush()
        segments.push({ type: 'block', block: { name: tag.name, attributes: tag.attributes, inner: '', line: lineNumber, innerLine: end + 2 } })
      }
    } else {
      if (BLOCKS[tag.name].kind === 'block') {
        problems.push({ line: lineNumber, level: 'error', message: `{% ${tag.name} %} has no text of its own: it must end with /%} instead of %}` })
      }
      stack.push({ name: tag.name, tag, openLine: i, innerStart: end + 1 })
    }
    i = end
  }

  // Tags that were opened and never closed: their text goes back into the post as it was.
  for (const open of stack) problems.push({ line: open.openLine + 1, level: 'error', message: `{% ${open.name} %} is never closed with {% /${open.name} %}` })
  if (stack.length > 0) {
    for (let k = stack[0].openLine; k < lines.length; k += 1) text.push(lines[k])
  }
  flush()
  return { segments, problems }
}

/**
 * Plain-English problems with one block's options. Empty when the block is fine.
 * An error is a block that would show nothing, or the wrong thing (a video with no link, a button without a working
 * address); a warning is a block that works but not as meant (an option the website does not use, a style it does not know).
 */
export function checkBlock(block: Pick<PostBlock, 'name' | 'attributes'>): Pick<BlockProblem, 'level' | 'message'>[] {
  const spec: BlockSpec = BLOCKS[block.name]
  const found: Pick<BlockProblem, 'level' | 'message'>[] = []
  for (const name of Object.keys(block.attributes)) {
    if (!Object.hasOwn(spec.attributes, name)) found.push({ level: 'warning', message: `${block.name}: "${name}" is not an option of this block, so it is ignored` })
  }
  for (const [name, rule] of Object.entries(spec.attributes)) {
    const value = block.attributes[name]
    if (rule.required && !value?.trim()) found.push({ level: 'error', message: `${block.name}: "${name}" is empty and must be filled in` })
    else if (value && rule.values && !rule.values.includes(value)) {
      found.push({ level: 'warning', message: `${block.name}: "${name}" is "${value}", it must be one of ${rule.values.join(', ')}. The first one is used instead` })
    }
  }
  if (block.name === 'video' && block.attributes.url?.trim() && !youtubeVideoId(block.attributes.url)) {
    found.push({ level: 'error', message: 'video: use a YouTube link, for example https://www.youtube.com/watch?v=... or https://youtu.be/...' })
  }
  if (block.name === 'button' && block.attributes.href?.trim() && !isSafeHref(block.attributes.href)) {
    found.push({ level: 'error', message: 'button: the link must start with https://, mailto:, tel: or / (a page of this website, like /contact)' })
  }
  return found
}

/** Every block in a post, nested ones included, with the problems of the structure and of each block's attributes. */
export function collectBlocks(markdown: string): { blocks: PostBlock[]; problems: BlockProblem[] } {
  const blocks: PostBlock[] = []
  const problems: BlockProblem[] = []
  const visit = (text: string, firstLine: number, depth: number) => {
    const split = splitBlocks(text)
    // Structure problems are found at every level by the top-level pass; deeper passes only look for attribute problems.
    if (depth === 0) problems.push(...split.problems)
    for (const segment of split.segments) {
      if (segment.type !== 'block') continue
      const { block } = segment
      const at = firstLine + block.line - 1
      blocks.push({ ...block, line: at })
      for (const problem of checkBlock(block)) problems.push({ line: at, ...problem })
      if (block.inner && depth < MAX_BLOCK_DEPTH) visit(block.inner, firstLine + block.innerLine - 1, depth + 1)
    }
  }
  visit(markdown, 1, 0)
  return { blocks, problems }
}
