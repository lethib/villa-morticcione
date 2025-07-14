import { Bed } from "lucide-react";
import { BaseCard } from "./BaseCard";

const bedroomsBathImages = [
  "/images/bedrooms_bath/bedroom1/chambre.avif",
  "/images/bedrooms_bath/bedroom1/sdb-1.jpg",
  "/images/bedrooms_bath/bedroom3/chambre-3.jpg",
  "/images/bedrooms_bath/bedroom2/sdb-2.jpg",
  "/images/bedrooms_bath/bedroom2/chambre-2.jpg",
];

const data = {
  icon: <Bed className="w-6 h-6 text-white" />,
  images: bedroomsBathImages,
  title: "Chambres & Sanitaires",
  color: "bg-secondary",
  items: [
    "La villa dispose de 3 chambres, chacune avec sa salle d'eau.",
    "Deux chambres sont équipées d'un lit double de 140cm et la troisième d'un lit double 140cm et d'un lit simple 90 cm.",
    "Un canapé banquette dans le salon permet un couchage supplémentaire.",
    "Un lit parapluie est mis à disposition pour les plus petits.",
    "La salle de bain de la suite parentale est équipée d'une baignoire et d'un WC.",
  ],
};

export const BedroomCard = () => {
  return <BaseCard data={data} />;
};
