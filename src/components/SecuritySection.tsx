import { motion } from "framer-motion";
import { Shield, Lock, Eye, Fingerprint } from "lucide-react";
import sniptechLogo from "@/assets/sniptech-logo.jpg";

const securityFeatures = [
  {
    icon: Shield,
    title: "MEV Protection",
    description: "All transactions are protected against MEV extraction, ensuring fair execution prices.",
  },
  {
    icon: Lock,
    title: "Anti Front-Running",
    description: "Advanced algorithms prevent bots from front-running your trades.",
  },
  {
    icon: Eye,
    title: "Anti Sandwich Attacks",
    description: "Smart routing protects you from sandwich attacks that steal your profits.",
  },
  {
    icon: Fingerprint,
    title: "Secure Smart Contracts",
    description: "Audited contracts with multi-sig security for maximum fund safety.",
  },
];

const SecuritySection = () => {
  return (
    <section id="security" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-left mb-6">
              Bank-Grade <span className="gradient-text">Security</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Your funds and trades are protected by cutting-edge security measures, 
              ensuring you can trade with complete peace of mind.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 items-start group"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-cyan" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan/10 to-purple/10 rounded-full blur-[80px]" />

            {/* Rotating Shield */}
            <div className="relative flex items-center justify-center">
              {/* Outer Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-80 h-80 rounded-full border border-cyan/20"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan glow-cyan" />
              </motion.div>

              {/* Middle Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-60 h-60 rounded-full border border-purple/30"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-purple glow-purple" />
              </motion.div>

              {/* Inner Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-40 h-40 rounded-full border border-cyan/40"
              >
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan" />
              </motion.div>

              {/* Center Logo */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative z-10"
              >
                <img
                  src={sniptechLogo}
                  alt="SnipTech Security"
                  className="w-32 h-32 rounded-full glow-cyan"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
