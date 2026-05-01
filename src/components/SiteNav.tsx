import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Overview" },
  { to: "/leasing", label: "Leasing" },
  { to: "/sponsorship", label: "Sponsorship" },
  { to: "/events", label: "Events & Venues" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || location.pathname !== "/"
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-sm bg-hero-gradient glow-magenta group-hover:scale-110 transition-transform" />
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wider">AMERICAN DREAM</div>
            <div className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase -mt-0.5">
              Partner Deck
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = l.to === "/" ? location.pathname === "/" : location.pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-2 text-sm tracking-wide transition-colors relative ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute left-4 right-4 -bottom-px h-px bg-hero-gradient" />
                )}
              </Link>
            );
          })}
        </nav>

        <a
          href="mailto:partners@americandream.example"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-sm font-medium bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm"
        >
          Book a tour
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
