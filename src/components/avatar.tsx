import Image from "next/image";

type AvatarProps = {
	src: string;
	srcAlt: string;
	size?: number;
};

export default function Avatar({ src, srcAlt, size = 64 }: AvatarProps) {
	return (
		<Image
			src={src}
			alt={srcAlt}
			width={size}
			height={size}
			className="rounded-full object-cover"
		/>
	);
}
