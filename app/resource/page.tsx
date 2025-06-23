import { Navigation } from "@/components/navigation"
import { BlogHero } from "@/components/resource/hero-section"
import CaseStudy from "@/components/resource/case-study"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function InstructionalDesignPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BlogHero />
      <CaseStudy />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
