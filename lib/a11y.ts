import type * as React from 'react'

/**
 * Props that make a non-button element (typically a card that opens a dialog) behave like a
 * button for keyboard and assistive-technology users: focusable, announced as a button, and
 * activated with Enter or Space. Prefer a real <button> or <Link> when the content allows it
 * (a <button> may not contain headings or block elements).
 *
 *   <div {...pressable(() => openDetails(item))} className="... cursor-pointer">...</div>
 */
export function pressable(onActivate: () => void) {
  return {
    role: 'button' as const,
    tabIndex: 0,
    onClick: onActivate,
    onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => {
      if (event.target !== event.currentTarget) return
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        onActivate()
      }
    },
  }
}
