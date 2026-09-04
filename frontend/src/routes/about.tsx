import { createFileRoute } from "@tanstack/react-router";
import { Award, Compass, Target, Wrench, Users, Globe2 } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";
import heroImg from "@/assets/hero-crane.jpg";
import crawler from "@/assets/crawler-crane.jpg";
import Reveal from "@/components/Reveal";
import { useQuote } from "@/components/QuoteProvider";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Lekha Lifters | 15 Years Of Heavy Lifting Expertise" },
      {
        name: "description",
        content:
          "Learn how Lekha Lifters grew from a single rental crane to a 200 machine fleet serving infrastructure, energy and industrial projects across India.",
      },
      { property: "og:title", content: "About Lekha Lifters" },
      {
        property: "og:description",
        content: "Our story, mission, milestones and services in heavy lifting.",
      },
    ],
  }),
  component: About,
});

const timeline = [
  { year: "2011", title: "Founded in Bengaluru", desc: "Started with a single 25t truck crane serving local contractors." },
  { year: "2014", title: "First crawler fleet", desc: "Added lattice boom crawlers to support refinery erection work." },
  { year: "2017", title: "Pan India expansion", desc: "Opened service hubs in Pune, Chennai and Ahmedabad." },
  { year: "2021", title: "Renewables division", desc: "Dedicated all terrain fleet for wind turbine erection projects." },
  { year: "2026", title: "200+ machines", desc: "One of the largest independent lifting fleets in south India." },
];

const services = [
  { Icon: Wrench, title: "Crane Sales", desc: "New and certified pre-owned machines with warranty options." },
  { Icon: Compass, title: "Rentals", desc: "Short and long term hire with or without trained operators." },
  { Icon: Target, title: "Lift Planning", desc: "Method statements, load charts and site studies by our engineers." },
  { Icon: Users, title: "Operator Supply", desc: "Licensed operators and riggers deployed nationwide." },
  { Icon: Award, title: "Maintenance", desc: "Preventive servicing, load testing and genuine spare parts." },
  { Icon: Globe2, title: "Logistics", desc: "Permits, trailers and escort management for oversize moves." },
];

function About() {
  const { openQuote } = useQuote();

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink py-24 text-white lg:py-32">
        <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="container-x relative">
          <p className="eyebrow">About Us</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold sm:text-6xl">
            Fifteen years of lifting India's heaviest work
          </h1>
          <p className="mt-6 max-w-2xl text-white/70">
            From a single hired crane to a fleet of over 200 machines, Lekha Lifters has become the
            partner contractors call when a lift cannot fail.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 lg:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <img
              src={aboutImg}
              alt="Lekha Lifters engineering team on site"
              loading="lazy"
              width={1280}
              height={853}
              className="rounded-3xl object-cover shadow-lift"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-5xl">
              Built by operators, not brokers
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Lekha Lifters began in 2011 with one crane and one promise: the machine arrives ready and
              the lift happens on schedule. Every member of our leadership team has spent time on site,
              which is why our fleet is specified for real project conditions rather than brochures.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Today we support infrastructure, energy, ports and heavy manufacturing customers with
              equipment sales, rentals, operators and full lift planning support.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {[
                ["500+", "Projects"],
                ["200+", "Machines"],
                ["18", "States"],
                ["24/7", "Support"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-2xl bg-mist p-5">
                  <p className="font-display text-2xl font-extrabold">{v}</p>
                  <p className="text-xs tracking-wide text-muted-foreground uppercase">{l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-mist py-20 lg:py-28">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-card p-9 shadow-soft">
              <span className="eyebrow">Mission</span>
              <h3 className="mt-3 font-display text-2xl font-extrabold">
                Make heavy lifting predictable
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Deliver certified, well maintained equipment with transparent commercials so that our
                customers can plan their schedules with confidence.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-3xl bg-ink-gradient p-9 text-white shadow-lift">
              <span className="eyebrow">Vision</span>
              <h3 className="mt-3 font-display text-2xl font-extrabold">
                India's most trusted lifting partner
              </h3>
              <p className="mt-4 leading-relaxed text-white/70">
                To operate the country's safest and most modern lifting fleet, supported by engineers
                who treat every project as their own build.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="text-center">
            <p className="eyebrow">Our Journey</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-5xl">Milestones</h2>
          </Reveal>
          <div className="relative mt-14 border-l-2 border-dashed border-border pl-8 lg:mx-auto lg:max-w-3xl">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 80}>
                <div className="relative pb-10">
                  <span className="absolute top-1.5 -left-[2.6rem] grid h-6 w-6 place-items-center rounded-full bg-primary text-[0.6rem] font-bold text-primary-foreground">
                    ●
                  </span>
                  <p className="font-display text-sm font-extrabold tracking-widest text-primary">
                    {t.year}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-extrabold">{t.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-mist py-20 lg:py-28">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Services</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-5xl">
              Everything around the lift
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="hover-lift h-full rounded-3xl bg-card p-8 shadow-soft">
                  <s.Icon size={26} className="text-ink" />
                  <h3 className="mt-5 font-display text-xl font-extrabold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US + CTA */}
      <section className="py-20 lg:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-5xl">
              Accountability from enquiry to demobilisation
            </h2>
            <ul className="mt-8 space-y-4">
              {[
                "Single point of contact for the entire project duration",
                "Third party certified machines with valid load test reports",
                "Transparent rate cards with no hidden mobilisation charges",
                "Replacement machine guarantee on long term rentals",
              ].map((p) => (
                <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
            <button
              onClick={() => openQuote()}
              className="mt-9 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground uppercase transition hover:scale-105 hover:bg-accent"
            >
              Request A Quote
            </button>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={crawler}
              alt="Crawler crane from the Lekha Lifters fleet"
              loading="lazy"
              width={1024}
              height={768}
              className="rounded-3xl bg-mist p-6 shadow-soft"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
