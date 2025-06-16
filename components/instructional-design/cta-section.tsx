"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function InstructionalCTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animateElements = entry.target.querySelectorAll(".animate-on-scroll")
            animateElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="cta" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">              
              <span className="text-secondary"></span>Engaging Learning. Better Retention. Ready Workforce.
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed">
              Whether you're building from scratch or optimizing existing training, we design learning that sticks.
              Faster on-boarding, confident learners, and measurable performance improvements start here.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-12">
              <img
                src="/learning_success_illustration.png"
                alt="Learning success illustration"
                width={800}
                height={400}
                className="w-full h-64 object-contain rounded-lg mb-6"
              />

              <div className="max-w-lg mx-auto">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 group w-full sm:w-auto"
                >
                  Book a Call
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">Faster Onboarding</div>
                <div className="text-muted-foreground">Get new hires productive quickly</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary mb-2">Confident Learners</div>
                <div className="text-muted-foreground">Build skills that stick</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">Measurable Results</div>
                <div className="text-muted-foreground">Track performance improvements</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
