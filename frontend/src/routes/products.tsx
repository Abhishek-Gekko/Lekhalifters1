import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { availabilities, brands, formatPrice, types, type Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductDetailsModal from "@/components/ProductDetailsModal";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Cranes For Sale & Rent | Lekha Lifters Equipment Catalogue" },
      {
        name: "description",
        content:
          "Browse crawler, truck, rough terrain, all terrain cranes and boom lifts. Filter by brand, capacity, price and availability, then request a quotation instantly.",
      },
      { property: "og:title", content: "Equipment Catalogue | Lekha Lifters" },
      {
        property: "og:description",
        content: "Filter our crane fleet by brand, capacity, price and availability.",
      },
    ],
  }),
  component: Products,
});

const MAX_PRICE = 70000000;

function Products() {
  const { products } = useStore();
  const [selected, setSelected] = useState<Product | null>(null);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("All");
  const [type, setType] = useState("All");
  const [availability, setAvailability] = useState("All");
  const [capacity, setCapacity] = useState("All");
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [panelOpen, setPanelOpen] = useState(false);

  const results = useMemo(
    () =>
      products.filter((p) => {
        const q = search.trim().toLowerCase();
        const matchesSearch =
          !q ||
          [p.name, p.brand, p.model, p.type].some((v) => v.toLowerCase().includes(q));
        const matchesCapacity =
          capacity === "All" ||
          (capacity === "0-50" && p.capacity <= 50) ||
          (capacity === "51-150" && p.capacity > 50 && p.capacity <= 150) ||
          (capacity === "150+" && p.capacity > 150);
        return (
          matchesSearch &&
          matchesCapacity &&
          (brand === "All" || p.brand === brand) &&
          (type === "All" || p.type === type) &&
          (availability === "All" || p.availability === availability) &&
          p.price <= maxPrice
        );
      }),
    [products, search, brand, type, availability, capacity, maxPrice],
  );

  const reset = () => {
    setSearch("");
    setBrand("All");
    setType("All");
    setAvailability("All");
    setCapacity("All");
    setMaxPrice(MAX_PRICE);
  };

  const chip = (active: boolean) =>
    `rounded-full px-3.5 py-2 text-xs font-semibold transition ${
      active ? "bg-ink text-white" : "bg-mist text-foreground hover:bg-primary/25"
    }`;

  return (
    <>
      <section className="bg-ink-gradient py-16 text-white lg:py-20">
        <div className="container-x">
          <p className="eyebrow">Equipment Catalogue</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-6xl">Our Crane Fleet</h1>
          <p className="mt-4 max-w-xl text-white/70">
            {products.length} machines available for purchase and rental. Filter instantly to find the
            right capacity, brand and configuration.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-x grid gap-8 lg:grid-cols-[19rem_1fr]">
          {/* FILTER PANEL */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <button
              onClick={() => setPanelOpen((v) => !v)}
              className="mb-4 flex w-full items-center justify-center gap-2 rounded-full bg-ink py-3 text-xs font-bold text-white uppercase lg:hidden"
            >
              <SlidersHorizontal size={16} /> {panelOpen ? "Hide" : "Show"} Filters
            </button>

            <div
              className={`${panelOpen ? "block" : "hidden"} rounded-3xl border border-border bg-card p-6 shadow-soft lg:block`}
            >
              <div className="relative">
                <Search size={17} className="absolute top-3.5 left-4 text-muted-foreground" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search cranes..."
                  className="w-full rounded-xl border border-border bg-background py-3 pr-4 pl-11 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <FilterGroup label="Brand">
                <button className={chip(brand === "All")} onClick={() => setBrand("All")}>
                  All
                </button>
                {brands.map((b) => (
                  <button key={b} className={chip(brand === b)} onClick={() => setBrand(b)}>
                    {b}
                  </button>
                ))}
              </FilterGroup>

              <FilterGroup label="Equipment Type">
                <button className={chip(type === "All")} onClick={() => setType("All")}>
                  All
                </button>
                {types.map((t) => (
                  <button key={t} className={chip(type === t)} onClick={() => setType(t)}>
                    {t}
                  </button>
                ))}
              </FilterGroup>

              <FilterGroup label="Capacity">
                {["All", "0-50", "51-150", "150+"].map((c) => (
                  <button key={c} className={chip(capacity === c)} onClick={() => setCapacity(c)}>
                    {c === "All" ? "All" : `${c} t`}
                  </button>
                ))}
              </FilterGroup>

              <FilterGroup label="Availability">
                <button
                  className={chip(availability === "All")}
                  onClick={() => setAvailability("All")}
                >
                  All
                </button>
                {availabilities.map((a) => (
                  <button key={a} className={chip(availability === a)} onClick={() => setAvailability(a)}>
                    {a}
                  </button>
                ))}
              </FilterGroup>

              <div className="mt-6">
                <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase">Price Range</p>
                <input
                  type="range"
                  min={3000000}
                  max={MAX_PRICE}
                  step={1000000}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="mt-4 w-full accent-primary"
                />
                <p className="mt-2 text-sm text-muted-foreground">
                  Up to <span className="font-bold text-foreground">{formatPrice(maxPrice)}</span>
                </p>
              </div>

              <button
                onClick={reset}
                className="mt-6 w-full rounded-full border border-ink py-3 text-xs font-bold uppercase transition hover:bg-ink hover:text-white"
              >
                Reset Filters
              </button>
            </div>
          </aside>

          {/* RESULTS */}
          <div>
            <p className="mb-6 text-sm text-muted-foreground">
              Showing <span className="font-bold text-foreground">{results.length}</span> of{" "}
              {products.length} machines
            </p>
            <div className="space-y-6">
              {results.map((p) => (
                <ProductCard key={p.id} product={p} onView={setSelected} />
              ))}
              {results.length === 0 && (
                <div className="rounded-3xl border border-dashed border-border p-16 text-center">
                  <p className="font-display text-xl font-bold">No machines match those filters</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Try widening the capacity or price range.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <ProductDetailsModal product={selected} onClose={() => setSelected(null)} />
    </>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase">{label}</p>
      <div className="mt-3 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}
