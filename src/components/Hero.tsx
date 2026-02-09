import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-glow relative pt-32 pb-20 md:pt-40 md:pb-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] uppercase leading-tight tracking-tight">
          <span className="text-foreground">YOUR BUSINESS ISN'T DISORGANIZED</span>
          <br />
          <span className="text-primary">— YOUR SYSTEMS ARE</span>
        </h1>
        <p className="font-subheading text-lg md:text-xl lg:text-2xl text-foreground/80 mt-6 max-w-3xl mx-auto leading-relaxed">
          HASH Ops turns scattered data, manual tracking, and unclear ownership into one structured operating system for SMEs.
        </p>
        <button
          onClick={() => navigate("/qualify")}
          className="cta-3d mt-10 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 transition-all duration-200"
        >
          Book Your Free Ops Strategy Call →
        </button>
      </div>
    </section>
  );
};

export default Hero;
