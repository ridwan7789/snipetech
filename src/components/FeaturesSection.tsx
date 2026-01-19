import { motion } from "framer-motion";
import { 
  Bot, 
  Globe, 
  Smartphone, 
  Copy, 
  TrendingUp, 
  Rocket, 
  Droplets, 
  Shield, 
  Brain, 
  Coins, 
  Users, 
  Percent 
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Telegram Sniper Bot",
    description: "Execute trades instantly via Telegram with our powerful sniper bot interface.",
  },
  {
    icon: Globe,
    title: "Web Trading App",
    description: "Full-featured web dashboard for advanced trading and portfolio management.",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Native Android & iOS apps coming soon for trading on the go.",
    badge: "Soon",
  },
  {
    icon: Copy,
    title: "Copy Trading",
    description: "Mirror successful traders automatically and earn like the pros.",
  },
  {
    icon: TrendingUp,
    title: "Limit Orders",
    description: "Set limit buy & sell orders that execute automatically at your target price.",
  },
  {
    icon: Rocket,
    title: "Presale Sniping",
    description: "Be first to buy new tokens at launch with automated presale participation.",
  },
  {
    icon: Droplets,
    title: "Liquidity Sniping",
    description: "Instantly detect and trade new liquidity additions before anyone else.",
  },
  {
    icon: Shield,
    title: "MEV Protection",
    description: "Advanced anti-frontrunning and sandwich attack protection for all trades.",
  },
  {
    icon: Brain,
    title: "AI Trading",
    description: "Let artificial intelligence analyze markets and execute optimal strategies.",
  },
  {
    icon: Coins,
    title: "Revenue Sharing",
    description: "Earn a share of platform revenue through our transparent sharing model.",
  },
  {
    icon: Users,
    title: "Referral Program",
    description: "Invite friends and earn passive income with our unique referral system.",
  },
  {
    icon: Percent,
    title: "Lowest Fees",
    description: "Industry-leading low fees so you keep more of your trading profits.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to trade smarter, faster, and more profitably across multiple blockchains.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="feature-card group"
            >
              {/* Badge */}
              {feature.badge && (
                <span className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold rounded-full bg-purple/20 text-purple border border-purple/30">
                  {feature.badge}
                </span>
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-purple/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-cyan" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
