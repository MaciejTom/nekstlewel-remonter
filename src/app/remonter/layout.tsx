import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "REMONTER Kamil Makieła | Wykończenia wnętrz Kazimierza Wielka",
  description: "Kompleksowe wykończenia mieszkań i domów pod klucz. Remonty, gładzie, malowanie, płytki, podłogi. Kazimierza Wielka, Pińczów, Busko-Zdrój i okolice.",
  keywords: ["wykończenia wnętrz", "remonty", "Kazimierza Wielka", "gładzie", "malowanie", "płytki", "podłogi"],
  openGraph: {
    title: "REMONTER | Wykończenia wnętrz Kazimierza Wielka",
    description: "Kompleksowe wykończenia mieszkań pod klucz. Solidna robota, terminowość, uczciwe ceny.",
    url: "/remonter",
    type: "website",
    images: [
      {
        url: "/images/remonter/hero.webp",
        width: 1200,
        height: 630,
        alt: "REMONTER - wykończenia wnętrz",
      },
    ],
  },
}

export default function RemonterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
