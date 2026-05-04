import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { AppHeader } from "@/components/AppHeader";

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
    date: "Today",
    ref: "Al-Isra 17:78",
    text: "The stillness before sunrise reminds me how small my worries are. I asked for clarity and patience for the day ahead.",
  },
  {
    prayer: "Maghrib",
    arabic: "المغرب",
    date: "Yesterday",
    ref: "Ar-Rum 30:17",
    text: "Felt grateful watching the sky change colors. A reminder that everything in His creation glorifies Him in its own way.",
  },
];

const breakdown = [
  { e: "🌅", n: 5 },
  { e: "☀️", n: 4 },
  { e: "🌤️", n: 3 },
  { e: "🌇", n: 6 },
  { e: "🌙", n: 4 },
];

function JournalScreen() {
  return (
    <AppLayout>
      <AppHeader arabic="مجلة التأمل" english="Reflection Journal" />

      <div className="px-5 space-y-5">
        {/* Weekly digest */}
        <div className="rounded-3xl bg-gradient-card border border-border/60 p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-sage">This week</p>
              <p className="text-2xl font-semibold text-gold mt-1">22 reflections</p>
            </div>
            <span className="font-arabic text-2xl text-gold-soft" dir="rtl">
              ٢٢
            </span>
          </div>
          <div className="flex items-center justify-between gap-2">
            {breakdown.map((b, i) => (
              <div
                key={i}
                className="flex-1 rounded-2xl bg-forest-light/60 border border-border/40 py-2 flex flex-col items-center gap-1"
              >
                <span className="text-lg">{b.e}</span>
                <span className="text-xs font-semibold text-gold">{b.n}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Entries */}
        <div className="space-y-4">
          {entries.map((e, i) => (
            <article
              key={i}
              className="rounded-3xl bg-gradient-card border border-border/60 p-5"
            >
              <div className="flex items-baseline justify-between mb-2">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-sm font-semibold text-foreground">{e.prayer}</h3>
                  <span className="font-arabic text-base text-gold" dir="rtl">
                    {e.arabic}
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-muted-sage">
                  {e.date}
                </span>
              </div>
              <p className="text-[11px] tracking-wider uppercase text-gold-deep mb-2">
                {e.ref}
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">{e.text}</p>
            </article>
          ))}
        </div>

        {entries.length === 0 && (
          <div className="text-center py-16">
            <p className="font-arabic text-2xl text-gold-soft mb-2" dir="rtl">
              ابدأ رحلتك
            </p>
            <p className="text-sm text-muted-sage">
              Begin your reflection journey, one prayer at a time.
            </p>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
