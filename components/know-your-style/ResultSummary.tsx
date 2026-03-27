"use client"

import { useRef } from "react"
import html2canvas from "html2canvas"
import { TALLY_LAYOUT } from "@/data/know-your-style/tally-layout"

type Scores = {
  driver: number
  expressive: number
  amiable: number
  analytic: number
}

type StyleKey = keyof Scores

const STYLE_META = {
  driver: {
    title: "Driver",
    description: "You are results-focused, decisive, and driven by challenges.",
  },
  expressive: {
    title: "Expressive",
    description: "You are enthusiastic, outgoing, and people-oriented.",
  },
  amiable: {
    title: "Amiable",
    description: "You are supportive, patient, and relationship-focused.",
  },
  analytic: {
    title: "Analytic",
    description: "You are thoughtful, detail-oriented, and logical.",
  },
}

function getInterpolatedPosition(
  row: typeof TALLY_LAYOUT[number],
  score: number
): number {
  const points = row.boxes
    .flatMap(box =>
      box.numbers.map(n => ({
        value: n,
        pos: box.positions[n],
      }))
    )
    .sort((a, b) => a.value - b.value)

  if (points.length === 0) return 0

  if (score <= points[0].value) return points[0].pos

  if (score >= points[points.length - 1].value)
    return points[points.length - 1].pos

  const exact = points.find(p => p.value === score)
  if (exact) return exact.pos

  for (let i = 0; i < points.length - 1; i++) {
    const lower = points[i]
    const upper = points[i + 1]

    if (score > lower.value && score < upper.value) {
      const ratio =
        (score - lower.value) / (upper.value - lower.value)

      return lower.pos + ratio * (upper.pos - lower.pos)
    }
  }

  return 0
}

export function ResultSummary({
  scores,
  name,
}: {
  scores: Scores
  name: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const positioned = {
    driver: getInterpolatedPosition(
      TALLY_LAYOUT.find(r => r.label === "Driver")!,
      scores.driver
    ),
    expressive: getInterpolatedPosition(
      TALLY_LAYOUT.find(r => r.label === "Expressive")!,
      scores.expressive
    ),
    amiable: getInterpolatedPosition(
      TALLY_LAYOUT.find(r => r.label === "Amiable")!,
      scores.amiable
    ),
    analytic: getInterpolatedPosition(
      TALLY_LAYOUT.find(r => r.label === "Analytic")!,
      scores.analytic
    ),
  }

  const ranked = (Object.keys(positioned) as StyleKey[])
    .map(key => ({
      key,
      position: positioned[key],
    }))
    .sort((a, b) => b.position - a.position)

  const primary = ranked[0]
  const secondary = ranked[1]

  const handleDownload = async () => {
    if (!ref.current) return

    const canvas = await html2canvas(ref.current, {
      scale: 2,
      useCORS: true,
    })

    const link = document.createElement("a")
    link.download = `${name}-personality-style.png`
    link.href = canvas.toDataURL()
    link.click()
  }

  return (
    <div className="mt-10 md:mt-12 space-y-6 md:space-y-8 px-4 md:px-0">

      {/* WRAPPED FOR DOWNLOAD */}
      <div ref={ref} className="space-y-6 md:space-y-8">

        <h2 className="text-medium sm:text-xl md:text-2xl lg:text-xl font-bold">
          {name}, your Style Summary
        </h2>

        {/* Primary Card */}
        <div className="border rounded-xl p-4 sm:p-5 md:p-6 space-y-3">
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
            Primary Style — {STYLE_META[primary.key].title}
          </h3>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            {name}, you are naturally a{" "}
            <span className="font-semibold">
              {STYLE_META[primary.key].title}
            </span>{" "}
            personality. {STYLE_META[primary.key].description}
          </p>

          <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
            Score: {primary.position}
          </p>
        </div>

        {/* Secondary Card */}
        <div className="border rounded-xl p-4 sm:p-5 md:p-6 space-y-2">
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
            Secondary Style — {STYLE_META[secondary.key].title}
          </h3>

          <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
            Score: {secondary.position}
          </p>
        </div>

      </div>

      {/* DOWNLOAD BUTTON */}
      {/* <button
        onClick={handleDownload}
        className="mt-4 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:scale-[1.02] transition"
      >
        Download Result
      </button> */}

      {/* SHARE TEXT */}
      {/* <p className="text-sm text-muted-foreground text-center">
        Share this with your friends 👀
      </p> */}

    </div>
  )
}