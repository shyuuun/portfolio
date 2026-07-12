import Image from "next/image";
import Link from "next/link";

type CardProps = {
	src: string;
	alt: string;
	href?: string;
	description?: string;
};

export default function Card({ src, alt, href, description }: CardProps) {
	const cardBody = (
		<article className="w-full">
			<div className="border hover:border-primary transition-colors">
				<Image
					src={src}
					alt={alt}
					width={1280}
					height={720}
					className="object-cover"
				/>
			</div>
			{description && (
				<p className="text-sm sm:text-base mt-2">{description}</p>
			)}
		</article>
	);

	if (href) {
		return (
			<Link href={href} className="block">
				{cardBody}
			</Link>
		);
	}

	return cardBody;
}
