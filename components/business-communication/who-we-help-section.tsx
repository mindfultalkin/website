"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Users, FileText, UserCheck } from "lucide-react"

export function WhoWeHelpSection() {
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

  const audiences = [
    {
      icon: Briefcase,
      title: "Entrepreneurs",
      description: "Craft compelling pitches and build investor confidence",
      color: "primary",
    },
    {
      icon: Users,
      title: "Sales Teams",
      description: "Convert more prospects with clear, persuasive communication",
      color: "secondary",
    },
    {
      icon: FileText,
      title: "Tech Writers",
      description: "Transform complex concepts into user-friendly documentation",
      color: "primary",
    },
    {
      icon: UserCheck,
      title: "Team Leaders",
      description: "Inspire and align teams with effective communication",
      color: "secondary",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Who We <span className="text-primary">Help</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon
            const colorClass =
              audience.color === "primary" ? "text-primary bg-primary/10" : "text-secondary bg-secondary/10"
            const borderClass = audience.color === "primary" ? "border-primary/20" : "border-secondary/20"

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
                  <h3 className="text-xl font-semibold mb-2">{audience.title}</h3>
                  <p className="text-muted-foreground">{audience.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
