"use client"

import { useEffect, useRef, useState } from "react"

export function WhoWeHelpSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const audiences = [
    {
      title: "Entrepreneurs",
      description: "Craft compelling pitches and build investor confidence",
      color: "primary",
      delay: 0
    },
    {
      title: "Sales Teams",
      description: "Convert more prospects with clear, persuasive communication",
      color: "secondary",
      delay: 200
    },
    {
      title: "Tech Writers",
      description: "Transform complex concepts into user-friendly documentation",
      color: "primary",
      delay: 400
    },
    {
      title: "Team Leaders",
      description: "Inspire and align teams with effective communication",
      color: "secondary",
      delay: 600
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-pulse ${i % 2 === 0 ? 'bg-primary' : 'bg-secondary'
              }`}
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header with flowing animation */}
        <div className="text-center mb-20">
          <div
            className={`transform transition-all duration-1000 ease-out ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
              }`}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Who We{" "}
              <span className="relative">
                <span className="text-primary">Help</span>
                {/* Animated wave under text */}
                <svg
                  className="absolute -bottom-4 left-0 w-full h-6"
                  viewBox="0 0 200 20"
                  style={{
                    transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
                    transition: 'transform 1.5s ease-out 0.5s'
                  }}
                >
                  <path
                    d="M0,10 Q50,0 100,10 T200,10"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    className="text-primary animate-pulse"
                  />
                </svg>
              </span>
            </h2>
          </div>
        </div>

        {/* Flowing Grid Layout */}
        <div className="relative">
          {/* Connecting Flow Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0"
            viewBox="0 0 1200 600"
          >
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className="stop-primary" stopOpacity="0.6" />
                <stop offset="50%" className="stop-secondary" stopOpacity="0.8" />
                <stop offset="100%" className="stop-primary" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <path
              d="M100,150 C300,100 500,200 700,150 C900,100 1000,200 1100,150"
              stroke="url(#flowGradient)"
              strokeWidth="3"
              fill="none"
              className={`transition-all duration-2000 ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              style={{
                strokeDasharray: isVisible ? 'none' : '20 20',
                strokeDashoffset: isVisible ? '0' : '1000'
              }}
            />
            <path
              d="M100,450 C300,400 500,500 700,450 C900,400 1000,500 1100,450"
              stroke="url(#flowGradient)"
              strokeWidth="3"
              fill="none"
              className={`transition-all duration-2000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              style={{
                strokeDasharray: isVisible ? 'none' : '20 20',
                strokeDashoffset: isVisible ? '0' : '1000'
              }}
            />
          </svg>

          {/* Audience Cards in Organic Layout */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {audiences.map((audience, index) => {
              const isPrimary = audience.color === "primary"
              const isActive = activeIndex === index
              const isLeft = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`relative group cursor-pointer ${isLeft ? 'md:justify-self-end' : 'md:justify-self-start'
                    } ${index >= 2 ? 'md:mt-16' : ''
                    }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Main Content Container */}
                  <div
                    className={`relative p-8 lg:p-10 max-w-md transform transition-all duration-700 ease-out ${isVisible
                        ? 'opacity-100 translate-x-0 translate-y-0'
                        : `opacity-0 ${isLeft ? '-translate-x-12' : 'translate-x-12'} translate-y-8`
                      }`}
                    style={{
                      transitionDelay: `${audience.delay}ms`
                    }}
                  >
                    {/* Morphing Background */}
                    <div
                      className={`absolute inset-0 rounded-3xl transition-all duration-500 ${isPrimary
                          ? 'bg-gradient-to-br from-primary/10 to-primary/5'
                          : 'bg-gradient-to-br from-secondary/10 to-secondary/5'
                        } ${isActive
                          ? 'scale-105 rotate-1'
                          : 'scale-100 rotate-0'
                        }`}
                      style={{
                        borderRadius: isActive ? '2rem' : '1.5rem'
                      }}
                    />

                    {/* Glowing Border */}
                    <div
                      className={`absolute inset-0 rounded-3xl transition-all duration-500 ${isPrimary ? 'border-primary/20' : 'border-secondary/20'
                        } ${isActive
                          ? 'border-2 shadow-2xl ' + (isPrimary ? 'shadow-primary/20' : 'shadow-secondary/20')
                          : 'border border-transparent'
                        }`}
                    />

                    {/* Content */}
                    <div className="relative z-10 space-y-6">
                      {/* Animated Title */}
                      <div className="relative">
                        <h3 className={`text-2xl lg:text-3xl font-bold transition-all duration-300 ${isActive ? 'text-primary scale-105' : 'text-foreground'
                          }`}>
                          {audience.title}
                        </h3>

                        {/* Dynamic underline */}
                        <div
                          className={`absolute -bottom-2 left-0 h-0.5 rounded-full transition-all duration-500 ${isPrimary ? 'bg-primary' : 'bg-secondary'
                            }`}
                          style={{
                            width: isActive ? '100%' : '0%'
                          }}
                        />
                      </div>

                      {/* Description with animation */}
                      <p className={`text-lg leading-relaxed transition-all duration-300 ${isActive
                          ? 'text-foreground transform translate-x-1'
                          : 'text-muted-foreground'
                        }`}>
                        {audience.description}
                      </p>

                      {/* Floating Action Indicator */}
                      <div
                        className={`flex items-center space-x-2 transition-all duration-500 ${isActive
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 -translate-x-4'
                          }`}
                      >
                        <div className={`w-2 h-2 rounded-full ${isPrimary ? 'bg-primary' : 'bg-secondary'
                          } animate-pulse`} />
                        <span className="text-sm font-medium text-muted-foreground">
                          Learn more
                        </span>
                      </div>
                    </div>

                    {/* Floating Decorative Elements */}
                    <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full ${isPrimary ? 'bg-primary' : 'bg-secondary'
                      } opacity-20 transition-all duration-500 ${isActive ? 'scale-150 opacity-40 rotate-45' : 'scale-100 opacity-20'
                      }`} />

                    <div className={`absolute -bottom-4 -left-4 w-6 h-6 rounded-full ${isPrimary ? 'bg-secondary' : 'bg-primary'
                      } opacity-30 transition-all duration-700 ${isActive ? 'scale-125 opacity-50 -rotate-12' : 'scale-100 opacity-30'
                      }`} />
                  </div>

                  {/* Extending Connection Line */}
                  <div
                    className={`absolute ${isLeft ? 'right-0 top-1/2' : 'left-0 top-1/2'
                      } w-8 h-0.5 ${isPrimary ? 'bg-primary' : 'bg-secondary'
                      } transition-all duration-500 ${isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                      }`}
                    style={{
                      transformOrigin: isLeft ? 'right center' : 'left center'
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Flow Indicator */}
        <div className="mt-20 flex justify-center">
          <div className="flex items-center space-x-4">
            {audiences.map((_, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${activeIndex === index
                    ? 'w-8 h-2 bg-primary rounded-full'
                    : 'w-2 h-2 bg-muted-foreground/30 rounded-full hover:bg-muted-foreground/60'
                  }`}
                style={{
                  transitionDelay: `${index * 100 + 1000}ms`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}