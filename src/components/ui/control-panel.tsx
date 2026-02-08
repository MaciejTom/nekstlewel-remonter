"use client"

import { useState, useEffect } from "react"
import { Settings, X, Shuffle, RotateCcw, Copy } from "lucide-react"

// Rozszerzona paleta kolorów (70 kolorów)
const COLOR_PALETTE = [
  '#ffffff', '#fefefe', '#fafafa', '#f5f5f5', '#fffbf5', '#fef7ed', '#fef3c7', '#fefce8',
  '#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b',
  '#475569', '#334155', '#1e293b', '#0f172a', '#020617',
  '#fef2f2', '#fee2e2', '#fca5a5', '#f87171', '#ef4444', '#dc2626', '#b91c1c', '#991b1b', '#7f1d1d',
  '#fff7ed', '#ffedd5', '#fdba74', '#fb923c', '#f97316', '#ea580c', '#c2410c', '#9a3412',
  '#fefce8', '#fef08a', '#facc15', '#eab308', '#ca8a04', '#a16207', '#854d0e', '#d97706',
  '#f0fdf4', '#dcfce7', '#86efac', '#4ade80', '#22c55e', '#16a34a', '#15803d', '#166534', '#14532d',
  '#f0fdfa', '#99f6e4', '#2dd4bf', '#14b8a6', '#0d9488', '#0f766e', '#115e59',
  '#eff6ff', '#dbeafe', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#1e3a8a',
  '#1d3557', '#14213d', '#0a1628', '#172554',
  '#faf5ff', '#e9d5ff', '#c084fc', '#a855f7', '#9333ea', '#7c3aed', '#6d28d9', '#5b21b6',
  '#fdf2f8', '#fbcfe8', '#f472b6', '#ec4899', '#db2777', '#be185d',
  '#fdf4e3', '#f3ede4', '#e8e1d5', '#d6ccc2', '#a8a29e', '#78716c', '#57534e', '#44403c',
  '#171717', '#000000',
]

const FONT_OPTIONS = [
  { name: 'Inter', family: "'Inter', sans-serif", category: 'sans' },
  { name: 'DM Sans', family: "'DM Sans', sans-serif", category: 'sans' },
  { name: 'Outfit', family: "'Outfit', sans-serif", category: 'sans' },
  { name: 'Plus Jakarta', family: "'Plus Jakarta Sans', sans-serif", category: 'sans' },
  { name: 'Manrope', family: "'Manrope', sans-serif", category: 'sans' },
  { name: 'Space Grotesk', family: "'Space Grotesk', sans-serif", category: 'sans' },
  { name: 'Bricolage', family: "'Bricolage Grotesque', sans-serif", category: 'sans' },
  { name: 'Syne', family: "'Syne', sans-serif", category: 'sans' },
  { name: 'Roboto', family: "'Roboto', sans-serif", category: 'sans' },
  { name: 'Open Sans', family: "'Open Sans', sans-serif", category: 'sans' },
  { name: 'Lato', family: "'Lato', sans-serif", category: 'sans' },
  { name: 'Montserrat', family: "'Montserrat', sans-serif", category: 'sans' },
  { name: 'Poppins', family: "'Poppins', sans-serif", category: 'sans' },
  { name: 'Raleway', family: "'Raleway', sans-serif", category: 'sans' },
  { name: 'Work Sans', family: "'Work Sans', sans-serif", category: 'sans' },
  { name: 'Rubik', family: "'Rubik', sans-serif", category: 'sans' },
  { name: 'Oswald', family: "'Oswald', sans-serif", category: 'display' },
  { name: 'Bebas Neue', family: "'Bebas Neue', sans-serif", category: 'display' },
  { name: 'Archivo Black', family: "'Archivo Black', sans-serif", category: 'display' },
  { name: 'Playfair', family: "'Playfair Display', serif", category: 'serif' },
  { name: 'Cormorant', family: "'Cormorant Garamond', serif", category: 'serif' },
  { name: 'Libre Baskerville', family: "'Libre Baskerville', serif", category: 'serif' },
  { name: 'Merriweather', family: "'Merriweather', serif", category: 'serif' },
  { name: 'DM Serif', family: "'DM Serif Display', serif", category: 'serif' },
]

const THEME_PRESETS = [
  { name: 'Warm Classic', desc: 'Kremowy + Granat + Czerwony', background: '#fffbf5', foreground: '#1d3557', primary: '#e63946', muted: '#f3ede4', border: '#e8e1d5', font: 'Inter' },
  { name: 'Industrial Orange', desc: 'Ciemny + Pomarańcz', background: '#0f172a', foreground: '#f1f5f9', primary: '#f97316', muted: '#1e293b', border: '#334155', font: 'Oswald' },
  { name: 'Industrial Yellow', desc: 'Ciemny + Żółty', background: '#171717', foreground: '#fafafa', primary: '#eab308', muted: '#262626', border: '#404040', font: 'Space Grotesk' },
  { name: 'Clean Blue', desc: 'Biały + Niebieski', background: '#ffffff', foreground: '#1e293b', primary: '#2563eb', muted: '#f1f5f9', border: '#e2e8f0', font: 'DM Sans' },
  { name: 'Trust Navy', desc: 'Jasny + Navy + Niebieski', background: '#f8fafc', foreground: '#14213d', primary: '#1d4ed8', muted: '#e2e8f0', border: '#cbd5e1', font: 'Plus Jakarta' },
  { name: 'Premium Gold', desc: 'Ciemny + Złoto', background: '#0a1628', foreground: '#fef7ed', primary: '#d97706', muted: '#172554', border: '#1e3a8a', font: 'Playfair' },
  { name: 'Nature Green', desc: 'Jasny + Zielony', background: '#fafafa', foreground: '#14532d', primary: '#16a34a', muted: '#f0fdf4', border: '#dcfce7', font: 'Outfit' },
  { name: 'Modern Minimal', desc: 'Biały + Czarny', background: '#ffffff', foreground: '#171717', primary: '#171717', muted: '#f5f5f5', border: '#e5e5e5', font: 'Manrope' },
  { name: 'Bold Red', desc: 'Biały + Czerwony mocny', background: '#fefefe', foreground: '#1e293b', primary: '#dc2626', muted: '#fef2f2', border: '#fca5a5', font: 'Bebas Neue' },
  { name: 'Elegant Purple', desc: 'Jasny + Fiolet', background: '#faf5ff', foreground: '#3b0764', primary: '#7c3aed', muted: '#e9d5ff', border: '#c084fc', font: 'Cormorant' },
  { name: 'Dark Slate', desc: 'Slate ciemny + Cyan', background: '#0f172a', foreground: '#e2e8f0', primary: '#14b8a6', muted: '#1e293b', border: '#334155', font: 'Bricolage' },
  { name: 'Warm Earth', desc: 'Beżowy + Brąz', background: '#fdf4e3', foreground: '#44403c', primary: '#78716c', muted: '#f3ede4', border: '#d6ccc2', font: 'Libre Baskerville' },
]

const RADIUS_OPTIONS = [
  { name: 'Ostre', value: '0' },
  { name: 'Lekkie', value: '0.25rem' },
  { name: 'Normalne', value: '0.5rem' },
  { name: 'Okrągłe', value: '1rem' },
  { name: 'Bardzo okrągłe', value: '1.5rem' },
]

const SHADOW_OPTIONS = [
  { name: 'Brak', value: 'none' },
  { name: 'Subtelne', value: 'subtle' },
  { name: 'Normalne', value: 'normal' },
  { name: 'Mocne', value: 'strong' },
]

export function ControlPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'presets' | 'colors' | 'typography' | 'effects'>('presets')

  // Domyślne kolory Industrial Yellow (z globals.css)
  const [bgColor, setBgColor] = useState('#171717')
  const [fgColor, setFgColor] = useState('#fafafa')
  const [primaryColor, setPrimaryColor] = useState('#eab308')
  const [mutedColor, setMutedColor] = useState('#262626')
  const [borderColor, setBorderColor] = useState('#404040')

  const [currentFont, setCurrentFont] = useState('Space Grotesk')
  const [radius, setRadius] = useState('0.5rem')
  const [shadowIntensity, setShadowIntensity] = useState('normal')
  const [activePreset, setActivePreset] = useState('Warm Classic')

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--background', bgColor)
    root.style.setProperty('--foreground', fgColor)
    root.style.setProperty('--card-foreground', fgColor)
    root.style.setProperty('--popover-foreground', fgColor)
    root.style.setProperty('--accent-foreground', fgColor)
    root.style.setProperty('--primary', primaryColor)
    root.style.setProperty('--ring', primaryColor)
    root.style.setProperty('--muted', mutedColor)
    root.style.setProperty('--accent', mutedColor)
    root.style.setProperty('--border', borderColor)
    root.style.setProperty('--input', borderColor)
    root.style.setProperty('--card', bgColor === '#ffffff' || bgColor === '#fefefe' || bgColor === '#fafafa' ? '#ffffff' : bgColor)
    root.style.setProperty('--secondary', fgColor)
    root.style.setProperty('--secondary-foreground', bgColor)
  }, [bgColor, fgColor, primaryColor, mutedColor, borderColor])

  useEffect(() => {
    const font = FONT_OPTIONS.find(f => f.name === currentFont)
    if (font) {
      document.documentElement.style.setProperty('--body-font', font.family)
      document.documentElement.style.setProperty('--heading-font', font.family)
    }
  }, [currentFont])

  useEffect(() => {
    document.documentElement.style.setProperty('--radius', radius)
  }, [radius])

  useEffect(() => {
    const root = document.documentElement
    const shadowMap: Record<string, { base: string; lg: string }> = {
      none: { base: 'none', lg: 'none' },
      subtle: { base: '0px 1px 3px rgba(0,0,0,0.05)', lg: '0px 4px 12px rgba(0,0,0,0.05)' },
      normal: { base: '0px 2px 6px rgba(0,0,0,0.08)', lg: '0px 8px 24px rgba(0,0,0,0.1)' },
      strong: { base: '0px 4px 12px rgba(0,0,0,0.15)', lg: '0px 16px 48px rgba(0,0,0,0.2)' },
    }
    const shadows = shadowMap[shadowIntensity]
    root.style.setProperty('--shadow-sm', shadows.base)
    root.style.setProperty('--shadow', shadows.base)
    root.style.setProperty('--shadow-md', shadows.lg)
    root.style.setProperty('--shadow-lg', shadows.lg)
    root.style.setProperty('--shadow-xl', shadows.lg)
  }, [shadowIntensity])

  const applyPreset = (preset: typeof THEME_PRESETS[0]) => {
    setBgColor(preset.background)
    setFgColor(preset.foreground)
    setPrimaryColor(preset.primary)
    setMutedColor(preset.muted)
    setBorderColor(preset.border)
    setCurrentFont(preset.font)
    setActivePreset(preset.name)
  }

  const randomizeAll = () => {
    const randomPreset = THEME_PRESETS[Math.floor(Math.random() * THEME_PRESETS.length)]
    applyPreset(randomPreset)
    setRadius(RADIUS_OPTIONS[Math.floor(Math.random() * RADIUS_OPTIONS.length)].value)
    setShadowIntensity(SHADOW_OPTIONS[Math.floor(Math.random() * SHADOW_OPTIONS.length)].value)
    setActivePreset('')
  }

  const resetToDefault = () => {
    applyPreset(THEME_PRESETS[0])
    setRadius('0.5rem')
    setShadowIntensity('normal')
  }

  const exportTheme = () => {
    const theme = {
      background: bgColor,
      foreground: fgColor,
      primary: primaryColor,
      muted: mutedColor,
      border: borderColor,
      font: currentFont,
      radius,
      shadow: shadowIntensity,
    }
    const css = `/* Eksportowany motyw */
--background: ${bgColor};
--foreground: ${fgColor};
--primary: ${primaryColor};
--muted: ${mutedColor};
--border: ${borderColor};
--heading-font: '${currentFont}';
--radius: ${radius};`

    navigator.clipboard.writeText(css)
    alert('Skopiowano do schowka!\n\n' + css)
    console.log('Eksportowany motyw:', theme)
  }

  const ColorSwatch = ({ color, isActive, onClick, size = 'normal' }: { color: string; isActive: boolean; onClick: () => void; size?: 'normal' | 'small' }) => (
    <button
      onClick={onClick}
      className={`${size === 'small' ? 'w-6 h-6' : 'w-8 h-8'} rounded transition-all duration-200 hover:scale-110 border border-white/10 ${
        isActive ? 'ring-2 ring-white ring-offset-2 ring-offset-black' : ''
      }`}
      style={{ backgroundColor: color }}
      aria-label={`Wybierz kolor ${color}`}
    />
  )

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-all duration-300"
        style={{ transform: isOpen ? 'translateX(340px) translateY(-50%)' : 'translateY(-50%)' }}
        aria-label={isOpen ? 'Zamknij panel' : 'Otwórz panel kontrolny'}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Settings className="w-5 h-5" />}
      </button>

      <div
        className={`fixed left-0 top-0 h-screen w-[340px] bg-black text-white z-50 overflow-y-auto transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-5 space-y-5">
          <div className="pb-3 border-b border-white/20">
            <h2 className="text-lg font-bold tracking-tight">Design System</h2>
            <p className="text-xs text-white/50 mt-1">Zmiany widoczne na żywo</p>
          </div>

          <div className="flex gap-1 p-1 bg-white/5 rounded-lg">
            {(['presets', 'colors', 'typography', 'effects'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-wider rounded transition-all ${
                  activeTab === tab
                    ? 'bg-white text-black'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab === 'presets' && 'Presety'}
                {tab === 'colors' && 'Kolory'}
                {tab === 'typography' && 'Fonty'}
                {tab === 'effects' && 'Efekty'}
              </button>
            ))}
          </div>

          {activeTab === 'presets' && (
            <div className="space-y-3">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Gotowe motywy</h3>
              <div className="grid grid-cols-2 gap-2">
                {THEME_PRESETS.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => applyPreset(preset)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      activePreset === preset.name
                        ? 'border-white bg-white/10'
                        : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex gap-1 mb-2">
                      <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: preset.background, border: '1px solid rgba(255,255,255,0.2)' }} />
                      <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: preset.primary }} />
                      <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: preset.foreground }} />
                      <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: preset.muted }} />
                    </div>
                    <p className="text-xs font-bold text-white">{preset.name}</p>
                    <p className="text-[10px] text-white/50">{preset.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'colors' && (
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Tło (Background)</h3>
                  <div className="w-5 h-5 rounded border border-white/20" style={{ backgroundColor: bgColor }} />
                </div>
                <div className="grid grid-cols-8 gap-1">
                  {COLOR_PALETTE.map((color) => (
                    <ColorSwatch key={`bg-${color}`} color={color} isActive={bgColor === color} onClick={() => { setBgColor(color); setActivePreset('') }} size="small" />
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Tekst (Foreground)</h3>
                  <div className="w-5 h-5 rounded border border-white/20" style={{ backgroundColor: fgColor }} />
                </div>
                <div className="grid grid-cols-8 gap-1">
                  {COLOR_PALETTE.map((color) => (
                    <ColorSwatch key={`fg-${color}`} color={color} isActive={fgColor === color} onClick={() => { setFgColor(color); setActivePreset('') }} size="small" />
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Akcent (Primary)</h3>
                  <div className="w-5 h-5 rounded" style={{ backgroundColor: primaryColor }} />
                </div>
                <div className="grid grid-cols-8 gap-1">
                  {COLOR_PALETTE.map((color) => (
                    <ColorSwatch key={`primary-${color}`} color={color} isActive={primaryColor === color} onClick={() => { setPrimaryColor(color); setActivePreset('') }} size="small" />
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Stonowane (Muted)</h3>
                  <div className="w-5 h-5 rounded border border-white/20" style={{ backgroundColor: mutedColor }} />
                </div>
                <div className="grid grid-cols-8 gap-1">
                  {COLOR_PALETTE.map((color) => (
                    <ColorSwatch key={`muted-${color}`} color={color} isActive={mutedColor === color} onClick={() => { setMutedColor(color); setActivePreset('') }} size="small" />
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Obramowanie (Border)</h3>
                  <div className="w-5 h-5 rounded border border-white/20" style={{ backgroundColor: borderColor }} />
                </div>
                <div className="grid grid-cols-8 gap-1">
                  {COLOR_PALETTE.map((color) => (
                    <ColorSwatch key={`border-${color}`} color={color} isActive={borderColor === color} onClick={() => { setBorderColor(color); setActivePreset('') }} size="small" />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'typography' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Sans-serif nowoczesne</h3>
                <div className="grid grid-cols-2 gap-1.5">
                  {FONT_OPTIONS.filter(f => f.category === 'sans').slice(0, 8).map((font) => (
                    <button
                      key={font.name}
                      onClick={() => { setCurrentFont(font.name); setActivePreset('') }}
                      className={`px-2 py-1.5 text-[11px] font-medium border rounded transition-all ${
                        currentFont === font.name
                          ? 'bg-white text-black border-white'
                          : 'bg-white/5 text-white border-white/20 hover:bg-white/10'
                      }`}
                      style={{ fontFamily: font.family }}
                    >
                      {font.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Sans-serif klasyczne</h3>
                <div className="grid grid-cols-2 gap-1.5">
                  {FONT_OPTIONS.filter(f => f.category === 'sans').slice(8).map((font) => (
                    <button
                      key={font.name}
                      onClick={() => { setCurrentFont(font.name); setActivePreset('') }}
                      className={`px-2 py-1.5 text-[11px] font-medium border rounded transition-all ${
                        currentFont === font.name
                          ? 'bg-white text-black border-white'
                          : 'bg-white/5 text-white border-white/20 hover:bg-white/10'
                      }`}
                      style={{ fontFamily: font.family }}
                    >
                      {font.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Display / Nagłówkowe</h3>
                <div className="grid grid-cols-2 gap-1.5">
                  {FONT_OPTIONS.filter(f => f.category === 'display').map((font) => (
                    <button
                      key={font.name}
                      onClick={() => { setCurrentFont(font.name); setActivePreset('') }}
                      className={`px-2 py-1.5 text-[11px] font-medium border rounded transition-all ${
                        currentFont === font.name
                          ? 'bg-white text-black border-white'
                          : 'bg-white/5 text-white border-white/20 hover:bg-white/10'
                      }`}
                      style={{ fontFamily: font.family }}
                    >
                      {font.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Serif / Eleganckie</h3>
                <div className="grid grid-cols-2 gap-1.5">
                  {FONT_OPTIONS.filter(f => f.category === 'serif').map((font) => (
                    <button
                      key={font.name}
                      onClick={() => { setCurrentFont(font.name); setActivePreset('') }}
                      className={`px-2 py-1.5 text-[11px] font-medium border rounded transition-all ${
                        currentFont === font.name
                          ? 'bg-white text-black border-white'
                          : 'bg-white/5 text-white border-white/20 hover:bg-white/10'
                      }`}
                      style={{ fontFamily: font.family }}
                    >
                      {font.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-[10px] text-white/50 mb-1">Aktywna czcionka:</p>
                <p className="text-lg font-bold" style={{ fontFamily: FONT_OPTIONS.find(f => f.name === currentFont)?.family }}>{currentFont}</p>
              </div>
            </div>
          )}

          {activeTab === 'effects' && (
            <div className="space-y-5">
              <div className="space-y-2">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Zaokrąglenia (Border Radius)</h3>
                <div className="grid grid-cols-2 gap-1.5">
                  {RADIUS_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setRadius(opt.value)}
                      className={`px-3 py-2 text-xs font-medium border transition-all ${
                        radius === opt.value
                          ? 'bg-white text-black border-white'
                          : 'bg-white/5 text-white border-white/20 hover:bg-white/10'
                      }`}
                      style={{ borderRadius: opt.value }}
                    >
                      {opt.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Intensywność cieni</h3>
                <div className="grid grid-cols-2 gap-1.5">
                  {SHADOW_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setShadowIntensity(opt.value)}
                      className={`px-3 py-2 text-xs font-medium border transition-all ${
                        shadowIntensity === opt.value
                          ? 'bg-white text-black border-white'
                          : 'bg-white/5 text-white border-white/20 hover:bg-white/10'
                      }`}
                    >
                      {opt.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Podgląd</h3>
                <div
                  className="p-4 border"
                  style={{
                    borderRadius: radius,
                    backgroundColor: bgColor,
                    borderColor: borderColor,
                    boxShadow: shadowIntensity === 'none' ? 'none' :
                               shadowIntensity === 'subtle' ? '0px 4px 12px rgba(0,0,0,0.05)' :
                               shadowIntensity === 'normal' ? '0px 8px 24px rgba(0,0,0,0.1)' :
                               '0px 16px 48px rgba(0,0,0,0.2)'
                  }}
                >
                  <p style={{ color: fgColor }} className="font-bold mb-1">Przykładowy tekst</p>
                  <button
                    style={{ backgroundColor: primaryColor, borderRadius: radius }}
                    className="px-3 py-1 text-white text-sm font-medium"
                  >
                    Przycisk
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-2 pt-4 border-t border-white/20">
            <button
              onClick={randomizeAll}
              className="w-full py-2.5 px-4 bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-wide hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 rounded"
            >
              <Shuffle className="w-4 h-4" />
              Losuj wszystko
            </button>

            <button
              onClick={resetToDefault}
              className="w-full py-2.5 px-4 bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-wide hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 rounded"
            >
              <RotateCcw className="w-4 h-4" />
              Reset do domyślnych
            </button>

            <button
              onClick={exportTheme}
              className="w-full py-2.5 px-4 bg-primary text-black font-bold text-xs uppercase tracking-wide hover:bg-primary/80 transition-all flex items-center justify-center gap-2 rounded"
            >
              <Copy className="w-4 h-4" />
              Eksportuj motyw
            </button>
          </div>

          <div className="pt-3 border-t border-white/20 text-center">
            <p className="text-[10px] text-white/30 uppercase tracking-widest">LECH-BUD Design System</p>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
