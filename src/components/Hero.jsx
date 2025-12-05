import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 md:px-10 text-white overflow-hidden scroll-mt-28"
      style={{
        backgroundColor: "#0A0F1F",
        backgroundImage:
          "linear-gradient(135deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
      role="region"
      aria-labelledby="hero-heading"
    >
      {/* Left / top content */}
      <div className="w-full md:w-1/2 max-w-2xl z-10 py-10 md:py-0">
        <p className="text-indigo-300 tracking-widest uppercase font-medium">
          Yantrolok
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Soft Electronic Skin
          </span>
        </h1>

        <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-300 leading-relaxed">
          We envision a world where soft electronics enable smarter health monitoring,
          more intuitive prosthetics, human like robotics, and compassionate, intelligent technologies.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-3 px-5 md:px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Explore our technology"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2L12 22M2 12L22 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Explore Technology
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-gray-500 hover:border-white text-gray-300 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Contact us"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Right / bottom image */}
      <motion.img
        src="/hand.png"
        alt="3D Soft Skin Hand"
        loading="lazy"
        className="w-full max-w-md md:w-1/2 md:max-w-lg drop-shadow-2xl z-10 mb-6 md:mb-0"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
        transition={{ duration: 1.2, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
      />

      {/* Decorative, hidden on very small screens */}
      <div className="pointer-events-none absolute inset-0 opacity-12 hidden sm:block">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div key={i} className="absolute w-1.5 h-1.5 bg-white rounded-full" animate={{ y: ["0%", "100%"] }} transition={{ duration: 6 + i * 0.6, repeat: Infinity, delay: i * 0.2 }} style={{ left: `${(i * 13) % 100}%`, top: `${(i * 9) % 100}%` }} />
        ))}
      </div>
    </section>
  );
}
