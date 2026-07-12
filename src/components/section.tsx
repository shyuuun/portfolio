type SectionProps = {
	children: React.ReactNode;
	sectionTitle?: string;
	sectionNumber?: number;
};

export default function Section({
	children,
	sectionTitle,
	sectionNumber,
}: SectionProps) {
	return (
		<section className="container mt-4 relative">
			{/* title will be display on the left side */}
			<div className="hidden sm:block absolute top-0 -left-12">
				{sectionNumber && (
					<p className="text-primary text-md">0{sectionNumber}</p>
				)}
				{sectionTitle && (
					<p className="text-xs text-gray-500">
						{sectionTitle.toUpperCase()}
					</p>
				)}
			</div>

			{/* title will be display on the top */}

			{(sectionNumber || sectionTitle) && (
				<div className="flex items-center gap-2 sm:hidden mb-4">
					{sectionNumber && (
						<p className="text-primary text-xs">0{sectionNumber}</p>
					)}
					<p className="text-xs text-gray-500">//</p>
					{sectionTitle && (
						<p className="text-xs text-gray-500">
							{sectionTitle.toUpperCase()}
						</p>
					)}
				</div>
			)}
			{children}
		</section>
	);
}
