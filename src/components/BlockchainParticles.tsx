import { motion } from "framer-motion";
import { useMemo } from "react";

const BlockchainParticles = () => {
  // Generate random particles
  const particles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.1,
    }));
  }, []);

  // Generate data streams (vertical lines)
  const dataStreams = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      height: Math.random() * 200 + 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 3,
    }));
  }, []);

  // Generate horizontal connection lines
  const connectionLines = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      y: Math.random() * 100,
      width: Math.random() * 300 + 100,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
      direction: Math.random() > 0.5 ? 1 : -1,
    }));
  }, []);

  // Blockchain nodes
  const nodes = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      size: Math.random() * 8 + 4,
      pulseDelay: Math.random() * 2,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, hsl(187 100% 50% / ${particle.opacity}), transparent)`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [particle.opacity, particle.opacity * 2, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Data Streams (Vertical) */}
      {dataStreams.map((stream) => (
        <motion.div
          key={`stream-${stream.id}`}
          className="absolute w-px"
          style={{
            left: `${stream.x}%`,
            top: "-20%",
            height: stream.height,
            background: "linear-gradient(180deg, transparent, hsl(187 100% 50% / 0.3), transparent)",
          }}
          animate={{
            y: ["0%", "150%"],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: stream.duration,
            delay: stream.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Connection Lines (Horizontal) */}
      {connectionLines.map((line) => (
        <motion.div
          key={`line-${line.id}`}
          className="absolute h-px"
          style={{
            top: `${line.y}%`,
            left: line.direction > 0 ? "-20%" : "100%",
            width: line.width,
            background: "linear-gradient(90deg, transparent, hsl(262 83% 58% / 0.2), hsl(187 100% 50% / 0.3), transparent)",
          }}
          animate={{
            x: line.direction > 0 ? ["0%", "150%"] : ["0%", "-150%"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: line.duration,
            delay: line.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Blockchain Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={`node-${node.id}`}
          className="absolute"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
        >
          {/* Pulse Ring */}
          <motion.div
            className="absolute rounded-full border border-cyan/30"
            style={{
              width: node.size * 3,
              height: node.size * 3,
              left: -node.size,
              top: -node.size,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 3,
              delay: node.pulseDelay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          {/* Core */}
          <motion.div
            className="rounded-full"
            style={{
              width: node.size,
              height: node.size,
              background: `radial-gradient(circle, hsl(187 100% 50% / 0.8), hsl(262 83% 58% / 0.4))`,
              boxShadow: `0 0 ${node.size * 2}px hsl(187 100% 50% / 0.3)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              delay: node.pulseDelay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(187 100% 50%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(187 100% 50%) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Hexagonal Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <polygon 
              points="24.8,22 37.3,29.2 37.3,43.4 24.8,50.6 12.3,43.4 12.3,29.2" 
              fill="none" 
              stroke="hsl(187 100% 50%)" 
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  );
};

export default BlockchainParticles;
