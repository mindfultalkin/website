// components/hero-section.tsx
"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Code, BookOpen, Users, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function TechnicalWritingHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    niche: "",
  })
  const [errors, setErrors] = useState<{ name?: string; email?: string; niche?: string }>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const validate = () => {
    const errs: typeof errors = {}
    if (!formData.name.trim()) errs.name = "Name is required"
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = "Valid email is required"
    if (!formData.niche.trim()) errs.niche = "Niche is required"
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: undefined })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus("loading")
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", phone: "", niche: "" })
        setTimeout(() => setIsModalOpen(false), 1500)
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <>
      <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-8 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block text-foreground">Documentation</span>
                  <span className="block text-foreground">is Not a Luxury</span>
                  <span className="block text-primary">— It's a Feature</span>
                </h1>

                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Your users can't unlock your product's full value if they're stuck, confused, or dependent on support.
                  If your support team is buried in tickets, you can't scale. That's where we come in.
                </p>

                <p className="text-lg text-foreground leading-relaxed max-w-2xl">
                  We turn complex systems into clear, accessible content — the kind that drives product adoption, reduces
                  support tickets, and makes your users feel smart.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* Modified to open modal */}
                <Button
                  onClick={() => setIsModalOpen(true)}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 group"
                >
                  Talk to Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">↑95%</div>
                  <div className="text-sm text-muted-foreground">User Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-secondary">3×</div>
                  <div className="text-sm text-muted-foreground">Faster On-boarding</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">↓75%</div>
                  <div className="text-sm text-muted-foreground">Support Tickets</div>
                </div>
              </div>
            </div>

            {/* Right Content - Animated Icons */}
            <div className={`relative ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
              <div className="relative w-full h-96 lg:h-[500px]">
                {/* Floating Icons */}
                <div className="absolute top-10 left-10 animate-float">
                  <div className="bg-primary/10 p-6 rounded-full">
                    <FileText className="h-12 w-12 text-primary" />
                  </div>
                </div>

                <div className="absolute top-20 right-10 animate-float" style={{ animationDelay: "1s" }}>
                  <div className="bg-secondary/10 p-6 rounded-full">
                    <Code className="h-12 w-12 text-secondary" />
                  </div>
                </div>

                <div className="absolute bottom-32 left-16 animate-float" style={{ animationDelay: "2s" }}>
                  <div className="bg-primary/10 p-6 rounded-full">
                    <BookOpen className="h-12 w-12 text-primary" />
                  </div>
                </div>

                <div className="absolute bottom-20 right-16 animate-float" style={{ animationDelay: "0.5s" }}>
                  <div className="bg-secondary/10 p-6 rounded-full">
                    <Users className="h-12 w-12 text-secondary" />
                  </div>
                </div>

                {/* Central Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-120 h-120 flex items-center justify-center animate-pulse-slow">
                    <Image
                      src="/hero_img_technical_writing.png"
                      alt="Knowledge transformation illustration"
                      width={550}
                      height={550}
                      className="w-120 h-120 object-cover"
                      priority
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

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-2xl font-semibold mb-4">Talk to Us</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <Input
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              <div>
                <Input
                  name="niche"
                  placeholder="Your Interest*"
                  value={formData.niche}
                  onChange={handleChange}
                  className="w-full"
                />
                {errors.niche && <p className="text-red-500 text-sm">{errors.niche}</p>}
              </div>

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-primary text-white"
              >
                {status === "loading" ? "Submitting…" : "Submit"}
              </Button>

              {status === "success" && (
                <p className="text-green-600 text-center">Thank you! We’ll be in touch soon.</p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-center">Oops! Something went wrong.</p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  )
}
