import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { AppHeader } from "@/components/AppHeader";
import { OrnateDivider, EightStar } from "@/components/Ornaments";
import { LogOut, ChevronRight, Shield } from "lucide-react";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile · الملف الشخصي" },
      { name: "description", content: "Your streak, stats, and settings." },
    ],
  }),
  component: ProfileScreen,
});

const stats = [
  { label: "Verses", arabic: "آيات", n: 142 },
  { label: "Reflections", arabic: "تأملات", n: 38 },
  { label: "Questions", arabic: "أسئلة", n: 17 },
  { label: "Saved", arabic: "محفوظ", n: 24 },
];

const settings = [
  { label: "Subscription", arabic: "الاشتراك", value: "Free", badge: true },
  { label: "Language", arabic: "اللغة", value: "العربية / EN" },
  { label: "Phone", arabic: "الجوال", value: "+966 5• ••• 4821" },
  { label: "Timezone", arabic: "المنطقة", value: "Asia / Riyadh" },
];

function ProfileScreen() {
  const navigate = useNavigate();
  return (
    <AppLayout>
      <AppHeader arabic="الملف الشخصي" english="Profile" />

      <div className="px-5 space-y-5">
        {/* Streak — hero */}
        <div
          className="relative rounded-[28px] p-6 overflow-hidden border border-gold/40 animate-fade-up animate-pulse-gold"
          style={{
            background:
              "linear-gradient(155deg, oklch(0.30 0.04 155) 0%, oklch(0.22 0.03 155) 50%, oklch(0.16 0.022 155) 100%)",
          }}
        >
          <EightStar
            size={200}
            className="absolute -top-12 -right-16 text-gold opacity-10"
          />
          <div className="relative flex items-center gap-5">
            <div
              className="relative h-20 w-20 rounded-2xl flex items-center justify-center border border-gold/30"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.78 0.13 85 / 0.25) 0%, transparent 70%)",
              }}
            >
              <span
                className="text-5xl"
                style={{
                  filter: "drop-shadow(0 0 16px oklch(0.7 0.18 45 / 0.7))",
                }}
              >
                🔥
              </span>
            </div>
            <div className="flex-1">
              <p className="font-display text-6xl font-semibold text-gold leading-none gold-text-glow">
                47
              </p>
              <p className="text-[10px] uppercase tracking-[0.28em] text-muted-sage mt-2 font-display">
                Day streak
              </p>
              <p className="font-arabic text-base text-gold-soft mt-0.5" dir="rtl">
                ٤٧ يومًا متواصلًا
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="rounded-2xl bg-gradient-card border border-border/60 p-4 animate-fade-up hover:border-gold/30 transition-colors"
              style={{ animationDelay: `${0.05 * i + 0.1}s` }}
            >
              <p className="font-display text-4xl font-semibold text-gold gold-text-glow leading-none">
                {s.n}
              </p>
              <div className="flex items-baseline justify-between mt-2">
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-sage">
                  {s.label}
                </p>
                <span className="font-arabic text-sm text-gold-soft" dir="rtl">
                  {s.arabic}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Settings */}
        <div className="rounded-[22px] bg-gradient-card border border-border/60 overflow-hidden animate-fade-up">
          {settings.map((s, i) => (
            <button
              key={s.label}
              className={`w-full flex items-center justify-between px-5 py-4 text-left hover:bg-forest-light/40 transition ${
                i !== settings.length - 1 ? "border-b border-border/50" : ""
              }`}
            >
              <span className="flex items-baseline gap-2">
                <span className="text-sm text-foreground/90">{s.label}</span>
                <span className="font-arabic text-xs text-muted-sage" dir="rtl">
                  {s.arabic}
                </span>
              </span>
              <span className="flex items-center gap-2">
                {s.badge ? (
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-gold border border-gold/40 rounded-full px-2.5 py-0.5 bg-gold/5">
                    {s.value}
                  </span>
                ) : (
                  <span className="text-xs text-muted-sage">{s.value}</span>
                )}
                <ChevronRight className="h-4 w-4 text-muted-sage/60" />
              </span>
            </button>
          ))}
        </div>

        {/* Commitment */}
        <div
          className="relative rounded-[22px] p-5 border border-gold/40 animate-fade-up overflow-hidden"
          style={{
            background:
              "linear-gradient(165deg, oklch(0.24 0.03 155) 0%, oklch(0.19 0.024 155) 100%)",
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-gold" />
              <span className="font-display text-sm text-gold-soft uppercase tracking-[0.22em]">
                Our commitment
              </span>
            </div>
            <span className="font-arabic text-base text-gold" dir="rtl">
              التزامنا
            </span>
          </div>
          <OrnateDivider className="mb-3" />
          <ul className="space-y-2 text-[13px] text-foreground/80">
            {[
              "No fatwas — we never issue rulings",
              "No personal opinions or interpretations",
              "Quran, classical Tafsir & Sahih Hadith only",
              "Every answer cites its source",
            ].map((line, i) => (
              <li key={i} className="flex gap-2.5 items-start">
                <span className="text-gold mt-1">◆</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Logout */}
        <button
          onClick={() => navigate({ to: "/" })}
          className="w-full rounded-2xl py-3.5 border border-destructive/40 text-destructive font-medium flex items-center justify-center gap-2 hover:bg-destructive/10 transition mb-2"
        >
          <LogOut className="h-4 w-4" />
          <span>Log out</span>
          <span className="opacity-50">·</span>
          <span className="font-arabic text-base" dir="rtl">تسجيل الخروج</span>
        </button>
      </div>
    </AppLayout>
  );
}
