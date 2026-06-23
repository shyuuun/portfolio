import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";
import Nav from "@/components/sections/nav";

export default function Home() {
	return (
		<main>
			<Nav />
			<Hero />
			<About />
			<Projects />
			<Skills />
			<Experience />
			<Contact />
		</main>
	);
}
