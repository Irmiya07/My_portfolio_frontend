import { addCertificate } from "../../apis/CertificateService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CertificateForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
      formData.append("image", image); // must match upload.single("image")

      await addCertificate(formData);

      alert("Certificate added successfully!");

      setTitle("");
      setDescription("");
      setImage(null);

      navigate("/admin/dashboard");

    } catch (error) {
      console.error("Error adding certificate:", error);
      alert("Failed to add certificate. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-(--page-bg) flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl bg-(--page-card) border border-(--page-border) rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 transition-all">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 
          bg-linear-to-r from-(--page-primary) to-(--page-highlight) 
          bg-clip-text text-transparent text-center">
          Add New Certificate
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Certificate Title */}
          <div>
            <label className="block text-sm mb-2 text-(--page-text)">
              Certificate Name
            </label>
            <input
              type="text"
              placeholder="Enter certificate title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-(--page-border) 
              bg-transparent text-(--page-text)
              focus:outline-none focus:ring-2 focus:ring-(--page-primary)
              focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm mb-2 text-(--page-text)">
              Description
            </label>
            <textarea
              placeholder="Enter certificate description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              required
              className="w-full px-4 py-3 rounded-xl border border-(--page-border) 
              bg-transparent text-(--page-text)
              focus:outline-none focus:ring-2 focus:ring-(--page-primary)
              focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm mb-2 text-(--page-text)">
              Certificate Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              required
              className="w-full px-4 py-3 rounded-xl border border-(--page-border)
              bg-transparent text-(--page-text)
              focus:outline-none focus:ring-2 focus:ring-(--page-primary)
              transition-all duration-300 cursor-pointer"
            />

            {/* Preview */}
            {image && (
              <div className="mt-5 flex justify-center">
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="rounded-xl border border-(--page-border) shadow-md max-h-56 object-cover transition-all duration-300 hover:scale-105"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white 
            bg-(--page-primary) hover:bg-(--page-highlight)
            active:scale-95 transition-all duration-300 
            shadow-md hover:shadow-xl"
          >
            Add Certificate
          </button>

        </form>
      </div>
    </div>
  );
};