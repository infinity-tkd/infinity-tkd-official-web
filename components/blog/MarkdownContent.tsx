import * as React from 'react'
import Link from 'next/link'
import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { slugify } from '@/lib/blog'

/** Flattens React children to plain text so headings can derive their anchor id. */
function textOf(node: React.ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(textOf).join('')
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) return textOf(node.props.children)
  return ''
}

function isInternal(href: string) {
  return href.startsWith('/') || href.startsWith('#')
}

/** Only allow http(s), mailto, tel and relative links from content. */
function isSafeHref(href: string) {
  return /^(https?:|mailto:|tel:|\/|#)/i.test(href)
}

const components: Components = {
  h2: ({ children }) => (
    <h2
      id={slugify(textOf(children))}
      className="scroll-mt-28 mt-12 mb-5 flex items-center gap-3 text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900 dark:text-white"
    >
      <span aria-hidden="true" className="block w-1.5 h-6 sm:h-7 rounded-full bg-brand-red shrink-0" />
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      id={slugify(textOf(children))}
      className="scroll-mt-28 mt-8 mb-3 text-lg sm:text-xl font-bold text-zinc-900 dark:text-white"
    >
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-6 text-base sm:text-lg leading-8 font-light text-zinc-700 dark:text-zinc-300">{children}</p>
  ),
  a: ({ href = '', children }) => {
    // The accessible text red (5.7:1 on white, see --color-brand-text): body links are 16-18px, too small for #EF2F38.
    const className =
      'font-medium text-[color:var(--color-brand-text)] underline decoration-brand-red/30 underline-offset-4 hover:decoration-brand-red transition-colors'
    if (!isSafeHref(href)) return <span>{children}</span>
    if (isInternal(href)) {
      return href.startsWith('#') ? (
        <a href={href} className={className}>
          {children}
        </a>
      ) : (
        <Link href={href} className={className}>
          {children}
        </Link>
      )
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    )
  },
  // Unordered lists get a red dot marker; ordered lists keep native numbering (red, bold).
  ul: ({ children }) => (
    <ul
      className={[
        'mb-6 space-y-2.5 text-base sm:text-lg leading-8 font-light text-zinc-700 dark:text-zinc-300',
        '[&_ul]:mt-2.5 [&_ul]:mb-0',
        '[&>li]:relative [&>li]:pl-6',
        '[&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.8em]',
        '[&>li]:before:h-1.5 [&>li]:before:w-1.5 [&>li]:before:rounded-full [&>li]:before:bg-brand-red',
        "[&>li]:before:content-['']",
      ].join(' ')}
    >
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-6 list-decimal space-y-2.5 pl-6 text-base sm:text-lg leading-8 font-light text-zinc-700 dark:text-zinc-300 marker:font-bold marker:text-brand-red [&_ol]:mt-2.5 [&_ol]:mb-0">
      {children}
    </ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-8 rounded-r-2xl border-l-4 border-brand-red bg-brand-red/5 px-5 sm:px-6 py-4 [&_p]:mb-0 [&_p]:italic [&_p]:text-zinc-800 dark:[&_p]:text-zinc-200">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-zinc-200 dark:border-zinc-800" />,
  strong: ({ children }) => <strong className="font-bold text-zinc-900 dark:text-white">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  code: ({ children }) => (
    <code className="rounded-md bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 text-[0.9em] text-zinc-800 dark:text-zinc-200">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="my-6 overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-4 text-sm">
      {children}
    </pre>
  ),
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element -- intrinsic size is unknown for inline content images
    <img
      src={typeof src === 'string' ? src : undefined}
      alt={alt ?? ''}
      loading="lazy"
      decoding="async"
      className="my-8 w-full rounded-2xl border border-zinc-200 dark:border-zinc-800"
    />
  ),
  table: ({ children }) => (
    // Focusable so keyboard users can scroll it sideways on phones.
    <div
      role="region"
      aria-label="Table"
      tabIndex={0}
      className="my-8 overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
    >
      <table className="w-full min-w-[420px] border-collapse text-left text-sm sm:text-base">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-zinc-50 dark:bg-zinc-900">{children}</thead>,
  th: ({ children }) => (
    <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">{children}</th>
  ),
  td: ({ children }) => (
    <td className="border-t border-zinc-200 dark:border-zinc-800 px-4 py-3 text-zinc-700 dark:text-zinc-300">
      {children}
    </td>
  ),
}

export function MarkdownContent({ children }: { children: string }) {
  return <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>{children}</ReactMarkdown>
}
