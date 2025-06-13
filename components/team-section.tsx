"use client"

import { useEffect, useRef } from "react"
import Image from 'next/image'

export function TeamSection() {
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
      title: "Technical Expertise",
      description: "Has the technical expertise to write exactly what you mean",
      color: "primary",
    },
    {
      title: "Cross-Domain Experience",
      description: "Adapts quickly across industries with cross-domain experience",
      color: "secondary",
    },
    {
      title: "Engaging Content",
      description: "Crafts engaging training, clear docs, and communication that drives action",
      color: "primary",
    },
  ]

  const rightStrengths = [
    {
      title: "Proven Expertise",
      description: "Brings proven expertise in training, documentation, and business communication",
      color: "secondary",
    },
    {
      title: "Partnership Approach",
      description: "Partners and guides you to deliver the content you need",
      color: "primary",
    },
    {
      title: "Reliable Delivery",
      description: "Has a strong track record of delivering quality projects on time and within budget",
      color: "secondary",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            We Are a <span className="text-primary">Team</span> That
          </h2>
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
                  <Image
                    src="/team_collaboration.png"
                    alt="Professional Team Collaboration"
                    className="w-full h-72 object-cover rounded-xl transition-transform duration-500"
                    width={300}
                    height={200}
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

        {/* CTA Section - Unchanged */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <img
              src="/ready_to_transform.png"
              alt="Ready to Transform"
              width={800}
              height={300}
              className="w-full h-64 object-contain rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Communication?</h3>
            <p className="text-lg text-muted-foreground">
              Let's work together to turn your expertise into clear, actionable content that drives real results.
            </p>
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

        img {
          width: 300px;  /* Set specific width */
          height: 200px; /* Set specific height */
        }

        /* Or using max-width for responsiveness */
        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </section>
  )
}