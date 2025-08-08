"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

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
                    width={864}
                    height={576}
                    className="rounded-xl transition-transform duration-500"
                    quality={75}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJiEwMS40NTEtLjI3QVBCNjpLOS0vRGdFS1NWW1xbMkFlbWRYbFBZW1f/2wBDARUXFx4aHR4eHVfLISstV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1f/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
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