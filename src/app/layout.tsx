import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { metadataConfig } from "@/config/metadata";

const geistSans = Playfair_Display({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = metadataConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
