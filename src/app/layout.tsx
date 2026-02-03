import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tom-art.pl"),
  title: "TOM-ART | Usługi remontowo-budowlane",
  description: "Od ścian po podłogi — pełen zakres prac remontowych. Tynki, posadzki, malowanie, murarstwo, izolacje. Rzepiennik, Tuchów, okolice Tarnowa.",
  openGraph: {
    title: "TOM-ART | Usługi remontowo-budowlane",
    description: "Od ścian po podłogi — pełen zakres prac remontowych. Tynki, posadzki, malowanie, murarstwo, izolacje. Rzepiennik, Tuchów, okolice Tarnowa.",
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: "/images/tom-art/hero.webp",
        width: 1408,
        height: 768,
        alt: "TOM-ART - profesjonalne usługi remontowe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOM-ART | Usługi remontowo-budowlane",
    description: "Od ścian po podłogi — pełen zakres prac remontowych.",
    images: ["/images/tom-art/hero.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
