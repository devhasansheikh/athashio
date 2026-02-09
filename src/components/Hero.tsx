import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-glow relative pt-32 pb-20 md:pt-40 md:pb-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] uppercase leading-tight tracking-tight text-primary">
          YOUR BUSINESS ISN'T DISORGANIZED — YOUR SYSTEMS ARE
        </h1>
        <p className="font-subheading text-lg md:text-xl text-foreground/80 mt-6 max-w-2xl mx-auto leading-relaxed">
          HASH Ops turns scattered data, manual tracking, and unclear ownership into one structured operating system for SMEs.
        </p>
        <button
          onClick={() => navigate("/qualify")}
          className="mt-10 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 transition-all duration-200"
        >
          Book Your Free Ops Strategy Call →
        </button>
      </div>
    </section>
  );
};

export default Hero;
