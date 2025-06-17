"use client"

import { useEffect, useRef } from "react"

export function HiddenCost() {
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

  const leftStrengths = [
    {
      title: "Low Productivity",
      description: "Teams waste hours clarifying misunderstood instructions",
      color: "primary",
    },
    {
      title: "Talent Wastage",
      description: "Great ideas go unheard when people can't articulate them",
      color: "secondary",
    },
  ]

  const rightStrengths = [
    {
      title: "High Attrition",
      description: "Miscommunication leads to frustration and turnover",
      color: "secondary",
    },
    {
      title: "Team Dissatisfaction",
      description: "Unclear expectations create stress and conflict",
      color: "primary",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            The Hidden Cost of Poor <span className="text-primary">Communication</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Poor communication is silently costing your business more than you think
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 items-center">

            {/* Left Side Content */}
            <div className="space-y-8">
              {leftStrengths.map((strength, index) => {
                const isEven = index % 2 === 0
                return (
                  <div
                    key={index}
                    className={`animate-on-scroll group relative ${isEven ? 'lg:ml-0' : 'lg:ml-8'
                      }`}
                  >
                    <div className="relative">
                      {/* Decorative element */}
                      <div className={`absolute -left-4 top-0 w-1 h-full rounded-full ${strength.color === "primary" ? "bg-gradient-to-b from-primary to-primary/50" : "bg-gradient-to-b from-secondary to-secondary/50"
                        }`}></div>

                      {/* Content */}
                      <div className="pl-8 pr-4 py-6 rounded-2xl bg-gradient-to-br from-white/80 to-gray-50/50 backdrop-blur-sm border border-gray-100/50 shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105">
                        <h3 className={`text-xl font-bold mb-3 ${strength.color === "primary" ? "text-primary" : "text-secondary"
                          }`}>
                          {strength.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {strength.description}
                        </p>
                      </div>

                      {/* Floating accent */}
                      <div className={`absolute -right-2 top-4 w-3 h-3 rounded-full ${strength.color === "primary" ? "bg-primary" : "bg-secondary"
                        } opacity-60`}></div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Center Image */}
            <div className="animate-on-scroll relative">
              <div className="relative group">

                {/* Main image container */}
                <div className="relative transition-all duration-500">
                  <img
                    src="/poor-communication.png"
                    alt="Poor Communication"
                    className="w-full h-72 object-cover rounded-xl transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="space-y-8">
              {rightStrengths.map((strength, index) => {
                const isEven = index % 2 === 0
                return (
                  <div
                    key={index}
                    className={`animate-on-scroll group relative ${isEven ? 'lg:mr-8' : 'lg:mr-0'
                      }`}
                  >
                    <div className="relative">
                      {/* Decorative element */}
                      <div className={`absolute -right-4 top-0 w-1 h-full rounded-full ${strength.color === "primary" ? "bg-gradient-to-b from-primary to-primary/50" : "bg-gradient-to-b from-secondary to-secondary/50"
                        }`}></div>

                      {/* Content */}
                      <div className="pr-8 pl-4 py-6 rounded-2xl bg-gradient-to-bl from-white/80 to-gray-50/50 backdrop-blur-sm border border-gray-100/50 shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105">
                        <h3 className={`text-xl font-bold mb-3 text-right ${strength.color === "primary" ? "text-primary" : "text-secondary"
                          }`}>
                          {strength.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm text-right">
                          {strength.description}
                        </p>
                      </div>

                      {/* Floating accent */}
                      <div className={`absolute -left-2 top-4 w-3 h-3 rounded-full ${strength.color === "primary" ? "bg-primary" : "bg-secondary"
                        } opacity-60`}></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>        
      </div>

      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
        
        .animate-on-scroll.animate {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}