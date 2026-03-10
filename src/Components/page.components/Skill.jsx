import SkillCategory from "../cards/SkillCategory";
import { skillsData } from "../common/utility/skillData";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Skill = () => {
  return (
<section className="
      min-h-screen
      bg-(--page-bg)
      text-(--page-text)
      px-4 sm:px-6 lg:px-10 xl:px-16
      py-20
      flex flex-col items-center
    ">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-20"
      >
        Technical Skills
      </motion.h2>

      {/* Categories */}
      <div className="w-full max-w-6xl">
        {skillsData.map((group, i) => (
          <SkillCategory
            key={i}
            title={group.category}
            skills={group.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Skill;