import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="
        fixed bottom-6 right-6 
        w-12 h-12 rounded-full 
        bg-indigo-600 hover:bg-indigo-700 
        text-white shadow-xl 
        flex items-center justify-center 
        text-2xl font-bold
        z-50
      "
    >
      ↑
    </motion.button>
  );
}
