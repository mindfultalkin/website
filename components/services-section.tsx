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
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">Technical Writing</h3>
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                What's the point of documentation if no one can use it?
              </p>

              <div className="space-y-4 mb-8">
                <p className="text-foreground leading-relaxed">
                  Our technical writers combine crisp writing, intuitive design, and hands-on insight to deliver content
                  that works in the real world. Whether it's a how-to guide, API doc, or on-boarding manual, we don't
                  just document—we think like your users to make every step simple and clear.
                </p>

                <ul className="space-y-2 text-muted-foreground">
                  <li>• What are they trying to do?</li>
                  <li>• Where do they get stuck?</li>
                  <li>• How can we make it faster, clearer, easier?</li>
                </ul>

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
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <img
                    src="/hero_img_business_communication.png"
                    alt="Technical writing illustration"
                    className="w-full h-48 object-contain rounded-lg mb-4" // Modified height and object-fit
                    width={400}  // Added explicit width
                    height={192} // Added explicit height (48 * 4 = 192 pixels)
                  />
                  <div className="text-center">
                    <h4 className="text-xl font-semibold mb-2">Clear Documentation</h4>
                    <p className="text-muted-foreground">
                      Making complex technical information accessible and actionable
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Instructional Design */}
          <div id="instructional-design" className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 animate-on-scroll">
              <div className="flex items-center mb-6">
                <div className="bg-secondary/10 p-3 rounded-full mr-4">
                  <GraduationCap className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">Instructional Design</h3>
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                What happens after the training ends—can you remember?
              </p>

              <div className="space-y-4 mb-8">
                <p className="text-foreground leading-relaxed">
                  We design learning experiences that stick. Our instructional designers craft well-organized, practical
                  programs that help people actually learn—and not just for a test.
                </p>

                <ul className="space-y-2 text-muted-foreground">
                  <li>• Can they apply it on the job?</li>
                  <li>• Will it make a difference tomorrow, not just today?</li>
                </ul>

                <p className="text-foreground">
                  That's our goal. With easy-to-read scenarios, built-in assessments, and optional self-reflection,
                  every course is built to boost clarity, confidence, and real-world results.
                </p>
              </div>

              <Link href="/instructional-design">
                <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-6 py-3 rounded-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="lg:order-1 animate-on-scroll">
              <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <img
                    src="/hero_img_instructional_design.png"
                    alt="Instructional design illustration"
                    className="w-full h-48 object-contain rounded-lg mb-4" // Modified height and object-fit
                    width={400}  // Added explicit width
                    height={192} // Added explicit height (48 * 4 = 192 pixels)
                  />
                  <div className="text-center">
                    <h4 className="text-xl font-semibold mb-2">Effective Learning</h4>
                    <p className="text-muted-foreground">Training programs that create lasting knowledge and skills</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Business Communication */}
          <div id="business-communication" className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">Business Communication</h3>
              </div>

              <p className="text-lg text-muted-foreground mb-6">We help you say the right thing, the right way.</p>

              <div className="space-y-4 mb-8">
                <p className="text-foreground leading-relaxed">
                  Whether you're talking to your team or your customers,
                </p>

                <ul className="space-y-2 text-muted-foreground">
                  <li>• is your message clear?</li>
                  <li>• Confident?</li>
                  <li>• Easy to act on?</li>
                </ul>

                <p className="text-foreground">
                  That's where we come in. From strategy to delivery, we help you communicate with purpose—so your
                  content builds trust, resonates instantly, and gets the response you're really after.
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
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <img
                    src="/corporate_training.png"
                    alt="Business communication illustration"
                    className="w-full h-48 object-contain rounded-lg mb-4" // Modified height and object-fit
                    width={400}  // Added explicit width
                    height={192} // Added explicit height (48 * 4 = 192 pixels)
                  />
                  <div className="text-center">
                    <h4 className="text-xl font-semibold mb-2">Clear Communication</h4>
                    <p className="text-muted-foreground">Messages that connect, convince, and drive action</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
