"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Lightbulb, MessageSquare, Brain } from "lucide-react"
import { FlowchartVariants } from "./flowchart-variants"

export function PartnerSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
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
    }, { threshold: 0.1 })

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-on-scroll mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              <span className="block text-foreground">One Partner. Smart Docs. Effective Learning.</span>
              <span className="block text-primary">Confident Communication.</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Let's turn your complex ideas into clear, impactful communication that drives results. Whether it's
              documentation that people actually use, training that sticks, or messaging that connects—we've got you covered.
            </p>
          </div>

         <FlowchartVariants/>

          <div className="mt-16 animate-on-scroll">
            <Button
              onClick={() => window.open('https://in.bigin.online/org60035146435/forms/portfolio')}
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
