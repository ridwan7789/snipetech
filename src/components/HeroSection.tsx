import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Bot } from "lucide-react";
import sniptechLogo from "@/assets/sniptech-logo.jpg";
import sniptechPhones from "@/assets/sniptech-phones.jpg";
import BlockchainParticles from "./BlockchainParticles";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(187_100%_50%_/_0.05)_0%,_transparent_70%)]" />

      {/* Blockchain Particles Animation */}
      <BlockchainParticles />

      {/* Floating Logo Background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-10 w-64 h-64 opacity-5 hidden lg:block"
      >
        <img src={sniptechLogo} alt="" className="w-full h-full" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Zap className="w-4 h-4 text-cyan" />
              <span className="text-sm text-muted-foreground">Ultra-Fast On-Chain Trading</span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">The Future of</span>
              <br />
              <span className="gradient-text glow-text">DeFi Trading</span>
              <br />
              <span className="text-foreground">Is Here</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Snip, copy, and trade across multiple blockchains with MEV-protected,
              lightning-fast execution and the lowest fees on the market.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              {[
                { icon: Zap, label: "Lightning Fast", value: "<0.1s" },
                { icon: Shield, label: "MEV Protected", value: "100%" },
                { icon: Bot, label: "AI Powered", value: "24/7" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://t.me/SnipeTechBot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2"
              >
                Launch Telegram Bot
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#features" className="btn-secondary flex items-center justify-center gap-2">
                Explore Features
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan/20 to-purple/20 rounded-3xl blur-3xl" />

            {/* Floating Animation */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <img
                src={sniptechPhones}
                alt="SnipTech Trading Platform"
                className="w-full max-w-lg mx-auto rounded-2xl"
              />

              {/* Decorative Elements */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-cyan/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple/20 rounded-full blur-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
