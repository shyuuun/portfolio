import Link from "next/link";
import Button from "../button";
import Card from "../card";
import Section from "../section";

export default function ProjectsSection() {
	return (
		<Section sectionNumber={2} sectionTitle="Projects">
			<div className="grid grid-cols-2 gap-4 mb-4">
				<Card
					src="/hoppura.jpg"
					alt="Hoppura"
					description="Cosplay social app"
				/>
				<Card
					src="/hoppura.jpg"
					alt="Hoppura"
					description="Lost in Bytes"
				/>
				<Card src="/hoppura.jpg" alt="Hoppura" description="Philgo" />
				<Card src="/hoppura.jpg" alt="Hoppura" description="Rebling" />
			</div>
			<div className="flex justify-center">
				<Link href={"/projects"}>
					<Button>More Projects</Button>
				</Link>
			</div>
		</Section>
	);
}
