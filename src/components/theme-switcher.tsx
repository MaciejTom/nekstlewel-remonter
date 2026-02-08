"use client"

import { useState, useEffect } from "react"
import { Palette, X, Type, Paintbrush, Sparkles } from "lucide-react"

// =============================================
// FONTS CONFIG
// =============================================
const fonts = {
  body: [
    { id: "inter", name: "Inter", value: "var(--font-inter), ui-sans-serif, system-ui, sans-serif" },
    { id: "system", name: "System UI", value: "ui-sans-serif, system-ui, -apple-system, sans-serif" },
    { id: "roboto", name: "Roboto", value: "'Roboto', ui-sans-serif, system-ui, sans-serif" },
    { id: "open-sans", name: "Open Sans", value: "'Open Sans', ui-sans-serif, system-ui, sans-serif" },
    { id: "lato", name: "Lato", value: "'Lato', ui-sans-serif, system-ui, sans-serif" },
    { id: "poppins", name: "Poppins", value: "'Poppins', ui-sans-serif, system-ui, sans-serif" },
    { id: "nunito", name: "Nunito", value: "'Nunito', ui-sans-serif, system-ui, sans-serif" },
    { id: "source-sans", name: "Source Sans", value: "'Source Sans 3', ui-sans-serif, system-ui, sans-serif" },
    { id: "dm-sans", name: "DM Sans", value: "'DM Sans', ui-sans-serif, system-ui, sans-serif" },
    { id: "work-sans", name: "Work Sans", value: "'Work Sans', ui-sans-serif, system-ui, sans-serif" },
    { id: "raleway", name: "Raleway", value: "'Raleway', ui-sans-serif, system-ui, sans-serif" },
    { id: "quicksand", name: "Quicksand", value: "'Quicksand', ui-sans-serif, system-ui, sans-serif" },
    { id: "georgia", name: "Georgia", value: "Georgia, Cambria, 'Times New Roman', serif" },
    { id: "merriweather", name: "Merriweather", value: "'Merriweather', Georgia, serif" },
    { id: "libre-baskerville", name: "Libre Baskerville", value: "'Libre Baskerville', Georgia, serif" },
  ],
  headings: [
    { id: "plus-jakarta", name: "Plus Jakarta Sans", value: "var(--font-plus-jakarta), ui-sans-serif, system-ui, sans-serif" },
    { id: "inter", name: "Inter", value: "var(--font-inter), ui-sans-serif, system-ui, sans-serif" },
    { id: "montserrat", name: "Montserrat", value: "'Montserrat', ui-sans-serif, system-ui, sans-serif" },
    { id: "poppins", name: "Poppins", value: "'Poppins', ui-sans-serif, system-ui, sans-serif" },
    { id: "oswald", name: "Oswald", value: "'Oswald', ui-sans-serif, system-ui, sans-serif" },
    { id: "bebas-neue", name: "Bebas Neue", value: "'Bebas Neue', ui-sans-serif, system-ui, sans-serif" },
    { id: "raleway", name: "Raleway", value: "'Raleway', ui-sans-serif, system-ui, sans-serif" },
    { id: "archivo", name: "Archivo Black", value: "'Archivo Black', ui-sans-serif, system-ui, sans-serif" },
    { id: "rubik", name: "Rubik", value: "'Rubik', ui-sans-serif, system-ui, sans-serif" },
    { id: "nunito", name: "Nunito", value: "'Nunito', ui-sans-serif, system-ui, sans-serif" },
    { id: "dm-serif", name: "DM Serif Display", value: "'DM Serif Display', Georgia, serif" },
    { id: "playfair", name: "Playfair Display", value: "'Playfair Display', Georgia, serif" },
    { id: "cormorant", name: "Cormorant Garamond", value: "'Cormorant Garamond', Georgia, serif" },
    { id: "georgia", name: "Georgia", value: "Georgia, Cambria, 'Times New Roman', serif" },
    { id: "merriweather", name: "Merriweather", value: "'Merriweather', Georgia, serif" },
  ],
}

// =============================================
// COLOR PRESETS
// =============================================
const colorPresets = {
  primary: [
    { id: "red", name: "Czerwony", value: "#dc2626" },
    { id: "brick", name: "Ceglasty", value: "#b91c1c" },
    { id: "orange", name: "Pomarańcz", value: "#ea580c" },
    { id: "amber", name: "Bursztyn", value: "#d97706" },
    { id: "yellow", name: "Żółty", value: "#ca8a04" },
    { id: "lime", name: "Limonka", value: "#65a30d" },
    { id: "green", name: "Zielony", value: "#16a34a" },
    { id: "emerald", name: "Szmaragd", value: "#059669" },
    { id: "teal", name: "Morski", value: "#0d9488" },
    { id: "cyan", name: "Cyjan", value: "#0891b2" },
    { id: "sky", name: "Niebo", value: "#0284c7" },
    { id: "blue", name: "Niebieski", value: "#2563eb" },
    { id: "indigo", name: "Indygo", value: "#4f46e5" },
    { id: "violet", name: "Fiolet", value: "#7c3aed" },
    { id: "purple", name: "Purpura", value: "#9333ea" },
    { id: "fuchsia", name: "Fuksja", value: "#c026d3" },
    { id: "pink", name: "Róż", value: "#db2777" },
    { id: "rose", name: "Róża", value: "#e11d48" },
  ],
  secondary: [
    { id: "navy", name: "Granat", value: "#1d3557" },
    { id: "slate-900", name: "Grafitowy", value: "#0f172a" },
    { id: "zinc-900", name: "Cynkowy", value: "#18181b" },
    { id: "stone-900", name: "Kamienny", value: "#1c1917" },
    { id: "neutral-800", name: "Neutralny", value: "#262626" },
    { id: "gray-800", name: "Szary", value: "#1f2937" },
    { id: "slate-700", name: "Łupkowy", value: "#334155" },
    { id: "emerald-900", name: "Ciemna zieleń", value: "#064e3b" },
    { id: "blue-900", name: "Ciemny niebieski", value: "#1e3a5f" },
    { id: "purple-900", name: "Ciemna purpura", value: "#581c87" },
  ],
  background: [
    { id: "cream", name: "Kremowy", value: "#fffbf5" },
    { id: "white", name: "Biały", value: "#ffffff" },
    { id: "snow", name: "Śnieżny", value: "#fafafa" },
    { id: "warm-gray", name: "Ciepły szary", value: "#f5f5f4" },
    { id: "cool-gray", name: "Zimny szary", value: "#f8fafc" },
    { id: "green-tint", name: "Zielonkawy", value: "#f8faf8" },
    { id: "blue-tint", name: "Niebieski odcień", value: "#f5f9fc" },
    { id: "purple-tint", name: "Fioletowy odcień", value: "#faf8fc" },
    { id: "amber-tint", name: "Bursztynowy", value: "#fffbeb" },
    { id: "dark-slate", name: "Ciemny łupek", value: "#0f172a" },
    { id: "dark-zinc", name: "Ciemny cynk", value: "#18181b" },
    { id: "dark-neutral", name: "Ciemny neutralny", value: "#171717" },
  ],
  gold: [
    { id: "amber-600", name: "Złoty", value: "#d97706" },
    { id: "amber-700", name: "Ciemne złoto", value: "#b45309" },
    { id: "yellow-600", name: "Żółty", value: "#ca8a04" },
    { id: "orange-500", name: "Pomarańcz", value: "#f97316" },
    { id: "amber-500", name: "Jasne złoto", value: "#f59e0b" },
    { id: "yellow-500", name: "Jasny żółty", value: "#eab308" },
  ],
  muted: [
    { id: "cream-muted", name: "Kremowy", value: "#f3ede4" },
    { id: "gray-100", name: "Jasny szary", value: "#f3f4f6" },
    { id: "slate-100", name: "Łupkowy", value: "#f1f5f9" },
    { id: "stone-100", name: "Kamienny", value: "#f5f5f4" },
    { id: "zinc-100", name: "Cynkowy", value: "#f4f4f5" },
    { id: "green-100", name: "Zielonkawy", value: "#dcfce7" },
    { id: "blue-100", name: "Niebieski", value: "#dbeafe" },
    { id: "purple-100", name: "Fioletowy", value: "#ede9fe" },
    { id: "orange-100", name: "Pomarańczowy", value: "#ffedd5" },
    { id: "dark-muted", name: "Ciemny", value: "#334155" },
  ],
}

// =============================================
// FULL THEME PRESETS
// =============================================
const themePresets = [
  // === CZERWONE / CIEPŁE ===
  {
    id: "brick",
    name: "Ceglasty",
    primary: "#dc2626",
    secondary: "#1d3557",
    background: "#fffbf5",
    gold: "#b45309",
    muted: "#f3ede4",
  },
  {
    id: "cherry",
    name: "Wiśniowy",
    primary: "#be123c",
    secondary: "#1c1917",
    background: "#fff1f2",
    gold: "#d97706",
    muted: "#ffe4e6",
  },
  {
    id: "rose",
    name: "Różowy",
    primary: "#e11d48",
    secondary: "#4c1d3d",
    background: "#fff5f7",
    gold: "#d97706",
    muted: "#fce7f3",
  },
  {
    id: "warm",
    name: "Pomarańczowy",
    primary: "#ea580c",
    secondary: "#431407",
    background: "#fffbf5",
    gold: "#b45309",
    muted: "#ffedd5",
  },
  {
    id: "amber",
    name: "Bursztynowy",
    primary: "#d97706",
    secondary: "#451a03",
    background: "#fffbeb",
    gold: "#b45309",
    muted: "#fef3c7",
  },
  {
    id: "sunset",
    name: "Zachód słońca",
    primary: "#f59e0b",
    secondary: "#78350f",
    background: "#fffbeb",
    gold: "#ea580c",
    muted: "#fef3c7",
  },
  // === ZIELONE ===
  {
    id: "forest",
    name: "Leśny",
    primary: "#16a34a",
    secondary: "#1a2e1a",
    background: "#f8faf8",
    gold: "#ca8a04",
    muted: "#dcfce7",
  },
  {
    id: "emerald",
    name: "Szmaragd",
    primary: "#059669",
    secondary: "#064e3b",
    background: "#ecfdf5",
    gold: "#ca8a04",
    muted: "#d1fae5",
  },
  {
    id: "lime",
    name: "Limonkowy",
    primary: "#65a30d",
    secondary: "#365314",
    background: "#f7fee7",
    gold: "#ca8a04",
    muted: "#ecfccb",
  },
  {
    id: "sage",
    name: "Szałwiowy",
    primary: "#6b8f71",
    secondary: "#2d3d2f",
    background: "#f5f7f5",
    gold: "#b45309",
    muted: "#e8ede9",
  },
  // === NIEBIESKIE / MORSKIE ===
  {
    id: "teal",
    name: "Morski",
    primary: "#0d9488",
    secondary: "#134e4a",
    background: "#f0fdfa",
    gold: "#ca8a04",
    muted: "#ccfbf1",
  },
  {
    id: "cyan",
    name: "Turkusowy",
    primary: "#0891b2",
    secondary: "#164e63",
    background: "#ecfeff",
    gold: "#d97706",
    muted: "#cffafe",
  },
  {
    id: "ocean",
    name: "Ocean",
    primary: "#0284c7",
    secondary: "#0c2d48",
    background: "#f5f9fc",
    gold: "#d97706",
    muted: "#e0f2fe",
  },
  {
    id: "sky",
    name: "Niebo",
    primary: "#0ea5e9",
    secondary: "#0c4a6e",
    background: "#f0f9ff",
    gold: "#d97706",
    muted: "#e0f2fe",
  },
  {
    id: "blue",
    name: "Niebieski",
    primary: "#2563eb",
    secondary: "#1e3a8a",
    background: "#eff6ff",
    gold: "#d97706",
    muted: "#dbeafe",
  },
  {
    id: "navy",
    name: "Granatowy",
    primary: "#1d4ed8",
    secondary: "#172554",
    background: "#f8fafc",
    gold: "#f59e0b",
    muted: "#e2e8f0",
  },
  // === FIOLETOWE ===
  {
    id: "indigo",
    name: "Indygo",
    primary: "#4f46e5",
    secondary: "#1e1b4b",
    background: "#f5f5ff",
    gold: "#d97706",
    muted: "#e0e7ff",
  },
  {
    id: "royal",
    name: "Fioletowy",
    primary: "#7c3aed",
    secondary: "#2e1a47",
    background: "#faf8fc",
    gold: "#d97706",
    muted: "#ede9fe",
  },
  {
    id: "purple",
    name: "Purpurowy",
    primary: "#9333ea",
    secondary: "#581c87",
    background: "#faf5ff",
    gold: "#f59e0b",
    muted: "#f3e8ff",
  },
  {
    id: "fuchsia",
    name: "Fuksja",
    primary: "#c026d3",
    secondary: "#701a75",
    background: "#fdf4ff",
    gold: "#d97706",
    muted: "#fae8ff",
  },
  // === NEUTRALNE / ELEGANCKIE ===
  {
    id: "slate",
    name: "Elegancki",
    primary: "#475569",
    secondary: "#0f172a",
    background: "#f8fafc",
    gold: "#d97706",
    muted: "#e2e8f0",
  },
  {
    id: "stone",
    name: "Kamienny",
    primary: "#78716c",
    secondary: "#1c1917",
    background: "#fafaf9",
    gold: "#b45309",
    muted: "#e7e5e4",
  },
  {
    id: "zinc",
    name: "Cynkowy",
    primary: "#52525b",
    secondary: "#18181b",
    background: "#fafafa",
    gold: "#d97706",
    muted: "#e4e4e7",
  },
  {
    id: "minimal",
    name: "Minimalistyczny",
    primary: "#171717",
    secondary: "#0a0a0a",
    background: "#ffffff",
    gold: "#d97706",
    muted: "#f5f5f5",
  },
  // === CIEMNE / DARK MODE ===
  {
    id: "dark",
    name: "Ciemny",
    primary: "#3b82f6",
    secondary: "#1e293b",
    background: "#0f172a",
    gold: "#fbbf24",
    muted: "#334155",
  },
  {
    id: "dark-emerald",
    name: "Ciemny szmaragd",
    primary: "#10b981",
    secondary: "#1e293b",
    background: "#0f172a",
    gold: "#fbbf24",
    muted: "#334155",
  },
  {
    id: "dark-purple",
    name: "Ciemny fiolet",
    primary: "#a855f7",
    secondary: "#1e1b4b",
    background: "#0f0f23",
    gold: "#fbbf24",
    muted: "#2e2e5b",
  },
  {
    id: "dark-red",
    name: "Ciemny czerwony",
    primary: "#ef4444",
    secondary: "#1c1917",
    background: "#171717",
    gold: "#fbbf24",
    muted: "#2e2e2e",
  },
  {
    id: "dark-cyan",
    name: "Ciemny turkus",
    primary: "#22d3ee",
    secondary: "#164e63",
    background: "#0c1a24",
    gold: "#fbbf24",
    muted: "#1e3a4c",
  },
  {
    id: "midnight",
    name: "Północ",
    primary: "#f472b6",
    secondary: "#1f2937",
    background: "#111827",
    gold: "#fbbf24",
    muted: "#374151",
  },
  // === PREMIUM / LUKSUSOWE ===
  {
    id: "gold-luxury",
    name: "Złoty luksus",
    primary: "#ca8a04",
    secondary: "#1c1917",
    background: "#fffdf7",
    gold: "#a16207",
    muted: "#fef9c3",
  },
  {
    id: "wine",
    name: "Wino",
    primary: "#881337",
    secondary: "#1c1917",
    background: "#fff5f7",
    gold: "#ca8a04",
    muted: "#fce7f3",
  },
  {
    id: "bronze",
    name: "Brązowy",
    primary: "#92400e",
    secondary: "#1c1917",
    background: "#fefce8",
    gold: "#854d0e",
    muted: "#fef3c7",
  },
  {
    id: "charcoal",
    name: "Węglowy",
    primary: "#dc2626",
    secondary: "#1c1917",
    background: "#f5f5f4",
    gold: "#ca8a04",
    muted: "#e7e5e4",
  },
  // === PASTELOWE ===
  {
    id: "pastel-pink",
    name: "Pastelowy róż",
    primary: "#ec4899",
    secondary: "#831843",
    background: "#fdf2f8",
    gold: "#d97706",
    muted: "#fce7f3",
  },
  {
    id: "pastel-blue",
    name: "Pastelowy błękit",
    primary: "#60a5fa",
    secondary: "#1e3a8a",
    background: "#eff6ff",
    gold: "#d97706",
    muted: "#dbeafe",
  },
  {
    id: "pastel-green",
    name: "Pastelowa zieleń",
    primary: "#4ade80",
    secondary: "#14532d",
    background: "#f0fdf4",
    gold: "#ca8a04",
    muted: "#dcfce7",
  },
  {
    id: "lavender",
    name: "Lawendowy",
    primary: "#a78bfa",
    secondary: "#4c1d95",
    background: "#faf5ff",
    gold: "#d97706",
    muted: "#ede9fe",
  },
  {
    id: "peach",
    name: "Brzoskwiniowy",
    primary: "#fb923c",
    secondary: "#7c2d12",
    background: "#fff7ed",
    gold: "#ea580c",
    muted: "#ffedd5",
  },
  {
    id: "mint",
    name: "Miętowy",
    primary: "#2dd4bf",
    secondary: "#134e4a",
    background: "#f0fdfa",
    gold: "#ca8a04",
    muted: "#ccfbf1",
  },
]

// =============================================
// HELPER FUNCTIONS
// =============================================
function getContrastColor(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.5 ? "#1d3557" : "#ffffff"
}

function getMutedForeground(muted: string): string {
  const r = parseInt(muted.slice(1, 3), 16)
  const g = parseInt(muted.slice(3, 5), 16)
  const b = parseInt(muted.slice(5, 7), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.5 ? "#6b7280" : "#9ca3af"
}

function getBorderColor(background: string): string {
  const r = parseInt(background.slice(1, 3), 16)
  const g = parseInt(background.slice(3, 5), 16)
  const b = parseInt(background.slice(5, 7), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

  if (luminance > 0.5) {
    // Light background - darken
    return `rgb(${Math.max(0, r - 30)}, ${Math.max(0, g - 30)}, ${Math.max(0, b - 30)})`
  } else {
    // Dark background - lighten
    return `rgb(${Math.min(255, r + 50)}, ${Math.min(255, g + 50)}, ${Math.min(255, b + 50)})`
  }
}

// =============================================
// MAIN COMPONENT
// =============================================
type TabType = "presets" | "colors" | "fonts"

interface ThemeState {
  primary: string
  secondary: string
  background: string
  gold: string
  muted: string
  bodyFont: string
  headingFont: string
}

const defaultTheme: ThemeState = {
  primary: "#eab308",
  secondary: "#262626",
  background: "#171717",
  gold: "#eab308",
  muted: "#262626",
  bodyFont: "inter",
  headingFont: "plus-jakarta",
}

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<TabType>("presets")
  const [theme, setTheme] = useState<ThemeState>(defaultTheme)
  const [mounted, setMounted] = useState(false)

  // Load saved theme on mount
  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("custom-theme")
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setTheme(parsed)
        applyTheme(parsed)
      } catch {
        applyTheme(defaultTheme)
      }
    }
  }, [])

  const applyTheme = (t: ThemeState) => {
    const root = document.documentElement

    // Colors
    root.style.setProperty("--primary", t.primary)
    root.style.setProperty("--primary-foreground", getContrastColor(t.primary))
    root.style.setProperty("--ring", t.primary)

    root.style.setProperty("--secondary", t.secondary)
    root.style.setProperty("--secondary-foreground", getContrastColor(t.secondary))

    root.style.setProperty("--background", t.background)
    root.style.setProperty("--foreground", getContrastColor(t.background))
    root.style.setProperty("--card", t.background === "#0f172a" || t.background === "#18181b" || t.background === "#171717" ? "#1e293b" : "#ffffff")
    root.style.setProperty("--card-foreground", getContrastColor(t.background))
    root.style.setProperty("--popover", t.background === "#0f172a" || t.background === "#18181b" || t.background === "#171717" ? "#1e293b" : "#ffffff")
    root.style.setProperty("--popover-foreground", getContrastColor(t.background))

    root.style.setProperty("--gold", t.gold)

    root.style.setProperty("--muted", t.muted)
    root.style.setProperty("--muted-foreground", getMutedForeground(t.muted))
    root.style.setProperty("--accent", t.muted)
    root.style.setProperty("--accent-foreground", getContrastColor(t.muted))

    const borderColor = getBorderColor(t.background)
    root.style.setProperty("--border", borderColor)
    root.style.setProperty("--input", borderColor)

    // Fonts
    const bodyFontObj = fonts.body.find(f => f.id === t.bodyFont)
    const headingFontObj = fonts.headings.find(f => f.id === t.headingFont)

    if (bodyFontObj) {
      document.body.style.fontFamily = bodyFontObj.value
    }
    if (headingFontObj) {
      root.style.setProperty("--heading-font", headingFontObj.value)
      // Apply to all headings
      document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(el => {
        (el as HTMLElement).style.fontFamily = headingFontObj.value
      })
    }
  }

  const updateTheme = (updates: Partial<ThemeState>) => {
    const newTheme = { ...theme, ...updates }
    setTheme(newTheme)
    applyTheme(newTheme)
    localStorage.setItem("custom-theme", JSON.stringify(newTheme))
  }

  const applyPreset = (preset: typeof themePresets[0]) => {
    updateTheme({
      primary: preset.primary,
      secondary: preset.secondary,
      background: preset.background,
      gold: preset.gold,
      muted: preset.muted,
    })
  }

  const resetTheme = () => {
    setTheme(defaultTheme)
    applyTheme(defaultTheme)
    localStorage.removeItem("custom-theme")
  }

  if (!mounted) return null

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-110 transition-transform"
        title="Zmień wygląd strony"
      >
        <Palette className="w-6 h-6" />
      </button>

      {/* Panel */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsOpen(false)}
          />

          {/* Main Panel */}
          <div className="fixed bottom-6 right-6 z-50 bg-card border border-border rounded-xl shadow-2xl w-[360px] max-h-[80vh] overflow-hidden flex flex-col animate-fade-up">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-bold text-foreground text-lg flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Personalizacja
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={resetTheme}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors px-2 py-1"
                >
                  Reset
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-muted rounded-sm transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-border">
              {[
                { id: "presets", label: "Motywy", icon: Palette },
                { id: "colors", label: "Kolory", icon: Paintbrush },
                { id: "fonts", label: "Czcionki", icon: Type },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "text-primary border-b-2 border-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4">
              {/* PRESETS TAB */}
              {activeTab === "presets" && (
                <div className="grid grid-cols-4 gap-2">
                  {themePresets.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => applyPreset(preset)}
                      className={`relative p-2 rounded-lg border-2 transition-all hover:scale-105 ${
                        theme.primary === preset.primary && theme.background === preset.background
                          ? "border-primary ring-2 ring-primary/20"
                          : "border-border hover:border-primary/50"
                      }`}
                      style={{ backgroundColor: preset.background }}
                      title={preset.name}
                    >
                      <div className="flex gap-0.5 mb-1.5 justify-center">
                        <div
                          className="w-3 h-3 rounded-full border border-black/10"
                          style={{ backgroundColor: preset.primary }}
                        />
                        <div
                          className="w-3 h-3 rounded-full border border-black/10"
                          style={{ backgroundColor: preset.secondary }}
                        />
                        <div
                          className="w-3 h-3 rounded-full border border-black/10"
                          style={{ backgroundColor: preset.gold }}
                        />
                      </div>
                      <span
                        className="text-[8px] font-medium block text-center leading-tight truncate"
                        style={{ color: getContrastColor(preset.background) }}
                      >
                        {preset.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {/* COLORS TAB */}
              {activeTab === "colors" && (
                <div className="space-y-6">
                  {/* Primary Color */}
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">
                      Kolor główny (przyciski, akcenty)
                    </label>
                    <div className="grid grid-cols-6 gap-2">
                      {colorPresets.primary.map((color) => (
                        <button
                          key={color.id}
                          onClick={() => updateTheme({ primary: color.value })}
                          className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${
                            theme.primary === color.value
                              ? "border-foreground ring-2 ring-primary/30 scale-110"
                              : "border-transparent"
                          }`}
                          style={{ backgroundColor: color.value }}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Secondary Color */}
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">
                      Kolor dodatkowy (sekcje ciemne)
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {colorPresets.secondary.map((color) => (
                        <button
                          key={color.id}
                          onClick={() => updateTheme({ secondary: color.value })}
                          className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${
                            theme.secondary === color.value
                              ? "border-foreground ring-2 ring-primary/30 scale-110"
                              : "border-transparent"
                          }`}
                          style={{ backgroundColor: color.value }}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Background Color */}
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">
                      Tło strony
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {colorPresets.background.map((color) => (
                        <button
                          key={color.id}
                          onClick={() => updateTheme({ background: color.value })}
                          className={`h-10 rounded-lg border-2 transition-all hover:scale-105 flex items-center justify-center ${
                            theme.background === color.value
                              ? "border-primary ring-2 ring-primary/30"
                              : "border-border"
                          }`}
                          style={{ backgroundColor: color.value }}
                          title={color.name}
                        >
                          <span
                            className="text-[9px] font-medium"
                            style={{ color: getContrastColor(color.value) }}
                          >
                            {color.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Gold/Accent Color */}
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">
                      Kolor złoty (odznaki, wyróżnienia)
                    </label>
                    <div className="grid grid-cols-6 gap-2">
                      {colorPresets.gold.map((color) => (
                        <button
                          key={color.id}
                          onClick={() => updateTheme({ gold: color.value })}
                          className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${
                            theme.gold === color.value
                              ? "border-foreground ring-2 ring-primary/30 scale-110"
                              : "border-transparent"
                          }`}
                          style={{ backgroundColor: color.value }}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Muted Color */}
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">
                      Kolor stonowany (karty, sekcje)
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {colorPresets.muted.map((color) => (
                        <button
                          key={color.id}
                          onClick={() => updateTheme({ muted: color.value })}
                          className={`w-8 h-8 rounded-lg border-2 transition-all hover:scale-110 ${
                            theme.muted === color.value
                              ? "border-foreground ring-2 ring-primary/30 scale-110"
                              : "border-transparent"
                          }`}
                          style={{ backgroundColor: color.value }}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Custom color picker */}
                  <div className="pt-4 border-t border-border">
                    <label className="text-sm font-semibold text-foreground mb-3 block">
                      Własny kolor główny
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={theme.primary}
                        onChange={(e) => updateTheme({ primary: e.target.value })}
                        className="w-12 h-12 rounded-lg cursor-pointer border-2 border-border"
                      />
                      <input
                        type="text"
                        value={theme.primary}
                        onChange={(e) => {
                          if (/^#[0-9A-Fa-f]{6}$/.test(e.target.value)) {
                            updateTheme({ primary: e.target.value })
                          }
                        }}
                        className="flex-1 px-3 py-2 border border-border rounded-lg text-sm font-mono bg-muted/50"
                        placeholder="#dc2626"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* FONTS TAB */}
              {activeTab === "fonts" && (
                <div className="space-y-6">
                  {/* Body Font */}
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">
                      Czcionka tekstu
                    </label>
                    <div className="space-y-2">
                      {fonts.body.map((font) => (
                        <button
                          key={font.id}
                          onClick={() => updateTheme({ bodyFont: font.id })}
                          className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                            theme.bodyFont === font.id
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <span
                            className="text-lg"
                            style={{ fontFamily: font.value }}
                          >
                            {font.name}
                          </span>
                          <span
                            className="block text-sm text-muted-foreground mt-1"
                            style={{ fontFamily: font.value }}
                          >
                            Przykładowy tekst akapitu
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Heading Font */}
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">
                      Czcionka nagłówków
                    </label>
                    <div className="space-y-2">
                      {fonts.headings.map((font) => (
                        <button
                          key={font.id}
                          onClick={() => updateTheme({ headingFont: font.id })}
                          className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                            theme.headingFont === font.id
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <span
                            className="text-xl font-bold"
                            style={{ fontFamily: font.value }}
                          >
                            {font.name}
                          </span>
                          <span
                            className="block text-sm text-muted-foreground mt-1 font-bold"
                            style={{ fontFamily: font.value }}
                          >
                            Nagłówek sekcji
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer preview */}
            <div className="p-4 border-t border-border bg-muted/30">
              <div className="text-xs text-muted-foreground text-center mb-2">Podgląd</div>
              <div className="flex items-center justify-center gap-3">
                <div
                  className="px-4 py-2 rounded-sm text-sm font-semibold"
                  style={{ backgroundColor: theme.primary, color: getContrastColor(theme.primary) }}
                >
                  Przycisk
                </div>
                <div
                  className="px-3 py-2 rounded-sm text-sm"
                  style={{ backgroundColor: theme.secondary, color: getContrastColor(theme.secondary) }}
                >
                  Sekcja
                </div>
                <div
                  className="px-3 py-2 rounded-sm text-sm border"
                  style={{ backgroundColor: theme.muted, color: getMutedForeground(theme.muted), borderColor: theme.muted }}
                >
                  Karta
                </div>
                <div
                  className="w-8 h-8 rounded-full"
                  style={{ backgroundColor: theme.gold }}
                  title="Gold"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
