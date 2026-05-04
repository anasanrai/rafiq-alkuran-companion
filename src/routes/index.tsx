import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PhoneShell } from "@/components/PhoneShell";
import { EightStar, OrnateDivider, PatternBackdrop } from "@/components/Ornaments";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rafiq Al-Quran · رفيق القرآن" },
      {
        name: "description",
        content:
          "Your spiritual companion at every prayer. Quran, Tafsir and Sahih Hadith — no fatwas, no opinions.",
      },
    ],
  }),
  component: LoginScreen,
});

function LoginScreen() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => navigate({ to: "/today" }), 700);
  };

  return (
    <PhoneShell>
      <div className="absolute inset-0 flex flex-col px-7 pt-20 pb-10 overflow-hidden">
        {/* Ambient gold glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.78 0.13 85 / 0.18) 0%, transparent 60%)",
          }}
        />

        {/* Pattern backdrop */}
        <div className="absolute inset-0 text-gold opacity-[0.06] pointer-events-none">
          <PatternBackdrop />
        </div>

        {/* Floating geometric stars */}
        <EightStar
          size={140}
          className="absolute top-32 -right-12 text-gold opacity-[0.08] animate-float"
        />
        <EightStar
          size={100}
          className="absolute bottom-40 -left-8 text-gold opacity-[0.06] animate-float"
        />

        {/* Logo block */}
        <div className="relative flex flex-col items-center pt-6 animate-fade-up">
          <div className="relative h-32 w-32 flex items-center justify-center mb-8">
            <EightStar
              size={128}
              className="absolute inset-0 text-gold opacity-30 animate-pulse-gold"
            />
            <div
              className="absolute inset-3 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.78 0.13 85 / 0.35) 0%, transparent 70%)",
              }}
            />
            <span
              className="relative text-7xl"
              style={{ filter: "drop-shadow(0 0 24px oklch(0.78 0.13 85 / 0.8))" }}
            >
              📿
            </span>
          </div>

          <h1
            className="font-arabic text-[56px] leading-none gold-text-shimmer"
            dir="rtl"
          >
            رفيق القرآن
          </h1>
          <p className="mt-4 font-display text-2xl tracking-[0.18em] text-gold-soft uppercase">
            Rafiq Al-Quran
          </p>

          <OrnateDivider className="mt-6 w-48" />

          <p className="mt-5 text-[13px] text-muted-sage text-center max-w-[280px] leading-relaxed font-display italic">
            Your spiritual companion
            <br />
            at every prayer
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSend}
          className="relative mt-auto space-y-4 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div>
            <label className="block text-[10px] uppercase tracking-[0.28em] text-gold-deep mb-2.5 text-center font-display">
              Phone · رقم الجوال
            </label>
            <div
              className="flex items-center rounded-2xl border border-border/80 px-4 py-4 backdrop-blur-sm"
              style={{
                background:
                  "linear-gradient(180deg, oklch(0.22 0.028 155 / 0.7), oklch(0.18 0.024 155 / 0.7))",
                boxShadow:
                  "inset 0 1px 0 0 oklch(0.78 0.13 85 / 0.15), 0 4px 16px -4px rgba(0,0,0,0.4)",
              }}
            >
              <span className="text-gold font-semibold pr-3 border-r border-gold/30 mr-3 tracking-wide">
                +966
              </span>
              <input
                type="tel"
                inputMode="tel"
                placeholder="5X XXX XXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-sage/40 tracking-wider"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group relative w-full rounded-2xl py-4 font-semibold tracking-wider text-primary-foreground gold-glow-strong active:scale-[0.98] transition-all overflow-hidden disabled:opacity-70"
          >
            <span className="absolute inset-0 bg-gradient-gold-shine" />
            <span className="relative flex items-center justify-center gap-3 text-[15px]">
              {loading ? (
                <span className="font-arabic text-lg" dir="rtl">جارٍ الإرسال...</span>
              ) : (
                <>
                  <span>Send OTP</span>
                  <span className="opacity-50">·</span>
                  <span className="font-arabic text-lg" dir="rtl">إرسال الرمز</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </span>
          </button>

          <div className="pt-4">
            <OrnateDivider />
            <p className="text-center text-[10px] tracking-[0.18em] text-muted-sage/80 leading-relaxed mt-4 uppercase font-display">
              No fatwas · No opinions
              <br />
              Quran + Tafsir + Sahih Hadith only
            </p>
          </div>
        </form>
      </div>
    </PhoneShell>
  );
}
