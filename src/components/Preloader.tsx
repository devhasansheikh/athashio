import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mascot from "@/assets/hash-mascot.png";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 500);
    }, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={mascot}
            alt="HASH"
            className="w-24 h-24 object-contain"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
