import { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Book = () => {
  const location = useLocation();
  const qualifyData = (location.state as Record<string, string>) || {};

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    whatsapp: "",
    dashboards: "",
    revenue_range: "",
    primary_goal: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (key: string, val: string) => setForm({ ...form, [key]: val });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.full_name || !form.email || !form.whatsapp) return;

    setSubmitting(true);

    // Data ready for Supabase integration
    const payload = { ...qualifyData, ...form };
    console.log("Booking payload:", payload);

    setTimeout(() => {
      setSubmitting(false);
      toast.success("Your slot request is received. Our team will contact you shortly.");
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col ambient-bg">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 pt-24 pb-12">
        <form onSubmit={handleSubmit} className="card-3d rounded-2xl p-8 md:p-10 w-full max-w-lg">
          <h2 className="font-heading font-bold text-xl text-foreground mb-1">Book Your Strategy Call</h2>
          <p className="text-muted-foreground text-sm mb-8 font-subheading">Fill in your details and we'll reach out to schedule.</p>

          <div className="space-y-5">
            <Field label="Full Name *" value={form.full_name} onChange={(v) => update("full_name", v)} />
            <Field label="Email Address *" value={form.email} onChange={(v) => update("email", v)} type="email" />
            <Field label="WhatsApp Number *" value={form.whatsapp} onChange={(v) => update("whatsapp", v)} type="tel" />
            <Field label="What dashboards or tools do you currently use?" value={form.dashboards} onChange={(v) => update("dashboards", v)} />

            <div>
              <label className="text-sm text-foreground/80 block mb-1.5">Revenue range</label>
              <select
                value={form.revenue_range}
                onChange={(e) => update("revenue_range", e.target.value)}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Select...</option>
                <option>Under $100K/year</option>
                <option>$100K–$500K/year</option>
                <option>$500K–$1M/year</option>
                <option>$1M–$5M/year</option>
                <option>$5M+/year</option>
              </select>
            </div>

            <Field label="What's your primary goal with HASH Ops?" value={form.primary_goal} onChange={(v) => update("primary_goal", v)} textarea />
          </div>

          <button
            type="submit"
            disabled={submitting || !form.full_name || !form.email || !form.whatsapp}
            className="w-full mt-8 cta-3d px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {submitting ? "Submitting..." : "Book Your Free Ops Strategy Call →"}
          </button>
          <p className="text-muted-foreground text-xs text-center mt-3">
            No upfront payment. Just clarity on what's leaking and how to fix it.
          </p>
        </form>
      </main>
      <Footer />
    </div>
  );
};

const Field = ({
  label, value, onChange, type = "text", textarea = false,
}: {
  label: string; value: string; onChange: (v: string) => void; type?: string; textarea?: boolean;
}) => (
  <div>
    <label className="text-sm text-foreground/80 block mb-1.5">{label}</label>
    {textarea ? (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[80px]"
      />
    ) : (
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
    )}
  </div>
);

export default Book;
