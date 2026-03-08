// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../../src/assets/mypic.png";

const Hero = () =>{
  return(
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* LEFT SIDE - IMAGE */}
              <div className="relative flex justify-center items-center order-1 md:order-1">
                {/* Floating Circle */}
                <motion.div
                  animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-indigo-500/20 blur-3xl"
                />
    
                {/* Floating Square */}
                <motion.div
                  animate={{ y: [0, 25, 0], x: [0, -20, 0], rotate: [0, 45, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-indigo-400/20 blur-3xl rotate-45"
                />
    
                {/* Profile Image */}
                <motion.img
                  src={profile}
                  alt="Irmiya"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative z-10 
        w-52 h-52 
        sm:w-64 sm:h-64 
        md:w-72 md:h-72 
        lg:w-80 lg:h-80 
        xl:w-96 xl:h-96
        rounded-full object-cover 
        border-4 border-(--page-border)
        shadow-2xl"
                />
              </div>
    
              {/* RIGHT SIDE - TEXT */}
              <div className="text-center md:text-left order-2 md:order-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-(--page-text)">
                  Hi, I'm Irmiya
                  <br />
                  <span
                    className="bg-linear-to-r from-indigo-500 to-cyan-400 
      bg-clip-text text-transparent"
                  >
                    <TypeAnimation
                      sequence={[
                        "Full Stack Developer",
                        2000,
                        "Problem Solver",
                        2000,
                        "Aspiring AI/ML Engineer",
                        2000,
                      ]}
                      speed={50}
                      repeat={Infinity}
                    />
                  </span>
                </h2>
    
                <p className="text-base sm:text-lg text-(--page-text)/90 leading-relaxed text-left sm:text-left md:text-center lg:text-center opacity-100 lg:opacity-80">
                  I’m a B.Tech student passionate about software development and
                  problem-solving. I have hands-on experience with C, C++, Java,
                  Python, SQL, and React, and I enjoy building clean, practical
                  applications that solve real-world problems. I consistently work
                  on improving my Data Structures and Algorithms skills and am
                  actively exploring AI/ML to strengthen my technical foundation.
                </p>
              </div>
            </div>
  )
}

export default Hero;