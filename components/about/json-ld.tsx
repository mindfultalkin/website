export default function AboutJsonLd() {
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
          description: "Mindfultalk is a professional communication services company specializing in technical writing, instructional design, and business communication solutions.",
          foundingDate: "2023",
          address: {
            "@type": "PostalAddress",
            addressCountry: "IN",
            addressRegion: "Karnataka",
            addressLocality: "Bangalore"
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
          areaServed: {
            "@type": "Country",
            name: "India"
          },
          knowsAbout: [
            "Technical Writing",
            "Instructional Design",
            "Business Communication",
            "Corporate Training",
            "Documentation",
            "Learning Experience Design"
          ],
          slogan: "Turn Knowledge into Clear Communication",
          mission: "To help businesses turn complex knowledge into clear, actionable communication through expert technical writing, instructional design, and business communication services.",
          serviceArea: [{
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: "12.9716",
              longitude: "77.5946"
            },
            geoRadius: "2000"
          }]
        })
      }}
    />
  )
}
