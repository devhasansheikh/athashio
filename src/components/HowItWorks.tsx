import { motion } from "framer-motion";
import { Search, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    label: "Audit",
    desc: "We review your current data, tools, and workflows.",
  },
  {
    num: "02",
    icon: Wrench,
    label: "Structure",
    desc: "We design your HASH Ops system around how your business actually runs.",
  },
  {
    num: "03",
    icon: Rocket,
    label: "Operate & Scale",
    desc: "You run daily operations inside the system. Automation handles the rest.",
  },
];

const cardFade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const HowItWorks = () => (
  <section className="how-it-works-bg py-24 md:py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-14"
      >
        How It Works
      </motion.h2>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Connector line (desktop only) */}
        <div className="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 z-0" />

        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            custom={i}
            variants={cardFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="hiw-card rounded-2xl p-8 text-center relative z-10"
          >
            {/* Orange pill number */}
            <span className="inline-block bg-primary/15 text-primary text-sm font-bold px-4 py-1 rounded-full mb-5">
              {s.num}
            </span>
            <s.icon className="w-7 h-7 text-primary/80 mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-heading font-semibold text-foreground text-xl mt-1 mb-3">{s.label}</h3>
            <p className="text-base text-foreground/70 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
