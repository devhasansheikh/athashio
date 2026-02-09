import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const About = () => (
  <section id="about" className="py-24 md:py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-6"
      >
        About HASH Ops System™
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-subheading text-muted-foreground text-lg md:text-xl text-center max-w-2xl mx-auto mb-14"
      >
        Built for founders who need clarity — not another tool to manage.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "What We Do", desc: "We design and implement a single operational system that replaces scattered spreadsheets, disconnected tools, and manual tracking with structured, real-time visibility." },
          { title: "Who It's For", desc: "SMEs and service businesses running 5–50 person teams who've outgrown ad-hoc operations but aren't ready for enterprise software overhead." },
          { title: "How We're Different", desc: "HASH Ops isn't a tool you learn — it's a system built around how your business actually runs. We handle the structure so you focus on decisions." },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="about-card rounded-xl p-8"
          >
            <h3 className="font-heading font-semibold text-foreground text-xl mb-3">{card.title}</h3>
            <p className="text-base text-foreground/70 leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
