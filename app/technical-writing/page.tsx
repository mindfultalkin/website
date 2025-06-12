import { Navigation } from "@/components/navigation"
import { TechnicalWritingHero } from "@/components/technical-writing/hero-section"
import { TechnicalWritingServices } from "@/components/technical-writing/services-section"
import { TechnicalWritingWhy } from "@/components/technical-writing/why-section"
import { TechnicalWritingCTA } from "@/components/technical-writing/cta-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function TechnicalWritingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <TechnicalWritingHero />
      <TechnicalWritingServices />
      <TechnicalWritingWhy />
      <TechnicalWritingCTA />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
