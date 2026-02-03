# Website Factory — Kontekst dla Claude

## Czym jest ten projekt?

System do generowania stron demo dla firm budowlanych/usługowych w 30-45 min zamiast 3-5h.

**Input:** content.md (tekst klienta) + preset stylu + opcjonalnie zdjęcia
**Output:** Kompletna strona Next.js gotowa do prezentacji

---

## Dwa Agenty

### Agent 1: Wireframe Creator
**Zadanie:** HTML prototype → neutralny wireframe

**Używa:**
- `src/agent/wireframe/INSTRUCTIONS.md` — zasady wireframe'ów
- `src/agent/wireframe/SECTIONS.md` — rejestr sekcji

**Tworzy:**
- `src/components/wireframe/{name}-wireframe.tsx`
- `src/types/{name}.ts`
- `src/content/wireframe/{name}.ts`
- `src/agent/wireframe/specs/{name}.md`

---

### Agent 2: Page Builder
**Zadanie:** Content + Preset + Wireframe → gotowa strona

**Używa:**
- `newPart.md` — Blueprint (workflow, rhythm, component selection)
- `styling.md` — 15 presetów (kolory + fonty)
- `styling-patterns.md` — wzorce dekoracji
- `src/agent/wireframe/specs/*.md` — spec per sekcja

**Tworzy:**
- `src/components/sections/{name}-section.tsx`
- `src/content/{client}/{name}.ts`
- `src/app/[client]/page.tsx`

---

## Pipeline w 7 fazach

```
1. ANALIZA CONTENTU
   content.md → zidentyfikuj sekcje, policz elementy, sprawdź braki

2. WYBÓR PRESETU
   styling.md → dopasuj do branży/tone (Industrial, Warm, Premium, Clean)

3. WYBÓR KOMPONENTÓW
   newPart.md → dla każdej sekcji wybierz wariant wireframe'a

4. PLANOWANIE RHYTHM
   newPart.md → color sequence, density, decoration budget, typography

5. STRATEGIA ASSETÓW
   Zdjęcia: klient / stock / AI / gradient?
   Ikony: Lucide / Material / AI?

6. MONTAŻ
   globals.css → wireframe + spec + content + assets → styled component

7. QUALITY CHECK
   □ Color rhythm OK
   □ Density rhythm OK
   □ Decoration budget OK
   □ Responsive OK
   □ WCAG contrast OK
```

---

## Kluczowe pliki

| Plik | Rozmiar | Zawartość |
|------|---------|-----------|
| `newPart.md` | 26 KB | Blueprint, workflow, rhythm rules, component selection |
| `styling.md` | 17 KB | 15 presetów (kolory + fonty + Google Fonts import) |
| `styling-patterns.md` | 6 KB | Hover effects, shadows, cards, decorations |
| `INSTRUCTIONS.md` | 17 KB | Zasady wireframe'ów (struktura vs dekoracja) |
| `SECTIONS.md` | 5 KB | Indeks 18 sekcji ze statusem |

---

## Quick Reference

### Style Presets (wybierz 1)
| Kategoria | Presety |
|-----------|---------|
| Industrial Dark | Orange, Yellow, Red, Steel |
| Warm & Friendly | Cream, Terracotta, Sage |
| Premium | Gold, Navy, Marble |
| Clean & Modern | Slate, Charcoal, Concrete, Swiss, Trust Blue |

### Page Rhythm Rules
```
COLOR:    dark → light → card → dark → accent → card → dark
DENSITY:  heavy → light → medium → heavy → light → minimal → medium
DECOR:    max 2 patterns, max 2 corner accents, max 3 animated
TYPO:     display tylko h1/h2, serif max 2x, mono na taglines/badges
```

### Sekcje (18 typów)
Hero (2) | Services (4) | Features | Reviews | Portfolio | Nav | Footer | Contact | CTA | FAQ | Pricing | Process | Stats | Logos

---

## Czego brakuje (TODO)

1. **Hero Color Split** — hero z full primary bg po jednej stronie
2. **Team Section** — grid osób z foto i tytułami
3. **Styled components** — 14/18 do zrobienia
4. **Portfolio spec** — brakuje specs/portfolio.md
