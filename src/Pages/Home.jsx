// import { useEffect, useState } from "react";


// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Hero from "./Hero";
import Contact from "./Contact";
import Footer from "../Components/Layout/Footer";
import { useState , useEffect } from "react";
import Loader from "../Components/common/Loader";
import Project from "../Components/page.components/Project";
import Certificate from "../Components/page.components/Certificate";
import Skill from "../Components/page.components/Skill";



const Home = () => {

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
<div className="min-h-screen flex flex-col bg-(--page-bg)">

  {/* HERO */}
  <section
    id="hero"
    className="
    min-h-screen flex items-center justify-center
    px-3 sm:px-6 lg:px-8
    "
  >
    <Hero />
  </section>

  {/* PROJECTS */}
  <section
    id="projects"
    className="px-3 sm:px-6 lg:px-8 py-12"
  >
    <Project />
  </section>

  {/* CERTIFICATES */}
  <section
    id="certificates"
    className="px-3 sm:px-6 lg:px-8 py-12"
  >
    <Certificate />
  </section>

  {/* SKILLS */}
  <section
    id="skills"
    className="px-3 sm:px-6 lg:px-8 py-12"
  >
    <Skill />
  </section>

  {/* CONTACT */}
  <section
    id="contact"
    className="
    min-h-screen flex items-center justify-center
    px-3 sm:px-6 lg:px-8
    "
  >
    <Contact />
  </section>

  <Footer />

</div>
  );
};

export default Home;
