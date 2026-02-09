import { Search, Layout, Rocket } from "lucide-react";

const steps = [
  { num: "01", icon: Search, label: "Audit", desc: "We review your current data, tools, and workflows." },
  { num: "02", icon: Layout, label: "Structure", desc: "We design your HASH Ops system around how your business actually runs." },
  { num: "03", icon: Rocket, label: "Operate & Scale", desc: "You run daily operations inside the system. Automation handles the rest." },
];

const HowItWorks = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-heading font-bold text-2xl md:text-[2rem] text-center text-foreground mb-14">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s) => (
          <div key={s.num} className="card-3d rounded-xl p-6 text-center">
            <s.icon className="w-5 h-5 text-primary mx-auto mb-3" strokeWidth={1.5} />
            <span className="font-heading text-3xl font-bold text-primary">{s.num}</span>
            <h3 className="font-heading font-semibold text-foreground text-lg mt-3 mb-2">{s.label}</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
