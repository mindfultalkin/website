"use client"

import { useEffect, useRef, useState } from "react"

export function BenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the animation of items
            const items = Array.from({ length: 5 }, (_, i) => i)
            items.forEach((index) => {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, index])
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const benefits = [
    {
      title: "Increased Revenue",
      description: "Clear communication drives sales and client retention",
      color: "primary",
      position: "top-left"
    },
    {
      title: "Reduced Attrition",
      description: "Better communication improves employee satisfaction",
      color: "secondary",
      position: "top-right"
    },
    {
      title: "Improved Customer Satisfaction",
      description: "Clear messaging builds trust and loyalty",
      color: "primary",
      position: "center"
    },
    {
      title: "Smoother Collaboration",
      description: "Teams work better when they understand each other",
      color: "secondary",
      position: "bottom-left"
    },
    {
      title: "Faster Decision making",
      description: "Teams make informed decisions quickly and confidently",
      color: "primary",
      position: "bottom-right"
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="transform transition-all duration-1000 ease-out opacity-0 translate-y-8"
            style={{
              opacity: visibleItems.length > 0 ? 1 : 0,
              transform: visibleItems.length > 0 ? 'translateY(0)' : 'translateY(2rem)'
            }}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Benefits of{" "}
              <span className="relative text-primary">
                Effective Communication
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 transform scale-x-0 transition-transform duration-1000 delay-500"
                  style={{ transform: visibleItems.length > 0 ? 'scaleX(1)' : 'scaleX(0)' }}></div>
              </span>
            </h2>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="relative max-w-7xl mx-auto">
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 1000 800">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" className="stop-primary" />
                <stop offset="100%" className="stop-secondary" />
              </linearGradient>
            </defs>
            <path
              d="M200,150 Q500,100 800,150 Q600,400 400,600 Q200,500 200,150"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              className="animate-pulse"
            />
          </svg>

          {/* Benefits Items */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {benefits.map((benefit, index) => {
              const isVisible = visibleItems.includes(index)
              const isPrimary = benefit.color === "primary"

              return (
                <div
                  key={index}
                  className={`relative group cursor-pointer transform transition-all duration-700 ease-out ${isVisible
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-12 scale-95'
                    } ${index === 2 ? 'lg:col-span-1 lg:col-start-2' : ''
                    }`}
                  style={{
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  {/* Floating Background */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${isPrimary
                      ? 'from-primary/5 to-primary/10'
                      : 'from-secondary/5 to-secondary/10'
                    } transform group-hover:scale-105 transition-transform duration-500 ease-out`}></div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isPrimary
                      ? 'shadow-2xl shadow-primary/20'
                      : 'shadow-2xl shadow-secondary/20'
                    }`}></div>

                  {/* Content */}
                  <div className="relative p-8 space-y-4">
                    {/* Number Badge */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-lg mb-4 ${isPrimary ? 'bg-primary' : 'bg-secondary'
                      } transform group-hover:rotate-12 transition-transform duration-300`}>
                      {index + 1}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {benefit.description}
                    </p>

                    {/* Accent Line */}
                    <div className={`w-16 h-1 rounded-full bg-gradient-to-r ${isPrimary
                        ? 'from-primary to-primary/50'
                        : 'from-secondary to-secondary/50'
                      } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>

                  {/* Floating Elements */}
                  <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${isPrimary ? 'bg-primary' : 'bg-secondary'
                    } opacity-20 group-hover:opacity-100 transform group-hover:scale-150 transition-all duration-500`}></div>

                  <div className={`absolute -bottom-2 -left-2 w-4 h-4 rounded-full ${isPrimary ? 'bg-primary' : 'bg-secondary'
                    } opacity-30 group-hover:opacity-100 transform group-hover:scale-125 transition-all duration-500 delay-100`}></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-20 flex justify-center">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${visibleItems.includes(i)
                    ? (i % 2 === 0 ? 'bg-primary' : 'bg-secondary') + ' scale-100'
                    : 'bg-muted scale-75'
                  }`}
                style={{ transitionDelay: `${i * 100 + 800}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}