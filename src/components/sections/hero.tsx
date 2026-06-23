"use client";

import { motion } from "motion/react";

export default function Hero() {
	return (
		<section
			id="hero"
			className="min-h-screen flex flex-col items-center justify-center relative px-6 text-center gap-4"
		>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className="relative"
			>
				<h1 className="text-6xl sm:text-8xl font-bold tracking-tight">
					Frederick Vigilia
				</h1>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className="relative"
			>
				<h1 className="text-2xl sm:text-4xl font-bold tracking-tight">
					Software Developer
				</h1>
			</motion.div>

			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, delay: 0.3 }}
				className="text-xl sm:text-2xl text-foreground/70 max-w-md leading-relaxed"
			>
				I build web and mobile applications
				<br />
			</motion.p>
		</section>
	);
}
