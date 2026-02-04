import type { ReviewsContent } from "@/types"

export const reviewsContent: ReviewsContent = {
  title: "Co mówią klienci",
  reviews: [
    {
      rating: 5,
      quote:
        "Prace wykonywane są zawsze terminowo, zgodnie z dokumentacją projektową, sztuką budowlaną oraz ustaleniami. Z uwagi na terminowość, jakość i rzetelność wykonywanych robót rekomendujemy w/w firmę.",
      authorName: "Krzysztof B.",
      authorLabel: "Klient biznesowy",
      featured: true,
    },
    {
      rating: 5,
      quote:
        "Dobra organizacja, samodzielność w rozwiązywaniu problemów oraz dobra jakość robót.",
      authorName: "Joanna K.",
      authorLabel: "Klient indywidualny",
    },
  ],
  bottomLink: {
    text: "5.0/5 na podstawie opinii — mało, ale konkretne",
  },
}
