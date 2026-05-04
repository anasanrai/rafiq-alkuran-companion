import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { AppHeader } from "@/components/AppHeader";
import { OrnateDivider } from "@/components/Ornaments";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal · مجلة التأمل" },
      { name: "description", content: "Your weekly reflections and journal entries." },
    ],
  }),
  component: JournalScreen,
});

const entries = [
  {
    prayer: "Fajr",
    arabic: "الفجر",
    emoji: "🌅",
    date: "Today · 9:14 AM",
    ref: "Al-Isra 17:78",
    text: "The stillness before sunrise reminds me how small my worries are. I asked for clarity and patience for the day ahead.",
  },
  {
    prayer: "Maghrib",
    arabic: "المغرب",
    emoji: "🌇",
    date: "Yesterday · 6:42 PM",
    ref: "Ar-Rum 30:17",
    text: "Felt grateful watching the sky change colors. A reminder that everything in His creation glorifies Him in its own way.",
  },
];

const breakdown = [
  { e: "🌅", n: 5, label: "Fajr" },
  { e: "☀️", n: 4, label: "Dhuhr" },
  { e: "🌤️", n: 3, label: "Asr" },
  { e: "🌇", n: 6, label: "Maghrib" },
  { e: "🌙", n: 4, label: "Isha" },
];

function JournalScreen() {
  return (
    <AppLayout>
      <AppHeader arabic="مجلة التأمل" english="Reflection Journal" />

      <div className="px-5 space-y-5">
        {/* Weekly digest */}
        <div
          className="relative rounded-[28px] border border-gold/25 p-6 overflow-hidden animate-fade-up"
          style={{
            background:
              "linear-gradient(165deg, oklch(0.27 0.034 155) 0%, oklch(0.20 0.026 155) 100%)",
            boxShadow:
              "0 8px 32px -12px rgba(0,0,0,0.5), inset 0 1px 0 0 oklch(0.78 0.13 85 / 0.15)",
          }}
        >
          <div className="flex items-center justify-between mb-1">
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="text-[9px] uppercase tracking-[0.28em] text-gold-deep font-display">
              This Week · هذا الأسبوع
            </span>
          </div>
          <div className="flex items-end justify-between mt-3 mb-5">
            <div>
              <p className="font-display text-5xl font-semibold text-gold gold-text-glow leading-none">
                22
              </p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-sage mt-2">
                Reflections
              </p>
            </div>
            <p className="font-arabic text-3xl text-gold-soft" dir="rtl">
              ٢٢ تأمّل
            </p>
          </div>

          <OrnateDivider className="mb-4" />

          <div className="flex items-end justify-between gap-2">
            {breakdown.map((b, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                <div
                  className="w-full rounded-t-md bg-gradient-to-t from-gold/40 to-gold/10"
                  style={{ height: `${b.n * 8 + 8}px` }}
                />
                <span className="text-base">{b.e}</span>
                <span className="text-[10px] font-semibold text-gold">{b.n}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Entries */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-[10px] uppercase tracking-[0.28em] text-gold-deep font-display">
              Recent · الأحدث
            </span>
            <span className="font-arabic text-xs text-muted-sage" dir="rtl">
              {entries.length} مدخل
            </span>
          </div>
          <div className="space-y-3">
            {entries.map((e, i) => (
              <article
                key={i}
                className="relative rounded-[22px] border border-border/60 bg-gradient-card p-5 animate-fade-up hover:border-gold/30 transition-colors"
                style={{ animationDelay: `${0.1 * i + 0.15}s` }}
              >
                <span className="absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">{e.emoji}</span>
                    <div className="flex items-baseline gap-2">
                      <h3 className="font-display text-base font-semibold text-foreground">
                        {e.prayer}
                      </h3>
                      <span className="font-arabic text-sm text-gold" dir="rtl">
                        {e.arabic}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-sage">
                    {e.date}
                  </span>
                </div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-gold-deep mb-2 font-display">
                  {e.ref}
                </p>
                <p className="text-[13.5px] text-foreground/80 leading-relaxed font-display italic">
                  “{e.text}”
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
