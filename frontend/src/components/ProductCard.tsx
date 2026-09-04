import { formatPrice, type Product } from "@/data/products";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { useQuote } from "./QuoteProvider";
import { useSupplierDetails } from "./SupplierDetailsProvider";

const badgeTone: Record<string, string> = {
  "In Stock": "bg-primary text-primary-foreground",
  "On Request": "bg-steel text-white",
  "Rental Only": "bg-ink text-primary",
};

/** Large horizontal premium equipment card used on the products page. */
export default function ProductCard({
  product,
  onView,
}: {
  product: Product;
  onView: (p: Product) => void;
}) {
  const { openQuote } = useQuote();
  const { openSupplierDetails } = useSupplierDetails();

  return (
    <article className="hover-lift group grid overflow-hidden rounded-3xl border border-border bg-card shadow-soft md:grid-cols-[minmax(0,20rem)_1fr]">
      <div className="relative overflow-hidden bg-mist">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={768}
          className="h-56 w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105 md:h-full"
        />
        <span
          className={`absolute top-4 left-4 rounded-full px-3 py-1 text-[0.65rem] font-bold tracking-wider uppercase ${badgeTone[product.availability]}`}
        >
          {product.availability}
        </span>
      </div>

      <div className="flex flex-col gap-4 p-6 lg:p-8">
        <div>
          <p className="eyebrow">{product.type}</p>
          <h3 className="mt-1.5 font-display text-2xl font-extrabold">{product.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {product.brand} · Model {product.model} · Capacity {product.capacity} t
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {Object.entries(product.specs)
            .slice(0, 3)
            .map(([k, v]) => (
              <div key={k} className="rounded-xl bg-mist px-3 py-2">
                <p className="text-[0.6rem] tracking-wider text-muted-foreground uppercase">{k}</p>
                <p className="font-display text-sm font-bold">{v}</p>
              </div>
            ))}
        </div>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-2">
          <div>
            <p className="text-[0.62rem] tracking-widest text-muted-foreground uppercase">Starting at</p>
            <p className="font-display text-2xl font-extrabold">{formatPrice(product.price)}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onView(product)}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-xs font-bold tracking-wide text-white uppercase transition hover:scale-105"
            >
              View Details <ArrowRight size={15} />
            </button>
            <button
              onClick={() => openSupplierDetails({ name: product.name, brand: product.brand, model: product.model })}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-bold tracking-wide text-primary-foreground uppercase transition hover:scale-105 hover:bg-accent"
            >
              Get Supplier Details <ShoppingCart size={15} />
            </button>
            <button
              onClick={() =>
                openQuote({ name: product.name, brand: product.brand, model: product.model })
              }
              className="rounded-full border border-primary bg-transparent px-5 py-3 text-xs font-bold tracking-wide text-primary uppercase transition hover:scale-105 hover:bg-primary hover:text-primary-foreground"
            >
              Request Quotation
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
