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
        url: "/images/remonter/real5.jpg",
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
    images: ["/images/remonter/real5.jpg"],
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
        {/* Czcionki do theme switchera */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bebas+Neue&family=Bricolage+Grotesque:wght@400;500;600;700&family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&family=Inter:wght@400;500;600;700&family=Lato:wght@400;700&family=Libre+Baskerville:wght@400;700&family=Manrope:wght@400;500;600;700&family=Merriweather:wght@400;700&family=Montserrat:wght@400;500;600;700;800&family=Nunito:wght@400;600;700&family=Open+Sans:wght@400;600;700&family=Oswald:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Quicksand:wght@400;500;600;700&family=Raleway:wght@400;500;600;700&family=Roboto:wght@400;500;700&family=Rubik:wght@400;500;600;700&family=Source+Sans+3:wght@400;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@400;500;600;700&family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
