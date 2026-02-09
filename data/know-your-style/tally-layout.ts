export type TallyRow = {
  label: "Driver" | "Expressive" | "Amiable" | "Analytic"
  code: number
  boxes: {
    numbers: number[]
    positions: Record<number, number>
  }[]
}

export const TALLY_LAYOUT: TallyRow[] = [
  {
    label: "Driver",
    code: 1,
    boxes: [
      // 0–25
      {
        numbers: [0, 1, 2],
        positions: {
          0: 9,
          1: 12,
          2: 20,
        },
      },
      // 26–50
      {
        numbers: [3, 4, 5, 6],
        positions: {
          3: 27,
          4: 34,
          5: 41,
          6: 48,
        },
      },
      // 51–75
      {
        numbers: [7, 8, 9, 10, 11],
        positions: {
          7: 55,
          8: 59,
          9: 63,
          10: 67,
          11: 71,
        },
      },
      // 76–100
      {
        numbers: [12, 14, 16, 18],
        positions: {
          12: 78,
          14: 85,
          16: 91,
          18: 95,
        },
      },
    ],
  },

  {
    label: "Expressive",
    code: 2,
    boxes: [
      {
        numbers: [0, 1, 2],
        positions: {
          0: 3,
          1: 13,
          2: 17,
        },
      },
      {
        numbers: [3, 4, 5],
        positions: {
          3: 31,
          4: 37,
          5: 43,
        },
      },
      {
        numbers: [6, 7, 8, 9, 10],
        positions: {
          6: 56,
          7: 62,
          8: 65,
          9: 68,
          10: 73,
        },
      },
      {
        numbers: [11, 12, 14, 16],
        positions: {
          11: 80,
          12: 87,
          14: 93,
          16: 98,
        },
      },
    ],
  },

  {
    label: "Amiable",
    code: 3,
    boxes: [
      {
        numbers: [0, 1],
        positions: {
          0: 11,
          1: 20,
        },
      },
      {
        numbers: [2, 3, 4],
        positions: {
          2: 33,
          3: 39,
          4: 42,
        },
      },
      {
        numbers: [5, 6, 7, 8, 9],
        positions: {
          5: 57,
          6: 60,
          7: 64,
          8: 69,
          9: 72,
        },
      },
      {
        numbers: [10, 12, 14, 16],
        positions: {
          10: 79,
          12: 84,
          14: 92,
          16: 97,
        },
      },
    ],
  },

  {
    label: "Analytic",
    code: 4,
    boxes: [
      {
        numbers: [0, 1],
        positions: {
          0: 10,
          1: 22,
        },
      },
      {
        numbers: [2, 3, 4],
        positions: {
          2: 28,
          3: 38,
          4: 40,
        },
      },
      {
        numbers: [5, 6, 7, 8],
        positions: {
          5: 58,
          6: 61,
          7: 68,
          8: 74,
        },
      },
      {
        numbers: [9, 10, 12, 14],
        positions: {
          9: 81,
          10: 86,
          12: 90,
          14: 96,
        },
      },
    ],
  },
]
