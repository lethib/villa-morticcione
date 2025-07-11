import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, Euro, Info } from "lucide-react";
import { CalendarMonth } from "./_components/CalendarMonth";

const pricingTiers = [
  {
    name: "Basse Saison",
    price: "1200",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-500",
    period: "Automne, hiver et début printemps",
  },
  {
    name: "Moyenne Saison",
    price: "1800",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-500",
    period: "Mai, juin et septembre",
  },
  {
    name: "Haute Saison",
    price: "2500",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-500",
    period: "Juillet et première moitié d'août",
  },
  {
    name: "Très Haute Saison",
    price: "3000",
    color: "from-red-700 to-red-800",
    bgColor: "bg-red-700",
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
          Consultez nos disponibilités et découvrez nos tarifs selon la saison.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Calendar Section */}
        <div className="lg:col-span-2">
          <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-2 text-xl text-gray-900">
                <CalendarIcon className="w-6 h-6 text-primary" />
                Disponibilités 2025
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
                      <div className="w-5 h-5 bg-green-500 rounded"></div>
                      <span className="text-sm text-gray-600">
                        Basse Saison
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-yellow-500 rounded"></div>
                      <span className="text-sm text-gray-600">
                        Moyenne Saison
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-pink-500 rounded"></div>
                      <span className="text-sm text-gray-600">
                        Haute Saison
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-red-700 rounded"></div>
                      <span className="text-sm text-gray-600">
                        Très Haute Saison
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-black rounded"></div>
                      <span className="text-sm text-gray-600">Réservé</span>
                    </div>
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
                  Forfait de 200€ par séjour
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Ce forfait couvre :
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Le ménage de fin de séjour</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>La taxe de séjour</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Location de linge
                </h4>
                <p className="text-sm text-gray-600">
                  Draps et serviettes de toilette disponibles pour 20€/personne
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
