import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-24 md:py-32 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="about-unified rounded-2xl p-10 md:p-14"
      >
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8">
          About HASH Ops System™
        </h2>
        <p className="font-subheading text-muted-foreground text-lg md:text-xl mb-10">
          Built for founders who need clarity — not another tool to manage.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="font-heading font-semibold text-foreground text-xl mb-2">What We Do</h3>
            <p className="text-base text-foreground/70 leading-relaxed">
              We design and implement a single operational system that replaces scattered spreadsheets, disconnected tools, and manual tracking with structured, real-time visibility.
            </p>
          </div>
          <div className="border-t border-border/30 pt-8">
            <h3 className="font-heading font-semibold text-foreground text-xl mb-2">Who It's For</h3>
            <p className="text-base text-foreground/70 leading-relaxed">
              SMEs and service businesses running 5–50 person teams who've outgrown ad-hoc operations but aren't ready for enterprise software overhead.
            </p>
          </div>
          <div className="border-t border-border/30 pt-8">
            <h3 className="font-heading font-semibold text-foreground text-xl mb-2">How We're Different</h3>
            <p className="text-base text-foreground/70 leading-relaxed">
              HASH Ops isn't a tool you learn — it's a system built around how your business actually runs. We handle the structure so you focus on decisions.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
