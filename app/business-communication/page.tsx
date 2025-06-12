import { Navigation } from "@/components/navigation"
import { BusinessHero } from "@/components/business-communication/hero-section"
import { TrainingSection } from "@/components/business-communication/training-section"
import { MicroLearningSection } from "@/components/business-communication/micro-learning-section"
import { BusinessCommunicationSection } from "@/components/business-communication/what-is-section"
import { LayoutSection } from "@/components/business-communication/layout-section"
import { BenefitsSection } from "@/components/business-communication/benefits-section"
import { WhoWeHelpSection } from "@/components/business-communication/who-we-help-section"
import { ServicesSection } from "@/components/business-communication/services-section"
import { BusinessCTA } from "@/components/business-communication/cta-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function BusinessCommunicationPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BusinessHero />
      <TrainingSection />
      <MicroLearningSection />
      <BusinessCommunicationSection />
      <LayoutSection />
      <BenefitsSection />
      <WhoWeHelpSection />
      <ServicesSection />
      <BusinessCTA />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
