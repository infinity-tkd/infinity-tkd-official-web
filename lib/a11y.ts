import { useEffect, type KeyboardEvent as ReactKeyboardEvent, type RefObject } from 'react'

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
    onKeyDown: (event: ReactKeyboardEvent<HTMLElement>) => {
      if (event.target !== event.currentTarget) return
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        onActivate()
      }
    },
  }
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

/**
 * Focus for a modal dialog (the element with role="dialog", given tabIndex={-1}). While `open`, focus moves to
 * its first control (usually the close button), Tab and Shift+Tab stay inside it, and when it closes focus goes
 * back to the element that opened it. `trap: false` (a menu panel) only moves focus in and back out.
 *
 *   const dialogRef = React.useRef<HTMLDivElement>(null)
 *   useDialogFocus(Boolean(selected), dialogRef)
 *   {selected && <div ref={dialogRef} role="dialog" aria-modal="true" tabIndex={-1}>...</div>}
 */
export function useDialogFocus(open: boolean, ref: RefObject<HTMLElement | null>, { trap = true } = {}) {
  useEffect(() => {
    const dialog = ref.current
    if (!open || !dialog) return
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const controls = () => [...dialog.querySelectorAll<HTMLElement>(FOCUSABLE)].filter((el) => el.getClientRects().length > 0)
    ;(controls()[0] ?? dialog).focus({ preventScroll: true })

    const keepInside = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return
      const items = controls()
      if (!items.length) {
        event.preventDefault()
        return
      }
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    if (trap) dialog.addEventListener('keydown', keepInside)
    return () => {
      dialog.removeEventListener('keydown', keepInside)
      if (opener?.isConnected) opener.focus({ preventScroll: true })
    }
  }, [open, ref, trap])
}
