import { useEffect, useState } from "react";
import { ImagePlus, X } from "lucide-react";
import { availabilities, categoryImages, type Product } from "@/data/products";
import Modal from "./Modal";

type ProductDraft = Omit<Product, "id">;

const defaultProduct = (): ProductDraft => {
  const image = categoryImages["Crawler Crane"];
  return {
    name: "",
    brand: "",
    model: "",
    type: "Crawler Crane",
    capacity: 0,
    price: 0,
    availability: "On Request",
    image,
    gallery: [image],
    description: "",
    specs: {},
    features: [],
    applications: [],
  };
};

const toLines = (values: string[]) => values.join("\n");
const parseLines = (value: string) =>
  value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
const specsToLines = (specs: Record<string, string>) =>
  Object.entries(specs)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
const linesToSpecs = (value: string) =>
  parseLines(value).reduce<Record<string, string>>((specs, line) => {
    const [key, ...valueParts] = line.split(":");
    if (key?.trim() && valueParts.length) specs[key.trim()] = valueParts.join(":").trim();
    return specs;
  }, {});

export default function AdminProductModal({
  product,
  open,
  onClose,
  onSave,
}: {
  product: Product | null;
  open: boolean;
  onClose: () => void;
  onSave: (product: ProductDraft) => void;
}) {
  const [draft, setDraft] = useState<ProductDraft>(defaultProduct);
  const [specLines, setSpecLines] = useState("");
  const [featureLines, setFeatureLines] = useState("");
  const [applicationLines, setApplicationLines] = useState("");

  useEffect(() => {
    const next = product
      ? { ...product, gallery: [...product.gallery], specs: { ...product.specs } }
      : defaultProduct();
    setDraft(next);
    setSpecLines(specsToLines(next.specs));
    setFeatureLines(toLines(next.features));
    setApplicationLines(toLines(next.applications));
  }, [product, open]);

  const set = <K extends keyof ProductDraft>(key: K, value: ProductDraft[K]) =>
    setDraft((current) => ({ ...current, [key]: value }));

  const addImages = (files: FileList | null) => {
    if (!files?.length) return;
    const images = Array.from(files).map((file) => URL.createObjectURL(file));
    setDraft((current) => {
      const gallery = [...current.gallery, ...images];
      return { ...current, image: current.image || gallery[0], gallery };
    });
  };

  const removeImage = (image: string) => {
    setDraft((current) => {
      const gallery = current.gallery.filter((item) => item !== image);
      return {
        ...current,
        image: current.image === image ? gallery[0] || "" : current.image,
        gallery,
      };
    });
  };

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!draft.gallery.length || !draft.image) return;
    onSave({
      ...draft,
      specs: linesToSpecs(specLines),
      features: parseLines(featureLines),
      applications: parseLines(applicationLines),
    });
  };

  const field =
    "w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30";

  return (
    <Modal open={open} onClose={onClose} size="lg" labelledBy="product-editor-title">
      <form onSubmit={submit}>
        <div className="bg-ink-gradient px-6 py-7 text-white sm:px-10">
          <p className="eyebrow">Product Management</p>
          <h2 id="product-editor-title" className="mt-2 font-display text-2xl font-extrabold">
            {product ? "Edit product" : "Add product"}
          </h2>
        </div>
        <div className="max-h-[70vh] overflow-y-auto px-6 py-7 sm:px-10">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Product name">
              <input
                required
                value={draft.name}
                onChange={(event) => set("name", event.target.value)}
                className={field}
              />
            </Field>
            <Field label="Brand">
              <input
                required
                value={draft.brand}
                onChange={(event) => set("brand", event.target.value)}
                className={field}
              />
            </Field>
            <Field label="Model">
              <input
                required
                value={draft.model}
                onChange={(event) => set("model", event.target.value)}
                className={field}
              />
            </Field>
            <Field label="Equipment type">
              <input
                required
                value={draft.type}
                onChange={(event) => set("type", event.target.value)}
                className={field}
                placeholder="e.g. Crawler Crane"
              />
            </Field>
            <Field label="Capacity (tonnes)">
              <input
                required
                min="0"
                type="number"
                value={draft.capacity || ""}
                onChange={(event) => set("capacity", Number(event.target.value))}
                className={field}
              />
            </Field>
            <Field label="Price (INR)">
              <input
                required
                min="0"
                type="number"
                value={draft.price || ""}
                onChange={(event) => set("price", Number(event.target.value))}
                className={field}
              />
            </Field>
            <Field label="Availability">
              <select
                value={draft.availability}
                onChange={(event) =>
                  set("availability", event.target.value as Product["availability"])
                }
                className={field}
              >
                {availabilities.map((availability) => (
                  <option key={availability}>{availability}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Description" className="mt-4">
            <textarea
              required
              rows={4}
              value={draft.description}
              onChange={(event) => set("description", event.target.value)}
              className={field}
            />
          </Field>

          <div className="mt-6 rounded-2xl border border-border p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold tracking-wide uppercase">Product images</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Upload one or more images. Select an image to use as the primary card image.
                </p>
              </div>
              <label className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground uppercase">
                <ImagePlus size={15} /> Add images
                <input
                  className="sr-only"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(event) => {
                    addImages(event.target.files);
                    event.currentTarget.value = "";
                  }}
                />
              </label>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {draft.gallery.map((image) => (
                <div
                  key={image}
                  className={`relative overflow-hidden rounded-xl border-2 ${draft.image === image ? "border-primary" : "border-transparent"}`}
                >
                  <button
                    type="button"
                    onClick={() => set("image", image)}
                    className="block w-full"
                  >
                    <img src={image} alt="Product preview" className="h-24 w-full object-cover" />
                  </button>
                  <button
                    type="button"
                    onClick={() => removeImage(image)}
                    aria-label="Remove image"
                    className="absolute top-1 right-1 rounded-full bg-ink/80 p-1 text-white"
                  >
                    <X size={13} />
                  </button>
                </div>
              ))}
            </div>
            {!draft.gallery.length && (
              <p className="mt-3 text-xs text-destructive">Add at least one product image.</p>
            )}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Field label="Specifications" hint="One per line: Label: value">
              <textarea
                rows={6}
                value={specLines}
                onChange={(event) => setSpecLines(event.target.value)}
                className={field}
              />
            </Field>
            <Field label="Features" hint="One per line">
              <textarea
                rows={6}
                value={featureLines}
                onChange={(event) => setFeatureLines(event.target.value)}
                className={field}
              />
            </Field>
            <Field label="Applications" hint="One per line">
              <textarea
                rows={6}
                value={applicationLines}
                onChange={(event) => setApplicationLines(event.target.value)}
                className={field}
              />
            </Field>
          </div>
        </div>
        <div className="flex justify-end gap-3 border-t border-border px-6 py-5 sm:px-10">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-full bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground uppercase"
          >
            {product ? "Save changes" : "Add product"}
          </button>
        </div>
      </form>
    </Modal>
  );
}

function Field({
  label,
  hint,
  className = "",
  children,
}: {
  label: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-bold tracking-wide uppercase">{label}</span>
      {hint && <span className="mb-1.5 block text-[0.65rem] text-muted-foreground">{hint}</span>}
      {children}
    </label>
  );
}
