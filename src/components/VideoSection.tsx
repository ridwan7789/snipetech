import { motion } from "framer-motion";
import { VideoPlayer } from "./VideoModal";

const videos = [
  { src: "/videos/sniptech-promo-1.mp4", title: "SnipTech Trading Bot Demo" },
  { src: "/videos/sniptech-promo-2.mp4", title: "How SnipTech Works" },
];

const VideoSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy/50 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(187_100%_50%_/_0.05)_0%,_transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            See <span className="gradient-text">SnipTech</span> in Action
          </h2>
          <p className="section-subtitle">
            Watch how our ultra-fast trading bot executes trades with precision and speed.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="max-w-4xl mx-auto">
          <VideoPlayer videos={videos} />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
