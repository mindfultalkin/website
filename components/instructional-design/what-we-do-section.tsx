"use client"

import { useEffect, useRef } from "react"
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react"

export function WhatWeDoSection() {
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

  const frameworks = ["ADDIE", "SAM", "Bloom's Taxonomy", "Kirkpatrick's Model"]

  return (
    <section ref={sectionRef} className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20 animate-on-scroll">            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              What We <span className="text-primary relative">
                Do
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </span>
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Hero Statement */}
              <div className="animate-on-scroll">
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                  <p className="text-2xl lg:text-3xl text-foreground font-bold leading-tight pl-8">
                    We turn your expertise into structured, scalable learning experiences that drive real results.
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="animate-on-scroll">
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Our instructional design service blends creative thinking with academic rigor. Whether you're
                  launching a new academy, filling functional training gaps, or scaling global onboarding, we work as
                  an extension of your team — delivering solutions rooted in instructional design best practices.
                </p>
              </div>

              {/* Frameworks Section */}
              <div className="animate-on-scroll">
                <div className="flex items-center space-x-3 mb-6">
                  <ArrowRight className="h-6 w-6 text-primary" />
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground">Our proven frameworks include:</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {frameworks.map((framework, index) => (
                    <div
                      key={index}
                      className="group flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 hover:to-primary/5 transition-all duration-300 hover:translate-x-2"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-foreground font-semibold text-lg">{framework}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="lg:col-span-5 animate-on-scroll">
              <div className="relative">
                {/* Decorative border */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-lg"></div>

                {/* Image container */}
                <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img
                      src="/design_frameworks.png?height=400&width=500"
                      alt="Instructional design frameworks illustration"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Floating accent */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full shadow-lg animate-pulse"></div>
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-br from-secondary to-primary rounded-full shadow-lg animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-on-scroll.animate {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-pulse {
          animation: float 3s ease-in-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  )
}