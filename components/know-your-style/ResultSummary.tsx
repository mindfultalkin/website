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
  // Convert scores → positions
  const positioned = {
    driver: getPositionFromLayout("Driver", scores.driver),
    expressive: getPositionFromLayout("Expressive", scores.expressive),
    amiable: getPositionFromLayout("Amiable", scores.amiable),
    analytic: getPositionFromLayout("Analytic", scores.analytic),
  }

  // Rank by POSITION, not score
  const ranked = (Object.keys(positioned) as StyleKey[])
    .map(key => ({
      key,
      position: positioned[key],
    }))
    .sort((a, b) => b.position - a.position)

  const primary = ranked[0]
  const secondary = ranked[1]

  return (
    <div className="mt-12 space-y-8">
      <h2 className="text-2xl font-bold">Your Style Summary</h2>

      <div className="border rounded-xl p-6">
        <h3 className="text-xl font-semibold">
          Primary Style — {STYLE_META[primary.key].title}
        </h3>
        <p className="text-muted-foreground">
          {STYLE_META[primary.key].description}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Position: {primary.position}
        </p>
      </div>

      <div className="border rounded-xl p-6">
        <h3 className="text-lg font-semibold">
          Secondary Style — {STYLE_META[secondary.key].title}
        </h3>
        <p className="text-sm text-muted-foreground">
          Position: {secondary.position}
        </p>
      </div>
    </div>
  )
}
