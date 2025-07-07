// components/navigation.tsx
"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { ContactModal } from "./contact-modal"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
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
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-background/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/mindfultalk_logo.png"
                  alt="Mindfultalk Logo"
                  width={150}
                  height={40}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/technical-writing" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
                  Technical Writing
                </Link>
                <Link href="/business-communication" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
                  Business Communication
                </Link>
                <Link href="/instructional-design" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
                  Instructional Design
                </Link>
                <Link href="/resource" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
                  Resources
                </Link>
                <Link href="/about" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
                  About Us
                </Link>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded-full transition-all duration-200 hover:scale-105"
              >
                Let's Talk
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-sm rounded-lg mt-2">
                {/* ...same Links... */}
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded-full w-full"
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
