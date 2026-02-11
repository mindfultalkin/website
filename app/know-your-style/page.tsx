"use client"

import { useState } from "react"
import { StyleQuiz } from "@/components/know-your-style/StyleQuiz"
import { Clock, CheckCircle, Brain, ArrowRight } from "lucide-react"

export default function Home() {
  const [started, setStarted] = useState(false)

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      {!started ? (
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="max-w-xl w-full text-center space-y-8">

            {/* Meta info */}
            <div className="flex justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>2–3 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} />
                <span>24 quick picks</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Style Inventory
            </h1>

            {/* Subline */}
            <p className="text-lg text-muted-foreground">
              A short, instinct-based inventory to understand how you naturally
              communicate and interact in social situations.
            </p>

            {/* Key points */}
            <div className="space-y-4 text-left max-w-sm mx-auto">
              <div className="flex items-start gap-3">
                <Brain size={18} className="mt-1 text-muted-foreground" />
                <span>Choose the option that feels most like you</span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle size={18} className="mt-1 text-muted-foreground" />
                <span>No right or wrong answers</span>
              </div>

              <div className="flex items-start gap-3">
                <ArrowRight size={18} className="mt-1 text-muted-foreground" />
                <span>Get clear insight at the end</span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => setStarted(true)}
              className="mt-8 inline-flex items-center gap-2 px-10 py-4 rounded-2xl
                         bg-primary text-white text-lg font-semibold
                         shadow-lg hover:scale-[1.02] transition"
            >
              Start Inventory
              <ArrowRight size={18} />
            </button>

            {/* Reassurance */}
            <p className="text-sm text-muted-foreground">
              Trust your first instinct. Don’t overthink.
            </p>
          </div>
        </div>
      ) : (
        <StyleQuiz />
      )}
    </main>
  )
}
