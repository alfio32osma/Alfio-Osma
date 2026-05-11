interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const ArrowCircleIcon = () => {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-700">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14" strokeLinecap="round" />
        <path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
};

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <header className="mb-3 flex items-start justify-between gap-3">
      <div>
        <h2 className="text-[34px] leading-9 font-semibold tracking-tight text-zinc-900">{title}</h2>
        {subtitle ? <p className="mt-1 max-w-[25rem] text-[15px] leading-5 text-zinc-600">{subtitle}</p> : null}
      </div>
      <ArrowCircleIcon />
    </header>
  );
};

export default SectionHeader;
