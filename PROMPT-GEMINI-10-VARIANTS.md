# Prompt dla Gemini: 10 wariantów strony firmy remontowej LECH-BUD

## WAŻNE: Użyj skilla frontend-design

**Przed generowaniem każdego wariantu wywołaj skill `/frontend-design` lub `/newUiSkill`** - to zapewni wysoką jakość designu i uniknie generycznego wyglądu "AI".

Skill pomoże Ci:
- Stworzyć distintywny, profesjonalny design
- Dobrać odpowiednie proporcje i spacing
- Zastosować dobre praktyki UI/UX
- Uniknąć typowych błędów wizualnych

---

## Zadanie

Stwórz 10 różnych wariantów landing page dla firmy remontowej LECH-BUD. Każdy wariant to osobny plik `page.tsx` w folderach `/src/app/1/`, `/src/app/2/`, ... `/src/app/10/`.

**Każdy wariant może mieć:**
- Inny układ/layout sekcji
- Inną paletę kolorów (ale profesjonalną, dla firmy budowlanej)
- Inną typografię (dobierz Google Font pasujący do stylu)

---

## 10 propozycji stylów (kolory + typografia + layout)

### Wariant 1: Ciepły Tradycyjny
- **Kolory:** Kremowy (#FDF8F3), Brązowy (#8B7355), Ciemny brąz (#5C4A3A)
- **Font:** Libre Baskerville (serif, elegancki)
- **Styl:** Klasyczny, ciepły, przytulny. Dekoracyjne linie, tekstury papieru

### Wariant 2: Industrialny Dark
- **Kolory:** Ciemny szary (#1A1A1A), Pomarańczowy (#F5A623), Szary (#666)
- **Font:** Oswald (bold, industrial)
- **Styl:** Surowy, betonowy, metaliczny. Diagonalne linie, duże liczby

### Wariant 3: Profesjonalny Navy
- **Kolory:** Granat (#1E3A5F), Złoty (#D4AF37), Biały
- **Font:** Montserrat (profesjonalny, nowoczesny)
- **Styl:** Korporacyjny, prestiżowy. Zaokrąglone karty, cienie

### Wariant 4: Świeży Zielony
- **Kolory:** Biały, Zielony (#2D5A3D), Jasny zielony (#E8F5E9)
- **Font:** DM Sans (nowoczesny, czytelny)
- **Styl:** Ekologiczny, świeży, naturalny. Ikony liści, organiczne kształty

### Wariant 5: Minimalistyczny Slate
- **Kolory:** Biały, Slate (#475569), Jasny szary (#F1F5F9)
- **Font:** Inter (minimalistyczny, swiss)
- **Styl:** Ultra-clean, dużo białej przestrzeni, cienkie linie

### Wariant 6: Energetyczny Czerwony
- **Kolory:** Biały (#FFFBF5), Czerwony (#E63946), Granat (#1D3557)
- **Font:** Plus Jakarta Sans (nowoczesny, energetyczny)
- **Styl:** Dynamiczny, wyrazisty. Czerwone akcenty, bold CTA

### Wariant 7: Luksusowy Marble
- **Kolory:** Biały (#FAFAFA), Czarny (#111), Złoty (#C9A962)
- **Font:** Playfair Display (luksusowy serif) + Inter (body)
- **Styl:** Premium, elegancki. Marmurowe tekstury, złote detale

### Wariant 8: Przyjazny Pomarańczowy
- **Kolory:** Kremowy (#FFF8F0), Pomarańczowy (#EA580C), Ciepły szary (#78716C)
- **Font:** Nunito (friendly, rounded)
- **Styl:** Przyjazny, dostępny, rodzinny. Zaokrąglone elementy

### Wariant 9: Tech Modern
- **Kolory:** Ciemny (#0F172A), Niebieski (#3B82F6), Jasny (#F8FAFC)
- **Font:** Space Grotesk (tech, geometric)
- **Styl:** Nowoczesny, technologiczny. Gradienty, glow effects

### Wariant 10: Terracotta Warm
- **Kolory:** Kremowy (#FAF7F2), Terracotta (#C2703E), Ciemny brąz (#4A3728)
- **Font:** Lora (elegant serif) + Source Sans Pro (body)
- **Styl:** Śródziemnomorski, ciepły. Earthy tones, organiczne

---

## Dane firmy (użyj we wszystkich wariantach)

```typescript
const companyData = {
  name: "LECH-BUD",
  owner: "Leszek Kozieł",
  phone: "607 176 748",
  address: "Jana Nowaka-Jeziorańskiego 73, 25-432 Kielce",
  region: "Kielce i okolice",
  hours: "wt-pt od 07:00",
  founded: "1986",
  experience: "40 lat",
  rating: "5.0",
  badge: "Firma Godna Zaufania",
}

const services = [
  { title: "Łazienki", desc: "Płytki, kabiny, armatura" },
  { title: "Biura i lokale", desc: "Malowanie, wykładziny, sufity" },
  { title: "Klatki schodowe", desc: "Dla wspólnot mieszkaniowych" },
  { title: "Elewacje", desc: "Docieplenia i tynki" },
  { title: "Wykończenia", desc: "Od dewelopera do gotowego" },
]

const projects = [
  { title: "Klub Sabat Dom Kultury", category: "Obiekty publiczne", image: "/images/lech-bud/oferteo_005_133035390-crop-sabat-zdiecia.webp" },
  { title: "Biurowiec SM Wichrowe Wzgórze", category: "Biurowce", image: "/images/lech-bud/oferteo_013_122301403-crop-sm-5.webp" },
  { title: "Klatki schodowe", category: "Wspólnoty", image: "/images/lech-bud/oferteo_001_160723832-crop-20210924-132823.webp" },
  { title: "Łazienki prywatne", category: "Łazienki", image: "/images/lech-bud/oferteo_003_160237248-crop-20210924-133004.webp" },
]

const faqs = [
  { q: "Czy robicie dla wspólnot mieszkaniowych?", a: "Tak, to nasza specjalność. Klatki schodowe, korytarze, części wspólne. Faktura VAT, dokumentacja, gwarancja." },
  { q: "Czy wystawiacie faktury?", a: "Tak. Jesteśmy legalnie działającą firmą od 1986 roku. Faktura VAT dla firm i wspólnot." },
  { q: "Jaki jest Wasz obszar działania?", a: "Kielce i okolice — całe województwo świętokrzyskie." },
  { q: "Ile trwa remont łazienki?", a: "Standardowa łazienka 4-6m² — około 2 tygodnie." },
]

const whyUs = [
  { title: "Od 1986 roku", desc: "40 lat ciągłej działalności na rynku kieleckim." },
  { title: "Certyfikat wiarygodności", desc: "Firma Godna Zaufania i Certyfikat KRD." },
  { title: "Duże projekty", desc: "Biurowce, domy kultury, wspólnoty mieszkaniowe." },
  { title: "Terminowość", desc: "Prace wykonywane zgodnie z harmonogramem." },
]
```

---

## Wymagania techniczne

```typescript
// Każdy wariant to plik: src/app/{N}/page.tsx gdzie N = 1-10

"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, MapPin, Clock, ChevronDown, Menu, X, ArrowRight, Check, ShieldCheck } from "lucide-react"

// Użyj next/image dla wszystkich obrazów
// Użyj lucide-react dla ikon
// Komponent musi być "use client" dla interaktywności
// Tailwind CSS inline (nie używaj @apply)
// Responsive: mobile-first
// Dodaj Google Font przez style={{ fontFamily: "'FontName', sans-serif" }}

export default function VariantN() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  // ...
}
```

---

## Propozycje layoutów dla wariantów

### Wariant 1: Hero z dużym zdjęciem po prawej
- Hero: tekst 60% + zdjęcie 40%
- Stats pod hero jako 3-kolumnowy pasek
- Usługi: grid 3x2

### Wariant 2: Hero fullscreen z overlay
- Hero: pełnoekranowe zdjęcie, ciemny overlay, tekst wycentrowany
- Usługi: pionowa lista z numeracją (01, 02...)

### Wariant 3: Hero asymetryczny
- Hero: tekst po lewej, zdjęcie "wylewa się" poza kontener
- Usługi: karty z hover effect

### Wariant 4: Hero gradient
- Hero: gradient tło, bez zdjęcia, duży CTA
- Trust badges pod hero
- Usługi: tabs/zakładki

### Wariant 5: Hero split 50/50
- Hero: lewa = tekst na tle primary, prawa = zdjęcie full height
- Usługi: accordion

### Wariant 6: Hero z animowanymi statystykami
- Hero: zdjęcie w tle, duże liczby animowane
- Usługi: ikony w okręgach

### Wariant 7: Hero minimalistyczny
- Hero: tylko tekst, duża typografia, zero zdjęć
- Pod hero: scroll z miniaturami

### Wariant 8: Hero z kartą kontaktową
- Hero: zdjęcie po lewej, formularz overlay po prawej
- Usługi: horizontal cards

### Wariant 9: Hero editorial
- Hero: magazynowy layout, asymetryczne marginesy
- Usługi: numbered list ze zdjęciami

### Wariant 10: Hero z parallax hint
- Hero: zdjęcie z efektem parallax, scroll indicator
- Sticky nav
- CTA: full-width banner

---

## Sekcje obowiązkowe (każdy wariant)

1. **Navigation** - sticky/fixed, logo, linki, telefon CTA
2. **Hero** - nagłówek, subtitle, CTA buttons, badge "Od 1986"
3. **Services/Usługi** - 5 usług
4. **Why Us / Dlaczego my** - 4 punkty przewagi
5. **Portfolio/Realizacje** - 4 projekty ze zdjęciami
6. **FAQ** - 4 pytania (accordion)
7. **Contact/Kontakt** - formularz + dane kontaktowe
8. **Footer** - copyright, podstawowe linki

---

## Zdjęcie hero

Użyj: `/heroLech.webp` jako główne zdjęcie w hero section.

---

## Checklist

Dla każdego wariantu sprawdź:
- [ ] Unikalna paleta kolorów
- [ ] Dopasowany Google Font
- [ ] Responsive (mobile-first)
- [ ] Wszystkie sekcje obecne
- [ ] Telefon 607 176 748 jako główny CTA
- [ ] Badge "Od 1986 roku" lub "40 lat doświadczenia"
- [ ] next/image dla obrazów
- [ ] lucide-react dla ikon
- [ ] FAQ interaktywne (useState)
- [ ] Mobile menu (useState)
- [ ] Formularz kontaktowy
- [ ] Hover effects
- [ ] Kontrast tekstu WCAG AA

---

## Output

Wygeneruj 10 kompletnych plików:
```
src/app/1/page.tsx   (Ciepły Tradycyjny)
src/app/2/page.tsx   (Industrialny Dark)
src/app/3/page.tsx   (Profesjonalny Navy)
src/app/4/page.tsx   (Świeży Zielony)
src/app/5/page.tsx   (Minimalistyczny Slate)
src/app/6/page.tsx   (Energetyczny Czerwony)
src/app/7/page.tsx   (Luksusowy Marble)
src/app/8/page.tsx   (Przyjazny Pomarańczowy)
src/app/9/page.tsx   (Tech Modern)
src/app/10/page.tsx  (Terracotta Warm)
```

Każdy plik to kompletny, działający komponent React/Next.js z unikalnym stylem wizualnym.
