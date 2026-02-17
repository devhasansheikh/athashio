import { motion } from "framer-motion";
import { DollarSign, Zap, Brain } from "lucide-react";

const cards = [
  {
    icon: DollarSign,
    heading: "Cost Reduction",
    stat: "50%",
    body: "Missed follow-ups, duplicated work, delayed approvals, and poor visibility quietly cost thousands every year. We remove those gaps by design & automation, helping founders reclaim time, money, and momentum without adding complexity.",
  },
  {
    icon: Zap,
    heading: "Productivity",
    stat: "5x",
    body: "Execute your entire database in hours vs days. Unlimited simultaneous calls without hiring more staff.",
  },
  {
    icon: Brain,
    heading: "Decisions",
    stat: null,
    body: "Make faster decisions with real operational data, not gut feeling. AI that turns day-to-day activity into clear, confident next moves.",
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
    <div className="max-w-7xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-10"
      >
        Impact of our software for your company
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((c, i) => (
          <motion.div
            key={c.heading}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="impact-card rounded-2xl p-7 md:p-8 flex flex-col items-center text-center justify-center"
          >
            <c.icon className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
            {c.stat && (
              <p className="font-heading font-bold text-primary text-3xl md:text-4xl mb-2">
                {c.stat}
              </p>
            )}
            <h3 className="font-heading font-semibold text-foreground text-base mb-2">
              {c.heading}
            </h3>
            <p className="text-foreground/60 text-[0.9rem] leading-relaxed">
              {c.body}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Results;
