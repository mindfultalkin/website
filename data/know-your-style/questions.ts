export type Option = {
  label: string
  value: number // 1 | 2 | 3 | 4
}

export type Question = {
  id: number
  options: Option[]
}

export type Section = {
  title: string
  from: number
  to: number
}

export const PROMPTS = [
  "Pick the word that fits you best",
  "Go with your first instinct",
  "Which one sounds most like you?",
  "Choose what feels natural",
  "Don’t overthink — just choose",
]

export const SECTIONS: Section[] = [
  { title: "How you act", from: 0, to: 5 },
  { title: "How you relate to others", from: 6, to: 11 },
  { title: "How you decide", from: 12, to: 17 },
  { title: "How you respond under pressure", from: 18, to: 23 },
]

export const ENCOURAGEMENT = [
  { at: 6, text: "Nice start 👌" },
  { at: 12, text: "You’re halfway there 💪" },
  { at: 18, text: "Almost done 🔥" },
]

export const QUESTIONS: Question[] = [
  { id: 1, options: [
    { label: "Competitive", value: 1 },
    { label: "Joyful", value: 2 },
    { label: "Considerate", value: 3 },
    { label: "Harmonious", value: 4 },
  ]},
  { id: 2, options: [
    { label: "Tries new ideas", value: 1 },
    { label: "Optimistic", value: 2 },
    { label: "Wants to please", value: 3 },
    { label: "Respectful", value: 4 },
  ]},
  { id: 3, options: [
    { label: "Will power", value: 1 },
    { label: "Open-minded", value: 2 },
    { label: "Cheerful", value: 3 },
    { label: "Obliging", value: 4 },
  ]},
  { id: 4, options: [
    { label: "Daring", value: 1 },
    { label: "Expressive", value: 2 },
    { label: "Satisfied", value: 3 },
    { label: "Diplomatic", value: 4 },
  ]},
  { id: 5, options: [
    { label: "Powerful", value: 1 },
    { label: "Good mixer", value: 2 },
    { label: "Easy on others", value: 3 },
    { label: "Organized", value: 4 },
  ]},
  { id: 6, options: [
    { label: "Restless", value: 1 },
    { label: "Popular", value: 2 },
    { label: "Neighborly", value: 3 },
    { label: "Abides by rules", value: 4 },
  ]},
  { id: 7, options: [
    { label: "Unconquerable", value: 1 },
    { label: "Playful", value: 2 },
    { label: "Obedient", value: 3 },
    { label: "Fussy", value: 4 },
  ]},
  { id: 8, options: [
    { label: "Self-reliant", value: 1 },
    { label: "Fun-loving", value: 2 },
    { label: "Patient", value: 3 },
    { label: "Soft-Spoken", value: 4 },
  ]},
  { id: 9, options: [
    { label: "Bold", value: 1 },
    { label: "Charming", value: 2 },
    { label: "Loyal", value: 3 },
    { label: "Easily led", value: 4 },
  ]},
  { id: 10, options: [
    { label: "Outspoken", value: 1 },
    { label: "Companionable", value: 2 },
    { label: "Restrained", value: 3 },
    { label: "Accurate", value: 4 },
  ]},
  { id: 11, options: [
    { label: "Brave", value: 1 },
    { label: "Inspiring", value: 2 },
    { label: "Submissive", value: 3 },
    { label: "Timid", value: 4 },
  ]},
  { id: 12, options: [
    { label: "Nervy", value: 1 },
    { label: "Jovial", value: 2 },
    { label: "Even-tempered", value: 3 },
    { label: "Precise", value: 4 },
  ]},
  { id: 13, options: [
    { label: "Stubborn", value: 1 },
    { label: "Attractive", value: 2 },
    { label: "Sweet", value: 3 },
    { label: "Avoids", value: 4 },
  ]},
  { id: 14, options: [
    { label: "Decisive", value: 1 },
    { label: "Talkative", value: 2 },
    { label: "Controlled", value: 3 },
    { label: "Conventional", value: 4 },
  ]},
  { id: 15, options: [
    { label: "Positive", value: 1 },
    { label: "Trusting", value: 2 },
    { label: "Contented", value: 3 },
    { label: "Peaceful", value: 4 },
  ]},
  { id: 16, options: [
    { label: "Takes risks", value: 1 },
    { label: "Warm", value: 2 },
    { label: "Willing to help", value: 3 },
    { label: "Not extreme", value: 4 },
  ]},
  { id: 17, options: [
    { label: "Argumentative", value: 1 },
    { label: "Light-hearted", value: 2 },
    { label: "Nonchalant", value: 3 },
    { label: "Adaptable", value: 4 },
  ]},
  { id: 18, options: [
    { label: "Original", value: 1 },
    { label: "Persuasive", value: 2 },
    { label: "Gentle", value: 3 },
    { label: "Humble", value: 4 },
  ]},
  { id: 19, options: [
    { label: "Determined", value: 1 },
    { label: "Convincing", value: 2 },
    { label: "Good-natured", value: 3 },
    { label: "Cautious", value: 4 },
  ]},
  { id: 20, options: [
    { label: "Persistent", value: 1 },
    { label: "Lively", value: 2 },
    { label: "Generous", value: 3 },
    { label: "Well-disciplined", value: 4 },
  ]},
  { id: 21, options: [
    { label: "Forceful", value: 1 },
    { label: "Admirable", value: 2 },
    { label: "Kind", value: 3 },
    { label: "Non-resisting", value: 4 },
  ]},
  { id: 22, options: [
    { label: "Assertive", value: 1 },
    { label: "Confident", value: 2 },
    { label: "Sympathetic", value: 3 },
    { label: "Tolerant", value: 4 },
  ]},
  { id: 23, options: [
    { label: "Aggressive", value: 1 },
    { label: "Life-of-the-party", value: 2 },
    { label: "Easily fooled", value: 3 },
    { label: "Uncertain", value: 4 },
  ]},
  { id: 24, options: [
    { label: "Eager", value: 1 },
    { label: "High-spirited", value: 2 },
    { label: "Willing", value: 3 },
    { label: "Agreeable", value: 4 },
  ]},
]