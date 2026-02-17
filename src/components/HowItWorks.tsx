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
    <section className="how-it-works-bg py-20 md:py-28 px-6 md:px-20 lg:px-[100px]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-16"
        >
          How It Works
        </motion.h2>

        {/* Desktop layout with connector */}
        <div className="hidden md:block relative">
          <div className="relative h-8 mb-0">
            <div
              className="absolute top-1/2 -translate-y-1/2 h-[2px] transition-all duration-500"
              style={{
                left: "calc(100% / 6)",
                right: "calc(100% / 6)",
                background: `linear-gradient(90deg, 
                  hsla(24, 100%, 61%, ${hoveredIndex === 0 ? 0.7 : 0.3}) 0%, 
                  hsla(24, 100%, 61%, ${hoveredIndex !== null ? 0.5 : 0.25}) 50%, 
                  hsla(24, 100%, 61%, ${hoveredIndex === 2 ? 0.7 : 0.3}) 100%)`,
                boxShadow: hoveredIndex !== null ? "0 0 8px hsla(24, 100%, 61%, 0.3)" : "none",
              }}
            />
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full transition-all duration-300"
                style={{
                  left: `calc(${(2 * i + 1)} * 100% / 6)`,
                  width: hoveredIndex === i ? 10 : 6,
                  height: hoveredIndex === i ? 10 : 6,
                  background: hoveredIndex === i
                    ? "hsl(24, 100%, 61%)"
                    : "hsla(24, 100%, 61%, 0.4)",
                  boxShadow: hoveredIndex === i ? "0 0 10px hsla(24, 100%, 61%, 0.5)" : "none",
                }}
              />
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                custom={i}
                variants={cardFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="impact-card rounded-2xl p-8 text-center"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span
                  className="inline-block text-sm font-bold px-4 py-1 rounded-full mb-5 transition-all duration-300"
                  style={{
                    background: hoveredIndex === i
                      ? "hsla(24, 100%, 61%, 0.25)"
                      : "hsla(24, 100%, 61%, 0.15)",
                    color: "hsl(24, 100%, 61%)",
                    boxShadow: hoveredIndex === i
                      ? "0 0 12px hsla(24, 100%, 61%, 0.3)"
                      : "none",
                  }}
                >
                  {s.num}
                </span>
                <s.icon className="w-7 h-7 text-primary mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-heading font-semibold text-foreground text-xl mt-1 mb-3">{s.label}</h3>
                <p className="text-base text-foreground/70 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              custom={i}
              variants={cardFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="impact-card rounded-2xl p-8 text-center"
            >
              <span
                className="inline-block text-sm font-bold px-4 py-1 rounded-full mb-5"
                style={{
                  background: "hsla(24, 100%, 61%, 0.15)",
                  color: "hsl(24, 100%, 61%)",
                }}
              >
                {s.num}
              </span>
              <s.icon className="w-7 h-7 text-primary mx-auto mb-4" strokeWidth={1.5} />
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
