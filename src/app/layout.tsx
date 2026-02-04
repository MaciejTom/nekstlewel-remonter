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
  metadataBase: new URL("https://lech-bud.pl"),
  title: "LECH-BUD | Remonty wnętrz Kielce - od 1986 roku",
  description: "40 lat doświadczenia w remontach wnętrz. Biurowce, domy kultury, wspólnoty mieszkaniowe i prywatne łazienki w Kielcach i okolicach. Leszek Kozieł.",
  openGraph: {
    title: "LECH-BUD | Remonty wnętrz Kielce - od 1986 roku",
    description: "40 lat doświadczenia w remontach wnętrz. Biurowce, domy kultury, wspólnoty mieszkaniowe i prywatne łazienki w Kielcach i okolicach.",
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: "/heroLech.webp",
        width: 1200,
        height: 630,
        alt: "LECH-BUD - profesjonalne remonty wnętrz od 1986 roku",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LECH-BUD | Remonty wnętrz Kielce - od 1986 roku",
    description: "40 lat doświadczenia w remontach wnętrz w Kielcach i okolicach.",
    images: ["/heroLech.webp"],
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
