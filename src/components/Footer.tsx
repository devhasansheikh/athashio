import logo from "@/assets/hash-logo.png";

const Footer = () => (
  <footer className="border-t border-border py-12 px-6">
    <div className="max-w-5xl mx-auto text-left">
      <img src={logo} alt="HASH" className="h-8 w-auto mb-4" />
      <p className="text-foreground/70 text-base max-w-md">
        Operational systems and automation for founders who want clarity and control.
      </p>
      <p className="text-muted-foreground text-sm mt-6">
        HASH Ops is not a tool — it's a system built around your business.
      </p>
      <p className="text-muted-foreground/50 text-xs mt-3">
        © {new Date().getFullYear()} HASH. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
