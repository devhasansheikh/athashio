import { Clock, DollarSign, PhoneOff, UserCog } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Delayed Decisions = Lost Revenue",
    desc: "When reporting isn't real-time, opportunities are already gone by the time you see the numbers.",
  },
  {
    icon: DollarSign,
    title: "Work Happens, Money Doesn't Get Tracked",
    desc: "Projects move forward, but costs, margins, and profitability stay unclear.",
  },
  {
    icon: PhoneOff,
    title: "Follow-ups Fall Through",
    desc: "Missed follow-ups quietly turn into lost deals and unpaid work.",
  },
  {
    icon: UserCog,
    title: "Founder Time Becomes the Safety Net",
    desc: "When systems aren't clear, your time fills the gaps — at the cost of growth.",
  },
];

const Problems = () => (
  <section id="services" className="py-24 md:py-32 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <p className="font-subheading text-primary text-sm uppercase tracking-widest mb-3">Hash Ops System™</p>
      <h2 className="font-heading font-bold text-2xl md:text-[2rem] text-foreground">
        You're not losing time. You're losing money quietly.
      </h2>
      <p className="font-subheading text-muted-foreground mt-3 text-base md:text-lg max-w-2xl mx-auto">
        Poor systems don't look like mistakes — they look like "normal operations" until growth stalls.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {problems.slice(0, 3).map((p) => (
          <div key={p.title} className="card-3d rounded-xl p-6 text-left">
            <p.icon className="w-5 h-5 text-primary mb-3" strokeWidth={1.5} />
            <h3 className="font-heading font-semibold text-primary text-base mb-2">{p.title}</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-center">
        {(() => { const LastIcon = problems[3].icon; return (
        <div className="card-3d rounded-xl p-6 text-left w-full sm:max-w-sm">
          <LastIcon className="w-5 h-5 text-primary mb-3" strokeWidth={1.5} />
          <h3 className="font-heading font-semibold text-primary text-base mb-2">{problems[3].title}</h3>
          <p className="text-sm text-foreground/70 leading-relaxed">{problems[3].desc}</p>
        </div>
        ); })()}
      </div>

      {/* Mini system visual */}
      <div className="mt-16 max-w-md mx-auto card-3d rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-primary/80" />
          <span className="text-xs text-muted-foreground font-subheading uppercase tracking-wider">Ops Overview</span>
        </div>
        <div className="space-y-2">
          {[
            { label: "Pipeline", status: "12 Active", color: "bg-primary/20 text-primary" },
            { label: "Follow-ups", status: "3 Overdue", color: "bg-destructive/20 text-destructive" },
            { label: "Revenue", status: "On Track", color: "bg-emerald-500/20 text-emerald-400" },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between py-2 px-3 rounded-lg bg-secondary/30 border border-border/50">
              <span className="text-sm text-foreground/70">{row.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${row.color}`}>{row.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Problems;
