"use client";

import { motion } from "motion/react";

export default function Contact() {
	return (
		<section
			id="contact"
			className="py-24 px-6 max-w-lg mx-auto text-center relative"
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="mb-12 flex justify-center"
			>
				<h2 className="section-heading text-3xl sm:text-4xl font-bold">
					say hi!
				</h2>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className="scrapbook-card p-8 sm:p-10"
			>
				<p className="text-lg mb-8">
					Got a cool project, a fun idea, or just want to chat about
					obscure programming languages? I&apos;m all ears.
				</p>

				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="flex flex-col gap-4 items-center"
				>
					<a
						href="mailto:hello@kokutaro.dev"
						className="inline-flex items-center gap-2 text-xl hover:text-primary transition-colors"
					>
						<span className="text-xl">&#9993;</span>
						hello@kokutaro.dev
					</a>


					<div className="flex gap-6 mt-4">
						<a
							href="https://github.com/kokutaro"
							target="_blank"
							rel="noopener noreferrer"
							className="text-base text-primary/40 hover:text-primary transition-colors"
						>
							github
						</a>
						<a
							href="https://linkedin.com/in/kokutaro"
							target="_blank"
							rel="noopener noreferrer"
							className="text-base text-primary/40 hover:text-primary transition-colors"
						>
							linkedin
						</a>
						<a
							href="https://twitter.com/kokutaro"
							target="_blank"
							rel="noopener noreferrer"
							className="text-base text-primary/40 hover:text-primary transition-colors"
						>
							twitter
						</a>
					</div>
				</motion.div>
			</motion.div>

			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.5 }}
				className="text-xs text-foreground/30 mt-16"
			>
				made with scribbles &amp; coffee
			</motion.p>
		</section>
	);
}
