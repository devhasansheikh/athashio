import { Eye, Zap, Users, TrendingUp } from "lucide-react";

const results = [
  { icon: Eye, text: "Clear visibility across operations" },
  { icon: Zap, text: "Faster decisions with real data" },
  { icon: Users, text: "Less founder dependency" },
  { icon: TrendingUp, text: "Systems that scale without chaos" },
];

const Results = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-14">
        Results
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
        {results.map((r) => (
          <div key={r.text} className="card-3d rounded-xl p-7 flex items-start gap-5">
            <div className="w-10 h-10 rounded-lg bg-secondary/60 border border-border/50 flex items-center justify-center flex-shrink-0 mt-0.5">
              <r.icon className="w-5 h-5 text-foreground/60" strokeWidth={1.5} />
            </div>
            <span className="text-foreground/90 text-lg leading-snug font-medium">{r.text}</span>
          </div>
        ))}
      </div>
      <p className="text-muted-foreground text-base mt-12">
        Results vary by business — but clarity is non-negotiable.
      </p>
    </div>
  </section>
);

export default Results;
