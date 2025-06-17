"use client"

import { useEffect, useRef } from "react"

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

  const communicationAspects = [
    {
      title: "Body Language & Tone",
      description: "Master the non-verbal cues that make up 93% of effective communication",
      color: "primary",
      image: "/body_language_tone.png",
    },
    {
      title: "Business Terminology",
      description: "Speak the language of success with confidence and clarity",
      color: "secondary",
      image: "/business_terminology.png",
    },
    {
      title: "Written Clarity",
      description: "Craft messages that inform, persuade, and inspire action",
      color: "primary",
      image: "/written_clarity.png",
    },
    {
      title: "Problem Solving",
      description: "Navigate complex discussions with strategic thinking",
      color: "secondary",
      image: "/problem_solving.png",
    },
    {
      title: "Team Articulation",
      description: "Build bridges between departments and personalities",
      color: "primary",
      image: "/team_articulation.png",
    },
    {
      title: "Product Communication",
      description: "Tell your story in ways that resonate and convert",
      color: "secondary",
      image: "/product_communication.png",
    },
  ]

  return (
    <section id="what-is" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/5 to-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            What is <span className="text-primary">Business Communication</span>?
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8 animate-pulse"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Effective business communication encompasses multiple dimensions that work together to create meaningful connections and drive results
          </p>
        </div>

        {/* Communication Aspects Grid */}
        <div className="space-y-20">
          {communicationAspects.map((aspect, index) => {
            const isEven = index % 2 === 0
            const colorClass = aspect.color === "primary" ? "text-primary" : "text-secondary"
            const accentClass = aspect.color === "primary" ? "bg-primary" : "bg-secondary"
            const borderClass = aspect.color === "primary" ? "border-primary/20" : "border-secondary/20"

            return (
              <div
                key={index}
                className={`animate-on-scroll grid lg:grid-cols-12 gap-12 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""
                  }`}
              >
                {/* Image Section */}
                <div className={`lg:col-span-5 ${!isEven ? "lg:col-start-8" : ""} relative group`}>
                  <div className="relative overflow-hidden rounded-2xl transition-all duration-700 transform group-hover:scale-[1.02]">
                    {/* Main Image */}
                    <div className="relative h-80 lg:h-96 overflow-hidden">
                      <img
                        src={aspect.image}
                        alt={aspect.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const next = e.currentTarget.nextElementSibling;
                          if (next && next instanceof HTMLElement) {
                            next.style.display = 'flex';
                          }
                        }}
                      />
                      {/* Fallback gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-${aspect.color === 'primary' ? 'blue' : 'purple'}-100 to-${aspect.color === 'primary' ? 'blue' : 'purple'}-200 hidden items-center justify-center`}>
                        <div className={`text-6xl font-bold text-${aspect.color === 'primary' ? 'blue' : 'purple'}-400 opacity-20`}>
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>

                    {/* Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Floating Element */}
                    <div className={`absolute top-6 right-6 w-16 h-16 ${accentClass}/10 backdrop-blur-sm rounded-2xl border ${borderClass} flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                      <div className={`w-8 h-8 ${accentClass} rounded-lg animate-pulse`}></div>
                    </div>

                    {/* Bottom Accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-2 ${accentClass} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`lg:col-span-7 ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""} space-y-8`}>
                  <div className="relative">
                    {/* Number Badge */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 ${accentClass}/10 rounded-2xl border-2 ${borderClass} mb-6 transform transition-all duration-500 hover:scale-110`}>
                      <span className={`text-xl font-bold ${colorClass}`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className={`text-3xl lg:text-4xl xl:text-5xl font-bold ${colorClass} mb-6 leading-tight tracking-tight`}>
                      {aspect.title}
                    </h3>

                    <div className={`w-20 h-1.5 ${accentClass} rounded-full mb-8 animate-pulse`}></div>

                    <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
                      {aspect.description}
                    </p>
                  </div>

                  {/* Enhanced Progress Indicator */}
                  <div className="flex items-center space-x-4 pt-4">
                    <div className={`w-3 h-3 rounded-full ${accentClass} animate-pulse`}></div>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-muted via-muted/50 to-transparent rounded-full">
                      <div
                        className={`h-full ${accentClass} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${((index + 1) / communicationAspects.length) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-muted-foreground font-semibold tracking-wide">
                      {index + 1} / {communicationAspects.length}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Enhanced Bottom Section */}
        <div className="mt-32 animate-on-scroll text-center">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent h-px top-1/2 animate-pulse"></div>
            <div className="relative inline-flex items-center space-x-6 bg-background px-12 py-4 rounded-full border border-muted/50 backdrop-blur-sm">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              </div>
              <span className="text-sm text-muted-foreground font-semibold uppercase tracking-widest">
                Building Better Connections
              </span>
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.8s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-on-scroll.animate {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }

        .group:hover .animate-pulse {
          animation-duration: 0.8s;
        }
      `}</style>
    </section>
  )
}