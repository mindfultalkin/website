"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function PartnerSection() {
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll">            

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              <span className="block text-foreground lg:text-4xl">One Partner. Smart Docs. Effective Learning.</span>
              <span className="block text-primary">Confident Communication.</span>
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed">
              Let's turn your complex ideas into clear, impactful communication that drives results. Whether it's
              documentation that people actually use, training that sticks, or messaging that connects—we've got you
              covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="animate-on-scroll text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Documentation</h3>
              <p className="text-muted-foreground">Clear, user-focused content that actually gets used</p>
            </div>

            <div className="animate-on-scroll text-center">
              <div className="bg-secondary/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Effective Learning</h3>
              <p className="text-muted-foreground">Training programs that create lasting impact</p>
            </div>

            <div className="animate-on-scroll text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Confident Communication</h3>
              <p className="text-muted-foreground">Messages that resonate and drive action</p>
            </div>
          </div>

          <div className="animate-on-scroll">
            <Button
              onClick={() => window.open('https://calendly.com/mindfultalkin')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 group"
            >
              Start With Us Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
        
        .animate-on-scroll.animate {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}