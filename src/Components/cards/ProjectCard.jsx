import { Trash2 } from "lucide-react";
import { deleteProject } from "../../apis/ProjectService";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";

const ProjectCard = ({ item }) => {

  const [showFull, setShowFull] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteProject(item._id);
      alert("Project deleted successfully");
      window.location.reload();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const isLoggedIn = localStorage.getItem("token");

  const description = item?.description || "";
  const shortText = description.slice(0, 120);

  return (
<motion.div
  whileHover={{ y: -6 }}
  transition={{ type: "spring", stiffness: 180 }}
  className="relative group w-full"
>
  {/* Animated Moving Border */}
  <div
    className="absolute -inset-0.5 rounded-2xl blur-md opacity-70 
    animate-[borderMove_6s_linear_infinite]"
    style={{
      background: `linear-gradient(
        270deg,
        var(--page-primary),
        var(--page-accent),
        var(--page-highlight),
        var(--page-primary)
      )`,
      backgroundSize: "400% 400%",
    }}
  />

  {/* Card */}
  <div
    className="
    relative bg-(--page-card) text-(--page-text)
    border border-(--page-border)
    rounded-2xl shadow-xl overflow-hidden
    transition-all duration-500
    group-hover:scale-[1.015]
    "
  >
    {/* Image */}
    <figure className="w-full overflow-hidden
    h-44 min-[400px]:h-48 sm:h-56 md:h-52 lg:h-56">
      <img
        src={item?.imageUrl}
        alt={item?.title}
        className="w-full h-full object-cover
        transition-transform duration-500 group-hover:scale-105"
      />
    </figure>

    {/* Delete Button */}
    {isLoggedIn && (
      <button
        onClick={handleDelete}
        className="
        absolute top-2 right-2
        bg-(--page-card)
        p-1.5 sm:p-2
        rounded-full shadow-md
        hover:bg-red-100 dark:hover:bg-red-900
        transition
        "
      >
        <Trash2 size={16} className="text-red-500" />
      </button>
    )}

    {/* Card Content */}
    <div className="p-4 sm:p-5 space-y-3">

      {/* Title */}
      <h2 className="text-base min-[400px]:text-lg sm:text-xl font-semibold">
        {item?.title}
      </h2>

      {/* Description */}
      <div className="text-xs min-[400px]:text-sm opacity-80">
        <p>{showFull ? description : shortText}</p>

        {description.length > 120 && (
          <button
            onClick={() => setShowFull(!showFull)}
            className="mt-1 text-xs font-semibold text-(--page-primary) hover:underline"
          >
            {showFull ? "Show Less ↑" : "Read More →"}
          </button>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-2 sm:gap-3 mt-4 flex-wrap">

        {/* Source Code */}
        {item?.githubLink && (
          <motion.a
            href={item.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="
            flex-1 min-w-30
            text-center
            px-3 py-2
            text-xs min-[400px]:text-sm sm:text-base
            rounded-lg
            border border-(--page-primary)
            text-(--page-primary)
            hover:bg-(--page-primary) hover:text-white
            transition-all duration-300
            "
          >
            Source Code
          </motion.a>
        )}

        {/* Live */}
        {item?.liveLink && (
          <motion.a
            href={item.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="
            flex-1 min-w-30
            text-center
            px-3 py-2
            text-xs min-[400px]:text-sm sm:text-base
            rounded-lg
            bg-(--page-primary) text-white
            hover:bg-(--page-highlight)
            transition-all duration-300
            "
          >
            Live
          </motion.a>
        )}
      </div>
    </div>
  </div>
</motion.div>
  );
};

export default ProjectCard;