import { Metadata } from "next";
import { ContactForm } from "./_components/ContactForm";
import { DataPolicyCard } from "./_components/DataPolicyCard";
import { HostCard } from "./_components/HostCard";

export const metadata: Metadata = {
  title: "Contact - Réservation Villa Morticcione",
  description:
    "Contactez-nous pour réserver Villa Morticcione près de Porto Vecchio. Réponse rapide pour organiser votre séjour en Corse du Sud avec piscine privée à Saint Cyprien.",
  keywords: [
    "contact villa morticcione",
    "réservation villa corse",
    "location villa porto vecchio contact",
    "réserver villa saint cyprien",
    "demande renseignement villa corse",
    "propriétaire villa morticcione",
  ],
  openGraph: {
    title: "Contact - Réservation Villa Morticcione",
    description:
      "Contactez-nous pour réserver votre séjour à Villa Morticcione. Réponse rapide garantie.",
    url: "https://www.villa-morticcione.com/contact",
    images: [
      {
        url: "/images/house.avif",
        width: 1200,
        height: 630,
        alt: "Contact Villa Morticcione",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Réservation Villa Morticcione",
    description:
      "Contactez-nous pour réserver votre séjour à Villa Morticcione. Réponse rapide garantie.",
    images: ["/images/house.avif"],
  },
  alternates: {
    canonical: "https://www.villa-morticcione.com/contact",
  },
};

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Nous Contacter
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Nous sommes à votre disposition pour répondre à toutes vos questions
          et vous aider à planifier votre séjour.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <HostCard />
          <DataPolicyCard />
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
