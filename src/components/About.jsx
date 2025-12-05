import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-24 px-10 text-white overflow-hidden"
      style={{
        backgroundColor: "#0A0F1F",
        backgroundImage:
          "linear-gradient(135deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      {/* Soft glow behind image */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10 relative">
        
        {/* Image with animation */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.img
            src="/about.png" // your image here
            alt="Soft Electronic Skin Illustration"
            className="w-[500px] drop-shadow-[0_0_25px_rgba(0,255,255,0.35)]"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Content section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-indigo-300 tracking-widest uppercase font-medium mb-3">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Function</span>  
            <br />
            into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Feeling</span>
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Yantrolok is India’s first deep-tech startup pioneering highly sensitive,
            large-area, and 3D-printable soft electronic skin. Our patented skin
            technology unlocks new possibilities across healthcare, robotics, and
            human-machine interaction.
          </p>

          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Our multidisciplinary team includes scientists, engineers, innovators,
            and healthcare experts working together to create next-generation
            solutions powered by advanced soft-sensor technologies.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-6">
            <button className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-xl transition-all">
              More about Yantrolok
            </button>

            <button className="px-8 py-3 rounded-full border border-gray-500 hover:border-white text-gray-300 hover:text-white transition-all">
              Our Vision
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
