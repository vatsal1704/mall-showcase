import { Link } from "@tanstack/react-router";

interface Props {
  eyebrow: string;
  title: string;
  primary: { to: "/leasing" | "/sponsorship" | "/events"; label: string };
  secondary?: { href: string; label: string };
}

export function CTABlock({ eyebrow, title, primary, secondary }: Props) {
  return (
    <div className="relative overflow-hidden rounded-sm border border-border p-10 md:p-16 bg-card">
      <div className="absolute inset-0 bg-hero-gradient opacity-20" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="relative">
        <div className="text-xs tracking-[0.35em] uppercase text-accent mb-4">{eyebrow}</div>
        <h3 className="font-display text-3xl md:text-5xl leading-tight mb-8 max-w-3xl">{title}</h3>
        <div className="flex flex-wrap gap-4">
          <Link
            to={primary.to}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background font-medium hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm"
          >
            {primary.label} <span aria-hidden>→</span>
          </Link>
          {secondary && (
            <a
              href={secondary.href}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-border hover:border-foreground transition-colors rounded-sm"
            >
              {secondary.label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
