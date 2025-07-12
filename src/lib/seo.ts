// SEO utility functions and schemas for Villa Morticcione

export const generateStructuredData = {
  lodging: () => ({
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Villa Morticcione",
    description:
      "Villa de charme en Corse du Sud près de Porto Vecchio avec piscine privée",
    url: "https://www.villa-morticcione.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plage de Saint Cyprien",
      addressLocality: "Porto Vecchio",
      addressRegion: "Corse du Sud",
      postalCode: "20137",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "41.5868",
      longitude: "9.2795",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Piscine privée",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "3 chambres",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Proche plage",
        value: true,
      },
    ],
    image: [
      "https://www.villa-morticcione.com/images/house.avif",
      "https://www.villa-morticcione.com/images/outside.avif",
      "https://www.villa-morticcione.com/images/kitchen.avif",
    ],
    priceRange: "€€",
    starRating: {
      "@type": "Rating",
      ratingValue: "5",
    },
  }),

  breadcrumb: (items: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),

  faq: (faqs: Array<{ question: string; answer: string }>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }),
};

export const seoKeywords = {
  primary: [
    "villa corse",
    "location villa porto vecchio",
    "villa piscine privée corse",
    "saint cyprien corse",
    "villa morticcione",
  ],
  secondary: [
    "location saisonnière corse du sud",
    "villa 3 chambres corse",
    "vacances corse",
    "plage saint cyprien",
    "villa avec piscine corse",
  ],
  local: [
    "porto vecchio",
    "corse du sud",
    "saint cyprien",
    "bonifacio",
    "palombaggia",
  ],
};

export const openGraphDefaults = {
  type: "website" as const,
  locale: "fr_FR" as const,
  siteName: "Villa Morticcione",
  images: [
    {
      url: "/images/house.avif",
      width: 1200,
      height: 630,
      alt: "Villa Morticcione - Vue extérieure avec piscine",
    },
  ],
};
