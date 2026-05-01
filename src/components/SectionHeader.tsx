interface Props {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, title, intro, align = "left" }: Props) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div className="text-xs tracking-[0.35em] uppercase text-primary mb-5 pulse-dot">{eyebrow}</div>
      <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight mb-6">
        {title}
      </h2>
      {intro && <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{intro}</p>}
    </div>
  );
}
