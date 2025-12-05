import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 px-6 md:px-10 text-white overflow-hidden scroll-mt-28"
      style={{
        backgroundColor: "#0A0F1F",
        backgroundImage:
          "linear-gradient(135deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
      role="region"
      aria-labelledby="about-heading"
    >
      {/* Glow */}
      <div className="absolute top-1/3 left-0 w-[360px] h-[360px] bg-cyan-500/18 blur-[160px] rounded-full hidden md:block"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.img
            src="/about.png" // your image here
            alt="Soft Electronic Skin Illustration"
            loading="lazy"
            className="w-full max-w-xs md:max-w-[500px] drop-shadow-[0_0_25px_rgba(0,255,255,0.35)]"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <p className="text-indigo-300 tracking-widest uppercase font-medium mb-3">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Transforming{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Function
            </span>
            <br />
            into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Feeling
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Yantrolok is India’s first deep-tech startup pioneering highly
            sensitive, large-area, and 3D-printable soft electronic skin. Our
            patented skin technology unlocks new possibilities across healthcare,
            robotics, and human-machine interaction.
          </p>

          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Our multidisciplinary team includes scientists, engineers, innovators,
            and healthcare experts working together to create next-generation
            solutions powered by advanced soft-sensor technologies.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-cyan-400">
              More about Yantrolok
            </button>
            <button className="px-6 py-3 rounded-full border border-gray-500 hover:border-white text-gray-300 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-cyan-400">
              Our Vision
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
