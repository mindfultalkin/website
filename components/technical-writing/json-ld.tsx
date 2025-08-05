export default function TechnicalWritingJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Technical Writing Services - Mindfultalk",
          provider: {
            "@type": "Organization",
            name: "Mindfultalk",
            url: "https://mindfultalk.in"
          },
          description: "Professional technical writing services that simplify complex information into clear, concise documentation. We help businesses communicate effectively through expertly crafted manuals, guides, and documentation.",
          serviceType: "Technical Writing",
          areaServed: {
            "@type": "Country",
            name: "India"
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Technical Writing Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "User Documentation",
                  description: "Comprehensive user manuals and guides"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "API Documentation",
                  description: "Technical API documentation and reference guides"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Process Documentation",
                  description: "Standard Operating Procedures (SOPs) and process guides"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Technical Documentation",
                  description: "Product specifications and technical guides"
                }
              }
            ]
          },
          additionalType: "Professional Service",
          audience: {
            "@type": "Audience",
            audienceType: "Business"
          }
        })
      }}
    />
  )
}
