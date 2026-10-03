import * as React from 'react'

export function BlackBeltStripesBadge({
  stripes,
  roman,
  compact = false,
}: {
  stripes: number
  roman?: string
  compact?: boolean
}) {
  const safeCount = Math.max(0, Math.min(Number(stripes) || 0, 9))

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-950 dark:bg-black border border-zinc-700/80 shadow-inner select-none ${
        compact ? 'h-5' : 'h-6'
      }`}
      title={`${safeCount}th Dan Black Belt`}
    >
      <div className="flex items-center gap-0.5">
        {Array.from({ length: safeCount }).map((_, i) => (
          <span
            key={i}
            className={`bg-gradient-to-b from-amber-200 via-amber-400 to-amber-500 rounded-[1px] shadow-[0_0_3px_rgba(245,158,11,0.6)] ${
              compact ? 'w-0.5 h-3' : 'w-1 h-3.5'
            }`}
          />
        ))}
      </div>
      {roman && (
        <span className="text-[10px] font-mono font-black tracking-wider text-amber-400">
          {roman}
        </span>
      )}
    </div>
  )
}
