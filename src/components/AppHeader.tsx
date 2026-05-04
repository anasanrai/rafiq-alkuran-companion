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
    <header className="px-6 pt-12 pb-5 flex items-start justify-between gap-3">
      <div className="flex-1 text-right">
        <h1 className="font-arabic text-3xl text-gold leading-tight gold-text-glow" dir="rtl">
          {arabic}
        </h1>
        {english && (
          <p className="text-xs uppercase tracking-[0.18em] text-muted-sage mt-1">{english}</p>
        )}
        {subtitle && (
          <p className="text-[10px] uppercase tracking-[0.22em] text-muted-sage/80 mt-1">
            {subtitle}
          </p>
        )}
      </div>
      {right}
    </header>
  );
}
