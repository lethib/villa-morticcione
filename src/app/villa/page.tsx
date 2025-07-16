import { Badge } from "@/components/ui/badge";
import { Waves } from "lucide-react";
import Image from "next/image";
import { BedroomCard } from "./_components/BedroomCard";
import { KitchenCard } from "./_components/KitchenCard";
import { OutsideCard } from "./_components/OutsideCard";

export const metadata = {
  title: "La Villa - Équipements et Aménagements | Villa Morticcione",
  description:
    "Découvrez les équipements de Villa Morticcione : 3 chambres avec salles d'eau, cuisine équipée, salon, piscine 7x4m avec système au sel, terrasse avec vue. Villa de charme près de Porto Vecchio.",
  keywords: [
    "villa morticcione équipements",
    "3 chambres corse",
    "piscine 7x4 corse",
    "cuisine équipée villa corse",
    "salle d'eau villa porto vecchio",
    "terrasse piscine corse",
    "villa aménagée saint cyprien",
  ],
  openGraph: {
    title: "La Villa - Équipements et Aménagements | Villa Morticcione",
    description:
      "3 chambres avec salles d'eau, cuisine équipée, piscine 7x4m au sel. Villa de charme entièrement équipée près de Porto Vecchio.",
    url: "https://www.villa-morticcione.com/villa",
    images: [
      {
        url: "/images/kitchen.avif",
        width: 1200,
        height: 630,
        alt: "Cuisine équipée Villa Morticcione",
      },
      {
        url: "/images/chambre.avif",
        width: 1200,
        height: 630,
        alt: "Chambre Villa Morticcione avec salle d'eau",
      },
      {
        url: "/images/outside.avif",
        width: 1200,
        height: 630,
        alt: "Terrasse et piscine Villa Morticcione",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Villa - Équipements et Aménagements | Villa Morticcione",
    description:
      "3 chambres avec salles d'eau, cuisine équipée, piscine 7x4m au sel. Villa entièrement équipée près de Porto Vecchio.",
    images: ["/images/kitchen.avif"],
  },
  alternates: {
    canonical: "https://www.villa-morticcione.com/villa",
  },
};

export default function Villa() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Découvrez la Villa
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Un havre de paix au cœur de la Corse, avec tout le confort moderne
          pour des vacances inoubliables.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        <OutsideCard />
        <BedroomCard />
        <KitchenCard />
      </div>

      {/* Media Section */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative group overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/house.avif"
            alt="Villa Morticcione"
            width={800}
            height={500}
            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <Badge variant="secondary" className="bg-white/90 text-gray-800">
              <Waves className="w-4 h-4 mr-1" />
              Vue piscine
            </Badge>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <iframe
            width="100%"
            height="320"
            className="w-full h-80"
            src="https://www.youtube.com/embed/RubCdxgDI8s"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Visite virtuelle Villa Morticcione"
          />
        </div>
      </div>
    </div>
  );
}
