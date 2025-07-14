import { Trees } from "lucide-react";
import { BaseCard } from "./BaseCard";

const outsideImages = [
  "/images/outside/terrace/terrace.jpg",
  "/images/outside/terrace/terrace-2.jpg",
  "/images/outside/terrace/nigh-terrace.jpg",
  "/images/outside/outside-2.jpg",
  "/images/outside/outside-3.jpg",
  "/images/outside/night-outside.jpeg",
];

const data = {
  icon: <Trees className="w-6 h-6 text-white" />,
  images: outsideImages,
  title: "Extérieur",
  color: "bg-thirdly",
  items: [
    "Une grande table (12 places) avec parasol permet de s'installer pour déjeuner dehors en profitant de la vue sur la piscine.",
    "La piscine 7mx4m est entourée de caillebotis en teck. Le système d'adoucisseur au sel préservera votre peau. Elle est clôturée pour éviter que les plus jeunes puissent accéder à la piscine sans surveillance.",
    "Des transats et un salon de jardin sont installés pour se relaxer.",
  ],
};

export const OutsideCard = () => {
  return <BaseCard data={data} />;
};
