import { motion } from "framer-motion";
import { Send, ExternalLink } from "lucide-react";
import sniptechLogo from "@/assets/sniptech-logo.jpg";

const footerLinks = [
  { name: "Features", href: "#features" },
  { name: "Networks", href: "#networks" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Security", href: "#security" },
  { name: "Roadmap", href: "#roadmap" },
];

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#" className="flex items-center gap-3">
              <motion.img
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                src={sniptechLogo}
                alt="SnipTech"
                className="w-10 h-10 rounded-full"
              />
              <span className="font-heading text-xl font-bold gradient-text">
                SnipTech
              </span>
            </a>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Ultra-fast on-chain trading for the future of DeFi
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social / Telegram */}
          <a
            href="https://t.me/snipetechportal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan hover:text-foreground transition-colors"
          >
            <Send className="w-5 h-5" />
            <span className="text-sm font-medium">@snipetechportal</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <p className="text-xs text-muted-foreground/60 text-center max-w-4xl mx-auto">
            <strong>Disclaimer:</strong> Trading cryptocurrencies involves significant risk and may not be suitable for all investors. 
            Past performance is not indicative of future results. This website does not constitute financial advice. 
            Always conduct your own research and consult with a qualified financial advisor before making any investment decisions.
          </p>
          <p className="text-xs text-muted-foreground/40 text-center mt-4">
            © {new Date().getFullYear()} SnipTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
