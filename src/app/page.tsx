import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Plane } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Villa Morticcione - Location Villa Corse avec Piscine Privée à Porto Vecchio",
  description:
    "Découvrez Villa Morticcione, une charmante villa de 3 chambres avec piscine privée à seulement 1km de la plage de Saint Cyprien près de Porto Vecchio. Location saisonnière en Corse du Sud pour des vacances inoubliables.",
  keywords: [
    "villa morticcione",
    "location villa corse porto vecchio",
    "villa piscine privée saint cyprien",
    "vacances corse du sud",
    "location saisonnière porto vecchio",
    "villa 3 chambres corse",
    "plage saint cyprien corse",
  ],
  openGraph: {
    title: "Villa Morticcione - Location Villa Corse avec Piscine Privée",
    description:
      "Villa de charme avec piscine privée à 1km de la plage de Saint Cyprien, Porto Vecchio",
    url: "https://www.villa-morticcione.com",
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
      "Villa de charme avec piscine privée à 1km de la plage de Saint Cyprien, Porto Vecchio",
    images: ["/images/house.avif"],
  },
  alternates: {
    canonical: "https://www.villa-morticcione.com",
  },
};

function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-[#a0b4a0w] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(251,146,60,0.05),transparent_70%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <div className="space-y-4">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent leading-tight">
              Villa Morticcione
            </h1>
            <div className="mt-4 h-1 w-24 bg-primary rounded-full mx-auto"></div>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-light tracking-wide">
            Plage de Saint Cyprien - Porto Vecchio
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-light">
              Charmante villa située à 1 kilomètre de la magnifique plage de
              Saint Cyprien.
              <br className="block" />
              Avec sa piscine privée, elle vous attend pour des vacances de
              détente, au grand calme, sous le soleil de la Corse.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <div className="flex items-center gap-2 text-gray-600 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-medium">3 suites climatisées</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-sm font-medium">
                Jusqu&apos;à 8 personnes
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
              <div className="w-2 h-2 bg-thirdly rounded-full"></div>
              <span className="text-sm font-medium">1km de la plage</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const indexToImage = [
    "/images/outside/terrace/terrace.jpg",
    "/images/outside/night-outside.jpeg",
    "/images/outside/outside-2.jpg",
    "/images/outside/outside-3.jpg",
  ];

  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Image */}
          <div className="lg:col-span-2">
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/house.avif"
                alt="Villa Morticcione"
                width={800}
                height={500}
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-white/90 text-gray-800"
                  >
                    Villa au calme
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-white/90 text-gray-800"
                  >
                    Proche mer
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-white/90 text-gray-800"
                  >
                    Piscine privée
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery & Info */}
          <div className="space-y-6">
            {/* Mini Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative group overflow-hidden rounded-xl shadow-lg"
                >
                  <Image
                    src={indexToImage[i - 1]}
                    alt={`Villa vue ${i}`}
                    width={200}
                    height={96}
                    className="w-full h-24 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              ))}
            </div>

            {/* Location Card */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Villa Morticcione
                    </h3>
                    <p className="text-sm text-gray-600">
                      Lieu dit Morticcione
                    </p>
                  </div>
                </div>

                <Link
                  className="space-y-2 text-sm text-gray-600"
                  href="https://maps.app.goo.gl/EvVZsiVzPivP6LiQ9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Route de Pinarello</p>
                  <p>20137 Lecci, Corse</p>
                  <p className="font-mono text-xs bg-gray-100 rounded px-2 py-1 inline-block hover:text-blue-500">
                    GPS: 41°38&apos;53&quot;N 9°20&apos;40&quot;E
                  </p>
                </Link>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    {" "}
                    <Clock className="w-4 h-4 text-primary" />
                    <span>15 min de Porto Vecchio</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Plane className="w-4 h-4 text-secondary" />
                    <span>30 min de l&apos;aéroport de Figari</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
