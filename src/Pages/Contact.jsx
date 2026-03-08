import Swal from "sweetalert2";

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "c2d59f27-f93e-40f7-84ae-6ab4ddfd29dc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {

      Swal.fire({
        title: "Message Sent!",
        text: "Thank you for contacting me.",
        icon: "success",
        confirmButtonColor: "#6366f1",
      });

      event.target.reset();

    } else {

      Swal.fire({
        title: "Error",
        text: "Something went wrong. Please try again.",
        icon: "error",
      });

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-(--page-bg) text-(--page-text) px-6 py-20">

      {/* Bigger Container */}
      <div className="w-full max-w-7xl bg-(--page-card) backdrop-blur-md p-8 rounded-3xl shadow-2xl">

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10
        bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 
        text-transparent bg-clip-text">
          Contact Me
        </h1>

        {/* Form */}
        <form onSubmit={onSubmit} className="flex flex-col gap-6">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-4 text-lg rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:border-blue-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-4 text-lg rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:border-blue-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            required
            className="p-4 text-lg rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:border-blue-400"
          ></textarea>

          <button
            type="submit"
            className="mt-4 py-4 text-lg rounded-xl font-semibold
            bg-linear-to-r from-blue-500 via-purple-500 to-pink-500
            hover:scale-105 transition-transform"
          >
            Send Message
          </button>

        </form>

      </div>
    </div>
  );
};

export default Contact;