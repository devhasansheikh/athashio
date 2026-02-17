import logo from "@/assets/hash-logo.png";
import { Linkedin, Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-14 px-6 md:px-20 lg:px-[100px]">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_auto] gap-10 md:gap-20">
        {/* Left — Brand + Description + Social */}
        <div>
          <img src={logo} alt="HASH" className="h-12 w-auto mb-5" />
          <p className="text-foreground/70 text-base max-w-lg leading-relaxed mb-6">
            We help companies transform scattered processes and manual work into a single structured operating system that automates sales, support, and operations so you can reduce cost, improve clarity, and scale faster.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/at-hash/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-secondary/60 border border-border/50 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/30 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/athashofficial/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-secondary/60 border border-border/50 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/30 transition-all"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right — Contact cards */}
        <div className="flex flex-col gap-4">
          <div className="impact-card rounded-xl px-5 py-4 flex items-center gap-3">
            <Mail className="w-5 h-5 text-primary shrink-0" />
            <div>
              <span className="text-xs text-muted-foreground uppercase tracking-wide block">Email</span>
              <a href="mailto:info@athash.io" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                info@athash.io
              </a>
            </div>
          </div>
          <div className="impact-card rounded-xl px-5 py-4 flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary shrink-0" />
            <div>
              <span className="text-xs text-muted-foreground uppercase tracking-wide block">Office</span>
              <span className="text-sm text-foreground/80">Karachi, Pakistan</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground/50 text-xs mt-10">
        © {new Date().getFullYear()} HASH. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
