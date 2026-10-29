'use client'

import * as React from 'react'
import { Compass, Footprints, Info } from 'lucide-react'

export interface WangLineSpec {
  name: string
  meaning: string
  isYang: boolean
  stepsRange: string
  stepForward: boolean
  explanation: string
}

export interface WangFloorPlanVisualizerProps {
  trigramLines?: [boolean, boolean, boolean]
  wangFloorPlanLines?: {
    line1Top: WangLineSpec
    line2Middle: WangLineSpec
    line3Bottom: WangLineSpec
  }
  formName?: string
  trigramSymbol?: string
  elementName?: string
  compact?: boolean
  selectedLine?: 1 | 2 | 3 | null
  onSelectLine?: (line: 1 | 2 | 3 | null) => void
  language?: string
}

const WANG_I18N: Record<string, {
  characterWangFloor: string
  dir12: string
  dir3: string
  dir9: string
  dir6: string
  line1Top: (yang: boolean) => string
  line2Mid: (yang: boolean) => string
  line3Bot: (yang: boolean) => string
  originJoonbi: string
  solidYang: string
  brokenUm: string
  clockVector: string
  facing: string
  trajectory: string
  frontDir: string
  rightDir: string
  rearDir: string
  leftDir: string
}> = {
  en: {
    characterWangFloor: 'Character 王 Floor',
    dir12: '12:00 (Front)',
    dir3: '3:00 (R)',
    dir9: '9:00 (L)',
    dir6: '6:00 (Rear)',
    line1Top: (y) => `Line 1 (Top / Heaven): ${y ? 'Yang —– (Advances)' : 'Um – – (In Place/Turn)'}`,
    line2Mid: (y) => `Line 2 (Middle / Man): ${y ? 'Yang —– (Advances)' : 'Um – – (In Place/Turn)'}`,
    line3Bot: (y) => `Line 3 (Bottom / Earth): ${y ? 'Yang —– (Advances)' : 'Um – – (In Place/Turn)'}`,
    originJoonbi: 'Origin (Joonbi)',
    solidYang: 'Solid Yang (Advances)',
    brokenUm: 'Broken Um (Stationary / Pivot)',
    clockVector: '4-Point Clock Vector',
    facing: 'Facing',
    trajectory: 'Standardized Trajectory:',
    frontDir: 'Front (전방)',
    rightDir: 'Right (우측)',
    rearDir: 'Rear (후방)',
    leftDir: 'Left (좌측)',
  },
  km: {
    characterWangFloor: 'គន្លងកម្រាល "王"',
    dir12: '12:00 (មុខ)',
    dir3: '3:00 (ស្តាំ)',
    dir9: '9:00 (ឆ្វេង)',
    dir6: '6:00 (ក្រោយ)',
    line1Top: (y) => `ខ្សែ ១ (លើ/មេឃ)៖ ${y ? 'Yang —– (បោះជំហាន)' : 'Um – – (នៅនឹងកន្លែង/បង្វិល)'}`,
    line2Mid: (y) => `ខ្សែ ២ (កណ្តាល/មនុស្ស)៖ ${y ? 'Yang —– (បោះជំហាន)' : 'Um – – (នៅនឹងកន្លែង/បង្វិល)'}`,
    line3Bot: (y) => `ខ្សែ ៣ (ក្រោម/ដី)៖ ${y ? 'Yang —– (បោះជំហាន)' : 'Um – – (នៅនឹងកន្លែង/បង្វិល)'}`,
    originJoonbi: 'ចំណុចដើម (Joonbi)',
    solidYang: 'បន្ទាត់រឹង Yang (បោះជំហាន)',
    brokenUm: 'បន្ទាត់ដាច់ Um (នៅនឹងកន្លែង / បង្វិល)',
    clockVector: 'វ៉ិចទ័រនាឡិកា ៤ ទិស',
    facing: 'បែរមុខ',
    trajectory: 'គន្លងក្បាច់ស្តង់ដារ៖',
    frontDir: 'ខាងមុខ (전방)',
    rightDir: 'ខាងស្តាំ (우측)',
    rearDir: 'ខាងក្រោយ (후방)',
    leftDir: 'ខាងឆ្វេង (좌측)',
  },
  zh: {
    characterWangFloor: '“王”字演武线',
    dir12: '12:00 (正前)',
    dir3: '3:00 (右侧)',
    dir9: '9:00 (左侧)',
    dir6: '6:00 (正后)',
    line1Top: (y) => `第一线 (上/天爻)：${y ? '阳爻 —– (前进步法)' : '阴爻 – – (原地/旋转)'}`,
    line2Mid: (y) => `第二线 (中/人爻)：${y ? '阳爻 —– (前进步法)' : '阴爻 – – (原地/旋转)'}`,
    line3Bot: (y) => `第三线 (下/地爻)：${y ? '阳爻 —– (前进步法)' : '阴爻 – – (原地/旋转)'}`,
    originJoonbi: '原点 (准备 / Joonbi)',
    solidYang: '连贯阳爻 (前进步法)',
    brokenUm: '断裂阴爻 (原地守势 / 转身)',
    clockVector: '四向时钟矢量系统',
    facing: '朝向',
    trajectory: '公认演武轨迹：',
    frontDir: '正前 (전방)',
    rightDir: '右侧 (우측)',
    rearDir: '正后 (후방)',
    leftDir: '左侧 (좌측)',
  },
  ko: {
    characterWangFloor: '王자 품새선',
    dir12: '12:00 (전방)',
    dir3: '3:00 (우측)',
    dir9: '9:00 (좌측)',
    dir6: '6:00 (후방)',
    line1Top: (y) => `1선 (상효 / 하늘)：${y ? '양효 —– (전진 보법)' : '음효 – – (제자리/방향전환)'}`,
    line2Mid: (y) => `2선 (중효 / 사람)：${y ? '양효 —– (전진 보법)' : '음효 – – (제자리/방향전환)'}`,
    line3Bot: (y) => `3선 (하효 / 땅)：${y ? '양효 —– (전진 보법)' : '음효 – – (제자리/방향전환)'}`,
    originJoonbi: '원점 (준비선 / Joonbi)',
    solidYang: '양효 (전진 보법)',
    brokenUm: '음효 (제자리 / 방향전환)',
    clockVector: '4방향 시계좌표 벡터',
    facing: '시선 방향',
    trajectory: '공인 이동 궤적:',
    frontDir: '전방 (Jeon-bang)',
    rightDir: '우측 (Woo-cheuk)',
    rearDir: '후방 (Hoo-bang)',
    leftDir: '좌측 (Jwa-cheuk)',
  },
}

/**
 * Visual Interactive Renderer for the Chinese character 王 (Wang) Floor Pattern.
 * Demonstrates Ronald A. Southwick's (2005) I Ching Trigram Stepping Law:
 * - Line 1 (Top / Heaven / 3:00 <-> 9:00): Solid Yang (advances) or Broken Um (in place/retreat)
 * - Line 2 (Middle / Man / 12:00 axis & flanks): Solid Yang (advances) or Broken Um (in place/retreat)
 * - Line 3 (Bottom / Earth / 9:00 <-> 3:00): Solid Yang (advances) or Broken Um (in place/retreat)
 * - Center Spine: The 12:00 <-> 6:00 vertical axis connecting all lines back to origin.
 */
export function WangFloorPlanVisualizer({
  trigramLines = [true, true, true],
  wangFloorPlanLines,
  formName,
  trigramSymbol,
  elementName,
  compact = false,
  selectedLine = null,
  onSelectLine,
  language = 'en',
}: WangFloorPlanVisualizerProps) {
  const t = WANG_I18N[language] || WANG_I18N.en
  const [hoveredLine, setHoveredLine] = React.useState<1 | 2 | 3 | null>(null)
  const activeHighlight = selectedLine ?? hoveredLine

  const isLine1Yang = wangFloorPlanLines?.line1Top?.isYang ?? trigramLines[0]
  const isLine2Yang = wangFloorPlanLines?.line2Middle?.isYang ?? trigramLines[1]
  const isLine3Yang = wangFloorPlanLines?.line3Bottom?.isYang ?? trigramLines[2]

  return (
    <div className={`space-y-3 font-mono ${compact ? 'text-xs' : 'text-sm'}`}>
      {/* Visual Canvas Box */}
      <div className="relative p-5 rounded-2xl bg-gradient-to-b from-zinc-950 via-zinc-900 to-black border border-zinc-800 shadow-xl overflow-hidden flex flex-col items-center">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-red/10 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

        {/* Top Header inside Visualizer */}
        <div className="w-full flex items-center justify-between gap-2 pb-3 mb-2 border-b border-zinc-800/80 z-10 text-xs flex-wrap sm:flex-nowrap">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse shrink-0" />
            <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider shrink-0">
              {t.characterWangFloor}
            </span>
            {formName && (
              <>
                <span className="text-zinc-600">&bull;</span>
                <span className="text-white font-bold truncate max-w-[130px] sm:max-w-[200px]">{formName}</span>
              </>
            )}
          </div>
          {trigramSymbol && (
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 border border-white/10 text-brand-red text-xs font-bold shrink-0">
              <span className="text-sm font-serif">{trigramSymbol}</span>
              {elementName && <span className="text-[10px] text-zinc-300 font-sans">{elementName}</span>}
            </div>
          )}
        </div>

        {/* SVG Wang Floor Pattern */}
        <div className="relative w-full max-w-[340px] aspect-[4/3] flex items-center justify-center select-none z-10 my-1">
          <svg
            viewBox="0 0 340 240"
            className="w-full h-full drop-shadow-md"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Grid Lines (Subtle) */}
            <line x1="40" y1="45" x2="300" y2="45" stroke="#27272a" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="40" y1="115" x2="300" y2="115" stroke="#27272a" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="40" y1="185" x2="300" y2="185" stroke="#27272a" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="170" y1="20" x2="170" y2="225" stroke="#27272a" strokeWidth="1" strokeDasharray="3 3" />

            {/* Direction Labels around Floor */}
            <text x="170" y="16" textAnchor="middle" fill="#71717a" fontSize="10" fontFamily="monospace" fontWeight="bold">
              {t.dir12}
            </text>
            <text x="325" y="120" textAnchor="middle" fill="#71717a" fontSize="10" fontFamily="monospace" fontWeight="bold">
              {t.dir3}
            </text>
            <text x="15" y="120" textAnchor="middle" fill="#71717a" fontSize="10" fontFamily="monospace" fontWeight="bold">
              {t.dir9}
            </text>
            <text x="170" y="235" textAnchor="middle" fill="#71717a" fontSize="10" fontFamily="monospace" fontWeight="bold">
              {t.dir6}
            </text>

            {/* Central Vertical Spine (connecting all horizontal bars) */}
            <rect
              x="164"
              y="45"
              width="12"
              height="140"
              rx="3"
              fill="#52525b"
              opacity="0.65"
            />
            {/* Vertical Flow Arrows */}
            <path d="M170 55 L166 65 L174 65 Z" fill="#a1a1aa" opacity="0.6" />
            <path d="M170 175 L166 165 L174 165 Z" fill="#a1a1aa" opacity="0.6" />

            {/* ============================================================ */}
            {/* LINE 1 (TOP / HEAVEN / 3:00 <-> 9:00)                         */}
            {/* ============================================================ */}
            <g
              className="cursor-pointer transition-all"
              onMouseEnter={() => setHoveredLine(1)}
              onMouseLeave={() => setHoveredLine(null)}
              onClick={() => onSelectLine?.(selectedLine === 1 ? null : 1)}
            >
              {isLine1Yang ? (
                // Solid Yang Line (advances)
                <rect
                  x="50"
                  y="38"
                  width="240"
                  height="14"
                  rx="4"
                  fill={activeHighlight === 1 ? '#EF2F38' : '#10b981'}
                  className="transition-colors duration-200"
                />
              ) : (
                // Broken Um Line (does not advance)
                <>
                  <rect
                    x="50"
                    y="38"
                    width="105"
                    height="14"
                    rx="4"
                    fill={activeHighlight === 1 ? '#EF2F38' : '#3b82f6'}
                    className="transition-colors duration-200"
                  />
                  <rect
                    x="185"
                    y="38"
                    width="105"
                    height="14"
                    rx="4"
                    fill={activeHighlight === 1 ? '#EF2F38' : '#3b82f6'}
                    className="transition-colors duration-200"
                  />
                </>
              )}
              {/* Badge Label */}
              <text
                x="55"
                y="32"
                fill={activeHighlight === 1 ? '#f87171' : '#a1a1aa'}
                fontSize="9"
                fontFamily="monospace"
                fontWeight="bold"
              >
                {t.line1Top(isLine1Yang)}
              </text>
            </g>

            {/* ============================================================ */}
            {/* LINE 2 (MIDDLE / MAN / 12:00 AXIS & FLANKS)                   */}
            {/* ============================================================ */}
            <g
              className="cursor-pointer transition-all"
              onMouseEnter={() => setHoveredLine(2)}
              onMouseLeave={() => setHoveredLine(null)}
              onClick={() => onSelectLine?.(selectedLine === 2 ? null : 2)}
            >
              {isLine2Yang ? (
                <rect
                  x="50"
                  y="108"
                  width="240"
                  height="14"
                  rx="4"
                  fill={activeHighlight === 2 ? '#EF2F38' : '#10b981'}
                  className="transition-colors duration-200"
                />
              ) : (
                <>
                  <rect
                    x="50"
                    y="108"
                    width="105"
                    height="14"
                    rx="4"
                    fill={activeHighlight === 2 ? '#EF2F38' : '#3b82f6'}
                    className="transition-colors duration-200"
                  />
                  <rect
                    x="185"
                    y="108"
                    width="105"
                    height="14"
                    rx="4"
                    fill={activeHighlight === 2 ? '#EF2F38' : '#3b82f6'}
                    className="transition-colors duration-200"
                  />
                </>
              )}
              <text
                x="55"
                y="102"
                fill={activeHighlight === 2 ? '#f87171' : '#a1a1aa'}
                fontSize="9"
                fontFamily="monospace"
                fontWeight="bold"
              >
                {t.line2Mid(isLine2Yang)}
              </text>
            </g>

            {/* ============================================================ */}
            {/* LINE 3 (BOTTOM / EARTH / 9:00 <-> 3:00)                       */}
            {/* ============================================================ */}
            <g
              className="cursor-pointer transition-all"
              onMouseEnter={() => setHoveredLine(3)}
              onMouseLeave={() => setHoveredLine(null)}
              onClick={() => onSelectLine?.(selectedLine === 3 ? null : 3)}
            >
              {isLine3Yang ? (
                <rect
                  x="50"
                  y="178"
                  width="240"
                  height="14"
                  rx="4"
                  fill={activeHighlight === 3 ? '#EF2F38' : '#10b981'}
                  className="transition-colors duration-200"
                />
              ) : (
                <>
                  <rect
                    x="50"
                    y="178"
                    width="105"
                    height="14"
                    rx="4"
                    fill={activeHighlight === 3 ? '#EF2F38' : '#3b82f6'}
                    className="transition-colors duration-200"
                  />
                  <rect
                    x="185"
                    y="178"
                    width="105"
                    height="14"
                    rx="4"
                    fill={activeHighlight === 3 ? '#EF2F38' : '#3b82f6'}
                    className="transition-colors duration-200"
                  />
                </>
              )}
              <text
                x="55"
                y="172"
                fill={activeHighlight === 3 ? '#f87171' : '#a1a1aa'}
                fontSize="9"
                fontFamily="monospace"
                fontWeight="bold"
              >
                {t.line3Bot(isLine3Yang)}
              </text>
            </g>

            {/* Origin Stance Marker (Center Base) */}
            <circle cx="170" cy="205" r="5" fill="#EF2F38" />
            <text x="170" y="218" textAnchor="middle" fill="#EF2F38" fontSize="8" fontFamily="monospace" fontWeight="bold">
              {t.originJoonbi}
            </text>
          </svg>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 pt-2 border-t border-zinc-800/80 w-full text-[10px] text-zinc-400 flex-wrap">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-3.5 h-1.5 rounded-sm bg-emerald-500" />
            <span>{t.solidYang}</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-1.5 h-1.5 rounded-sm bg-blue-500" />
            <span className="w-1.5 h-1.5 rounded-sm bg-blue-500" />
            <span>{t.brokenUm}</span>
          </div>
        </div>
      </div>

      {/* Explanatory Callout when a line is hovered or selected */}
      {activeHighlight && wangFloorPlanLines && (
        <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs space-y-1 animate-fade-in">
          {activeHighlight === 1 && (
            <>
              <div className="flex items-center justify-between text-zinc-300">
                <strong className="text-white font-bold">{wangFloorPlanLines.line1Top.name}</strong>
                <span className="text-[10px] text-brand-red font-bold">
                  {wangFloorPlanLines.line1Top.stepsRange}
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-light font-sans leading-relaxed">
                {wangFloorPlanLines.line1Top.explanation}
              </p>
            </>
          )}

          {activeHighlight === 2 && (
            <>
              <div className="flex items-center justify-between text-zinc-300">
                <strong className="text-white font-bold">{wangFloorPlanLines.line2Middle.name}</strong>
                <span className="text-[10px] text-amber-400 font-bold">
                  {wangFloorPlanLines.line2Middle.stepsRange}
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-light font-sans leading-relaxed">
                {wangFloorPlanLines.line2Middle.explanation}
              </p>
            </>
          )}

          {activeHighlight === 3 && (
            <>
              <div className="flex items-center justify-between text-zinc-300">
                <strong className="text-white font-bold">{wangFloorPlanLines.line3Bottom.name}</strong>
                <span className="text-[10px] text-blue-400 font-bold">
                  {wangFloorPlanLines.line3Bottom.stepsRange}
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-light font-sans leading-relaxed">
                {wangFloorPlanLines.line3Bottom.explanation}
              </p>
            </>
          )}
        </div>
      )}
    </div>
  )
}

/**
 * 4-Point Tactical Direction Compass Dial Visualizer
 * Renders the 12:00, 3:00, 6:00, 9:00 coordinate system from MSU Taekwondo / Southwick (2005).
 */
export function ClockCompassDial({
  trajectory,
  currentDirection,
  compact = false,
  language = 'en',
}: {
  trajectory?: string
  currentDirection?: string
  compact?: boolean
  language?: string
}) {
  const t = WANG_I18N[language] || WANG_I18N.en
  const directions = [
    { hour: '12:00', label: t.frontDir, x: 60, y: 16, anchor: 'middle' },
    { hour: '3:00', label: t.rightDir, x: 105, y: 64, anchor: 'end' },
    { hour: '6:00', label: t.rearDir, x: 60, y: 110, anchor: 'middle' },
    { hour: '9:00', label: t.leftDir, x: 15, y: 64, anchor: 'start' },
  ]

  return (
    <div className={`p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-white font-mono ${compact ? 'text-xs' : 'text-sm'} space-y-2`}>
      <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-xs">
        <div className="flex items-center gap-1.5 text-zinc-300">
          <Compass className="w-3.5 h-3.5 text-brand-red" />
          <span className="text-[10px] uppercase font-bold text-zinc-400">{t.clockVector}</span>
        </div>
        {currentDirection && (
          <span className="px-2 py-0.5 rounded bg-brand-red/20 text-brand-red font-bold text-[10px]">
            {t.facing}: {currentDirection}
          </span>
        )}
      </div>

      <div className="flex items-center justify-center py-2">
        <svg viewBox="0 0 120 120" className="w-28 h-28 select-none">
          {/* Compass Rings */}
          <circle cx="60" cy="60" r="50" fill="none" stroke="#27272a" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="42" fill="none" stroke="#3f3f46" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="60" cy="60" r="4" fill="#EF2F38" />

          {/* Crosshairs */}
          <line x1="60" y1="20" x2="60" y2="100" stroke="#3f3f46" strokeWidth="1" />
          <line x1="20" y1="60" x2="100" y2="60" stroke="#3f3f46" strokeWidth="1" />

          {/* Hour Marks */}
          {directions.map((d) => {
            const isCurrent = currentDirection?.includes(d.hour)

            return (
              <g key={d.hour}>
                <circle
                  cx={d.hour === '12:00' ? 60 : d.hour === '6:00' ? 60 : d.hour === '3:00' ? 100 : 20}
                  cy={d.hour === '12:00' ? 20 : d.hour === '6:00' ? 100 : 60}
                  r="3"
                  fill={isCurrent ? '#EF2F38' : '#71717a'}
                />
                <text
                  x={d.x}
                  y={d.y}
                  textAnchor={d.anchor as any}
                  fill={isCurrent ? '#EF2F38' : '#a1a1aa'}
                  fontSize="8"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {d.hour}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      {trajectory && (
        <div className="pt-2 border-t border-zinc-800 text-[10px] text-zinc-400 space-y-1">
          <span className="uppercase text-[9px] text-zinc-500 block font-bold">{t.trajectory}</span>
          <p className="text-zinc-300 font-bold overflow-x-auto whitespace-nowrap">
            {trajectory}
          </p>
        </div>
      )}
    </div>
  )
}
