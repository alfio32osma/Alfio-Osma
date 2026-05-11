interface BadgeTagProps {
  label: string;
  tone?: "neutral" | "light";
}

const toneClasses: Record<NonNullable<BadgeTagProps["tone"]>, string> = {
  neutral: "bg-white/85 text-zinc-700",
  light: "bg-zinc-100 text-zinc-800"
};

const BadgeTag = ({ label, tone = "neutral" }: BadgeTagProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold leading-none shadow-sm ${toneClasses[tone]}`}
    >
      {label}
    </span>
  );
};

export default BadgeTag;
