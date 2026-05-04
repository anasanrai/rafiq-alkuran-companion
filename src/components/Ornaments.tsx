/**
 * Islamic geometric / arabesque ornaments rendered as inline SVG.
 * All use currentColor so they inherit the gold tint.
 */

export function CornerOrnament({
  className = "",
  size = 28,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M2 2 L14 2 M2 2 L2 14 M2 2 Q8 4 10 8 Q12 10 14 14"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="6" cy="6" r="1" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function StarOrnament({
  className = "",
  size = 16,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}

/** Horizontal ornamental divider with central diamond — like classical mushaf separators. */
export function OrnateDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 text-gold ${className}`}>
      <span className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/40 to-gold/40" />
      <svg width="36" height="12" viewBox="0 0 36 12" fill="none" aria-hidden>
        <path d="M2 6 L8 6" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
        <path
          d="M18 1 L23 6 L18 11 L13 6 Z"
          fill="currentColor"
          opacity="0.4"
        />
        <circle cx="18" cy="6" r="1.5" fill="currentColor" />
        <path d="M28 6 L34 6" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
      </svg>
      <span className="flex-1 h-px bg-gradient-to-l from-transparent via-gold/40 to-gold/40" />
    </div>
  );
}

/** Octagonal Islamic star — traditional 8-pointed motif. */
export function EightStar({
  className = "",
  size = 80,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden
    >
      <g stroke="currentColor" strokeWidth="0.6" opacity="0.6">
        <rect x="20" y="20" width="60" height="60" />
        <rect
          x="20"
          y="20"
          width="60"
          height="60"
          transform="rotate(45 50 50)"
        />
        <circle cx="50" cy="50" r="18" />
        <circle cx="50" cy="50" r="34" opacity="0.4" />
      </g>
    </svg>
  );
}

/** Subtle background pattern — repeating geometric medallions. */
export function PatternBackdrop({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden
    >
      <defs>
        <pattern id="islamic-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <g stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.5">
            <path d="M40 10 L60 30 L40 50 L20 30 Z" />
            <circle cx="40" cy="30" r="6" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#islamic-grid)" className="text-gold" />
    </svg>
  );
}

/** Decorative bracket frame around content (like a mushaf border). */
export function FrameCorners({ className = "" }: { className?: string }) {
  return (
    <>
      <CornerOrnament className={`absolute top-3 left-3 text-gold ${className}`} />
      <CornerOrnament className={`absolute top-3 right-3 text-gold rotate-90 ${className}`} />
      <CornerOrnament className={`absolute bottom-3 right-3 text-gold rotate-180 ${className}`} />
      <CornerOrnament className={`absolute bottom-3 left-3 text-gold -rotate-90 ${className}`} />
    </>
  );
}
