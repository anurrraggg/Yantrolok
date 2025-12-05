import React from "react";
import { motion } from "framer-motion";

// Portfolio Data
const portfolioItems = [
	{
		title: "Smart Healthcare Sensors",
		desc: "Highly intuitive sensing systems enabling seamless clinical data capture—from home monitoring to high-acuity care.",
		color: "#3B82F6",
	},
	{
		title: "Healthcare Training",
		desc: "Lifelike medical training systems powered by Soft-e-Skin, providing realistic tactile sensory feedback.",
		color: "#8B5CF6",
	},
	{
		title: "Prosthetics",
		desc: "Restoring natural touch perception with next-gen prosthetic feedback powered by soft electronic skin.",
		color: "#06B6D4",
	},
	{
		title: "Consumer Robotics",
		desc: "Interactive, high-end robotic solutions for education and immersive learning experiences.",
		color: "#10B981",
	},
	{
		title: "Smart Operation Theatres",
		desc: "Wireless, smart intraoperative sensors revolutionizing future surgical environments.",
		color: "#F59E0B",
	},
	{
		title: "IoT-Enabled Platforms",
		desc: "Next-gen sensor grids capturing precise motion, pressure, and environmental data.",
		color: "#2563EB",
	},
];

export default function Portfolio() {
	return (
		<section
			id="portfolio"
			className="relative py-28 px-10 text-white scroll-mt-28"
			style={{
				backgroundColor: "#0A0F1F",
				backgroundImage:
					"linear-gradient(135deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
				backgroundSize: "32px 32px",
			}}
			role="region"
			aria-labelledby="portfolio-heading"
		>
			{/* Glow effect */}
			<div className="absolute inset-0">
				<div className="absolute top-20 left-20 w-[600px] h-[600px] bg-indigo-600/20 blur-[180px] rounded-full"></div>
			</div>

			{/* Section Header */}
			<div className="relative max-w-6xl mx-auto mb-16">
				<p className="text-indigo-300 tracking-widest uppercase font-medium">
					Portfolio
				</p>
				<h2 className="text-4xl md:text-5xl font-extrabold">
					Check Our Innovations
				</h2>
				<p className="mt-3 text-gray-300 max-w-xl">
					Explore how our technology powers smarter healthcare, robotics,
					prosthetics, intelligent environments, and more.
				</p>
			</div>

			{/* Portfolio Grid */}
			<div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{portfolioItems.map((item, index) => (
					<motion.div
						key={index}
						role="article"
						tabIndex={0}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						whileHover={{
							scale: 1.05,
							rotateX: 5,
							rotateY: 5,
							boxShadow: `0 20px 50px ${item.color}40`,
						}}
						className="p-6 rounded-2xl bg-[#0D1527] border border-white/10 backdrop-blur-lg cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
					>
						{/* Animated top accent line */}
						<div
							className="w-full h-1 rounded-full mb-4"
							style={{
								background: `linear-gradient(90deg, ${item.color}, transparent)`,
							}}
						></div>

						<h3
							className="text-xl font-semibold mb-3"
							style={{ color: item.color }}
						>
							{item.title}
						</h3>

						<p className="text-gray-300 text-sm leading-relaxed">
							{item.desc}
						</p>

						{/* Subtle 3D gradient block */}
						<div
							className="absolute bottom-0 left-0 w-full h-[120px] opacity-10 rounded-b-2xl"
							style={{
								background: `linear-gradient(180deg, transparent, ${item.color})`,
							}}
						></div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
