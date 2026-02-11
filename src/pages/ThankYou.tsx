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
            You're In. We'll Review &amp; Get Back Within 24 Hours.
          </h1>
          <p className="text-foreground/70 text-base md:text-lg mb-4 leading-relaxed">
            Our team is reviewing your details.<br />
            You'll receive a response at your provided email within 24 hours.
          </p>
          <p className="text-muted-foreground text-sm mb-10">
            If your operations qualify, we'll outline the exact next steps.
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
