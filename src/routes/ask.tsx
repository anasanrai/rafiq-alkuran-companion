import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { AppHeader } from "@/components/AppHeader";
import { Send } from "lucide-react";

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
    arabic: "وَبَشِّرِ الصَّابِرِينَ ۝ الَّذِينَ إِذَا أَصَابَتْهُم مُّصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
    ref: "Al-Baqarah 2:155-156",
    text: "Allah promises glad tidings to those who patiently endure hardship — those who, when struck by calamity, return to Him in remembrance. Patience (ṣabr) is paired with prayer as the believer's refuge.",
    source: "📚 Source: Quran 2:155 · Tafsir Ibn Kathir · والله أعلم",
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

      <div className="px-5 mb-3">
        <div className="rounded-xl border border-border/60 bg-card/60 px-3 py-2 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-wider text-muted-sage">
            Free questions today
          </span>
          <span className="text-xs font-semibold text-gold">4 / 5 remaining</span>
        </div>
      </div>

      <div className="px-4 space-y-4">
        {messages.map((m) =>
          m.role === "assistant" ? (
            <div key={m.id} className="max-w-[88%] mr-auto">
              <div className="rounded-2xl rounded-tl-md bg-gradient-card border border-border/60 p-4">
                {m.arabic && (
                  <>
                    <p
                      className="font-arabic text-[19px] leading-[2] text-gold-soft text-right"
                      dir="rtl"
                    >
                      {m.arabic}
                    </p>
                    <p className="text-[11px] tracking-wider uppercase text-gold-deep text-right mt-1 mb-3">
                      — {m.ref}
                    </p>
                  </>
                )}
                <p className="text-sm text-foreground/85 leading-relaxed">{m.text}</p>
                {m.source && (
                  <p className="mt-3 pt-3 border-t border-border/60 text-[10px] tracking-wide text-muted-sage">
                    {m.source}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div key={m.id} className="max-w-[80%] ml-auto">
              <div
                className="rounded-2xl rounded-tr-md p-3.5 border"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.78 0.13 85 / 0.18), oklch(0.65 0.12 80 / 0.10))",
                  borderColor: "oklch(0.78 0.13 85 / 0.30)",
                }}
              >
                <p className="text-sm text-foreground leading-relaxed">{m.text}</p>
              </div>
            </div>
          ),
        )}
      </div>

      {/* Input bar */}
      <div className="sticky bottom-0 mt-6 px-4 pt-3 pb-2 bg-gradient-to-t from-background via-background to-transparent">
        <form onSubmit={send} className="flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1 rounded-full bg-card border border-border px-5 py-3 text-sm outline-none focus:border-gold/60 placeholder:text-muted-sage/60"
          />
          <button
            type="submit"
            className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center gold-glow active:scale-95 transition"
            aria-label="Send"
          >
            <Send className="h-5 w-5 text-primary-foreground" />
          </button>
        </form>
        <p className="text-center text-[9px] uppercase tracking-[0.2em] text-muted-sage/60 mt-2">
          No fatwas · No opinions · Sources cited only
        </p>
      </div>
    </AppLayout>
  );
}
