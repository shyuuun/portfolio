import Avatar from "@/components/avatar";
import Section from "@/components/section";
import { LOST_IN_BYTES_SITE } from "@/constants";

export default function AboutMeSection({ id }: { id?: string }) {
	return (
		<Section id={id}>
			<div className="flex items-center gap-4 mb-4">
				<Avatar src="/me.jpg" srcAlt="Frederick Vigilia" size={128} />
				<div>
					<h1 className="text-2xl font-bold">Frederick Vigilia</h1>
					<p>Software Developer | Hobbyist</p>
				</div>
			</div>
			<p className="mb-4">
				Hi! I'm a full stack developer based in Manila, Philippines. I
				specialize in building mobile and web apps. I'm passionate about
				clean architecture, great user interface, and shipping products
				that people love to use.
			</p>
			<p className="mb-4">
				When I'm offline, I usually do play games on my nintendo switch
				and write a reviews for my blog,{" "}
				<a href={`${LOST_IN_BYTES_SITE}`}>"Lost in Bytes",</a> where I
				can share my thoughts on the titles I've played.
			</p>
		</Section>
	);
}
