import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center px-10 text-white overflow-hidden scroll-mt-28"
      style={{
        backgroundColor: "#0A0F1F",
        backgroundImage:
          "linear-gradient(135deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
      role="region"
      aria-labelledby="hero-heading"
    >
      {/* Glowing gradient circle behind content */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[800px] h-[800px] rounded-full bg-indigo-600/20 blur-[180px]"></div>
      </div>

      {/* Left side text */}
      <div className="max-w-2xl z-10">
        <p className="text-indigo-300 tracking-widest uppercase font-medium">
          Yantrolok
        </p>

        <h1 className="text-6xl font-extrabold leading-tight mt-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Soft Electronic Skin
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          We envision a world where soft electronics enable smarter health monitoring,
          more intuitive prosthetics, human like robotics, and compassionate,
          intelligent technologies.
        </p>

        <div className="mt-10 flex gap-6">
          <button
            className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
            aria-label="Explore Technology"
          >
            Explore Technology
          </button>

          <button
            className="px-8 py-3 rounded-full border border-gray-500 hover:border-white text-gray-300 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
            aria-label="Contact Us"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* 3D hand with floating hover animation */}
      <motion.img
        src="/hand.png" // << Replace with your 3D hand image filename
        alt="3D Soft Skin Hand"
        loading="lazy"
        className="w-[450px] drop-shadow-2xl z-10"
        initial={{ opacity: 0, x: 60 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -14, 0], // floating loop
        }}
        transition={{
          duration: 1,
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Reduced particles for performance */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            animate={{
              y: ["0%", "100%"],
              opacity: [0.4, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
