import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalHeader from "./api/components/global/Header";
import GlobalFooter from "./api/components/global/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "dps_office",
	description: "daily assistant dashboard",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="overflow-auto">
			<body
				className={`
          flex flex-col h-screen 
          ${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<GlobalHeader />

				<main
					className="
          max-h-full
          overflow-hidden
          flex-1
          flex
          sm:px-4 md:px-16 xl:px-32
        "
				>
					<div
						className="
            flex-1
            border-5 
            border-none
            bg-black
            overflow-auto
          "
					>
						<div
							className="
              h-auto
              overflow-auto
              p-4 m-8 
              border rounded-lg 
              border-white
              flex-1 flex-row items-center justify-center"
						>
							{children}
						</div>
					</div>
				</main>

				<GlobalFooter />
			</body>
		</html>
	);
}
