import { motion } from "framer-motion";
import { Clock, DollarSign, PhoneOff, UserCog } from "lucide-react";

const problems = [
  {
    icon: Clock,
    iconColor: "text-sky-400/80",
    title: "Delayed Decisions = Lost Revenue",
    desc: "When reporting isn't real-time, opportunities are already gone by the time you see the numbers.",
  },
  {
    icon: DollarSign,
    iconColor: "text-rose-400/80",
    title: "Work Happens, Money Doesn't Get Tracked",
    desc: "Projects move forward, but costs, margins, and profitability stay unclear.",
  },
  {
    icon: PhoneOff,
    iconColor: "text-violet-400/80",
    title: "Follow-ups Fall Through",
    desc: "Missed follow-ups quietly turn into lost deals and unpaid work.",
  },
  {
    icon: UserCog,
    iconColor: "text-amber-400/70",
    title: "Founder Time Becomes the Safety Net",
    desc: "When systems aren't clear, your time fills the gaps — at the cost of growth.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Problems = () => (
  <section id="services" className="py-24 md:py-32 px-6">
    <div className="max-w-5xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="font-heading font-bold text-3xl md:text-4xl text-foreground"
      >
        You're not losing time. You're losing money quietly.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-subheading text-muted-foreground mt-4 text-lg md:text-xl max-w-2xl mx-auto"
      >
        Poor systems don't look like mistakes — they look like "normal operations" until growth stalls.
      </motion.p>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="card-3d rounded-xl p-7 text-left"
          >
            <p.icon className={`w-6 h-6 ${p.iconColor} mb-4`} strokeWidth={1.5} />
            <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{p.title}</h3>
            <p className="text-base text-foreground/70 leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* HASH Ops System™ unified visual */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-10">
          The HASH Ops System™
        </h3>
        <div className="relative rounded-2xl p-6 md:p-8 max-w-3xl mx-auto hashops-system-bg border border-border/40">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="text-sm text-muted-foreground font-subheading uppercase tracking-wider">System Overview — Live</span>
          </div>

          {/* Dashboard-style panels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            {[
              { label: "Revenue Pipeline", value: "AED 1.2M", sub: "12 active deals" },
              { label: "Operational Tasks", value: "89%", sub: "on-time completion" },
              { label: "Follow-up Queue", value: "7", sub: "due this week" },
            ].map((panel) => (
              <div key={panel.label} className="rounded-lg bg-secondary/40 border border-border/50 p-4 text-left">
                <span className="text-xs text-muted-foreground font-subheading uppercase tracking-wide">{panel.label}</span>
                <p className="font-heading font-bold text-2xl text-foreground mt-1">{panel.value}</p>
                <span className="text-xs text-foreground/50">{panel.sub}</span>
              </div>
            ))}
          </div>

          {/* Table-style rows */}
          <div className="space-y-2">
            {[
              { project: "Client Onboarding — Al Fahim", status: "In Progress", owner: "Ops Lead", health: "bg-emerald-500/20 text-emerald-400" },
              { project: "Q1 Financial Review", status: "Pending", owner: "Finance", health: "bg-amber-500/20 text-amber-400" },
              { project: "Marketing Sprint #4", status: "Completed", owner: "Growth", health: "bg-foreground/10 text-foreground/50" },
            ].map((row) => (
              <div key={row.project} className="flex items-center justify-between py-3 px-4 rounded-lg bg-secondary/20 border border-border/30 text-left">
                <div className="flex-1 min-w-0">
                  <span className="text-sm text-foreground/80 block truncate">{row.project}</span>
                  <span className="text-xs text-muted-foreground">{row.owner}</span>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full whitespace-nowrap ${row.health}`}>{row.status}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Problems;
