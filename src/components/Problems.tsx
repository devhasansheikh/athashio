const problems = [
  {
    title: "Delayed Decisions = Lost Revenue",
    desc: "When reporting isn't real-time, opportunities are already gone by the time you see the numbers.",
  },
  {
    title: "Work Happens, Money Doesn't Get Tracked",
    desc: "Projects move forward, but costs, margins, and profitability stay unclear.",
  },
  {
    title: "Follow-ups Fall Through",
    desc: "Missed follow-ups quietly turn into lost deals and unpaid work.",
  },
  {
    title: "Founder Time Becomes the Safety Net",
    desc: "When systems aren't clear, your time fills the gaps — at the cost of growth.",
  },
];

const Problems = () => (
  <section id="services" className="py-20 md:py-28 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
        You're not losing time. You're losing money quietly.
      </h2>
      <p className="font-subheading text-muted-foreground mt-3 text-base md:text-lg max-w-2xl mx-auto">
        Poor systems don't look like mistakes — they look like "normal operations" until growth stalls.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {problems.slice(0, 3).map((p) => (
          <div key={p.title} className="card-3d rounded-xl p-6 text-left">
            <h3 className="font-heading font-semibold text-primary text-base mb-2">{p.title}</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-center">
        <div className="card-3d rounded-xl p-6 text-left w-full sm:max-w-sm">
          <h3 className="font-heading font-semibold text-primary text-base mb-2">{problems[3].title}</h3>
          <p className="text-sm text-foreground/70 leading-relaxed">{problems[3].desc}</p>
        </div>
      </div>
    </div>
  </section>
);

export default Problems;
