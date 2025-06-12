"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function TrainingSection() {
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
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:shadow-lg transition-all duration-300 animate-on-scroll">
            <CardContent className="p-8 lg:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
                Turn Training Expenses Into<br></br> <span className="text-primary">Performance Assets</span>
              </h2>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <img
                    src="/performance_assets.png"
                    alt="Training transformation illustration"
                    width={500}      // Increased width
                    height={400}     // Increased height
                    className="w-full h-72 object-contain rounded-lg" // Changed height and object-fit
                  />
                </div>

                <div className="md:w-1/2">
                  <p className="text-lg text-foreground leading-relaxed">
                    Your employees can't drive business results if they're sitting through boring courses, forgetting
                    what they learned, or struggling to apply new skills on the job. If your training programs aren't
                    delivering measurable outcomes, you're burning budget without building capability.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed mt-4">
                    We design learning experiences that stick — the kind that transform behavior, boost performance, and
                    deliver ROI you can track.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
