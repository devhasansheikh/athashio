import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      <div className={`ambient-bg ${loaded ? "opacity-100 transition-opacity duration-500" : "opacity-0"}`}>
        <Navbar />
        <main>
          <Hero />
          <Problems />
          <HowItWorks />
          <Results />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
