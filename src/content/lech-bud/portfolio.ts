import type { PortfolioContent } from "@/types"

export const portfolioContent: PortfolioContent = {
  tagline: "/ PORTFOLIO",
  title: "Nie obiecujemy —",
  titleAccent: "pokazujemy",
  subtitle: "Wybrane realizacje z ostatnich lat.",

  stats: [
    { value: "40+", label: "Lat doświadczenia" },
    { value: "5.0", label: "Ocena klientów", highlight: true },
  ],

  projects: [
    {
      title: "Klub Sabat Dom Kultury",
      category: "Obiekty publiczne",
      specs: "Malowanie, płytki, podłogi, oświetlenie",
      image: "/images/lech-bud/oferteo_005_133035390-crop-sabat-zdiecia.jpg",
      featured: true,
    },
    {
      title: "Biurowiec SM Wichrowe Wzgórze",
      category: "Biurowce",
      specs: "Korytarze, biura, wykładziny, malowanie",
      image: "/images/lech-bud/oferteo_013_122301403-crop-sm-5.jpg",
    },
    {
      title: "Klatki schodowe — bloki mieszkalne",
      category: "Wspólnoty mieszkaniowe",
      specs: "Płytki, malowanie, balustrady",
      image: "/images/lech-bud/oferteo_001_160723832-crop-20210924-132823.jpg",
    },
  ],

  galleryButton: {
    text: "Zobacz wszystkie realizacje",
    href: "#realizacje",
  },
}
