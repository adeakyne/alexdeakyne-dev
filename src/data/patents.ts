export type PatentData = {
    title: string
    number: string
    url?: string
}

export const patents: PatentData[] = [
  {
      title: "Natural-Language Scene Summarization Using Large Language Models",
      number: "Patent pending, filed 2025",
  },
  {
      title: "Monitoring and Classification of Cardiac Arrest Rhythm",
      number: "Patent pending, published 2024 (No. 18/579,604)",
      url: "https://patents.justia.com/patent/20240342495",
  },
]