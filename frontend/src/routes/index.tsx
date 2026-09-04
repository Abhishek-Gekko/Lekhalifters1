import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Headset,
  IndianRupee,
  MapPinned,
  ShieldCheck,
  Truck,
} from "lucide-react";
import heroImg from "@/assets/hero-crane.jpg";
import { categoryImages, formatPrice, type Product } from "@/data/products";
import Reveal from "@/components/Reveal";
import Stars from "@/components/Stars";
import ProductDetailsModal from "@/components/ProductDetailsModal";
import { useQuote } from "@/components/QuoteProvider";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lekha Lifters | Heavy Lifting Solutions For Every Industry" },
      {
        name: "description",
        content:
          "Reliable crane sales, rentals and lifting solutions across India. Crawler, truck, rough terrain and all terrain cranes with 24/7 expert support.",
      },
      { property: "og:title", content: "Lekha Lifters | Heavy Lifting Solutions" },
      {
        property: "og:description",
        content: "Crane sales, rentals and lifting solutions across India with certified equipment.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "200+", label: "Machines" },
  { value: "15+", label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

const categories = [
  { name: "Crawler Cranes", key: "Crawler Crane", desc: "Lattice boom machines for sustained heavy erection work." },
  { name: "Truck Cranes", key: "Truck Crane", desc: "Highway legal cranes that mobilise between sites in hours." },
  { name: "Rough Terrain", key: "Rough Terrain", desc: "Four wheel drive stability on unprepared ground and slopes." },
  { name: "All Terrain", key: "All Terrain", desc: "Road speed plus heavy capacity for nationwide deployment." },
  { name: "Boom Lifts", key: "Boom Lift", desc: "Safe elevated access for maintenance and inspection crews." },
];

const features = [
  { Icon: BadgeCheck, title: "Genuine Equipment", desc: "Only verified machines with full documentation and service history." },
  { Icon: IndianRupee, title: "Competitive Pricing", desc: "Direct sourcing keeps our sale and rental rates market leading." },
  { Icon: Truck, title: "Fast Delivery", desc: "Dedicated trailer fleet gets machines to site without delays." },
  { Icon: MapPinned, title: "Pan India Service", desc: "Support engineers stationed across 18 states and growing." },
  { Icon: ShieldCheck, title: "Certified Machines", desc: "Third party load tested and compliant with statutory norms." },
  { Icon: Headset, title: "Expert Support", desc: "Lift planning, operators and spares from one accountable team." },
];

function Home() {
  const { products, reviews } = useStore();
  const { openQuote } = useQuote();
  const [selected, setSelected] = useState<Product | null>(null);
  const featured = products.slice(0, 4);
  const approved = reviews.filter((r) => r.status === "Approved").slice(0, 6);
  const [slide, setSlide] = useState(0);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink">
        <img
          src={heroImg}
          alt="Heavy crawler crane lifting at an industrial site at dusk"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="container-x relative grid items-center gap-14 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-32">
          <div className="animate-rise">
            <p className="eyebrow">Crane Sales · Rentals · Lifting Solutions</p>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] font-extrabold text-white sm:text-6xl lg:text-7xl">
              Heavy Lifting Solutions
              <span className="block text-primary">For Every Industry</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Providing reliable crane sales, rentals and lifting solutions across India with trusted
              equipment and experienced support.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold tracking-wide text-primary-foreground uppercase transition hover:scale-105 hover:bg-accent"
              >
                Explore Cranes <ArrowRight size={17} />
              </Link>
              <button
                onClick={() => openQuote()}
                className="rounded-full border border-white/30 px-8 py-4 text-sm font-bold tracking-wide text-white uppercase transition hover:scale-105 hover:border-primary hover:text-primary"
              >
                Get Quote
              </button>
            </div>
          </div>

          <div className="animate-float animate-rise glass-panel rounded-3xl p-7 shadow-lift">
            <p className="text-[0.65rem] tracking-[0.24em] text-white/60 uppercase">By the numbers</p>
            <div className="mt-5 grid grid-cols-2 gap-5">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-ink/50 p-5">
                  <p className="font-display text-3xl font-extrabold text-primary">{s.value}</p>
                  <p className="mt-1 text-xs tracking-wide text-white/70 uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Equipment Categories</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold sm:text-5xl">
              A fleet built for every kind of lift
            </h2>
          </Reveal>

          <div className="mt-12 space-y-5">
            {categories.map((c, i) => (
              <Reveal key={c.key} delay={i * 70}>
                <Link
                  to="/products"
                  className="group flex flex-col gap-5 overflow-hidden rounded-3xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-lift sm:flex-row sm:items-center sm:p-5"
                >
                  <div className="w-full shrink-0 overflow-hidden rounded-2xl bg-mist sm:w-56">
                    <img
                      src={categoryImages[c.key]}
                      alt={c.name}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-36 w-full object-contain p-3 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-extrabold">{c.name}</h3>
                    <p className="mt-2 max-w-xl text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-mist text-ink transition-all duration-300 group-hover:translate-x-1.5 group-hover:bg-primary">
                    <ArrowRight size={20} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-mist py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="text-center">
            <p className="eyebrow">Why Choose Lekha Lifters</p>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-extrabold sm:text-5xl">
              Dependability engineered into every deployment
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="hover-lift h-full rounded-3xl bg-card p-8 shadow-soft">
                  <span className="grid h-13 w-13 place-items-center rounded-2xl bg-primary/15 p-3 text-ink">
                    <f.Icon size={24} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-extrabold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CRANES */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Featured Cranes</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-5xl">
                Ready to mobilise
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-xs font-bold tracking-wide uppercase transition hover:bg-ink hover:text-white"
            >
              View All Equipment <ArrowRight size={15} />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 70}>
                <article className="hover-lift flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                  <div className="relative bg-mist">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-44 w-full object-contain p-4"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-[0.6rem] font-bold tracking-wider text-primary-foreground uppercase">
                      {p.availability}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="eyebrow">{p.brand}</p>
                    <h3 className="mt-1.5 font-display text-xl font-extrabold">{p.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Capacity {p.capacity} t</p>
                    <p className="mt-4 font-display text-lg font-extrabold">{formatPrice(p.price)}</p>
                    <button
                      onClick={() => setSelected(p)}
                      className="mt-5 w-full rounded-full bg-ink py-3 text-xs font-bold tracking-wide text-white uppercase transition hover:bg-primary hover:text-primary-foreground"
                    >
                      View Details
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-mist py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Customer Testimonials</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-5xl">
                Trusted on site, every day
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSlide((s) => Math.max(0, s - 1))}
                className="grid h-11 w-11 place-items-center rounded-full border border-ink/20 transition hover:bg-ink hover:text-white"
                aria-label="Previous reviews"
              >
                <ArrowRight size={18} className="rotate-180" />
              </button>
              <button
                onClick={() => setSlide((s) => Math.min(approved.length - 3, s + 1))}
                className="grid h-11 w-11 place-items-center rounded-full border border-ink/20 transition hover:bg-ink hover:text-white"
                aria-label="Next reviews"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </Reveal>

          <div className="mt-12 overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(calc(${-slide} * (100% / 3)))` }}
            >
              {approved.map((r) => (
                <article
                  key={r.id}
                  className="w-full shrink-0 rounded-3xl bg-card p-7 shadow-soft sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                >
                  <Stars rating={r.rating} />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">“{r.text}”</p>
                  <div className="mt-6 flex items-center gap-3">
                    <img
                      src={r.photo}
                      alt={r.name}
                      loading="lazy"
                      className="h-11 w-11 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-display text-sm font-bold">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.company}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-ink py-20 lg:py-28">
        <img
          src={heroImg}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="container-x relative text-center">
          <Reveal>
            <p className="eyebrow">Ready when you are</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-extrabold text-white sm:text-5xl">
              Looking For The Right Crane?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/70">
              Share your lift requirement and our engineers will recommend the right machine and
              configuration within 24 hours.
            </p>
            <button
              onClick={() => openQuote()}
              className="mt-9 rounded-full bg-primary px-10 py-4 text-sm font-bold tracking-wide text-primary-foreground uppercase transition hover:scale-105 hover:bg-accent"
            >
              Request A Quote
            </button>
          </Reveal>
        </div>
      </section>

      <ProductDetailsModal product={selected} onClose={() => setSelected(null)} />
    </>
  );
}
