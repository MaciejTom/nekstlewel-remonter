"use client"

import { Phone, MapPin, Clock, ArrowRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="kontakt" className="min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Lewa strona - ciemna */}
      <div className="w-full lg:w-1/2 bg-secondary p-8 lg:p-24 flex flex-col justify-center relative">
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 max-w-xl mx-auto lg:mx-0">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Kontakt</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-secondary-foreground mb-6 leading-tight">
            Zadzwoń do Leszka
            <div className="h-1.5 w-20 bg-primary mt-4 rounded-full" />
          </h2>
          <p className="text-secondary-foreground/70 text-lg mb-12 max-w-md leading-relaxed">
            40 lat doświadczenia odbiera telefon. Zadzwoń, opisz co potrzebujesz. Umówimy się na oględziny i wycenę. Reszta to nasza robota.
          </p>

          <div className="space-y-6">
            <a href="tel:607176748" className="flex items-center group p-4 rounded-xl hover:bg-secondary-foreground/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center mr-6 group-hover:bg-primary transition-colors">
                <Phone className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-secondary-foreground/50 text-sm uppercase tracking-wide font-medium">Telefon</p>
                <p className="text-secondary-foreground text-xl font-bold">607 176 748</p>
              </div>
            </a>

            <div className="flex items-center group p-4 rounded-xl hover:bg-secondary-foreground/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center mr-6 group-hover:bg-primary transition-colors">
                <MapPin className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-secondary-foreground/50 text-sm uppercase tracking-wide font-medium">Lokalizacja</p>
                <p className="text-secondary-foreground text-xl font-bold leading-tight">Jana Nowaka-Jeziorańskiego 73,<br />25-432 Kielce</p>
              </div>
            </div>

            <div className="flex items-center group p-4 rounded-xl hover:bg-secondary-foreground/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center mr-6 group-hover:bg-primary transition-colors">
                <Clock className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-secondary-foreground/50 text-sm uppercase tracking-wide font-medium">Godziny pracy</p>
                <p className="text-secondary-foreground text-xl font-bold">wt-pt od 07:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prawa strona - jasna */}
      <div className="w-full lg:w-1/2 bg-card p-8 lg:p-24 flex flex-col justify-center">
        <div className="max-w-xl mx-auto lg:ml-0 w-full">
          <h3 className="text-3xl font-bold text-foreground mb-8">Bezpłatna wycena</h3>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-foreground" htmlFor="contact-name">Imię</label>
                <input
                  className="w-full px-4 py-3 bg-muted border border-border text-foreground rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  id="contact-name"
                  name="name"
                  placeholder="Twoje imię"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-foreground" htmlFor="contact-phone">Telefon</label>
                <input
                  className="w-full px-4 py-3 bg-muted border border-border text-foreground rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  id="contact-phone"
                  name="phone"
                  placeholder="Numer telefonu"
                  type="tel"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-foreground" htmlFor="contact-message">Opis prac</label>
              <textarea
                className="w-full px-4 py-3 bg-muted border border-border text-foreground rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                id="contact-message"
                name="message"
                placeholder="Opisz krótko, co trzeba zrobić..."
                rows={5}
              />
            </div>

            <button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 rounded-lg flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20"
              type="submit"
            >
              <span>Wyślij zapytanie</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-center text-xs text-muted-foreground italic mt-6">
              * Wycena jest całkowicie darmowa i niezobowiązująca.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
