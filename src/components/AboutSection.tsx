import { motion } from "framer-motion";
import { Zap, Brain, TrendingUp, Globe2 } from "lucide-react";

const stats = [
  { icon: Zap, value: "<0.1s", label: "Execution Speed" },
  { icon: Brain, value: "AI", label: "Powered Trading" },
  { icon: TrendingUp, value: "6+", label: "Blockchains" },
  { icon: Globe2, value: "24/7", label: "Automation" },
];

const AboutSection = () => {
  return (
    <section className="py-24 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-background to-navy" />

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
              About <span className="gradient-text">SnipTech</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              SnipTech is the most efficient and user-friendly on-chain automated trading 
              platform ever built. We're designed for traders who demand speed, security, 
              and simplicity.
            </p>
            <p className="text-muted-foreground mb-8">
              Our mission is simple: let you focus on what matters — <span className="text-foreground font-medium">your finances</span>, 
              not complexity. With AI-powered strategies, MEV protection, and multi-chain 
              support, SnipTech handles the technical heavy lifting so you can trade 
              with confidence.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "On-chain Automation",
                "AI-Powered Trading",
                "MEV Protection",
                "Multi-Chain Support",
              ].map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan to-purple" />
                  <span className="text-sm text-foreground">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-purple/20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-cyan" />
                </div>
                <div className="font-heading text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
