// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-(--page-bg)">

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-4"
      >

        {/* Logo */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold text-(--page-text)"
        >
          Irmiya<span className="text-purple-500">.dev</span>
        </motion.h1>

        {/* Loading Dots */}
        <motion.div
          className="flex gap-2"
          initial="start"
          animate="end"
          transition={{ staggerChildren: 0.2, repeat: Infinity }}
        >
          <motion.span
            className="w-2 h-2 bg-purple-500 rounded-full"
            variants={{
              start: { y: 0 },
              end: { y: -10 }
            }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.span
            className="w-2 h-2 bg-purple-500 rounded-full"
            variants={{
              start: { y: 0 },
              end: { y: -10 }
            }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.span
            className="w-2 h-2 bg-purple-500 rounded-full"
            variants={{
              start: { y: 0 },
              end: { y: -10 }
            }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>

        <p className="text-sm opacity-70 text-(--page-text)">
          Loading My Portfolio...
        </p>

      </motion.div>
    </div>
  );
};

export default Loader;