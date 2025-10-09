// components/footer.tsx
"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Linkedin, Twitter, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState<string>("")

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    if (!email) {
      setError("Please enter your email.")
      return
    }
    setStatus("loading")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus("success")
        setEmail("")
      } else {
        setStatus("error")
        const data = await res.json()
        setError(data?.error || "Something went wrong. Please try again.")
      }
    } catch (err: any) {
      setStatus("error")
      setError("Something went wrong. Please try again.")
    }
  }

  return (
    <footer id="contact" className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/mindfultalk_logo_white.png"
                alt="Mindfultalk Logo"
                width={150}
                height={40}
                className="brightness-0 invert"
              />
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              We help businesses turn complex knowledge into clear, actionable communication. From technical writing to
              instructional design, we make expertise accessible.
            </p>
            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://www.linkedin.com/company/mindfultalk-in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                {/* <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                  <Facebook className="h-5 w-5" />
                </Button> */}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-background/80 mb-4">
              Have questions or need guidance? Our team is here to provide the support you need.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                {status === "loading" ? "Submitting…" : "Submit"}
              </Button>
            </form>
            {status === "success" && (
              <p className="mt-2 text-green-500">Thanks for submission</p>
            )}
            {(status === "error" || error) && (
              <p className="mt-2 text-red-500">{error || "Something went wrong. Please try again."}</p>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-6">Get in Touch</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-background/80">latha.srinivasan@mindfultalk.in</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-background/80">seema.albal@mindfultalk.in</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-background/80">+91 9900102670</p>
                </div>
              </div>
              <div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-background/80">
                    Whitefield, Bengaluru,
                    <br />
                    Karnataka 560066
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/80 text-sm">© 2025 Mindfultalk.in All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="https://portfolio-eosin-one-3k2cjgxh93.vercel.app/"
                className="text-background/80 hover:text-primary transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/privacy"
                className="text-background/80 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                href="/refund-and-cancellation-policy"
                className="text-background/80 hover:text-primary transition-colors"
              >
                Refund and Cancellation Policy
              </Link>

              <Link
                href="/terms"
                className="text-background/80 hover:text-primary transition-colors"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
