"use client";

import { motion } from "motion/react";

const skillGroups = [
	{
		label: "languages",
		skills: ["TypeScript", "JavaScript", "Python", "Go", "SQL"],
	},
	{
		label: "frontend",
		skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
	},
	{
		label: "backend & tools",
		skills: ["Node.js", "PostgreSQL", "Docker", "Git", "Linux"],
	},
];

const container = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.08 } },
};

const sticker = {
	hidden: { opacity: 0, scale: 0.5 },
	visible: { opacity: 1, scale: 1 },
};

const colors = ["var(--primary)", "#3a7bd5", "#d18f3a"];

export default function Skills() {
	return (
		<section id="skills" className="py-24 px-6 max-w-3xl mx-auto relative">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			></motion.div>
			<motion.div
				initial={{ opacity: 0, x: -30 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6 }}
				className="mb-12"
			>
				<h2 className="section-heading text-3xl sm:text-4xl font-bold">
					my toolbox
				</h2>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className="scrapbook-card p-6 sm:p-8"
			>
				{skillGroups.map((group) => (
					<div
						key={group.label}
						className="mt-6 first:mt-0 pt-6 first:pt-0 border-t border-dashed border-primary/10 first:border-t-0"
					>
						<p className="text-sm text-primary/40 uppercase tracking-wider mb-3">
							{group.label}
						</p>
						<motion.div
							variants={container}
							initial="hidden"
							animate="visible"
							className="flex flex-wrap gap-2"
						>
							{group.skills.map((skill, si) => (
								<motion.span
									key={skill}
									variants={sticker}
									className="sticker text-base"
									style={{
										transform: `rotate(${(si % 3) - 1}deg)`,
										background: colors[si % colors.length],
									}}
								>
									{skill}
								</motion.span>
							))}
						</motion.div>
					</div>
				))}
			</motion.div>
		</section>
	);
}
