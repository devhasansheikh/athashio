import { useNavigate } from "react-router-dom";

const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-0 final-cta-glow pointer-events-none" />
      <div className="relative max-w-2xl mx-auto text-center">
        <h2 className="font-heading font-bold text-2xl md:text-[2rem] text-foreground">
          Ready to stop losing money to unclear operations?
        </h2>
        <p className="font-subheading text-foreground/70 mt-4 text-base md:text-lg">
          See exactly how HASH Ops will bring visibility, ownership, and control to your business — before you commit.
        </p>
        <button
          onClick={() => navigate("/qualify")}
          className="cta-3d mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 transition-all duration-200"
        >
          Book Your Free Ops Strategy Call →
        </button>
        <p className="text-muted-foreground text-xs mt-4">
          No upfront payment. Just clarity on what's leaking and how to fix it.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
