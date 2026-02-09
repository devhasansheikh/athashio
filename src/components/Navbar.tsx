import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/hash-logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto max-w-2xl">
      <div className="glass-nav rounded-full px-4 py-2.5 flex items-center gap-6">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="HASH" className="h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5">
          <button onClick={() => { navigate("/"); setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100); }} className="text-sm text-foreground/80 hover:text-foreground transition-colors">
            Home
          </button>
          <button onClick={() => { navigate("/"); setTimeout(() => scrollTo("services"), 100); }} className="text-sm font-semibold text-foreground hover:text-foreground transition-colors">
            Services
          </button>
          <button onClick={() => { navigate("/"); setTimeout(() => scrollTo("about"), 100); }} className="text-sm text-foreground/80 hover:text-foreground transition-colors">
            About
          </button>
        </div>

        <button
          onClick={() => navigate("/qualify")}
          className="hidden md:inline-flex text-sm px-5 py-2 rounded-full border border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-200"
        >
          Free Strategy Call
        </button>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-nav rounded-2xl mt-2 p-4 flex flex-col gap-3">
          <button onClick={() => { setMobileOpen(false); navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-sm text-foreground/80 text-left">Home</button>
          <button onClick={() => { setMobileOpen(false); navigate("/"); setTimeout(() => scrollTo("services"), 100); }} className="text-sm font-semibold text-foreground text-left">Services</button>
          <button onClick={() => { setMobileOpen(false); navigate("/"); setTimeout(() => scrollTo("about"), 100); }} className="text-sm text-foreground/80 text-left">About</button>
          <button
            onClick={() => { setMobileOpen(false); navigate("/qualify"); }}
            className="text-sm px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            Free Strategy Call
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
