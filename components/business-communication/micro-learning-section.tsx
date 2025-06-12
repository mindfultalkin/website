"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Clock, TrendingUp } from "lucide-react"

export function MicroLearningSection() {
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
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="text-secondary">Micro-learning</span>
          </h2>

          <p className="text-xl text-foreground leading-relaxed mb-12">
            Short, focused lessons work with the brain's natural retention patterns — employees remember{" "}
            <span className="text-primary font-bold">90% more</span> when information comes in digestible chunks rather
            than overwhelming training sessions.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-on-scroll">
              <Card className="h-full bg-background border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Brain-Friendly</h3>
                  <p className="text-muted-foreground">
                    Designed to work with natural cognitive processes for better retention
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-on-scroll">
              <Card className="h-full bg-background border-secondary/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Time-Efficient</h3>
                  <p className="text-muted-foreground">Fits into busy schedules without disrupting productivity</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-on-scroll">
              <Card className="h-full bg-background border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
                  <p className="text-muted-foreground">Focused on practical application and measurable outcomes</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
