import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about/hero-section"
// import { SerendipitySection } from "@/components/about/serendipity-section"
import { MissionSection } from "@/components/about/mission-section"
// import { FoundersSection } from "@/components/about/founders-section"
import { CTA } from "@/components/cta-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import AboutJsonLd from "@/components/about/json-ld"

export const metadata: Metadata = {
  title: "About Us - Mindfultalk | Your Communication Partner",
  description: "Learn about Mindfultalk's mission to transform business communication. Discover how we help organizations turn complex knowledge into clear, actionable communication through expert technical writing, instructional design, and communication services.",
  keywords: [
    "about Mindfultalk",
    "communication services company",
    "technical writing experts",
    "instructional design specialists",
    "business communication solutions",
    "corporate training partner",
    "documentation services",
    "company mission",
    "company values"
  ],
  openGraph: {
    title: 'About Mindfultalk - Your Expert Communication Partner',
    description: 'Discover how Mindfultalk helps businesses transform complex knowledge into clear, actionable communication. Learn about our mission, values, and expertise.',
    url: 'https://mindfultalk.in/about',
    siteName: 'Mindfultalk',
    images: [
      {
        url: '/hero_img_about.png',
        width: 1200,
        height: 630,
        alt: 'About Mindfultalk - Communication Excellence',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Mindfultalk - Your Expert Communication Partner',
    description: 'Transform your business communication with Mindfultalk. Expert technical writing, instructional design, and communication services.',
    images: ['/hero_img_about.png'],
    creator: '@mindfultalk',
  },
  alternates: {
    canonical: 'https://mindfultalk.in/about'
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  }
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutJsonLd />
      <Navigation />
      <AboutHero />
      {/* <SerendipitySection /> */}
      <MissionSection />
      {/* <FoundersSection /> */}
      <CTA />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
