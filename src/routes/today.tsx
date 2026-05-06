import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { AppHeader } from "@/components/AppHeader";
import { PRAYERS, Prayer } from "@/data/prayers";
import { Bookmark, PenLine } from "lucide-react";
import { OrnateDivider, EightStar, KhatimSeal } from "@/components/Ornaments";
import { CountdownArc } from "@/components/CountdownArc";
import { NamesMarquee } from "@/components/NamesMarquee";

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
  // Mock countdown — ticks down from 42 minutes to show the live arc.
  const total = 42 * 60;
  const [remain, setRemain] = useState(total);
  useEffect(() => {
    const t = setInterval(() => setRemain((r) => (r > 0 ? r - 1 : total)), 1000);
    return () => clearInterval(t);
  }, []);
  const mins = Math.floor(remain / 60);
  const secs = remain % 60;
  const progress = 1 - remain / total;

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
        className="absolute -top-8 -right-12 text-gold opacity-10 animate-spin-slow"
      />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-deep font-display">
            Next Prayer · الصلاة القادمة
          </span>
          <span className="font-arabic text-sm text-gold-soft" dir="rtl">
            بعد قليل
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-3xl">{p.emoji}</p>
            <h2 className="mt-2 font-display text-3xl text-gold-bright font-semibold tracking-wide">
              {p.name}
            </h2>
            <p className="font-arabic text-2xl text-gold mt-0.5" dir="rtl">
              {p.arabic}
            </p>
            <p className="font-display text-xl text-gold-soft mt-2">{p.time}</p>
          </div>
          <CountdownArc
            size={120}
            stroke={6}
            progress={progress}
            label={`${mins}:${String(secs).padStart(2, "0")}`}
            sublabel="Remaining"
          />
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
              Asma Al-Husna · أسماء الله الحسنى
            </span>
          </div>
          <NamesMarquee />
        </div>

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

        <div className="px-5 pt-2 flex flex-col items-center">
          <KhatimSeal size={56} className="text-gold opacity-70 animate-spin-slow" />
          <p className="text-center text-[10px] uppercase tracking-[0.22em] text-muted-sage/60 mt-3 font-display">
            وَأَقِمِ الصَّلَاةَ لِذِكْرِي
          </p>
        </div>
      </div>
    </AppLayout>
  );
}
