import { motion } from "framer-motion";

export default function FloatingElements() {
  return (
    <>
      {/* Code symbols floating in background */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-blue-200 text-6xl font-mono opacity-10 pointer-events-none"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {"{}"}
      </motion.div>
      
      <motion.div
        className="absolute top-3/4 right-1/4 text-cyan-200 text-5xl font-mono opacity-10 pointer-events-none"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        {"</>"}
      </motion.div>
      
      <motion.div
        className="absolute top-1/2 left-1/6 text-blue-200 text-4xl font-mono opacity-10 pointer-events-none"
        animate={{
          y: [0, -25, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        {"()"}
      </motion.div>
      
      <motion.div
        className="absolute top-1/3 right-1/6 text-cyan-200 text-3xl font-mono opacity-10 pointer-events-none"
        animate={{
          y: [0, -18, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        {"[]"}
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/4 left-1/3 text-blue-200 text-4xl font-mono opacity-10 pointer-events-none"
        animate={{
          y: [0, -12, 0],
          x: [0, -5, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      >
        {"//"}
      </motion.div>
    </>
  );
}