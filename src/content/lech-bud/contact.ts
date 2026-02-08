import type { ContactContent } from "@/types"

export const contactContent: ContactContent = {
  badge: "Kontakt",
  title: "Zadzwoń do Leszka",
  description:
    "40 lat doświadczenia odbiera telefon. Zadzwoń, opisz co potrzebujesz. Umówimy się na oględziny i wycenę. Reszta to nasza robota.",
  phone: "607 176 748",
  address: "Jana Nowaka-Jeziorańskiego 73, 25-432 Kielce",
  hours: "wt-pt od 07:00",
  showImage: false,
  contactItems: [
    { icon: "Phone", label: "607 176 748" },
    { icon: "MapPin", label: "Jana Nowaka-Jeziorańskiego 73, 25-432 Kielce" },
    { icon: "Clock", label: "wt-pt od 07:00" },
  ],
  formTitle: "Bezpłatna wycena",
  fields: [
    { label: "Imię", placeholder: "Twoje imię", type: "text", half: true },
    { label: "Telefon", placeholder: "Numer telefonu", type: "tel", half: true },
    {
      label: "Opis prac",
      placeholder: "Opisz krótko, co trzeba zrobić...",
      type: "textarea",
    },
  ],
  submitText: "Wyślij zapytanie",
}
