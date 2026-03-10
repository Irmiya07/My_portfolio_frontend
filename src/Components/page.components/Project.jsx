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
<div className="
min-h-screen bg-(--page-bg)/90 text-(--page-text)
px-3 sm:px-6 lg:px-10 xl:px-16
py-10 sm:py-14 lg:py-16
scroll-smooth
">

  {/* Page Header */}
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}
    className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-5xl mx-auto"
  >
    {/* Animated Title */}
    <motion.h1
      className="
      text-2xl
      min-[400px]:text-3xl
      sm:text-4xl
      md:text-5xl
      font-extrabold
      bg-linear-to-r from-blue-500 via-purple-500 to-pink-500
      text-transparent bg-clip-text
      "
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

    {/* Subtitle */}
    <p
      className="
      mt-4
      text-sm
      min-[400px]:text-base
      sm:text-lg
      opacity-80
      max-w-2xl
      mx-auto
      text-center
      "
    >
      A showcase of my work in full-stack development, web applications, and
      AI/ML, highlighting real-world problem solving, scalable system
      design, and modern user-focused interfaces built using current
      technologies.
    </p>
  </motion.div>

  {/* Projects Grid */}
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.15 }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.08 } },
    }}
    className="
    max-w-7xl mx-auto
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-6
    sm:gap-8
    lg:gap-10
    xl:gap-12
    "
  >
    {Array.isArray(projects) &&
      projects.map((item, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={{ scale: 1.04 }}
        >
          <ProjectCard item={item} />
        </motion.div>
      ))}
  </motion.div>

</div>
  );
};
export default Project;
