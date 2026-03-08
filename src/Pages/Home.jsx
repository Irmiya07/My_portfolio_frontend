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
    <div id="hero" className="min-h-screen flex flex-col items-center justify-center">
      {/*hero section*/}
      <section className="h-full w-full min-h-screen bg-(--page-bg) flex items-center justify-center px-6 py-16">
      <Hero/>
      </section>
      {/*Certifications section*/}
      <section id="projects" >
          <Project/>
      </section>
      <section id="certificates">
        <Certificate/>
      </section>
      <section id="skills">
        <Skill/>
      </section>
      <section id="contact" className="w-full max-w-2xl">
        <Contact/>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
