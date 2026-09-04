import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Lekha Lifters | Crane Enquiries & Support" },
      {
        name: "description",
        content:
          "Talk to the Lekha Lifters team about crane sales, rentals, operators and lift planning. Bengaluru head office with pan India service coverage.",
      },
      { property: "og:title", content: "Contact Lekha Lifters" },
      {
        property: "og:description",
        content: "Reach our lifting specialists for sales, rentals and site support.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const field =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30";

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <section className="bg-ink-gradient py-16 text-white lg:py-20">
        <div className="container-x">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-6xl">Let's plan your lift</h1>
          <p className="mt-4 max-w-xl text-white/70">
            Our team responds to every enquiry within one working day.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft lg:p-10">
              <h2 className="font-display text-2xl font-extrabold">Send a message</h2>
              {sent && (
                <div className="animate-zoom mt-5 flex items-center gap-3 rounded-2xl bg-primary/15 p-4 text-sm">
                  <CheckCircle2 size={20} className="text-ink" />
                  Thank you. Your message has been sent — our team will contact you shortly.
                </div>
              )}
              <form onSubmit={submit} className="mt-6 grid gap-4">
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase">Name</label>
                  <input
                    required
                    className={field}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase">Email</label>
                    <input
                      required
                      type="email"
                      className={field}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase">Phone</label>
                    <input
                      required
                      type="tel"
                      className={field}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase">Message</label>
                  <textarea
                    required
                    rows={5}
                    className={field}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button className="mt-2 rounded-full bg-primary py-4 text-sm font-bold text-primary-foreground uppercase transition hover:scale-[1.02] hover:bg-accent">
                  Send Message
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl bg-ink-gradient p-8 text-white shadow-lift lg:p-10">
              <h2 className="font-display text-2xl font-extrabold">Company information</h2>
              <ul className="mt-8 space-y-6 text-sm">
                <li className="flex gap-4">
                  <MapPin className="shrink-0 text-primary" />
                  <span>
                    <span className="block font-bold">Head Office</span>
                    <span className="text-white/70">
                      Plot 42, Industrial Estate, Peenya, Bengaluru, Karnataka 560058
                    </span>
                  </span>
                </li>
                <li className="flex gap-4">
                  <Phone className="shrink-0 text-primary" />
                  <span>
                    <span className="block font-bold">Phone</span>
                    <a href="tel:+919845012345" className="text-white/70 hover:text-primary">
                      +91 98450 12345
                    </a>
                  </span>
                </li>
                <li className="flex gap-4">
                  <Mail className="shrink-0 text-primary" />
                  <span>
                    <span className="block font-bold">Email</span>
                    <a href="mailto:sales@lekhalifters.com" className="text-white/70 hover:text-primary">
                      sales@lekhalifters.com
                    </a>
                  </span>
                </li>
                <li className="flex gap-4">
                  <Clock className="shrink-0 text-primary" />
                  <span>
                    <span className="block font-bold">Business Hours</span>
                    <span className="text-white/70">
                      Mon – Sat: 9:00 AM – 7:00 PM · Emergency support 24/7
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Google Maps placeholder — embed iframe here later */}
            <div
              id="google-maps-container"
              className="mt-6 grid h-64 place-items-center rounded-3xl border-2 border-dashed border-border bg-mist text-center"
            >
              <div>
                <MapPin className="mx-auto text-muted-foreground" />
                <p className="mt-3 font-display text-sm font-bold">Google Maps</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Map embed will be placed in this container.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
