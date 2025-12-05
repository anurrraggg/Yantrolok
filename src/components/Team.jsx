import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Dr. Abhijit Chandra Roy",
    title: "Deep-Tech Visionary | Bridging human touch with machines",
    story:
      "Driven by empathy and curiosity, Dr. Roy leads the mission of creating electronic skin that truly understands human sensation.",
    image: "/team1.jpg",
    linkedin: "https://www.linkedin.com/in/dr-abhijit-roy-77582925/",
  },
  {
    name: "Dr. Ravi Teja K V",
    title: "Innovator in Smart Medical Systems",
    story:
      "Passionate about surgical intelligence, Dr. Ravi builds next-gen sensing tools that make healthcare safer and more human.",
    image: "/team2.jpg",
    linkedin: "https://linkedin.com",
  },
];

export default function Team() {
  // improved init: prefer saved, then system; safe for SSR
  const [theme, setTheme] = useState(() => {
    try {
      if (typeof window === "undefined") return "dark";
      const saved = localStorage.getItem("site-theme");
      if (saved === "dark" || saved === "light") return saved;
      const prefersDark =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    } catch {
      return "dark";
    }
  });
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);

  // apply theme by setting class + CSS variables for reliable colors
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;

    const applyThemeVars = (t) => {
      if (t === "dark") {
        root.classList.add("dark");
        root.style.setProperty("--bg-color", "#07111F");
        root.style.setProperty("--pattern-color", "rgba(255,255,255,0.04)");
        root.style.setProperty("--card-bg", "rgba(13,27,42,0.85)");
        root.style.setProperty("--muted", "#94A3B8");
        root.style.setProperty("--text-primary", "#E6EEF3");
        root.style.setProperty("--accent", "#06B6D4");
        root.style.setProperty("--card-border", "rgba(255,255,255,0.06)");
      } else {
        root.classList.remove("dark");
        root.style.setProperty("--bg-color", "#F8FAFC");
        root.style.setProperty("--pattern-color", "rgba(2,6,23,0.02)");
        root.style.setProperty("--card-bg", "rgba(255,255,255,0.9)");
        root.style.setProperty("--muted", "#475569");
        root.style.setProperty("--text-primary", "#0F172A");
        root.style.setProperty("--accent", "#0EA5A4");
        root.style.setProperty("--card-border", "rgba(2,6,23,0.06)");
      }
    };

    applyThemeVars(theme);
    try {
      localStorage.setItem("site-theme", theme);
    } catch {}
  }, [theme]);

  // Nav observer (unchanged logic, improved cleanup)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const navLink = document.getElementById("nav-team"); // ensure navbar link has id="nav-team"
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!navLink) return;
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          navLink.classList.add("text-cyan-400", "font-semibold");
          if (!navLink.querySelector(".active-dot")) {
            const span = document.createElement("span");
            span.className =
              "active-dot inline-block ml-2 w-2 h-2 rounded-full bg-cyan-400";
            span.setAttribute("aria-hidden", "true");
            navLink.appendChild(span);
          }
        } else {
          navLink.classList.remove("text-cyan-400", "font-semibold");
          const dot = navLink.querySelector(".active-dot");
          if (dot) navLink.removeChild(dot);
        }
      },
      { threshold: [0.3, 0.6], root: null, rootMargin: "-15% 0px -30% 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      const navLinkCleanup = document.getElementById("nav-team");
      if (navLinkCleanup) {
        navLinkCleanup.classList.remove("text-cyan-400", "font-semibold");
        const dot = navLinkCleanup.querySelector(".active-dot");
        if (dot) navLinkCleanup.removeChild(dot);
      }
    };
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  // if not mounted yet, render without theme-dependent classes to avoid hydration mismatch
  const textColorClass = mounted ? (theme === "dark" ? "text-white" : "text-slate-900") : "text-white";

  return (
    <section
      id="team"
      ref={sectionRef}
      className={`${textColorClass} relative py-28 px-10 overflow-hidden`}
      style={{
        backgroundColor: "var(--bg-color)",
        backgroundImage: `linear-gradient(135deg, var(--pattern-color) 1px, transparent 1px)`,
        backgroundSize: "34px 34px",
      }}
    >
      {/* Theme toggle button (fixed top-right) */}
      <button
        onClick={toggleTheme}
        aria-pressed={theme === "dark"}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        className={`fixed top-6 right-6 z-50 p-2 rounded-full shadow-md transition-transform transform hover:scale-105 flex items-center gap-2
          ${mounted && theme === "dark" ? "bg-[#0D1B2A]/90 text-cyan-300" : "bg-white text-[#0D1B2A] border border-gray-200"}`}
      >
        {mounted && theme === "dark" ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
            <span className="sr-only">Switch to light</span>
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
            <span className="sr-only">Switch to dark</span>
          </>
        )}
      </button>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-purple-600/20 dark:bg-purple-600/25 blur-[200px] rounded-full"></div>
        <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-cyan-500/14 dark:bg-cyan-500/20 blur-[180px] rounded-full"></div>
      </div>

      {/* Header */}
      <div className="relative max-w-6xl mx-auto mb-20 text-center">
        <p className="text-indigo-300 tracking-[0.3em] uppercase font-medium">Our Team</p>
        <h2 className="text-5xl font-extrabold mt-4 leading-tight">
          The Minds <span style={{ color: "var(--accent)" }}>Shaping the Future</span>
        </h2>
        <p className="mt-4" style={{ color: "var(--muted)", maxWidth: "40rem", margin: "0 auto", fontSize: "1.125rem" }}>
          A rare blend of scientific brilliance, human empathy, and bold imagination. These are the people turning{" "}
          <strong style={{ color: "var(--text-primary)" }}>soft electronic skin</strong> into reality.
        </p>
      </div>

      {/* Team Grid */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotateX: 6,
              rotateY: -6,
              boxShadow: "0 25px 80px rgba(0, 214, 255, 0.12)",
            }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl p-8 shadow-xl cursor-pointer"
            style={{
              background: "var(--card-bg)",
              border: `1px solid var(--card-border)`,
              backdropFilter: "blur(12px)",
            }}
          >
            {/* Floating Glow Behind Card */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.5 }}
              style={{ background: "linear-gradient(90deg, rgba(6,182,212,0.06), rgba(99,102,241,0.04))", filter: "blur(20px)" }}
            />

            {/* Image + Text */}
            <div className="flex items-center gap-6">
              <div className="relative">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-[210px] h-[140px] rounded-2xl object-cover shadow-xl group-hover:scale-105 transition-all duration-300"
                />
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ background: "rgba(6,182,212,0.08)", filter: "blur(12px)" }}
                />
              </div>

              {/* Text Content */}
              <div>
                <h3 style={{ color: "var(--text-primary)" }} className="text-2xl font-bold">{member.name}</h3>
                <p style={{ color: "var(--accent)" }} className="text-sm mt-1">{member.title}</p>
                <p style={{ color: "var(--muted)" }} className="text-sm mt-4">{member.story}</p>

                {/* LinkedIn */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block transition"
                  style={{ color: "var(--accent)" }}
                >
                  <div className="flex items-center gap-2">
                    <img src="/linkedin.png" className="w-5 h-5" alt="LinkedIn" />
                    <span>View Profile</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
