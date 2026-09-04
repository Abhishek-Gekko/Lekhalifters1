import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import QuoteModal, { type QuoteTarget } from "./QuoteModal";

type QuoteCtx = { openQuote: (target?: QuoteTarget) => void };
const Ctx = createContext<QuoteCtx | null>(null);

/** Makes the quotation modal reachable from any page (navbar, cards, modals). */
export function QuoteProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState<QuoteTarget>(null);

  const openQuote = useCallback((t?: QuoteTarget) => {
    setTarget(t ?? null);
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ openQuote }), [openQuote]);

  return (
    <Ctx.Provider value={value}>
      {children}
      <QuoteModal open={open} onClose={() => setOpen(false)} product={target} />
    </Ctx.Provider>
  );
}

export function useQuote() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useQuote must be used inside QuoteProvider");
  return ctx;
}
