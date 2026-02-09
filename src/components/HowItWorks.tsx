import { motion } from "framer-motion";
import { Search, Layout, Rocket } from "lucide-react";

const steps = [
  { num: "01", icon: Search, iconColor: "text-sky-400/80", label: "Audit", desc: "We review your current data, tools, and workflows." },
  { num: "02", icon: Layout, iconColor: "text-violet-400/80", label: "Structure", desc: "We design your HASH Ops system around how your business actually runs." },
  { num: "03", icon: Rocket, iconColor: "text-emerald-400/80", label: "Operate & Scale", desc: "You run daily operations inside the system. Automation handles the rest." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

const HowItWorks = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-14"
      >
        How It Works
      </motion.h2>
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Connector line (desktop only) */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0" />
        
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="card-3d rounded-xl p-8 text-center relative z-10"
          >
            <s.icon className={`w-6 h-6 ${s.iconColor} mx-auto mb-4`} strokeWidth={1.5} />
            <span className="font-heading text-4xl font-bold text-foreground/30">{s.num}</span>
            <h3 className="font-heading font-semibold text-foreground text-xl mt-3 mb-3">{s.label}</h3>
            <p className="text-base text-foreground/70 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
