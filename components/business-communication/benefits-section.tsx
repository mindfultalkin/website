"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, UserPlus, Heart, Handshake, FileText } from "lucide-react"

export function BenefitsSection() {
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

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Revenue",
      description: "Clear communication drives sales and client retention",
      color: "primary",
    },
    {
      icon: UserPlus,
      title: "Reduced Attrition",
      description: "Better communication improves employee satisfaction",
      color: "secondary",
    },
    {
      icon: Heart,
      title: "Improved Customer Satisfaction",
      description: "Clear messaging builds trust and loyalty",
      color: "primary",
    },
    {
      icon: Handshake,
      title: "Smoother Collaboration",
      description: "Teams work better when they understand each other",
      color: "secondary",
    },
    {
      icon: FileText,
      title: "Richer Documentation",
      description: "Knowledge is preserved and accessible to all",
      color: "primary",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Benefits of <span className="text-primary">Effective Communication</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            const colorClass =
              benefit.color === "primary" ? "text-primary bg-primary/10" : "text-secondary bg-secondary/10"
            const borderClass = benefit.color === "primary" ? "border-primary/20" : "border-secondary/20"

            return (
              <Card
                key={index}
                className={`animate-on-scroll hover:shadow-lg transition-all duration-300 ${borderClass}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`${colorClass} p-3 rounded-full mr-4`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
