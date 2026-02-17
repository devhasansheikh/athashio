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
    stat: "10x",
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
  <section className="px-6 md:px-20 lg:px-[100px]" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
    <div className="max-w-7xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-[60px]"
      >
        Impact of our software for your company
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        {cards.map((c, i) => (
          <motion.div
            key={c.heading}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="result-card rounded-2xl w-full max-w-[300px] flex flex-col items-center text-center"
            style={{ padding: '28px', borderRadius: '16px' }}
          >
            <c.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
            <div className="h-4" />
            <p className="font-heading font-bold text-primary text-[1.65rem] md:text-[1.85rem]">
              {c.stat}
            </p>
            <div className="h-3" />
            <h3 className="font-heading font-semibold text-foreground text-base">
              {c.heading}
            </h3>
            <div className="h-3" />
            <p className="text-foreground/60 text-[0.85rem] leading-relaxed">
              {c.body}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Results;
