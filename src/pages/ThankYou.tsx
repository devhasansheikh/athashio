import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col ambient-bg">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-lg"
        >
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
            Thank You. We'll Reach Out Within 24 Hours.
          </h1>
          <p className="text-foreground/70 text-base md:text-lg mb-8 leading-relaxed">
            Our team will review your details and get back to you shortly.
          </p>
          <p className="text-primary/80 text-sm md:text-base italic mb-10 leading-relaxed">
            Most businesses never pause to fix operational blind spots.<br />
            You just did.
          </p>
          <button
            onClick={() => navigate("/")}
            className="cta-3d px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 transition-all duration-200"
          >
            Return to Homepage
          </button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
