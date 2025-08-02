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

export default function BusinessCommunicationPage() {
  return (
    <main className="min-h-screen">
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
