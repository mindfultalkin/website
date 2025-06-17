"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
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
              }, index * 150)
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
    <section id="services" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            What We <span className="text-primary">Deliver</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="space-y-24">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const colorClass =
              service.color === "primary" ? "text-primary bg-primary/10" : "text-secondary bg-secondary/10"
            const buttonClass =
              service.color === "primary" ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                className={`animate-on-scroll grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""
                  }`}
              >
                {/* Image Section */}
                <div className={`${!isEven ? "lg:col-start-2" : ""} relative group`}>
                  <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm transition-all duration-500">
                    <img
                      src={service.image}
                      alt={`${service.title} illustration`}
                      width={600}
                      height={400}
                      className="w-full h-80 object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`${!isEven ? "lg:col-start-1 lg:row-start-1" : ""} space-y-6`}>
                  {/* Icon and Title */}
                  <div className="flex items-start space-x-6">
                    <div className={`${colorClass} p-4 rounded-2xl flex-shrink-0 shadow-sm`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="pl-20">
                    <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-light">
                      {service.description}
                    </p>

                    {/* CTA Button */}
                    <Button
                      onClick={() => window.open('https://in.bigin.online/org60035146435/forms/portfolio')}
                      className={`${buttonClass} text-white font-semibold px-8 py-4 rounded-full group shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Divider */}
        <div className="mt-24 animate-on-scroll">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-muted/30 to-transparent"></div>
        </div>
      </div>

      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-on-scroll.animate {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}