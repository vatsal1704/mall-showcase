import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background relative">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-2xl tracking-wider mb-3">AMERICAN DREAM</div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The Western Hemisphere's largest entertainment & retail destination.
            One Meadowlands Plaza, East Rutherford, NJ.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Partner Paths</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/leasing" className="hover:text-primary transition-colors">Retail Leasing</Link></li>
            <li><Link to="/sponsorship" className="hover:text-primary transition-colors">Sponsorship</Link></li>
            <li><Link to="/events" className="hover:text-primary transition-colors">Events & Venues</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>partners@americandream.example</li>
            <li>+1 (201) 555 — DREAM</li>
            <li>By appointment, daily</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Deck</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Interactive partner deck. v1.0 — built for live presentation and async exploration.
            All figures illustrative, sourced from public materials and AI-generated assets.
          </p>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground tracking-wider">
        © {new Date().getFullYear()} AMERICAN DREAM PARTNER PROGRAM
      </div>
    </footer>
  );
}
