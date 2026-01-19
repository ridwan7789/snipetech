import { motion } from "framer-motion";

const networks = [
  { name: "Ethereum", symbol: "ETH", color: "#627EEA" },
  { name: "BNB Chain", symbol: "BNB", color: "#F3BA2F" },
  { name: "Solana", symbol: "SOL", color: "#9945FF" },
  { name: "Arbitrum", symbol: "ARB", color: "#28A0F0" },
  { name: "Avalanche", symbol: "AVAX", color: "#E84142" },
  { name: "Polygon", symbol: "MATIC", color: "#8247E5" },
];

const NetworksSection = () => {
  return (
    <section id="networks" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[100px]" />

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
            Multi-Chain <span className="gradient-text">Support</span>
          </h2>
          <p className="section-subtitle">
            Trade seamlessly across the most popular blockchain networks with unified execution.
          </p>
        </motion.div>

        {/* Networks Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {networks.map((network, index) => (
            <motion.div
              key={network.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center gap-4"
            >
              {/* Icon Circle */}
              <div className="network-icon relative group cursor-pointer">
                {/* Pulse Animation */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: network.color }}
                />
                
                {/* Symbol */}
                <span
                  className="font-heading text-xl font-bold relative z-10"
                  style={{ color: network.color }}
                >
                  {network.symbol}
                </span>

                {/* Hover Glow */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
                  style={{ backgroundColor: network.color + "40" }}
                />
              </div>

              {/* Name */}
              <span className="text-sm font-medium text-muted-foreground">
                {network.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* More Coming Soon */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          More networks coming soon...
        </motion.p>
      </div>
    </section>
  );
};

export default NetworksSection;
