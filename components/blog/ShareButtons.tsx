'use client'

import * as React from 'react'
import { Check, Facebook, Link2, Send } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ShareButtonsProps {
  url: string
  title: string
  className?: string
}

const buttonClass =
  'inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 transition-colors hover:border-brand-red hover:text-brand-red cursor-pointer'

export function ShareButtons({ url, title, className }: ShareButtonsProps) {
  const [copied, setCopied] = React.useState(false)
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard can be blocked (insecure context / permissions); fall back to a prompt.
      window.prompt('Copy this link:', url)
    }
  }

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className="mr-1 text-[11px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Share</span>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        aria-label="Share on Facebook"
      >
        <Facebook className="w-4 h-4" />
      </a>
      <a
        href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        aria-label="Share on Telegram"
      >
        <Send className="w-4 h-4" />
      </a>
      <button type="button" onClick={copyLink} className={buttonClass} aria-label={copied ? 'Link copied' : 'Copy link'}>
        {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Link2 className="w-4 h-4" />}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? 'Link copied to clipboard' : ''}
      </span>
    </div>
  )
}
