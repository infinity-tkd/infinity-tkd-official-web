'use client'

import * as React from 'react'
import { Zap, Shield, Activity, Target, Timer, RotateCcw } from 'lucide-react'
import { InfinityMotion } from './InfinityMotion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { buttonStyles } from '@/components/ui/Button'
import { useLanguage } from '@/context/LanguageContext'
import { cn } from '@/lib/utils'

/**
 * Region positions on an 800 x 400 grid, read as percentages of the map (x / 800, y / 400). The
 * Infinity mark sits at the centre; the lines are drawn in measured pixels, so they always end at
 * the region buttons, whatever the map's shape (wide on desktop, near-square on phones).
 */
const GRID = { w: 800, h: 400 }

interface BrainNode {
  id: string
  name: string
  korean: string
  region: string
  x: number
  y: number
  desc: string
  metricLabel: string
  metricValue: string
  metricUnit: string
  stats: string
  icon: React.ElementType
  translations?: {
    km?: { name?: string; region?: string; desc?: string; stats?: string }
    zh?: { name?: string; region?: string; desc?: string; stats?: string }
    ko?: { name?: string; region?: string; desc?: string; stats?: string }
  }
}

const brainNodes: BrainNode[] = [
  {
    id: 'prefrontal',
    name: 'Prefrontal Cortex',
    korean: '전두엽 (前頭葉) • 전술 인지',
    region: 'Tactical Decision & Form Memory',
    x: 200,
    y: 120,
    desc: 'Processes rapid spatial calculations, opponent pattern recognition, and rhythmic sequencing of Kukkiwon poomsae forms under tournament pressure.',
    metricLabel: 'Decision Latency',
    metricValue: '< 180',
    metricUnit: 'ms',
    stats: '180ms Neural Reflex',
    icon: Target,
    translations: {
      km: {
        name: 'Prefrontal Cortex',
        region: 'ការសម្រេចចិត្តយុទ្ធសាស្ត្រ & ការចងចាំទម្រង់',
        desc: 'ដំណើរការគណនាលំហយ៉ាងរហ័ស ការសម្គាល់ក្បាច់របស់គូប្រកួត និងចង្វាក់នៃទម្រង់ Kukkiwon poomsae ក្រោមសម្ពាធការប្រកួត។',
        stats: 'ល្បឿនប្រតិកម្ម ១៨០ មិល្លីវិនាទី',
      },
      zh: {
        name: '前额叶皮层 (Prefrontal Cortex)',
        region: '战术决策与品势序列记忆',
        desc: '毫秒级空间运算、对手出腿预判及高压锦标赛环境下的公认品势节奏精准调控。',
        stats: '180毫秒极限神经反射',
      },
      ko: {
        name: '전두엽 (Prefrontal Cortex)',
        region: '전술 판단 및 공인품새 기억',
        desc: '초고속 공간 지각 계산, 상대방 공격 패턴 인식 및 고압 대회 상황에서의 공인품새 리듬 제어.',
        stats: '180ms 극한 신경 반사',
      },
    },
  },
  {
    id: 'motor',
    name: 'Motor Cortex',
    korean: '운동 피질 (運動皮質) • 순발력',
    region: 'Kinetic Firing & Aerial Tricking',
    x: 400,
    y: 72,
    desc: 'Coordinates instantaneous neuromuscular recruitment for 540° and 720° aerial kicks, springboard momentum transfer, and explosive vertical jump velocity.',
    metricLabel: 'Angular Velocity',
    metricValue: '720°',
    metricUnit: 'twist',
    stats: 'High-Velocity Motor Units',
    icon: Zap,
    translations: {
      km: {
        name: 'Motor Cortex',
        region: 'កម្លាំងចលករ & កាយសម្ព័ន្ធលើអាកាស',
        desc: 'សម្របសម្រួលសរសៃប្រសាទភ្លាមៗសម្រាប់ការទាត់លើអាកាស 540° និង 720° និងល្បឿនលោតបញ្ឈរដ៏ផ្ទុះ។',
        stats: 'កម្លាំងសរសៃប្រសាទល្បឿនលឿន',
      },
      zh: {
        name: '运动皮层 (Motor Cortex)',
        region: '动能爆发与高空极限特技',
        desc: '瞬时募集高阈值快肌纤维，精准调控 540°/720° 高空转体踢击与爆发式垂直弹跳。',
        stats: '高速运动神经单位',
      },
      ko: {
        name: '운동 피질 (Motor Cortex)',
        region: '운동 역학 발화 및 고공 트릭킹',
        desc: '540도 및 720도 회전 발차기, 도약 탄성 전달 및 폭발적인 수직 점프력을 위한 신경계 동원력 극대화.',
        stats: '초고속 운동 단위 동원',
      },
    },
  },
  {
    id: 'cerebellum',
    name: 'Cerebellar Core',
    korean: '소뇌 (小腦) • 중심축 평형',
    region: 'Stance Stability & Ground Axis',
    x: 600,
    y: 120,
    desc: 'Calculates center-of-mass equilibrium down to the millimeter, stabilizing the standing pivot foot during continuous spinning hook, tornado, and axe kicks.',
    metricLabel: 'Stance Deviation',
    metricValue: '± 0.05',
    metricUnit: 'mm',
    stats: 'Millimeter Axis Stability',
    icon: Activity,
    translations: {
      km: {
        name: 'Cerebellar Core',
        region: 'ស្ថេរភាពជំហរ & អ័ក្សដី',
        desc: 'គណនាលំនឹងរាងកាយកម្រិតមីលីម៉ែត្រ ធ្វើឱ្យជើងទម្រមានស្ថេរភាពក្នុងអំឡុងពេលទាត់បង្វិលជាបន្តបន្ទាប់។',
        stats: 'ស្ថេរភាពអ័ក្សកម្រិតមីលីម៉ែត្រ',
      },
      zh: {
        name: '小脑平衡中枢 (Cerebellar Core)',
        region: '步法稳定性与地心重力轴',
        desc: '毫米级精密平衡调控，在连续旋风踢、后旋踢及下劈过程中锁定支撑脚轴心。',
        stats: '毫米级步法轴心稳定',
      },
      ko: {
        name: '소뇌 평형 중추 (Cerebellum)',
        region: '중심축 안정화 및 지면 반발축',
        desc: '밀리미터 단위의 무게중심 제어로 연속 회전 훅 차기와 내려차기 시 축 발의 완벽한 지지력 확보.',
        stats: '밀리미터급 축 안정성',
      },
    },
  },
  {
    id: 'budoshim',
    name: 'Limbic Core (Budoshim)',
    korean: '부동심 (不動心) • 불요불굴',
    region: 'The Unshakable Warrior Center',
    x: 400,
    y: 320,
    desc: '“A mountain never shakes in the wind.” Regulates autonomic heart rate variability and breathing to maintain absolute composure and moral resolve under tournament pressure.',
    metricLabel: 'Stress Inoculation',
    metricValue: '99.8',
    metricUnit: '% HR-V',
    stats: 'Zero Panic • Supreme Calm',
    icon: Shield,
    translations: {
      km: {
        name: 'Limbic Core (Budoshim)',
        region: 'ចិត្តរឹងមាំដូចភ្នំ (不動心)',
        desc: '«ភ្នំមិនដែលញ័រក្នុងខ្យល់ឡើយ» គ្រប់គ្រងចង្វាក់បេះដូង និងដង្ហើម ដើម្បីរក្សាភាពស្ងប់ស្ងាត់ដាច់ខាត និងភាពក្លាហាន។',
        stats: 'គ្មានការភ័យស្លន់ស្លោ • ស្ងប់ស្ងាត់បំផុត',
      },
      zh: {
        name: '边缘系统·不动心 (Budoshim)',
        region: '如山岳般不可撼动的武道意志',
        desc: '“山岳虽强，不为风动”。深度调控自主神经心率变异性与丹田呼吸，在任何逆境中维持绝对从容与无畏勇气。',
        stats: '零恐慌 · 泰山崩前如常',
      },
      ko: {
        name: '변연계·부동심 (不動心)',
        region: '흔들림 없는 무도인의 심장',
        desc: '“바람에 흔들리지 않는 태산처럼”. 자율신경계와 복식호흡을 제어하여 극심한 승부의 압박 속에서도 절대적인 평정심을 유지합니다.',
        stats: '패닉 제로 · 절대적 평정심',
      },
    },
  },
]

export function InfinityBrainAnimation() {
  const { language } = useLanguage()
  const [activeNodeId, setActiveNodeId] = React.useState<string>('prefrontal')
  // The first signal waits for the lines to draw; later ones answer the click straight away.
  const [hasChosen, setHasChosen] = React.useState(false)
  const mapRef = React.useRef<HTMLDivElement>(null)
  const [size, setSize] = React.useState<{ w: number; h: number } | null>(null)

  React.useLayoutEffect(() => {
    const map = mapRef.current
    if (!map) return
    const measure = () =>
      setSize((prev) =>
        prev && prev.w === map.clientWidth && prev.h === map.clientHeight ? prev : { w: map.clientWidth, h: map.clientHeight }
      )
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(map)
    return () => observer.disconnect()
  }, [])

  // Interactive Reflex Tester State
  const [testState, setTestState] = React.useState<'idle' | 'waiting' | 'ready' | 'result' | 'fault'>('idle')
  const [reactionTime, setReactionTime] = React.useState<number | null>(null)
  const timerStartRef = React.useRef<number>(0)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)
  const faultTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const activeNode = React.useMemo(() => {
    const raw = brainNodes.find((n) => n.id === activeNodeId) || brainNodes[0]
    if (language === 'en') return raw
    const trans = raw.translations?.[language]
    if (!trans) return raw
    return {
      ...raw,
      name: trans.name || raw.name,
      region: trans.region || raw.region,
      desc: trans.desc || raw.desc,
      stats: trans.stats || raw.stats,
    }
  }, [activeNodeId, language])

  // Reaction Tester Logic
  const startReactionTest = () => {
    if (faultTimeoutRef.current) clearTimeout(faultTimeoutRef.current)
    setTestState('waiting')
    setReactionTime(null)
    const randomDelay = Math.floor(Math.random() * 2500) + 1500 // 1.5s - 4s
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      timerStartRef.current = performance.now()
      setTestState('ready')
    }, randomDelay)
  }

  const handleTestClick = () => {
    if (testState === 'waiting') {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      setTestState('fault')
      if (faultTimeoutRef.current) clearTimeout(faultTimeoutRef.current)
      faultTimeoutRef.current = setTimeout(() => {
        setTestState('idle')
      }, 1800)
    } else if (testState === 'ready') {
      const duration = Math.round(performance.now() - timerStartRef.current)
      setReactionTime(duration)
      setTestState('result')
    }
  }

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (faultTimeoutRef.current) clearTimeout(faultTimeoutRef.current)
    }
  }, [])

  // Map geometry in measured pixels.
  const toPx = (node: { x: number; y: number }) =>
    size ? { x: (node.x / GRID.w) * size.w, y: (node.y / GRID.h) * size.h } : null
  const hub = size ? { x: size.w / 2, y: size.h / 2 } : null
  const activeEnd = toPx(activeNode)
  const activeLength = hub && activeEnd ? Math.hypot(activeEnd.x - hub.x, activeEnd.y - hub.y) : 0
  const reflexButton = testState === 'idle' || testState === 'waiting' || testState === 'ready'

  return (
    <div>
      <SectionHeader
        size="md"
        eyebrowStyle="text"
        eyebrow="Cognitive & Neurological Alignment"
        title="The Infinity"
        accent="Brain Architecture"
        description="Explore the 4 cognitive neural faculties cultivated through high-performance Taekwondo biomechanics."
      />

      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
        {/* Neural map: the lines draw out from the Infinity mark when the tab opens; the chosen
            region's line turns red and carries a short signal. */}
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 lg:col-span-7 dark:border-zinc-800 dark:bg-zinc-900/40">
          <div ref={mapRef} className="relative h-[340px] sm:h-[400px] lg:h-full lg:min-h-[440px]">
            {size && hub && (
              <svg
                width={size.w}
                height={size.h}
                viewBox={`0 0 ${size.w} ${size.h}`}
                className="pointer-events-none absolute inset-0"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r={Math.min(size.w, size.h) * 0.36}
                  className="stroke-zinc-300 dark:stroke-zinc-700"
                  strokeWidth={1}
                  strokeDasharray="2 6"
                />
                {brainNodes.map((node, index) => {
                  const end = toPx(node)!
                  const isSelected = node.id === activeNode.id
                  return (
                    <line
                      key={node.id}
                      x1={hub.x}
                      y1={hub.y}
                      x2={end.x}
                      y2={end.y}
                      className={cn('bm-synapse', isSelected ? 'stroke-brand-red/60' : 'stroke-zinc-300 dark:stroke-zinc-700')}
                      strokeWidth={isSelected ? 1.5 : 1}
                      strokeLinecap="round"
                      style={
                        {
                          '--len': Math.hypot(end.x - hub.x, end.y - hub.y),
                          '--delay': `${0.3 + index * 0.1}s`,
                        } as React.CSSProperties
                      }
                    />
                  )
                })}
                {activeEnd && (
                  // Keyed by region, so every choice sends a fresh signal.
                  <line
                    key={`signal-${activeNode.id}`}
                    x1={hub.x}
                    y1={hub.y}
                    x2={activeEnd.x}
                    y2={activeEnd.y}
                    className="bm-signal stroke-brand-red"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    style={
                      {
                        '--len': activeLength,
                        '--travel': -activeLength,
                        '--signal-delay': hasChosen ? '0.1s' : '1.3s',
                      } as React.CSSProperties
                    }
                  />
                )}
              </svg>
            )}

            {/* The Infinity mark: the belt draws itself when the tab opens, then rests. */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm sm:h-28 sm:w-28 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-none">
              <InfinityMotion highlight="once" className="h-auto w-14 sm:w-[72px]" />
            </div>

            {brainNodes.map((node, index) => {
              const isSelected = node.id === activeNode.id
              const Icon = node.icon
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => {
                    setActiveNodeId(node.id)
                    setHasChosen(true)
                  }}
                  aria-pressed={isSelected}
                  aria-label={node.name}
                  className={cn(
                    'bm-node absolute z-20 flex min-h-[44px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center gap-2 rounded-xl border bg-white p-1.5 text-xs font-bold transition-colors duration-300 sm:pr-3 dark:bg-zinc-900',
                    isSelected
                      ? 'border-brand-red text-zinc-900 dark:text-white'
                      : 'border-zinc-200 text-zinc-600 hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-500 dark:hover:text-white'
                  )}
                  style={
                    {
                      left: `${(node.x / GRID.w) * 100}%`,
                      top: `${(node.y / GRID.h) * 100}%`,
                      // Each region appears as its line reaches it.
                      '--delay': `${0.7 + index * 0.1}s`,
                    } as React.CSSProperties
                  }
                >
                  <span
                    className={cn(
                      'flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-300',
                      isSelected ? 'bg-brand-red text-white' : 'bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400'
                    )}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="hidden sm:inline">{node.name.split(' ')[0]}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* The chosen region */}
        <div
          aria-live="polite"
          className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 lg:col-span-5 dark:border-zinc-800 dark:bg-zinc-900/40"
        >
          <div key={activeNode.id} className="flex flex-1 animate-fade-in flex-col">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">{activeNode.region}</p>
            <h3 className="mt-2 text-2xl font-black uppercase leading-tight tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
              {activeNode.name}
            </h3>
            <p className="mt-2 text-xs font-bold tracking-wide text-brand-red">{activeNode.korean}</p>
            <p className="mt-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{activeNode.desc}</p>

            <div className="mt-auto pt-6">
              <dl className="border-t border-zinc-200 pt-5 dark:border-zinc-800">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">{activeNode.metricLabel}</dt>
                <dd className="mt-1 flex items-baseline gap-1.5">
                  <span className="text-3xl font-black tabular-nums tracking-tight text-zinc-900 dark:text-white">
                    {activeNode.metricValue}
                  </span>
                  <span className="text-sm font-semibold text-zinc-500">{activeNode.metricUnit}</span>
                </dd>
                <dd className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{activeNode.stats}</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Reflex test */}
      <div className="mt-5 flex flex-col gap-6 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 md:flex-row md:items-center md:justify-between lg:mt-6 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
            <Timer className="h-3.5 w-3.5" aria-hidden="true" /> Interactive Neural Benchmark
          </p>
          <h3 className="mt-2 text-lg font-black uppercase tracking-tight text-zinc-900 sm:text-xl dark:text-white">
            Test Your Millisecond <span className="text-brand-red">Neural Latency</span>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            World Taekwondo athletes react to opponent attacks in under{' '}
            <strong className="font-semibold text-zinc-900 dark:text-white">180 milliseconds</strong>. Tap below to measure
            your personal motor response latency.
          </p>
        </div>

        <div aria-live="polite" className="w-full shrink-0 md:w-auto">
          {/* One button for start, wait and strike, so keyboard focus stays on it between steps. */}
          {reflexButton && (
            <button
              type="button"
              onClick={testState === 'idle' ? startReactionTest : handleTestClick}
              className={cn(
                testState === 'idle' && buttonStyles({ variant: 'primary', className: 'w-full md:w-auto' }),
                testState === 'waiting' &&
                  'flex min-h-[44px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl border border-zinc-300 bg-zinc-100 px-6 text-xs font-bold uppercase tracking-widest text-zinc-700 md:w-auto dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200',
                testState === 'ready' &&
                  'bm-pop flex min-h-[48px] w-full cursor-pointer items-center justify-center rounded-xl bg-emerald-500 px-10 text-sm font-black uppercase tracking-widest text-zinc-950 hover:bg-emerald-400 md:w-auto'
              )}
            >
              {testState === 'idle' && (
                <>
                  <Zap className="h-4 w-4" aria-hidden="true" /> Start Reflex Test
                </>
              )}
              {testState === 'waiting' && (
                <>
                  <span aria-hidden="true" className="h-2 w-2 animate-pulse rounded-full bg-zinc-400" />
                  Wait for the green signal
                </>
              )}
              {testState === 'ready' && 'Strike now'}
            </button>
          )}

          {testState === 'fault' && (
            <div
              role="alert"
              className="bm-pop flex min-h-[44px] w-full items-center justify-center rounded-xl border border-brand-red/30 bg-brand-red/5 px-6 text-xs font-bold uppercase tracking-wider text-brand-red md:w-auto"
            >
              False start — wait for green
            </div>
          )}

          {testState === 'result' && reactionTime !== null && (
            <div className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-zinc-50 py-2 pl-5 pr-2 dark:border-zinc-800 dark:bg-zinc-900">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">Your score</p>
                <p className="text-2xl font-black tabular-nums text-zinc-900 dark:text-white">
                  {reactionTime} <span className="text-sm font-semibold text-zinc-500">ms</span>
                </p>
              </div>
              <p className="border-l border-zinc-200 pl-4 text-sm font-semibold text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">
                {reactionTime < 200 ? 'Olympic elite reflex' : reactionTime < 270 ? 'Fast fighter reflex' : 'Trainable reflex'}
              </p>
              <button
                type="button"
                onClick={startReactionTest}
                aria-label="Retry reflex test"
                title="Retry"
                className="ml-auto flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl text-zinc-600 transition-colors hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
