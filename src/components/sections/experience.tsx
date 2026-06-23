"use client";

import { motion } from "motion/react";

const experiences = [
	{
		year: "2024",
		title: "Senior Frontend Developer",
		company: "some-startup.io",
		description:
			"Building UI components and design systems. Making buttons that spark joy.",
	},
	{
		year: "2022",
		title: "Full-Stack Developer",
		company: "agency-co",
		description:
			"Shipped client projects from zero to production. React, Node, and way too many coffee cups.",
	},
	{
		year: "2020",
		title: "Junior Developer",
		company: "first-job-inc",
		description:
			"Wrote my first production code. Learned that console.log is not debugging.",
	},
	{
		year: "2018",
		title: "Started Coding",
		company: "bedroom HQ",
		description:
			"Fell down the programming rabbit hole. Never looked back.",
	},
];

export default function Experience() {
	return (
		<section id="experience" className="py-24 px-6 max-w-3xl mx-auto">
			<motion.div
				initial={{ opacity: 0, x: -30 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6 }}
				className="mb-12"
			>
				<h2 className="section-heading text-3xl sm:text-4xl font-bold">
					the journey
				</h2>
			</motion.div>

			<div className="space-y-8">
				{experiences.map((entry) => (
					<motion.div
						key={entry.year}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<span className="text-sm text-primary font-bold tracking-wider">
							{entry.year}
						</span>

						<h3 className="text-xl font-bold mt-1">
							{entry.title}
						</h3>

						<p className="text-base text-foreground/50 mb-1">
							{entry.company}
						</p>

						<p className="text-base text-foreground/70 leading-relaxed">
							{entry.description}
						</p>
					</motion.div>
				))}
			</div>
		</section>
	);
}
