"use client";

import { useEffect, useState } from "react";
import {
	BriefcaseBusiness,
	FolderKanban,
	Mail,
	Terminal,
	User,
} from "lucide-react";

const NAV_ITEMS = [
	{ id: "about", icon: User, label: "About" },
	{ id: "skills", icon: Terminal, label: "Skills" },
	{ id: "projects", icon: FolderKanban, label: "Projects" },
	{ id: "experience", icon: BriefcaseBusiness, label: "Experience" },
	{ id: "contact", icon: Mail, label: "Contact" },
];

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
						console.log(`LOGGED: ${entry.target.id}`);
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
		<nav className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
			<div className="flex items-center gap-4 rounded-full px-6 py-3 backdrop-blur-sm shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
				{NAV_ITEMS.map((item) => {
					const Icon = item.icon;
					const isActive = active === item.id;

					return (
						<a
							key={item.id}
							href={`#${item.id}`}
							aria-label={item.label}
							className={`rounded-xl p-2.5 transition-colors ${
								isActive
									? "bg-primary text-white"
									: "text-foreground/40 hover:text-foreground"
							}`}
						>
							<Icon size={20} strokeWidth={2} />
						</a>
					);
				})}
			</div>
		</nav>
	);
}
