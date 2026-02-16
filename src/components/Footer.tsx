import logo from "@/assets/hash-logo.png";
import { Linkedin, Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-14 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16">
        {/* Left — Brand + Description */}
        <div>
          <img src={logo} alt="HASH" className="h-10 w-auto mb-5" />
          <p className="text-foreground/70 text-base max-w-lg leading-relaxed">
            We help companies transform scattered processes and manual work into a single structured operating system that automates sales, support, and operations so you can reduce cost, improve clarity, and scale faster.
          </p>
        </div>

        {/* Right — Contact + Social */}
        <div className="flex flex-col gap-4 text-sm">
          <a
            href="mailto:info@athash.io"
            className="flex items-center gap-2.5 text-foreground/70 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            info@athash.io
          </a>
          <div className="flex items-center gap-2.5 text-foreground/70">
            <MapPin className="w-4 h-4" />
            Karachi, Pakistan
          </div>
          <div className="flex items-center gap-3 mt-2">
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
      </div>

      <p className="text-muted-foreground/50 text-xs mt-10">
        © {new Date().getFullYear()} HASH. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
