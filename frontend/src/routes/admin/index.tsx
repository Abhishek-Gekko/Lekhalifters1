import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Construction, Lock } from "lucide-react";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "Admin Login | Lekha Lifters" },
      { name: "description", content: "Secure administrator login for the Lekha Lifters management console." },
      { property: "og:title", content: "Admin Login | Lekha Lifters" },
      { property: "og:description", content: "Administrator access to the Lekha Lifters console." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminLogin,
});

function AdminLogin() {
  const { login } = useStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) navigate({ to: "/admin/dashboard" });
    else setError("Invalid email or password.");
  };

  const field =
    "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30";

  return (
    <main className="grid min-h-screen place-items-center bg-ink-gradient px-4 py-16">
      <div className="animate-zoom w-full max-w-md rounded-3xl border border-white/10 bg-ink/70 p-9 shadow-lift backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-gradient text-ink">
            <Construction size={20} />
          </span>
          <span className="font-display text-lg font-extrabold text-white">LEKHA LIFTERS</span>
        </Link>

        <h1 className="mt-9 font-display text-3xl font-extrabold text-white">Admin Login</h1>
        <p className="mt-2 text-sm text-white/60">Authorised personnel only.</p>

        <form onSubmit={submit} className="mt-8 grid gap-4">
          <div>
            <label className="mb-1.5 block text-xs font-bold text-white/70 uppercase">Email</label>
            <input required type="email" className={field} value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold text-white/70 uppercase">Password</label>
            <input
              required
              type="password"
              className={field}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary py-4 text-sm font-bold text-primary-foreground uppercase transition hover:scale-[1.02] hover:bg-accent">
            <Lock size={16} /> Login
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-white/40">
          Demo credentials: admin@lekhalifters.com / admin123
        </p>
      </div>
    </main>
  );
}
