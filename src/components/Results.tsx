import { motion } from "framer-motion";
import { Eye, Zap, Users, TrendingUp } from "lucide-react";

const results = [
  { icon: Eye, iconColor: "text-sky-400/80", text: "Clear visibility across operations" },
  { icon: Zap, iconColor: "text-amber-400/70", text: "Faster decisions with real data" },
  { icon: Users, iconColor: "text-violet-400/80", text: "Less founder dependency" },
  { icon: TrendingUp, iconColor: "text-emerald-400/80", text: "Systems that scale without chaos" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Results = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-5xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-14"
      >
        Results
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
        {results.map((r, i) => (
          <motion.div
            key={r.text}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="card-3d rounded-xl p-7 flex items-start gap-5"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary/60 border border-border/50 flex items-center justify-center flex-shrink-0 mt-0.5">
              <r.icon className={`w-5 h-5 ${r.iconColor}`} strokeWidth={1.5} />
            </div>
            <span className="text-foreground/90 text-lg leading-snug font-medium">{r.text}</span>
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-muted-foreground text-base mt-12"
      >
        Results vary by business — but clarity is non-negotiable.
      </motion.p>
    </div>
  </section>
);

export default Results;
