import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { InstructionalDesignHero } from "@/components/instructional-design/hero-section"
import { WhatWeDoSection } from "@/components/instructional-design/what-we-do-section"
import { InstructionalServicesSection } from "@/components/instructional-design/services-section"
import { HowWeWorkSection } from "@/components/instructional-design/how-we-work-section"
import { WhyChooseUsSection } from "@/components/instructional-design/why-choose-us-section"
import { CTA } from "@/components/cta-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import InstructionalDesignJsonLd from "@/components/instructional-design/json-ld"

export const metadata: Metadata = {
  title: "Instructional Design Services - Mindfultalk",
  description: "Enhance your training programs with our expert instructional design services. We create engaging, effective learning experiences tailored to your organizational needs and learning objectives.",
  keywords: [
    "instructional design",
    "e-learning development",
    "corporate training",
    "learning experience design",
    "training programs",
    "educational content",
    "curriculum development",
    "learning solutions",
    "training material development"
  ],
  openGraph: {
    title: 'Instructional Design Services - Mindfultalk',
    description: 'Transform your training programs with expert instructional design. Create engaging, effective learning experiences that drive results.',
    url: 'https://mindfultalk.in/instructional-design',
    siteName: 'Mindfultalk',
    images: [
      {
        url: '/instructional_design.png',
        width: 1200,
        height: 630,
        alt: 'Instructional Design Services at Mindfultalk',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instructional Design Services - Mindfultalk',
    description: 'Expert instructional design services for effective learning experiences.',
    images: ['/instructional_design.png'],
    creator: '@mindfultalk',
  },
  alternates: {
    canonical: 'https://mindfultalk.in/instructional-design'
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  }
}

export default function InstructionalDesignPage() {
  return (
    <main className="min-h-screen">
      <InstructionalDesignJsonLd />
      <Navigation />
      <InstructionalDesignHero />
      <WhatWeDoSection />
      <InstructionalServicesSection />
      <HowWeWorkSection />
      <WhyChooseUsSection />
      <CTA />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
