import { Eye, Zap, Users, TrendingUp } from "lucide-react";

const results = [
  { icon: Eye, text: "Clear visibility across operations" },
  { icon: Zap, text: "Faster decisions with real data" },
  { icon: Users, text: "Less founder dependency" },
  { icon: TrendingUp, text: "Systems that scale without chaos" },
];

const Results = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="font-heading font-bold text-2xl md:text-[2rem] text-foreground mb-12">
        Results
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left max-w-2xl mx-auto">
        {results.map((r) => (
          <div key={r.text} className="card-3d rounded-xl p-5 flex items-start gap-4">
            <r.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
            <span className="text-foreground/90 text-base leading-snug">{r.text}</span>
          </div>
        ))}
      </div>
      <p className="text-muted-foreground text-sm mt-10">
        Results vary by business — but clarity is non-negotiable.
      </p>
    </div>
  </section>
);

export default Results;
