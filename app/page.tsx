import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
// import { PartnerSection } from "@/components/partner-section"
import { TeamSection } from "@/components/team-section"
import { CTA } from "@/components/cta-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import JsonLd from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Home - Mindfultalk",
  description: "Welcome to Mindfultalk, your partner in effective communication. We specialize in technical writing, instructional design, and business communication to help you convey complex information clearly and effectively.",
  keywords: ["technical writing", "instructional design", "business communication", "corporate training", "documentation", "knowledge management"],
  openGraph: {
    title: 'Mindfultalk - Your Partner in Effective Communication',
    description: 'Welcome to Mindfultalk, your partner in effective communication. We specialize in technical writing, instructional design, and business communication.',
    url: 'https://mindfultalk.in',
    siteName: 'Mindfultalk',
    images: [
      {
        url: '/mindfultalk_logo.png',
        width: 1200,
        height: 630,
        alt: 'Mindfultalk Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mindfultalk - Your Partner in Effective Communication',
    description: 'We specialize in technical writing, instructional design, and business communication.',
    images: ['/mindfultalk_logo.png'],
    creator: '@mindfultalk',
  },
  alternates: {
    canonical: 'https://mindfultalk.in'
  },
  verification: {
    google: 'hfQlMUTFQV5ZqSBjmaNR7YJWtFf7RqZKkYwnsD7m_gA', // Add your Google Search Console verification ID here
  }
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <JsonLd />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      {/* <PartnerSection /> */}
      <TeamSection />
      <CTA />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
