"use client";

import { useEffect, useState } from "react";
import {
	BriefcaseBusiness,
	FolderKanban,
	Mail,
	Moon,
	Sun,
	Terminal,
	User,
} from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

const NAV_ITEMS = [
	{ id: "about", icon: User, label: "About" },
	{ id: "skills", icon: Terminal, label: "Skills" },
	{ id: "projects", icon: FolderKanban, label: "Projects" },
	{ id: "experience", icon: BriefcaseBusiness, label: "Experience" },
	{ id: "contact", icon: Mail, label: "Contact" },
];

function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <div className="h-5 w-5" />;
	}

	const isDark = theme === "dark";

	return (
		<motion.button
			onClick={() => setTheme(isDark ? "light" : "dark")}
			aria-label="Toggle theme"
			className="rounded-xl p-2.5 text-foreground/40 hover:text-foreground transition-colors"
			whileTap={{ scale: 0.8 }}
		>
			<motion.div
				key={isDark ? "dark" : "light"}
				initial={{ rotate: -90, scale: 0 }}
				animate={{ rotate: 0, scale: 1 }}
				transition={{ duration: 0.3, ease: "easeOut" }}
			>
				{isDark ? (
					<Sun size={20} strokeWidth={2} />
				) : (
					<Moon size={20} strokeWidth={2} />
				)}
			</motion.div>
		</motion.button>
	);
}

export default function BottomNav() {
	const [active, setActive] = useState("about");

	useEffect(() => {
		const sectionIds = NAV_ITEMS.map((item) => item.id);

		// NOTE: For illustration purposes to visualize the observer
		// const top = document.createElement("div");
		// const bottom = document.createElement("div");
		// const baseStyle =
		// 	"position:fixed;left:0;right:0;z-index:9999;pointer-events:none;opacity:0.3;";
		// top.style.cssText = baseStyle + "top:0;height:10%;background:red;";
		// bottom.style.cssText =
		// 	baseStyle + "bottom:0;height:50%;background:blue;";
		// document.body.append(top, bottom);

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActive(entry.target.id);
						// console.log(`LOGGED: ${entry.target.id}`);
					}
				}
			},
			{ rootMargin: "-10% 0px -50% 0px", threshold: 0.3 },
		);

		for (const id of sectionIds) {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		}

		return () => {
			observer.disconnect();
			// top.remove();
			// bottom.remove();
		};
	}, []);

	return (
		<nav className="fixed bottom-4 left-0 right-0 z-50 flex  justify-center ">
			<div className="flex items-center gap-4 rounded-full bg-background shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-6 py-2 ">
				{NAV_ITEMS.map((item) => {
					const Icon = item.icon;
					const isActive = active === item.id;

					return (
						<a
							key={item.id}
							href={`#${item.id}`}
							aria-label={item.label}
							className={`rounded-xl p-2 transition-colors ${
								isActive
									? "bg-primary text-white"
									: "text-foreground/40 hover:text-foreground"
							}`}
						>
							<Icon size={20} strokeWidth={2} />
						</a>
					);
				})}
				<ThemeToggle />
			</div>
		</nav>
	);
}
