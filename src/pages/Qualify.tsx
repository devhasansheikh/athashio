import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const questions = [
  { id: "business_type", label: "What type of business do you run?", type: "text" as const },
  { id: "team_size", label: "How many people are involved in day-to-day operations?", type: "select" as const, options: ["Just me", "2–5", "6–15", "16–30", "30+"] },
  { id: "current_tools", label: "Where do you currently track operations, tasks, or numbers?", type: "text" as const },
  { id: "blind_spot", label: "What's the biggest operational blind spot right now?", type: "textarea" as const },
  { id: "visibility_goal", label: "What would better visibility help you improve first?", type: "text" as const },
  { id: "timeline", label: "When would you like to start improving your operations?", type: "select" as const, options: ["As soon as possible", "Within 2 weeks", "Within a month", "Just exploring for now"] },
];

const Qualify = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<Record<string, string>>({});
  const [step, setStep] = useState(0);

  const current = questions[step];
  const value = form[current.id] || "";

  const handleNext = () => {
    if (!value.trim()) return;
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      navigate("/book", { state: form });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 pt-24 pb-12">
        <div className="card-3d rounded-2xl p-8 md:p-10 w-full max-w-lg">
          <p className="text-muted-foreground text-xs mb-1 font-subheading">
            Step {step + 1} of {questions.length}
          </p>
          <div className="w-full bg-secondary rounded-full h-1 mb-6">
            <div
              className="bg-primary h-1 rounded-full transition-all duration-300"
              style={{ width: `${((step + 1) / questions.length) * 100}%` }}
            />
          </div>

          <label className="font-heading font-semibold text-foreground text-lg block mb-4">
            {current.label}
          </label>

          {current.type === "text" && (
            <input
              className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              value={value}
              onChange={(e) => setForm({ ...form, [current.id]: e.target.value })}
              onKeyDown={(e) => e.key === "Enter" && handleNext()}
              autoFocus
            />
          )}

          {current.type === "textarea" && (
            <textarea
              className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[100px]"
              value={value}
              onChange={(e) => setForm({ ...form, [current.id]: e.target.value })}
              autoFocus
            />
          )}

          {current.type === "select" && current.options && (
            <div className="space-y-2">
              {current.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setForm({ ...form, [current.id]: opt })}
                  className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all duration-200 ${
                    value === opt
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-secondary/30 text-foreground/70 hover:border-primary/50"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          <div className="flex justify-between mt-8">
            <button
              onClick={() => step > 0 && setStep(step - 1)}
              className={`text-sm text-muted-foreground hover:text-foreground transition-colors ${step === 0 ? "invisible" : ""}`}
            >
              ← Back
            </button>
            <button
              onClick={handleNext}
              disabled={!value.trim()}
              className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {step < questions.length - 1 ? "Next →" : "Continue to Booking →"}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Qualify;
