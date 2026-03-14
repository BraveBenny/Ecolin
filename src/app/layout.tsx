import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Ecolin",
    default: "Ecolin | Premium Breathable Garment Protection",
  },
  description: "The modern standard in garment care. Protective breathable muslin storage designed to extend the life of your curated wardrobe.",
  openGraph: {
    title: "Ecolin | Premium Breathable Garment Protection",
    description: "Protective breathable muslin storage designed to extend the life of your curated wardrobe.",
    url: "https://ecolinstorage.com",
    siteName: "Ecolin",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
