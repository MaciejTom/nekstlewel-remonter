import type { ServiceEditorialContent } from "@/types"

export const servicesEditorialContent: ServiceEditorialContent = {
  title: "Co robimy",
  titleBreak: "od 40 lat",
  subtitle: "Od lazienki w mieszkaniu po remont calego biurowca. Kazdy projekt z pelna dokumentacja i gwarancja.",

  services: [
    {
      icon: "bathroom",
      step: "Usluga 01",
      title: "Lazienki - od projektu po realizacje",
      description: "Plytki, kabiny prysznicowe walk-in, armatura. Nowoczesne wzory geometryczne, klasyczne beze, minimalistyczna biel.",
      features: [
        "Ukladanie plytek ceramicznych",
        "Kabiny prysznicowe (walk-in, tradycyjne)",
        "Montaz armatury i sanitariatow",
        "Zabudowy plytami G-K"
      ],
      image: "/images/lech-bud/oferteo_021_124408834-crop-sm-2.webp",
      imageAlt: "Nowoczesna lazienka z kabina walk-in"
    },
    {
      icon: "apartment",
      step: "Usluga 02",
      title: "Biura, lokale, obiekty komercyjne",
      description: "Remonty biurowcow, lokali uslugowych, obiektow uzytecznosci publicznej. Prace zgodne z dokumentacja projektowa.",
      features: [
        "Malowanie i gladzie",
        "Wykladziny podlogowe",
        "Sufity napinane",
        "Zabudowy i scianki dzialowe"
      ],
      image: "/images/lech-bud/oferteo_009_132628847-crop-20230208-090704.webp",
      imageAlt: "Korytarz biurowy po remoncie"
    },
    {
      icon: "stairs",
      step: "Usluga 03",
      title: "Klatki schodowe i czesci wspolne",
      description: "Remonty klatek schodowych, korytarzy, piwnic. Dla wspolnot mieszkaniowych i zarzadcow nieruchomosci.",
      features: [
        "Malowanie klatek schodowych",
        "Plytki na schodach i korytarzach",
        "Balustrady i porecze",
        "Wymiana oswietlenia"
      ],
      image: "/images/lech-bud/oferteo_015_76621_20210202_102954-768x1024.webp",
      imageAlt: "Wyremontowana klatka schodowa"
    },
    {
      icon: "home",
      step: "Usluga 04",
      title: "Elewacje i docieplenia",
      description: "Kompleksowe wykonanie elewacji. Docieplenia, tynki, malowanie. Dla domow jednorodzinnych i budynkow wielorodzinnych.",
      features: [
        "Docieplenia styropian/welna",
        "Tynki elewacyjne",
        "Malowanie elewacji",
        "Obrobki blacharskie"
      ],
      image: "/images/lech-bud/oferteo_001_160723832-crop-20210924-132823.webp",
      imageAlt: "Elewacja budynku"
    },
    {
      icon: "format_paint",
      step: "Usluga 05",
      title: "Wykonczenia mieszkan i domow",
      description: "Gladzie, malowanie, podlogi. Od stanu deweloperskiego do gotowego do zamieszkania.",
      features: [
        "Gladzie i szpachlowanie",
        "Malowanie scian i sufitow",
        "Montaz paneli i wykladzin",
        "Zabudowy karton-gips"
      ],
      image: "/images/lech-bud/oferteo_006_132953394-crop-20230208-090918.webp",
      imageAlt: "Wykonczenie wnetrze mieszkania"
    }
  ],

  cta: {
    title: "Potrzebujesz wyceny?",
    description: "Zadzwon, umowimy sie na ogledziny i wycene. Bezplatnie i bez zobowiazan.",
    buttonText: "Zadzwon: 607 176 748",
    buttonIcon: "phone"
  }
}
