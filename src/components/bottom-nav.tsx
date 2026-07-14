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

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActive(entry.target.id);
					}
				}
			},
			{ rootMargin: "-35% 0px -35% 0px" },
		);

		for (const id of sectionIds) {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		}

		return () => observer.disconnect();
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
							onClick={() => setActive(item.id)}
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
