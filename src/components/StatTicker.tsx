const stats = [
  "3,000,000 SQ FT",
  "40M+ ANNUAL VISITORS",
  "450+ TENANTS",
  "55M PEOPLE WITHIN 50 MILES",
  "12 ATTRACTIONS",
  "100+ DINING CONCEPTS",
  "17M FROM NYC",
  "#1 ENTERTAINMENT DESTINATION IN THE NORTHEAST",
];

export function StatTicker() {
  const items = [...stats, ...stats];
  return (
    <div className="relative overflow-hidden border-y border-border bg-background py-5">
      <div className="ticker flex gap-12 whitespace-nowrap">
        {items.map((s, i) => (
          <span key={i} className="font-display text-2xl md:text-3xl tracking-wider flex items-center gap-12">
            <span className={i % 3 === 0 ? "text-primary" : i % 3 === 1 ? "text-accent" : "text-foreground"}>
              {s}
            </span>
            <span className="text-muted-foreground">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
