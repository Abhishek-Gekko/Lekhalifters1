import { useState } from "react";
import Modal from "./Modal";
import { formatPrice, type Product } from "@/data/products";
import { useQuote } from "./QuoteProvider";
import { Check } from "lucide-react";

export default function ProductDetailsModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const [active, setActive] = useState(0);
  const { openQuote } = useQuote();

  if (!product) return null;

  return (
    <Modal open={!!product} onClose={onClose} labelledBy="product-title">
      <div className="grid lg:grid-cols-2">
        {/* Gallery */}
        <div className="bg-mist p-6 lg:p-8">
          <div className="overflow-hidden rounded-2xl bg-white">
            <img
              src={product.gallery[active]}
              alt={`${product.name} view ${active + 1}`}
              width={1024}
              height={768}
              className="h-64 w-full object-contain sm:h-80"
            />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {product.gallery.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`overflow-hidden rounded-xl border-2 bg-white transition hover:scale-105 ${
                  i === active ? "border-primary" : "border-transparent"
                }`}
              >
                <img src={src} alt="" loading="lazy" className="h-14 w-full object-contain" />
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {Object.entries(product.specs).map(([k, v]) => (
              <div key={k} className="rounded-xl bg-white p-3">
                <p className="text-[0.65rem] tracking-wider text-muted-foreground uppercase">{k}</p>
                <p className="mt-1 font-display text-sm font-bold">{v}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="max-h-[80vh] overflow-y-auto p-6 lg:p-9">
          <p className="eyebrow">{product.type}</p>
          <h3 id="product-title" className="mt-2 font-display text-3xl font-extrabold">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {product.brand} · Model {product.model} · {product.capacity} t
          </p>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

          <div className="mt-6">
            <h4 className="font-display text-sm font-bold tracking-widest uppercase">Features</h4>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="font-display text-sm font-bold tracking-widest uppercase">Applications</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.applications.map((a) => (
                <span key={a} className="rounded-full bg-mist px-3 py-1.5 text-xs font-semibold">
                  {a}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-ink-gradient p-5 text-white">
            <div>
              <p className="text-[0.65rem] tracking-widest text-white/60 uppercase">Starting at</p>
              <p className="font-display text-2xl font-extrabold text-primary">
                {formatPrice(product.price)}
              </p>
            </div>
            <span className="rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground uppercase">
              {product.availability}
            </span>
          </div>

          <button
            onClick={() =>
              openQuote({ name: product.name, brand: product.brand, model: product.model })
            }
            className="mt-5 w-full rounded-full bg-primary py-4 text-sm font-bold text-primary-foreground uppercase transition hover:scale-[1.02] hover:bg-accent"
          >
            Request Quotation
          </button>
        </div>
      </div>
    </Modal>
  );
}
