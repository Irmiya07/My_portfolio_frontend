// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { deleteSkill } from "../../apis/SkillService";
import { useState } from "react";

const SkillCard = ({ item }) => {
  const [showFull, setShowFull] = useState(false);
  const isLoggedIn = !!localStorage.getItem("token");

  if (!item) return null;

  const handleDelete = async () => {
    try {
      await deleteSkill(item._id);
      alert("Skill deleted successfully");
      window.location.reload();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const description = item?.description || "";
  const shortText = description.slice(0, 90);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative group w-full h-full"
    >
      {/* Animated Border */}
      <div
        className="absolute -inset-0.5 rounded-2xl blur-md opacity-70 
        animate-[borderMove_6s_linear_infinite]"
        style={{
          background: `
            linear-gradient(
              270deg,
              var(--page-primary),
              var(--page-accent),
              var(--page-highlight),
              var(--page-primary)
            )
          `,
          backgroundSize: "200% 200%",
        }}
      />

      {/* Card */}
      <div
        className="
          relative
          bg-(--page-card)
          text-(--page-text)
          border border-(--page-border)
          rounded-2xl
          shadow-xl
          overflow-hidden
          transition-all duration-500
          group-hover:scale-[1.02]
          h-full
          flex flex-col
        "
      >
        {/* Image Section (Fixed height for consistent cards) */}
{/* Image Section */}
<div className="h-32 w-full overflow-hidden">
  {item?.imgUrl ? (
    <img
      src={item.imgUrl}
      alt={item?.title || "skill"}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-sm">
      No Image
    </div>
  )}
</div>

        {/* Delete Button */}
        {isLoggedIn && (
          <button
            onClick={handleDelete}
            className="
              absolute top-3 right-3
              bg-(--page-card)
              p-2 rounded-full shadow-md
              hover:bg-red-100
              transition
            "
          >
            <Trash2 size={18} className="text-red-500" />
          </button>
        )}

        {/* Content */}
        <div className="p-4 text-center flex flex-col gap-2 grow">
          {/* Title */}
          <h2 className="text-lg sm:text-xl font-semibold">
            {item?.name || "Skill"}
          </h2>

          {/* Description */}
          {description && (
            <p className="text-sm opacity-80">
              {showFull ? description : shortText}
              {description.length > 90 && (
                <button
                  onClick={() => setShowFull(!showFull)}
                  className="ml-2 text-(--page-primary) font-medium"
                >
                  {showFull ? "Show Less" : "...More"}
                </button>
              )}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;