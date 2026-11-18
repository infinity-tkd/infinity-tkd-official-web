'use client'

import * as React from 'react'
import { Play } from 'lucide-react'
import { SafeImage } from '@/components/SafeImage'

/**
 * A YouTube video that loads nothing heavy until the visitor presses play: the page shows the video's own picture
 * (one small image from YouTube's picture server), and only then loads YouTube's player, from youtube-nocookie.com,
 * YouTube's privacy-friendly address. No player, script or cookie from YouTube is loaded before that. Without
 * JavaScript the "Watch on YouTube" link still works. The Content-Security-Policy already allows frames from
 * youtube-nocookie.com (config/siteSettings.ts).
 */
export function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = React.useState(false)
  const watchUrl = `https://www.youtube.com/watch?v=${id}`
  const thumbnail = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`

  return (
    <figure className="my-8">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-900 dark:border-zinc-800">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="group absolute inset-0 flex h-full w-full items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-red"
          >
            <SafeImage src={thumbnail} alt="" fallbackSrc="" className="absolute inset-0 h-full w-full object-cover" />
            <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" aria-hidden="true" />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand-red text-white shadow-lg transition-transform group-hover:scale-105" aria-hidden="true">
              <Play className="ml-1 h-7 w-7 fill-current" />
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 text-center text-sm text-zinc-500 dark:text-zinc-400">
        {title}
        {' · '}
        <a href={watchUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-brand-red">
          Watch on YouTube<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </figcaption>
    </figure>
  )
}
