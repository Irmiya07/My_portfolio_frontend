import { addProject } from "../../apis/ProjectService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProjectForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  // Handle file selection (NO FileReader)
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
      formData.append("title", title);
      formData.append("description", description);
      formData.append("githubLink", githubLink);
      formData.append("liveLink", liveLink);
      formData.append("image", image); // must match upload.single("image")

      await addProject(formData);

      alert("Project added successfully!");

      setTitle("");
      setDescription("");
      setLiveLink("");
      setGithubLink("");
      setImage(null);

      navigate("/admin/dashboard");

    } catch (error) {
      console.error("Error adding project:", error);
      alert("Failed to add project. Please try again.");
    }
  };

return (
  <div className="min-h-screen bg-(--page-bg) flex items-center justify-center 
    px-4 sm:px-6 lg:px-8 
    py-8 sm:py-10">

    <div className="w-full max-w-sm sm:max-w-lg lg:max-w-3xl 
      bg-(--page-card) border border-(--page-border) 
      rounded-2xl shadow-xl 
      p-5 sm:p-8 lg:p-10 
      transition-all">

      {/* Heading */}
      <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-5 sm:mb-6 
        bg-linear-to-r from-(--page-primary) to-(--page-highlight) 
        bg-clip-text text-transparent text-center">
        Add New Project
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

        {/* Project Title */}
        <div>
          <label className="block text-sm sm:text-base mb-2 text-(--page-text)">
            Project Title
          </label>
          <input
            type="text"
            placeholder="Enter project title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 
            text-sm sm:text-base
            rounded-xl border border-(--page-border) 
            bg-transparent text-(--page-text)
            focus:outline-none focus:ring-2 focus:ring-(--page-primary)
            focus:border-transparent transition-all duration-300"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm sm:text-base mb-2 text-(--page-text)">
            Description
          </label>
          <textarea
            placeholder="Enter project description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="4"
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 
            text-sm sm:text-base
            rounded-xl border border-(--page-border) 
            bg-transparent text-(--page-text)
            focus:outline-none focus:ring-2 focus:ring-(--page-primary)
            focus:border-transparent transition-all duration-300"
          />
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm sm:text-base mb-2 text-(--page-text)">
              Live Link
            </label>
            <input
              type="text"
              placeholder="https://your-live-site.com"
              value={liveLink}
              onChange={(e) => setLiveLink(e.target.value)}
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 
              text-sm sm:text-base
              rounded-xl border border-(--page-border) 
              bg-transparent text-(--page-text)
              focus:outline-none focus:ring-2 focus:ring-(--page-primary)
              focus:border-transparent transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm sm:text-base mb-2 text-(--page-text)">
              GitHub Link
            </label>
            <input
              type="text"
              placeholder="https://github.com/..."
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 
              text-sm sm:text-base
              rounded-xl border border-(--page-border) 
              bg-transparent text-(--page-text)
              focus:outline-none focus:ring-2 focus:ring-(--page-primary)
              focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm sm:text-base mb-2 text-(--page-text)">
            Project Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            required
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 
            text-sm sm:text-base
            rounded-xl border border-(--page-border)
            bg-transparent text-(--page-text)
            focus:outline-none focus:ring-2 focus:ring-(--page-primary)
            transition-all duration-300 cursor-pointer"
          />

          {/* Preview */}
          {image && (
            <div className="mt-4 sm:mt-5 flex justify-center">
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="rounded-xl border border-(--page-border) 
                shadow-md 
                w-full max-w-xs sm:max-w-sm 
                max-h-52 sm:max-h-60 
                object-cover 
                transition-all duration-300 
                hover:scale-105"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2.5 sm:py-3 
          text-sm sm:text-base
          rounded-xl font-semibold text-white 
          bg-(--page-primary) hover:bg-(--page-highlight)
          active:scale-95 transition-all duration-300 
          shadow-md hover:shadow-xl"
        >
          Add Project
        </button>

      </form>
    </div>
  </div>
);
};