import { Navigation } from "@/components/navigation"
import { InstructionalDesignHero } from "@/components/instructional-design/hero-section"
import { WhatWeDoSection } from "@/components/instructional-design/what-we-do-section"
import { InstructionalServicesSection } from "@/components/instructional-design/services-section"
import { HowWeWorkSection } from "@/components/instructional-design/how-we-work-section"
import { WhyChooseUsSection } from "@/components/instructional-design/why-choose-us-section"
import { InstructionalCTA } from "@/components/instructional-design/cta-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function InstructionalDesignPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <InstructionalDesignHero />
      <WhatWeDoSection />
      <InstructionalServicesSection />
      <HowWeWorkSection />
      <WhyChooseUsSection />
      <InstructionalCTA />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
