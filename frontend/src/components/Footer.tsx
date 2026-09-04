import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Construction } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-gradient text-ink">
              <Construction size={20} />
            </span>
            <span className="font-display text-lg font-extrabold text-white">LEKHA LIFTERS</span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Crane sales, rentals and complete lifting solutions delivered across India with certified
            equipment and experienced crews.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:scale-110 hover:border-primary hover:text-primary"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold tracking-[0.2em] text-white uppercase">
            Products
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {["Crawler Cranes", "Truck Cranes", "Rough Terrain", "All Terrain", "Boom Lifts"].map((t) => (
              <li key={t}>
                <Link to="/products" className="transition hover:text-primary">
                  {t}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold tracking-[0.2em] text-white uppercase">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { to: "/", l: "Home" },
              { to: "/about", l: "About Us" },
              { to: "/reviews", l: "Reviews" },
              { to: "/contact", l: "Contact" },
              { to: "/admin", l: "Admin Login" },
            ].map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="transition hover:text-primary">
                  {i.l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold tracking-[0.2em] text-white uppercase">
            Contact
          </h4>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
              Plot 42, Industrial Estate, Peenya, Bengaluru 560058
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="shrink-0 text-primary" />
              <a href="tel:+919845012345" className="hover:text-primary">
                +91 98450 12345
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="shrink-0 text-primary" />
              <a href="mailto:sales@lekhalifters.com" className="hover:text-primary">
                sales@lekhalifters.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Lekha Lifters. All rights reserved.</p>
          <p>Crane Sales · Rentals · Lifting Solutions</p>
        </div>
      </div>
    </footer>
  );
}
