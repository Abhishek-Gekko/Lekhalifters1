import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Construction } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar({ onQuote }: { onQuote: () => void }) {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-xl">
      <nav className="container-x flex h-18 items-center justify-between gap-4 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-gradient text-ink">
            <Construction size={20} />
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-extrabold tracking-tight text-white">
              LEKHA LIFTERS
            </span>
            <span className="block text-[0.62rem] tracking-[0.28em] text-primary uppercase">
              Heavy lifting co.
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-colors ${
                  path === l.to
                    ? "bg-white/10 text-primary"
                    : "text-white/75 hover:bg-white/5 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={onQuote}
            className="hidden rounded-full bg-primary px-6 py-3 text-sm font-bold tracking-wide text-primary-foreground uppercase transition hover:scale-105 hover:bg-accent sm:block"
          >
            Get Quote
          </button>
          <button
            className="rounded-xl p-2 text-white lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="animate-fade border-t border-white/10 bg-ink lg:hidden">
          <ul className="container-x flex flex-col py-3">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/5 py-3 font-semibold text-white/85"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <button
                onClick={() => {
                  setOpen(false);
                  onQuote();
                }}
                className="w-full rounded-full bg-primary py-3 font-bold text-primary-foreground uppercase"
              >
                Get Quote
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
