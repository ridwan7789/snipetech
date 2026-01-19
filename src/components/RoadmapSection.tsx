import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock } from "lucide-react";

const roadmapItems = [
  {
    title: "Telegram Bot Launch",
    description: "Full-featured Telegram trading bot with snipe and copy trading capabilities.",
    status: "completed",
    quarter: "Q4 2025",
  },
  {
    title: "Web Trading App",
    description: "Comprehensive web dashboard for advanced trading and analytics.",
    status: "completed",
    quarter: "Q4 2025",
  },
  {
    title: "Mobile App (iOS & Android)",
    description: "Native mobile applications for trading on the go.",
    status: "in-progress",
    quarter: "Q1 2026",
  },
  {
    title: "Advanced AI Trading Engine",
    description: "Machine learning-powered trading strategies and market predictions.",
    status: "upcoming",
    quarter: "Q2 2026",
  },
  {
    title: "Cross-Chain Automation",
    description: "Seamless cross-chain trading and arbitrage opportunities.",
    status: "upcoming",
    quarter: "Q3 2026",
  },
  {
    title: "Community Revenue Sharing",
    description: "Transparent profit-sharing model for token holders.",
    status: "upcoming",
    quarter: "Q4 2026",
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="w-6 h-6 text-cyan" />;
    case "in-progress":
      return <Clock className="w-6 h-6 text-purple" />;
    default:
      return <Circle className="w-6 h-6 text-muted-foreground" />;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return { text: "Completed", className: "bg-cyan/20 text-cyan border-cyan/30" };
    case "in-progress":
      return { text: "In Progress", className: "bg-purple/20 text-purple border-purple/30" };
    default:
      return { text: "Upcoming", className: "bg-muted text-muted-foreground border-border" };
  }
};

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/5 to-transparent" />

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
            Future <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="section-subtitle">
            Our journey to revolutionize on-chain trading. See what's coming next.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {roadmapItems.map((item, index) => {
            const badge = getStatusBadge(item.status);
            
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 pb-12 last:pb-0"
              >
                {/* Timeline Line */}
                {index < roadmapItems.length - 1 && (
                  <div className="absolute left-[11px] top-8 bottom-0 w-px bg-gradient-to-b from-cyan/50 to-border" />
                )}

                {/* Status Icon */}
                <div className="absolute left-0 top-0">
                  {getStatusIcon(item.status)}
                </div>

                {/* Card */}
                <div className="glass-card p-6 ml-4">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    {/* Quarter */}
                    <span className="text-sm font-semibold text-cyan">
                      {item.quarter}
                    </span>
                    
                    {/* Status Badge */}
                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${badge.className}`}>
                      {badge.text}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
