import { useState } from "react";
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

const HowItWorks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
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
          {/* Connector line anchored to pill top area (desktop only) */}
          <svg
            className="hidden md:block absolute inset-0 w-full h-full z-0 pointer-events-none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="connectorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(24 100% 61%)" stopOpacity="0" />
                <stop offset="15%" stopColor="hsl(24 100% 61%)" stopOpacity={hoveredIndex !== null ? 0.5 : 0.25} />
                <stop offset="50%" stopColor="hsl(24 100% 61%)" stopOpacity={hoveredIndex !== null ? 0.6 : 0.3} />
                <stop offset="85%" stopColor="hsl(24 100% 61%)" stopOpacity={hoveredIndex !== null ? 0.5 : 0.25} />
                <stop offset="100%" stopColor="hsl(24 100% 61%)" stopOpacity="0" />
              </linearGradient>
              {/* Glow filter */}
              <filter id="connectorGlow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Main line at ~40px from top (where pills sit) */}
            <line
              x1="16.6%"
              y1="40"
              x2="83.3%"
              y2="40"
              stroke="url(#connectorGrad)"
              strokeWidth="1.5"
              filter={hoveredIndex !== null ? "url(#connectorGlow)" : undefined}
              style={{ transition: "all 0.4s ease" }}
            />
            {/* Dots at each card center */}
            {[16.6, 50, 83.3].map((cx, i) => (
              <circle
                key={i}
                cx={`${cx}%`}
                cy="40"
                r={hoveredIndex === i ? 4 : 2.5}
                fill={hoveredIndex === i ? "hsl(24 100% 61%)" : "hsl(24 100% 61% / 0.4)"}
                style={{ transition: "all 0.3s ease" }}
              />
            ))}
          </svg>

          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              custom={i}
              variants={cardFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="hiw-card rounded-2xl p-8 text-center relative z-10"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Orange pill number */}
              <span
                className="inline-block text-sm font-bold px-4 py-1 rounded-full mb-5 transition-all duration-300"
                style={{
                  background: hoveredIndex === i
                    ? "hsl(24 100% 61% / 0.25)"
                    : "hsl(24 100% 61% / 0.15)",
                  color: "hsl(24 100% 61%)",
                  boxShadow: hoveredIndex === i
                    ? "0 0 12px hsl(24 100% 61% / 0.3)"
                    : "none",
                }}
              >
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
};

export default HowItWorks;
