import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";

/** Reusable fullscreen modal shell with backdrop blur and escape handling. */
export default function Modal({
  open,
  onClose,
  children,
  labelledBy,
  size = "lg",
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  labelledBy?: string;
  size?: "lg" | "md";
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-start justify-center overflow-y-auto p-3 sm:p-6">
      <button
        aria-label="Close modal"
        onClick={onClose}
        className="animate-fade fixed inset-0 cursor-default bg-ink/70 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className={`animate-zoom relative my-4 w-full ${
          size === "lg" ? "max-w-5xl" : "max-w-2xl"
        } overflow-hidden rounded-3xl bg-card shadow-lift`}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 rounded-full bg-ink/80 p-2 text-mist transition hover:scale-110 hover:bg-primary hover:text-primary-foreground"
        >
          <X size={18} />
        </button>
        {children}
      </div>
    </div>
  );
}
