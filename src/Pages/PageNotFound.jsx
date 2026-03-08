// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

export  const  PageNotFound=()=> {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 text-(--page-text) px-6">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        {/* 404 Animated Text */}
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
          className="text-8xl font-extrabold tracking-widest"
        >
          404
        </motion.h1>

        <h2 className="text-2xl font-semibold mt-4">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 text-(--page-text)">
          The page you're looking for doesn’t exist or has been moved.
          Let’s get you back on track.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center mt-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-(--page-bg) text-indigo-600 px-5 py-2 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 bg-(--page-bg)/30 backdrop-blur-md px-5 py-2 rounded-xl font-semibold border border-white/40 hover:bg-black/50 transition"
          >
            <Home size={18} />
            Home
          </button>
        </div>
      </motion.div>
    </div>
  );
}