"use client"

import React, { useEffect, useRef } from 'react';
import { Container } from '@/components/ui/container';
import Image from "next/image";

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animateElements = entry.target.querySelectorAll(".animate-on-scroll")
            animateElements.forEach((el, index) => {
              setTimeout(() => el.classList.add("animate"), index * 200)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 from-background to-secondary/5">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-center">
              Who We <span className="text-primary">Are</span>
            </h2>

            {/* Main Description */}
            <div className="space-y-8 from-primary/10 to-secondary/10 rounded-2xl p-8 mb-12">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-justify">
                At Mindfultalk, we&apos;re a team of communication specialists, coaches, and writers united by one purpose — to help professionals express themselves with clarity, confidence, and authenticity. We understand that communication isn&apos;t just about words; it&apos;s about how you connect, influence, and lead. Our work is built on the belief that great communicators aren&apos;t born—they&apos;re shaped through awareness, empathy, and consistent practice. Led by a team of seasoned communication experts with over 100 years of combined industry experience, we combine leadership insight with empathetic, practical coaching.
              </p>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-justify">
                Our writing team works hand-in-hand with subject matter experts, senior leaders, and developers to transform complex technical information into clear, accessible, and business-aligned documentation. Whether it&apos;s product guides, internal knowledge bases, or process documentation, we make sure your message is precise, professional, and ready to drive growth.
              </p>
            </div>
          </div>

          {/* Our Essence Section */}
          <div className="animate-on-scroll">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-center">
              Our <span className="text-primary">Essence</span>
            </h3>
            <div className="space-y-6 from-secondary/10 to-primary/10 rounded-2xl p-8">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-justify">
                We&apos;re communicators who listen deeply, coaches who care genuinely, and professionals who believe in measurable impact.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-justify">
                At Mindfultalk, everything we do—whether through coaching or writing—is guided by one belief: when communication becomes mindful, everything else becomes possible.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
