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
    const total =
      scores.driver +
      scores.expressive +
      scores.amiable +
      scores.analytic

    return (
      <div className="max-w-4xl mx-auto py-16 px-4 space-y-12">

        {/* Raw Counts */}
          {/* <h2 className="text-xl font-bold">Your Selections</h2> */}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="border rounded-lg p-4">
              <div className="text-sm text-muted-foreground">Driver</div>
              <div className="text-2xl font-bold">{scores.driver}</div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="text-sm text-muted-foreground">Expressive</div>
              <div className="text-2xl font-bold">{scores.expressive}</div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="text-sm text-muted-foreground">Amiable</div>
              <div className="text-2xl font-bold">{scores.amiable}</div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="text-sm text-muted-foreground">Analytic</div>
              <div className="text-2xl font-bold">{scores.analytic}</div>
            </div>

          {/* <div className="text-sm text-muted-foreground text-right">
            Total = {total} / {TOTAL_QUESTIONS}
          </div> */}
        </div>

        <TallyBox scores={scores} />
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
        <h2 className="text-2xl font-bold">
          Pick the word that fits you best
        </h2>

        {/* Options */}
        <div className="space-y-4">
          {question.options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              className="w-full border rounded-xl px-6 py-4 text-left
                         hover:border-primary transition"
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
