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
      specs: "Malowanie, płytki, podłogi",
      image: "/images/lech-bud/oferteo_005_133035390-crop-sabat-zdiecia.jpg",
    },
    {
      title: "Biurowiec SM Wichrowe Wzgórze",
      category: "Biurowce",
      specs: "Korytarze, biura, wykładziny",
      image: "/images/lech-bud/oferteo_013_122301403-crop-sm-5.jpg",
    },
    {
      title: "Klatki schodowe",
      category: "Wspólnoty mieszkaniowe",
      specs: "Płytki, malowanie, balustrady",
      image: "/images/lech-bud/oferteo_001_160723832-crop-20210924-132823.jpg",
    },
    {
      title: "Łazienki prywatne",
      category: "Łazienki",
      specs: "Płytki, kabiny, armatura",
      image: "/images/lech-bud/oferteo_003_160237248-crop-20210924-133004.jpg",
    },
    {
      title: "Dom Kultury - hol główny",
      category: "Obiekty publiczne",
      specs: "Malowanie, oświetlenie, sufit",
      image: "/images/lech-bud/oferteo_005_133035390-crop-sabat-zdiecia.jpg",
    },
    {
      title: "Biuro administracji",
      category: "Biurowce",
      specs: "Ściany, podłogi, instalacje",
      image: "/images/lech-bud/oferteo_013_122301403-crop-sm-5.jpg",
    },
    {
      title: "Remont klatki - blok mieszkalny",
      category: "Wspólnoty mieszkaniowe",
      specs: "Kompleksowy remont",
      image: "/images/lech-bud/oferteo_001_160723832-crop-20210924-132823.jpg",
    },
    {
      title: "Łazienka z prysznicem",
      category: "Łazienki",
      specs: "Glazura, kabina, armatura",
      image: "/images/lech-bud/oferteo_003_160237248-crop-20210924-133004.jpg",
    },
  ],

  galleryButton: {
    text: "Zobacz wszystkie realizacje",
    href: "#realizacje",
  },
}
