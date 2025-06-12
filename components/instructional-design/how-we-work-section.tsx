"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Palette, Rocket } from "lucide-react"

export function HowWeWorkSection() {
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

  const steps = [
    {
      icon: Search,
      title: "Understand",
      description: "Understand the training needs, audience profile, and performance goals.",
      color: "primary",
      number: "01",
    },
    {
      icon: Palette,
      title: "Design & Develop",
      description: "Design a blueprint of the structure and create engaging, accessible, and effective materials.",
      color: "secondary",
      number: "02",
    },
    {
      icon: Rocket,
      title: "Deliver & Refine",
      description:
        "Provide final output ready for your LMS or trainers. Then gather learner reviews and updates based on learner feedback.",
      color: "primary",
      number: "03",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            How We <span className="text-primary">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We partner closely with your subject matter experts, HR, or L&D team through a collaborative, streamlined
            process.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            const colorClass =
              step.color === "primary" ? "text-primary bg-primary/10" : "text-secondary bg-secondary/10"
            const borderClass = step.color === "primary" ? "border-primary/20" : "border-secondary/20"
            const numberColor = step.color === "primary" ? "text-primary" : "text-secondary"

            return (
              <Card
                key={index}
                className={`animate-on-scroll hover:shadow-lg transition-all duration-300 ${borderClass} relative`}
              >
                <CardContent className="p-8 text-center">
                  <div className={`text-6xl font-bold ${numberColor} opacity-20 absolute top-4 right-4`}>
                    {step.number}
                  </div>

                  <div
                    className={`${colorClass} p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center`}
                  >
                    <IconComponent className="h-8 w-8" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <img
              src="/process.png?height=200&width=600"
              alt="Collaborative c"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold mb-4">Collaborative & Transparent Process</h3>
            <p className="text-lg text-muted-foreground">
              Every step involves your team, ensuring the final product meets your exact needs and expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
