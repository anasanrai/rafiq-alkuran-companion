import { Link, useLocation } from "@tanstack/react-router";

const tabs = [
  { to: "/today", label: "Today", emoji: "📿" },
  { to: "/ask", label: "Ask", emoji: "💬" },
  { to: "/journal", label: "Journal", emoji: "📖" },
  { to: "/profile", label: "Profile", emoji: "👤" },
] as const;

export function BottomTabBar() {
  const { pathname } = useLocation();

  return (
    <nav
      className="absolute bottom-0 left-0 right-0 z-20 border-t backdrop-blur-xl"
      style={{
        background: "oklch(0.20 0.026 155 / 0.92)",
        borderColor: "oklch(0.78 0.13 85 / 0.15)",
      }}
    >
      <ul className="flex items-stretch justify-around px-2 pt-2 pb-6">
        {tabs.map((t) => {
          const active = pathname.startsWith(t.to);
          return (
            <li key={t.to} className="flex-1">
              <Link
                to={t.to}
                className="flex flex-col items-center justify-center gap-1 py-1 transition-colors"
              >
                <span
                  className={`text-2xl leading-none transition-transform ${
                    active ? "scale-110" : "opacity-70"
                  }`}
                  style={active ? { filter: "drop-shadow(0 0 6px oklch(0.78 0.13 85 / 0.6))" } : {}}
                >
                  {t.emoji}
                </span>
                <span
                  className={`text-[10px] font-medium tracking-wide uppercase ${
                    active ? "text-gold" : "text-muted-sage"
                  }`}
                >
                  {t.label}
                </span>
                <span
                  className={`mt-0.5 h-1 w-1 rounded-full transition-all ${
                    active ? "bg-gold" : "bg-transparent"
                  }`}
                  style={active ? { boxShadow: "0 0 6px oklch(0.78 0.13 85 / 0.8)" } : {}}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
