import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  if (!visible) return null;

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className="
        fixed bottom-4 right-4 
        md:bottom-6 md:right-6 
        w-10 h-10 md:w-12 md:h-12 
        rounded-full bg-indigo-600 
        hover:bg-indigo-700 text-white 
        shadow-xl flex items-center 
        justify-center z-50 
        focus:outline-none focus:ring-2 
        focus:ring-cyan-400
      "
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 5l7 7-1.4 1.4L12 7.8 6.4 13.4 5 12l7-7z"
          fill="currentColor"
        />
      </svg>
    </motion.button>
  );
}
