import type { Metadata } from "next";
import { Gamja_Flower } from "next/font/google";
import "./globals.css";

import ClickDoodles from "@/components/click-doodles";

const gamjaFlower = Gamja_Flower({
	variable: "--font-gamja-flower",
	weight: "400",
});

export const metadata: Metadata = {
	title: "kokutaro",
	description: "Welcome to kokutaro's website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${gamjaFlower.variable} h-full antialiased`}
		>
			<body>
				{children}
				<ClickDoodles />
			</body>
		</html>
	);
}
