"use client";

import { motion } from "motion/react";
import Section from "@/components/section";

type SkillCategory = {
	label: string;
	skills: string[];
};

const SKILLS: SkillCategory[] = [
	{
		label: "languages",
		skills: ["TypeScript", "JavaScript", "Dart", "C++", "PHP"],
	},
	{
		label: "frontend",
		skills: ["React", "Next.js", "Tailwind CSS", "Motion", "HTML", "CSS"],
	},
	{
		label: "mobile",
		skills: ["Flutter"],
	},
	{
		label: "backend",
		skills: ["Node.js", "Express.js", "REST APIs"],
	},
	{
		label: "database",
		skills: ["PostgreSQL", "Supabase", "Firebase"],
	},
	{
		label: "tools",
		skills: [
			"Git",
			"Docker",
			"Figma",
			"Claude Code",
			"Opencode",
			"Obsidian",
		],
	},
];

export default function SkillsSection({ id }: { id?: string }) {
	return (
		<Section id={id} sectionTitle="skills" sectionNumber={1}>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				variants={{
					hidden: {},
					visible: { transition: { staggerChildren: 0.15 } },
				}}
				className="text-sm border-2"
			>
				<motion.div
					className="px-4 py-2"
					variants={{
						hidden: { opacity: 0 },
						visible: { opacity: 1 },
					}}
				>
					<div>
						<span className="text-foreground/40">$ </span>
						<span>ls skills/</span>
					</div>
					<div className="flex flex-wrap gap-x-4 mt-0.5 ml-5">
						{SKILLS.map((cat) => (
							<span key={cat.label} className="text-primary">
								{cat.label}/
							</span>
						))}
					</div>
				</motion.div>

				{SKILLS.map((cat) => (
					<motion.div
						key={cat.label}
						variants={{
							hidden: { opacity: 0, y: 12 },
							visible: { opacity: 1, y: 0 },
						}}
						className="mt-3 px-4 py-2"
					>
						<div>
							<span className="text-foreground/40">$ </span>
							<span>ls skills/</span>
							<span className="text-primary">{cat.label}/</span>
						</div>
						<div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 mt-0.5 ml-5">
							{cat.skills.map((skill) => (
								<span key={skill}>{skill}</span>
							))}
						</div>
					</motion.div>
				))}
			</motion.div>
			<div
				className="h-4"
				style={{
					backgroundImage: "url('/border.png')",
					backgroundRepeat: "repeat",
					backgroundSize: "48px",
				}}
			/>
		</Section>
	);
}
