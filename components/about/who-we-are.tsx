"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animateElements = entry.target.querySelectorAll(".animate-on-scroll")
            animateElements.forEach((el, index) => {
              setTimeout(() => {
                if (el instanceof Element) {
                  el.classList.add("animate")
                }
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
    <section
      id="cta"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
              Who We Are
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed">
              At Mindfultalk, we’re a team of communication specialists, coaches, and writers united by one purpose — to help professionals express themselves with clarity, confidence, and authenticity. We understand that communication isn’t just about words; it’s about how you connect, influence, and lead. Our work is built on the belief that great communicators aren’t born—they’re shaped through awareness, empathy, and consistent practice. Led by a team of seasoned communication experts with over 100 years of combined industry experience, we combine leadership insight with empathetic, practical coaching.<br></br>Our writing team works hand-in-hand with subject matter experts, senior leaders, and developers to transform complex technical information into clear, accessible, and business-aligned documentation. Whether it’s product guides, internal knowledge bases, or process documentation, we make sure your message is precise, professional, and ready to drive growth.
            </p>

            <div className=" from-primary/10 to-secondary/10 rounded-2xl p-8 mb-12">
              <Image
                src="/business_success_illustration.png"
                alt="Business Success Illustration"
                width={800}
                height={350}
              />

              <div className="max-w-lg mx-auto">
                <Button
                  onClick={() => window.open('https://portfolio-eosin-one-3k2cjgxh93.vercel.app/')}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 group w-full sm:w-auto"
                >
                  Book a Call
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">Unlock Revenue</div>
                <div className="text-muted-foreground">Clear communication drives business results</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary mb-2">Drive Growth</div>
                <div className="text-muted-foreground">Effective collaboration accelerates success</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">Transform Teams</div>
                <div className="text-muted-foreground">Empower professionals to communicate with impact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
