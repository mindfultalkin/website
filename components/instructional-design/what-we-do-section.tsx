"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

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
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              What We <span className="text-primary">Do</span>
            </h2>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:shadow-lg transition-all duration-300 animate-on-scroll">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-xl text-foreground font-semibold mb-6">
                    We turn your expertise into structured, scalable learning experiences that drive real results.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Our instructional design service blends creative thinking with academic rigor. Whether you're
                    launching a new academy, filling functional training gaps, or scaling global onboarding, we work as
                    an extension of your team — delivering solutions rooted in instructional design best practices.
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">Our proven frameworks include:</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {frameworks.map((framework, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-foreground font-medium">{framework}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <img
                    src="/design_frameworks.png?height=300&width=400"
                    alt="Instructional design frameworks illustration"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
