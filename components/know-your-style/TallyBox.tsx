"use client"

import { TALLY_LAYOUT } from "@/data/know-your-style/tally-layout"

type Scores = {
  driver: number
  expressive: number
  amiable: number
  analytic: number
}

type Props = {
  scores: Scores
}

export function TallyBox({ scores }: Props) {
  /* ========= SAFETY ========= */
  const safeScores: Scores = {
    driver: Number.isFinite(scores.driver) ? scores.driver : 0,
    expressive: Number.isFinite(scores.expressive) ? scores.expressive : 0,
    amiable: Number.isFinite(scores.amiable) ? scores.amiable : 0,
    analytic: Number.isFinite(scores.analytic) ? scores.analytic : 0,
  }

  const getScoreForRow = (label: string) => {
    switch (label) {
      case "Driver":
        return safeScores.driver
      case "Expressive":
        return safeScores.expressive
      case "Amiable":
        return safeScores.amiable
      case "Analytic":
        return safeScores.analytic
      default:
        return 0
    }
  }

  const normalizeScore = (label: string, raw: number) => {
    const row = TALLY_LAYOUT.find(r => r.label === label)
    if (!row) return 0

    const max = Math.max(...row.boxes.flatMap(b => b.numbers))
    return Math.min(raw, max)
  }

  const total =
    safeScores.driver +
    safeScores.expressive +
    safeScores.amiable +
    safeScores.analytic

  return (
    <div className="space-y-10">
      <h2 className="text-xl font-bold">Tally Box</h2>

      {/* Overall progress */}
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-2 bg-primary rounded-full transition-all duration-500 ease-out"
          style={{ width: `${(total / 24) * 100}%` }}
        />
      </div>

      {TALLY_LAYOUT.map(row => {
        const rawScore = getScoreForRow(row.label)
        const score = normalizeScore(row.label, rawScore)

        return (
          <div key={row.label} className="space-y-2">
            <div className="italic text-sm">{row.label}</div>

            <div className="flex items-center gap-2">
              {/* Code */}
              <div className="w-10 h-10 border flex items-center justify-center font-medium">
                {row.code}
              </div>

              {/* ROW = GLOBAL RULER */}
              <div className="relative w-full h-10">
                {/* Visual boxes (segments only) */}
                <div className="flex h-full">
                  {row.boxes.map((box, i) => {
                    const boxMax = Math.max(...box.numbers)
                    const isFilled = score > boxMax
                    const isActive = box.numbers.includes(score)

                    return (
                      <div
                        key={i}
                        className={`
                          h-full w-1/4 border
                          transition-colors duration-300 ease-out
                          ${isFilled ? "bg-primary border-primary" : ""}
                          ${isActive ? "bg-primary/40 border-primary" : ""}
                        `}
                      />
                    )
                  })}
                </div>

                {/* Numbers (GLOBAL positioning) */}
                {row.boxes.flatMap(box =>
                  box.numbers.map(num => {
                    const left = box.positions[num]
                    if (left === undefined) return null

                    return (
                      <span
                        key={num}
                        className="absolute top-1/2 font-mono text-sm transition-all duration-300 ease-out"
                        style={{
                          left: `${left}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        {num}
                      </span>
                    )
                  })
                )}
              </div>
            </div>
          </div>
        )
      })}

      <div className="mt-6 font-semibold">
        TOTAL = {total} / 24
      </div>
    </div>
  )
}
