import React from "react";

export default function Footer() {
  return (
    <footer
      className="relative py-12 md:py-16 px-6 md:px-10 text-white"
      style={{
        backgroundColor: "#050B14",
      }}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">Yantrolok</h2>
          <p className="text-gray-400 mt-3">
            Innovating the future of healthcare, robotics, and human-machine
            interaction through advanced soft electronic skin.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold">Useful Links</h3>
          <nav aria-label="Footer useful links">
            <ul className="mt-3 space-y-2 text-gray-300">
              <li>
                <a
                  href="#hero"
                  className="hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded px-1 py-1"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded px-1 py-1"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded px-1 py-1"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded px-1 py-1"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded px-1 py-1"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-gray-300 mt-3">
            74D Nankari
            <br /> Near IIT Kanpur Campus
            <br /> Kanpur Nagar, UP-208016
          </p>

          <p className="text-gray-300 mt-3">
            Phone:{" "}
            <a
              href="tel:+919140427284"
              className="text-cyan-400 hover:underline"
            >
              +91-9140427284
            </a>
          </p>
          <p className="text-gray-300">
            Email:{" "}
            <a
              href="mailto:info@yantrolok.com"
              className="text-cyan-400 hover:underline"
            >
              info@yantrolok.com
            </a>
          </p>
        </div>
      </div>

      {/* Social row */}
      <div className="max-w-6xl mx-auto mt-6 flex items-center justify-center gap-4">
        <a
          href="#"
          className="p-2 rounded hover:bg-white/6 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label="Twitter"
        >
          <img
            src="/twitter.svg"
            alt="Twitter"
            className="w-5 h-5"
            loading="lazy"
          />
        </a>
        <a
          href="#"
          className="p-2 rounded hover:bg-white/6 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label="LinkedIn"
        >
          <img
            src="/linkedin.svg"
            alt="LinkedIn"
            className="w-5 h-5"
            loading="lazy"
          />
        </a>
      </div>

      <div className="border-t border-white/10 mt-8 pt-4 text-center text-gray-400 text-sm">
        © Copyright{" "}
        <span className="text-white font-medium">Yantrolok</span>. All Rights
        Reserved.
      </div>
    </footer>
  );
}
