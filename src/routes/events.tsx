import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABlock } from "@/components/CTABlock";
import eventsImg from "@/assets/events-activation.jpg";
import diningHall from "@/assets/dining-hall.jpg";
import attractionCoaster from "@/assets/attraction-coaster.jpg";
import luxuryAvenue from "@/assets/luxury-avenue.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Venues — American Dream Partner Deck" },
      { name: "description", content: "Concert venues, exposition halls, atriums, and ballrooms — bookable for product launches, concerts, and corporate events." },
      { property: "og:title", content: "Events & Venues — American Dream Partner Deck" },
      { property: "og:description", content: "Stage your moment at destination scale." },
      { property: "og:image", content: eventsImg },
    ],
  }),
  component: EventsPage,
});

const venues = [
  { name: "The Grand Atrium", capacity: "8,000", area: "75,000 sq ft", type: "Concerts · Premieres", img: eventsImg, desc: "Stadium-scale central atrium with concert-grade rigging, LED wall, and direct retail-floor flow." },
  { name: "DreamWorks Theater", capacity: "1,500", area: "22,000 sq ft", type: "Performing Arts", img: attractionCoaster, desc: "State-of-the-art performing arts venue. Broadway-spec lighting and acoustics, seated configuration." },
  { name: "Exposition Hall", capacity: "12,000", area: "120,000 sq ft", type: "Conventions · Trade shows", img: luxuryAvenue, desc: "Column-free exposition hall with loading docks, full A/V, breakout rooms, and on-site catering." },
  { name: "The Sky Ballroom", capacity: "1,200", area: "18,000 sq ft", type: "Galas · Private events", img: diningHall, desc: "Glass-roofed ballroom with skyline views, dedicated kitchen, and private VIP entrances." },
];

const recentEvents = [
  { brand: "Major Beauty Launch", outcome: "Sold out 24K limited units in 48 hrs" },
  { brand: "Streaming Premiere", outcome: "Trended #1 on social, 80M impressions" },
  { brand: "Auto Reveal", outcome: "Generated 12K test-drive sign-ups" },
  { brand: "Music Festival", outcome: "30K weekend attendance, two sold-out nights" },
];

function EventsPage() {
  const [selected, setSelected] = useState(venues[0]);

  return (
    <div className="pt-24">
      <section className="py-20 md:py-28 max-w-[1600px] mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="Events & venues"
          title={<>A platform for <span className="text-gradient">moments</span> that move the needle.</>}
          intro="Twelve bookable spaces across the property — from intimate ballrooms to a stadium-scale atrium. Turnkey production. Built-in audience."
        />
      </section>

      {/* Venue picker */}
      <section className="border-t border-border py-16">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
          <aside className="lg:col-span-4 space-y-2">
            <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Select a venue</div>
            {venues.map((v) => {
              const active = v.name === selected.name;
              return (
                <button
                  key={v.name}
                  onClick={() => setSelected(v)}
                  className={`w-full text-left p-5 border transition-all rounded-sm ${
                    active ? "border-primary bg-card glow-magenta" : "border-border hover:border-foreground"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-3 mb-1">
                    <span className="font-display text-xl">{v.name}</span>
                    <span className="text-xs text-accent tracking-widest">{v.capacity}</span>
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{v.type}</div>
                </button>
              );
            })}
          </aside>

          <div className="lg:col-span-8" key={selected.name}>
            <div className="relative aspect-video overflow-hidden rounded-sm reveal-up">
              <img src={selected.img} alt={selected.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 flex-wrap">
                <div>
                  <div className="text-xs tracking-[0.3em] uppercase text-accent mb-2">{selected.type}</div>
                  <h3 className="font-display text-4xl md:text-5xl">{selected.name}</h3>
                </div>
                <div className="text-right text-sm">
                  <div className="font-display text-2xl">{selected.capacity}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{selected.area}</div>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mt-6 max-w-2xl">{selected.desc}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:events@americandream.example?subject=Booking inquiry — ${selected.name}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background font-medium hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm"
              >
                Inquire about {selected.name} <span aria-hidden>→</span>
              </a>
              <a
                href="mailto:events@americandream.example"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-border hover:border-foreground transition-colors rounded-sm"
              >
                Request full venue deck
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent results */}
      <section className="border-t border-border py-24">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <SectionHeader eyebrow="Recent moments" title={<>Outcomes, not <span className="text-gradient">attendance.</span></>} />
          <div className="grid md:grid-cols-2 gap-px bg-border mt-12">
            {recentEvents.map((e) => (
              <div key={e.brand} className="bg-background p-8 md:p-10">
                <div className="text-xs tracking-[0.3em] uppercase text-accent mb-3">{e.brand}</div>
                <div className="font-display text-2xl md:text-3xl leading-tight">{e.outcome}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-[1600px] mx-auto px-6 lg:px-10">
        <CTABlock
          eyebrow="Book a date"
          title="Tell us the vision. We'll show you the room — and run the show."
          primary={{ to: "/sponsorship", label: "Or explore sponsorship" }}
          secondary={{ href: "mailto:events@americandream.example", label: "Start a booking inquiry" }}
        />
      </section>
    </div>
  );
}
