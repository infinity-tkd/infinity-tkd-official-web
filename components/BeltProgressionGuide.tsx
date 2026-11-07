'use client'

import * as React from 'react'
import Link from 'next/link'
import { TRAINING_DISCIPLINES, beltProgression, type BeltRank } from '@/data/belts'
import type { BeltFormLink } from '@/lib/beltForms'
import { DanBars } from '@/components/belts/DanBars'
import {
  ArrowUpRight,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Flame,
  Footprints,
  Layers,
  LayoutGrid,
  ListOrdered,
  Target,
  Zap,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

type Gsap = typeof import('gsap').gsap
interface Motion {
  gsap: Gsap
  ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger
}

const MOTION_QUERY = '(prefers-reduced-motion: no-preference)'

/** Highlight colour: the belt's own colour, except white and black belts, which use brand red. */
function accentFor(belt: BeltRank) {
  return belt.hex === '#FFFFFF' || belt.hex === '#000000' ? '#EF2F38' : belt.hex
}

/** A belt's forms as library links, with a badge on forms that have an animated walkthrough. */
function FormLinks({
  belt,
  forms,
  walkthroughLabel,
  chipAttr = false,
}: {
  belt: BeltRank
  forms: Record<string, BeltFormLink>
  walkthroughLabel: string
  chipAttr?: boolean
}) {
  const links = belt.forms.map((id) => forms[id]).filter(Boolean)
  if (!links.length && !belt.alsoTrains?.length) return null
  return (
    <div className="flex flex-wrap gap-1.5">
      {links.map((form) => (
        <Link
          key={form.id}
          href={form.href}
          data-card-chip={chipAttr || undefined}
          className="group inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-2.5 py-1.5 text-xs font-bold text-zinc-800 transition-colors hover:border-brand-red hover:text-brand-red dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
        >
          {form.name}
          {form.hasWalkthrough && (
            <span className="inline-flex items-center gap-1 rounded-md bg-brand-red/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-red">
              <Footprints className="h-3 w-3" aria-hidden="true" /> {walkthroughLabel}
            </span>
          )}
          <ArrowUpRight className="h-3 w-3 text-zinc-400 transition-colors group-hover:text-brand-red" aria-hidden="true" />
        </Link>
      ))}
      {belt.alsoTrains?.map((extra) => (
        <span
          key={extra}
          data-card-chip={chipAttr || undefined}
          className="inline-flex items-center rounded-lg border border-dashed border-zinc-300 px-2.5 py-1.5 text-xs font-semibold text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
        >
          + {extra}
        </span>
      ))}
    </div>
  )
}

/** The colour word of the Korean belt name, e.g. "노란띠 (Noran-tti)" -> "노란". */
function hangulWord(koreanName: string) {
  return koreanName.split(' ')[0].replace(/띠$/, '')
}

/**
 * Reveal for the belt detail card: the card slides in from the travel direction (or rises when
 * `direction` is 0), the colour bar grows, then the content cascades in and the skill chips pop.
 * `fromTo` with explicit end states (not `from`), so a re-initialised tween can never end hidden.
 */
function cardTimeline(gsap: Gsap, card: HTMLElement, direction: number) {
  const q = gsap.utils.selector(card)
  const shown = { autoAlpha: 1, x: 0, y: 0 }
  return gsap
    .timeline({ defaults: { ease: 'power3.out' } })
    .fromTo(card, { autoAlpha: 0, x: direction * 28, y: direction ? 0 : 28 }, { ...shown, duration: 0.5 })
    .fromTo(q('[data-card-bar]'), { scaleY: 0, transformOrigin: '50% 0%' }, { scaleY: 1, duration: 0.7, ease: 'expo.out' }, 0.05)
    .fromTo(q('[data-card-mark]'), { autoAlpha: 0, xPercent: (direction || 1) * 12 }, { autoAlpha: 1, xPercent: 0, duration: 0.9 }, 0)
    .fromTo(q('[data-card-item]'), { autoAlpha: 0, x: direction * 18, y: direction ? 0 : 14 }, { ...shown, duration: 0.45, stagger: 0.035 }, 0.08)
    .fromTo(q('[data-card-chip]'), { autoAlpha: 0, scale: 0.8 }, { autoAlpha: 1, scale: 1, duration: 0.35, stagger: 0.025, ease: 'back.out(2)' }, 0.25)
}

interface BeltProgressionGuideProps {
  /** Library links for the belts' forms, built on the server by getBeltFormLinks(). */
  forms?: Record<string, BeltFormLink>
  /** Keep the selected belt in the URL hash (#blue) so a belt can be linked to directly. */
  syncHash?: boolean
  /** Hide the guide's own title block (for pages that already have a hero heading). */
  hideIntro?: boolean
}

export function BeltProgressionGuide({ forms = {}, syncHash = false, hideIntro = false }: BeltProgressionGuideProps) {
  const { t, localizeList } = useLanguage()
  const belts = React.useMemo(() => localizeList(beltProgression), [localizeList])
  const disciplines = React.useMemo(() => localizeList(TRAINING_DISCIPLINES), [localizeList])
  const labels = t.beltGuide
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [viewMode, setViewMode] = React.useState<'horizontal' | 'vertical'>('horizontal')
  const [motionReady, setMotionReady] = React.useState(false)

  const rootRef = React.useRef<HTMLDivElement>(null)
  const viewRef = React.useRef<HTMLDivElement>(null)
  const stripRef = React.useRef<HTMLDivElement>(null)
  const indicatorRef = React.useRef<HTMLDivElement>(null)
  const cardRef = React.useRef<HTMLDivElement>(null)
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([])
  const motionRef = React.useRef<Motion | null>(null)
  const selectedRef = React.useRef(selectedIndex)
  const previousIndex = React.useRef(selectedIndex)
  const previousView = React.useRef(viewMode)
  const introPlayed = React.useRef(false)
  const swipeStart = React.useRef<{ x: number; y: number } | null>(null)

  const lastIndex = belts.length - 1
  const activeBelt = belts[selectedIndex] ?? belts[0]
  const accent = accentFor(activeBelt)

  /** Moves the glowing frame onto the selected belt tab; on the same row it stretches across, then snaps. */
  const placeIndicator = React.useCallback((animate: boolean) => {
    const indicator = indicatorRef.current
    const tab = tabRefs.current[selectedRef.current]
    if (!indicator || !tab) return
    const box = { x: tab.offsetLeft, y: tab.offsetTop, width: tab.offsetWidth, height: tab.offsetHeight }
    const gsap = motionRef.current?.gsap

    if (!gsap) {
      indicator.style.transform = `translate(${box.x}px, ${box.y}px)`
      indicator.style.width = `${box.width}px`
      indicator.style.height = `${box.height}px`
      indicator.style.opacity = '1'
      return
    }

    gsap.killTweensOf(indicator)
    const x = Number(gsap.getProperty(indicator, 'x'))
    const y = Number(gsap.getProperty(indicator, 'y'))
    const width = indicator.offsetWidth
    if (!animate || width === 0) {
      gsap.set(indicator, { ...box, autoAlpha: 1 })
    } else if (Math.abs(y - box.y) > 1) {
      gsap.to(indicator, { ...box, autoAlpha: 1, duration: 0.5, ease: 'expo.out' })
    } else {
      const left = Math.min(x, box.x)
      gsap
        .timeline()
        .to(indicator, { x: left, width: Math.max(x + width, box.x + box.width) - left, height: box.height, duration: 0.16, ease: 'power2.in' })
        .to(indicator, { x: box.x, width: box.width, duration: 0.5, ease: 'expo.out' })
    }
  }, [])

  // GSAP loads only for visitors who allow motion, and only as the section approaches the viewport.
  React.useEffect(() => {
    const root = rootRef.current
    if (!root || !window.matchMedia(MOTION_QUERY).matches) return
    let cancelled = false
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        observer.disconnect()
        Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
          if (cancelled) return
          gsap.registerPlugin(ScrollTrigger)
          motionRef.current = { gsap, ScrollTrigger }
          setMotionReady(true)
        })
      },
      { rootMargin: '800px 0px' }
    )
    observer.observe(root)
    return () => {
      cancelled = true
      observer.disconnect()
    }
  }, [])

  // Keep the frame on the selected tab when the strip resizes (breakpoints, fonts, view switch).
  React.useEffect(() => {
    const strip = stripRef.current
    if (!strip) return
    const observer = new ResizeObserver(() => placeIndicator(false))
    observer.observe(strip)
    return () => observer.disconnect()
  }, [viewMode, placeIndicator])

  // Belt change: move the frame, centre the tab in the mobile strip and reveal the new card.
  React.useLayoutEffect(() => {
    selectedRef.current = selectedIndex
    if (previousIndex.current === selectedIndex) return
    const direction = selectedIndex > previousIndex.current ? 1 : -1
    previousIndex.current = selectedIndex

    placeIndicator(true)
    const strip = stripRef.current
    const tab = tabRefs.current[selectedIndex]
    if (strip && tab && strip.scrollWidth > strip.clientWidth) {
      strip.scrollTo({
        left: tab.offsetLeft - (strip.clientWidth - tab.offsetWidth) / 2,
        behavior: window.matchMedia(MOTION_QUERY).matches ? 'smooth' : 'auto',
      })
    }

    const gsap = motionRef.current?.gsap
    const card = cardRef.current
    if (!gsap || !card) return
    const timeline = cardTimeline(gsap, card, direction)
    return () => {
      timeline.kill()
    }
  }, [selectedIndex, placeIndicator])

  // Entrance on first scroll into view, view-switch fade, and the scroll-drawn "Full Journey" line.
  React.useLayoutEffect(() => {
    const changed = previousView.current !== viewMode
    previousView.current = viewMode
    const motion = motionRef.current
    const root = rootRef.current
    const view = viewRef.current
    if (!motion || !root || !view) return
    const { gsap, ScrollTrigger } = motion
    const q = gsap.utils.selector(root)

    const ctx = gsap.context(() => {
      if (changed) {
        gsap.fromTo(view, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: 'power3.out' })
      } else if (!introPlayed.current && viewMode === 'horizontal' && root.getBoundingClientRect().top > window.innerHeight * 0.8) {
        // Only when the section is still below the fold, so nothing visible is ever hidden.
        const intro = gsap.timeline({
          defaults: { ease: 'power3.out' },
          scrollTrigger: { trigger: root, start: 'top 78%', once: true },
          onComplete: () => {
            introPlayed.current = true
          },
        })
        const pills = q('[data-guide-pill]')
        intro
          .fromTo(q('[data-guide-intro]'), { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.08 })
          .set(pills, { transition: 'none' }, 0)
          .fromTo(
            q('[data-guide-tab]'),
            { y: 18, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.05, clearProps: 'transform,opacity,visibility' },
            0.25
          )
          .fromTo(
            pills,
            { scaleX: 0, transformOrigin: '0% 50%' },
            { scaleX: 1, duration: 0.8, stagger: 0.05, ease: 'expo.out', clearProps: 'transform,transformOrigin,transition' },
            0.4
          )
          .fromTo(q('[data-guide-indicator]'), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 }, 0.8)
        if (cardRef.current) intro.add(cardTimeline(gsap, cardRef.current, 0), 0.55)
      }

      if (viewMode === 'vertical') {
        // The line draws as you scroll (a clip, so its white → red → black gradient stays in place);
        // each belt node lights up as the line reaches it.
        gsap.fromTo(
          q('[data-journey-fill]'),
          { clipPath: 'inset(0% 0% 100% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            ease: 'none',
            scrollTrigger: { trigger: q('[data-journey-list]')[0], start: 'top 70%', end: 'bottom 70%', scrub: 0.5 },
          }
        )
        q('[data-journey-node]').forEach((node) => {
          gsap.fromTo(
            node,
            { scale: 0.55, opacity: 0.35 },
            { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2.5)', scrollTrigger: { trigger: node, start: 'top 70%', toggleActions: 'play none none reverse' } }
          )
        })
        const below = q('[data-journey-card]').filter((card) => card.getBoundingClientRect().top > window.innerHeight * 0.9)
        if (below.length) {
          gsap.set(below, { autoAlpha: 0, y: 40 })
          ScrollTrigger.batch(below, {
            start: 'top 90%',
            once: true,
            onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out', overwrite: true }),
          })
        }
      }
    }, root)

    // The page height just changed a lot; recalculate every trigger below this section.
    if (changed) ScrollTrigger.refresh()
    return () => ctx.revert()
  }, [viewMode, motionReady])

  // Deep links: /belt-journey#blue opens on that belt, and choosing a belt updates the hash.
  React.useEffect(() => {
    if (!syncHash) return
    const fromHash = () => {
      const index = belts.findIndex((belt) => `#${belt.id}` === window.location.hash)
      if (index >= 0) setSelectedIndex(index)
    }
    fromHash()
    window.addEventListener('hashchange', fromHash)
    return () => window.removeEventListener('hashchange', fromHash)
  }, [syncHash, belts])

  React.useEffect(() => {
    if (!syncHash) return
    const hash = `#${belts[selectedIndex]?.id}`
    if (window.location.hash !== hash && (selectedIndex > 0 || window.location.hash)) {
      window.history.replaceState(null, '', hash)
    }
  }, [syncHash, selectedIndex, belts])

  const selectBelt = (index: number) => {
    const next = Math.min(lastIndex, Math.max(0, index))
    if (next !== selectedIndex) setSelectedIndex(next)
    return next
  }

  const onStripKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const targets: Record<string, number> = {
      ArrowRight: selectedIndex + 1,
      ArrowLeft: selectedIndex - 1,
      Home: 0,
      End: lastIndex,
    }
    if (!(event.key in targets)) return
    event.preventDefault()
    tabRefs.current[selectBelt(targets[event.key])]?.focus({ preventScroll: true })
  }

  // Swipe the detail card left/right on touch screens to change belt.
  const onCardPointerDown = (event: React.PointerEvent) => {
    swipeStart.current = event.pointerType === 'mouse' ? null : { x: event.clientX, y: event.clientY }
  }
  const onCardPointerUp = (event: React.PointerEvent) => {
    const start = swipeStart.current
    swipeStart.current = null
    if (!start) return
    const dx = event.clientX - start.x
    const dy = event.clientY - start.y
    if (Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy) * 1.5) return
    selectBelt(selectedIndex + (dx < 0 ? 1 : -1))
  }

  const navButtonClass =
    'p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-brand-red hover:text-white hover:border-brand-red disabled:opacity-30 disabled:pointer-events-none transition-colors duration-300 shadow-sm cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center'

  return (
    <div
      ref={rootRef}
      className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 sm:p-8 md:p-10 shadow-2xl overflow-hidden relative transition-colors duration-500"
    >
      {/* Ambient glow in the active belt's colour */}
      <div
        className="absolute top-0 right-0 w-96 h-96 blur-[130px] rounded-full pointer-events-none opacity-20 transition-colors duration-700"
        style={{ backgroundColor: accent }}
      />

      {/* Header (the title block is hidden when the page already has its own hero) */}
      <div
        className={
          hideIntro
            ? 'flex justify-end mb-6 pb-5 border-b border-zinc-200 dark:border-zinc-800'
            : 'flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-zinc-200 dark:border-zinc-800 gap-4'
        }
      >
        {!hideIntro && (
          <div>
            <div
              data-guide-intro
              className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-brand-red/10 text-brand-red text-[11px] font-bold uppercase tracking-widest mb-2 border border-brand-red/20"
            >
              <Award className="w-3.5 h-3.5" /> {labels.badge}
            </div>
            <h3 data-guide-intro className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
              {labels.title1} <span className="text-brand-red">{labels.title2}</span>
            </h3>
            <p data-guide-intro className="text-zinc-500 dark:text-zinc-400 text-[13px] sm:text-sm mt-1 max-w-xl">
              {labels.subtitle}
            </p>
          </div>
        )}

        {/* View switcher & belt navigation */}
        <div data-guide-intro className="flex flex-wrap items-center gap-2.5 self-end md:self-auto">
          <div className="inline-flex items-center p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs">
            {(
              [
                ['horizontal', labels.focusView, LayoutGrid],
                ['vertical', labels.fullJourney, ListOrdered],
              ] as const
            ).map(([mode, label, Icon]) => (
              <button
                key={mode}
                type="button"
                onClick={() => setViewMode(mode)}
                aria-pressed={viewMode === mode}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-colors duration-300 flex items-center gap-1 cursor-pointer ${
                  viewMode === mode ? 'bg-brand-red text-white shadow-brand-glow' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                <Icon className="w-3 h-3" /> {label}
              </button>
            ))}
          </div>

          {viewMode === 'horizontal' && (
            <div className="flex items-center gap-1.5">
              <button type="button" onClick={() => selectBelt(selectedIndex - 1)} disabled={selectedIndex === 0} aria-label={labels.previousBelt} className={navButtonClass}>
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button type="button" onClick={() => selectBelt(selectedIndex + 1)} disabled={selectedIndex === lastIndex} aria-label={labels.nextBelt} className={navButtonClass}>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div ref={viewRef}>
        {viewMode === 'horizontal' ? (
          /* MODE 1: FOCUS VIEW — one belt at a time */
          <div>
            <div className="relative mb-8 pt-2">
              {/* Belt tabs: swipeable strip on phones, grid from tablet up. The frame lives inside so it scrolls with the tabs. */}
              <div
                ref={stripRef}
                onKeyDown={onStripKeyDown}
                className="relative z-10 -mx-1.5 flex snap-x touch-pan-x gap-2.5 overflow-x-auto px-1.5 pb-3 pt-1.5 scrollbar-hide sm:m-0 sm:grid sm:grid-cols-4 sm:overflow-visible sm:p-0 lg:grid-cols-8"
              >
                <div
                  ref={indicatorRef}
                  data-guide-indicator
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-0 z-20 rounded-xl border-2 opacity-0 transition-[border-color,box-shadow] duration-500"
                  style={{ borderColor: accent, boxShadow: `0 0 20px ${accent}35` }}
                >
                  <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: accent }} />
                </div>

                {belts.map((belt, index) => {
                  const isSelected = selectedIndex === index
                  return (
                    <button
                      key={belt.id}
                      type="button"
                      data-guide-tab
                      ref={(el) => {
                        tabRefs.current[index] = el
                      }}
                      onClick={() => selectBelt(index)}
                      aria-label={labels.selectBelt.replace('{belt}', belt.name)}
                      aria-pressed={isSelected}
                      className={`group relative p-3 rounded-xl border transition-[border-color,background-color,box-shadow] duration-300 flex flex-col items-center text-center cursor-pointer min-h-[82px] min-w-[125px] sm:min-w-0 shrink-0 sm:shrink justify-center snap-center ${
                        isSelected
                          ? 'border-transparent bg-zinc-50 dark:bg-zinc-900 shadow-sm ring-1 ring-brand-red/30'
                          : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:border-zinc-400 dark:hover:border-zinc-700'
                      }`}
                    >
                      {/* Belt colour pill */}
                      <div
                        data-guide-pill
                        className={`w-full h-3 rounded-lg mb-2 shadow-inner border relative overflow-hidden transition-transform duration-300 ${
                          belt.id === 'white' ? 'border-zinc-300 dark:border-zinc-600' : 'border-black/20'
                        } ${isSelected ? 'scale-105 shadow-md' : 'group-hover:scale-[1.03]'}`}
                        style={{ backgroundColor: belt.hex }}
                      >
                        <DanBars count={belt.danBars} className="right-1/4" />
                        {isSelected && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[pulse_2s_ease-in-out_infinite]" />
                        )}
                      </div>

                      <span className="text-xs font-black uppercase tracking-tight text-zinc-900 dark:text-white leading-tight">
                        {belt.shortName}
                      </span>
                      <span className="text-[11px] text-zinc-400 font-medium truncate max-w-full">{belt.rankTitle}</span>
                    </button>
                  )
                })}
              </div>

              {/* Connector line behind the tabs (desktop) */}
              <div className="hidden lg:block absolute top-[28px] left-8 right-8 h-1 bg-gradient-to-r from-zinc-200 via-brand-red/40 to-black/80 dark:from-zinc-800 dark:via-brand-red/60 dark:to-white/80 rounded-full z-0 opacity-40 pointer-events-none" />
              <p className="type-meta mt-1 sm:hidden">{labels.swipeHint}</p>
            </div>

            {/* Belt detail card (re-mounted per belt; GSAP reveals it from the travel direction) */}
            <div
              key={activeBelt.id}
              ref={cardRef}
              data-guide-card
              onPointerDown={onCardPointerDown}
              onPointerUp={onCardPointerUp}
              onPointerCancel={() => {
                swipeStart.current = null
              }}
              className="bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 sm:p-8 lg:p-10 relative overflow-hidden touch-pan-y"
            >
              {/* Korean colour word, oversized and faint */}
              <span
                data-card-mark
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-6 right-3 select-none whitespace-nowrap text-[7rem] font-black leading-none text-zinc-900/[0.04] dark:text-white/[0.04] sm:text-[10rem]"
              >
                {hangulWord(beltProgression[selectedIndex].koreanName)}
              </span>

              <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-start relative z-10">
                {/* Left column: belt info & philosophy */}
                <div className="lg:col-span-5 space-y-5 sm:space-y-6">
                  <div className="flex items-center gap-4">
                    <div data-card-bar className="w-3.5 h-12 rounded-lg shrink-0 border border-black/20 shadow-md" style={{ backgroundColor: activeBelt.hex }} />
                    <div data-card-item>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-widest block transition-colors duration-300" style={{ color: accent }}>
                          {activeBelt.koreanName}
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                          {activeBelt.rankTitle}
                        </span>
                      </div>
                      <h4 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">{activeBelt.name}</h4>
                    </div>
                  </div>

                  {/* Meaning & philosophy */}
                  <div data-card-item className="p-4 sm:p-5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 block">{labels.symbolism}</span>
                    <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">{activeBelt.meaning}</p>
                    <p className="text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed italic border-t border-zinc-100 dark:border-zinc-800/80 pt-2">
                      &ldquo;{activeBelt.philosophy}&rdquo;
                    </p>
                  </div>

                  {/* Poomsae */}
                  <div data-card-item className="p-4 sm:p-5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-2.5">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-brand-red" />
                      <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">{labels.poomsaeAtBelt}</span>
                    </div>
                    <h5 className="text-sm font-bold text-zinc-900 dark:text-white">{activeBelt.poomsae}</h5>
                    <FormLinks belt={activeBelt} forms={forms} walkthroughLabel={labels.walkthrough} chipAttr />
                    <p className="text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed">{activeBelt.poomsaeMeaning}</p>
                  </div>

                  {/* Timeline & board breaking */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div data-card-item className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                      <div className="p-2 rounded-lg shrink-0" style={{ backgroundColor: `${accent}18`, color: accent }}>
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-zinc-400 font-bold uppercase text-[11px] block">{labels.timeFromStart}</span>
                        <span className="font-bold text-zinc-900 dark:text-white">{activeBelt.timeline}</span>
                      </div>
                    </div>

                    <div data-card-item className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                      <div className="p-2 rounded-lg shrink-0" style={{ backgroundColor: `${accent}18`, color: accent }}>
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-zinc-400 font-bold uppercase text-[11px] block">{labels.boardBreaking}</span>
                        <span className="font-bold text-zinc-900 dark:text-white text-xs block">{activeBelt.tracks.breaking}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column: training tracks, goals, skills, exam checklist */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span data-card-item className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-brand-red" /> {labels.trainingAtBelt}
                    </span>
                    <dl className="divide-y divide-zinc-200 overflow-hidden rounded-xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-950">
                      {disciplines.map((track) => (
                        <div key={track.key} data-card-item className="grid grid-cols-[112px_minmax(0,1fr)] gap-3 px-3.5 py-2.5 text-xs sm:grid-cols-[140px_minmax(0,1fr)]">
                          <dt className="font-bold text-zinc-900 dark:text-white">
                            {track.label}
                            {track.korean !== track.label && <span className="type-hangul text-zinc-400"> {track.korean}</span>}
                          </dt>
                          <dd className="leading-relaxed text-zinc-600 dark:text-zinc-300">{activeBelt.tracks[track.key]}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div>
                    <span data-card-item className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-brand-red" /> {labels.goals}
                    </span>
                    <div className="grid grid-cols-1 gap-2.5">
                      {activeBelt.syllabusGoals.map((goal, i) => (
                        <div
                          key={i}
                          data-card-item
                          className="p-3.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 text-xs text-zinc-800 dark:text-zinc-200 flex items-start gap-2.5"
                        >
                          <span
                            className="w-5 h-5 rounded-lg flex items-center justify-center font-black text-[11px] text-white shrink-0 mt-0.5"
                            style={{ backgroundColor: accent }}
                          >
                            {i + 1}
                          </span>
                          <span className="leading-relaxed font-medium">{goal}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span data-card-item className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-brand-red" /> {labels.skills}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeBelt.physicalSkills.map((skill, i) => (
                        <span
                          key={i}
                          data-card-chip
                          className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span data-card-item className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2.5 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" /> {labels.examChecklist}
                    </span>
                    <div className="space-y-2">
                      {activeBelt.requirements.map((req, i) => (
                        <div
                          key={i}
                          data-card-item
                          className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300"
                        >
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: accent }} />
                          <span className="leading-relaxed font-medium">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* MODE 2: FULL JOURNEY — every belt on one scroll-drawn line */
          <div data-journey-list className="relative pl-6 sm:pl-10 space-y-6">
            <div className="absolute left-3 sm:left-5 top-4 bottom-4 w-1 rounded-full bg-zinc-200/60 dark:bg-zinc-800/60" aria-hidden="true">
              <div
                data-journey-fill
                className="h-full w-full rounded-full bg-gradient-to-b from-zinc-200 via-brand-red to-black dark:from-zinc-800 dark:via-brand-red dark:to-white"
              />
            </div>

            {belts.map((belt) => (
              <div
                key={belt.id}
                id={`journey-${belt.id}`}
                data-journey-card
                className="relative scroll-mt-28 p-6 sm:p-8 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-brand-red/40 transition-colors duration-300"
              >
                {/* Node on the line */}
                <div
                  data-journey-node
                  className="absolute -left-5 sm:-left-7 top-8 w-5 h-5 rounded-lg border-2 border-white dark:border-zinc-950 shadow-md"
                  style={{ backgroundColor: belt.hex }}
                />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-red">{belt.koreanName}</span>
                      <span className="text-[11px] font-mono text-zinc-400">{belt.rankTitle}</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-black uppercase text-zinc-900 dark:text-white">{belt.name}</h4>
                  </div>
                  <span className="px-3 py-1 rounded-lg text-xs font-bold bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 self-start sm:self-auto font-mono">
                    {belt.timeline}
                  </span>
                </div>

                <p className="text-[13px] sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {belt.meaning} &bull; <em className="italic">{belt.philosophy}</em>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 space-y-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 block">{labels.poomsaeAtBelt}</span>
                    <p className="font-bold text-zinc-900 dark:text-white">{belt.poomsae}</p>
                    <FormLinks belt={belt} forms={forms} walkthroughLabel={labels.walkthrough} />
                  </div>
                  <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 block mb-1">{labels.keyFocus}</span>
                    <p className="font-bold text-zinc-900 dark:text-white">{belt.focus}</p>
                  </div>
                </div>

                <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 text-xs sm:grid-cols-2">
                  {disciplines.filter((track) => track.key !== 'poomsae').map((track) => (
                    <div key={track.key} className="flex gap-2">
                      <dt className="w-28 shrink-0 font-bold text-zinc-900 dark:text-white">{track.label}</dt>
                      <dd className="text-zinc-600 dark:text-zinc-400">{belt.tracks[track.key]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
