# Page Builder Agent — Instrukcje

## Zadanie

Wziąć content klienta + preset stylu i złożyć kompletną stronę z istniejących wireframe'ów.

---

## Input

1. **content.md** — tekst klienta (sekcje, nagłówki, opisy, CTA)
2. **preset** — nazwa z `styling.md` (np. "Industrial Orange", "Warm Cream")
3. **zdjęcia** — opcjonalnie, od klienta

---

## Output

1. `src/app/globals.css` — zaktualizowane kolory/fonty z presetu
2. `src/components/sections/{name}-section.tsx` — ostylowane komponenty
3. `src/content/{client}/{name}.ts` — content klienta
4. `src/app/page.tsx` — złożona strona

---

## Workflow

### Faza 1: Analiza contentu

Przeczytaj content.md i wypisz:

```yaml
sections:
  - name: hero
    elements: [headline, subheadline, 2 CTA, badge]
    has_image: false
  - name: services
    count: 5
    has_images: false
    has_features: true
  - name: process
    count: 4
  - name: why_us
    count: 4
  - name: about
    has_image: false
  - name: faq
    count: 5
  - name: contact
    has_form: true
    has_map: false

missing:
  - portfolio (brak realizacji)
  - reviews (brak opinii)
```

### Faza 2: Wybór presetu

Otwórz `styling.md` i wybierz preset na podstawie:
- **Branża:** budowlanka → Industrial, stolarz → Warm Terracotta
- **Tone:** bold → Industrial, friendly → Warm, elegant → Premium
- **Logo klienta:** dopasuj accent color

Zapisz wybór:
```yaml
preset: "Industrial Orange"
colors:
  background: "#0a0a0a"
  text: "#fafafa"
  accent: "#f97316"
  muted: "#a3a3a3"
fonts:
  heading: "Oswald"
  body: "Work Sans"
  mono: "JetBrains Mono"
google_fonts_import: "<link href='...'>"
```

### Faza 3: Wybór komponentów

Dla każdej sekcji wybierz wariant wireframe'a według `newPart.md` Component Selection Rules:

| Sekcja | Pytanie | Decyzja |
|--------|---------|---------|
| Hero | Czy jest hero image? | NIE → HeroPattern lub HeroColorSplit |
| Services | Ile usług? Czy są zdjęcia? | 5 + bez zdjęć → ServicesIconGrid |
| Process | Ile kroków? | 4 → ProcessTimeline |
| FAQ | Ile pytań? | 5 → FAQAccordion |

### Faza 4: Planowanie rhythm

Wypełnij plan zgodnie z `newPart.md` Page Rhythm Rules:

```yaml
color_sequence:
  hero: dark
  services: light
  process: card
  why_us: dark
  about: light
  faq: card
  contact: dark

density_sequence:
  hero: medium      # brak zdjęcia hero
  services: light   # ikony
  process: light    # numery
  why_us: light     # ikony
  about: medium     # placeholder photo
  faq: minimal      # accordion
  contact: medium   # form

decoration_budget:
  patterns: [hero]
  corner_accents: []
  animated: [process_cards, services_cards]
```

### Faza 5: Strategia assetów

Dla każdego slotu określ źródło:

| Slot | Źródło | Szczegóły |
|------|--------|-----------|
| Hero bg | gradient | brak zdjęcia klienta |
| Service icons | Lucide | Construction, Paintbrush, Hammer... |
| About photo | placeholder | klient doda później |
| Contact | form only | brak mapy |

### Faza 6: Montaż

1. **globals.css** — wstaw kolory i fonty z presetu
2. **Dla każdej sekcji:**
   - Skopiuj wireframe jako bazę
   - Zmień `const w =` na `const s =`
   - Zastosuj dekoracje z `specs/{name}.md` + `styling-patterns.md`
   - Osadź content
   - Wstaw assety
3. **page.tsx** — złóż sekcje w kolejności

### Faza 7: Quality Check

```
□ Color rhythm: max 2 tego samego pod rząd
□ Density rhythm: po heavy → light
□ Decoration budget: max 2 patterns, max 3 animated
□ Typography: display tylko h1/h2, serif max 2x
□ Responsive: mobile, tablet, desktop
□ Kontrast: WCAG AA (4.5:1 text, 3:1 UI)
□ Linki: wszystkie działają
□ Obrazki: optimized, lazy loaded
```

---

## Referencje

| Plik | Użycie |
|------|--------|
| `newPart.md` | Component Selection, Page Rhythm, Image Gen |
| `styling.md` | 15 presetów do wyboru |
| `styling-patterns.md` | Hover, shadows, cards, decorations |
| `specs/*.md` | Dekoracje per sekcja |
| `SECTIONS.md` | Indeks wireframe'ów |

---

## Przykład: TOM-ART

**Content:** `content.md` (7 sekcji, 5 usług, 4 kroki, 5 FAQ)
**Preset:** Warm Cream (#fffbf5 + #e63946 + Plus Jakarta Sans)
**Brakuje:** portfolio, reviews (firma 2-miesięczna)

**Komponenty:**
- Hero → HeroPattern (brak zdjęcia)
- Services → ServicesIconGrid (5 usług, bez zdjęć)
- Process → ProcessTimeline (4 kroki)
- WhyUs → (brak wireframe — użyj ServicesIconGrid z 4 USP)
- About → AboutSplit (placeholder photo)
- FAQ → FAQAccordion (5 pytań)
- Contact → ContactSplit (form + dane)
