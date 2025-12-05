import React from "react";

export default function Footer() {
  return (
    <footer
      className="relative py-16 px-10 text-white"
      style={{
        backgroundColor: "#050B14",
      }}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
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
                  className="hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
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
            <span className="text-cyan-400">+91-9140427284</span>
          </p>
          <p className="text-gray-300">
            Email:{" "}
            <span className="text-cyan-400">info@yantrolok.com</span>
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
        © Copyright{" "}
        <span className="text-white font-medium">Yantrolok</span>. All Rights
        Reserved.
      </div>
    </footer>
  );
}
