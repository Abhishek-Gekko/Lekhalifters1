import { useEffect, useState } from "react";
import { ArrowUp, Facebook, Instagram, Linkedin, MessageCircle, Phone } from "lucide-react";

/** Floating action rail: WhatsApp, call, socials and scroll-to-top. */
export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const socials = [
    { Icon: Instagram, label: "Instagram", href: "#" },
    { Icon: Facebook, label: "Facebook", href: "#" },
    { Icon: Linkedin, label: "LinkedIn", href: "#" },
  ];

  return (
    <>
      {/* Social panel — desktop left edge */}
      <div className="fixed top-1/2 left-0 z-40 hidden -translate-y-1/2 flex-col overflow-hidden rounded-r-2xl bg-ink/90 shadow-lift backdrop-blur md:flex">
        {socials.map(({ Icon, label, href }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="p-3 text-white/70 transition hover:bg-primary hover:text-primary-foreground"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>

      {/* Right rail */}
      <div className="fixed right-4 bottom-5 z-40 flex flex-col items-end gap-3">
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="animate-zoom grid h-11 w-11 place-items-center rounded-full bg-ink text-primary shadow-lift transition hover:scale-110"
          >
            <ArrowUp size={18} />
          </button>
        )}
        <a
          href="tel:+919845012345"
          aria-label="Call us"
          className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift transition hover:scale-110"
        >
          <Phone size={20} />
        </a>
        <a
          href="https://wa.me/919845012345"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:scale-110"
        >
          <MessageCircle size={24} />
        </a>
      </div>
    </>
  );
}
