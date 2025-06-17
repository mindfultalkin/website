"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, GraduationCap, MessageSquare, ArrowRight } from "lucide-react"
import Link from 'next/link'

export function ServicesSection() {
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
    <section id="services" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our Services, <span className="text-primary">Your Solutions</span>
          </h2>
        </div>

        <div className="space-y-20">
          {/* Technical Writing */}
          <div id="technical-writing" className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="flex items-center mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold">Technical Writing</h3>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-foreground leading-relaxed font-bold">
                  What's the point of documentation if no one can use it?
                </p>

                <p className="text-foreground leading-relaxed">
                  We technical writers combine crisp writing, intuitive design, and hands-on insight to deliver content
                  that works in the real world. Whether it's a how-to guide, API doc, or on-boarding manual, we don't
                  just document—we think like your users to make every step simple and clear.
                </p>

                <p className="text-foreground leading-relaxed italic">
                  What are they trying to do? Where do they get stuck? How can we make it faster, clearer, easier?
                </p>

                <p className="text-foreground">
                  That's our focus—so your users can get things done confidently, without second-guessing or endless
                  searching.
                </p>
              </div>

              <Link href="/technical-writing">
                <Button
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-full group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="animate-on-scroll">
              <Card className="from-primary/5 to-primary/10 transition-all duration-300">
                <CardContent className="p-8">
                  <img
                    src="/clear_documentation.png"
                    alt="Technical writing illustration"
                    className="w-full h-68 object-cover rounded-lg mb-4"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Instructional Design */}
          <div id="instructional-design" className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 animate-on-scroll">
              <div className="flex items-center mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold">Instructional Design</h3>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-foreground leading-relaxed font-bold">
                  What happens after the training ends—can you remember?
                </p>

                <p className="text-foreground leading-relaxed">
                  We design learning experiences that stick. Our instructional designers craft well-organized, practical programs that help people actually learn—and not just for a test.
                </p>

                <p className="text-foreground leading-relaxed italic">
                  Can they apply it on the job? Will it make a difference tomorrow, not just today?
                </p>

                <p className="text-foreground">
                 That's our goal. With easy-to-read scenarios, built-in assessments, and optional self-reflection, every course is built to boost clarity, confidence, and real-world results.
                </p>
              </div>

              <Link href="/instructional-design">
                <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-6 py-3 rounded-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="animate-on-scroll">
              <Card className="from-primary/5 to-primary/10 transition-all duration-300">
                <CardContent className="p-8">
                  <img
                    src="/effective_learning.png"
                    alt="Instructional design illustration"
                    className="w-full h-68 object-cover rounded-lg mb-4"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Business Communication */}
          <div id="business-communication" className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="flex items-center mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold">Business Communication</h3>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-foreground leading-relaxed font-bold">
                  We help you say the right thing, the right way.
                </p>

                <p className="text-foreground leading-relaxed">
                  Whether you're talking to your team or your customers,
                </p>

                <p className="text-foreground leading-relaxed italic">
                  Is your message clear? Confident? Easy to act on?
                </p>

                <p className="text-foreground">
                 That's where we come in. From strategy to delivery, we help you communicate with purpose—so your content builds trust, resonates instantly, and gets the response you're really after.
                </p>
              </div>

              <Link href="/business-communication">
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="animate-on-scroll">
              <Card className="from-primary/5 to-primary/10 transition-all duration-300">
                <CardContent className="p-8">
                  <img
                    src="/corporate_training.png"
                    alt="corporate training illustration"
                    className="w-full h-68 object-cover rounded-lg mb-4"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
