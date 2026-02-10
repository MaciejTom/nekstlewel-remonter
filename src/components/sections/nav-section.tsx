"use client"

import { useState, useEffect } from "react"
import { Phone, Menu } from "lucide-react"

const defaultNavLinks = [
  { label: "Dlaczego my", href: "#dlaczego" },
  { label: "Usługi", href: "#uslugi" },
  { label: "Realizacje", href: "#realizacje" },
  { label: "Proces", href: "#proces" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
]

export { defaultNavLinks as navLinks }

interface NavSectionProps {
  brandName?: string
  brandLetter?: string
  brandLogo?: string
  phone?: string
  phoneFormatted?: string
  links?: typeof defaultNavLinks
  homeHref?: string
}

export function NavSection({
  brandName = "LECH-BUD",
  brandLetter = "L",
  brandLogo,
  phone = "607176748",
  phoneFormatted = "607 176 748",
  links = defaultNavLinks,
  homeHref = "/",
}: NavSectionProps) {
  const navLinks = links
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/10 shadow-sm h-20"
          : "bg-transparent border-b border-transparent h-24"
      }`}
    >
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <a href={homeHref} className="flex items-center gap-2">
            {brandLogo ? (
              <img src={brandLogo} alt={brandName} className="h-10 w-10 rounded-sm object-cover" />
            ) : (
              <div className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl rounded-sm">
                {brandLetter}
              </div>
            )}
            <span className="text-xl font-bold text-foreground tracking-tight">{brandName}</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href={`tel:${phone}`}
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            {phoneFormatted}
          </a>

          {/* Mobile menu button */}
          <button
            aria-label="Otwórz menu"
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-sm transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  )
}
