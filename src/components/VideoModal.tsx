import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

const VideoModal = ({ isOpen, onClose, videoSrc }: VideoModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/90 backdrop-blur-lg z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-50 flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-5xl mx-auto glass-card overflow-hidden">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>

              {/* Video */}
              <video
                src={videoSrc}
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

interface VideoThumbnailProps {
  videoSrc: string;
  title: string;
  onPlay: () => void;
}

export const VideoThumbnail = ({ title, onPlay }: VideoThumbnailProps) => {
  return (
    <motion.button
      onClick={onPlay}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative group glass-card overflow-hidden aspect-video w-full"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-purple/10 to-background" />
      
      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-cyan to-purple flex items-center justify-center glow-cyan"
        >
          <Play className="w-6 h-6 md:w-8 md:h-8 text-background ml-1" fill="currentColor" />
        </motion.div>
      </div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
        <p className="text-sm font-medium text-foreground">{title}</p>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.button>
  );
};

interface VideoPlayerProps {
  videos: { src: string; title: string }[];
}

export const VideoPlayer = ({ videos }: VideoPlayerProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const handlePlay = (videoSrc: string) => {
    setCurrentVideo(videoSrc);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <VideoThumbnail
              videoSrc={video.src}
              title={video.title}
              onPlay={() => handlePlay(video.src)}
            />
          </motion.div>
        ))}
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoSrc={currentVideo}
      />
    </>
  );
};

export default VideoModal;
