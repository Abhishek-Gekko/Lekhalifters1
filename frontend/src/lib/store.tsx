import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { products as seedProducts, type Product } from "@/data/products";
import { reviews as seedReviews, type Review } from "@/data/reviews";
import { quotations as seedQuotations, type Quotation } from "@/data/quotations";

type Store = {
  products: Product[];
  reviews: Review[];
  quotations: Quotation[];
  addQuotation: (q: Omit<Quotation, "id" | "date" | "status">) => void;
  setQuotationStatus: (id: number, status: Quotation["status"]) => void;
  setReviewStatus: (id: number, status: Review["status"]) => void;
  deleteProduct: (id: number) => void;
  addProduct: (p: Omit<Product, "id">) => void;
  updateProduct: (id: number, product: Omit<Product, "id">) => void;
  isAdmin: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

const AppStore = createContext<Store | null>(null);

export const ADMIN_EMAIL = "admin@lekhalifters.com";
export const ADMIN_PASSWORD = "admin123";

export function AppStoreProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(seedProducts);
  const [reviews, setReviews] = useState<Review[]>(seedReviews);
  const [quotations, setQuotations] = useState<Quotation[]>(seedQuotations);
  const [isAdmin, setIsAdmin] = useState(false);

  const value = useMemo<Store>(
    () => ({
      products,
      reviews,
      quotations,
      addQuotation: (q) =>
        setQuotations((prev) => [
          {
            ...q,
            id: 2000 + prev.length,
            date: new Date().toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }),
            status: "Pending",
          },
          ...prev,
        ]),
      setQuotationStatus: (id, status) =>
        setQuotations((prev) => prev.map((q) => (q.id === id ? { ...q, status } : q))),
      setReviewStatus: (id, status) =>
        setReviews((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r))),
      deleteProduct: (id) => setProducts((prev) => prev.filter((p) => p.id !== id)),
      addProduct: (p) =>
        setProducts((prev) => [
          {
            ...p,
            id: Math.max(0, ...prev.map((x) => x.id)) + 1,
          },
          ...prev,
        ]),
      updateProduct: (id, product) =>
        setProducts((prev) =>
          prev.map((current) => (current.id === id ? { ...product, id } : current)),
        ),
      isAdmin,
      login: (email, password) => {
        const ok = email.trim().toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD;
        if (ok) setIsAdmin(true);
        return ok;
      },
      logout: () => setIsAdmin(false),
    }),
    [products, reviews, quotations, isAdmin],
  );

  return <AppStore.Provider value={value}>{children}</AppStore.Provider>;
}

export function useStore() {
  const ctx = useContext(AppStore);
  if (!ctx) throw new Error("useStore must be used inside AppStoreProvider");
  return ctx;
}
