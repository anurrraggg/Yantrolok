import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-10 text-white overflow-hidden scroll-mt-28"
      style={{
        backgroundColor: "#07111F",
        backgroundImage:
          "linear-gradient(135deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "34px 34px",
      }}
      role="region"
      aria-labelledby="contact-heading"
    >
      {/* Background glows */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-32 w-[500px] h-[500px] bg-indigo-600/25 blur-[200px] rounded-full"></div>
        <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-cyan-500/20 blur-[180px] rounded-full"></div>
      </div>

      {/* Header */}
      <div className="relative max-w-6xl mx-auto text-center mb-20">
        <p className="text-indigo-300 uppercase tracking-[0.3em] font-medium">
          Contact
        </p>
        <h2 className="text-5xl font-extrabold mt-4">
          Let’s <span className="text-cyan-400">Connect & Collaborate</span>
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
          Whether you're a researcher, organization, or enthusiast —  
          we would love to hear from you and explore possibilities together.
        </p>
      </div>

      {/* Contact Cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {/* Card Component */}
        {[
          {
            icon: "/location.svg",
            title: "Our Address",
            text: "74D Nankari, Near IIT Kanpur Campus, Kanpur Nagar, UP-208016, India",
          },
          {
            icon: "/mail.svg",
            title: "Email Address",
            text: "info@yantrolok.com",
          },
          {
            icon: "/phone.svg",
            title: "Contact Number",
            text: "+91-9140427284",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            role="article"
            aria-label={item.title}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 25px 60px rgba(0, 255, 255, 0.15)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="
              relative p-8 rounded-2xl border border-white/10
              bg-white/10 backdrop-blur-xl
              shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400
            "
          >
            <div className="flex items-start gap-4">
              <img src={item.icon} alt="" loading="lazy" className="w-10 opacity-80" />
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
