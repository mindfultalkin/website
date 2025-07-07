// components/hero-section.tsx
"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Target } from "lucide-react"
import Image from "next/image"
import { ContactModal } from "@/components/contact-modal"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-8 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block text-foreground">Capture What Your</span>
                  <span className="block text-primary">People Know.</span>
                  <span className="block text-foreground">Deliver What Your</span>
                  <span className="block text-primary">Business Needs.</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  We help businesses turn all the "in-your-head" knowledge into stuff people can use, like training that
                  sticks, docs that make sense, and communication that hits the mark. Result? Teams are on the same page,
                  employees aren't lost, and the business moves forward.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* Only this Button is modified to open our modal */}
                <Button
                  onClick={() => setIsModalOpen(true)}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 group"
                >
                  Let's create together
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Stats (unchanged) */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">People Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-secondary">95%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Domains Covered</div>
                </div>
              </div>
            </div>

            {/* Right Content - Animated Icons & Image (unchanged) */}
            <div className={`relative ${isVisible ? "animate-float-in-right" : "opacity-0"}`}>
              <div className="relative w-full h-96 lg:h-[500px]">
                {/* Floating Icons */}
                <div className="absolute top-10 left-10 animate-float">
                  <div className="bg-primary/10 p-6 rounded-full">
                    <BookOpen className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <div className="absolute top-20 right-10 animate-float" style={{ animationDelay: "1s" }}>
                  <div className="bg-secondary/10 p-6 rounded-full">
                    <Users className="h-12 w-12 text-secondary" />
                  </div>
                </div>
                <div
                  className="absolute transform -translate-x-1/2 animate-float"
                  style={{ animationDelay: "2s", left: "63%", bottom: "0rem" }}
                >
                  <div className="bg-primary/10 p-6 rounded-full">
                    <Target className="h-12 w-12 text-primary" />
                  </div>
                </div>

                {/* Central Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-120 h-120 flex items-center justify-center animate-pulse-slow">
                    <Image
                      src="/hero_img.png"
                      alt="Knowledge transformation illustration"
                      width={550}
                      height={550}
                      className="w-120 h-120 object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
