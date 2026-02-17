import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-glow relative flex items-center justify-center px-6 md:px-20 lg:px-[100px]" style={{ paddingTop: '200px', paddingBottom: '200px' }}>
      <div className="max-w-[800px] mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-bold text-[1.85rem] sm:text-4xl md:text-[3.75rem] lg:text-[4.25rem] uppercase leading-[1.13] sm:leading-[1.15] tracking-tight"
        >
          <span className="text-foreground">YOUR BUSINESS ISN'T DISORGANIZED</span>
          <br className="block" />
          <span className="text-primary inline-block">YOUR SYSTEMS ARE</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-subheading text-xl md:text-2xl lg:text-[1.7rem] text-foreground/80 mt-6 max-w-3xl mx-auto leading-relaxed"
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
