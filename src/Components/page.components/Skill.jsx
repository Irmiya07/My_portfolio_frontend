import SkillCard from "../cards/SkillCard";
import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import {motion, transform} from "framer-motion";
import { getSkills } from "../../apis/SkillService";


const Skill = () => {
    const [skills, setSkills] = useState([]);

    const cardVariants={
      hidden:{
        opacity:0,
        rotate:-8,
        y:40,
      },
      show:{
        opacity:1,
        rotate:0,
        y:0,
        transition:{
          duration:0.35,
          ease:"easeInOut",
        },
      },
    };

useEffect(() => {
  const fetchSkills = async () => {
    try {
      const res = await getSkills();
      const skillArray =
        res?.data?.skills || res?.skills || res || [];
      setSkills(Array.isArray(skillArray) ? skillArray : []);
    } catch (error) {
      console.error("Error fetching Skills:", error);
      setSkills([]);
    }
  };

  fetchSkills();
}, []);
  return (
    <div className="min-h-screen bg-(--page-bg)/80 text-(--page-text) px-4 sm:px-8  py-12 scroll-smooth">

      {/* Header Section */}
      <div

  className="text-center mb-16"
>
<motion.h1
  className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-size-[300%_300%] bg-clip-text text-transparent"
  animate={{
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "linear"
  }}
>
  Technical Skills
</motion.h1>

  <p className="mt-3 opacity-80 max-w-2xl mx-auto text-left sm:text-left md:text-center lg:text-center lg:opacity-80">
    Technologies, tools, and frameworks I work with to build scalable
    and production-ready applications.
  </p>
</div>

      {/* ✅ Skills Grid with Smooth Stagger Animation */}
    <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{once:true,amount:0.1}}
    variants={{
      hidden:{},
      show:{
        transition:{
          staggerChildren:0.1
        },
      },
    }}
    className="
    grid 
    sm:grid-cols-1
    md:grid-cols-2
    lg:grid-cols-4
    xl:grid-cols-5
    gap-8
    lg:gap-8
    ">{Array.isArray(skills) &&
  skills.map((item, index) => (
    <motion.div
      key={index}
      variants={cardVariants}
      whileHover={{ scale: 1.05, rotate: 3 }}
      className="w-full"
    >
      <SkillCard item={item} />
    </motion.div>
))}
    </motion.div>

    </div>
  );
};
export default Skill;