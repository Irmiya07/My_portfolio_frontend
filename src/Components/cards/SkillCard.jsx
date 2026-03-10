// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ rotateX: 10, rotateY: -10, scale: 1.1 }}
      transition={{ type: "spring", stiffness: 180 }}
      className="group perspective flex justify-center"
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="
        flex flex-col items-center justify-center
        w-20 h-20
        min-[400px]:w-24 min-[400px]:h-24
        sm:w-28 sm:h-28 md:w-32 md:h-32
        rounded-xl
        bg-(--page-card)
        border border-(--page-border)
        shadow-lg
        transition-all duration-500
        group-hover:shadow-2xl
      "
      >
        <img
          src={skill.icon}
          alt={skill.name}
          className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${
    skill.name === "GitHub" ? "dark:invert" : ""
  }`}

        />
        <p className="mt-2 text-[10px] min-[400px]:text-xs sm:text-sm font-medium text-center">
          {skill.name}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;