import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { AppHeader } from "@/components/AppHeader";
import { LogOut, ChevronRight } from "lucide-react";

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
  { label: "Subscription", value: "Free", badge: true },
  { label: "Language", value: "العربية / English" },
  { label: "Phone", value: "+966 5• ••• 4821" },
  { label: "Timezone", value: "Asia / Riyadh" },
];

function ProfileScreen() {
  const navigate = useNavigate();
  return (
    <AppLayout>
      <AppHeader arabic="الملف الشخصي" english="Profile" />

      <div className="px-5 space-y-5">
        {/* Streak */}
        <div className="rounded-3xl p-6 bg-gradient-card border border-gold/30 gold-glow">
          <div className="flex items-center gap-4">
            <span
              className="text-5xl"
              style={{ filter: "drop-shadow(0 0 14px oklch(0.7 0.18 45 / 0.7))" }}
            >
              🔥
            </span>
            <div>
              <p className="text-5xl font-bold text-gold leading-none gold-text-glow">47</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-sage mt-2">
                Day streak
              </p>
              <p className="font-arabic text-base text-gold-soft" dir="rtl">
                ٤٧ يومًا متواصلًا
              </p>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-gradient-card border border-border/60 p-4"
            >
              <p className="text-3xl font-semibold text-gold gold-text-glow">{s.n}</p>
              <div className="flex items-baseline justify-between mt-1">
                <p className="text-[11px] uppercase tracking-wider text-muted-sage">
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
        <div className="rounded-3xl bg-gradient-card border border-border/60 overflow-hidden">
          {settings.map((s, i) => (
            <button
              key={s.label}
              className={`w-full flex items-center justify-between px-5 py-4 text-left hover:bg-forest-light/40 transition ${
                i !== settings.length - 1 ? "border-b border-border/50" : ""
              }`}
            >
              <span className="text-sm text-foreground/90">{s.label}</span>
              <span className="flex items-center gap-2">
                {s.badge ? (
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-gold border border-gold/40 rounded-full px-2.5 py-0.5">
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
        <div className="rounded-3xl p-5 bg-gradient-card border border-gold/40">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-arabic text-lg text-gold" dir="rtl">
              التزامنا
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold-deep">
              · Our commitment
            </span>
          </div>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li className="flex gap-2">
              <span className="text-gold">·</span> No fatwas — we never issue rulings
            </li>
            <li className="flex gap-2">
              <span className="text-gold">·</span> No personal opinions or interpretations
            </li>
            <li className="flex gap-2">
              <span className="text-gold">·</span> Quran, classical Tafsir & Sahih Hadith only
            </li>
            <li className="flex gap-2">
              <span className="text-gold">·</span> Every answer cites its source
            </li>
          </ul>
        </div>

        {/* Logout */}
        <button
          onClick={() => navigate({ to: "/" })}
          className="w-full rounded-2xl py-3.5 border border-destructive/50 text-destructive font-medium flex items-center justify-center gap-2 hover:bg-destructive/10 transition"
        >
          <LogOut className="h-4 w-4" />
          Log out · تسجيل الخروج
        </button>
      </div>
    </AppLayout>
  );
}
