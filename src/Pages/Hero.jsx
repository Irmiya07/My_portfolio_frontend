// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "/image.png";

const Hero = () =>{
return (
  <div
    className="
    max-w-6xl w-full mx-auto
    px-4 sm:px-6 md:px-10
    py-12 md:py-20
    grid grid-cols-1 md:grid-cols-2
    gap-12 md:gap-16
    items-center
    "
  >
    {/* LEFT SIDE - IMAGE */}
    <div className="relative flex justify-center items-center">

      {/* Floating Circle */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="
        absolute
        w-44 h-44
        min-[400px]:w-56 min-[400px]:h-56
        sm:w-72 sm:h-72
        md:w-80 md:h-80
        lg:w-96 lg:h-96
        rounded-full bg-indigo-500/20 blur-3xl
        "
      />

      {/* Floating Square */}
      <motion.div
        animate={{ y: [0, 25, 0], x: [0, -20, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="
        absolute rotate-45
        w-40 h-40
        min-[400px]:w-52 min-[400px]:h-52
        sm:w-64 sm:h-64
        md:w-72 md:h-72
        lg:w-80 lg:h-80
        bg-indigo-400/20 blur-3xl
        "
      />

      {/* Profile Image */}
      <motion.img
        src={profile}
        alt="Irmiya"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="
        relative z-10 rounded-full object-cover

        border-4 border-indigo-400
        shadow-[0_0_25px_rgba(99,102,241,0.7)]

        w-40 h-40
        min-[400px]:w-44 min-[400px]:h-44
        sm:w-56 sm:h-56
        md:w-64 md:h-64
        lg:w-80 lg:h-80
        xl:w-96 xl:h-96
        "
      />
    </div>

    {/* RIGHT SIDE - TEXT */}
    <div className="text-center md:text-left">

      <h2
        className="
        font-bold leading-tight text-(--page-text)
        mb-6
        text-2xl
        min-[400px]:text-3xl
        sm:text-4xl
        md:text-5xl
        "
      >
        Hi, I'm Irmiya
        <br />
        <span className="bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
          <TypeAnimation
            sequence={[
              "Full Stack Developer", 2000,
              "Problem Solver", 2000,
              "Aspiring AI/ML Engineer", 2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </span>
      </h2>

      <p
        className="
        text-(--page-text)/90 leading-relaxed
        max-w-lg mx-auto md:mx-0
        text-sm
        min-[400px]:text-base
        sm:text-lg
        "
      >
        I’m a B.Tech student passionate about software development and
        problem-solving. I have hands-on experience with C, C++, Java,
        Python, SQL, and React, and I enjoy building clean, practical
        applications that solve real-world problems. I consistently work
        on improving my Data Structures and Algorithms skills and am
        actively exploring AI/ML to strengthen my technical foundation.
      </p>

    </div>
  </div>
);
}

export default Hero;