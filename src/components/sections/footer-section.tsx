"use client"

import { Phone, Clock, MapPin, ShieldCheck } from "lucide-react"
import { navLinks as defaultNavLinks } from "./nav-section"

interface FooterSectionProps {
  brandName?: string
  brandDescription?: string
  badge?: string
  phone?: string
  phoneFormatted?: string
  hours?: string
  location?: string
  copyright?: string
  navLinks?: typeof defaultNavLinks
  whatsappNumber?: string
}

export function FooterSection({
  brandName = "LECH-BUD",
  brandDescription = "Firma remontowo-budowlana z 40-letnim doświadczeniem. Biurowce, domy kultury, wspólnoty mieszkaniowe i prywatne łazienki.",
  badge = "Od 1986 roku",
  phone = "607176748",
  phoneFormatted = "607 176 748",
  hours = "wt-pt od 07:00",
  location = "Kielce i okolice",
  copyright = "LECH-BUD Leszek Kozieł",
  navLinks = defaultNavLinks,
  whatsappNumber = "48607176748",
}: FooterSectionProps) {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Brand Column */}
          <div>
            <div className="flex justify-center sm:justify-start">
              <a href="/" className="text-3xl font-bold text-foreground tracking-tight">
                {brandName}
              </a>
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-muted-foreground sm:max-w-xs sm:text-left">
              {brandDescription}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 bg-gold/10 text-gold border border-gold/20 px-4 py-2 rounded-sm text-sm font-semibold">
              <ShieldCheck className="w-4 h-4" />
              {badge}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-2">
            {/* Nawigacja */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-foreground">Nawigacja</p>

              <ul className="mt-8 space-y-4 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      className="text-muted-foreground transition hover:text-primary"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-foreground">Social Media</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    href="https://facebook.com"
                    rel="noreferrer"
                    target="_blank"
                    className="flex items-center justify-center gap-2 sm:justify-start text-muted-foreground hover:text-primary transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
                    </svg>
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    rel="noreferrer"
                    target="_blank"
                    className="flex items-center justify-center gap-2 sm:justify-start text-muted-foreground hover:text-primary transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://g.page"
                    rel="noreferrer"
                    target="_blank"
                    className="flex items-center justify-center gap-2 sm:justify-start text-muted-foreground hover:text-primary transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span>Google Opinie</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://oferteo.pl"
                    rel="noreferrer"
                    target="_blank"
                    className="flex items-center justify-center gap-2 sm:justify-start text-muted-foreground hover:text-primary transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <span>Oferteo</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://fixly.pl"
                    rel="noreferrer"
                    target="_blank"
                    className="flex items-center justify-center gap-2 sm:justify-start text-muted-foreground hover:text-primary transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                    </svg>
                    <span>Fixly</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Kontakt */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-foreground">Kontakt</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    href={`tel:${phone}`}
                    className="flex items-center justify-center gap-2 sm:justify-start text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{phoneFormatted}</span>
                  </a>
                </li>

                <li className="flex items-center justify-center gap-2 sm:justify-start text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{hours}</span>
                </li>

                <li className="flex items-center justify-center gap-2 sm:justify-start text-muted-foreground">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{location}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-muted-foreground">
              <span className="block sm:inline">Wszelkie prawa zastrzeżone.</span>

              <a
                className="inline-block text-primary underline transition hover:text-primary/75 ml-1"
                href="#"
              >
                Polityka prywatności
              </a>
            </p>

            <p className="mt-4 text-sm text-muted-foreground sm:order-first sm:mt-0">
              &copy; {new Date().getFullYear()} {copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
