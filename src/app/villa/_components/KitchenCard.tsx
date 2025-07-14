import { Utensils } from "lucide-react";
import { BaseCard } from "./BaseCard";

const kitchenImages = [
  "/images/kitchen_living/kitchen.avif",
  "/images/kitchen_living/living_room.jpg",
  "/images/kitchen_living/living_room-2.avif",
];

const data = {
  icon: <Utensils className="w-6 h-6 text-white" />,
  images: kitchenImages,
  title: "Cuisine & Salon",
  color: "bg-primary",
  items: [
    "La cuisine s'ouvre sur la terrasse qui surplombe la piscine. Elle dispose de tous les équipements nécessaires : Lave-vaisselle, four, four micro-ondes, cafetière Nespresso, bouilloire, grille-pain.",
    "Un lave linge est également installé dans la cuisine.",
    "Un bar central, séparant la cuisine du salon / salle-à-manger, permet de s'installer pour un repas informel, pour cuisiner ou faire diner les enfants.",
  ],
};

export const KitchenCard = () => {
  return <BaseCard data={data} />;
};
