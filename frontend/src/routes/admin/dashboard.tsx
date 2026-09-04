import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Boxes,
  FileText,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Plus,
  Star,
  Trash2,
  Pencil,
} from "lucide-react";
import { formatPrice } from "@/data/products";
import { useStore } from "@/lib/store";
import AdminProductModal from "@/components/AdminProductModal";
import type { Product } from "@/data/products";

export const Route = createFileRoute("/admin/dashboard")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard | Lekha Lifters" },
      { name: "description", content: "Manage products, quotation requests and customer reviews." },
      { property: "og:title", content: "Admin Dashboard | Lekha Lifters" },
      { property: "og:description", content: "Internal management console for Lekha Lifters." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Dashboard,
});

const tabs = [
  { key: "dashboard", label: "Dashboard", Icon: LayoutDashboard },
  { key: "products", label: "Products", Icon: Boxes },
  { key: "quotations", label: "Quotation Requests", Icon: FileText },
  { key: "reviews", label: "Customer Reviews", Icon: MessageSquare },
];

function Dashboard() {
  const {
    isAdmin,
    logout,
    products,
    quotations,
    reviews,
    deleteProduct,
    addProduct,
    updateProduct,
    setQuotationStatus,
    setReviewStatus,
  } = useStore();
  const navigate = useNavigate();
  const [tab, setTab] = useState("dashboard");
  const [editingProduct, setEditingProduct] = useState<Product | null | undefined>(undefined);

  useEffect(() => {
    if (!isAdmin) navigate({ to: "/admin" });
  }, [isAdmin, navigate]);

  if (!isAdmin) return null;

  const pending = quotations.filter((q) => q.status === "Pending").length;
  const approvedReviews = reviews.filter((r) => r.status === "Approved").length;

  const cards = [
    { label: "Total Products", value: products.length },
    { label: "Pending Quotations", value: pending },
    { label: "Approved Reviews", value: approvedReviews },
    { label: "Total Requests", value: quotations.length },
  ];

  const th =
    "px-4 py-3 text-left text-[0.65rem] font-bold tracking-widest uppercase text-muted-foreground";
  const td = "px-4 py-3 text-sm";
  const pill = (s: string) =>
    `rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase ${
      s === "Approved"
        ? "bg-primary text-primary-foreground"
        : s === "Pending"
          ? "bg-mist"
          : "bg-ink text-white"
    }`;

  return (
    <div className="flex min-h-screen bg-mist">
      {/* Sidebar */}
      <aside className="hidden w-64 shrink-0 flex-col bg-ink p-6 lg:flex">
        <Link to="/" className="font-display text-lg font-extrabold text-white">
          LEKHA <span className="text-primary">LIFTERS</span>
        </Link>
        <nav className="mt-10 flex-1 space-y-1">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                tab === t.key
                  ? "bg-primary text-primary-foreground"
                  : "text-white/70 hover:bg-white/10"
              }`}
            >
              <t.Icon size={17} /> {t.label}
            </button>
          ))}
        </nav>
        <button
          onClick={() => {
            logout();
            navigate({ to: "/admin" });
          }}
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/10"
        >
          <LogOut size={17} /> Logout
        </button>
      </aside>

      <main className="flex-1 overflow-x-hidden p-5 lg:p-10">
        {/* Mobile tabs */}
        <div className="mb-6 flex gap-2 overflow-x-auto lg:hidden">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold uppercase ${
                tab === t.key ? "bg-ink text-white" : "bg-card"
              }`}
            >
              {t.label}
            </button>
          ))}
          <button
            onClick={() => {
              logout();
              navigate({ to: "/admin" });
            }}
            className="shrink-0 rounded-full bg-card px-4 py-2 text-xs font-bold uppercase"
          >
            Logout
          </button>
        </div>

        <h1 className="font-display text-3xl font-extrabold capitalize">
          {tabs.find((t) => t.key === tab)?.label}
        </h1>

        {tab === "dashboard" && (
          <>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {cards.map((c) => (
                <div key={c.label} className="rounded-3xl bg-card p-6 shadow-soft">
                  <p className="text-xs tracking-widest text-muted-foreground uppercase">
                    {c.label}
                  </p>
                  <p className="mt-3 font-display text-4xl font-extrabold">{c.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl bg-card p-7 shadow-soft">
              <h2 className="font-display text-xl font-extrabold">Recent Activity</h2>
              <ul className="mt-5 space-y-4">
                {quotations.slice(0, 5).map((q) => (
                  <li
                    key={q.id}
                    className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3 text-sm"
                  >
                    <span>
                      <span className="font-semibold">{q.customer}</span> requested a quote for{" "}
                      <span className="font-semibold">{q.product}</span>
                    </span>
                    <span className="text-xs text-muted-foreground">{q.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {tab === "products" && (
          <div className="mt-8 rounded-3xl bg-card p-6 shadow-soft">
            <div className="mb-5 flex justify-end">
              <button
                onClick={() => setEditingProduct(null)}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-bold text-primary-foreground uppercase transition hover:scale-105"
              >
                <Plus size={15} /> Add Product
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[46rem]">
                <thead className="bg-mist">
                  <tr>
                    {["Name", "Brand", "Model", "Capacity", "Price", "Availability", "Actions"].map(
                      (h) => (
                        <th key={h} className={th}>
                          {h}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p.id} className="border-b border-border">
                      <td className={`${td} font-semibold`}>{p.name}</td>
                      <td className={td}>{p.brand}</td>
                      <td className={td}>{p.model}</td>
                      <td className={td}>{p.capacity} t</td>
                      <td className={td}>{formatPrice(p.price)}</td>
                      <td className={td}>
                        <span
                          className={pill(p.availability === "In Stock" ? "Approved" : "Pending")}
                        >
                          {p.availability}
                        </span>
                      </td>
                      <td className={td}>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setEditingProduct(p)}
                            className="rounded-lg bg-mist p-2 transition hover:bg-primary"
                            aria-label={`Edit ${p.name}`}
                          >
                            <Pencil size={14} />
                          </button>
                          <button
                            onClick={() => deleteProduct(p.id)}
                            className="rounded-lg bg-mist p-2 text-destructive transition hover:bg-destructive hover:text-white"
                            aria-label="Delete"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === "quotations" && (
          <div className="mt-8 overflow-x-auto rounded-3xl bg-card p-6 shadow-soft">
            <table className="w-full min-w-[52rem]">
              <thead className="bg-mist">
                <tr>
                  {["ID", "Customer", "Company", "Product", "Qty", "Date", "Status", "Actions"].map(
                    (h) => (
                      <th key={h} className={th}>
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {quotations.map((q) => (
                  <tr key={q.id} className="border-b border-border">
                    <td className={td}>#{q.id}</td>
                    <td className={`${td} font-semibold`}>
                      {q.customer}
                      <span className="block text-xs font-normal text-muted-foreground">
                        {q.phone}
                      </span>
                    </td>
                    <td className={td}>{q.company}</td>
                    <td className={td}>
                      {q.product}
                      <span className="block text-xs text-muted-foreground">
                        {q.brand} · {q.model}
                      </span>
                    </td>
                    <td className={td}>{q.quantity}</td>
                    <td className={td}>{q.date}</td>
                    <td className={td}>
                      <span className={pill(q.status)}>{q.status}</span>
                    </td>
                    <td className={td}>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setQuotationStatus(q.id, "Approved")}
                          className="rounded-full bg-primary px-3 py-1.5 text-[0.65rem] font-bold uppercase"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => setQuotationStatus(q.id, "Closed")}
                          className="rounded-full bg-mist px-3 py-1.5 text-[0.65rem] font-bold uppercase"
                        >
                          Close
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === "reviews" && (
          <div className="mt-8 overflow-x-auto rounded-3xl bg-card p-6 shadow-soft">
            <table className="w-full min-w-[46rem]">
              <thead className="bg-mist">
                <tr>
                  {["Customer", "Company", "Rating", "Review", "Status", "Actions"].map((h) => (
                    <th key={h} className={th}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {reviews.map((r) => (
                  <tr key={r.id} className="border-b border-border">
                    <td className={`${td} font-semibold`}>{r.name}</td>
                    <td className={td}>{r.company}</td>
                    <td className={td}>
                      <span className="inline-flex items-center gap-1">
                        <Star size={13} className="fill-primary text-primary" /> {r.rating}
                      </span>
                    </td>
                    <td className={`${td} max-w-sm truncate text-muted-foreground`}>{r.text}</td>
                    <td className={td}>
                      <span className={pill(r.status)}>{r.status}</span>
                    </td>
                    <td className={td}>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setReviewStatus(r.id, "Approved")}
                          className="rounded-full bg-primary px-3 py-1.5 text-[0.65rem] font-bold uppercase"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => setReviewStatus(r.id, "Pending")}
                          className="rounded-full bg-mist px-3 py-1.5 text-[0.65rem] font-bold uppercase"
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <AdminProductModal
          open={editingProduct !== undefined}
          product={editingProduct ?? null}
          onClose={() => setEditingProduct(undefined)}
          onSave={(product) => {
            if (editingProduct) updateProduct(editingProduct.id, product);
            else addProduct(product);
            setEditingProduct(undefined);
          }}
        />
      </main>
    </div>
  );
}
