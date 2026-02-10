# PageSpeed Optimizer Agent Team

Kompleksowa analiza i optymalizacja aplikacji Next.js pod kątem PageSpeed Insights.
Cel: **Performance 90+** bez utraty jakości wizualnej.

---

## Kiedy używać

- Przed oddaniem strony klientowi
- Po major zmianach w UI
- Gdy PageSpeed < 80

---

## Input od użytkownika

```
URL do PageSpeed Insights lub surowe wyniki:
- Performance score
- FCP, LCP, TBT, CLS
- Lista problemów z audytu
```

---

## Agent 1: Audytor (Research)

**Zadanie:** Analiza wyników PageSpeed i mapowanie na pliki w kodzie.

**Kroki:**
1. Przeanalizuj wyniki PageSpeed:
   - FCP > 2.5s = problem z render-blocking
   - LCP > 4s = problem z największym elementem
   - TBT > 200ms = problem z JS
   - CLS > 0.1 = problem z layout shifts

2. Zidentyfikuj problematyczne zasoby:
   - Zewnętrzne fonty (Google Fonts, Material Symbols)
   - Obrazy bez responsywnych rozmiarów
   - Animacje na elementach LCP (opacity:0)
   - Duże bundle JS

3. Znajdź pliki źródłowe:
   ```bash
   # Szukaj użycia zewnętrznych fontów
   grep -r "fonts.googleapis.com" src/
   grep -r "material-symbols" src/

   # Szukaj <img> zamiast next/image
   grep -r "<img " src/components/

   # Szukaj animacji na krytycznych elementach
   grep -r "animate-" src/components/sections/hero
   ```

**Output:** Lista problemów z mapowaniem na pliki.

---

## Agent 2: Image Optimizer

**Zadanie:** Optymalizacja obrazów.

**Checklist:**

### 1. Zamień `<img>` na `next/image`
```tsx
// ❌ Źle
<img src={image} alt={alt} className="..." />

// ✅ Dobrze
<Image
  src={image}
  alt={alt}
  fill
  sizes="(max-width: 1024px) 100vw, 50vw"
  className="..."
  loading={isAboveFold ? "eager" : "lazy"}
/>
```

### 2. Dodaj właściwe `sizes`
```tsx
// Hero (pełna szerokość)
sizes="100vw"

// 2-kolumnowy layout
sizes="(max-width: 1024px) 100vw, 50vw"

// 3-kolumnowy grid
sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"

// Logo/ikona (fixed size)
width={40} height={40}  // bez sizes, stały rozmiar
```

### 3. Zmniejsz źródłowe obrazy
```javascript
// Skrypt do resize dużych obrazów
const sharp = require('sharp');
sharp('input.webp')
  .resize(800, 600, { fit: 'cover' })
  .webp({ quality: 80 })
  .toFile('output.webp');
```

### 4. Konfiguracja next.config.ts
```typescript
images: {
  formats: ["image/avif", "image/webp"],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  imageSizes: [16, 32, 48, 64, 96, 128, 256],
  minimumCacheTTL: 31536000,
  qualities: [75],
},
```

---

## Agent 3: Font Optimizer

**Zadanie:** Eliminacja zewnętrznych fontów i optymalizacja ładowania.

### 1. Usuń Material Symbols → Lucide
```tsx
// ❌ Material Symbols (301 KB external font)
<span className="material-symbols-outlined">home</span>

// ✅ Lucide (bundled, 0 KB extra)
import { Home } from "lucide-react"
<Home className="w-6 h-6" />
```

**Mapowanie Material Symbols → Lucide:**
| Material | Lucide |
|----------|--------|
| home | Home |
| construction | Hammer |
| format_paint | Paintbrush |
| bathroom | Bath |
| stairs | Layers |
| check_circle | CheckCircle |
| phone | Phone |
| menu | Menu |
| close | X |
| arrow_forward | ArrowRight |
| star | Star |

### 2. Optymalizuj Google Fonts
```tsx
// layout.tsx - użyj next/font
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",  // WAŻNE: swap dla szybkiego FCP
  weight: ["400", "500", "600", "700"],
});
```

### 3. Dodaj preconnect
```tsx
<head>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
</head>
```

---

## Agent 4: LCP Optimizer

**Zadanie:** Naprawienie Largest Contentful Paint.

### 1. Znajdź element LCP
Zazwyczaj to:
- Hero image
- Hero headline (h1)
- Duży tekst above the fold

### 2. Usuń animacje z LCP
```tsx
// ❌ Animacja opóźnia LCP (opacity:0 na starcie)
<h1 className="animate-fade-up">Headline</h1>

// ✅ Bez animacji na LCP
<h1 className="">Headline</h1>
```

### 3. Dodaj priority do hero image
```tsx
<Image
  src={heroImage}
  priority  // WAŻNE: ładuj od razu
  sizes="100vw"
  ...
/>
```

### 4. Preload krytycznych zasobów
```tsx
// W layout.tsx lub page.tsx
<link rel="preload" href="/images/hero.webp" as="image" />
```

---

## Agent 5: JavaScript Optimizer

**Zadanie:** Redukcja i optymalizacja JS.

### 1. Browserslist dla nowoczesnych przeglądarek
```json
// package.json
{
  "browserslist": [
    "last 2 Chrome versions",
    "last 2 Firefox versions",
    "last 2 Safari versions",
    "last 2 Edge versions"
  ]
}
```
Usuwa ~13 KB polyfills (Array.prototype.at, flat, flatMap, etc.)

### 2. Dynamic imports dla ciężkich komponentów
```tsx
// Lazy load komponentów poniżej fold
const Reviews = dynamic(() => import('./Reviews'), { ssr: true });
const FAQ = dynamic(() => import('./FAQ'), { ssr: true });
```

### 3. Analiza bundle
```bash
npm run build
# Sprawdź rozmiary w output
```

---

## Agent 6: CSS Optimizer

**Zadanie:** Optymalizacja CSS i eliminacja render-blocking.

### 1. Włącz optimizeCss
```typescript
// next.config.ts
experimental: {
  optimizeCss: true,  // Inline critical CSS
},
```

### 2. Usuń nieużywane style
```bash
# Znajdź nieużywane klasy
npx purgecss --css styles.css --content "src/**/*.tsx"
```

### 3. Unikaj dużych animacji CSS
```css
/* ❌ Ciężkie animacje */
.element {
  animation: complex-animation 2s infinite;
  filter: blur(10px);
  backdrop-filter: blur(20px);
}

/* ✅ Lekkie animacje */
.element {
  transition: transform 0.3s, opacity 0.3s;
}
```

---

## Agent 7: Accessibility Fixer

**Zadanie:** Naprawienie problemów accessibility (wpływa na score).

### 1. Aria-labels dla przycisków z ikonami
```tsx
// ❌ Brak accessible name
<button><Menu /></button>

// ✅ Z aria-label
<button aria-label="Otwórz menu"><Menu /></button>
```

### 2. Alt dla obrazów
```tsx
<Image src={img} alt="Opis obrazu" />  // Nie puste!
```

### 3. Kontrast kolorów
- Tekst: min 4.5:1 dla normalnego, 3:1 dla dużego
- Sprawdź: https://webaim.org/resources/contrastchecker/

---

## Workflow

```
1. USER podaje wyniki PageSpeed
   ↓
2. AUDYTOR analizuje i mapuje problemy
   ↓
3. PARALLEL:
   - IMAGE OPTIMIZER → obrazy
   - FONT OPTIMIZER → fonty
   - LCP OPTIMIZER → LCP element
   - JS OPTIMIZER → bundle
   - CSS OPTIMIZER → style
   - A11Y FIXER → accessibility
   ↓
4. BUILD & TEST
   npm run build
   ↓
5. COMMIT & PUSH
   ↓
6. RE-TEST PageSpeed (po deploy)
```

---

## Typowe zyski

| Optymalizacja | Typowy zysk |
|---------------|-------------|
| Material Symbols → Lucide | -301 KB |
| next/image z sizes | -30-50% obrazów |
| Resize źródłowych obrazów | -50-90% |
| Usunięcie animacji LCP | -500-1500ms LCP |
| Browserslist modern | -13 KB JS |
| optimizeCss | -100-300ms FCP |
| Preconnect fonts | -100-200ms |

---

## Komendy

```bash
# Znajdź wszystkie <img> (do zamiany na next/image)
grep -rn "<img " src/components/

# Znajdź Material Symbols
grep -rn "material-symbols" src/

# Znajdź animacje
grep -rn "animate-" src/components/sections/

# Resize obrazy (wymaga sharp)
node -e "require('sharp')('in.webp').resize(800).webp({quality:80}).toFile('out.webp')"

# Build i sprawdź rozmiary
npm run build
```

---

## Cel końcowy

| Metryka | Target |
|---------|--------|
| Performance | 90+ |
| Accessibility | 95+ |
| Best Practices | 100 |
| SEO | 100 |
| FCP | < 1.8s |
| LCP | < 2.5s |
| TBT | < 200ms |
| CLS | < 0.1 |
