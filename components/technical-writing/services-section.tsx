"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Database, Code, PlayCircle, ArrowRight } from "lucide-react"

export function TechnicalWritingServices() {
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
      icon: FileText,
      title: "User Manuals",
      description:
        "Clear, concise guides that turn confusion into confidence. We write for real users — with just enough detail and zero fluff.",
      color: "primary",
      image: "/user_manuals.png",
    },
    {
      icon: Database,
      title: "Knowledge Bases",
      description:
        "Organized, searchable hubs that enable self-service at scale. From on-boarding to troubleshooting — everything in one place.",
      color: "secondary",
      image: "/knowledge_bases.png",
    },
    {
      icon: Code,
      title: "API Documentation",
      description:
        "Developer-friendly docs that accelerate integration and usage. We speak dev, structure cleanly, and keep it version-aware.",
      color: "primary",
      image: "/api_documentation.png",
    },
    {
      icon: PlayCircle,
      title: "Product Training",
      description: "Step-by-Step guides and video tutorials help get user started",
      color: "secondary",
      image: "/product_training.png",
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What We <span className="text-primary">Deliver</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
                <CardContent className="p-8">
                  {/* Image Section - Moved to top */}
                  <div className="mb-6">
                    <img
                      src={service.image}
                      alt={`${service.title} illustration`}
                      width={400}
                      height={250}
                      className="w-full h-56 object-contain rounded-lg"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex items-start space-x-4">
                    <div className={`${colorClass} p-3 rounded-full flex-shrink-0`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                      <Button className={`${buttonClass} text-white font-semibold px-6 py-3 rounded-full group`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
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
