"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingDown, Zap, TrendingUp, Shield, Users } from "lucide-react"

export function TechnicalWritingWhy() {
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
      icon: TrendingDown,
      title: "Reduce Support Costs",
      description: "with self-serve documentation",
      color: "primary",
    },
    {
      icon: Zap,
      title: "Accelerate Onboarding",
      description: "for users and internal teams",
      color: "secondary",
    },
    {
      icon: TrendingUp,
      title: "Improve Feature Adoption",
      description: "with better product education",
      color: "primary",
    },
    {
      icon: Shield,
      title: "Build Trust",
      description: "with accurate, up-to-date, and user-focused content",
      color: "secondary",
    },
    {
      icon: Users,
      title: "Empower Teams",
      description: "across product, support, and engineering",
      color: "primary",
    },
  ]

  const keyResults = [
    { value: "–75%", label: "Support Tickets", color: "primary" },
    { value: "3×", label: "Faster On-boarding", color: "secondary" },
    { value: "95%", label: "User Satisfaction", color: "primary" },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why It <span className="text-primary">Matters</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
                <CardContent className="p-6 text-center">
                  <div
                    className={`${colorClass} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}
                  >
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Key Results */}
        <div className="animate-on-scroll">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Key Results</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {keyResults.map((result, index) => {
                const textColor = result.color === "primary" ? "text-primary" : "text-secondary"
                return (
                  <div key={index} className="text-center">
                    <div className={`text-4xl sm:text-5xl font-bold ${textColor} mb-2`}>{result.value}</div>
                    <div className="text-lg text-muted-foreground">{result.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
