import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about/hero-section"
import { SerendipitySection } from "@/components/about/serendipity-section"
import { MissionSection } from "@/components/about/mission-section"
import { FoundersSection } from "@/components/about/founders-section"
import { AboutCTA } from "@/components/about/cta-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <SerendipitySection />
      <MissionSection />
      <FoundersSection />
      <AboutCTA />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
