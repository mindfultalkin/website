"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import Image from "next/image"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    niche: "",
  })
  const [errors, setErrors] = useState<{ name?: string; email?: string; niche?: string }>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

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
        setTimeout(() => onClose(), 1500)
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md px-10 py-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="flex flex-col items-center mb-4 mt-2">
          <Image
            src="/mindfultalk_logo.png"
            alt="Mindfultalk Logo"
            width={200}
            height={120}
            // className="mb-2 brightness-0 invert"
            priority
          />
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-center">Let's Create Together</h2>

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
            <p className="text-green-600 text-center">Thank you! We'll be in touch soon.</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center">Oops! Something went wrong.</p>
          )}
        </form>
      </div>
    </div>
  )
}
