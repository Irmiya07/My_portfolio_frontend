import { addSkill } from "../../apis/SkillService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const SkillForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", title);
      formData.append("description", description);
      formData.append("image", image);

      await addSkill(formData);
      alert("Skill added successfully!");
      setTitle("");
      setDescription("");
      setImage(null);
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Error adding skill:", error);
      alert("Failed to add skill. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-(--page-bg) flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-(--page-card) border border-(--page-border) rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <h2
          className="text-3xl font-bold mb-6 
          bg-linear-to-r from-(--page-primary) to-(--page-highlight) 
          bg-clip-text text-transparent"
        >
          Add New Skill
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Skill Name */}
          <div>
            <label className="block text-sm mb-1 text-(--page-text)">
              Skill Name
            </label>
            <input
              type="text"
              placeholder="Enter skill name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-xl border 
              border-(--page-border) bg-transparent 
              text-(--page-text) focus:outline-none 
              focus:ring-2 focus:ring-(--page-primary) transition"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm mb-1 text-(--page-text)">
              Description
            </label>
            <textarea
              placeholder="Enter skill description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              required
              className="w-full px-4 py-2 rounded-xl border 
              border-(--page-border) bg-transparent 
              text-(--page-text) focus:outline-none 
              focus:ring-2 focus:ring-(--page-accent) transition"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm mb-1 text-(--page-text)">
              Skill Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              required
              className="w-full px-4 py-2 rounded-xl border 
                border-(--page-border) bg-transparent 
                text-(--page-text) focus:outline-none 
                focus:ring-2 focus:ring-(--page-accent) transition"
            />

            {image && (
              <div className="mt-4">
                <img
                  src={image}
                  alt="Preview"
                  className="rounded-xl border border-(--page-border) shadow-md max-h-40"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white 
            bg-(--page-primary) hover:bg-(--page-highlight) 
            transition duration-300 shadow-md hover:shadow-lg"
          >
            Add Skill
          </button>
        </form>
      </div>
    </div>
  );
};
