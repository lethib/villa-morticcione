import { Header } from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Villa Morticcione - Luxury Villa Rental in Tuscany",
  description:
    "Experience the ultimate luxury at Villa Morticcione, a stunning private villa rental in the heart of Tuscany. Perfect for weddings, events, and exclusive getaways.",
  keywords: [
    "villa rental",
    "Tuscany",
    "luxury accommodation",
    "wedding venue",
    "private villa",
    "Italy vacation",
  ],
  authors: [{ name: "Villa Morticcione" }],
  openGraph: {
    title: "Villa Morticcione - Luxury Villa Rental in Tuscany",
    description:
      "Experience the ultimate luxury at Villa Morticcione, a stunning private villa rental in the heart of Tuscany.",
    type: "website",
    url: "https://villamorticcione.com",
    siteName: "Villa Morticcione",
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa Morticcione - Luxury Villa Rental in Tuscany",
    description:
      "Experience the ultimate luxury at Villa Morticcione, a stunning private villa rental in the heart of Tuscany.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-gray-50 to-white`}
      >
        <Header />
        <main className="pb-16">{children}</main>
      </body>
    </html>
  );
}
