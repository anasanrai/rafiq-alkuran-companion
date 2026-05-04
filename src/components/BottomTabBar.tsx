import { Link, useLocation } from "@tanstack/react-router";
import { BookOpen, MessageCircle, Sparkles, User } from "lucide-react";

const tabs = [
  { to: "/today", label: "Today", arabic: "اليوم", Icon: Sparkles },
  { to: "/ask", label: "Ask", arabic: "اسأل", Icon: MessageCircle },
  { to: "/journal", label: "Journal", arabic: "مجلة", Icon: BookOpen },
  { to: "/profile", label: "Profile", arabic: "الملف", Icon: User },
] as const;

export function BottomTabBar() {
  const { pathname } = useLocation();

  return (
    <nav
      className="absolute bottom-0 left-0 right-0 z-30 backdrop-blur-2xl border-t"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.20 0.026 155 / 0.85) 0%, oklch(0.16 0.022 155 / 0.95) 100%)",
        borderColor: "oklch(0.78 0.13 85 / 0.18)",
        boxShadow: "0 -8px 24px -8px rgba(0,0,0,0.6)",
      }}
    >
      <ul className="flex items-stretch justify-around px-2 pt-2.5 pb-7">
        {tabs.map(({ to, label, arabic, Icon }) => {
          const active = pathname.startsWith(to);
          return (
            <li key={to} className="flex-1">
              <Link
                to={to}
                className="group flex flex-col items-center justify-center gap-1 py-1 transition-all"
              >
                <span
                  className={`flex items-center justify-center h-9 w-9 rounded-2xl transition-all ${
                    active
                      ? "bg-gradient-to-b from-gold/25 to-gold/5 border border-gold/30"
                      : "border border-transparent"
                  }`}
                  style={
                    active
                      ? { boxShadow: "0 0 16px -4px oklch(0.78 0.13 85 / 0.6)" }
                      : {}
                  }
                >
                  <Icon
                    className={`h-[18px] w-[18px] transition-colors ${
                      active ? "text-gold" : "text-muted-sage group-hover:text-gold-soft"
                    }`}
                    strokeWidth={active ? 2.2 : 1.6}
                  />
                </span>
                <span
                  className={`text-[9.5px] font-semibold tracking-[0.12em] uppercase transition-colors ${
                    active ? "text-gold" : "text-muted-sage/70"
                  }`}
                >
                  {active ? (
                    <span className="font-arabic text-[11px] tracking-normal" dir="rtl">
                      {arabic}
                    </span>
                  ) : (
                    label
                  )}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
