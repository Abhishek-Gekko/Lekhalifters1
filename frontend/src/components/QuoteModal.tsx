import { useState } from "react";
import Modal from "./Modal";
import { CheckCircle2 } from "lucide-react";
import { useStore } from "@/lib/store";

export type QuoteTarget = { name: string; brand: string; model: string } | null;

/** Quotation request modal — product details are prefilled, never typed by the user. */
export default function QuoteModal({
  open,
  onClose,
  product,
}: {
  open: boolean;
  onClose: () => void;
  product: QuoteTarget;
}) {
  const { addQuotation } = useStore();
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    customer: "",
    phone: "",
    email: "",
    company: "",
    quantity: 1,
    requirements: "",
  });

  const target = product ?? { name: "General Enquiry", brand: "—", model: "—" };

  const set = (k: string, v: string | number) => setForm((f) => ({ ...f, [k]: v }));

  const close = () => {
    onClose();
    setTimeout(() => {
      setDone(false);
      setForm({ customer: "", phone: "", email: "", company: "", quantity: 1, requirements: "" });
    }, 200);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    addQuotation({
      product: target.name,
      brand: target.brand,
      model: target.model,
      ...form,
      quantity: Number(form.quantity) || 1,
    });
    setDone(true);
  };

  const field =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30";

  return (
    <Modal open={open} onClose={close} size="md" labelledBy="quote-title">
      {done ? (
        <div className="animate-zoom p-10 text-center sm:p-14">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/15 text-primary">
            <CheckCircle2 size={34} />
          </span>
          <h3 className="mt-6 font-display text-2xl font-extrabold">Thank you.</h3>
          <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground">
            Your quotation request has been submitted successfully. Our team will contact you shortly.
          </p>
          <button
            onClick={close}
            className="mt-8 rounded-full bg-ink px-8 py-3 text-sm font-bold text-white uppercase transition hover:scale-105"
          >
            Close
          </button>
        </div>
      ) : (
        <form onSubmit={submit}>
          <div className="bg-ink-gradient px-6 py-7 text-white sm:px-10">
            <p className="eyebrow">Request Quotation</p>
            <h3 id="quote-title" className="mt-2 font-display text-2xl font-extrabold">
              {target.name}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="glass-panel rounded-full px-3 py-1">Brand: {target.brand}</span>
              <span className="glass-panel rounded-full px-3 py-1">Model: {target.model}</span>
            </div>
          </div>

          <div className="grid gap-4 px-6 py-7 sm:grid-cols-2 sm:px-10">
            <div>
              <label className="mb-1.5 block text-xs font-bold tracking-wide uppercase">Customer Name</label>
              <input required className={field} value={form.customer} onChange={(e) => set("customer", e.target.value)} />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold tracking-wide uppercase">Phone</label>
              <input required type="tel" className={field} value={form.phone} onChange={(e) => set("phone", e.target.value)} />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold tracking-wide uppercase">Email</label>
              <input required type="email" className={field} value={form.email} onChange={(e) => set("email", e.target.value)} />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold tracking-wide uppercase">Company Name</label>
              <input required className={field} value={form.company} onChange={(e) => set("company", e.target.value)} />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold tracking-wide uppercase">Quantity</label>
              <input
                type="number"
                min={1}
                className={field}
                value={form.quantity}
                onChange={(e) => set("quantity", e.target.value)}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-bold tracking-wide uppercase">
                Additional Requirements
              </label>
              <textarea
                rows={4}
                className={field}
                value={form.requirements}
                onChange={(e) => set("requirements", e.target.value)}
                placeholder="Project location, duration, operator requirement..."
              />
            </div>
            <button
              type="submit"
              className="mt-2 rounded-full bg-primary py-4 text-sm font-bold text-primary-foreground uppercase transition hover:scale-[1.02] hover:bg-accent sm:col-span-2"
            >
              Submit Request
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
}
