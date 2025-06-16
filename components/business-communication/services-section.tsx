"use client"

import { useEffect, useRef, useState } from "react"

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleServices, setVisibleServices] = useState<number[]>([])
  const [activeService, setActiveService] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the services animation
            [0, 1, 2].forEach((index) => {
              setTimeout(() => {
                setVisibleServices(prev => [...prev, index])
              }, index * 300)
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

  const services = [
    {
      title: "Corporate Training",
      description: "Transform your team's communication skills with tailored workshops and ongoing coaching programs.",
      color: "primary",
      image: "/corporate_training_service.png",
    },
    {
      title: "Technical Writing",
      description: "Convert complex technical concepts into clear, actionable documentation and user guides.",
      color: "secondary",
      image: "/technical_writing_service.png",
    },
    {
      title: "Storytelling for Business",
      description: "Craft compelling narratives that connect with your audience and drive business results.",
      color: "primary",
      image: "/storytelling_service.png",
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/3 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/3 to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-1/2 bg-gradient-to-t from-primary/2 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-1000 ease-out ${visibleServices.length > 0
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our{" "}
              <span className="relative text-primary">
                Services
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60 transform origin-center transition-transform duration-1000 delay-500"
                  style={{ transform: visibleServices.length > 0 ? 'scaleX(1)' : 'scaleX(0)' }}></div>
              </span>
            </h2>
          </div>
        </div>

        {/* Services Layout */}
        <div className="space-y-24 lg:space-y-32 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const isVisible = visibleServices.includes(index)
            const isPrimary = service.color === "primary"
            const isEven = index % 2 === 0
            const isActive = activeService === index

            return (
              <div
                key={index}
                className={`relative group cursor-pointer transform transition-all duration-1000 ease-out ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-16'
                  }`}
                style={{ transitionDelay: `${index * 300}ms` }}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Service Content Container */}
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } items-center gap-12 lg:gap-16`}>

                  {/* Image Section */}
                  <div className="relative flex-1 lg:max-w-lg">
                    {/* Image Background Glow */}
                    <div className={`absolute inset-0 rounded-3xl blur-2xl transition-all duration-700 ${isPrimary ? 'bg-primary/10' : 'bg-secondary/10'
                      } ${isActive ? 'scale-110 opacity-100' : 'scale-100 opacity-60'}`}></div>

                    {/* Main Image Container */}
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-700 group-hover:scale-105">
                      <div className={`absolute inset-0 bg-gradient-to-t ${isPrimary
                          ? 'from-primary/20 to-transparent'
                          : 'from-secondary/20 to-transparent'
                        } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                      <img
                        src={service.image}
                        alt={`${service.title} illustration`}
                        className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Image Overlay Elements */}
                      <div className="absolute top-4 right-4">
                        <div className={`w-12 h-12 rounded-full ${isPrimary ? 'bg-primary' : 'bg-secondary'
                          } flex items-center justify-center text-white font-bold text-lg transform transition-all duration-500 ${isActive ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                          }`}>
                          {index + 1}
                        </div>
                      </div>
                    </div>

                    {/* Floating Decorative Elements */}
                    <div className={`absolute -top-4 ${isEven ? '-right-4' : '-left-4'} w-8 h-8 rounded-full ${isPrimary ? 'bg-primary' : 'bg-secondary'
                      } opacity-30 transform transition-all duration-700 ${isActive ? 'scale-150 rotate-45' : 'scale-100 rotate-0'
                      }`}></div>

                    <div className={`absolute -bottom-4 ${isEven ? '-left-4' : '-right-4'} w-6 h-6 rounded-full ${isPrimary ? 'bg-secondary' : 'bg-primary'
                      } opacity-40 transform transition-all duration-700 delay-100 ${isActive ? 'scale-125 -rotate-12' : 'scale-100 rotate-0'
                      }`}></div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 space-y-8">
                    {/* Title with Dynamic Styling */}
                    <div className="relative">
                      <h3 className={`text-3xl lg:text-4xl font-bold mb-6 transition-all duration-500 ${isActive ? 'text-primary transform translate-x-2' : 'text-foreground'
                        }`}>
                        {service.title}
                      </h3>

                      {/* Dynamic side border */}
                      <div className={`absolute ${isEven ? '-left-4' : '-right-4'} top-0 bottom-0 w-1 rounded-full transition-all duration-500 ${isPrimary ? 'bg-primary' : 'bg-secondary'
                        } ${isActive ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}></div>
                    </div>

                    {/* Description */}
                    <p className={`text-lg lg:text-xl leading-relaxed transition-all duration-500 ${isActive
                        ? 'text-foreground transform translate-x-1'
                        : 'text-muted-foreground'
                      }`}>
                      {service.description}
                    </p>

                    {/* Action Button */}
                    <div className={`transform transition-all duration-500 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-80'
                      }`}>
                      <button className={`group relative px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 overflow-hidden ${isPrimary
                          ? 'bg-primary hover:bg-primary/90'
                          : 'bg-secondary hover:bg-secondary/90'
                        } transform hover:scale-105 hover:shadow-xl ${isPrimary ? 'hover:shadow-primary/20' : 'hover:shadow-secondary/20'
                        }`}>
                        {/* Button Background Animation */}
                        <div className={`absolute inset-0 w-0 group-hover:w-full transition-all duration-500 ${isPrimary ? 'bg-primary/20' : 'bg-secondary/20'
                          }`}></div>

                        <span className="relative flex items-center">
                          Learn More
                          <svg
                            className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </button>
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex items-center space-x-3 pt-4">
                      <div className={`text-sm font-medium ${isPrimary ? 'text-primary' : 'text-secondary'
                        } transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-60'
                        }`}>
                        Service {index + 1} of {services.length}
                      </div>
                      <div className="flex space-x-1">
                        {services.map((_, i) => (
                          <div
                            key={i}
                            className={`h-1 rounded-full transition-all duration-500 ${i === index
                                ? `w-8 ${isPrimary ? 'bg-primary' : 'bg-secondary'}`
                                : 'w-2 bg-muted-foreground/30'
                              }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line to Next Service */}
                {index < services.length - 1 && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12">
                    <div className={`w-px h-16 bg-gradient-to-b ${isPrimary
                        ? 'from-primary to-transparent'
                        : 'from-secondary to-transparent'
                      } transition-all duration-1000 ${isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                      }`} style={{ transitionDelay: `${(index + 1) * 300 + 500}ms` }}></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom Call-to-Action */}
        <div className="text-center mt-20">
          <div className={`transform transition-all duration-1000 delay-1000 ${visibleServices.length >= 3
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}>
            <p className="text-lg text-muted-foreground mb-6">
              Ready to transform your communication strategy?
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}