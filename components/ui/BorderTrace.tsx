'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * A short light that runs once around the inside edge of its parent card: when the card first comes
 * into view, and again whenever the pointer enters it. At rest it is invisible, so the card keeps
 * its own border. The parent needs `position: relative` and a border radius. Styles: globals.css
 * (.border-trace). With reduced motion it is not shown.
 */
export function BorderTrace({ className }: { className?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null)

  React.useEffect(() => {
    const trace = ref.current
    const card = trace?.parentElement
    if (!trace || !card) return

    let running = false
    const play = () => {
      if (running) return
      running = true
      trace.classList.remove('is-tracing')
      void trace.offsetWidth // restart the lap from the top
      trace.classList.add('is-tracing')
    }
    const finish = () => {
      running = false
    }
    trace.addEventListener('animationend', finish)
    card.addEventListener('pointerenter', play)

    let observer: IntersectionObserver | undefined
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return
          play()
          observer?.disconnect()
        },
        { threshold: 0.25 }
      )
      observer.observe(card)
    } else {
      play()
    }

    return () => {
      observer?.disconnect()
      trace.removeEventListener('animationend', finish)
      card.removeEventListener('pointerenter', play)
    }
  }, [])

  return <span ref={ref} aria-hidden="true" className={cn('border-trace', className)} />
}
