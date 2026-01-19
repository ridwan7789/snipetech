import { motion } from "framer-motion";

// Real blockchain network logos as SVG components
const EthereumLogo = () => (
  <svg viewBox="0 0 256 417" className="w-8 h-8">
    <path fill="#343434" d="m127.961 0-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"/>
    <path fill="#8C8C8C" d="M127.962 0 0 212.32l127.962 75.639V154.158z"/>
    <path fill="#3C3C3B" d="m127.961 312.187-1.575 1.92v98.199l1.575 4.601L256 236.587z"/>
    <path fill="#8C8C8C" d="M127.962 416.905v-104.72L0 236.585z"/>
    <path fill="#141414" d="m127.961 287.958 127.96-75.637-127.96-58.162z"/>
    <path fill="#393939" d="m.001 212.321 127.96 75.637V154.159z"/>
  </svg>
);

const BNBLogo = () => (
  <svg viewBox="0 0 126.61 126.61" className="w-8 h-8">
    <g fill="#F3BA2F">
      <path d="m38.73 53.2 24.59-24.58 24.6 24.6 14.3-14.31L63.32 0l-38.9 38.9zM0 63.31l14.3-14.31 14.31 14.31-14.31 14.3zM38.73 73.41l24.59 24.59 24.6-24.6 14.31 14.29-38.9 38.91-38.91-38.88zM98 63.31l14.3-14.31 14.31 14.3-14.31 14.31z"/>
      <path d="m77.83 63.3-14.51-14.52-10.73 10.73-1.24 1.23-2.54 2.54 14.51 14.5 14.51-14.47z"/>
    </g>
  </svg>
);

const SolanaLogo = () => (
  <svg viewBox="0 0 397.7 311.7" className="w-8 h-8">
    <linearGradient id="solana-a" x1="360.88" x2="141.21" y1="351.46" y2="-69.29" gradientTransform="matrix(1 0 0 -1 0 314)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#00FFA3"/>
      <stop offset="1" stopColor="#DC1FFF"/>
    </linearGradient>
    <path fill="url(#solana-a)" d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1z"/>
    <linearGradient id="solana-b" x1="264.83" x2="45.16" y1="401.6" y2="-19.15" gradientTransform="matrix(1 0 0 -1 0 314)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#00FFA3"/>
      <stop offset="1" stopColor="#DC1FFF"/>
    </linearGradient>
    <path fill="url(#solana-b)" d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1z"/>
    <linearGradient id="solana-c" x1="312.55" x2="92.88" y1="376.69" y2="-44.06" gradientTransform="matrix(1 0 0 -1 0 314)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#00FFA3"/>
      <stop offset="1" stopColor="#DC1FFF"/>
    </linearGradient>
    <path fill="url(#solana-c)" d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1z"/>
  </svg>
);

const ArbitrumLogo = () => (
  <svg viewBox="0 0 40 40" className="w-8 h-8">
    <path fill="#2D374B" d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"/>
    <path fill="#28A0F0" d="m23.32 21.63-2.65 4.2 5.49 8.09 3.26-1.88-6.1-10.41Z"/>
    <path fill="#28A0F0" d="m29.91 22.8-3.04-5.2-4.04 6.42 2.79 4.43 6.43-3.72-2.14-1.93Z"/>
    <path fill="#fff" d="m10.69 31.92 3.26 1.88 9.11-14.78-3.25-.02-9.12 12.92Z"/>
    <path fill="#fff" d="M26.87 17.6 20.05 6.2l-3.25-.02 6.81 11.44 3.26-.02Z"/>
    <path fill="#96BEDC" d="m30.54 25.35-2.14-1.93.12.2 2.72 4.51 1.14-.66-1.84-2.12Z"/>
    <path fill="#96BEDC" d="m10.69 31.92-1.97-3.32-.62.36 1.14 4.88 3.7.02-2.25-1.94Z"/>
  </svg>
);

const AvalancheLogo = () => (
  <svg viewBox="0 0 254 254" className="w-8 h-8">
    <circle cx="127" cy="127" r="127" fill="#E84142"/>
    <path fill="#fff" d="M171.8 130.3c4.4-7.6 11.5-7.6 15.9 0l27.4 48.1c4.4 7.6.8 13.8-8 13.8h-55.5c-8.7 0-12.3-6.2-8-13.8l28.2-48.1Zm-60.3-68.5c4.4-7.6 11.5-7.6 15.8 0l6.1 11.2 14.2 26c3.6 7.8 3.6 17 0 24.8l-37.6 65.1c-4.4 6.5-11.5 10.5-19.4 11.2H46.4c-8.8 0-12.4-6.1-8-13.7l73.1-124.6Z"/>
  </svg>
);

const PolygonLogo = () => (
  <svg viewBox="0 0 38.4 33.5" className="w-8 h-8">
    <path fill="#8247E5" d="M29 10.2c-.7-.4-1.6-.4-2.4 0L21 13.5l-3.8 2.1-5.5 3.3c-.7.4-1.6.4-2.4 0l-4.3-2.6c-.7-.4-1.2-1.2-1.2-2.1v-5c0-.8.4-1.6 1.2-2.1l4.3-2.5c.7-.4 1.6-.4 2.4 0l4.3 2.6c.7.4 1.2 1.2 1.2 2.1v3.3l3.8-2.2V7c0-.8-.4-1.6-1.2-2.1l-8-4.7c-.7-.4-1.6-.4-2.4 0L1.2 5C.4 5.4 0 6.2 0 7v9.4c0 .8.4 1.6 1.2 2.1l8.1 4.7c.7.4 1.6.4 2.4 0l5.5-3.2 3.8-2.2 5.5-3.2c.7-.4 1.6-.4 2.4 0l4.3 2.5c.7.4 1.2 1.2 1.2 2.1v5c0 .8-.4 1.6-1.2 2.1L29 29.2c-.7.4-1.6.4-2.4 0l-4.3-2.5c-.7-.4-1.2-1.2-1.2-2.1v-3.2l-3.8 2.2v3.3c0 .8.4 1.6 1.2 2.1l8.1 4.7c.7.4 1.6.4 2.4 0l8.1-4.7c.7-.4 1.2-1.2 1.2-2.1V17c0-.8-.4-1.6-1.2-2.1L29 10.2z"/>
  </svg>
);

const networks = [
  { name: "Ethereum", Logo: EthereumLogo },
  { name: "BNB Chain", Logo: BNBLogo },
  { name: "Solana", Logo: SolanaLogo },
  { name: "Arbitrum", Logo: ArbitrumLogo },
  { name: "Avalanche", Logo: AvalancheLogo },
  { name: "Polygon", Logo: PolygonLogo },
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
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
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
                  animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="absolute inset-0 rounded-full bg-cyan/30"
                />
                
                {/* Logo */}
                <div className="relative z-10">
                  <network.Logo />
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl bg-cyan/30" />
              </div>

              {/* Name */}
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
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
