import { Check } from "lucide-react";

const results = [
  "Clear visibility across operations",
  "Faster decisions with real data",
  "Less founder dependency",
  "Systems that scale without chaos",
];

const Results = () => (
  <section className="py-20 md:py-28 px-6">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-10">
        Results
      </h2>
      <ul className="space-y-4 text-left inline-block">
        {results.map((r) => (
          <li key={r} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-foreground/85 text-base">{r}</span>
          </li>
        ))}
      </ul>
      <p className="text-muted-foreground text-sm mt-8">
        Results vary by business — but clarity is non-negotiable.
      </p>
    </div>
  </section>
);

export default Results;
