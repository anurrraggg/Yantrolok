import React from "react";
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
  return (
    <section
      id="team"
      className="relative py-28 px-10 text-white overflow-hidden"
      style={{
        backgroundColor: "#07111F",
        backgroundImage:
          "linear-gradient(135deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "34px 34px",
      }}
    >
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-purple-600/25 blur-[200px] rounded-full"></div>
        <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] rounded-full"></div>
      </div>

      {/* Header */}
      <div className="relative max-w-6xl mx-auto mb-20 text-center">
        <p className="text-indigo-300 tracking-[0.3em] uppercase font-medium">
          Our Team
        </p>
        <h2 className="text-5xl font-extrabold mt-4 leading-tight">
          The Minds <span className="text-cyan-400">Shaping the Future</span>
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
          A rare blend of scientific brilliance, human empathy, and bold
          imagination.  
          These are the people turning **soft electronic skin** into reality.
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
              boxShadow: "0 25px 80px rgba(0, 255, 255, 0.25)",
            }}
            transition={{ duration: 0.6 }}
            className="
              group relative rounded-3xl p-8
              bg-[#0D1B2A]/70 backdrop-blur-xl border border-white/10
              shadow-xl hover:shadow-cyan-500/30 cursor-pointer
            "
          >
            {/* Floating Glow Behind Card */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-cyan-400/10 blur-2xl opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.5 }}
            />

            {/* Image */}
            <div className="flex items-center gap-6">
              <div className="relative">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-82 h-55 rounded-2xl object-cover shadow-xl
                    group-hover:scale-105 transition-all duration-300
                  "
                />

                {/* Soft pulsing glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-cyan-500/20 blur-2xl"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-cyan-300 text-sm mt-1">{member.title}</p>
                <p className="text-gray-300 text-sm mt-4">{member.story}</p>

                {/* LinkedIn */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  className="mt-4 inline-block text-cyan-400 hover:text-cyan-300 transition"
                >
                  <div className="flex items-center gap-2">
                    <img src="/linkedin.png" className="w-5 h-5" />
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
