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
  const safeScores: Scores = {
    driver: Number.isFinite(scores?.driver) ? scores.driver : 0,
    expressive: Number.isFinite(scores?.expressive) ? scores.expressive : 0,
    amiable: Number.isFinite(scores?.amiable) ? scores.amiable : 0,
    analytic: Number.isFinite(scores?.analytic) ? scores.analytic : 0,
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
    <div className="w-full space-y-10 px-4 md:px-0">

      {/* TITLE */}
      <h2 className="text-lg md:text-xl font-semibold tracking-tight">
        Tally Box
      </h2>

      {/* TOTAL PROGRESS
      <div className="space-y-2">
        <div className="relative w-full h-2 md:h-3 bg-muted rounded-full overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-primary transition-all duration-500 ease-out"
            style={{
              width: `${(total / 24) * 100}%`,
            }}
          />
        </div>

        <div className="text-xs md:text-sm text-muted-foreground">
          TOTAL = {total} / 24
        </div>
      </div> */}

      {/* ROWS */}
      {TALLY_LAYOUT.map(row => {
        const rawScore = getScoreForRow(row.label)
        const score = normalizeScore(row.label, rawScore)

        const position =
          row.boxes
            .flatMap(box =>
              box.numbers.map(n => ({
                value: n,
                pos: box.positions[n],
              }))
            )
            .find(item => item.value === score)?.pos ?? 0

        return (
          <div key={row.label} className="space-y-3">

            {/* Label ONLY (score number removed here) */}
            <div className="text-sm md:text-base italic font-medium">
              {row.label}
            </div>

            {/* Row Content */}
            <div className="flex items-center gap-3 md:gap-4">

              {/* Code Box */}
              {/* <div
                className="
                  w-8 h-8
                  md:w-10 md:h-10
                  lg:w-12 lg:h-12
                  border border-muted
                  rounded-md
                  flex items-center justify-center
                  text-xs md:text-sm
                  font-semibold
                  shrink-0
                "
              >
                {row.code}
              </div> */}

              {/* SCALE (Full width mobile) */}
              <div className="relative flex-1 h-6 md:h-9 lg:h-12 bg-primary/15 rounded-md overflow-hidden">

                {/* Light Fill */}
                <div
                  className="absolute left-0 top-0 h-full bg-primary/15 rounded-md transition-all duration-500 ease-out"
                  style={{ width: `${position}%` }}
                />

                {/* Segments */}
                <div className="relative flex h-full rounded-md overflow-hidden">
                  {row.boxes.map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 border border-muted"
                    />
                  ))}
                </div>

                {/* Marker Line */}
                <div
                  className="absolute top-0 h-full w-[1.5px] bg-primary transition-all duration-500 ease-out"
                  style={{
                    left: `${position}%`,
                    transform: "translateX(-0.75px)",
                  }}
                />

                {/* INSIDE NUMBERS (kept as you wanted) */}
                {row.boxes.flatMap(box =>
                  box.numbers.map(num => {
                    const left = box.positions[num]
                    if (left === undefined) return null

                    return (
                      <span
                        key={num}
                        className="
                          absolute top-1/2
                          text-[9px]
                          md:text-xs
                          lg:text-sm
                          font-mono
                          text-muted-foreground
                          pointer-events-none
                          select-none
                        "
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
    </div>
  )
}
