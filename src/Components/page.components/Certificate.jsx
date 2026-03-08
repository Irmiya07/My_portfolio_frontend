/* eslint-disable no-unused-vars */
import CertificateCard from "../cards/CertificateCard";
import { getCertificates } from "../../apis/CertificateService";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Certificate = () => {
  const [certificates, setCertificates] = useState([]);
  const cardVariants = {
    hidden: {
      opacity: 0,
      rotate: -6,
      y: 40,
    },
    show: {
      opacity: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 0.35,
        ease: "easeInOut",
      },
    },
  };
useEffect(() => {
  const fetchCertificates = async () => {
    try {
      const res = await getCertificates();
      const certArray =
        res?.data?.certificates || res?.certificates || res || [];
      setCertificates(Array.isArray(certArray) ? certArray : []);
    } catch (error) {
      console.error("Error fetching certificates:", error);
      setCertificates([]);
    }
  };

  fetchCertificates();
}, []);
  return (
    <div className="min-h-screen bg-(--page-bg)/60 text-(--page-text) px-4 sm:px-8 lg:px-16 py-12">
      {/*  Header */}
      <div
       
        className="text-center mb-16"
      >
        {/* Animated Title (Loop Effect) */}
        <motion.h1
          className="text-3xl sm:text-5xl font-extrabold 
          bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 
          text-transparent bg-clip-text"
          animate={{
            y: [0, -6, 0],
            scale: [1, 1.03, 1],
            opacity: [1, 0.9, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          My Certifications
        </motion.h1>

        {/* Animated Subtitle */}
        <p
          className="mt-4 text-base sm:text-lg opacity-80 max-w-2xl mx-auto text-left sm:text-left md:text-center lg:text-center lg:opacity-80"
        >
          A collection of certifications showcasing my continuous learning in
          programming, data structures, web development, and AI/ML, reflecting
          my commitment to strengthening technical skills and staying updated
          with modern technologies.
        </p>
      </div>

      {/* Certificates Grid */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="
    grid
    sm:grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    items-stretch
    gap-6
  "
      >
{Array.isArray(certificates) &&
  certificates.map((item, index) => (
    <motion.div
      key={index}
      variants={cardVariants}
      whileHover={{ scale: 1.05, rotate: 1 }}
      className="w-full"
    >
      <CertificateCard item={item} />
    </motion.div>
))}
      </motion.div>
    </div>
  );
};
export default Certificate;
