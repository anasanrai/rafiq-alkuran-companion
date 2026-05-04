import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { AppHeader } from "@/components/AppHeader";
import { PRAYERS, Prayer } from "@/data/prayers";
import { Bookmark, PenLine, Clock } from "lucide-react";
import { OrnateDivider, EightStar } from "@/components/Ornaments";

export const Route = createFileRoute("/today")({
  head: () => ({
    meta: [
      { title: "Today · رفيق القرآن" },
      { name: "description", content: "Today's prayers, verses and reflections." },
    ],
  }),
  component: TodayScreen,
});

function NextPrayerHero({ p }: { p: Prayer }) {
  return (
    <section
      className="relative mx-5 rounded-[28px] p-6 overflow-hidden border border-gold/30 animate-fade-up"
      style={{
        background:
          "linear-gradient(155deg, oklch(0.30 0.04 155) 0%, oklch(0.22 0.03 155) 50%, oklch(0.18 0.025 155) 100%)",
        boxShadow:
          "0 0 60px -10px oklch(0.78 0.13 85 / 0.35), inset 0 1px 0 0 oklch(0.92 0.1 88 / 0.15)",
      }}
    >
      <EightStar
        size={180}
        className="absolute -top-8 -right-12 text-gold opacity-10"
      />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-deep font-display">
            Next Prayer · الصلاة القادمة
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-gold">
            <Clock className="h-3 w-3" />
            in 42 min
          </span>
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-4xl">{p.emoji}</p>
            <h2 className="mt-2 font-display text-3xl text-gold-bright font-semibold tracking-wide">
              {p.name}
            </h2>
          </div>
          <div className="text-right">
            <p className="font-arabic text-4xl text-gold gold-text-glow" dir="rtl">
              {p.arabic}
            </p>
            <p className="font-display text-2xl text-gold-soft mt-1">{p.time}</p>
          </div>
        </div>

        <OrnateDivider className="mt-5" />

        <p className="font-arabic text-[22px] leading-[2] text-gold-soft text-right mt-4" dir="rtl">
          {p.verseArabic}
        </p>
        <p className="text-[10px] tracking-[0.2em] uppercase text-gold-deep text-right mt-2 font-display">
          {p.surahRef}
        </p>
        <p className="mt-3 text-sm text-foreground/85 leading-relaxed font-display italic">
          “{p.translation}”
        </p>
      </div>
    </section>
  );
}

function PrayerCard({ p, i }: { p: Prayer; i: number }) {
  return (
    <article
      className="group relative rounded-[24px] p-5 border border-border/60 bg-gradient-card hover:border-gold/30 transition-all animate-fade-up overflow-hidden"
      style={{
        animationDelay: `${0.05 * i + 0.1}s`,
        boxShadow: "0 4px 16px -8px rgba(0,0,0,0.4)",
      }}
    >
      {/* Subtle vertical gold rule */}
      <span className="absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="flex items-center justify-center h-11 w-11 rounded-2xl text-xl border border-gold/20"
            style={{ background: "oklch(0.20 0.025 155)" }}
          >
            {p.emoji}
          </span>
          <div>
            <div className="flex items-baseline gap-2">
              <h3 className="font-display text-lg font-semibold text-foreground">{p.name}</h3>
              <span className="font-arabic text-lg text-gold" dir="rtl">
                {p.arabic}
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-sage mt-0.5">
              {p.time}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p
          className="font-arabic text-[18px] leading-[2] text-gold-soft text-right"
          dir="rtl"
        >
          {p.verseArabic}
        </p>
        <p className="mt-1.5 text-[10px] tracking-[0.2em] uppercase text-gold-deep text-right font-display">
          {p.surahRef}
        </p>
        <p className="mt-2.5 text-[13px] text-foreground/75 leading-relaxed font-display italic">
          “{p.translation}”
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between">
        <button className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-muted-sage hover:text-gold transition-colors">
          <PenLine className="h-3 w-3" />
          Reflect
        </button>
        <button className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-muted-sage hover:text-gold transition-colors">
          <Bookmark className="h-3 w-3" />
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
  const next = PRAYERS.find((p) => p.active) ?? PRAYERS[0];
  const others = PRAYERS.filter((p) => p.key !== next.key);

  return (
    <AppLayout>
      <AppHeader
        arabic="رفيق القرآن"
        english="Today · 12 Jumādā al-Ākhirah"
        subtitle={date}
      />
      <div className="space-y-5 pb-4">
        <NextPrayerHero p={next} />

        <div className="px-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] uppercase tracking-[0.28em] text-gold-deep font-display">
              All Prayers · جميع الصلوات
            </span>
            <span className="font-arabic text-sm text-muted-sage" dir="rtl">
              ٥
            </span>
          </div>
          <div className="space-y-3">
            {others.map((p, i) => (
              <PrayerCard key={p.key} p={p} i={i} />
            ))}
          </div>
        </div>

        <div className="px-5 pt-2">
          <OrnateDivider />
          <p className="text-center text-[10px] uppercase tracking-[0.22em] text-muted-sage/60 mt-3 font-display">
            وَأَقِمِ الصَّلَاةَ لِذِكْرِي
          </p>
        </div>
      </div>
    </AppLayout>
  );
}
