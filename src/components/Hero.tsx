import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-glow relative min-h-[calc(100vh-80px)] flex items-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-[1.65rem] sm:text-4xl md:text-[3.25rem] lg:text-[3.75rem] uppercase leading-[1.25] sm:leading-[1.3] tracking-tight"
        >
          <span className="text-foreground font-normal">YOUR BUSINESS ISN'T DISORGANIZED</span>
          <br className="block" />
          <span className="text-primary font-bold mt-1 inline-block">YOUR SYSTEMS ARE</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-subheading text-lg md:text-xl lg:text-2xl text-foreground/80 mt-6 max-w-3xl mx-auto leading-relaxed"
        >
          HASH Ops turns scattered data, manual tracking, and unclear ownership into one structured operating system for SMEs.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={() => navigate("/qualify")}
          className="cta-3d mt-10 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 transition-all duration-200"
        >
          Book Your Free Ops Strategy Call →
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
