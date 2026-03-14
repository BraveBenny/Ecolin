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
  metadataBase: new URL('https://ecolin.ca'),
  title: {
    template: "%s | Ecolin",
    default: "Ecolin | Eco-Friendly Garment Storage",
  },
  description: "Ecolin provides premium breathable muslin garment and sweater storage bags designed for natural clothing preservation and long-term care.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ecolin | Eco-Friendly Garment Storage",
    description: "Premium breathable muslin garment and sweater storage bags designed for natural clothing preservation.",
    url: "https://ecolin.ca",
    siteName: "Ecolin",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ecolin | Eco-Friendly Garment Storage",
    description: "Premium breathable muslin garment and sweater storage bags designed for natural clothing preservation.",
  }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ecolin",
              "url": "https://ecolin.ca",
              "logo": "https://ecolin.ca/images/logo-minimal.png",
              "description": "Ecolin provides premium eco-friendly muslin garment bags and sweater storage bags for optimal clothing preservation.",
              "brand": {
                "@type": "Brand",
                "name": "Ecolin"
              }
            })
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
