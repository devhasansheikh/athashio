import { motion } from "framer-motion";
import { DollarSign, Zap, Brain, TrendingUp } from "lucide-react";

const cards = [
  {
    icon: DollarSign,
    iconColor: "text-emerald-400/80",
    heading: "Cost Reduction",
    stat: "50%",
    body: "Eliminate expenses for personnel, training, and traditional call center infrastructure. Save up to $1000s annually.",
  },
  {
    icon: Zap,
    iconColor: "text-amber-400/70",
    heading: "Productivity",
    stat: "5x",
    body: "Execute your entire database in hours vs days. Unlimited simultaneous calls without hiring more staff.",
  },
  {
    icon: Brain,
    iconColor: "text-sky-400/80",
    heading: "Decisions",
    stat: null,
    body: "Make faster decisions with real operational data, not gut feeling. AI that turns day-to-day activity into clear, confident next moves.",
  },
  {
    icon: TrendingUp,
    iconColor: "text-violet-400/80",
    heading: "Scale",
    stat: null,
    body: "Grow without breaking what already works. Systems designed to handle complexity as your business expands.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" as const },
  }),
};

const Results = () => (
  <section className="py-20 md:py-28 px-6">
    <div className="max-w-5xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-14"
      >
        Impact of our service for your company
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {cards.map((c, i) => (
          <motion.div
            key={c.heading}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="impact-card rounded-2xl p-8 md:p-10 text-left flex flex-col"
          >
            <div className="w-11 h-11 rounded-xl bg-secondary/60 border border-border/50 flex items-center justify-center mb-5">
              <c.icon className={`w-5 h-5 ${c.iconColor}`} strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
              {c.heading}
            </h3>
            {c.stat && (
              <p className="font-heading font-bold text-primary text-4xl md:text-5xl mb-3">
                {c.stat}
              </p>
            )}
            <p className="text-foreground/65 text-[0.95rem] leading-relaxed">
              {c.body}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Results;
