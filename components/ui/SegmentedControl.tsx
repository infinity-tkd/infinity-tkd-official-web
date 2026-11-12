'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface SegmentedOption<T extends string> {
  value: T
  label: React.ReactNode
}

interface SegmentedControlProps<T extends string> {
  options: SegmentedOption<T>[]
  value: T
  onChange: (value: T) => void
  /** Accessible name for the group, e.g. "Billing period". */
  label: string
  /**
   * radio (default): a choice that changes values on the page (billing period, membership).
   * tabs: switches which panel is shown. Give that panel `id={`${idBase}-panel`}`, `role="tabpanel"`
   * and `aria-labelledby={`${idBase}-tab-${value}`}`.
   */
  semantics?: 'radio' | 'tabs'
  /** Prefix for the option ids (tabs semantics). */
  idBase?: string
  /** Fill of the sliding highlight. Neutral by default: near-black in light mode, white in dark mode. */
  thumbClassName?: string
  /** Text colour of the chosen option. */
  activeTextClassName?: string
  /** A long row scrolls sideways on narrow screens and keeps the chosen option in view. */
  scrollable?: boolean
  className?: string
}

const KEY_STEP: Record<string, 'next' | 'prev' | 'first' | 'last'> = {
  ArrowRight: 'next',
  ArrowDown: 'next',
  ArrowLeft: 'prev',
  ArrowUp: 'prev',
  Home: 'first',
  End: 'last',
}

/**
 * Two or more mutually exclusive options with a highlight that slides to the chosen one, so the
 * change reads as one movement. Keyboard: one tab stop; arrow keys, Home and End move the choice.
 * Before the first measurement (server HTML) the chosen option carries its own fill, so nothing
 * flashes. Reduced motion: the highlight moves without sliding.
 */
export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  label,
  semantics = 'radio',
  idBase,
  thumbClassName = 'bg-zinc-900 dark:bg-white',
  activeTextClassName = 'text-white dark:text-zinc-900',
  scrollable = false,
  className,
}: SegmentedControlProps<T>) {
  const groupRef = React.useRef<HTMLDivElement>(null)
  const optionRefs = React.useRef<(HTMLButtonElement | null)[]>([])
  const [thumb, setThumb] = React.useState<{ x: number; width: number } | null>(null)
  const selected = Math.max(0, options.findIndex((option) => option.value === value))
  const tabs = semantics === 'tabs'

  React.useLayoutEffect(() => {
    const measure = () => {
      const option = optionRefs.current[selected]
      if (option) setThumb({ x: option.offsetLeft, width: option.offsetWidth })
    }
    measure()
    // Labels change width with the language, web-font loading and the viewport.
    const observer = new ResizeObserver(measure)
    if (groupRef.current) observer.observe(groupRef.current)
    optionRefs.current.forEach((option) => option && observer.observe(option))
    return () => observer.disconnect()
  }, [selected, options.length])

  // On a scrolling row, bring the chosen option to the middle.
  React.useEffect(() => {
    const group = groupRef.current
    const option = optionRefs.current[selected]
    if (!scrollable || !group || !option || group.scrollWidth <= group.clientWidth) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    group.scrollTo({
      left: option.offsetLeft - (group.clientWidth - option.offsetWidth) / 2,
      behavior: reduce ? 'auto' : 'smooth',
    })
  }, [selected, scrollable])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const step = KEY_STEP[event.key]
    if (!step) return
    event.preventDefault()
    const last = options.length - 1
    const target =
      step === 'first' ? 0 : step === 'last' ? last : step === 'next' ? (index === last ? 0 : index + 1) : index === 0 ? last : index - 1
    optionRefs.current[target]?.focus()
    onChange(options[target].value)
  }

  return (
    <div
      ref={groupRef}
      role={tabs ? 'tablist' : 'radiogroup'}
      aria-label={label}
      className={cn(
        'relative inline-flex max-w-full items-center rounded-xl border border-zinc-200 bg-white p-1 dark:border-zinc-800 dark:bg-zinc-900/60',
        scrollable && 'overflow-x-auto overscroll-x-contain scrollbar-hide',
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'absolute bottom-1 left-0 top-1 rounded-lg transition-[transform,width] duration-300 ease-out-expo motion-reduce:transition-none',
          thumbClassName,
          !thumb && 'opacity-0'
        )}
        style={thumb ? { width: thumb.width, transform: `translateX(${thumb.x}px)` } : undefined}
      />
      {options.map((option, index) => {
        const isSelected = index === selected
        return (
          <button
            key={option.value}
            ref={(el) => {
              optionRefs.current[index] = el
            }}
            type="button"
            role={tabs ? 'tab' : 'radio'}
            id={idBase ? `${idBase}-tab-${option.value}` : undefined}
            aria-controls={tabs && idBase && isSelected ? `${idBase}-panel` : undefined}
            aria-selected={tabs ? isSelected : undefined}
            aria-checked={tabs ? undefined : isSelected}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => onChange(option.value)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={cn(
              'relative z-10 flex min-h-[40px] shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-300',
              isSelected ? activeTextClassName : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white',
              // Until the highlight is measured, the chosen option carries the fill itself.
              isSelected && !thumb && thumbClassName
            )}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
