import React, { useState } from "react";

const navLinks = [
  { href: "#hero", label: "Home", id: "nav-hero" },
  { href: "#about", label: "About", id: "nav-about" },
  { href: "#portfolio", label: "Portfolio", id: "nav-portfolio" },
  { href: "#team", label: "Team", id: "nav-team" },
  { href: "#contact", label: "Contact", id: "nav-contact" },
  { href: "#blog", label: "Blog", id: "nav-blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50" role="navigation" aria-label="Main navigation">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div
          className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/50 backdrop-blur-md px-5 py-3 shadow-lg"
        >
          {/* Logo + Title */}
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Yantrolok Logo" className="inline-block w-10 h-10" loading="lazy" />
            <div className="flex flex-col leading-tight">
              <h1 className="text-xl md:text-2xl font-semibold text-white">Yantrolok</h1>
              <span className="text-[11px] md:text-xxs tracking-[0.18em] uppercase text-gray-300">Feel the Future !!</span>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                id={link.id}
                href={link.href}
                className="text-gray-200 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded px-2 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile actions */}
          <div className="md:hidden flex items-center gap-3">
            <a href="#contact" className="px-3 py-2 rounded-full text-xs font-medium bg-indigo-500 hover:bg-indigo-600 text-white transition-colors">Contact</a>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="p-2 rounded-md bg-white/6 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {open ? (
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu (slide down) */}
        {open && (
          <div className="mt-3 bg-black/60 backdrop-blur-md rounded-xl p-3 shadow-lg md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded text-gray-200 hover:text-white hover:bg-white/6 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
