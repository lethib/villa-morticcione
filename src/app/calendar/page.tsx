import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, Euro, Info } from "lucide-react";
import { Metadata } from "next";
import { CalendarMonth } from "./_components/CalendarMonth";

export const metadata: Metadata = {
  title: "Calendrier & Tarifs - Disponibilités Villa Morticcione",
  description:
    "Consultez les disponibilités et tarifs de Villa Morticcione selon les saisons. De 1200€ à 3000€ par semaine. Réservez votre séjour en Corse près de Porto Vecchio et Saint Cyprien.",
  keywords: [
    "tarifs villa morticcione",
    "prix location villa corse",
    "disponibilités villa porto vecchio",
    "calendrier réservation corse",
    "tarif villa saint cyprien",
    "prix semaine villa corse",
    "réservation villa corse du sud",
  ],
  openGraph: {
    title: "Calendrier & Tarifs - Disponibilités Villa Morticcione",
    description:
      "Tarifs de 1200€ à 3000€ par semaine selon la saison. Consultez les disponibilités pour votre séjour en Corse.",
    url: "https://www.villa-morticcione.com/calendar",
    images: [
      {
        url: "/images/house.avif",
        width: 1200,
        height: 630,
        alt: "Villa Morticcione - Calendrier et tarifs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calendrier & Tarifs - Villa Morticcione",
    description:
      "Tarifs de 1200€ à 3000€ par semaine. Consultez les disponibilités pour votre séjour en Corse.",
    images: ["/images/house.avif"],
  },
  alternates: {
    canonical: "https://www.villa-morticcione.com/calendar",
  },
};

const pricingTiers = [
  {
    name: "Basse Saison",
    price: "1200",
    color: "from-calendar-low-season/75 to-calendar-low-season",
    period: "Automne, hiver et début printemps",
  },
  {
    name: "Moyenne Saison",
    price: "1800",
    color: "from-calendar-mid-season/75 to-calendar-mid-season",
    period: "Mai, juin et septembre",
  },
  {
    name: "Haute Saison",
    price: "2500",
    color: "from-calendar-high-season/75 to-calendar-high-season",
    period: "Juillet et première moitié d'août",
  },
  {
    name: "Très Haute Saison",
    price: "3000",
    color: "from-calendar-very-high-season/75 to-calendar-very-high-season",
    period: "Seconde moitié d'août et ponts",
  },
];

export default function Calendar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Calendrier & Tarifs
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Consultez nos tarifs selon la saison.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Calendar Section */}
        <div className="lg:col-span-2">
          <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-2 text-xl text-gray-900">
                <CalendarIcon className="w-6 h-6 text-primary" />
                Calendrier 2025
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white rounded-lg p-6 shadow-inner">
                {/* 6-month calendar grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
                  <CalendarMonth monthKey="avr-25" />
                  <CalendarMonth monthKey="mai-25" />
                  <CalendarMonth monthKey="juin-25" />
                  <CalendarMonth monthKey="juil-25" />
                  <CalendarMonth monthKey="aout-25" />
                  <CalendarMonth monthKey="sept-25" />
                </div>

                {/* Legend */}
                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Légende</h4>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-calendar-low-season rounded"></div>
                      <span className="text-sm text-gray-600">
                        Basse Saison
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-calendar-mid-season rounded"></div>
                      <span className="text-sm text-gray-600">
                        Moyenne Saison
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-calendar-high-season rounded"></div>
                      <span className="text-sm text-gray-600">
                        Haute Saison
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-calendar-very-high-season rounded"></div>
                      <span className="text-sm text-gray-600">
                        Très Haute Saison
                      </span>
                    </div>
                    {/* <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-black rounded"></div>
                      <span className="text-sm text-gray-600">Réservé</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Section */}
        <div className="space-y-6">
          <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-xl text-gray-900">
                <Euro className="w-6 h-6 text-primary" />
                Tarifs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-xl p-4 bg-gradient-to-r ${tier.color} text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">{tier.name}</h3>
                      <Badge
                        variant="secondary"
                        className="bg-white/20 text-white border-0"
                      >
                        {tier.price}€
                      </Badge>
                    </div>
                    <p className="text-sm opacity-90 mb-1">par semaine</p>
                    <p className="text-xs opacity-75">{tier.period}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Additional Info */}
          <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-white">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg text-gray-900">
                <Info className="w-5 h-5 text-blue-500" />
                Informations importantes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Forfait Ménage de 200€ par séjour
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Ce forfait couvre le ménage de fin de séjour.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Location de linge
                </h4>
                <p className="text-sm text-gray-600">
                  Draps et serviettes de toilette disponibles pour 20€/personne.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Taxe de séjour
                </h4>
                <p className="text-sm text-gray-600">
                  1,60€ / personne / jour.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
