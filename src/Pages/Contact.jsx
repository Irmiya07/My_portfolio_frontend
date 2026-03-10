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
<div className="
min-h-screen w-full
flex items-center justify-center
bg-(--page-bg) text-(--page-text)
px-2 sm:px-4
py-10 sm:py-16
">

  <div className="
  w-full
  max-w-[96vw]          /* fills screen better */
  sm:max-w-sm
  md:max-w-md
  lg:max-w-lg
  xl:max-w-xl
  bg-(--page-card) backdrop-blur-md
  p-4 sm:p-8 md:p-10
  rounded-2xl sm:rounded-3xl
  shadow-2xl
  ">

    <h1 className="
    text-xl min-[360px]:text-2xl
    sm:text-3xl md:text-4xl
    font-extrabold text-center
    mb-6 sm:mb-8
    bg-linear-to-r from-blue-500 via-purple-500 to-pink-500
    text-transparent bg-clip-text
    ">
      Contact Me
    </h1>

    <form onSubmit={onSubmit} className="flex flex-col gap-4 sm:gap-5">

      <input
        type="text"
        placeholder="Your Name"
        className="w-full rounded-xl p-2.5 sm:p-3.5 text-sm sm:text-base
        bg-white/10 border border-(--page-border) focus:outline focus:border-blue-400"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="w-full rounded-xl p-2.5 sm:p-3.5 text-sm sm:text-base
        bg-white/10 border border-(--page-border) focus:outline focus:border-blue-400"
      />

      <textarea
        rows="4"
        placeholder="Your Message"
        className="w-full rounded-xl resize-none p-2.5 sm:p-3.5 text-sm sm:text-base
        bg-white/10 border border-(--page-border) focus:outline focus:border-blue-400"
      />

      <button
        type="submit"
        className="mt-2 rounded-xl font-semibold py-2.5 sm:py-3.5 text-sm sm:text-base
        bg-linear-to-r from-blue-500 via-purple-500 to-pink-500
        active:scale-95 transition-transform"
  
      >
        Send Message
      </button>

    </form>
  </div>
</div>);
};

export default Contact;