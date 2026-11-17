'use client'

import * as React from 'react'
import { SafeImage } from '@/components/SafeImage'
import { describeImage } from '@/lib/imageUrl'

/**
 * The picture of an announcement, in its 16:10 box.
 *
 * The picture is decoration (the headline says what the announcement is about), so when it cannot be shown the whole
 * box is left out and the card is simply text. That covers a link that can never work (Facebook, a folder: no box from
 * the first render) and a picture that fails to load (a Drive file that is not shared, a deleted picture: the box
 * goes once every address has failed). An empty grey rectangle on the live page would look like a bug.
 *
 * Give it a `key` of the picture's address, so a new address starts afresh.
 */
export function NewsPicture({ src, sizes }: { src: string; sizes: string }) {
  const [failed, setFailed] = React.useState(false)
  if (failed || !describeImage(src).url) return null
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-zinc-200 dark:bg-zinc-800">
      <SafeImage src={src} alt="" fallbackSrc="" sizes={sizes} className="h-full w-full object-cover" onExhausted={() => setFailed(true)} />
    </div>
  )
}
