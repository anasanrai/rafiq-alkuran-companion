import { ReactNode } from "react";

/**
 * Mobile phone-frame shell. On large screens we show a centered phone-shaped
 * container so the mobile UI feels like a device mockup; on actual mobile it
 * fills the screen.
 */
export function PhoneShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background sm:bg-[radial-gradient(ellipse_at_top,oklch(0.22_0.028_155)_0%,oklch(0.14_0.02_155)_70%)] sm:p-6">
      <div className="relative w-full sm:max-w-[420px] h-screen sm:h-[860px] sm:rounded-[44px] bg-background overflow-hidden sm:border sm:border-border sm:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
        {children}
      </div>
    </div>
  );
}
