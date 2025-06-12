"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, FileText, Target, Settings, Handshake } from "lucide-react"

export function WhyChooseUsSection() {
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

  const reasons = [
    {
      icon: Brain,
      title: "Learning Science Expertise",
      description: "We apply adult learning principles, Bloom's Taxonomy, and cognitive load theory.",
      color: "primary",
    },
    {
      icon: FileText,
      title: "Clear, Concise Content",
      description: "We remove complexity for clarity without dumping it down.",
      color: "secondary",
    },
    {
      icon: Target,
      title: "Performance-Driven",
      description: "We design for specific goals and business outcomes in mind.",
      color: "primary",
    },
    {
      icon: Settings,
      title: "Platform-Agnostic",
      description: "We adapt to your LMS or delivery method, not the other way around",
      color: "secondary",
    },
    {
      icon: Handshake,
      title: "Collaborative Approach",
      description: "Transparent communication, frequent check-ins, and SME-friendly processes.",
      color: "primary",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="text-primary">Us</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            const colorClass =
              reason.color === "primary" ? "text-primary bg-primary/10" : "text-secondary bg-secondary/10"
            const borderClass = reason.color === "primary" ? "border-primary/20" : "border-secondary/20"

            return (
              <Card
                key={index}
                className={`animate-on-scroll hover:shadow-lg transition-all duration-300 ${borderClass} bg-background`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`${colorClass} p-3 rounded-full mr-4`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{reason.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 animate-on-scroll">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-4xl mx-auto text-center">
            <div className="grid md:grid-cols-3 gap-8 mb-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">200+</div>
                <div className="text-muted-foreground">Courses Designed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
            <p className="text-lg text-foreground">
              Trusted by organizations worldwide to create learning experiences that deliver results.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
