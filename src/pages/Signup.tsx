import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { GradientButton } from "@/components/ui/GradientButton";
import { toast } from "sonner";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function SignupPage() {
  useDocumentTitle("Sign up — Klyde");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email, password,
      options: { emailRedirectTo: `${window.location.origin}/admin` },
    });
    setLoading(false);
    if (error) return toast.error(error.message);
    toast.success("Account created");
    navigate("/admin");
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12">
      <form onSubmit={onSubmit} className="w-full max-w-md rounded-3xl glass-strong p-8 space-y-5">
        <div>
          <h1 className="text-3xl font-display font-bold text-gradient">Create account</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            First account gets admin access automatically.
          </p>
        </div>
        <div className="space-y-3">
          <input
            type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-xl glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/50"
          />
          <input
            type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)}
            placeholder="Password (min 6 chars)"
            className="w-full rounded-xl glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <GradientButton type="submit" className="w-full" disabled={loading}>
          {loading ? "Creating…" : "Create account"}
        </GradientButton>
        <p className="text-center text-sm text-muted-foreground">
          Have an account?{" "}
          <Link to="/login" className="text-foreground hover:text-gradient">Sign in</Link>
        </p>
      </form>
    </div>
  );
}
