'use client'

import * as React from 'react'
import { Brain, Zap, Shield, Activity, Target, Sparkles, Timer, CheckCircle2, RotateCcw } from 'lucide-react'
import { InfinityLogo } from './InfinityLogo'
import { useLanguage } from '@/context/LanguageContext'

interface BrainNode {
  id: string
  name: string
  korean: string
  region: string
  color: string
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
    color: '#EF2F38',
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
    color: '#0042EA',
    x: 400,
    y: 80,
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
    color: '#09BB00',
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
    color: '#FF5733',
    x: 400,
    y: 280,
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

  return (
    <div className="relative rounded-[14px] bg-zinc-950 border border-zinc-800/90 overflow-hidden shadow-2xl p-5 sm:p-8 md:p-10 text-white font-sans">
      {/* Subtle Background Glow Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(239,47,56,0.1),_transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-brand-red/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-md">
          <Brain className="w-3.5 h-3.5" /> Cognitive &amp; Neurological Alignment
        </div>
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
          The Infinity <span className="text-brand-red">Brain Architecture</span>
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 font-light mt-2 max-w-lg mx-auto leading-relaxed">
          Explore the 4 cognitive neural faculties cultivated through high-performance Taekwondo biomechanics.
        </p>
      </div>

      {/* Main Grid Stage (14px radius cards) */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-6xl mx-auto">
        {/* Left Column: Interactive Animated Neural Canvas */}
        <div className="lg:col-span-7 relative flex items-center justify-center p-6 sm:p-8 bg-zinc-900/70 rounded-[14px] border border-zinc-800 min-h-[360px] sm:min-h-[420px] overflow-hidden shadow-inner">
          {/* SVG Orbit and Synapse Lines */}
          <svg
            viewBox="0 0 800 400"
            className="absolute inset-0 w-full h-full pointer-events-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Pulsing orbital rings */}
            <circle
              cx="400"
              cy="200"
              r="170"
              stroke="#EF2F38"
              strokeWidth="1"
              strokeDasharray="4 8"
              opacity="0.2"
              className="animate-[spin_40s_linear_infinite]"
            />
            <circle
              cx="400"
              cy="200"
              r="120"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeDasharray="6 12"
              opacity="0.1"
              className="animate-[spin_30s_linear_infinite_reverse]"
            />

            {/* Connecting Synaptic Traces */}
            {brainNodes.map((node) => {
              const isSelected = activeNode.id === node.id
              return (
                <line
                  key={node.id}
                  x1="400"
                  y1="200"
                  x2={node.x}
                  y2={node.y}
                  stroke={isSelected ? node.color : '#3f3f46'}
                  strokeWidth={isSelected ? '2' : '1'}
                  strokeDasharray={isSelected ? '6 4' : '2 4'}
                  opacity={isSelected ? '0.85' : '0.2'}
                  className={isSelected ? 'animate-[pulse_2s_ease-in-out_infinite]' : ''}
                />
              )
            })}
          </svg>

          {/* Centered Infinity Loop Mark */}
          <div className="relative z-20 flex flex-col items-center pointer-events-none">
            <div className="relative p-5 sm:p-6 rounded-full bg-black/80 border border-brand-red/40 shadow-brand-glow backdrop-blur-md">
              <InfinityLogo variant="symbol" className="w-24 sm:w-32 h-auto text-brand-red" animated={true} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-red mt-2.5 bg-black/70 px-3 py-1 rounded-lg border border-brand-red/20">
              The Eternal Loop
            </span>
          </div>

          {/* Interactive Node Anchors */}
          <div className="absolute inset-0 p-4 pointer-events-auto">
            {brainNodes.map((node) => {
              const isSelected = activeNode.id === node.id
              const Icon = node.icon

              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  aria-label={`Select ${node.name} cognitive center`}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-xl border transition-all duration-300 flex items-center gap-2 cursor-pointer min-h-[44px] group ${
                    isSelected
                      ? 'bg-zinc-900 shadow-2xl scale-110 ring-2'
                      : 'bg-zinc-950/90 border-zinc-800 hover:border-zinc-500 hover:scale-105'
                  }`}
                  style={{
                    left: `${(node.x / 800) * 100}%`,
                    top: `${(node.y / 400) * 100}%`,
                    borderColor: isSelected ? node.color : undefined,
                    boxShadow: isSelected ? `0 0 15px ${node.color}50` : undefined,
                  }}
                >
                  <div
                    className="p-1.5 rounded-lg transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${node.color}20`, color: node.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-black uppercase tracking-wider text-white">
                    {node.name.split(' ')[0]}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Right Column: High-Precision Faculty Card */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-[14px] bg-zinc-900/80 border border-zinc-800 shadow-xl flex flex-col justify-between">
          <div>
            {/* Top Telemetry Header (Clean, Uncrowded Layout) */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 mb-6 pb-4 border-b border-zinc-800">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono font-bold uppercase tracking-wide shadow-sm"
                style={{
                  backgroundColor: `${activeNode.color}15`,
                  borderColor: `${activeNode.color}40`,
                  color: activeNode.color,
                }}
              >
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: activeNode.color }} />
                <span>{activeNode.stats}</span>
              </div>

              <span className="text-[11px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                {activeNode.region}
              </span>
            </div>

            {/* Faculty Title & Korean Translation */}
            <h4 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-1 leading-none">
              {activeNode.name}
            </h4>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-4">
              {activeNode.korean}
            </span>

            {/* Metric Callout Card */}
            <div className="grid grid-cols-2 gap-3 mb-5 p-3.5 rounded-xl bg-black/50 border border-zinc-800/80">
              <div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                  {activeNode.metricLabel}
                </span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-xl sm:text-2xl font-black font-mono text-white">
                    {activeNode.metricValue}
                  </span>
                  <span className="text-xs font-mono font-bold text-brand-red">{activeNode.metricUnit}</span>
                </div>
              </div>
              <div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                  Cognitive Channel
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400 mt-1.5 block">
                  Active &bull; Calibrated
                </span>
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
              {activeNode.desc}
            </p>
          </div>

          {/* Footer Channel Status */}
          <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
            <span className="text-[11px] text-zinc-500 font-medium">Infinity Cognitive Framework</span>
            <div className="flex items-center gap-1.5 text-xs font-bold" style={{ color: activeNode.color }}>
              <span>Live Sensor</span>
              <div className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: activeNode.color }} />
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* INTERACTIVE MILLISECOND REFLEX TESTER (Reaction Speed Mini-Lab) */}
      {/* ==================================================================== */}
      <div className="relative z-10 mt-8 max-w-6xl mx-auto p-6 sm:p-8 rounded-[14px] bg-zinc-900/60 border border-zinc-800 shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-red mb-1">
              <Timer className="w-3.5 h-3.5" /> Interactive Neural Benchmark
            </div>
            <h4 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white">
              Test Your Millisecond <span className="text-brand-red">Neural Latency</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1 max-w-xl leading-relaxed">
              World Taekwondo athletes react to opponent attacks in under <strong>180 milliseconds</strong>. Tap below to measure your personal motor response latency.
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0 flex flex-col sm:flex-row items-center gap-3">
            {testState === 'idle' && (
              <button
                onClick={startReactionTest}
                className="w-full sm:w-auto px-6 py-3 min-h-[44px] rounded-xl bg-brand-red text-white font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-brand-glow cursor-pointer flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4" /> Start Reflex Test
              </button>
            )}

            {testState === 'waiting' && (
              <button
                onClick={handleTestClick}
                className="w-full sm:w-auto px-8 py-3 min-h-[44px] rounded-xl bg-amber-500 text-black font-black uppercase text-xs tracking-widest animate-pulse cursor-pointer shadow-lg"
              >
                Wait for GREEN signal... (Clicking now faults)
              </button>
            )}

            {testState === 'fault' && (
              <div
                role="alert"
                className="w-full sm:w-auto px-6 py-3 min-h-[44px] rounded-xl bg-red-600/20 border border-red-500/50 text-red-300 font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 animate-pulse"
              >
                <span>⚠️ False Start! Too early — Wait for GREEN</span>
              </div>
            )}

            {testState === 'ready' && (
              <button
                onClick={handleTestClick}
                className="w-full sm:w-auto px-10 py-4 min-h-[44px] rounded-xl bg-emerald-500 text-black font-black uppercase text-sm tracking-widest animate-bounce cursor-pointer shadow-xl"
              >
                STRIKE NOW! ⚡
              </button>
            )}

            {testState === 'result' && (
              <div className="flex items-center gap-4 bg-black/60 p-3 px-5 rounded-xl border border-zinc-700 min-h-[44px]">
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold text-zinc-400 block">Your Score</span>
                  <span className="text-2xl font-black font-mono text-white">
                    {reactionTime} <span className="text-xs text-brand-red font-bold">ms</span>
                  </span>
                </div>
                <div className="pl-3 border-l border-zinc-700 text-[11px] text-zinc-300">
                  {reactionTime! < 200 ? (
                    <span className="text-emerald-400 font-bold">🏆 Olympic Elite Reflex</span>
                  ) : reactionTime! < 270 ? (
                    <span className="text-blue-400 font-bold">⚡ Fast Fighter Reflex</span>
                  ) : (
                    <span className="text-amber-400 font-bold">🥋 Trainable Reflex</span>
                  )}
                </div>
                <button
                  onClick={startReactionTest}
                  className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white transition-colors cursor-pointer"
                  title="Retry test"
                  aria-label="Retry reflex latency test"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
