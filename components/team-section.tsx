"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Globe, Lightbulb, Users, Target, Clock } from "lucide-react"

export function TeamSection() {
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

  const teamStrengths = [
    {
      icon: Award,
      title: "Technical Expertise",
      description: "Has the technical expertise to write exactly what you mean",
      color: "primary",
    },
    {
      icon: Globe,
      title: "Cross-Domain Experience",
      description: "Adapts quickly across industries with cross-domain experience",
      color: "secondary",
    },
    {
      icon: Lightbulb,
      title: "Engaging Content",
      description: "Crafts engaging training, clear docs, and communication that drives action",
      color: "primary",
    },
    {
      icon: Users,
      title: "Proven Expertise",
      description: "Brings proven expertise in training, documentation, and business communication",
      color: "secondary",
    },
    {
      icon: Target,
      title: "Partnership Approach",
      description: "Partners and guides you to deliver the content you need",
      color: "primary",
    },
    {
      icon: Clock,
      title: "Reliable Delivery",
      description: "Has a strong track record of delivering quality projects on time and within budget",
      color: "secondary",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            We Are a <span className="text-primary">Team</span> That
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamStrengths.map((strength, index) => {
            const IconComponent = strength.icon
            const colorClass =
              strength.color === "primary" ? "text-primary bg-primary/10" : "text-secondary bg-secondary/10"
            const borderClass = strength.color === "primary" ? "border-primary/20" : "border-secondary/20"

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
                  <h3 className="text-xl font-semibold mb-3">{strength.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{strength.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <img
              src="/ready_to_transform.png"
              alt="Ready to Transform"
              width={800} // Explicit width
              height={300} // Explicit height
              className="w-full h-64 object-contain rounded-lg mb-6" // Changed height and object-fit
            />
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Communication?</h3>
            <p className="text-lg text-muted-foreground">
              Let's work together to turn your expertise into clear, actionable content that drives real results.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
