import { ReactNode } from "react";
import { PhoneShell } from "./PhoneShell";
import { BottomTabBar } from "./BottomTabBar";

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <PhoneShell>
      <div className="absolute inset-0 flex flex-col">
        <main className="flex-1 overflow-y-auto pb-28 scrollbar-hide">{children}</main>
        <BottomTabBar />
      </div>
    </PhoneShell>
  );
}
