"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Users, BarChart, Zap } from "lucide-react"

export function BusinessHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-foreground">Let How You Communicate</span>
                <span className="block text-foreground">Steer You To Your</span>                
                <span className="block text-primary">Business Goals</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                While you invest millions in marketing and technology, miscommunication is quietly leaking your profits
                through project delays, client confusion, and team inefficiency. If your team is struggling to
                articulate ideas and your best insights are trapped in unclear communication, your business can't scale.
              </p>

              <p className="text-lg text-foreground leading-relaxed max-w-2xl">
                We help teams speak up, present with impact, and use stories that drive decisions to help you grow your
                business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => window.open('https://in.bigin.online/org60035146435/forms/portfolio')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 group"
              >
                Book a Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>              
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">↑45%</div>
                <div className="text-sm text-muted-foreground">Team Productivity</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-secondary">↓30%</div>
                <div className="text-sm text-muted-foreground">Project Delays</div>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Icons */}
          <div className={`relative ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Floating Icons */}
              <div className="absolute top-10 left-10 animate-float">
                <div className="bg-primary/10 p-6 rounded-full">
                  <MessageSquare className="h-12 w-12 text-primary" />
                </div>
              </div>

              <div className="absolute top-20 right-10 animate-float" style={{ animationDelay: "1s" }}>
                <div className="bg-secondary/10 p-6 rounded-full">
                  <Users className="h-12 w-12 text-secondary" />
                </div>
              </div>

              <div className="absolute bottom-32 left-16 animate-float" style={{ animationDelay: "2s" }}>
                <div className="bg-primary/10 p-6 rounded-full">
                  <BarChart className="h-12 w-12 text-primary" />
                </div>
              </div>

              <div className="absolute bottom-20 right-16 animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="bg-secondary/10 p-6 rounded-full">
                  <Zap className="h-12 w-12 text-secondary" />
                </div>
              </div>

              {/* Central Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-120 h-120 flex items-center justify-center animate-pulse-slow">
                  <img
                    src="/hero_img_business_communication.png"
                    alt="Business Communication Illustration"
                    width={550} // Increased width from 300 to 400
                    height={550} // Increased height from 300 to 400
                    className="w-120 h-120 object-cover" // Increased from w-64 h-64 to w-80 h-80
                  />
                </div>
              </div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">                
                <path
                  d="M 80 80 Q 200 150 320 120"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse-slow"
                />
                <path
                  d="M 320 120 Q 250 250 150 300"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse-slow"
                  style={{ animationDelay: "1s" }}
                />
                <path
                  d="M 150 300 Q 100 200 80 80"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse-slow"
                  style={{ animationDelay: "2s" }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
