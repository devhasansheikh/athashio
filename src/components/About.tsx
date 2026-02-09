const About = () => (
  <section id="about" className="py-24 md:py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground mb-6">
        About HASH Ops System™
      </h2>
      <p className="font-subheading text-muted-foreground text-lg md:text-xl text-center max-w-2xl mx-auto mb-14">
        Built for founders who need clarity — not another tool to manage.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-3d rounded-xl p-8">
          <h3 className="font-heading font-semibold text-foreground text-xl mb-3">What We Do</h3>
          <p className="text-base text-foreground/70 leading-relaxed">
            We design and implement a single operational system that replaces scattered spreadsheets, disconnected tools, and manual tracking with structured, real-time visibility.
          </p>
        </div>
        <div className="card-3d rounded-xl p-8">
          <h3 className="font-heading font-semibold text-foreground text-xl mb-3">Who It's For</h3>
          <p className="text-base text-foreground/70 leading-relaxed">
            SMEs and service businesses running 5–50 person teams who've outgrown ad-hoc operations but aren't ready for enterprise software overhead.
          </p>
        </div>
        <div className="card-3d rounded-xl p-8">
          <h3 className="font-heading font-semibold text-foreground text-xl mb-3">How We're Different</h3>
          <p className="text-base text-foreground/70 leading-relaxed">
            HASH Ops isn't a tool you learn — it's a system built around how your business actually runs. We handle the structure so you focus on decisions.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
