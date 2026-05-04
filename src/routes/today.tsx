import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { AppHeader } from "@/components/AppHeader";
import { PRAYERS, Prayer } from "@/data/prayers";
import { Bookmark, PenLine } from "lucide-react";

export const Route = createFileRoute("/today")({
  head: () => ({
    meta: [
      { title: "Today · رفيق القرآن" },
      { name: "description", content: "Today's prayers, verses and reflections." },
    ],
  }),
  component: TodayScreen,
});

function PrayerCard({ p }: { p: Prayer }) {
  return (
    <article
      className={`rounded-3xl p-5 border transition-all ${
        p.active
          ? "bg-gradient-active border-gold/40 gold-glow"
          : "bg-gradient-card border-border/60"
      }`}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{p.emoji}</span>
          <div>
            <div className="flex items-baseline gap-2">
              <h3 className="text-base font-semibold text-foreground">{p.name}</h3>
              <span className="font-arabic text-lg text-gold" dir="rtl">
                {p.arabic}
              </span>
            </div>
            <p className="text-[11px] uppercase tracking-wider text-muted-sage">{p.time}</p>
          </div>
        </div>
        {p.active && (
          <span className="text-[10px] font-semibold uppercase tracking-wider text-gold border border-gold/40 rounded-full px-2.5 py-1">
            Now
          </span>
        )}
      </div>

      {/* Verse */}
      <div className="mt-5">
        <p
          className="font-arabic text-[20px] leading-[2] text-gold-soft text-right"
          dir="rtl"
        >
          {p.verseArabic}
        </p>
        <p className="mt-2 text-[11px] tracking-wider uppercase text-gold-deep text-right">
          — {p.surahRef}
        </p>
        <p className="mt-3 text-sm text-foreground/80 leading-relaxed italic">
          “{p.translation}”
        </p>
      </div>

      {/* Footer actions */}
      <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
        <button className="flex items-center gap-2 text-xs text-muted-sage hover:text-gold transition-colors">
          <PenLine className="h-3.5 w-3.5" />
          Write reflection
        </button>
        <button className="flex items-center gap-2 text-xs text-muted-sage hover:text-gold transition-colors">
          <Bookmark className="h-3.5 w-3.5" />
          Save
        </button>
      </div>
    </article>
  );
}

function TodayScreen() {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Riyadh",
  });

  return (
    <AppLayout>
      <AppHeader arabic="رفيق القرآن" english="Today" subtitle={date} />
      <div className="px-5 space-y-4">
        {PRAYERS.map((p) => (
          <PrayerCard key={p.key} p={p} />
        ))}
        <p className="text-center text-[10px] uppercase tracking-[0.2em] text-muted-sage/60 pt-2">
          Pull to refresh
        </p>
      </div>
    </AppLayout>
  );
}
