import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { TechnicalWritingHero } from "@/components/technical-writing/hero-section"
import { TechnicalWritingServices } from "@/components/technical-writing/services-section"
import { TechnicalWritingWhy } from "@/components/technical-writing/why-section"
import { TechnicalWritingCTA } from "@/components/technical-writing/cta-section"
import { CTA } from "@/components/cta-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import TechnicalWritingJsonLd from "@/components/technical-writing/json-ld"

export const metadata: Metadata = {
  title: "Technical Writing Services - Mindfultalk",
  description: "Discover our technical writing services that simplify complex information into clear, concise documentation. We help businesses communicate effectively through expertly crafted manuals, guides, and documentation.",
  keywords: ["technical writing", "documentation", "user manuals", "technical documentation", "business communication", "API documentation", "process documentation", "SOP writing"],
  openGraph: {
    title: 'Technical Writing Services - Mindfultalk',
    description: 'Expert technical writing services to transform complex information into clear, user-friendly documentation. Specializing in user manuals, API docs, and process documentation.',
    url: 'https://mindfultalk.in/technical-writing',
    siteName: 'Mindfultalk',
    images: [
      {
        url: '/technical_writing.png',
        width: 1200,
        height: 630,
        alt: 'Technical Writing Services at Mindfultalk',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Writing Services - Mindfultalk',
    description: 'Expert technical writing services for clear, effective documentation.',
    images: ['/technical_writing.png'],
    creator: '@mindfultalk',
  },
  alternates: {
    canonical: 'https://mindfultalk.in/technical-writing'
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  }
}

export default function TechnicalWritingPage() {
  return (
    <main className="min-h-screen">
      <TechnicalWritingJsonLd />
      <Navigation />
      <TechnicalWritingHero />
      <TechnicalWritingServices />
      <TechnicalWritingWhy />
      <TechnicalWritingCTA />
      <CTA />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
