/** Gold Dan bars across the end of a black belt (place inside a `relative` belt shape). */
export function DanBars({ count, className = 'right-1.5' }: { count?: number; className?: string }) {
  if (!count) return null
  return (
    <span className={`absolute inset-y-0 flex gap-0.5 ${className}`} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="h-full w-1 bg-[#D4AF37]" />
      ))}
    </span>
  )
}
