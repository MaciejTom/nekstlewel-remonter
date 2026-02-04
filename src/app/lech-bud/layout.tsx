import type { Metadata } from "next"
import "./lech-bud.css"

export const metadata: Metadata = {
  title: "LECH-BUD | Firma remontowo-budowlana Kielce | 40 lat doswiadczenia",
  description: "Remonty biurowcow, wspolnot mieszkaniowych, lazienek. Certyfikat Firma Godna Zaufania. Kielce i okolice. Zadzwon: 607 176 748",
  openGraph: {
    title: "LECH-BUD | Firma remontowo-budowlana Kielce",
    description: "Remonty biurowcow, wspolnot mieszkaniowych, lazienek. 40 lat doswiadczenia, certyfikat Firma Godna Zaufania. Kielce i okolice.",
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: "/images/lech-bud/oferteo_005_133035390-crop-sabat-zdiecia.jpg",
        width: 1200,
        height: 630,
        alt: "LECH-BUD - profesjonalne uslugi remontowo-budowlane",
      },
    ],
  },
}

export default function LechBudLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
