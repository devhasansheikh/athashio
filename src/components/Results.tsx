import { motion } from "framer-motion";
import { DollarSign, Zap, Brain } from "lucide-react";

const cards = [
  {
    icon: DollarSign,
    heading: "Cost Reduction",
    stat: "50%",
    body: "Operational gaps quietly drain thousands each year. We eliminate them by design & automation, so founders regain time, money, and control.",
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
        className="font-heading font-bold text-foreground mb-[60px]"
        style={{ fontSize: 'clamp(1.75rem, 3vw, 2.65rem)' }}
      >
        Impact of our service for your company
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {cards.map((c, i) => (
          <motion.div
            key={c.heading}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="impact-card w-full flex flex-col items-center text-center"
            style={{ maxWidth: '290px', minHeight: '260px', padding: '24px', borderRadius: '16px' }}
          >
            <c.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
            <div style={{ height: '14px' }} />
            <p className="font-heading font-bold text-primary" style={{ fontSize: '1.5rem' }}>
              {c.stat}
            </p>
            <div style={{ height: '10px' }} />
            <h3 className="font-heading font-semibold text-foreground" style={{ fontSize: '1.05rem' }}>
              {c.heading}
            </h3>
            <div style={{ height: '10px' }} />
            <p className="text-foreground/60" style={{ fontSize: '0.82rem', lineHeight: '1.5' }}>
              {c.body}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Results;
