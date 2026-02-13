"use client"

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

function getPositionFromLayout(
  style: "Driver" | "Expressive" | "Amiable" | "Analytic",
  score: number
): number {
  const row = TALLY_LAYOUT.find(r => r.label === style)
  if (!row) return 0

  for (const box of row.boxes) {
    if (box.numbers.includes(score)) {
      return box.positions[score]
    }
  }

  return 0
}

export function ResultSummary({ scores }: { scores: Scores }) {
  const positioned = {
    driver: getPositionFromLayout("Driver", scores.driver),
    expressive: getPositionFromLayout("Expressive", scores.expressive),
    amiable: getPositionFromLayout("Amiable", scores.amiable),
    analytic: getPositionFromLayout("Analytic", scores.analytic),
  }

  const ranked = (Object.keys(positioned) as StyleKey[])
    .map(key => ({
      key,
      position: positioned[key],
    }))
    .sort((a, b) => b.position - a.position)

  const primary = ranked[0]
  const secondary = ranked[1]

  return (
    <div className="mt-10 md:mt-12 space-y-6 md:space-y-8 px-4 md:px-0">

      <h2 className="text-medium sm:text-xl md:text-2xl lg:text-xl font-bold">
        Your Style Summary
      </h2>

      {/* Primary Card */}
      <div className="border rounded-xl p-4 sm:p-5 md:p-6 space-y-3">
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
          Primary Style — {STYLE_META[primary.key].title}
        </h3>

        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
          {STYLE_META[primary.key].description}
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
  )
}
