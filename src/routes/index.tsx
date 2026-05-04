import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PhoneShell } from "@/components/PhoneShell";

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
    // UI-only mock: navigate after a beat
    setTimeout(() => navigate({ to: "/today" }), 600);
  };

  return (
    <PhoneShell>
      <div className="absolute inset-0 flex flex-col px-7 pt-16 pb-10">
        {/* Logo */}
        <div className="flex flex-col items-center pt-10">
          <div
            className="relative h-28 w-28 rounded-full flex items-center justify-center mb-6"
            style={{
              background:
                "radial-gradient(circle, oklch(0.78 0.13 85 / 0.25) 0%, transparent 70%)",
            }}
          >
            <span
              className="text-7xl"
              style={{ filter: "drop-shadow(0 0 20px oklch(0.78 0.13 85 / 0.7))" }}
            >
              📿
            </span>
          </div>
          <h1
            className="font-arabic text-5xl text-gold gold-text-glow leading-none"
            dir="rtl"
          >
            رفيق القرآن
          </h1>
          <p className="mt-3 text-lg tracking-[0.25em] text-gold-soft uppercase">
            Rafiq Al-Quran
          </p>
          <p className="mt-3 text-sm text-muted-sage text-center max-w-[260px] leading-relaxed">
            Your spiritual companion at every prayer
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSend} className="mt-auto space-y-4">
          <div>
            <label className="block text-[11px] uppercase tracking-[0.18em] text-muted-sage mb-2">
              Phone · رقم الجوال
            </label>
            <div
              className="flex items-center rounded-2xl border border-border bg-input px-4 py-3.5"
              style={{ background: "oklch(0.20 0.025 155)" }}
            >
              <span className="text-gold-soft font-medium pr-3 border-r border-border mr-3">
                +966
              </span>
              <input
                type="tel"
                inputMode="tel"
                placeholder="5X XXX XXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-sage/50"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl py-4 font-semibold tracking-wide bg-gradient-gold text-primary-foreground gold-glow active:scale-[0.98] transition-transform disabled:opacity-60"
          >
            {loading ? "..." : "Send OTP · إرسال الرمز"}
          </button>

          <p className="text-center text-[10px] tracking-wide text-muted-sage/80 leading-relaxed mt-6">
            No fatwas · No opinions
            <br />
            Quran + Tafsir + Sahih Hadith only
          </p>
        </form>
      </div>
    </PhoneShell>
  );
}
