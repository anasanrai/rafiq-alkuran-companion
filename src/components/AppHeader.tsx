export function AppHeader({
  arabic,
  english,
  subtitle,
  right,
}: {
  arabic: string;
  english?: string;
  subtitle?: string;
  right?: React.ReactNode;
}) {
  return (
    <header className="relative px-6 pt-14 pb-4 animate-fade-up">
      {/* Gradient hero glow */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-hero pointer-events-none" />
      <div className="relative flex items-start justify-between gap-3">
        <div className="flex-1 text-right">
          <h1
            className="font-arabic text-[34px] leading-tight gold-text-shimmer"
            dir="rtl"
          >
            {arabic}
          </h1>
          {english && (
            <p className="text-[10px] uppercase tracking-[0.32em] text-gold-deep mt-1.5 font-display">
              {english}
            </p>
          )}
          {subtitle && (
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted-sage mt-1">
              {subtitle}
            </p>
          )}
        </div>
        {right}
      </div>
    </header>
  );
}
