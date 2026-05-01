import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABlock } from "@/components/CTABlock";
import eventsImg from "@/assets/events-activation.jpg";

export const Route = createFileRoute("/sponsorship")({
  head: () => ({
    meta: [
      { title: "Sponsorship — American Dream Partner Deck" },
      { name: "description", content: "Naming rights, IP partnerships, and year-round on-property activations inside one of America's largest captive audiences." },
      { property: "og:title", content: "Sponsorship — American Dream Partner Deck" },
      { property: "og:description", content: "Activate at stadium scale — every day of the year." },
      { property: "og:image", content: eventsImg },
    ],
  }),
  component: SponsorshipPage,
});

const tiers = [
  {
    name: "Founding Partner",
    price: "By invitation",
    color: "magenta",
    perks: [
      "Naming rights on a venue, district, or attraction",
      "Year-round on-property branded presence",
      "First-look access to all marquee programming",
      "Custom IP collaboration with American Dream platform",
      "Dedicated partner success team",
    ],
  },
  {
    name: "Signature Sponsor",
    price: "$1.5M – $5M / yr",
    color: "cyan",
    perks: [
      "Atrium-scale brand activations (4–8 per year)",
      "Co-branded events with attractions",
      "Premium digital screen inventory",
      "Loyalty + app integration",
      "Hospitality suite access",
    ],
  },
  {
    name: "Activation Partner",
    price: "$250K – $1M / yr",
    color: "gold",
    perks: [
      "Targeted campaign moments (2–4 per year)",
      "Pop-up + experiential installations",
      "Social and influencer co-marketing",
      "On-screen and on-floor placements",
      "Dedicated activation strategist",
    ],
  },
];

const audienceData = [
  { l: "Annual Visitors", v: "40M+" },
  { l: "Avg Visit Length", v: "2.8 hr" },
  { l: "% Family Audience", v: "62%" },
  { l: "Median HHI (visitor)", v: "$135K" },
  { l: "Social Impressions / yr", v: "1.2B" },
  { l: "International Tourists", v: "18%" },
];

function SponsorshipPage() {
  return (
    <div className="pt-24">
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={eventsImg} alt="Brand activation event" className="w-full h-full object-cover opacity-30" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/50" />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10">
          <SectionHeader
            eyebrow="Sponsorship"
            title={<>The biggest <span className="text-gradient">always-on</span> stage in the Northeast.</>}
            intro="A stadium-scale captive audience — every single day of the year. Sponsorship at American Dream isn't a logo on a banner. It's category ownership of a destination."
          />
        </div>
      </section>

      {/* Audience data */}
      <section className="border-t border-border py-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="text-xs tracking-[0.35em] uppercase text-primary mb-8">The audience</div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
            {audienceData.map((d) => (
              <div key={d.l} className="bg-background p-6 md:p-8">
                <div className="font-display text-3xl md:text-4xl text-gradient mb-2">{d.v}</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{d.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="border-t border-border py-24">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <SectionHeader
            eyebrow="Partnership tiers"
            title={<>Three ways <span className="text-gradient">in.</span></>}
          />
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {tiers.map((t, i) => (
              <article
                key={t.name}
                className={`relative overflow-hidden rounded-sm border p-8 group transition-all duration-500 ${
                  i === 0 ? "border-primary glow-magenta md:scale-[1.02]" : "border-border hover:border-foreground"
                }`}
              >
                {i === 0 && (
                  <div className="absolute top-4 right-4 text-[10px] tracking-[0.3em] uppercase text-primary">Marquee</div>
                )}
                <div className="text-xs tracking-[0.3em] uppercase text-accent mb-3">{t.name}</div>
                <div className="font-display text-3xl mb-8">{t.price}</div>
                <ul className="space-y-3">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm">
                      <span className="text-primary mt-1 text-xs">◆</span>
                      <span className="text-muted-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:partners@americandream.example?subject=${t.name} inquiry`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  Discuss this tier <span aria-hidden>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-[1600px] mx-auto px-6 lg:px-10">
        <CTABlock
          eyebrow="Past activations"
          title="Brands that have launched here have moved units, owned headlines, and sold out collections."
          primary={{ to: "/events", label: "See venue options" }}
          secondary={{ href: "mailto:partners@americandream.example", label: "Talk to the partnership team" }}
        />
      </section>
    </div>
  );
}
