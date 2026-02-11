import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WEB3FORMS_ACCESS_KEY = "c9720880-a770-4081-9097-ba92a36689e9";

const Book = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
  const [error, setError] = useState("");

  const update = (key: string, val: string) => setForm({ ...form, [key]: val });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.full_name || !form.email || !form.whatsapp) return;

    setSubmitting(true);
    setError("");

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "New HASH Ops Strategy Call Submission",
        botcheck: "",
        from_name: form.full_name,
        "Full Name": form.full_name,
        Email: form.email,
        "WhatsApp Number": form.whatsapp,
        "Current Tools/Dashboards": form.dashboards || "Not provided",
        "Revenue Range": form.revenue_range || "Not provided",
        "Primary Goal": form.primary_goal || "Not provided",
        // Qualify step data
        ...(qualifyData.business_type && { "Business Type": qualifyData.business_type }),
        ...(qualifyData.team_size && { "Team Size": qualifyData.team_size }),
        ...(qualifyData.current_tools && { "Current Tools": qualifyData.current_tools }),
        ...(qualifyData.blind_spot && { "Blind Spot": qualifyData.blind_spot }),
        ...(qualifyData.visibility_goal && { "Visibility Goal": qualifyData.visibility_goal }),
        ...(qualifyData.timeline && { Timeline: qualifyData.timeline }),
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        navigate("/thank-you");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
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
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none"
                style={{ colorScheme: "dark" }}
              >
                <option value="" className="bg-card text-foreground">Select...</option>
                <option className="bg-card text-foreground">Under $100K/year</option>
                <option className="bg-card text-foreground">$100K–$500K/year</option>
                <option className="bg-card text-foreground">$500K–$1M/year</option>
                <option className="bg-card text-foreground">$1M–$5M/year</option>
                <option className="bg-card text-foreground">$5M+/year</option>
              </select>
            </div>

            <Field label="What's your primary goal with HASH Ops?" value={form.primary_goal} onChange={(v) => update("primary_goal", v)} textarea />
          </div>

          <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

          <button
            type="submit"
            disabled={submitting || !form.full_name || !form.email || !form.whatsapp}
            className="w-full mt-8 cta-3d px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {submitting ? "Submitting..." : "Book Your Free Ops Strategy Call →"}
          </button>
          {error && (
            <p className="text-red-400 text-xs text-center mt-3">{error}</p>
          )}
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
