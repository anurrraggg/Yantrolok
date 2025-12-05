import React, { useEffect, useRef } from "react";
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
	const sectionRef = useRef(null);

	// Nav observer (unchanged logic, plus aria-current)
	useEffect(() => {
		const el = sectionRef.current;
		if (!el || typeof IntersectionObserver === "undefined") return;

		const navLink = document.getElementById("nav-team"); // navbar link should have id="nav-team"
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (!navLink) return;
				if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
					navLink.classList.add("text-cyan-400", "font-semibold");
					navLink.setAttribute("aria-current", "page");
					if (!navLink.querySelector(".active-dot")) {
						const span = document.createElement("span");
						span.className =
							"active-dot inline-block ml-2 w-2 h-2 rounded-full bg-cyan-400";
						span.setAttribute("aria-hidden", "true");
						navLink.appendChild(span);
					}
				} else {
					navLink.classList.remove("text-cyan-400", "font-semibold");
					navLink.removeAttribute("aria-current");
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
				navLinkCleanup.removeAttribute("aria-current");
				const dot = navLinkCleanup.querySelector(".active-dot");
				if (dot) navLinkCleanup.removeChild(dot);
			}
		};
	}, []);

	return (
		<section
			id="team"
			ref={sectionRef}
			className="relative py-16 md:py-28 px-6 md:px-10 text-white overflow-hidden scroll-mt-28"
			style={{
				// explicit dark background restored (no theme toggle)
				backgroundColor: "#07111F",
				backgroundImage:
					"linear-gradient(135deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
				backgroundSize: "34px 34px",
			}}
			role="region"
			aria-labelledby="team-heading"
		>
			{/* Background glow */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-20 left-20 w-[600px] h-[600px] bg-purple-600/25 blur-[200px] rounded-full"></div>
				<div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] rounded-full"></div>
			</div>

			{/* Header */}
			<div className="relative max-w-6xl mx-auto mb-20 text-center">
				<p className="text-indigo-300 tracking-[0.3em] uppercase font-medium">
					Our Team
				</p>
				<h2 className="text-5xl font-extrabold mt-4 leading-tight">
					The Minds{" "}
					<span className="text-cyan-400">Shaping the Future</span>
				</h2>
				<p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
					A rare blend of scientific brilliance, human empathy, and bold
					imagination. These are the people turning{" "}
					<strong className="text-white">soft electronic skin</strong> into
					reality.
				</p>
			</div>

			{/* Team Grid */}
			<div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
				{team.map((member, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.5 }}
						className="group relative rounded-2xl p-6 md:p-8 bg-[#0D1B2A]/70 backdrop-blur-xl border border-white/10 shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400"
					>
						{/* Image + Text */}
						<div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
							<div className="flex-shrink-0">
								<img
									src={member.image}
									alt={member.name}
									loading="lazy"
									className="w-full md:w-[210px] h-auto md:h-[140px] rounded-2xl object-cover shadow"
								/>
							</div>
							<div>
								<h3 className="text-xl md:text-2xl font-bold text-white">
									{member.name}
								</h3>
								<p className="text-cyan-300 text-sm mt-1">
									{member.title}
								</p>
								<p className="text-gray-300 text-sm mt-4">
									{member.story}
								</p>

								{/* LinkedIn */}
								<a
									href={member.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`Open ${member.name} LinkedIn`}
									className="mt-4 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
								>
									<img
										src="/linkedin.png"
										alt="LinkedIn"
										className="w-5 h-5"
										loading="lazy"
									/>
									<span>View Profile</span>
								</a>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
