"use client"

import { useEffect, useRef } from "react"
import { Search, Palette, Rocket, ArrowRight } from "lucide-react"

export function HowWeWorkSection() {
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

  const steps = [
    {
      icon: Search,
      title: "Understand",
      description: "Understand the training needs, audience profile, and performance goals.",
      color: "primary",
      number: "01",
    },
    {
      icon: Palette,
      title: "Design & Develop",
      description: "Design a blueprint of the structure and create engaging, accessible, and effective materials.",
      color: "secondary",
      number: "02",
    },
    {
      icon: Rocket,
      title: "Deliver & Refine",
      description:
        "Provide final output ready for your LMS or trainers. Then gather learner reviews and updates based on learner feedback.",
      color: "primary",
      number: "03",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            How We <span className="text-primary relative">
              Work
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We partner closely with your subject matter experts, HR, or L&D team through a collaborative, streamlined
            process.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative mb-20">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isEven = index % 2 === 0
              const colorClass = step.color === "primary" ? "text-primary" : "text-secondary"
              const bgClass = step.color === "primary" ? "bg-primary" : "bg-secondary"
              const gradientClass = step.color === "primary"
                ? "bg-gradient-to-br from-primary/20 to-primary/5"
                : "bg-gradient-to-br from-secondary/20 to-secondary/5"

              return (
                <div
                  key={index}
                  className={`animate-on-scroll group relative ${isEven ? 'md:mt-0' : 'md:mt-16'}`}
                >
                  {/* Step Number Background */}
                  {/* <div className={`absolute -top-4 -right-4 text-8xl font-black ${colorClass} opacity-5 select-none z-0`}>
                    {step.number}
                  </div> */}

                  {/* Main Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon Container */}
                    <div className="relative mb-8">
                      <div className={`${gradientClass} w-24 h-24 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg group-hover:scale-110 transition-all duration-500`}>
                        <IconComponent className={`h-10 w-10 ${colorClass}`} />
                      </div>

                      {/* Floating Number */}
                      {/* <div className={`absolute -top-2 -right-2 ${bgClass} text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg`}>
                        {step.number}
                      </div> */}
                      
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow Connector (visible only on larger screens) */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-12 -right-6 transform translate-x-full">
                        <ArrowRight className="h-6 w-6 text-primary/40 animate-pulse" />
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="animate-on-scroll">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 backdrop-blur-sm border border-white/20">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-primary/20 rounded-full -translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/20 rounded-full translate-x-16 translate-y-16"></div>

            <div className="relative z-10 p-8 md:p-12 text-center">
              <div className="mb-8 relative">
                <img
                  src="/process.png?height=200&width=600"
                  alt="Collaborative Process"
                  className="w-full max-w-2xl h-48 object-cover rounded-2xl mx-auto"
                />
              </div>

              <div className="space-y-4 max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Collaborative & Transparent Process
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every step involves your team, ensuring the final product meets your exact needs and expectations.
                </p>
              </div>
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .group:hover .animate-ping {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}