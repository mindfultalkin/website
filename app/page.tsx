import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
// import { PartnerSection } from "@/components/partner-section"
import { TeamSection } from "@/components/team-section"
import { CTA } from "@/components/cta-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
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
