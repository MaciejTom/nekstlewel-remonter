import type { ContactContent } from "@/types"

export const contactContent: ContactContent = {
  badge: "Kontakt",
  title: "Zadzwoń do Kamila",
  description: "Opisz krótko co potrzebujesz. Umówimy się na oględziny i przygotuję bezpłatną wycenę.",
  phone: "123 456 789",
  address: "Wojciechów 135, 28-500 Kazimierza Wielka",
  hours: "Pon-Pt 7:00-18:00, Sob 8:00-14:00",
  showImage: false,
  contactItems: [
    { icon: "Phone", label: "123 456 789" },
    { icon: "MapPin", label: "Kazimierza Wielka i okolice" },
    { icon: "Clock", label: "Pon-Pt 7:00-18:00" },
  ],
  formTitle: "Bezpłatna wycena",
  fields: [
    { label: "Imię", placeholder: "Twoje imię", type: "text" as const, half: true },
    { label: "Telefon", placeholder: "Numer telefonu", type: "tel" as const, half: true },
    { label: "Opis prac", placeholder: "Opisz krótko, co trzeba zrobić...", type: "textarea" as const },
  ],
  submitText: "Wyślij zapytanie",
}
