"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Map, Monitor, Users, Layers, Award } from "lucide-react"

export function InstructionalServicesSection() {
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

  const services = [
    {
      icon: Map,
      title: "Curriculum Design",
      description:
        "We map learning journeys from foundational to advanced, ensuring every module aligns with your objectives.",
      color: "primary",
    },
    {
      icon: Monitor,
      title: "eLearning Course Development",
      description:
        "From micro-learning modules to full-scale digital academies — we design interactive, SCORM-compliant content for any LMS.",
      color: "secondary",
    },
    {
      icon: Users,
      title: "Instructor-Led Training (ILT) Materials",
      description:
        "We create slide decks, facilitator guides, and participant workbooks for classroom and virtual delivery.",
      color: "primary",
    },
    {
      icon: Layers,
      title: "Blended Learning Solutions",
      description: "We combine online, offline, and on-the-job methods into a seamless learning experience.",
      color: "secondary",
    },
    {
      icon: Award,
      title: "Assessment & Certification Design",
      description:
        "With quizzes, scenario-based assessments, simulations, and evaluation, we ensure your learners demonstrate real understanding and application.",
      color: "primary",
    },
    {
      icon: Users,
      title: "Microlearning",
      description:
        "Short, focused lessons work with the brain's natural retention patterns — employees remember 90% more when information comes in digestible chunks rather than overwhelming training sessions.",
      color: "secondary",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const colorClass =
              service.color === "primary" ? "text-primary bg-primary/10" : "text-secondary bg-secondary/10"
            const borderClass = service.color === "primary" ? "border-primary/20" : "border-secondary/20"

            return (
              <Card
                key={index}
                className={`animate-on-scroll hover:shadow-lg transition-all duration-300 ${borderClass} bg-background`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`${colorClass} p-3 rounded-full flex-shrink-0`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
