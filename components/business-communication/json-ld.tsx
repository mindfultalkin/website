export default function BusinessCommunicationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Business Communication Services - Mindfultalk",
          provider: {
            "@type": "Organization",
            name: "Mindfultalk",
            url: "https://mindfultalk.in"
          },
          description: "Transform your business communication with our expert services. From technical writing to instructional design, we help you convey complex information clearly and effectively.",
          serviceType: "Business Communication Training",
          areaServed: {
            "@type": "Country",
            name: "India"
          },
          offers: {
            "@type": "Offer",
            category: "Business Communication Services"
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Business Communication Programs",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Corporate Training",
                  description: "Comprehensive business communication training for corporations"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Communication Strategy",
                  description: "Strategic business communication planning and implementation"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Documentation Services",
                  description: "Professional business documentation and content creation"
                }
              }
            ]
          }
        })
      }}
    />
  )
}
