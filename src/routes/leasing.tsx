import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABlock } from "@/components/CTABlock";
import luxuryAvenue from "@/assets/luxury-avenue.jpg";
import retailImg from "@/assets/retail-crowd.jpg";
import diningHall from "@/assets/dining-hall.jpg";
import attractionCoaster from "@/assets/attraction-coaster.jpg";

export const Route = createFileRoute("/leasing")({
  head: () => ({
    meta: [
      { title: "Leasing — American Dream Partner Deck" },
      { name: "description", content: "Tailored leasing paths for luxury flagships, mid-tier retail, F&B, and pop-ups inside American Dream." },
      { property: "og:title", content: "Leasing — American Dream Partner Deck" },
      { property: "og:description", content: "Find your category fit. From flagship luxury to 90-day pop-ups." },
      { property: "og:image", content: luxuryAvenue },
    ],
  }),
  component: LeasingPage,
});

const paths = [
  {
    id: "luxury",
    label: "Luxury",
    image: luxuryAvenue,
    accent: "gold",
    headline: "Flagship territory for global maisons.",
    blurb: "The Avenue's marble corridor is purpose-built for prestige — discreet entrances, private salons, and a curated neighbor set.",
    facts: [
      { v: "30+", l: "Houses on The Avenue" },
      { v: "$520K", l: "Avg shopper HHI" },
      { v: "2,400 — 18,000", l: "Sq ft footprints" },
      { v: "10–15 yr", l: "Typical term" },
    ],
    inclusions: ["Private appointment lounges", "Valet & concierge integration", "Dedicated PR/influencer support", "Co-marketed luxury map"],
  },
  {
    id: "retail",
    label: "Mid-tier Retail",
    image: retailImg,
    accent: "magenta",
    headline: "The biggest captive audience in the Northeast.",
    blurb: "From Zara, H&M and Sephora to digitally-native breakouts, mid-tier retail anchors the daily-traffic engine of the property.",
    facts: [
      { v: "320+", l: "Retail tenants" },
      { v: "40M+", l: "Annual footfall" },
      { v: "1,500 — 12,000", l: "Sq ft footprints" },
      { v: "5–10 yr", l: "Typical term" },
    ],
    inclusions: ["Co-op marketing program", "Loyalty + app integration", "On-property activation rights", "Tourism partnership inclusion"],
  },
  {
    id: "fb",
    label: "Food & Beverage",
    image: diningHall,
    accent: "cyan",
    headline: "Dining as destination, not afterthought.",
    blurb: "Multiple dining districts — from elevated food halls to Michelin-alumni concepts — built around 2.8 hour avg dwell time.",
    facts: [
      { v: "100+", l: "F&B concepts" },
      { v: "2.8 hr", l: "Avg dwell" },
      { v: "1,200 — 9,000", l: "Sq ft footprints" },
      { v: "5–10 yr", l: "Typical term" },
    ],
    inclusions: ["Vented kitchen-ready shells", "Liquor license assistance", "Programmed event traffic", "Delivery hub access"],
  },
  {
    id: "popup",
    label: "Pop-Up & Activation",
    image: attractionCoaster,
    accent: "magenta",
    headline: "Test, launch, or splash — in 30 to 90 days.",
    blurb: "Turnkey shells, atrium kiosks, and event-format spaces built for product launches, capsules, and seasonal storytelling.",
    facts: [
      { v: "60+", l: "Pop-up locations" },
      { v: "30–90", l: "Day terms" },
      { v: "200 — 3,500", l: "Sq ft footprints" },
      { v: "Turnkey", l: "Build-out" },
    ],
    inclusions: ["Pre-built shells & power", "Brand activation team", "Social/UGC backdrops", "Dedicated foot-traffic boosts"],
  },
];

function LeasingPage() {
  const [active, setActive] = useState(paths[0].id);
  const current = paths.find((p) => p.id === active)!;

  return (
    <div className="pt-24">
      <section className="py-20 md:py-28 max-w-[1600px] mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="Leasing"
          title={<>Find your <span className="text-gradient">category fit.</span></>}
          intro="Four distinct leasing paths, each engineered for the audience and economics of its segment."
        />
      </section>

      <section className="border-t border-border">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 py-6 border-b border-border">
            {paths.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`px-5 py-3 text-sm tracking-wide rounded-sm transition-all ${
                  active === p.id
                    ? "bg-foreground text-background"
                    : "border border-border hover:border-foreground"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 py-16 items-start">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img key={current.image} src={current.image} alt={current.label} className="w-full h-full object-cover reveal-up" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs tracking-[0.3em] uppercase text-accent mb-2">{current.label}</div>
                <div className="font-display text-3xl">American Dream</div>
              </div>
            </div>

            <div key={current.id} className="reveal-up">
              <h3 className="font-display text-4xl md:text-5xl leading-[0.95] mb-6">{current.headline}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">{current.blurb}</p>
              <div className="grid grid-cols-2 gap-px bg-border mb-10">
                {current.facts.map((f) => (
                  <div key={f.l} className="bg-background p-5">
                    <div className="font-display text-3xl text-gradient mb-1">{f.v}</div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{f.l}</div>
                  </div>
                ))}
              </div>
              <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">What's included</h4>
              <ul className="space-y-3 mb-10">
                {current.inclusions.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-primary mt-0.5">◆</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:partners@americandream.example?subject=Leasing inquiry — ${current.label}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background font-medium hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm"
              >
                Inquire about {current.label.toLowerCase()} <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-[1600px] mx-auto px-6 lg:px-10">
        <CTABlock
          eyebrow="Next step"
          title="Walk the property with our leasing team. See your space."
          primary={{ to: "/events", label: "Explore venues too" }}
          secondary={{ href: "mailto:leasing@americandream.example", label: "Schedule a site tour" }}
        />
      </section>
    </div>
  );
}
