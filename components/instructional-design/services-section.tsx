"use client"

import { useEffect, useRef } from "react"
import { Map, Monitor, Users, Layers, Award } from "lucide-react"

export function InstructionalServicesSection() {
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

  const services = [
    {
      icon: Map,
      title: "Curriculum Design",
      description:
        "We map learning journeys from foundational to advanced, ensuring every module aligns with your objectives.",
      color: "primary",
    },
    {
      icon: Monitor,
      title: "eLearning Course Development",
      description:
        "From micro-learning modules to full-scale digital academies — we design interactive, SCORM-compliant content for any LMS.",
      color: "secondary",
    },
    {
      icon: Users,
      title: "Instructor-Led Training (ILT) Materials",
      description:
        "We create slide decks, facilitator guides, and participant workbooks for classroom and virtual delivery.",
      color: "primary",
    },
    {
      icon: Layers,
      title: "Blended Learning Solutions",
      description: "We combine online, offline, and on-the-job methods into a seamless learning experience.",
      color: "secondary",
    },
    {
      icon: Award,
      title: "Assessment & Certification Design",
      description:
        "With quizzes, scenario-based assessments, simulations, and evaluation, we ensure your learners demonstrate real understanding and application.",
      color: "primary",
    },
    {
      icon: Users,
      title: "Microlearning",
      description:
        "Short, focused lessons work with the brain's natural retention patterns — employees remember 90% more when information comes in digestible chunks rather than overwhelming training sessions.",
      color: "secondary",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 relative">
            Our <span className="text-primary relative">
              Services
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-30"></div>
            </span>
          </h2>
        </div>

        {/* Staggered timeline layout */}
        <div className="space-y-24">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isEven = index % 2 === 0
            const colorClass = service.color === "primary" ? "text-primary" : "text-secondary"
            const bgColorClass = service.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
            const gradientClass = service.color === "primary"
              ? "from-primary/20 to-primary/5"
              : "from-secondary/20 to-secondary/5"

            return (
              <div
                key={index}
                className={`animate-on-scroll flex items-center gap-12 lg:gap-20 ${isEven ? 'flex-row' : 'flex-row-reverse'
                  } max-lg:flex-col max-lg:text-center group`}
              >
                {/* Icon section */}
                <div className="flex-shrink-0 relative">
                  <div className={`${bgColorClass} p-8 rounded-full relative z-10 group-hover:scale-110 transition-transform duration-500`}>
                    <IconComponent className={`h-12 w-12 ${colorClass}`} />
                  </div>
                  {/* Pulsing ring animation */}
                  <div className={`absolute inset-0 ${bgColorClass} rounded-full animate-ping opacity-20 group-hover:opacity-40`}></div>
                  <div className={`absolute inset-2 ${bgColorClass} rounded-full animate-pulse opacity-10`}></div>
                </div>

                {/* Content section */}
                <div className="flex-1 relative">
                  <div className={`bg-gradient-to-br ${gradientClass} p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden group-hover:shadow-2xl transition-all duration-500`}>
                    {/* Decorative corner elements */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${gradientClass} rounded-bl-2xl opacity-50`}></div>
                    <div className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr ${gradientClass} rounded-tr-2xl opacity-30`}></div>

                    <h3 className={`text-2xl lg:text-3xl font-bold mb-4 ${colorClass} relative z-10`}>
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed relative z-10">
                      {service.description}
                    </p>

                    {/* Subtle hover line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color === "primary" ? "from-primary to-primary/50" : "from-secondary to-secondary/50"
                      } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>
                </div>

                {/* Connection line for timeline effect */}
                {index < services.length - 1 && (
                  <div className={`absolute ${isEven ? 'left-16' : 'right-16'} top-full w-0.5 h-12 bg-gradient-to-b ${service.color === "primary" ? "from-primary/30 to-transparent" : "from-secondary/30 to-transparent"
                    } max-lg:hidden`}></div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 flex justify-center animate-on-scroll">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${i === 1 ? 'bg-primary' : 'bg-secondary'
                  } opacity-60 animate-pulse`}
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
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
        
        .group:hover .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}