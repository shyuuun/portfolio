"use client";

import { motion } from "motion/react";

const funFacts = ["coffee drinker", "bug creator", "⌨️ typo enjoyer"];

const container = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

export default function About() {
	return (
		<section id="about" className="py-24 px-6 max-w-3xl mx-auto relative">
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
					about me
				</h2>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 40, rotate: -1 }}
				animate={{ opacity: 1, y: 0, rotate: -0.5 }}
				transition={{ duration: 0.7 }}
				className="scrapbook-card p-8 sm:p-10 leading-relaxed relative"
			>
				<p className="text-lg sm:text-xl mb-4">
					Hey! I&apos;m a software developer who loves building stuff
					for the web and mobile. I enjoy turning ideas into working
					products.
				</p>

				<p className="text-lg sm:text-xl mb-4">
					When I&apos;m not coding, you&apos;ll find me tinkering with
					new frameworks, sketching silly UI ideas, or convincing
					myself that this time I&apos;ll actually finish my side
					project.
				</p>

				<p className="text-lg sm:text-xl">
					Currently based somewhere with good coffee and bad Wi-Fi.
				</p>
			</motion.div>

			<motion.div
				variants={container}
				initial="hidden"
				animate="visible"
				className="flex flex-wrap gap-8 mt-8 justify-center"
			>
				<motion.span className="text-xl font-semibold">
					Coffee Lover
				</motion.span>
				<motion.span className="text-xl font-semibold">
					Brainstormer
				</motion.span>
			</motion.div>
		</section>
	);
}
