/**
 * Scrolling ribbon of the Beautiful Names of Allah (selection).
 * Pure CSS marquee, paused on hover.
 */
const NAMES: { ar: string; en: string }[] = [
  { ar: "الرَّحْمَٰن", en: "The Most Gracious" },
  { ar: "الرَّحِيم", en: "The Most Merciful" },
  { ar: "الْمَلِك", en: "The Sovereign" },
  { ar: "الْقُدُّوس", en: "The Most Holy" },
  { ar: "السَّلَام", en: "The Source of Peace" },
  { ar: "الْمُؤْمِن", en: "The Granter of Security" },
  { ar: "الْعَزِيز", en: "The Mighty" },
  { ar: "الْغَفَّار", en: "The Ever Forgiving" },
  { ar: "الْوَهَّاب", en: "The Bestower" },
  { ar: "اللَّطِيف", en: "The Subtle" },
  { ar: "الْحَكِيم", en: "The Wise" },
  { ar: "النُّور", en: "The Light" },
];

export function NamesMarquee() {
  const loop = [...NAMES, ...NAMES];
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-gold/15 py-3"
      style={{
        background:
          "linear-gradient(90deg, oklch(0.16 0.022 155) 0%, oklch(0.20 0.026 155) 50%, oklch(0.16 0.022 155) 100%)",
      }}
    >
      {/* Edge fades */}
      <span
        className="absolute inset-y-0 left-0 w-12 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, oklch(0.16 0.022 155) 0%, transparent 100%)",
        }}
      />
      <span
        className="absolute inset-y-0 right-0 w-12 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, oklch(0.16 0.022 155) 0%, transparent 100%)",
        }}
      />
      <div className="flex gap-8 animate-marquee whitespace-nowrap will-change-transform">
        {loop.map((n, i) => (
          <span key={i} className="inline-flex items-baseline gap-2">
            <span className="font-arabic text-xl text-gold gold-text-glow" dir="rtl">
              {n.ar}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-sage font-display">
              {n.en}
            </span>
            <span className="text-gold/30 mx-2">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
