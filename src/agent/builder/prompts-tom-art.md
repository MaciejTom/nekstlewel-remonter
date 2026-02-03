# Prompty do wygenerowania — TOM-ART

**Klient:** TOM-ART Tomasz Wszołek
**Preset:** Warm Cream
**Kolory:** `#fffbf5` (kremowy bg), `#1d3557` (navy text), `#e63946` (czerwony accent)

---

## 1. HERO — AI Image (1 szt.)

**Plik:** `hero.jpg` (lub .webp)
**Ratio:** 16:9
**Użycie:** Tło sekcji hero, z gradient overlay

```
Professional interior photography of a freshly renovated Polish home.

Scene: Bright, sunlit living room or hallway after renovation.
- Freshly painted cream/white walls (matching #fffbf5)
- Warm wooden floor (oak or similar)
- Natural light streaming through window
- Clean, minimalist, welcoming atmosphere
- No people, no furniture clutter

Style:
- Real estate photography, editorial quality
- 85mm lens look, shallow depth of field on details
- Warm color temperature
- NOT stock photography - authentic feel

Colors to emphasize:
- Cream whites (#fffbf5)
- Warm wood tones
- Soft natural light

Avoid:
- Cold/blue tones
- Construction mess
- People
- Text/watermarks
```

---

## 2. SERVICES — AI Images (5 szt.)

**Pliki:** `service-1-tynki.jpg`, `service-2-posadzki.jpg`, etc.
**Ratio:** 4:3 lub 1:1
**Użycie:** Karty usług, jako tło lub główne zdjęcie

### 2.1 Tynkowanie i gładzie
```
Professional close-up of freshly plastered interior wall.

Scene: Smooth, perfectly finished white plaster wall.
- Visible quality of smooth surface
- Soft natural side-lighting showing texture
- Cream/warm white tones
- Professional craftsmanship visible

Style: Detail/macro shot, construction portfolio quality
Colors: Cream white, warm tones
Avoid: Tools, hands, mess, cold lighting
```

### 2.2 Posadzki i podłogi
```
Freshly installed wooden floor in bright Polish home interior.

Scene: Beautiful oak or light wood floor panels.
- Warm wood grain visible
- Natural light reflection on surface
- Clean, newly finished look
- Perspective showing floor extending into room

Style: Interior design photography, warm and inviting
Colors: Warm oak, honey wood tones, cream walls in background
Avoid: Furniture, people, dark/cold tones
```

### 2.3 Malowanie i wykończenia
```
Freshly painted interior wall with perfect smooth finish.

Scene: Corner or wall section showing painting quality.
- Cream or soft white paint
- Perfect edge where wall meets ceiling/trim
- Natural daylight showing smooth finish
- Clean, professional result

Style: Detail shot, before/after portfolio quality
Colors: Cream (#fffbf5), soft whites
Avoid: Paint cans, brushes, mess, people
```

### 2.4 Murarstwo i budowa
```
Beautiful brick wall detail in Polish residential construction.

Scene: Clean red or white brick wall section.
- Professional mortar joints
- Warm natural lighting
- Architectural detail focus
- Quality craftsmanship visible

Style: Construction portfolio, architectural detail
Colors: Warm brick red or white silicate, warm tones
Avoid: Construction chaos, scaffolding in focus, people
```

### 2.5 Izolacje i instalacje
```
Thermal insulation detail in residential construction.

Scene: Mineral wool or styrofoam insulation between wooden beams.
- Clean, professional installation
- Warm lighting
- Shows proper technique
- Cozy, "warmth protection" feeling

Style: Construction detail, educational but aesthetic
Colors: Yellow/cream insulation, warm wood beams
Avoid: Messy installation, visible vapor barriers prominently, people
```

---

## 3. WHY US — 3D Custom Icons (4 szt.)

**Pliki:** `usp-1-zakres.png`, `usp-2-lokalnie.png`, `usp-3-bezposrednio.png`, `usp-4-przejrzystosc.png`
**Format:** PNG z przezroczystym tłem
**Rozmiar:** 512x512px
**Użycie:** Sekcja "Dlaczego warto" — ikony przy USP

### Styl wspólny dla wszystkich:
```
GLOBAL STYLE:
- 3D isometric icon, soft clay/plastic material
- Rounded, friendly aesthetic (like Notion/Linear icons)
- Primary color: cream/white base
- Accent color: coral red (#e63946) for highlights
- Soft shadows, no harsh edges
- Single object, centered
- Transparent background
- 512x512px PNG
```

### 3.1 USP: Szeroki zakres (jeden fachowiec)
```
3D isometric icon representing "full range of renovation services".

Object: Toolbox or Swiss army knife concept
- Multi-tool or open toolbox showing various tools
- Wrench, hammer, paintbrush visible
- Cream/white base with red (#e63946) accent on one tool
- Soft clay material, rounded edges

Meaning: "One person handles everything"
```

### 3.2 USP: Lokalnie (Rzepiennik)
```
3D isometric icon representing "local service area".

Object: Location pin with house
- Map pin marker with small house inside or on top
- Cream/white base, red (#e63946) pin point
- Friendly, rounded aesthetic
- Soft clay material

Meaning: "I'm nearby, local craftsman"
```

### 3.3 USP: Bez pośredników (bezpośredni kontakt)
```
3D isometric icon representing "direct contact, no middlemen".

Object: Phone with person/handshake
- Smartphone or old-style phone receiver
- Small person icon or handshake symbol
- Cream/white base, red (#e63946) accent on screen/button
- Soft clay material, rounded

Meaning: "You talk directly to me"
```

### 3.4 USP: Przejrzysty proces
```
3D isometric icon representing "transparent process, clear pricing".

Object: Checklist or clipboard with checkmarks
- Clipboard with visible checkmarks/list
- Or document with magnifying glass
- Cream/white base, red (#e63946) checkmarks
- Soft clay material, rounded edges

Meaning: "No surprises, clear communication"
```

---

## 4. POZOSTAŁE — Lucide Icons (auto)

Te ikony są z biblioteki Lucide React, nie trzeba generować:

### Process (4 kroki):
| Krok | Ikona Lucide | Import |
|------|--------------|--------|
| 1. Rozmowa i oględziny | `Phone` | `import { Phone } from "lucide-react"` |
| 2. Wycena na miejscu | `FileText` | `import { FileText } from "lucide-react"` |
| 3. Realizacja prac | `HardHat` | `import { HardHat } from "lucide-react"` |
| 4. Odbiór i rozliczenie | `CheckCircle` | `import { CheckCircle } from "lucide-react"` |

### Contact:
| Element | Ikona Lucide |
|---------|--------------|
| Telefon | `Phone` |
| Adres | `MapPin` |
| NIP | `FileText` lub `Building` |

---

## Podsumowanie do wygenerowania

| # | Typ | Nazwa pliku | Sekcja |
|---|-----|-------------|--------|
| 1 | image-ai | `hero.jpg` | Hero |
| 2 | image-ai | `service-1-tynki.jpg` | Services |
| 3 | image-ai | `service-2-posadzki.jpg` | Services |
| 4 | image-ai | `service-3-malowanie.jpg` | Services |
| 5 | image-ai | `service-4-murarstwo.jpg` | Services |
| 6 | image-ai | `service-5-izolacje.jpg` | Services |
| 7 | icon-3d | `usp-1-zakres.png` | Why Us |
| 8 | icon-3d | `usp-2-lokalnie.png` | Why Us |
| 9 | icon-3d | `usp-3-bezposrednio.png` | Why Us |
| 10 | icon-3d | `usp-4-przejrzystosc.png` | Why Us |

**Folder docelowy:** `public/images/tom-art/`

---

## Po wygenerowaniu

Jak będziesz miał pliki, wrzuć je do:
```
public/images/tom-art/
├── hero.jpg
├── service-1-tynki.jpg
├── service-2-posadzki.jpg
├── service-3-malowanie.jpg
├── service-4-murarstwo.jpg
├── service-5-izolacje.jpg
├── usp-1-zakres.png
├── usp-2-lokalnie.png
├── usp-3-bezposrednio.png
└── usp-4-przejrzystosc.png
```

Potem ja składam komponenty i stronę.
