export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Mindfultalk",
          url: "https://mindfultalk.in",
          logo: "https://mindfultalk.in/mindfultalk_logo.png",
          description: "We help businesses turn complex knowledge into clear, actionable communication. From technical writing to instructional design, we make expertise accessible.",
          address: {
            "@type": "PostalAddress",
            addressCountry: "IN"
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: "contact@mindfultalk.in"
          },
          sameAs: [
            "https://www.linkedin.com/company/mindfultalk",
            // Add other social media URLs here
          ],
          services: [
            {
              "@type": "Service",
              name: "Technical Writing",
              description: "Professional technical documentation services"
            },
            {
              "@type": "Service",
              name: "Instructional Design",
              description: "Custom learning and training solutions"
            },
            {
              "@type": "Service",
              name: "Business Communication",
              description: "Effective business communication strategies"
            }
          ]
        })
      }}
    />
  )
}
