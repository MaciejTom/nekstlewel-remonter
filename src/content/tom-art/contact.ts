import type { ContactContent } from "@/types"

export const contactContent: ContactContent = {
  badge: "Kontakt",
  title: "Porozmawiajmy o Twoim remoncie",
  description:
    "Masz remont do zrobienia? Zadzwon lub napisz — wycenie bezplatnie i powiem wprost, czego sie spodziewac.",
  showImage: false,
  contactItems: [
    { icon: "Phone", label: "690 651 606" },
    { icon: "MapPin", label: "Rzepiennik Suchy 69a, 33-163 Rzepiennik Suchy" },
    { icon: "FileText", label: "NIP: 9930712739" },
  ],
  formTitle: "Bezplatna wycena na miejscu",
  fields: [
    { label: "Imie", placeholder: "Twoje imie", type: "text", half: true },
    { label: "Telefon", placeholder: "Numer telefonu", type: "tel", half: true },
    {
      label: "Opis prac",
      placeholder: "Opisz krotko, co trzeba zrobic...",
      type: "textarea",
    },
  ],
  submitText: "Wyslij zapytanie",
}
