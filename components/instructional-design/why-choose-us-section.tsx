"use client"

import { useEffect, useRef } from "react"
import { Brain, FileText, Target, Settings, Handshake } from "lucide-react"

export function WhyChooseUsSection() {
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

  const reasons = [
    {
      icon: Brain,
      title: "Learning Science Expertise",
      description: "We apply adult learning principles, Bloom's Taxonomy, and cognitive load theory.",
      color: "primary",
      image: "learning_science.png",
    },
    {
      icon: FileText,
      title: "Clear, Concise Content",
      description: "We remove complexity for clarity without dumping it down.",
      color: "secondary",
      image: "clear_content.png",
    },
    {
      icon: Target,
      title: "Performance-Driven",
      description: "We design for specific goals and business outcomes in mind.",
      color: "primary",
      image: "performance_driven.png",
    },
    {
      icon: Settings,
      title: "Platform-Agnostic",
      description: "We adapt to your LMS or delivery method, not the other way around",
      color: "secondary",
      image: "platform_agnostic.png",
    },
    {
      icon: Handshake,
      title: "Collaborative Approach",
      description: "Transparent communication, frequent check-ins, and SME-friendly processes.",
      color: "primary",
      image: "collaborative_approach.png",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 relative">
            Why Choose Us ?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            const isEven = index % 2 === 0
            const colorClass = reason.color === "primary" ? "text-primary" : "text-secondary"
            const bgColorClass = reason.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
            const gradientClass = reason.color === "primary"
              ? "bg-gradient-to-br from-primary/20 to-primary/5"
              : "bg-gradient-to-br from-secondary/20 to-secondary/5"

            return (
              <div
                key={index}
                className={`animate-on-scroll flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${isEven ? "" : "lg:flex-row-reverse"
                  }`}
              >
                {/* Image Section */}
                <div className="flex-1 relative group">
                  <div className={`absolute inset-0 ${gradientClass} rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500`}></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={reason.image}
                      alt={reason.title}
                      className="w-full h-64 lg:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 to-transparent"></div>
                    <div className={`absolute top-4 right-4 ${bgColorClass} p-3 rounded-full backdrop-blur-sm`}>
                      <IconComponent className={`h-6 w-6 ${colorClass}`} />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-6">
                    <div className={`${bgColorClass} ${colorClass} p-4 rounded-2xl mr-4 shadow-lg`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-2">{reason.title}</h3>
                      <div className={`w-16 h-1 ${reason.color === "primary" ? "bg-primary" : "bg-secondary"} rounded-full`}></div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-24 animate-on-scroll">
          <div className="relative">
            {/* <div className="absolute inset-0 from-primary/10 to-secondary/10 rounded-3xl transform -rotate-1"></div> */}
            <div className="relative from-primary/5 to-secondary/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto text-center">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="group">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    15+
                  </div>
                  <div className="text-muted-foreground font-medium">Years Experience</div>
                  <div className="w-12 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
                </div>
                <div className="group">
                  <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    200+
                  </div>
                  <div className="text-muted-foreground font-medium">Courses Designed</div>
                  <div className="w-12 h-1 bg-secondary mx-auto mt-2 rounded-full"></div>
                </div>
                <div className="group">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    95%
                  </div>
                  <div className="text-muted-foreground font-medium">Client Satisfaction</div>
                  <div className="w-12 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
                </div>
              </div>
              <p className="text-lg lg:text-xl text-foreground font-medium max-w-2xl mx-auto">
                Trusted by organizations worldwide to create learning experiences that deliver results.
              </p>
            </div>
          </div>
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