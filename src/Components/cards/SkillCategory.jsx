// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const SkillCategory = ({ title, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16 flex flex-col items-center"
    >
      <h3 className="
        text-xl sm:text-2xl font-semibold mb-8
        text-(--page-primary)
        text-center
      ">
        {title}
      </h3>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } }
        }}
        className="
        grid place-items-center
        grid-cols-3
        min-[400px]:grid-cols-4
        sm:grid-cols-5
        md:grid-cols-6
        lg:grid-cols-7
        gap-6 sm:gap-8
        w-full
        "
      >
        {skills.map((skill, i) => (
          <SkillCard key={i} skill={skill} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SkillCategory;