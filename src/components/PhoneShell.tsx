import { ReactNode } from "react";

/**
 * Premium phone-frame mockup. On desktop, a polished device with notch,
 * status bar and rich ambient gradient. On mobile, fills the screen.
 */
export function PhoneShell({ children }: { children: ReactNode }) {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-background sm:p-8"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 20% 10%, oklch(0.22 0.028 155) 0%, oklch(0.10 0.018 155) 60%), radial-gradient(ellipse at 80% 90%, oklch(0.20 0.026 155 / 0.6) 0%, transparent 60%)",
      }}
    >
      <div
        className="relative w-full sm:max-w-[400px] h-screen sm:h-[840px] sm:rounded-[52px] bg-background overflow-hidden sm:border-[10px] sm:border-[#0a0a0a] sm:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9),inset_0_0_0_1px_rgba(201,168,76,0.08)]"
      >
        {/* Notch — desktop only */}
        <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#0a0a0a] rounded-b-3xl z-50" />

        {/* Status bar */}
        <div className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between px-7 pt-3 pb-1 text-[11px] font-semibold text-gold-soft pointer-events-none sm:pt-4">
          <span>9:41</span>
          <span className="flex items-center gap-1.5">
            <svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor" aria-hidden>
              <rect x="0" y="6" width="2.5" height="4" rx="0.5" />
              <rect x="3.5" y="4" width="2.5" height="6" rx="0.5" />
              <rect x="7" y="2" width="2.5" height="8" rx="0.5" />
              <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" />
            </svg>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
              <path
                d="M7 1 C 9.5 1 11.5 2 13 3.5 L 12 4.5 C 10.8 3.3 9 2.5 7 2.5 C 5 2.5 3.2 3.3 2 4.5 L 1 3.5 C 2.5 2 4.5 1 7 1 Z M 7 4 C 8.5 4 9.7 4.5 10.7 5.4 L 9.7 6.4 C 9 5.7 8 5.3 7 5.3 C 6 5.3 5 5.7 4.3 6.4 L 3.3 5.4 C 4.3 4.5 5.5 4 7 4 Z"
                fill="currentColor"
              />
              <circle cx="7" cy="8" r="1" fill="currentColor" />
            </svg>
            <svg width="22" height="10" viewBox="0 0 22 10" fill="none" aria-hidden>
              <rect x="0.5" y="0.5" width="18" height="9" rx="2" stroke="currentColor" />
              <rect x="2" y="2" width="13" height="6" rx="1" fill="currentColor" />
              <rect x="19.5" y="3.5" width="1.5" height="3" rx="0.5" fill="currentColor" />
            </svg>
          </span>
        </div>

        {children}
      </div>
    </div>
  );
}
