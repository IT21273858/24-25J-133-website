import { motion } from "framer-motion";

const shapes = Array.from({ length: 6 });

const ShapesOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {shapes.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 bg-blue-500 rounded-full opacity-30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [-100, window.innerHeight + 100],
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
          }}
          transition={{
            repeat: Infinity,
            duration: 10 + Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default ShapesOverlay;
