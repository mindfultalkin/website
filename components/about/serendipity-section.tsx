"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function SerendipitySection() {
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

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Started by <span className="text-primary">Pure Serendipity</span>
            </h2>
          </div>

          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:shadow-lg transition-all duration-300 animate-on-scroll">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-foreground leading-relaxed mb-6">
                      It all began with a simple web redesign project that went awry. Poor communication between teams
                      led to missed deadlines, confused expectations, and frustrated stakeholders. What should have been
                      a straightforward collaboration became a lesson in how critical clear communication truly is for
                      business success.
                    </p>

                    <p className="text-lg text-foreground leading-relaxed">
                      That experience sparked a realization: skilled professionals struggled to communicate effectively
                      in a simple project, imagine the revenue and opportunities being lost across organizations every
                      day. The UI/UX challenge became the catalyst for something much bigger — the birth of
                      Mindatlink.in.
                    </p>
                  </div>

                  <div>
                    <img
                      src="/project_collaboration.png"
                      alt="Project collaboration illustration"
                      width={400}
                      height={300}
                      className="w-full h-72 object-contain rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center animate-on-scroll">
              <Card className="bg-gradient-to-r from-secondary/10 to-primary/10 border-secondary/20 inline-block">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-4">
                    <Quote className="h-8 w-8 text-secondary mr-3" />
                    <Quote className="h-8 w-8 text-secondary transform rotate-180" />
                  </div>
                  <blockquote className="text-xl lg:text-2xl font-semibold text-foreground italic">
                    "Sometimes the greatest insights come from our biggest challenges"
                  </blockquote>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-secondary/5 to-primary/5 border-secondary/20 hover:shadow-lg transition-all duration-300 animate-on-scroll">
              <CardContent className="p-8 lg:p-12">
                <div className="text-center">
                  <p className="text-lg text-foreground leading-relaxed">
                    We decided to transform that frustrating experience into a solution that would help professionals
                    articulate their ideas clearly, collaborate effectively, and unlock the growth that clear
                    communication enables.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
