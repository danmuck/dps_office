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
    <html lang="en" className="h-screen">
      <body
        className={`
          flex flex-col h-full 
          ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalHeader />

        <main className="
          flex-1
          sm: px-12 md:px-32 xl:px-56 
        ">
          <div className="
            h-full 
            border-0 
            border-pink-600
            bg-black
            overflow-auto
          ">
            <div className="
              p-4 m-8 
              h-full 
              border rounded-lg 
              border-red-800
              flex-row items-center justify-center">
              {children}
            </div>

          </div>
        </main>

        <GlobalFooter />
      </body>
    </html>
  );
}
