import BottomNav from "@/components/bottom-nav";
import Section from "@/components/section";
import AboutMeSection from "@/components/sections/about-me-section";
import ContactSection from "@/components/sections/contact-section";
import ExperienceSection from "@/components/sections/experience-section";
import MarqueeSection from "@/components/sections/marquee-section";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";
import Image from "next/image";

export default function Home() {
	return (
		<main className="pb-20">
			<AboutMeSection id="about" />
			<SkillsSection id="skills" />
			<MarqueeSection />
			<ProjectsSection id="projects" />
			<ExperienceSection id="experience" />
			<ContactSection id="contact" />
			<Section>
				<Image
					src={"/kokutaro.svg"}
					alt={"kokutaro icon"}
					width={500}
					height={480}
					className="mx-auto"
				/>
			</Section>
			<BottomNav />
		</main>
	);
}
