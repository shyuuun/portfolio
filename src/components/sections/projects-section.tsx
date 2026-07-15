"use client";
import Button from "../button";
import Card from "../card";
import Section from "../section";
import { useState } from "react";

export default function ProjectsSection({ id }: { id?: string }) {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	function handleExpandButton() {
		setIsExpanded(!isExpanded);
	}

	return (
		<Section id={id} sectionNumber={2} sectionTitle="Projects">
			<div className="grid grid-cols-2 gap-4 mb-4">
				<Card src="/hoppura.jpg" alt="Hoppura" />
				<Card src="/lost_in_bytes.jpg" alt="Hoppura" />
				<Card src="/philgo.jpg" alt="Hoppura" />
				{/* <Card src="/hoppura.jpg" alt="Hoppura" /> */}
			</div>
			{!isExpanded && (
				<div className="flex justify-center">
					<Button onClick={handleExpandButton}>More Projects</Button>
				</div>
			)}
		</Section>
	);
}
