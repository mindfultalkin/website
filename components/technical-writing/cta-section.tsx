"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, FileText } from "lucide-react"

export function TechnicalWritingCTA() {
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
              Clear Docs. <span className="text-primary">Fewer Tickets.</span>{" "}
              <span className="text-secondary">Happier Customers.</span>
            </h2>

            <div className="space-y-6 mb-12">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Whether you're launching something new or fixing gaps in existing content, we can help.
              </p>
              <p className="text-lg text-foreground font-semibold">
                Good documentation isn't a cost — it's a competitive edge.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="animate-on-scroll">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 h-full">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Discovery Call</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss your documentation needs and explore how we can help streamline your user experience.
                </p>
                <Button 
                  onClick={() => window.open('https://calendly.com/mindfultalkin')}
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-full group w-full"
                >
                  Book a Discovery Call
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            <div className="animate-on-scroll">
              <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl p-8 h-full">
                <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <FileText className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Sample Work</h3>
                <p className="text-muted-foreground mb-6">
                  See our writing style and approach with a sample piece tailored to your industry and use case.
                </p>
                <Button 
                  onClick={() => window.location.href = 'https://in.bigin.online/org60035146435/forms/portfolio'}
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-6 py-3 rounded-full group w-full"
                >
                  Request a Sample
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </section>
  )
}
