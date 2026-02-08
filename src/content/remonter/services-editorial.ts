import type { ServiceEditorialContent } from "@/types"

export const servicesEditorialContent: ServiceEditorialContent = {
  title: "Co mogę dla Ciebie",
  titleBreak: "zrobić",
  subtitle: "Kompleksowe wykończenia i remonty wnętrz. Od stanu deweloperskiego po gotowe do zamieszkania.",

  services: [
    {
      icon: "home",
      step: "Usługa 01",
      title: "Wykończenia pod klucz",
      description: "Kompleksowe wykończenie mieszkań deweloperskich i domów od stanu surowego do gotowego do zamieszkania. Koordynuję wszystkie prace.",
      features: [
        "Tynki i gładzie gipsowe",
        "Malowanie ścian i sufitów",
        "Układanie podłóg",
        "Montaż drzwi i biały montaż",
      ],
      image: "/images/lech-bud/oferteo_006_132953394-crop-20230208-090918.webp",
      imageAlt: "Wykończenie mieszkania pod klucz",
    },
    {
      icon: "hammer",
      step: "Usługa 02",
      title: "Remonty mieszkań i domów",
      description: "Odświeżenie lub gruntowna przebudowa istniejących wnętrz. Od drobnych napraw po całkowitą metamorfozę.",
      features: [
        "Skuwanie starych płytek",
        "Wyrównywanie ścian",
        "Wymiana instalacji",
        "Nowe wykończenie",
      ],
      image: "/images/lech-bud/oferteo_009_132628847-crop-20230208-090704.webp",
      imageAlt: "Remont mieszkania",
    },
    {
      icon: "format_paint",
      step: "Usługa 03",
      title: "Gładzie i malowanie",
      description: "Precyzyjne przygotowanie ścian i profesjonalne malowanie. Idealnie gładkie powierzchnie bez smug.",
      features: [
        "Gładzie maszynowe i ręczne",
        "Gruntowanie",
        "Malowanie lateksowe",
        "Efekty dekoracyjne",
      ],
      image: "/images/lech-bud/oferteo_001_160723832-crop-20210924-132823.webp",
      imageAlt: "Gładzie gipsowe",
    },
    {
      icon: "bathroom",
      step: "Usługa 04",
      title: "Układanie płytek",
      description: "Płytki podłogowe i ścienne w łazienkach, kuchniach, przedpokojach. Precyzyjne cięcie, równe fugi.",
      features: [
        "Płytki ceramiczne i gres",
        "Mozaiki",
        "Hydroizolacja",
        "Fugowanie i silikon",
      ],
      image: "/images/lech-bud/oferteo_021_124408834-crop-sm-2.webp",
      imageAlt: "Układanie płytek",
    },
    {
      icon: "stairs",
      step: "Usługa 05",
      title: "Podłogi",
      description: "Montaż paneli, podłóg warstwowych i desek. Wyrównywanie podłoża, listwy przypodłogowe.",
      features: [
        "Panele laminowane",
        "Podłogi winylowe LVT",
        "Deski warstwowe",
        "Wylewki samopoziomujące",
      ],
      image: "/images/lech-bud/oferteo_015_76621_20210202_102954-768x1024.webp",
      imageAlt: "Montaż podłóg",
    },
  ],

  cta: {
    title: "Potrzebujesz wyceny?",
    description: "Zadzwoń lub napisz - bezpłatnie wycenię Twój projekt.",
    buttonText: "Zadzwoń: 123 456 789",
    buttonIcon: "phone",
  },
}
