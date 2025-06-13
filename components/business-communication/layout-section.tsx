"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingDown, UserMinus, AlertTriangle, Frown } from "lucide-react"

export function LayoutSection() {
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

  const challenges = [
    {
      icon: TrendingDown,
      title: "Low Productivity",
      description: "Teams waste hours clarifying misunderstood instructions",
      color: "primary",
    },
    {
      icon: UserMinus,
      title: "Talent Wastage",
      description: "Great ideas go unheard when people can't articulate them",
      color: "secondary",
    },
    {
      icon: AlertTriangle,
      title: "High Attrition",
      description: "Miscommunication leads to frustration and turnover",
      color: "primary",
    },
    {
      icon: Frown,
      title: "Team Dissatisfaction",
      description: "Unclear expectations create stress and conflict",
      color: "secondary",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">The Hidden Cost of Poor Communication</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon
              const colorClass =
                challenge.color === "primary" ? "text-primary bg-primary/10" : "text-secondary bg-secondary/10"
              const borderClass = challenge.color === "primary" ? "border-primary/20" : "border-secondary/20"

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
                      <h3 className="text-xl font-semibold">{challenge.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{challenge.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center animate-on-scroll">
            <p className="text-xl text-foreground font-semibold">
              Poor communication is silently costing your business more than you think.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
