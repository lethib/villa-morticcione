import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bed, Trees, Utensils, Waves } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "La Villa - Villa Morticcione",
  description:
    "Découvrez la magnifique Villa Morticcione, un joyau de l'architecture toscane situé au cœur de la campagne italienne.",
};

const features = [
  {
    icon: Bed,
    img: "/images/chambre.avif",
    title: "Chambres & Sanitaires",
    color: "bg-secondary",
    items: [
      "La villa dispose de 3 chambres, chacune avec sa salle d'eau.",
      "Deux chambres sont équipées d'un lit double de 140cm et la troisième d'un lit double 140cm et d'un lit simple 90 cm.",
      "Un canapé banquette dans le salon permet un couchage supplémentaire.",
      "Un lit parapluie est mis à disposition pour les plus petits.",
      "La salle de bain de la suite parentale est équipée d'une baignoire et d'un WC.",
    ],
  },
  {
    icon: Utensils,
    img: "/images/kitchen.avif",
    title: "Cuisine & Salon",
    color: "bg-primary",
    items: [
      "La cuisine s'ouvre sur la terrasse qui surplombe la piscine. Elle dispose de tous les équipements nécessaires : Lave-vaisselle, four, four micro-ondes, cafetière Nespresso, bouilloire, grille-pain.",
      "Un lave linge est également installé dans la cuisine.",
      "Un bar central, séparant la cuisine du salon / salle-à-manger, permet de s'installer pour un repas informel, pour cuisiner ou faire diner les enfants.",
    ],
  },
  {
    icon: Trees,
    img: "/images/outside.avif",
    title: "Extérieur",
    color: "bg-thirdly",
    items: [
      "Une grande table (12 places) avec parasol permet de s'installer pour déjeuner dehors en profitant de la vue sur la piscine.",
      "La piscine 7mx4m est entourée de caillebotis en teck. Le système d'adoucisseur au sel préservera votre peau. Elle est clôturée pour éviter que les plus jeunes puissent accéder à la piscine sans surveillance.",
      "Des transats et un salon de jardin sont installés pour se relaxer.",
    ],
  },
];

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

      {/* Features Grid */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="overflow-hidden shadow-lg border-0 bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  width={800}
                  height={500}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <div
                      className={`w-1.5 h-1.5 ${feature.color} rounded-full mt-2 flex-shrink-0`}
                    ></div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
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
