import AboutMeSection from "@/components/sections/about-me-section";
import ContactSection from "@/components/sections/contact-section";
import ExperienceSection from "@/components/sections/experience-section";
import MarqueeSection from "@/components/sections/marquee-section";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";

export default function Home() {
	return (
		<main>
			<AboutMeSection />
			<SkillsSection />
			<MarqueeSection />
			<ProjectsSection />
			<ExperienceSection />
			<ContactSection />
		</main>
	);
}
