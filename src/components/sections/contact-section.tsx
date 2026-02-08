"use client"

import { Phone, MapPin, Clock, ArrowRight } from "lucide-react"
import { contactContent as defaultContactContent } from "@/content/lech-bud/contact"

interface ContactSectionProps {
  content?: typeof defaultContactContent
}

export function ContactSection({ content = defaultContactContent }: ContactSectionProps) {
  const contactContent = content

  return (
    <section id="kontakt" className="min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Lewa strona - ciemna */}
      <div className="w-full lg:w-1/2 bg-secondary p-8 lg:p-24 flex flex-col justify-center relative">
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 max-w-xl mx-auto lg:mx-0">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">{contactContent.badge}</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-secondary-foreground mb-6 leading-tight">
            {contactContent.title}
            <div className="h-1.5 w-20 bg-primary mt-4 rounded-full" />
          </h2>
          <p className="text-secondary-foreground/70 text-lg mb-12 max-w-md leading-relaxed">
            {contactContent.description}
          </p>

          <div className="space-y-6">
            {contactContent.phone && (
              <a href={`tel:${contactContent.phone.replace(/\s/g, '')}`} className="flex items-center group p-4 rounded-xl hover:bg-secondary-foreground/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center mr-6 group-hover:bg-primary transition-colors">
                  <Phone className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-secondary-foreground/50 text-sm uppercase tracking-wide font-medium">Telefon</p>
                  <p className="text-secondary-foreground text-xl font-bold">{contactContent.phone}</p>
                </div>
              </a>
            )}

            {contactContent.address && (
              <div className="flex items-center group p-4 rounded-xl hover:bg-secondary-foreground/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center mr-6 group-hover:bg-primary transition-colors">
                  <MapPin className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-secondary-foreground/50 text-sm uppercase tracking-wide font-medium">Lokalizacja</p>
                  <p className="text-secondary-foreground text-xl font-bold leading-tight">{contactContent.address}</p>
                </div>
              </div>
            )}

            {contactContent.hours && (
              <div className="flex items-center group p-4 rounded-xl hover:bg-secondary-foreground/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center mr-6 group-hover:bg-primary transition-colors">
                  <Clock className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-secondary-foreground/50 text-sm uppercase tracking-wide font-medium">Godziny pracy</p>
                  <p className="text-secondary-foreground text-xl font-bold">{contactContent.hours}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Prawa strona - jasna */}
      <div className="w-full lg:w-1/2 bg-card p-8 lg:p-24 flex flex-col justify-center">
        <div className="max-w-xl mx-auto lg:ml-0 w-full">
          <h3 className="text-3xl font-bold text-foreground mb-8">{contactContent.formTitle}</h3>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactContent.fields?.filter(f => f.half).map((field, i) => (
                <div key={i} className="space-y-2">
                  <label className="block text-sm font-semibold text-foreground" htmlFor={`contact-${field.label.toLowerCase()}`}>{field.label}</label>
                  <input
                    className="w-full px-4 py-3 bg-muted border border-border text-foreground rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    id={`contact-${field.label.toLowerCase()}`}
                    name={field.label.toLowerCase()}
                    placeholder={field.placeholder}
                    type={field.type === 'textarea' ? 'text' : field.type}
                  />
                </div>
              ))}
            </div>

            {contactContent.fields?.filter(f => !f.half).map((field, i) => (
              <div key={i} className="space-y-2">
                <label className="block text-sm font-semibold text-foreground" htmlFor={`contact-${field.label.toLowerCase()}`}>{field.label}</label>
                {field.type === 'textarea' ? (
                  <textarea
                    className="w-full px-4 py-3 bg-muted border border-border text-foreground rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                    id={`contact-${field.label.toLowerCase()}`}
                    name={field.label.toLowerCase()}
                    placeholder={field.placeholder}
                    rows={5}
                  />
                ) : (
                  <input
                    className="w-full px-4 py-3 bg-muted border border-border text-foreground rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    id={`contact-${field.label.toLowerCase()}`}
                    name={field.label.toLowerCase()}
                    placeholder={field.placeholder}
                    type={field.type}
                  />
                )}
              </div>
            ))}

            <button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 rounded-lg flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20"
              type="submit"
            >
              <span>{contactContent.submitText}</span>
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
