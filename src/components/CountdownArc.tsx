import { useEffect, useState } from "react";

/**
 * Animated SVG progress arc with center label.
 * `progress` is 0..1 (filled portion).
 */
export function CountdownArc({
  size = 120,
  stroke = 6,
  progress,
  label,
  sublabel,
}: {
  size?: number;
  stroke?: number;
  progress: number;
  label: string;
  sublabel?: string;
}) {
  const [p, setP] = useState(0);
  useEffect(() => {
    const t = requestAnimationFrame(() => setP(progress));
    return () => cancelAnimationFrame(t);
  }, [progress]);

  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - p);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id="arc-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.92 0.10 88)" />
            <stop offset="50%" stopColor="oklch(0.78 0.13 85)" />
            <stop offset="100%" stopColor="oklch(0.58 0.12 78)" />
          </linearGradient>
          <filter id="arc-glow">
            <feGaussianBlur stdDeviation="2" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="oklch(0.78 0.13 85 / 0.12)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#arc-gold)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          filter="url(#arc-glow)"
          style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.22,1,0.36,1)" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-2xl font-semibold text-gold gold-text-glow leading-none">
          {label}
        </span>
        {sublabel && (
          <span className="mt-1 text-[9px] uppercase tracking-[0.22em] text-muted-sage font-display">
            {sublabel}
          </span>
        )}
      </div>
    </div>
  );
}
