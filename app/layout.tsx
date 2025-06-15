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

        <main className="
          max-h-full
          overflow-hidden
          flex-1
          flex
          sm:px-12 md:px-32 xl:px-48 
        ">
          <div className="
            flex-1
            border-0 
            border-pink-600
            bg-black
            overflow-auto
          ">
            <div className="
              h-auto
              overflow-auto
              p-4 m-8 
              border rounded-lg 
              border-white
              flex-1 flex-row items-center justify-center">
              {children}
            </div>

          </div>
        </main>

        <GlobalFooter />
      </body>
    </html>
  );
}
