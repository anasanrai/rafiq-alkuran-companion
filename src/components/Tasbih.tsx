import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { EightStar } from "./Ornaments";

const PHRASES = [
  { ar: "سُبْحَانَ ٱللَّٰه", en: "SubhanAllah", target: 33 },
  { ar: "ٱلْحَمْدُ لِلَّٰه", en: "Alhamdulillah", target: 33 },
  { ar: "ٱللَّٰهُ أَكْبَر", en: "Allahu Akbar", target: 34 },
];

export function Tasbih() {
  const [count, setCount] = useState(0);
  const [idx, setIdx] = useState(0);
  const phrase = PHRASES[idx];
  const pct = Math.min(count / phrase.target, 1);

  const tap = () => {
    if (count + 1 >= phrase.target) {
      setCount(0);
      setIdx((i) => (i + 1) % PHRASES.length);
    } else {
      setCount((c) => c + 1);
    }
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate?.(8);
    }
  };

  const reset = () => {
    setCount(0);
    setIdx(0);
  };

  return (
    <div
      className="relative rounded-[28px] border border-gold/30 p-6 overflow-hidden animate-fade-up"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.28 0.036 155) 0%, oklch(0.20 0.026 155) 60%, oklch(0.16 0.022 155) 100%)",
        boxShadow:
          "0 0 60px -16px oklch(0.78 0.13 85 / 0.4), inset 0 1px 0 0 oklch(0.92 0.1 88 / 0.12)",
      }}
    >
      <EightStar
        size={220}
        className="absolute -top-16 -right-16 text-gold opacity-[0.08]"
      />
      <div className="relative flex items-center justify-between mb-4">
        <span className="text-[10px] uppercase tracking-[0.28em] text-gold-deep font-display">
          Tasbih · تسبيح
        </span>
        <button
          onClick={reset}
          className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted-sage hover:text-gold transition"
        >
          <RotateCcw className="h-3 w-3" />
          Reset
        </button>
      </div>

      <div className="relative flex flex-col items-center">
        <p className="font-arabic text-3xl text-gold gold-text-glow text-center" dir="rtl">
          {phrase.ar}
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-gold-deep font-display">
          {phrase.en}
        </p>

        <button
          onClick={tap}
          className="mt-5 relative h-44 w-44 rounded-full active:scale-[0.97] transition-transform group"
          aria-label="Tap to count"
        >
          {/* Outer ring */}
          <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50" cy="50" r="46"
              fill="none"
              stroke="oklch(0.78 0.13 85 / 0.12)"
              strokeWidth="2.5"
            />
            <circle
              cx="50" cy="50" r="46"
              fill="none"
              stroke="url(#tasbih-grad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 46}`}
              strokeDashoffset={`${2 * Math.PI * 46 * (1 - pct)}`}
              style={{ transition: "stroke-dashoffset 0.4s ease-out" }}
            />
            <defs>
              <linearGradient id="tasbih-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="oklch(0.92 0.10 88)" />
                <stop offset="100%" stopColor="oklch(0.62 0.12 78)" />
              </linearGradient>
            </defs>
          </svg>
          {/* Inner orb */}
          <span
            className="absolute inset-3 rounded-full flex items-center justify-center"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, oklch(0.32 0.04 155) 0%, oklch(0.18 0.024 155) 70%)",
              boxShadow:
                "inset 0 2px 12px oklch(0.92 0.1 88 / 0.18), 0 8px 32px -8px oklch(0.78 0.13 85 / 0.5)",
            }}
          >
            <span className="font-display text-6xl font-semibold text-gold gold-text-glow leading-none">
              {count}
            </span>
          </span>
        </button>

        <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-muted-sage font-display">
          {count} / {phrase.target}
        </p>
      </div>
    </div>
  );
}
