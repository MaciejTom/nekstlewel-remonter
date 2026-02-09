import type { ReviewsContent } from "@/types"

export const reviewsContent: ReviewsContent = {
  title: "Co mówią klienci",
  reviews: [
    {
      rating: 5,
      quote:
        "Kamil wykończył nam całe mieszkanie pod klucz. Wszystko terminowo, czysto i zgodnie z ustaleniami. Gładzie idealne, płytki położone perfekcyjnie. Polecam!",
      authorName: "Anna M.",
      authorLabel: "Mieszkanie 55m², Kazimierza Wielka",
      featured: true,
    },
    {
      rating: 5,
      quote:
        "Solidna robota, uczciwe podejście. Pan Kamil doradził w wyborze materiałów i zaoszczędziliśmy sporo. Remont łazienki trwał tydzień - wszystko sprawnie.",
      authorName: "Piotr K.",
      authorLabel: "Remont łazienki, Pińczów",
    },
    {
      rating: 5,
      quote:
        "Profesjonalne podejście od początku do końca. Czysto, terminowo, bez niespodzianek. Na pewno wrócę przy kolejnym remoncie.",
      authorName: "Marta W.",
      authorLabel: "Gładzie i malowanie, Busko-Zdrój",
    },
  ],
  bottomLink: {
    text: "Zadowoleni klienci to najlepsza rekomendacja",
  },
}
