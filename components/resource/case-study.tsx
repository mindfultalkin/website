"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// import each case study detail component
import TribalKnowledge from "@/components/resource/documentation"
import KnowledgeBase from "@/components/resource/adoption"
import EmbeddedSystems from "@/components/resource/complex-system"

export default function CaseStudy() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selected, setSelected] = useState<{
    title: string
    component: React.FC
  } | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".animate-on-scroll")
            elements.forEach((el, idx) => setTimeout(() => el.classList.add("animate"), idx * 200))
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const caseStudies = [
    {
      title: "From Know-How to Documentation",
      subtitle: "Turning expertise into scalable content with a digital twin.",
      image: "/tribal-knowledge.png",
      component: TribalKnowledge,
      color: "primary",
    },
    {
      title: "Docs That Drive Adoption",
      subtitle: "Helping users help themselves with structured, use-case-based content.",
      image: "/knowledge-base.png",
      component: KnowledgeBase,
      color: "secondary",
    },
    {
      title: "Simplifying Complex Systems",
      subtitle: "A single, visual source of truth for embedded metro door controls.",
      image: "/embedded-systems.png",
      component: EmbeddedSystems,
      color: "primary",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {selected ? (
          <div className="space-y-8">
            <Button
              variant="ghost"
              className="mb-4"
              onClick={() => setSelected(null)}
            >
              ← Go Back
            </Button>
            <h2 className="text-3xl sm:text-4xl font-bold">
              {selected.title}
            </h2>
            <div className="mt-6">
              <selected.component />
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Case <span className="text-primary">Study</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {caseStudies.map((item, idx) => {
                const borderClass =
                  item.color === "primary"
                    ? "border-primary/20 from-primary/5"
                    : "border-secondary/20 from-secondary/5"
                const buttonClass =
                  item.color === "primary"
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-secondary hover:bg-secondary/90"

                return (
                  <Card
                    key={idx} 
                    className={`hover:shadow-lg transition-all duration-300 ${borderClass} bg-gradient-to-br to-background`}
                  >
                    <CardContent className="p-8 flex flex-col items-center text-center">
                      <div className="w-32 h-32 mb-4 overflow-hidden rounded-full">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-6">{item.subtitle}</p>
                      <Button
                        asChild
                        className={`${buttonClass} text-white font-semibold px-6 py-2 rounded-full`}
                      >
                        <Link href={
                          idx === 0 ? "/resource/tribal-knowledge" :
                          idx === 1 ? "/resource/knowledge-base" :
                          "/resource/embedded-systems"
                        }>
                          Learn More
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
