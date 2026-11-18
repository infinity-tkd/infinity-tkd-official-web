import * as React from 'react'
import { Callout } from '@/components/blog/blocks/Callout'
import { ButtonBlock } from '@/components/blog/blocks/ButtonBlock'
import { FaqGroup, FaqItem } from '@/components/blog/blocks/Faq'
import { PullQuote } from '@/components/blog/blocks/PullQuote'
import { YouTubeEmbed } from '@/components/blog/blocks/YouTubeEmbed'
import { MarkdownContent } from '@/components/blog/MarkdownContent'
import {
  BUTTON_STYLES,
  CALLOUT_KINDS,
  MAX_BLOCK_DEPTH,
  splitBlocks,
  type ButtonStyle,
  type CalloutKind,
  type PostBlock,
  type PostSegment,
} from '@/lib/blogBlocks'
import { youtubeVideoId } from '@/lib/imageUrl'

const oneOf = <T extends string>(list: readonly T[], value: string | undefined, fallback: T): T => (list.find((item) => item === value) ?? fallback)

/** A block's own text (Markdown, and blocks inside blocks, up to MAX_BLOCK_DEPTH levels). */
function Inner({ text, depth }: { text: string; depth: number }) {
  return text.trim() ? <PostBody depth={depth + 1}>{text}</PostBody> : null
}

function renderBlock(block: PostBlock, depth: number): React.ReactNode {
  const { attributes } = block
  switch (block.name) {
    case 'callout':
      return (
        <Callout kind={oneOf<CalloutKind>(CALLOUT_KINDS, attributes.kind, 'note')} title={attributes.title?.trim() || undefined}>
          <Inner text={block.inner} depth={depth} />
        </Callout>
      )
    case 'pullquote':
      return (
        <PullQuote cite={attributes.cite?.trim() || undefined}>
          <Inner text={block.inner} depth={depth} />
        </PullQuote>
      )
    case 'faq':
      return (
        <FaqItem question={attributes.question?.trim() || 'Question'}>
          <Inner text={block.inner} depth={depth} />
        </FaqItem>
      )
    case 'video': {
      // A link that is not a YouTube video shows nothing (the build check reports it before it can go live).
      const id = youtubeVideoId(attributes.url)
      return id ? <YouTubeEmbed id={id} title={attributes.title?.trim() || 'Video'} /> : null
    }
    case 'button':
      return attributes.label?.trim() && attributes.href ? (
        <ButtonBlock label={attributes.label.trim()} href={attributes.href.trim()} style={oneOf<ButtonStyle>(BUTTON_STYLES, attributes.style, 'primary')} />
      ) : null
  }
}

/**
 * A post's text: Markdown, with the content blocks the editor can insert (callouts, videos, buttons, quotes, questions).
 * A post with no blocks goes straight to the Markdown reader, exactly as before.
 */
export function PostBody({ children, depth = 0 }: { children: string; depth?: number }) {
  // Past the depth limit a tag is shown as the text it is (the build check refuses such a post anyway).
  const { segments } = depth >= MAX_BLOCK_DEPTH ? { segments: [{ type: 'markdown', text: children } as PostSegment] } : splitBlocks(children)

  const items: React.ReactNode[] = []
  for (let i = 0; i < segments.length; i += 1) {
    const segment = segments[i]
    if (segment.type === 'markdown') {
      if (segment.text.trim()) items.push(<MarkdownContent key={i}>{segment.text}</MarkdownContent>)
    } else if (segment.block.name === 'faq') {
      // Questions that follow each other (only blank lines between them) are one list.
      const group: PostBlock[] = [segment.block]
      while (i + 1 < segments.length) {
        const next = segments[i + 1]
        const isBlankText = next.type === 'markdown' && !next.text.trim()
        const after = segments[i + 2]
        if (isBlankText && after?.type === 'block' && after.block.name === 'faq') {
          group.push(after.block)
          i += 2
        } else if (next.type === 'block' && next.block.name === 'faq') {
          group.push(next.block)
          i += 1
        } else break
      }
      items.push(
        <FaqGroup key={i}>
          {group.map((block) => (
            <React.Fragment key={block.line}>{renderBlock(block, depth)}</React.Fragment>
          ))}
        </FaqGroup>
      )
    } else {
      items.push(<React.Fragment key={i}>{renderBlock(segment.block, depth)}</React.Fragment>)
    }
  }
  return <>{items}</>
}
