"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, ExternalLink } from "lucide-react"

export function FoundersSection() {
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

  const founders = [
    {
      name: "Latha Srinivasan",
      description:
        "With extensive experience at HCL, AT&T, and Oracle, Latha brings deep technical expertise combined with communication mastery. As the founder of ChipperSage, she understands the unique challenges professionals face when translating complex ideas into clear, actionable communication that drives results.",
      image: "/latha.png?height=300&width=300",
      linkedin: "#",
      color: "primary",
    },
    {
      name: "Seema Albal",
      description:
        "A dedicated Communication & Innovation coach, Seema specializes in empowering 21st century professionals to articulate their vision with confidence and clarity. Her approach combines modern communication strategies with timeless principles of human connection and understanding.",
      image: "/seema.png?height=300&width=300",
      linkedin: "#",
      color: "secondary",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Meet the <span className="text-primary">Founders</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {founders.map((founder, index) => {
            const colorClass =
              founder.color === "primary" ? "border-primary/20 from-primary/5" : "border-secondary/20 from-secondary/5"
            const iconColor = founder.color === "primary" ? "text-primary" : "text-secondary"
            const buttonClass =
              founder.color === "primary" ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"

            return (
              <Card
                key={index}
                className={`animate-on-scroll hover:shadow-lg transition-all duration-300 ${colorClass} bg-gradient-to-br to-background`}
              >
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                      <img
                        src={founder.image || "/placeholder.svg"}
                        alt={`${founder.name} portrait`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">{founder.description}</p>

                  <div className="text-center">
                    <Button
                      variant="outline"
                      className={`${buttonClass} text-white border-none font-semibold px-6 py-2 rounded-full group`}
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <img
              src="/founders_collaboration.png"
              alt="Founders collaboration illustration"
              width={600}
              height={300}
              className="w-full h-56 object-contain rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold mb-4">A Partnership Built on Shared Vision</h3>
            <p className="text-lg text-muted-foreground">
              Together, Latha and Seema combine technical expertise with communication mastery to help organizations
              unlock their full potential through clear, impactful communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
