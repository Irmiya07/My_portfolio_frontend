import { getProjects } from "../../apis/ProjectService";
import { useEffect, useState } from "react";
import ProjectCard from "../cards/ProjectCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const cardVariants = {
    hidden: {
      opacity: 0,
      rotate: -8,
      y: 40,
    },
    show: {
      opacity: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };
useEffect(() => {
  const fetchProjects = async () => {
    try {
      const res = await getProjects();
      const projectArray = res?.data?.projects || res?.projects || res || [];
      setProjects(Array.isArray(projectArray) ? projectArray : []);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects([]);
    }
  };

  fetchProjects();
}, []);
  return (
    <div className="min-h-screen bg-(--page-bg)/90 text-(--page-text) px-4 sm:px-8 lg:px-16 py-12 scroll-smooth">
      {/* Page Header */}
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        {/* Animated Title (Looping Effect) */}
        <motion.h1
          className="text-3xl sm:text-5xl font-extrabold bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 
    text-transparent bg-clip-text"
          animate={{
            y: [0, -6, 0],
            scale: [1, 1.03, 1],
            opacity: [1, 0.9, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          My Projects
        </motion.h1>

        {/* Animated Subtitle */}
        <p
          className="mt-4 text-base sm:text-lg opacity-80 max-w-2xl mx-auto text-left sm:text-left md:text-center lg:text-center lg:opacity-80"
        >
          A showcase of my work in full-stack development, web applications, and
          AI/ML, highlighting real-world problem solving, scalable system
          design, and modern user-focused interfaces built using current
          technologies.
        </p>
      </motion.div>

      {/* Grid */}
<motion.div
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.15 }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-12"
>
{Array.isArray(projects) &&
  projects.map((item, index) => (
    <motion.div
      key={index}
      variants={cardVariants}
      whileHover={{ scale: 1.05, rotate: 1 }}
    >
      <ProjectCard item={item} />
    </motion.div>
))}
</motion.div>
    </div>
  );
};
export default Project;
