import type { ProcessContent } from "@/types"

export const processContent: ProcessContent = {
  title: "Proces współpracy",
  subtitle:
    "Od pierwszego kontaktu do odbioru prac. Przejrzyste zasady, bez niespodzianek.",
  steps: [
    {
      badge: "Krok 1",
      title: "Kontakt i oględziny",
      description:
        "Zadzwoń lub napisz. Umówimy się na oględziny — nie wyceniamy na ślepo. Obejrzymy zakres prac, omówimy oczekiwania.",
    },
    {
      badge: "Krok 2",
      title: "Wycena",
      description:
        "Po oględzinach — konkretna wycena. Co wchodzi w zakres, ile kosztuje, ile trwa. Dla wspólnot i firm: faktura VAT, dokumentacja.",
    },
    {
      badge: "Krok 3",
      title: "Realizacja",
      description:
        "Wchodzimy z materiałami i ekipą. Prace zgodnie z harmonogramem. Dla obiektów użyteczności publicznej — minimalizujemy zakłócenia działalności.",
    },
    {
      badge: "Krok 4",
      title: "Odbiór i gwarancja",
      description:
        "Wspólny odbiór prac. Dokumentacja powykonawcza dla wspólnot i firm. Gwarancja na wykonane prace.",
    },
  ],
}
