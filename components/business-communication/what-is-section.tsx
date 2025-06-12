"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { UserCheck, BookOpen, FileText, PuzzleIcon as PuzzlePiece, Users, Megaphone } from "lucide-react"

export function BusinessCommunicationSection() {
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

  const communicationAspects = [
    {
      icon: UserCheck,
      title: "Body Language & Tone",
      description: "Master the non-verbal cues that make up 93% of effective communication",
      color: "primary",
    },
    {
      icon: BookOpen,
      title: "Business Terminology",
      description: "Speak the language of success with confidence and clarity",
      color: "secondary",
    },
    {
      icon: FileText,
      title: "Written Clarity",
      description: "Craft messages that inform, persuade, and inspire action",
      color: "primary",
    },
    {
      icon: PuzzlePiece,
      title: "Problem Solving",
      description: "Navigate complex discussions with strategic thinking",
      color: "secondary",
    },
    {
      icon: Users,
      title: "Team Articulation",
      description: "Build bridges between departments and personalities",
      color: "primary",
    },
    {
      icon: Megaphone,
      title: "Product Communication",
      description: "Tell your story in ways that resonate and convert",
      color: "secondary",
    },
  ]

  return (
    <section id="what-is" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What is <span className="text-primary">Business Communication</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communicationAspects.map((aspect, index) => {
            const IconComponent = aspect.icon
            const colorClass =
              aspect.color === "primary" ? "text-primary bg-primary/10" : "text-secondary bg-secondary/10"
            const borderClass = aspect.color === "primary" ? "border-primary/20" : "border-secondary/20"

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
                    <h3 className="text-xl font-semibold">{aspect.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{aspect.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
