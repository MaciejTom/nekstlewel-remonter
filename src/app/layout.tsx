import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://remonter.pl"),
  title: "REMONTER | Wykończenia i remonty Kazimierza Wielka",
  description: "Kompleksowe wykończenia mieszkań i domów pod klucz. Remonty, gładzie, malowanie, płytki, podłogi. Kazimierza Wielka i okolice. Kamil Makieła.",
  openGraph: {
    title: "REMONTER | Wykończenia i remonty Kazimierza Wielka",
    description: "Kompleksowe wykończenia mieszkań i domów pod klucz. Remonty, gładzie, malowanie, płytki, podłogi. Kazimierza Wielka i okolice.",
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: "/images/remonter/real5.webp",
        width: 1200,
        height: 630,
        alt: "REMONTER - wykończenia wnętrz Kazimierza Wielka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "REMONTER | Wykończenia i remonty Kazimierza Wielka",
    description: "Kompleksowe wykończenia mieszkań i domów pod klucz. Kazimierza Wielka i okolice.",
    images: ["/images/remonter/real5.webp"],
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
        {/* Material Symbols for service icons */}
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
