import type { Metadata } from "next";
import { Reddit_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const redditMono = Reddit_Mono({
	variable: "--font-reddit-mono",
	weight: "500",
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
			className={`${redditMono.variable} h-full antialiased`}
			suppressHydrationWarning
		>
			<body>
				<ThemeProvider
					attribute="data-theme"
					defaultTheme="light"
					enableSystem={false}
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
