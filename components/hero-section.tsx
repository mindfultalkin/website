"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Target } from "lucide-react"
import { ContactModal } from "@/components/contact-modal"
import OptimizedImage from '@/components/ui/optimized-image'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const floatIconVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  }

  return (
    <>
      <section ref={sectionRef} className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="container mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-8" variants={itemVariants}>
              <motion.div className="space-y-6" variants={itemVariants}>
                <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight">
                  <motion.span className="block text-foreground" variants={itemVariants}>
                    Capture What Your
                  </motion.span>
                  <motion.span className="block text-primary" variants={itemVariants}>
                    People Know.
                  </motion.span>
                  <motion.span className="block text-foreground" variants={itemVariants}>
                    Deliver What Your
                  </motion.span>
                  <motion.span className="block text-primary" variants={itemVariants}>
                    Business Needs.
                  </motion.span>
                </h1>
                <motion.p 
                  className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl"
                  variants={itemVariants}
                >
                  We help businesses turn all the "in-your-head" knowledge into stuff people can use, like training that
                  sticks, docs that make sense, and communication that hits the mark. Result? Teams are on the same page,
                  employees aren't lost, and the business moves forward.
                </motion.p>
              </motion.div>

              <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
                <Button
                  onClick={() => setIsModalOpen(true)}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 group"
                >
                  Let's create together
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div className="grid grid-cols-3 gap-6 pt-8" variants={itemVariants}>
                <motion.div className="text-center" variants={itemVariants}>
                  <div className="text-2xl sm:text-3xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">People Impacted</div>
                </motion.div>
                <motion.div className="text-center" variants={itemVariants}>
                  <div className="text-2xl sm:text-3xl font-bold text-secondary">95%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Score</div>
                </motion.div>
                <motion.div className="text-center" variants={itemVariants}>
                  <div className="text-2xl sm:text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Domains Covered</div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div className="relative" variants={itemVariants}>
              <div className="relative w-full h-96 lg:h-[500px]">
                <motion.div 
                  className="absolute top-10 left-10"
                  variants={floatIconVariants}
                >
                  <div className="bg-primary/10 p-6 rounded-full">
                    <BookOpen className="h-12 w-12 text-primary" />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute top-20 right-10"
                  variants={floatIconVariants}
                >
                  <div className="bg-secondary/10 p-6 rounded-full">
                    <Users className="h-12 w-12 text-secondary" />
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute"
                  style={{ left: "63%", bottom: "0rem" }}
                  variants={floatIconVariants}
                >
                  <div className="bg-primary/10 p-6 rounded-full">
                    <Target className="h-12 w-12 text-primary" />
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  variants={itemVariants}
                >
                  <div className="w-120 h-120 flex items-center justify-center">
                    <OptimizedImage 
                      src="/hero_img.png"
                      alt="Hero Image showcasing Mindfultalk's communication solutions"
                      width={1200}
                      height={600}
                      priority
                      className="rounded-lg transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
