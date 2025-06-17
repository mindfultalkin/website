"use client"

import { useEffect, useRef } from "react"

export function TechnicalWritingWhy() {
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
              }, index * 100)
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

  const benefits = [
    {
      title: "Reduce Support Costs",
      description: "with self-serve documentation",
      color: "primary",
    },
    {
      title: "Accelerate Onboarding",
      description: "for users and internal teams",
      color: "secondary",
    },
    {
      title: "Improve Feature Adoption",
      description: "with better product education",
      color: "primary",
    },
    {
      title: "Build Trust",
      description: "with accurate, up-to-date, and user-focused content",
      color: "secondary",
    },
    {
      title: "Empower Teams",
      description: "across product, support, and engineering",
      color: "primary",
    },
  ]

  const keyResults = [
    { value: "↑95%", label: "User Satisfaction", color: "primary" },    
    { value: "3×", label: "Faster On-boarding", color: "secondary" },
    { value: "↓75%", label: "Support Tickets", color: "primary" },
  ]

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/5 to-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Why It <span className="text-primary">Matters</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Strategic documentation transforms your business operations and user experience
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div className="space-y-12">
              {benefits.slice(0, 3).map((benefit, index) => {
                const colorClass = benefit.color === "primary" ? "text-primary" : "text-secondary"
                const bgClass = benefit.color === "primary" ? "bg-primary/5" : "bg-secondary/5"
                const borderClass = benefit.color === "primary" ? "border-l-primary" : "border-l-secondary"

                return (
                  <div key={index} className={`animate-on-scroll pl-8 border-l-4 ${borderClass} py-4`}>
                    <div className="space-y-3">
                      <h3 className={`text-2xl lg:text-3xl font-bold ${colorClass} leading-tight`}>
                        {benefit.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed font-light">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Right Column */}
            <div className="space-y-12 lg:pt-16">
              {benefits.slice(3).map((benefit, index) => {
                const colorClass = benefit.color === "primary" ? "text-primary" : "text-secondary"
                const borderClass = benefit.color === "primary" ? "border-l-primary" : "border-l-secondary"

                return (
                  <div key={index + 3} className={`animate-on-scroll pl-8 border-l-4 ${borderClass} py-4`}>
                    <div className="space-y-3">
                      <h3 className={`text-2xl lg:text-3xl font-bold ${colorClass} leading-tight`}>
                        {benefit.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed font-light">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Key Results Section */}
        <div className="animate-on-scroll">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">Key Results</h3>
            <p className="text-lg text-muted-foreground">Proven outcomes from strategic documentation</p>
          </div>

          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl transform -rotate-1"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-secondary/5 via-primary/5 to-secondary/5 rounded-3xl transform rotate-1"></div>

            {/* Content */}
            <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-12 border border-muted/20">
              <div className="grid md:grid-cols-3 gap-12">
                {keyResults.map((result, index) => {
                  const textColor = result.color === "primary" ? "text-primary" : "text-secondary"
                  const accentColor = result.color === "primary" ? "bg-primary" : "bg-secondary"

                  return (
                    <div key={index} className="text-center group">
                      <div className="relative">
                        <div className={`text-5xl sm:text-6xl lg:text-7xl font-black ${textColor} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                          {result.value}
                        </div>
                        <div className={`w-16 h-1 ${accentColor} mx-auto mb-4 rounded-full transition-all duration-300 group-hover:w-24`}></div>
                        <div className="text-xl font-semibold text-foreground uppercase tracking-wide">
                          {result.label}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-24 animate-on-scroll">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2">
              <div className="w-8 h-px bg-primary"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-8 h-px bg-secondary"></div>
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <div className="w-8 h-px bg-primary"></div>
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