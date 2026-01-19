import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import sniptechLogo from "@/assets/sniptech-logo.jpg";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Networks", href: "#networks" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Security", href: "#security" },
  { name: "Roadmap", href: "#roadmap" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="fixed top-[42px] left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <motion.img
              src={sniptechLogo}
              alt="SnipTech"
              className="w-10 h-10 rounded-full"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            />
            <span className="font-heading text-xl font-bold gradient-text">
              SnipTech
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan to-purple transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="https://t.me/snipetechportal"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block btn-primary text-sm"
          >
            Launch Bot
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://t.me/snipetechportal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center text-sm"
                >
                  Launch Bot
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
