import React from "react";

const navLinks = [
  { href: "#hero", label: "Home", id: "nav-hero" },
  { href: "#about", label: "About", id: "nav-about" },
  { href: "#portfolio", label: "Portfolio", id: "nav-portfolio" },
  { href: "#team", label: "Team", id: "nav-team" },
  { href: "#contact", label: "Contact", id: "nav-contact" },
  { href: "#blog", label: "Blog", id: "nav-blog" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50" role="navigation" aria-label="Main navigation">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div
          className="
            flex items-center justify-between
            rounded-2xl border border-white/10
            bg-black/60 backdrop-blur-xl
            px-5 py-3 shadow-lg
          "
        >
          {/* Logo + Title + Tagline */}
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Yantrolok Logo"
              className="inline-block w-10 h-10"
              loading="lazy"
            />

            <div className="flex flex-col leading-tight">
              <h1 className="text-xl md:text-2xl font-semibold text-white">
                Yantrolok
              </h1>
              <span className="text-[11px] md:text-xxs font-small tracking-[0.18em] uppercase text-gray-300">
                Feel the Future !!
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                id={link.id}
                href={link.href}
                className="text-gray-200 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Simple mobile fallback: just a Contact button */}
          <div className="md:hidden">
            <a
              href="#contact"
              className="
                px-3 py-1.5 rounded-full text-xs font-medium
                bg-indigo-500 hover:bg-indigo-600
                text-white transition-colors duration-200
              "
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
