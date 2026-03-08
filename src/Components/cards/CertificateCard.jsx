/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { deleteCertificate } from "../../apis/CertificateService";
import { useState } from "react";

const CertificateCard = ({ item }) => {
  if (!item) return null;

  const [showFull, setShowFull] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteCertificate(item._id);
      alert("Certificate deleted successfully");
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
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative group w-full"
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
          backgroundSize: "400% 400%"
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
        flex flex-col
        h-full
      "
      >
        {/* Certificate Image */}
        <figure className="overflow-hidden relative">
          <img
            src={item?.imgUrl}
            alt={item?.title}
            className="h-32 sm:h-48 w-full object-cover 
            transition-transform duration-500 
            group-hover:scale-105"
          />

          {/* Delete Button */}
          {isLoggedIn && (
            <button
              onClick={handleDelete}
              className="
                absolute top-3 right-3
                bg-(--page-card)
                p-2 rounded-full shadow-md
                hover:bg-red-100
                dark:hover:bg-red-900
                transition
              "
            >
              <Trash2 size={18} className="text-red-500" />
            </button>
          )}
        </figure>

        {/* Text Content */}
        <div className="p-4 space-y-3 flex flex-col grow">
          <h2 className="text-lg sm:text-xl font-semibold line-clamp-2 min-h-12">
            {item?.title}
          </h2>

          {/* Description */}
          <div className="text-sm opacity-80">
            <p className="line-clamp-3">
              {showFull ? description : shortText}
            </p>

            {description.length > 120 && (
              <button
                onClick={() => setShowFull(!showFull)}
                className="mt-1 text-xs font-semibold text-(--page-primary) hover:underline"
              >
                {showFull ? "Show Less ↑" : "Read More →"}
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;