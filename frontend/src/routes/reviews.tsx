import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import Stars from "@/components/Stars";
import Reveal from "@/components/Reveal";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | Lekha Lifters Crane Rentals" },
      {
        name: "description",
        content:
          "Read verified feedback from contractors, power producers and port operators who rely on Lekha Lifters cranes and lifting services across India.",
      },
      { property: "og:title", content: "Customer Reviews | Lekha Lifters" },
      {
        property: "og:description",
        content: "Verified customer feedback on our crane sales, rentals and site support.",
      },
    ],
  }),
  component: Reviews,
});

function Reviews() {
  const { reviews } = useStore();
  const approved = useMemo(() => reviews.filter((r) => r.status === "Approved"), [reviews]);
  const [filter, setFilter] = useState(0);

  const average = approved.length
    ? approved.reduce((s, r) => s + r.rating, 0) / approved.length
    : 0;

  const list = filter ? approved.filter((r) => r.rating === filter) : approved;

  return (
    <>
      <section className="bg-ink-gradient py-16 text-white lg:py-20">
        <div className="container-x">
          <p className="eyebrow">Reviews</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-6xl">What clients say</h1>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col items-center gap-8 rounded-3xl bg-mist p-10 sm:flex-row sm:justify-between">
              <div className="text-center sm:text-left">
                <p className="font-display text-6xl font-extrabold">{average.toFixed(1)}</p>
                <div className="mt-3 flex justify-center sm:justify-start">
                  <Stars rating={Math.round(average)} size={20} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Based on {approved.length} verified reviews
                </p>
              </div>
              <div className="w-full max-w-xs space-y-2">
                {[5, 4, 3].map((star) => {
                  const count = approved.filter((r) => r.rating === star).length;
                  const pct = approved.length ? (count / approved.length) * 100 : 0;
                  return (
                    <div key={star} className="flex items-center gap-3 text-xs">
                      <span className="w-10 font-semibold">{star} ★</span>
                      <span className="h-2 flex-1 overflow-hidden rounded-full bg-card">
                        <span className="block h-full bg-primary" style={{ width: `${pct}%` }} />
                      </span>
                      <span className="w-6 text-right text-muted-foreground">{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-2">
            {[
              { v: 0, l: "All Reviews" },
              { v: 5, l: "5 Star" },
              { v: 4, l: "4 Star" },
              { v: 3, l: "3 Star" },
            ].map((f) => (
              <button
                key={f.v}
                onClick={() => setFilter(f.v)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold tracking-wide uppercase transition ${
                  filter === f.v ? "bg-ink text-white" : "bg-mist hover:bg-primary/25"
                }`}
              >
                {f.l}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((r, i) => (
              <Reveal key={r.id} delay={i * 60}>
                <article className="hover-lift flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft">
                  <div className="flex items-center justify-between">
                    <Stars rating={r.rating} />
                    <span className="text-xs text-muted-foreground">{r.date}</span>
                  </div>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">“{r.text}”</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
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
              </Reveal>
            ))}
            {list.length === 0 && (
              <p className="text-sm text-muted-foreground">No reviews with this rating yet.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
