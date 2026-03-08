import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-(--page-bg) text-(--page-text) border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Side */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">
            © {new Date().getFullYear()} IRMIYA PALEPOGU
          </h2>
          <p className="text-sm opacity-70">
            Full Stack Developer
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 text-3xl">

          <a
            href="https://linkedin.com/in/irmiya-palepogu-9428b92ab"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-white/10 hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/irmiya07"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-white/10 hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://instagram.com/irmiya_7"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-white/10 hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>

        </div>

      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs opacity-60 pb-4">
        Built with React & Tailwind
      </div>

    </footer>
  );
};

export default Footer;