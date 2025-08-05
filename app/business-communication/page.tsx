import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { BusinessHero } from "@/components/business-communication/hero-section"
// import { TrainingSection } from "@/components/business-communication/training-section"
// import { MicroLearningSection } from "@/components/business-communication/micro-learning-section"
import { BusinessCommunicationSection } from "@/components/business-communication/what-is-section"
import { HiddenCost } from "@/components/business-communication/hidden-cost"
import { BenefitsSection } from "@/components/business-communication/benefits-section"
// import { WhoWeHelpSection } from "@/components/business-communication/who-we-help-section"
// import { ServicesSection } from "@/components/business-communication/services-section"
import { OurPrograms } from "@/components/business-communication/our-programs"
import { CTA } from "@/components/cta-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import BusinessCommunicationJsonLd from "@/components/business-communication/json-ld"

export const metadata: Metadata = {
  title: "Business Communication - Mindfultalk",
  description: "Transform your business communication with our expert services. From technical writing to instructional design, we help you convey complex information clearly and effectively.",
  keywords: ["business communication", "technical writing", "instructional design", "corporate training", "documentation", "knowledge management"],
  openGraph: {
    title: 'Business Communication Services - Mindfultalk',
    description: 'Transform your business communication with our expert services. Enhance clarity, effectiveness, and impact in your corporate communications.',
    url: 'https://mindfultalk.in/business-communication',
    siteName: 'Mindfultalk',
    images: [
      {
        url: '/business_communication_middle_image.png',
        width: 1200,
        height: 630,
        alt: 'Business Communication Services at Mindfultalk',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Communication Services - Mindfultalk',
    description: 'Transform your business communication with our expert services.',
    images: ['/business_communication_middle_image.png'],
    creator: '@mindfultalk',
  },
  alternates: {
    canonical: 'https://mindfultalk.in/business-communication'
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  }
}

export default function BusinessCommunicationPage() {
  return (
    <main className="min-h-screen">
      <BusinessCommunicationJsonLd />
      <Navigation />
      <BusinessHero />
      {/* <TrainingSection /> */}
      {/* <MicroLearningSection /> */}
      <BusinessCommunicationSection />
      <HiddenCost />
      <BenefitsSection />
      {/* <WhoWeHelpSection /> */}
      {/* <ServicesSection /> */}
      <OurPrograms />
      <CTA />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
