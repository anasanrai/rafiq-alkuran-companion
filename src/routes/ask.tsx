import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { AppHeader } from "@/components/AppHeader";
import { Send, BookOpen } from "lucide-react";
import { OrnateDivider } from "@/components/Ornaments";

export const Route = createFileRoute("/ask")({
  head: () => ({
    meta: [
      { title: "Ask · اسأل رفيق" },
      { name: "description", content: "Ask Rafiq — Quran, Tafsir and Sahih Hadith only." },
    ],
  }),
  component: AskScreen,
});

type Msg = {
  id: string;
  role: "user" | "assistant";
  text: string;
  arabic?: string;
  ref?: string;
  source?: string;
};

const initial: Msg[] = [
  {
    id: "1",
    role: "user",
    text: "What does the Quran say about patience in hardship?",
  },
  {
    id: "2",
    role: "assistant",
    arabic:
      "وَبَشِّرِ الصَّابِرِينَ ۝ الَّذِينَ إِذَا أَصَابَتْهُم مُّصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
    ref: "Al-Baqarah 2:155-156",
    text: "Allah promises glad tidings to those who patiently endure hardship — those who, when struck by calamity, return to Him in remembrance. Patience (ṣabr) is paired with prayer as the believer's refuge.",
    source: "Quran 2:155 · Tafsir Ibn Kathir · والله أعلم",
  },
];

function AskScreen() {
  const [messages, setMessages] = useState<Msg[]>(initial);
  const [input, setInput] = useState("");

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((m) => [
      ...m,
      { id: String(Date.now()), role: "user", text: input.trim() },
    ]);
    setInput("");
  };

  return (
    <AppLayout>
      <AppHeader
        arabic="اسأل رفيق"
        english="Ask Rafiq"
        subtitle="Quran · Tafsir · Sahih Hadith only"
      />

      {/* Rate limit pill */}
      <div className="px-5 mb-4 animate-fade-up">
        <div
          className="rounded-2xl border border-gold/20 px-4 py-2.5 flex items-center justify-between"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.24 0.03 155 / 0.7), oklch(0.20 0.025 155 / 0.7))",
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.22em] text-muted-sage font-display">
            Free questions today
          </span>
          <span className="flex items-center gap-2">
            <span className="flex gap-0.5">
              {[0, 1, 2, 3].map((i) => (
                <span key={i} className="h-1.5 w-3 rounded-full bg-gold" />
              ))}
              <span className="h-1.5 w-3 rounded-full bg-gold/20" />
            </span>
            <span className="text-xs font-semibold text-gold">4 / 5</span>
          </span>
        </div>
      </div>

      <div className="px-4 space-y-4">
        {messages.map((m, i) =>
          m.role === "assistant" ? (
            <div
              key={m.id}
              className="max-w-[90%] mr-auto animate-fade-up"
              style={{ animationDelay: `${0.05 * i}s` }}
            >
              <div
                className="rounded-[22px] rounded-tl-md p-4 border border-gold/20"
                style={{
                  background:
                    "linear-gradient(165deg, oklch(0.24 0.03 155) 0%, oklch(0.19 0.024 155) 100%)",
                  boxShadow: "0 6px 20px -8px rgba(0,0,0,0.5)",
                }}
              >
                {m.arabic && (
                  <>
                    <p
                      className="font-arabic text-[19px] leading-[2] text-gold-soft text-right"
                      dir="rtl"
                    >
                      {m.arabic}
                    </p>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-gold-deep text-right mt-1.5 font-display">
                      {m.ref}
                    </p>
                    <OrnateDivider className="my-3" />
                  </>
                )}
                <p className="text-[13.5px] text-foreground/85 leading-relaxed">{m.text}</p>
                {m.source && (
                  <div className="mt-3 pt-3 border-t border-border/50 flex items-center gap-2">
                    <BookOpen className="h-3 w-3 text-gold-deep" />
                    <p className="text-[10px] tracking-wide text-muted-sage uppercase font-display">
                      {m.source}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div
              key={m.id}
              className="max-w-[80%] ml-auto animate-fade-up"
              style={{ animationDelay: `${0.05 * i}s` }}
            >
              <div
                className="rounded-[22px] rounded-tr-md p-3.5 border"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.78 0.13 85 / 0.18) 0%, oklch(0.65 0.12 80 / 0.10) 100%)",
                  borderColor: "oklch(0.78 0.13 85 / 0.35)",
                  boxShadow:
                    "0 4px 16px -6px oklch(0.78 0.13 85 / 0.3), inset 0 1px 0 0 oklch(0.92 0.1 88 / 0.2)",
                }}
              >
                <p className="text-[13.5px] text-foreground leading-relaxed">{m.text}</p>
              </div>
            </div>
          ),
        )}
      </div>

      {/* Input */}
      <div
        className="absolute left-0 right-0 bottom-[88px] px-4 pt-4 pb-3 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, oklch(0.16 0.022 155) 30%, oklch(0.16 0.022 155 / 0.8) 70%, transparent 100%)",
        }}
      >
        <form onSubmit={send} className="flex items-center gap-2 pointer-events-auto">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question · اسأل سؤالاً"
            className="flex-1 rounded-full bg-card border border-border px-5 py-3.5 text-sm outline-none focus:border-gold/60 placeholder:text-muted-sage/50 transition-colors"
          />
          <button
            type="submit"
            className="relative h-12 w-12 rounded-full overflow-hidden gold-glow-strong active:scale-95 transition-transform"
            aria-label="Send"
          >
            <span className="absolute inset-0 bg-gradient-gold-shine" />
            <Send className="relative h-4.5 w-4.5 text-primary-foreground mx-auto" />
          </button>
        </form>
        <p className="text-center text-[9px] uppercase tracking-[0.22em] text-muted-sage/60 mt-2.5 font-display pointer-events-auto">
          No fatwas · No opinions · Sources cited only
        </p>
      </div>
    </AppLayout>
  );
}
