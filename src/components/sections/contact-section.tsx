"use client";

import { motion } from "motion/react";
import Section from "@/components/section";
import { EMAIL, GITHUB_PROFILE, LINKED_IN_PROFILE } from "@/constants";

type ContactLink = {
	label: string;
	href: string;
};

const LINKS: ContactLink[] = [
	{ label: "email", href: `mailto:${EMAIL}` },
	{ label: "github", href: GITHUB_PROFILE },
	{ label: "linkedin", href: LINKED_IN_PROFILE },
];

export default function ContactSection({ id }: { id?: string }) {
	return (
		<div className="pb-8">
			<Section id={id} sectionNumber={4} sectionTitle="Contact">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={{
						hidden: {},
						visible: { transition: { staggerChildren: 0.12 } },
					}}
				>
					<motion.p
						className=""
						variants={{
							hidden: { opacity: 0 },
							visible: { opacity: 1 },
						}}
					>
						{
							"I'm currently open to freelance opportunities and interesting projects. Whether you have a question, a collaboration idea, or just want to say hi — feel free to reach out."
						}
					</motion.p>

					{LINKS.map((link) => (
						<div className="mt-4">
							<motion.a
								key={link.label}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								variants={{
									hidden: { opacity: 0, y: 12 },
									visible: { opacity: 1, y: 0 },
								}}
								className="text-primary hover:brightness-110 transition"
							>
								{link.label}
							</motion.a>
						</div>
					))}
				</motion.div>
			</Section>
		</div>
	);
}
