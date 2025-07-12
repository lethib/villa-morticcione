import { Metadata } from "next";

interface SEOPageProps {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  images?: Array<{
    url: string;
    width: number;
    height: number;
    alt: string;
  }>;
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path,
  images = [
    {
      url: "/images/house.avif",
      width: 1200,
      height: 630,
      alt: "Villa Morticcione",
    },
  ],
}: SEOPageProps): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords: [
      ...keywords,
      "villa corse",
      "location villa porto vecchio",
      "villa piscine privée corse",
      "saint cyprien corse",
    ],
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url,
      title,
      description,
      siteName: "Villa Morticcione",
      images: images.map((img) => ({
        ...img,
        url: img.url.startsWith("/") ? `${siteConfig.url}${img.url}` : img.url,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images.map((img) =>
        img.url.startsWith("/") ? `${siteConfig.url}${img.url}` : img.url
      ),
    },
    alternates: {
      canonical: url,
    },
  };
}

export const siteConfig = {
  name: "Villa Morticcione",
  description:
    "Villa de charme en Corse du Sud près de Porto Vecchio. 3 chambres, piscine privée, à 1km de la plage de Saint Cyprien.",
  url: "https://www.villa-morticcione.com",
  ogImage: "/images/house.avif",
  links: {
    contact: "", // À remplacer par votre email
  },
};
