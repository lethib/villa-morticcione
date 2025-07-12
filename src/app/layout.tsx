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
  title: {
    default: "Villa Morticcione - Location Villa Corse avec Piscine Privée",
    template: "%s | Villa Morticcione",
  },
  description:
    "Villa de charme en Corse du Sud près de Porto Vecchio. 3 chambres, piscine privée, à 1km de la plage de Saint Cyprien. Location saisonnière pour des vacances inoubliables.",
  keywords: [
    "villa corse",
    "location villa porto vecchio",
    "villa piscine privée corse",
    "saint cyprien corse",
    "location saisonnière corse du sud",
    "villa 3 chambres corse",
    "vacances corse",
    "plage saint cyprien",
  ],
  authors: [{ name: "Villa Morticcione" }],
  creator: "Villa Morticcione",
  publisher: "Villa Morticcione",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.villa-morticcione.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.villa-morticcione.com",
    title: "Villa Morticcione - Location Villa Corse avec Piscine Privée",
    description:
      "Villa de charme en Corse du Sud près de Porto Vecchio. 3 chambres, piscine privée, à 1km de la plage de Saint Cyprien.",
    siteName: "Villa Morticcione",
    images: [
      {
        url: "/images/house.avif",
        width: 1200,
        height: 630,
        alt: "Villa Morticcione - Vue extérieure avec piscine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa Morticcione - Location Villa Corse avec Piscine Privée",
    description:
      "Villa de charme en Corse du Sud près de Porto Vecchio. 3 chambres, piscine privée, à 1km de la plage de Saint Cyprien.",
    images: ["/images/house.avif"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // À remplacer par votre code de vérification Google
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-gray-50 to-white`}
      >
        <Header />
        <main className="pb-16">{children}</main>
      </body>
    </html>
  );
}
