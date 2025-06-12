"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, FileText, BookOpen, ArrowRight } from "lucide-react"

export function ServicesSection() {
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
      icon: Users,
      title: "Corporate Training",
      description: "Transform your team's communication skills with tailored workshops and ongoing coaching programs.",
      color: "primary",
      image: "/corporate_training.png",
    },
    {
      icon: FileText,
      title: "Technical Writing",
      description: "Convert complex technical concepts into clear, actionable documentation and user guides.",
      color: "secondary",
      image: "/technical_writing.png",
    },
    {
      icon: BookOpen,
      title: "Storytelling for Business",
      description: "Craft compelling narratives that connect with your audience and drive business results.",
      color: "primary",
      image: "/storytelling.png",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const colorClass =
              service.color === "primary" ? "text-primary bg-primary/10" : "text-secondary bg-secondary/10"
            const borderClass = service.color === "primary" ? "border-primary/20" : "border-secondary/20"
            const buttonClass =
              service.color === "primary" ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"

            return (
              <Card
                key={index}
                className={`animate-on-scroll hover:shadow-lg transition-all duration-300 ${borderClass} h-full`}
              >
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <div className={`${colorClass} p-3 rounded-full mr-4`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>

                  <div className="mt-4">
                    <img
                      src={service.image}
                      alt={`${service.title} illustration`}
                      width={300}
                      height={200}
                      className="w-full h-40 object-contain rounded-lg mb-6"
                    />
                    <Button className={`${buttonClass} text-white font-semibold px-6 py-2 rounded-full group w-full`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
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
