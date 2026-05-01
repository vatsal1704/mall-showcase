import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-exterior.jpg";
import attractionCoaster from "@/assets/attraction-coaster.jpg";
import attractionSnow from "@/assets/attraction-snow.jpg";
import attractionWater from "@/assets/attraction-water.jpg";
import luxuryAvenue from "@/assets/luxury-avenue.jpg";
import diningHall from "@/assets/dining-hall.jpg";
import eventsImg from "@/assets/events-activation.jpg";
import whyImg from "@/assets/why-location.jpg";
import retailImg from "@/assets/retail-crowd.jpg";
import { StatTicker } from "@/components/StatTicker";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABlock } from "@/components/CTABlock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "American Dream — Where Retail Becomes Spectacle" },
      { name: "description", content: "3 million square feet. 40M+ visitors. 55M people in 50 miles. The destination where brands become unforgettable." },
      { property: "og:title", content: "American Dream — Where Retail Becomes Spectacle" },
      { property: "og:description", content: "An interactive partner deck for the Western Hemisphere's largest entertainment & retail destination." },
    ],
  }),
  component: Index,
});

function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="American Dream exterior at dusk"
          className={`w-full h-full object-cover transition-all duration-[3000ms] ease-out ${
            loaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      {/* Floating accent shapes */}
      <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-primary/30 blur-3xl float-slow" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 rounded-full bg-accent/20 blur-3xl float-slow" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 h-full max-w-[1600px] mx-auto px-6 lg:px-10 flex flex-col justify-end pb-20 md:pb-32">
        <div className={`transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-primary" />
            <span className="text-xs tracking-[0.4em] uppercase text-primary">Partner Deck · East Rutherford, NJ</span>
          </div>
          <h1 className="font-display text-[clamp(3.5rem,11vw,11rem)] leading-[0.85] tracking-tight max-w-5xl">
            <span className="block">WHERE RETAIL</span>
            <span className="block text-gradient">BECOMES</span>
            <span className="block">SPECTACLE.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            3 million square feet. 12 attractions. 450+ tenants. 55 million people within 50 miles.
            One destination engineered to capture attention — and convert it.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#why"
              className="inline-flex items-center gap-2 px-7 py-4 bg-foreground text-background font-medium rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Explore the property <span aria-hidden>↓</span>
            </a>
            <Link
              to="/leasing"
              className="inline-flex items-center gap-2 px-7 py-4 border border-foreground/30 hover:border-foreground hover:bg-foreground/5 transition-colors rounded-sm"
            >
              Become a partner →
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-xs tracking-[0.3em] uppercase text-muted-foreground flex flex-col items-center gap-3">
        <span>Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-foreground/60 to-transparent" />
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="relative py-32 md:py-44 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader
            eyebrow="Why this property"
            title={<>Built at the <span className="text-gradient">center</span> of the largest consumer market in America.</>}
            intro="One exit from the Lincoln Tunnel. 7 miles from Manhattan. Sitting inside a 50-mile radius that contains more spending power than most countries."
          />
          <div className="mt-12 grid grid-cols-2 gap-px bg-border">
            {[
              { v: "55M", l: "People within 50 mi" },
              { v: "$2.7T", l: "Regional GDP" },
              { v: "40M+", l: "Annual visitors" },
              { v: "17M", l: "From NYC alone" },
              { v: "$135K", l: "Median HHI in trade area" },
              { v: "365", l: "Days a year, indoors" },
            ].map((s) => (
              <div key={s.l} className="bg-background p-6">
                <div className="font-display text-4xl md:text-5xl text-gradient mb-1">{s.v}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-sm">
          <img src={whyImg} alt="Northeast US megaregion at night converging on American Dream" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-accent mb-2">Location</div>
              <div className="font-display text-2xl">The Meadowlands</div>
            </div>
            <div className="text-right text-xs text-muted-foreground">
              40.81° N<br />74.07° W
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface PillarProps {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  stats: { v: string; l: string }[];
  reverse?: boolean;
  accent?: "magenta" | "cyan" | "gold";
  cta?: { to: "/leasing" | "/sponsorship" | "/events"; label: string };
}

function Pillar({ index, eyebrow, title, body, image, stats, reverse, accent = "magenta", cta }: PillarProps) {
  const accentColor = accent === "cyan" ? "text-accent" : accent === "gold" ? "text-[oklch(0.85_0.16_85)]" : "text-primary";
  return (
    <section className="relative py-24 md:py-32 border-t border-border">
      <div className={`max-w-[1600px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="lg:col-span-7 relative">
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm group">
            <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute top-6 left-6 font-display text-7xl md:text-8xl text-foreground/90 mix-blend-difference">{index}</div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className={`text-xs tracking-[0.35em] uppercase ${accentColor} mb-4`}>{eyebrow}</div>
          <h3 className="font-display text-4xl md:text-6xl leading-[0.95] mb-6">{title}</h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">{body}</p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((s) => (
              <div key={s.l} className="border-l-2 border-border pl-3">
                <div className="font-display text-2xl md:text-3xl">{s.v}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
          {cta && (
            <Link to={cta.to} className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors group">
              {cta.label}
              <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>→</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

function Attractions() {
  const attractions = [
    { img: attractionCoaster, name: "Nickelodeon Universe", tag: "Theme Park", desc: "The largest indoor theme park in the Western Hemisphere. 35+ rides, 8.5 acres." },
    { img: attractionWater, name: "DreamWorks Water Park", tag: "Water Park", desc: "America's largest indoor water park. 1.5M gallons. Tropical, year-round." },
    { img: attractionSnow, name: "Big SNOW", tag: "Indoor Skiing", desc: "North America's only indoor real-snow ski resort. Open every day." },
  ];

  return (
    <section className="relative py-24 md:py-32 border-t border-border">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <SectionHeader
            eyebrow="Attractions"
            title={<>Not a mall. <span className="text-gradient">A destination.</span></>}
            intro="Attractions drive visitation no retailer can replicate. Families come for the rides — and stay for everything else."
          />
          <Link to="/events" className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
            See venue inventory →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {attractions.map((a, i) => (
            <article key={a.name} className="group relative overflow-hidden rounded-sm aspect-[4/5] cursor-pointer reveal-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <img src={a.img} alt={a.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="text-xs tracking-[0.3em] uppercase text-accent mb-2">{a.tag}</div>
                <h4 className="font-display text-3xl md:text-4xl mb-2 leading-tight">{a.name}</h4>
                <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xs">
                  {a.desc}
                </p>
              </div>
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-6">
        {[
          { to: "/leasing" as const, eyebrow: "Lease", title: "From luxury flagships to 90-day pop-ups.", body: "Tailored leasing paths by category, scale, and ambition." },
          { to: "/sponsorship" as const, eyebrow: "Sponsor", title: "Activate inside a stadium-scale audience.", body: "Naming rights, IP partnerships, year-round on-property presence." },
          { to: "/events" as const, eyebrow: "Book", title: "Stage product launches at destination scale.", body: "Concert venues, ballrooms, atriums, exhibition halls — turnkey." },
        ].map((c) => (
          <Link
            key={c.to}
            to={c.to}
            className="group relative overflow-hidden rounded-sm border border-border bg-card p-8 hover:border-primary transition-all duration-500"
          >
            <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <div className="relative">
              <div className="text-xs tracking-[0.35em] uppercase text-primary mb-4">{c.eyebrow}</div>
              <h4 className="font-display text-3xl leading-tight mb-3 min-h-[5rem]">{c.title}</h4>
              <p className="text-sm text-muted-foreground mb-8">{c.body}</p>
              <div className="inline-flex items-center gap-2 text-sm font-medium">
                Open module <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 mt-16">
        <CTABlock
          eyebrow="Ready to talk?"
          title="Tour the property. Walk the floor. Imagine your brand at this scale."
          primary={{ to: "/leasing", label: "Start a conversation" }}
          secondary={{ href: "mailto:partners@americandream.example", label: "Email the partner team" }}
        />
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <StatTicker />
      <Why />
      <Pillar
        index="01"
        eyebrow="Retail"
        title="450+ brands. One audience that converts."
        body="From Zara and Sephora to It'Sugar and Saks OFF 5TH — American Dream's retail mix is built around the modern destination shopper: family, gen-z, tourist, and luxury, all on one floor plate."
        image={retailImg}
        stats={[
          { v: "450+", l: "Tenants" },
          { v: "$700+", l: "Spend / visit" },
          { v: "92%", l: "Occupancy" },
        ]}
        cta={{ to: "/leasing", label: "Open the leasing module" }}
        accent="magenta"
      />
      <Pillar
        index="02"
        eyebrow="Luxury — The Avenue"
        title="A flagship corridor for prestige brands."
        body="The Avenue gathers Hermès, Saks Fifth Avenue, Dolce & Gabbana, Mulberry and more in a curated marble corridor — built for the high-net-worth visitor flying in from Manhattan, the GCC, and Asia."
        image={luxuryAvenue}
        stats={[
          { v: "30+", l: "Luxury houses" },
          { v: "$520K", l: "Avg HHI" },
          { v: "2.1×", l: "Vs. peer set" },
        ]}
        reverse
        accent="gold"
        cta={{ to: "/leasing", label: "Luxury leasing path" }}
      />
      <Pillar
        index="03"
        eyebrow="Dining & Lifestyle"
        title="Food as the reason to come — not the afterthought."
        body="100+ concepts spanning Michelin alumni, regional icons, fast-casual, and a 35,000 sq ft kosher dining hall that is one-of-one in the country. Dining drives 40% of dwell time."
        image={diningHall}
        stats={[
          { v: "100+", l: "Dining concepts" },
          { v: "2.8 hr", l: "Avg dwell time" },
          { v: "40%", l: "Of total revenue" },
        ]}
        accent="cyan"
        cta={{ to: "/leasing", label: "F&B leasing path" }}
      />
      <Attractions />
      <Pillar
        index="04"
        eyebrow="Events & Activations"
        title="A platform for brands. A stage for moments."
        body="Concerts, brand launches, premieres, fan conventions, corporate galas — American Dream's atriums, theaters and exposition halls have hosted everyone from global beauty brands to platinum-record artists."
        image={eventsImg}
        stats={[
          { v: "300+", l: "Events / yr" },
          { v: "8K", l: "Largest venue" },
          { v: "12", l: "Bookable spaces" },
        ]}
        reverse
        accent="magenta"
        cta={{ to: "/events", label: "Book a venue" }}
      />
      <FinalCTA />
    </>
  );
}
