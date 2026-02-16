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
          <p className="text-[1.1rem] md:text-[1.3rem] leading-relaxed mb-10 text-primary">
            Most growing businesses quietly lose up to 30% of revenue to operational inefficiencies—you've taken the first step to start taking that back.
          </p>
          <h1 className="font-heading font-bold text-xl md:text-2xl text-foreground/90 mb-10 leading-tight">
            Thank You. We'll Reach Out Within 24 Hours.
          </h1>
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
