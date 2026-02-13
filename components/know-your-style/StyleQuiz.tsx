"use client"

import { useState } from "react"
import { QUESTIONS } from "@/data/know-your-style/questions"
import { TallyBox } from "@/components/know-your-style/TallyBox"
import { ResultSummary } from "@/components/know-your-style/ResultSummary"

type Scores = {
  driver: number
  expressive: number
  amiable: number
  analytic: number
}

const TOTAL_QUESTIONS = 24

export function StyleQuiz() {
  /* ================= STATE ================= */
  const [current, setCurrent] = useState(0)

  const [scores, setScores] = useState<Scores>({
    driver: 0,
    expressive: 0,
    amiable: 0,
    analytic: 0,
  })

  const [showResult, setShowResult] = useState(false)

  /* ================= SAFETY ================= */
  if (!Array.isArray(QUESTIONS) || QUESTIONS.length !== TOTAL_QUESTIONS) {
    return <div className="p-6">Invalid questions configuration</div>
  }

  /* ================= OPTION SELECT ================= */
  const handleSelect = (value: number) => {
    setScores((prev) => {
      const next = { ...prev }

      if (value === 1) next.driver += 1
      if (value === 2) next.expressive += 1
      if (value === 3) next.amiable += 1
      if (value === 4) next.analytic += 1

      return next
    })

    if (current < TOTAL_QUESTIONS - 1) {
      setCurrent((p) => p + 1)
    } else {
      setShowResult(true)
    }
  }

  /* ================= RESULT VIEW ================= */
  if (showResult) {
    return (
      <div className="max-w-5xl mx-auto py-12 md:py-16 px-4 space-y-10">

        {/* Compact Summary Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-center">

          {[
            { label: "Driver", value: scores.driver },
            { label: "Expressive", value: scores.expressive },
            { label: "Amiable", value: scores.amiable },
            { label: "Analytic", value: scores.analytic },
          ].map((item) => (
            <div
              key={item.label}
              className="
                border rounded-lg
                py-3 px-3
                md:py-4 md:px-4
                space-y-1
                bg-muted/30
              "
            >
              <div className="text-xs md:text-sm text-muted-foreground">
                {item.label}
              </div>
              <div className="text-lg md:text-xl font-semibold">
                {item.value}
              </div>
            </div>
          ))}

        </div>

        {/* Visual Scale */}
        <TallyBox scores={scores} />

        {/* Interpretation */}
        <ResultSummary scores={scores} />

      </div>
    )
  }

  /* ================= QUESTION VIEW ================= */
  const question = QUESTIONS[current]

  if (!question || !Array.isArray(question.options)) {
    return <div className="p-6">Loading…</div>
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl space-y-6">

        {/* Progress */}
        <div className="text-sm text-muted-foreground text-right">
          {current + 1} / {TOTAL_QUESTIONS}
        </div>

        <div className="w-full h-2 bg-muted rounded-full">
          <div
            className="h-2 bg-primary rounded-full transition-all"
            style={{ width: `${((current + 1) / TOTAL_QUESTIONS) * 100}%` }}
          />
        </div>

        {/* Question */}
        <h2 className="text-xl sm:text-2xl font-bold">
          Pick the word that fits you best
        </h2>

        {/* Options */}
        <div className="space-y-4">
          {question.options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              className="
                w-full border rounded-xl
                px-6 py-4 text-left
                hover:border-primary
                transition
              "
            >
              {opt.label}
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}
