'use client'

import * as React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Check,
  Eye,
  Pause,
  Play,
  RotateCcw,
  SkipBack,
  SkipForward,
  Target,
} from 'lucide-react'
import {
  FACING_CLOCK,
  FACING_DEGREES,
  type Facing,
  type FloorPoint,
  type PoomsaeWalkthrough as WalkthroughData,
  type Stance,
} from '@/data/library/poomsae/poomsaeWalkthroughs'
import { cn } from '@/lib/utils'

gsap.registerPlugin(useGSAP)

interface PoomsaeWalkthroughProps {
  formName: string
  /** The form's existing step descriptions (already localized). Same length as the geometry. */
  stepTexts: string[]
  walkthrough: WalkthroughData
}

type Mode = 'watch' | 'practice'

interface Segment {
  from: FloorPoint
  to: FloorPoint
  length: number
}

interface FootPose {
  x: number
  y: number
  rotation: number
}

const VIEW_W = 340
const VIEW_H = 260
const HOLD_SECONDS = 0.9
const TURN_SECONDS = 0.35
const SPEEDS = [0.5, 1, 1.5]
const FOOT_PATH = 'M0 -6 C2.8 -6 3.4 -2.2 3.2 1.2 C3 4.4 1.7 6 0 6 C-1.7 6 -3 4.4 -3.2 1.2 C-3.4 -2.2 -2.8 -6 0 -6 Z'
const ARROW_PATH = 'M0 -31 L5.5 -23 L-5.5 -23 Z'
const DIRECTIONS: Facing[] = ['N', 'E', 'S', 'W']
const DIRECTION_ICON: Record<Facing, React.ElementType> = { N: ArrowUp, E: ArrowRight, S: ArrowDown, W: ArrowLeft }
const KEY_TO_FACING: Record<string, Facing> = { ArrowUp: 'N', ArrowRight: 'E', ArrowDown: 'S', ArrowLeft: 'W' }

const clamp = (min: number, max: number, value: number) => Math.min(max, Math.max(min, value))

/** Foot positions in the body's own frame (facing up / -y). The rear foot turns out slightly. */
function stancePose(stance: Stance): { left: FootPose; right: FootPose } {
  if (stance.type === 'ready') {
    return { left: { x: -7, y: 0, rotation: 0 }, right: { x: 7, y: 0, rotation: 0 } }
  }
  const half = stance.type === 'front' ? 12 : 7
  const width = stance.type === 'front' ? 7 : 5
  const turnOut = stance.type === 'front' ? 30 : 20
  return stance.lead === 'left'
    ? { left: { x: -width, y: -half, rotation: 0 }, right: { x: width, y: half, rotation: turnOut } }
    : { left: { x: -width, y: half, rotation: -turnOut }, right: { x: width, y: -half, rotation: 0 } }
}

function stanceLabel(stance: Stance): string {
  if (stance.type === 'ready') return 'Ready stance · Joonbi'
  const side = stance.lead === 'left' ? 'Left' : 'Right'
  return stance.type === 'front' ? `${side} front stance · Ap-kubi` : `${side} walking stance · Ap-seogi`
}

/** Splits each step into straight segments: previous position -> via points -> landing point. */
function buildSegments(walkthrough: WalkthroughData): Segment[][] {
  let position = walkthrough.start
  return walkthrough.steps.map((step) =>
    [...(step.via ?? []), step.to].map((point) => {
      const segment = { from: position, to: point, length: Math.hypot(point.x - position.x, point.y - position.y) }
      position = point
      return segment
    })
  )
}

/** Offsets the number badge when two steps land on the same spot (e.g. step 16 ends at the start). */
function buildBadgeOffsets(walkthrough: WalkthroughData): number[] {
  const seen = new Map<string, number>([[`${walkthrough.start.x},${walkthrough.start.y}`, 1]])
  return walkthrough.steps.map((step) => {
    const key = `${step.to.x},${step.to.y}`
    const count = seen.get(key) ?? 0
    seen.set(key, count + 1)
    return count * 20
  })
}

/** Static footprints + arrow, used for the hover preview. */
function GhostPerformer({ point, facing, stance }: { point: FloorPoint; facing: Facing; stance: Stance }) {
  const pose = stancePose(stance)
  return (
    <g transform={`translate(${point.x} ${point.y}) rotate(${FACING_DEGREES[facing]})`} opacity="0.55" pointerEvents="none">
      <path d={ARROW_PATH} fill="#fafafa" />
      <path d={FOOT_PATH} fill="#fafafa" transform={`translate(${pose.left.x} ${pose.left.y}) rotate(${pose.left.rotation})`} />
      <path d={FOOT_PATH} fill="#EF2F38" transform={`translate(${pose.right.x} ${pose.right.y}) rotate(${pose.right.rotation})`} />
    </g>
  )
}

export default function PoomsaeWalkthrough({ formName, stepTexts, walkthrough }: PoomsaeWalkthroughProps) {
  const rootRef = React.useRef<HTMLDivElement>(null)
  const listRef = React.useRef<HTMLOListElement>(null)
  const sliderRef = React.useRef<HTMLInputElement>(null)
  const dialRef = React.useRef<HTMLDivElement>(null)
  const timelineRef = React.useRef<gsap.core.Timeline | null>(null)
  const navTweenRef = React.useRef<gsap.core.Tween | null>(null)
  const labelTimesRef = React.useRef<number[]>([0])
  const targetRef = React.useRef(0)
  const feedbackTimer = React.useRef<number | undefined>(undefined)

  const [current, setCurrent] = React.useState(0) // 0 = ready position, 1..n = step number
  const [playing, setPlaying] = React.useState(false)
  const [speed, setSpeed] = React.useState(1)
  const [mode, setMode] = React.useState<Mode>('watch')
  const [preview, setPreview] = React.useState<number | null>(null)
  const [answered, setAnswered] = React.useState(0) // practice: steps answered correctly
  const [quiz, setQuiz] = React.useState<{ wrong: Facing[]; firstTry: number }>({ wrong: [], firstTry: 0 })
  const [feedback, setFeedback] = React.useState<'correct' | 'wrong' | null>(null)

  const total = walkthrough.steps.length
  const segments = React.useMemo(() => buildSegments(walkthrough), [walkthrough])
  const badgeOffsets = React.useMemo(() => buildBadgeOffsets(walkthrough), [walkthrough])

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root) return
      const q = <T extends Element>(selector: string) => root.querySelector<T>(selector)
      const marker = q<SVGGElement>('[data-marker]')
      const body = q<SVGGElement>('[data-body]')
      const arrow = q<SVGPathElement>('[data-arrow]')
      const leftFoot = q<SVGGElement>('[data-foot="left"]')
      const rightFoot = q<SVGGElement>('[data-foot="right"]')
      const pulse = q<SVGCircleElement>('[data-pulse]')
      const kihapText = q<SVGTextElement>('[data-kihap]')
      if (!marker || !body || !arrow || !leftFoot || !rightFoot || !pulse || !kihapText) return

      const mm = gsap.matchMedia()
      mm.add(
        { reduce: '(prefers-reduced-motion: reduce)', motion: '(prefers-reduced-motion: no-preference)' },
        (context) => {
          const reduce = Boolean(context.conditions?.reduce)
          const dur = (seconds: number) => (reduce ? 0 : seconds)

          // Initial state
          const startPose = stancePose(walkthrough.startStance)
          gsap.set(marker, { x: walkthrough.start.x, y: walkthrough.start.y })
          gsap.set(body, { rotation: FACING_DEGREES[walkthrough.startFacing], transformOrigin: '50% 50%' })
          gsap.set(arrow, { scale: 1, transformOrigin: '50% 100%' })
          gsap.set(leftFoot, { ...startPose.left, scale: 1, transformOrigin: '50% 50%' })
          gsap.set(rightFoot, { ...startPose.right, scale: 1, transformOrigin: '50% 50%' })
          gsap.set([pulse, kihapText], { autoAlpha: 0, scale: 1, transformOrigin: '50% 50%' })
          gsap.set('[data-badge]', { autoAlpha: 0.22, scale: 0.75, transformOrigin: '50% 50%' })

          const tl = gsap.timeline({
            paused: true,
            defaults: { ease: 'power2.inOut' },
            onUpdate: () => {
              const time = tl.time()
              const times = labelTimesRef.current
              let index = 0
              for (let i = 0; i < times.length; i++) if (times[i] <= time + 0.001) index = i
              setCurrent(index) // React bails out when unchanged
              if (sliderRef.current) sliderRef.current.value = String(Math.round(tl.progress() * 1000))
            },
            onComplete: () => setPlaying(false),
          })

          const labelTimes = [0]
          tl.addLabel('s0', 0)
          let rotation = FACING_DEGREES[walkthrough.startFacing]
          let previousPose = startPose

          walkthrough.steps.forEach((step, index) => {
            const stepNumber = index + 1
            const pose = stancePose(step.stance)
            const isKick = step.techniques.some((t) => t.includes('Ap-chagi'))
            const hasPunch = step.techniques.some((t) => t.includes('jireugi'))

            // Reduced motion: moves are instant, so pause *before* each step to keep labels distinct.
            if (reduce) tl.to({}, { duration: HOLD_SECONDS })

            // 1. Pivot to face the new direction (springy, like a real turn on the ball of the foot).
            const target = FACING_DEGREES[step.facing]
            let delta = ((target - (((rotation % 360) + 360) % 360) + 540) % 360) - 180
            if (Math.abs(delta) === 180) delta = step.turn === 'ccw' ? -180 : 180
            if (delta !== 0) {
              rotation += delta
              tl.to(body, { rotation, duration: dur(TURN_SECONDS), ease: 'back.out(1.6)' })
            }

            // 2. Travel the floor line, drawing the trail (plus a soft glow) behind the marker.
            const moveStart = tl.duration()
            let moveDuration = 0
            segments[index].forEach((segment, segIndex) => {
              const duration = dur(clamp(0.35, 0.8, segment.length / 140))
              moveDuration += duration
              tl.to(marker, { x: segment.to.x, y: segment.to.y, duration })
              tl.to(root.querySelectorAll(`[data-seg="${index}-${segIndex}"]`), { strokeDashoffset: 0, duration }, '<')
            })
            if (isKick) moveDuration = Math.max(moveDuration, dur(0.8))

            // 3. Feet: the stepping foot lifts (and snaps out on a front kick); the other slides into place.
            const leftMovesForward = pose.left.y - previousPose.left.y < pose.right.y - previousPose.right.y
            const [stepFoot, stepPose, plantFoot, plantPose] = leftMovesForward
              ? [leftFoot, pose.left, rightFoot, pose.right]
              : [rightFoot, pose.right, leftFoot, pose.left]

            tl.to(plantFoot, { ...plantPose, duration: moveDuration }, moveStart)
            tl.to(stepFoot, { x: stepPose.x, rotation: stepPose.rotation, duration: moveDuration }, moveStart)
            tl.to(
              stepFoot,
              {
                keyframes: isKick
                  ? [
                      { y: -32, scale: 1.45, duration: moveDuration * 0.45, ease: 'power3.out' },
                      { y: stepPose.y, scale: 1, duration: moveDuration * 0.55, ease: 'power2.inOut' },
                    ]
                  : [
                      { y: (stepPose.y + (leftMovesForward ? previousPose.left.y : previousPose.right.y)) / 2, scale: 1.3, duration: moveDuration / 2, ease: 'sine.out' },
                      { y: stepPose.y, scale: 1, duration: moveDuration / 2, ease: 'sine.in' },
                    ],
              },
              moveStart
            )
            previousPose = pose

            // 4. Land: the badge pops in while punches flash the facing arrow and a kihap bursts out.
            //    They finish before the step's label, so jumping straight to a step still shows them.
            //    (`to` + keyframes rather than `fromTo`, so rewinding restores the hidden state.)
            const landAt = tl.duration()
            tl.to(`[data-badge="${index}"]`, { autoAlpha: 1, scale: 1, duration: dur(0.3), ease: 'back.out(2.2)' }, landAt)
            if (!reduce && hasPunch) {
              tl.to(
                arrow,
                {
                  keyframes: [
                    { scale: 1.7, duration: 0.1, ease: 'power2.out' },
                    { scale: 1, duration: 0.22, ease: 'power2.in' },
                  ],
                },
                landAt
              )
            }
            if (!reduce && step.kihap) {
              tl.to(
                pulse,
                {
                  keyframes: [
                    { autoAlpha: 0.9, scale: 1, duration: 0 },
                    { autoAlpha: 0, scale: 3.2, duration: 0.7, ease: 'power2.out' },
                  ],
                },
                landAt
              )
              tl.to(
                kihapText,
                {
                  keyframes: [
                    { autoAlpha: 0, scale: 0.5, duration: 0 },
                    { autoAlpha: 1, scale: 1.1, duration: 0.35, ease: 'back.out(2.5)' },
                  ],
                },
                landAt
              )
            }
            tl.addLabel(`s${stepNumber}`)
            labelTimes.push(tl.duration())

            if (!reduce && step.kihap) tl.to(kihapText, { autoAlpha: 0, duration: 0.5 }, '+=0.6')
            if (!reduce && stepNumber < total) tl.to({}, { duration: HOLD_SECONDS })
          })

          labelTimesRef.current = labelTimes
          timelineRef.current = tl
          tl.timeScale(speed)
          setCurrent(0)
          setPlaying(false)

          return () => {
            navTweenRef.current?.kill()
            timelineRef.current = null
          }
        },
        rootRef
      )

      return () => mm.revert()
    },
    // `speed` is applied separately below; the timeline is rebuilt only when the form changes.
    { scope: rootRef, dependencies: [walkthrough, segments, total], revertOnUpdate: true }
  )

  React.useEffect(() => {
    timelineRef.current?.timeScale(speed)
  }, [speed])

  React.useEffect(() => () => window.clearTimeout(feedbackTimer.current), [])

  // Keep the active step visible inside the list without scrolling the page.
  React.useEffect(() => {
    const list = listRef.current
    if (!list) return
    const item = list.querySelector<HTMLElement>(`[data-step="${current}"]`)
    const top = item ? item.offsetTop - list.clientHeight / 2 + item.clientHeight / 2 : 0
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    list.scrollTo({ top, behavior: smooth ? 'smooth' : 'auto' })
  }, [current])

  const goTo = React.useCallback(
    (stepNumber: number) => {
      const tl = timelineRef.current
      if (!tl) return
      const target = clamp(0, total, stepNumber)
      // The last step plays to the very end so its kihap finishes.
      const time = target === total ? tl.duration() : labelTimesRef.current[target]
      navTweenRef.current?.kill()
      tl.pause()
      setPlaying(false)
      targetRef.current = target
      // Nearby steps glide at real speed; long jumps are capped so they stay quick.
      navTweenRef.current = tl.tweenTo(time, { duration: Math.min(Math.abs(time - tl.time()), 1.1) / speed })
    },
    [total, speed]
  )

  // Rapid Next/Previous presses chain from the step already being travelled to.
  const stepBy = (delta: number) => goTo((navTweenRef.current?.isActive() ? targetRef.current : current) + delta)

  const togglePlay = () => {
    const tl = timelineRef.current
    if (!tl) return
    navTweenRef.current?.kill()
    if (playing) {
      tl.pause()
      setPlaying(false)
      return
    }
    if (tl.progress() >= 1) tl.seek(0)
    tl.play()
    setPlaying(true)
  }

  const restart = () => {
    navTweenRef.current?.kill()
    timelineRef.current?.pause(0)
    setPlaying(false)
    setCurrent(0)
  }

  const scrub = (value: number) => {
    const tl = timelineRef.current
    if (!tl) return
    navTweenRef.current?.kill()
    tl.pause()
    tl.progress(value / 1000)
    setPlaying(false)
  }

  const resetPractice = () => {
    window.clearTimeout(feedbackTimer.current)
    setQuiz({ wrong: [], firstTry: 0 })
    setAnswered(0)
    setFeedback(null)
    restart()
  }

  const switchMode = (next: Mode) => {
    if (next === mode) return
    setMode(next)
    setPreview(null)
    resetPractice()
  }

  // Practice runs on its own counter so a quick answer can move on while the last step still animates.
  const nextFacing = answered < total ? walkthrough.steps[answered].facing : null
  const revealed = quiz.wrong.length >= 2

  const answer = (direction: Facing) => {
    if (mode !== 'practice' || !nextFacing || quiz.wrong.includes(direction)) return
    window.clearTimeout(feedbackTimer.current)
    if (direction === nextFacing) {
      setQuiz((q) => ({ wrong: [], firstTry: q.firstTry + (q.wrong.length === 0 ? 1 : 0) }))
      setAnswered(answered + 1)
      setFeedback('correct')
      goTo(answered + 1)
    } else {
      setQuiz((q) => ({ ...q, wrong: [...q.wrong, direction] }))
      setFeedback('wrong')
      if (dialRef.current && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.to(dialRef.current, { keyframes: { x: [-8, 8, -5, 5, 0] }, duration: 0.4, ease: 'none' })
      }
    }
    feedbackTimer.current = window.setTimeout(() => setFeedback(null), 1400)
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    const tag = (event.target as HTMLElement).tagName
    if (tag === 'INPUT') return
    if (mode === 'practice') {
      const direction = KEY_TO_FACING[event.key]
      if (direction) {
        event.preventDefault()
        answer(direction)
      }
      return
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      stepBy(1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      stepBy(-1)
    } else if (event.key === 'Home') {
      event.preventDefault()
      restart()
    } else if ((event.key === ' ' || event.key === 'k') && tag !== 'BUTTON') {
      event.preventDefault()
      togglePlay()
    }
  }

  const activeStep = current > 0 ? walkthrough.steps[current - 1] : null
  const facing = activeStep?.facing ?? walkthrough.startFacing
  const stance = activeStep?.stance ?? walkthrough.startStance
  const previewStep = mode === 'watch' && preview !== null ? walkthrough.steps[preview - 1] : null

  // Light up the floor line the performer is on.
  const isGuideActive = (guide: { from: FloorPoint; to: FloorPoint }) => {
    const point = activeStep?.to ?? walkthrough.start
    const vertical = guide.from.x === guide.to.x
    return vertical ? point.x === guide.from.x && current > 0 : point.y === guide.from.y && point.x !== walkthrough.start.x
  }

  const controlClass =
    'inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-200 transition-colors hover:border-brand-red hover:text-white disabled:opacity-40 disabled:hover:border-zinc-800'

  return (
    <section
      ref={rootRef}
      onKeyDown={onKeyDown}
      aria-label={`${formName} floor-pattern walkthrough`}
      className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 text-white"
    >
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 px-5 py-4 sm:px-6">
        <div>
          <span className="type-kicker block text-brand-red">Floor-pattern walkthrough</span>
          <h3 className="text-lg font-black uppercase tracking-tight">{formName}</h3>
          {!walkthrough.verified && <span className="type-meta">Schematic preview · pending coach review</span>}
        </div>
        <div className="inline-flex rounded-xl border border-zinc-800 bg-zinc-900 p-1" role="group" aria-label="Mode">
          {(
            [
              ['watch', 'Watch', Eye],
              ['practice', 'Practice', Target],
            ] as const
          ).map(([value, label, Icon]) => (
            <button
              key={value}
              type="button"
              onClick={() => switchMode(value)}
              aria-pressed={mode === value}
              className={cn(
                'inline-flex h-9 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition-colors',
                mode === value ? 'bg-brand-red text-white' : 'text-zinc-400 hover:text-white'
              )}
            >
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              {label}
            </button>
          ))}
        </div>
      </header>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_340px]">
        {/* Diagram + controls */}
        <div className="border-b border-zinc-800 p-4 sm:p-6 lg:border-b-0 lg:border-r">
          <div
            tabIndex={0}
            role="group"
            aria-label={mode === 'watch' ? 'Diagram. Arrow keys step through the form, Space plays.' : 'Diagram. Use arrow keys to choose the next direction.'}
            className="rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
          >
            <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="mx-auto block w-full max-w-[520px]" aria-hidden="true">
              {/* Clock directions */}
              <g fill="#71717a" fontSize="9" fontWeight="600" textAnchor="middle">
                <text x={VIEW_W / 2} y="20">12</text>
                <text x={VIEW_W - 16} y={VIEW_H / 2 + 3}>3</text>
                <text x={VIEW_W / 2} y={VIEW_H - 8}>6</text>
                <text x="16" y={VIEW_H / 2 + 3}>9</text>
              </g>

              {/* Floor lines; the one being walked lights up */}
              {walkthrough.guides.map((guide, i) => (
                <line
                  key={i}
                  x1={guide.from.x}
                  y1={guide.from.y}
                  x2={guide.to.x}
                  y2={guide.to.y}
                  strokeWidth="8"
                  strokeLinecap="round"
                  style={{ stroke: isGuideActive(guide) ? '#3f3f46' : '#1f1f23', transition: 'stroke 400ms ease' }}
                />
              ))}

              {/* Trail: soft glow + crisp line, both drawn as the marker travels */}
              {segments.map((stepSegments, stepIndex) =>
                stepSegments.map((segment, segIndex) =>
                  [9, 3].map((width) => (
                    <line
                      key={`${stepIndex}-${segIndex}-${width}`}
                      data-seg={`${stepIndex}-${segIndex}`}
                      x1={segment.from.x}
                      y1={segment.from.y}
                      x2={segment.to.x}
                      y2={segment.to.y}
                      stroke="#EF2F38"
                      strokeOpacity={width === 9 ? 0.18 : 1}
                      strokeWidth={width}
                      strokeLinecap="round"
                      strokeDasharray={segment.length}
                      strokeDashoffset={segment.length}
                    />
                  ))
                )
              )}

              {/* Start point */}
              <rect x={walkthrough.start.x - 7} y={walkthrough.start.y - 7} width="14" height="14" rx="3" fill="#18181b" stroke="#52525b" />
              <text x={walkthrough.start.x - 14} y={walkthrough.start.y + 24} fill="#a1a1aa" fontSize="9" fontWeight="600">
                Start
              </text>

              {/* Landing badges: faint until reached; click to jump (watch mode) */}
              {walkthrough.steps.map((step, i) => (
                <g
                  key={i}
                  style={{ visibility: mode === 'practice' && i >= answered ? 'hidden' : undefined, cursor: mode === 'watch' ? 'pointer' : undefined }}
                  onClick={mode === 'watch' ? () => goTo(i + 1) : undefined}
                  onMouseEnter={mode === 'watch' ? () => setPreview(i + 1) : undefined}
                  onMouseLeave={mode === 'watch' ? () => setPreview(null) : undefined}
                >
                  <g data-badge={i}>
                    <circle cx={step.to.x + badgeOffsets[i]} cy={step.to.y - 20} r="8" fill={step.kihap ? '#EF2F38' : '#27272a'} />
                    <text x={step.to.x + badgeOffsets[i]} y={step.to.y - 17} textAnchor="middle" fill="#fafafa" fontSize="8" fontWeight="700">
                      {i + 1}
                    </text>
                  </g>
                </g>
              ))}

              {/* Hover preview of a step's position, facing and stance */}
              {previewStep && preview !== current && (
                <GhostPerformer point={previewStep.to} facing={previewStep.facing} stance={previewStep.stance} />
              )}

              {/* Performer: footprints + facing arrow inside a rotating body */}
              <g data-marker transform={`translate(${walkthrough.start.x} ${walkthrough.start.y})`}>
                <circle data-pulse r="10" fill="none" stroke="#EF2F38" strokeWidth="2" style={{ opacity: 0 }} />
                <g data-body>
                  {/* Transparent circle keeps the group's box centred for clean rotation. */}
                  <circle r="32" fill="transparent" />
                  <path data-arrow d={ARROW_PATH} fill="#fafafa" />
                  <g data-foot="left">
                    <path d={FOOT_PATH} fill="#fafafa" />
                  </g>
                  <g data-foot="right">
                    <path d={FOOT_PATH} fill="#EF2F38" />
                  </g>
                  <circle r="2.5" fill="#a1a1aa" />
                </g>
                <text data-kihap y="-40" textAnchor="middle" fill="#EF2F38" fontSize="13" fontWeight="800" letterSpacing="1" style={{ opacity: 0 }}>
                  KIHAP!
                </text>
              </g>
            </svg>
          </div>

          <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-zinc-400">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2 rounded-full bg-zinc-100" aria-hidden="true" /> Left foot
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2 rounded-full bg-brand-red" aria-hidden="true" /> Right foot
            </span>
          </div>

          {mode === 'watch' ? (
            <>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <button type="button" onClick={restart} className={controlClass} aria-label="Restart">
                  <RotateCcw className="h-4 w-4" />
                </button>
                <button type="button" onClick={() => stepBy(-1)} disabled={current === 0} className={controlClass} aria-label="Previous step">
                  <SkipBack className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={togglePlay}
                  className="inline-flex h-11 min-w-[112px] items-center justify-center gap-2 rounded-xl bg-brand-red px-5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-600"
                  aria-pressed={playing}
                >
                  {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  {playing ? 'Pause' : current >= total ? 'Replay' : 'Play'}
                </button>
                <button type="button" onClick={() => stepBy(1)} disabled={current >= total} className={controlClass} aria-label="Next step">
                  <SkipForward className="h-4 w-4" />
                </button>
                <div className="inline-flex rounded-xl border border-zinc-800 p-0.5" role="group" aria-label="Playback speed">
                  {SPEEDS.map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setSpeed(value)}
                      aria-pressed={speed === value}
                      className={cn(
                        'h-9 rounded-lg px-2.5 text-xs font-semibold transition-colors',
                        speed === value ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-white'
                      )}
                    >
                      {value}×
                    </button>
                  ))}
                </div>
              </div>
              <input
                ref={sliderRef}
                type="range"
                min={0}
                max={1000}
                defaultValue={0}
                onInput={(e) => scrub(Number(e.currentTarget.value))}
                aria-label="Scrub through the form"
                className="mt-4 w-full accent-brand-red"
              />
              <p className="type-meta mt-2 hidden text-center sm:block">Keys: Space play · ← → step · Home restart</p>
            </>
          ) : (
            <div className="mt-4 flex justify-center">
              <button type="button" onClick={resetPractice} className={cn(controlClass, 'w-auto gap-2 px-4 text-xs font-semibold')}>
                <RotateCcw className="h-4 w-4" /> Start over
              </button>
            </div>
          )}
        </div>

        {/* Current step / practice panel + list */}
        <div className="flex min-h-0 flex-col">
          <div className="border-b border-zinc-800 p-5 sm:p-6">
            <div aria-live="polite">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="type-kicker text-zinc-400">{current === 0 ? 'Ready (Joonbi)' : `Step ${current} of ${total}`}</span>
                {activeStep?.kihap && (
                  <span className="rounded-lg bg-brand-red px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider">Kihap</span>
                )}
              </div>
              <p className="type-meta">
                Facing {FACING_CLOCK[facing]} · {stanceLabel(stance)}
              </p>
              {activeStep && (
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Techniques">
                  {activeStep.techniques.map((technique) => (
                    <li key={technique} className="rounded-lg bg-zinc-900 px-2 py-1 text-xs font-medium text-zinc-200">
                      {technique}
                    </li>
                  ))}
                </ul>
              )}
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                {current === 0
                  ? mode === 'watch'
                    ? 'Stand in the ready stance at the start line, facing the front. Press play, choose a step, or tap a number on the diagram.'
                    : 'Practice: before each step, choose which way you turn to face. Use the buttons or your arrow keys.'
                  : stepTexts[current - 1]}
              </p>
            </div>

            {mode === 'practice' && (
              <div className="mt-5 border-t border-zinc-800 pt-5">
                {nextFacing ? (
                  <>
                    <p className="text-sm font-semibold">Step {answered + 1}: which way do you face?</p>
                    <div ref={dialRef} className="mx-auto mt-4 grid w-max grid-cols-3 gap-2">
                      {DIRECTIONS.map((direction) => {
                        const Icon = DIRECTION_ICON[direction]
                        const wrong = quiz.wrong.includes(direction)
                        const isAnswer = revealed && direction === nextFacing
                        const position = { N: 'col-start-2 row-start-1', E: 'col-start-3 row-start-2', S: 'col-start-2 row-start-3', W: 'col-start-1 row-start-2' }[direction]
                        return (
                          <button
                            key={direction}
                            type="button"
                            onClick={() => answer(direction)}
                            disabled={wrong}
                            aria-label={`Face ${FACING_CLOCK[direction]}`}
                            className={cn(
                              'flex h-14 w-14 flex-col items-center justify-center rounded-xl border text-[11px] font-semibold transition-colors',
                              position,
                              wrong
                                ? 'border-zinc-800 bg-zinc-900 text-zinc-600'
                                : isAnswer
                                  ? 'border-emerald-500 bg-emerald-500/15 text-emerald-300'
                                  : 'border-zinc-700 bg-zinc-900 text-zinc-200 hover:border-brand-red hover:text-white'
                            )}
                          >
                            <Icon className="h-4 w-4" aria-hidden="true" />
                            {{ N: '12', E: '3', S: '6', W: '9' }[direction]}
                          </button>
                        )
                      })}
                      <span className="col-start-2 row-start-2 flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-900 text-[10px] text-zinc-500">
                        you
                      </span>
                    </div>
                    <p role="status" className={cn('mt-3 h-5 text-center text-xs font-semibold', feedback === 'correct' ? 'text-emerald-400' : 'text-amber-400')}>
                      {feedback === 'correct' ? (
                        <span className="inline-flex items-center gap-1">
                          <Check className="h-3.5 w-3.5" /> Correct
                        </span>
                      ) : feedback === 'wrong' ? (
                        revealed ? 'The answer is highlighted. Choose it to continue.' : 'Not quite. Try again.'
                      ) : null}
                    </p>
                  </>
                ) : (
                  <div className="text-center">
                    <p className="text-lg font-black uppercase tracking-tight">Form complete</p>
                    <p className="mt-1 text-sm text-zinc-300">
                      You chose the right direction first time on <strong className="text-white">{quiz.firstTry}</strong> of {total} steps.
                    </p>
                    <button
                      type="button"
                      onClick={resetPractice}
                      className="mt-4 inline-flex h-10 items-center gap-2 rounded-xl bg-brand-red px-4 text-xs font-semibold uppercase tracking-wider"
                    >
                      <RotateCcw className="h-4 w-4" /> Practice again
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <ol ref={listRef} className="relative max-h-72 flex-1 overflow-y-auto p-2 lg:max-h-[360px]">
            {stepTexts.map((text, i) => {
              const stepNumber = i + 1
              const active = stepNumber === current
              const hidden = mode === 'practice' && stepNumber > answered
              return (
                <li key={i} data-step={stepNumber}>
                  <button
                    type="button"
                    onClick={() => goTo(stepNumber)}
                    onMouseEnter={() => setPreview(stepNumber)}
                    onMouseLeave={() => setPreview(null)}
                    onFocus={() => setPreview(stepNumber)}
                    onBlur={() => setPreview(null)}
                    disabled={mode === 'practice'}
                    aria-current={active ? 'step' : undefined}
                    className={cn(
                      'flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors disabled:cursor-default',
                      active ? 'bg-brand-red/15 text-white' : 'text-zinc-400 enabled:hover:bg-zinc-900 enabled:hover:text-zinc-200'
                    )}
                  >
                    <span
                      className={cn(
                        'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[11px] font-bold tabular-nums',
                        active ? 'bg-brand-red text-white' : 'bg-zinc-800 text-zinc-400'
                      )}
                    >
                      {stepNumber}
                    </span>
                    <span className={cn('line-clamp-2 text-[13px] leading-snug', hidden && 'italic text-zinc-600')}>
                      {hidden ? 'Hidden until you answer' : text}
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
