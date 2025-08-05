export default function InstructionalDesignJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Instructional Design Services - Mindfultalk",
          provider: {
            "@type": "Organization",
            name: "Mindfultalk",
            url: "https://mindfultalk.in"
          },
          description: "Professional instructional design services creating engaging, effective learning experiences. We specialize in corporate training, e-learning development, and learning experience design.",
          serviceType: "Instructional Design",
          areaServed: {
            "@type": "Country",
            name: "India"
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Instructional Design Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "E-Learning Development",
                  description: "Custom e-learning solutions and interactive digital courses"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Corporate Training Design",
                  description: "Tailored corporate training programs and materials"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Learning Experience Design",
                  description: "User-centered learning experiences and curriculum development"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Training Material Development",
                  description: "Comprehensive training materials and resources"
                }
              }
            ]
          },
          additionalType: "Educational Service",
          audience: {
            "@type": "Audience",
            audienceType: "Corporate"
          },
          potentialAction: {
            "@type": "LearnAction",
            provider: {
              "@type": "Organization",
              name: "Mindfultalk"
            },
            description: "Design and develop effective learning experiences"
          }
        })
      }}
    />
  )
}
