import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { BadgeCheck, CreditCard, LockKeyhole, Mail, ShieldCheck } from "lucide-react";
import Modal from "./Modal";

export type SupplierTarget = { name: string; brand: string; model: string };

type SupplierDetailsContext = { openSupplierDetails: (target: SupplierTarget) => void };
const SupplierDetailsCtx = createContext<SupplierDetailsContext | null>(null);

/** Provides a secure, two-step checkout before sharing supplier contact information. */
export function SupplierDetailsProvider({ children }: { children: ReactNode }) {
  const [target, setTarget] = useState<SupplierTarget | null>(null);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [stage, setStage] = useState<"email" | "verify" | "payment">("email");

  const openSupplierDetails = useCallback((product: SupplierTarget) => {
    setTarget(product);
    setEmail("");
    setOtp("");
    setStage("email");
  }, []);

  const close = () => setTarget(null);
  const value = useMemo(() => ({ openSupplierDetails }), [openSupplierDetails]);

  return (
    <SupplierDetailsCtx.Provider value={value}>
      {children}
      <Modal open={!!target} onClose={close} size="md" labelledBy="supplier-details-title">
        {stage === "email" ? (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setStage("verify");
            }}
          >
            <div className="bg-ink-gradient px-6 py-7 text-white sm:px-10">
              <p className="eyebrow">Supplier Information</p>
              <h3 id="supplier-details-title" className="mt-2 font-display text-2xl font-extrabold">
                Access supplier details
              </h3>
            </div>
            <div className="px-6 py-7 sm:px-10">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Supplier contact details for {target?.name} will be securely shared after payment is
                completed.
              </p>
              <label
                className="mt-6 mb-1.5 flex items-center gap-2 text-xs font-bold tracking-wide uppercase"
                htmlFor="supplier-email"
              >
                <Mail size={15} className="text-primary" /> Email address
              </label>
              <input
                id="supplier-email"
                required
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="name@company.com"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-primary py-4 text-sm font-bold text-primary-foreground uppercase transition hover:scale-[1.02] hover:bg-accent"
              >
                Verify Email
              </button>
            </div>
          </form>
        ) : stage === "verify" ? (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (otp.length === 6) setStage("payment");
            }}
          >
            <div className="bg-ink-gradient px-6 py-7 text-white sm:px-10">
              <p className="eyebrow">Email Verification</p>
              <h3 id="supplier-details-title" className="mt-2 font-display text-2xl font-extrabold">
                Confirm your email address
              </h3>
            </div>
            <div className="px-6 py-7 sm:px-10">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary/15 text-primary">
                <BadgeCheck size={25} />
              </span>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Enter the six-digit verification code sent to{" "}
                <strong className="text-foreground">{email}</strong>. Once verified, you can
                continue to secure payment.
              </p>
              <label
                className="mt-6 mb-1.5 block text-xs font-bold tracking-wide uppercase"
                htmlFor="supplier-otp"
              >
                Verification code
              </label>
              <input
                id="supplier-otp"
                required
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                pattern="[0-9]{6}"
                maxLength={6}
                value={otp}
                onChange={(event) => setOtp(event.target.value.replace(/\D/g, ""))}
                placeholder="000000"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-center font-display text-xl font-bold tracking-[0.5em] outline-none transition placeholder:tracking-normal focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-primary py-4 text-sm font-bold text-primary-foreground uppercase transition hover:scale-[1.02] hover:bg-accent"
              >
                Verify Code
              </button>
              <button
                type="button"
                onClick={() => setStage("email")}
                className="mt-4 w-full text-xs font-bold tracking-wide text-muted-foreground uppercase transition hover:text-primary"
              >
                Use a different email address
              </button>
            </div>
          </form>
        ) : (
          <div>
            <div className="bg-ink-gradient px-6 py-7 text-white sm:px-10">
              <p className="eyebrow">Secure Checkout</p>
              <h3 id="supplier-details-title" className="mt-2 font-display text-2xl font-extrabold">
                Complete your payment
              </h3>
            </div>
            <div className="px-6 py-7 sm:px-10">
              <div className="flex items-start justify-between gap-4 rounded-2xl bg-mist p-4">
                <div>
                  <p className="font-display text-sm font-bold">Supplier details: {target?.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Receipt will be sent to {email}
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg font-extrabold text-primary">
                  ₹499
                </span>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-border p-5 text-center">
                <CreditCard className="mx-auto text-primary" size={28} />
                <p className="mt-3 font-display text-sm font-bold">Payment gateway</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Your selected payment provider’s checkout will appear here.
                </p>
              </div>
              <button
                type="button"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 text-sm font-bold text-primary-foreground uppercase transition hover:scale-[1.02] hover:bg-accent"
              >
                <LockKeyhole size={16} /> Continue to Payment
              </button>
              <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <ShieldCheck size={14} className="text-primary" /> Secure payment processing
              </p>
            </div>
          </div>
        )}
      </Modal>
    </SupplierDetailsCtx.Provider>
  );
}

export function useSupplierDetails() {
  const ctx = useContext(SupplierDetailsCtx);
  if (!ctx) throw new Error("useSupplierDetails must be used inside SupplierDetailsProvider");
  return ctx;
}
