import { motion } from "framer-motion";
import { Rocket, ExternalLink, Sparkles } from "lucide-react";

const AnnouncementBanner = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-[60] overflow-hidden bg-gradient-to-r from-purple/30 via-cyan/20 to-purple/30 border-b border-cyan/30 backdrop-blur-sm"
    >
      {/* Animated Background */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan/20 to-transparent"
      />

      <div className="container mx-auto px-4 py-2.5 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
          {/* Icon */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="hidden sm:flex items-center gap-1"
          >
            <Rocket className="w-4 h-4 text-cyan" />
            <Sparkles className="w-3 h-3 text-purple" />
          </motion.div>

          {/* Text */}
          <p className="text-xs sm:text-sm font-medium">
            <span className="hidden sm:inline"> </span>
            <span className="text-foreground font-bold">$SNIPE Token</span>
            <span className="text-muted-foreground"> launching soon on </span>
            <span className="gradient-text font-bold">Solana</span>
            <span className="text-muted-foreground"> via </span>
            <span className="text-cyan font-bold">PumpFun</span>
            <span className="text-muted-foreground hidden sm:inline"> — Don't Miss Out!</span>
          </p>

          {/* CTA Button */}
          <a
            href="https://t.me/SnipeTech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-cyan to-purple text-[10px] sm:text-xs font-bold text-background hover:shadow-lg hover:shadow-cyan/40 transition-all duration-300 whitespace-nowrap"
          >
            <span className="hidden sm:inline">Join Waitlist</span>
            <span className="sm:hidden">Join</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Pulse Effect */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-r from-cyan/5 via-purple/10 to-cyan/5 pointer-events-none"
      />
    </motion.div>
  );
};

export default AnnouncementBanner;
