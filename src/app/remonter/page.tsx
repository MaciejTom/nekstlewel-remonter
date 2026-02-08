"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Phone,
  MapPin,
  Clock,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Menu,
  ShieldCheck,
  Handshake,
  Wrench,
  X,
} from "lucide-react"

// Content
import { heroContent } from "@/content/remonter/hero"
import { whyUsContent } from "@/content/remonter/why-us"
import { servicesContent } from "@/content/remonter/services"
import { processContent } from "@/content/remonter/process"
import { portfolioContent } from "@/content/remonter/portfolio"
import { faqContent } from "@/content/remonter/faq"
import { contactContent } from "@/content/remonter/contact"

// Config
const COMPANY = {
  name: "REMONTER",
  owner: "Kamil Makieła",
  phone: "123 456 789",
  phoneLink: "tel:123456789",
}

const navLinks = [
  { label: "Dlaczego my", href: "#dlaczego" },
  { label: "Usługi", href: "#uslugi" },
  { label: "Realizacje", href: "#realizacje" },
  { label: "Proces", href: "#proces" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
]

// Icon map for why-us
const iconMap: Record<string, React.ElementType> = {
  Handshake,
  Clock,
  Wrench,
  MapPin,
  ShieldCheck,
  Phone,
}

// ===========================================
// NAV SECTION
// ===========================================
function NavSection() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-background/95 backdrop-blur-md border-b border-border/10 shadow-sm h-20"
        : "bg-transparent border-b border-transparent h-24"
    }`}>
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          <a href="/remonter" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl rounded-lg">
              R
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">{COMPANY.name}</span>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={COMPANY.phoneLink}
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all"
          >
            <Phone className="w-4 h-4" />
            {COMPANY.phone}
          </a>

          <button className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  )
}

// ===========================================
// HERO SECTION
// ===========================================
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/remonter/hero.webp"
          alt="Wykończenia wnętrz"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 py-40 relative z-10">
        <div className="max-w-3xl">
          {heroContent.badge && (
            <span className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-4 py-2 text-sm font-semibold tracking-wide rounded-lg mb-8 animate-fade-up">
              <ShieldCheck className="w-4 h-4" />
              {heroContent.badge}
            </span>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8 animate-fade-up tracking-tight">
            {heroContent.headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line === heroContent.headlineAccent ? (
                  <span className="text-primary">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed animate-fade-up">
            {heroContent.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up">
            <a
              href={COMPANY.phoneLink}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all"
            >
              <Phone className="w-5 h-5" />
              {heroContent.ctaPrimary.text}
            </a>
            {heroContent.ctaSecondary && (
              <a
                href="#realizacje"
                className="inline-flex items-center justify-center gap-2 bg-card text-foreground border border-border px-8 py-4 text-lg font-semibold rounded-lg hover:bg-muted transition-all"
              >
                {heroContent.ctaSecondary.text}
                <ArrowRight className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ===========================================
// WHY US SECTION
// ===========================================
function WhyUsSection() {
  return (
    <section id="dlaczego" className="bg-muted/30 py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block">
            {whyUsContent.tagline}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            {whyUsContent.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {whyUsContent.services.map((item, index) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck
            return (
              <div key={index} className="group text-center p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ===========================================
// SERVICES SECTION
// ===========================================
function ServicesSection() {
  return (
    <section id="uslugi" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block">
            {servicesContent.tagline}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            {servicesContent.title} <span className="text-primary">{servicesContent.titleAccent}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{servicesContent.subtitle}</p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {servicesContent.services.map((service, index) => (
            <div key={index} className="group bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-bold text-lg shrink-0">
                  {service.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <span key={i} className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
          >
            <Phone className="w-5 h-5" />
            {servicesContent.cta.buttonText}
          </a>
        </div>
      </div>
    </section>
  )
}

// ===========================================
// PORTFOLIO SECTION
// ===========================================
function PortfolioSection() {
  return (
    <section id="realizacje" className="bg-muted/30 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block">
            {portfolioContent.tagline}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            {portfolioContent.title} <span className="text-primary">{portfolioContent.titleAccent}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{portfolioContent.subtitle}</p>
        </div>

        <div className="flex justify-center gap-8 mb-12">
          {portfolioContent.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`text-3xl font-bold ${stat.highlight ? 'text-primary' : 'text-foreground'}`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolioContent.projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              } ${project.wide ? 'lg:col-span-2' : ''}`}
            >
              <div className="aspect-[4/3] relative bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-white font-bold text-lg">{project.title}</h3>
                <p className="text-white/70 text-sm">{project.specs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===========================================
// PROCESS SECTION
// ===========================================
function ProcessSection() {
  return (
    <section id="proces" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            {processContent.title}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{processContent.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {processContent.steps.map((step, index) => (
            <div key={index} className="group relative">
              {index < processContent.steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 z-10">
                  <ChevronRight className="w-6 h-6 text-primary/30" />
                </div>
              )}
              <div className="bg-card border border-border/50 rounded-2xl p-6 h-full hover:border-primary/30 hover:-translate-y-2 transition-all">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-xl text-lg font-bold mb-4">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===========================================
// FAQ SECTION
// ===========================================
function FaqSection() {
  return (
    <section id="faq" className="bg-muted/30 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            {faqContent.title}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">{faqContent.subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqContent.items.map((item, index) => (
            <details key={index} className="group bg-card border border-border/50 rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/30 transition-colors">
                <span className="font-bold text-foreground pr-8">{item.question}</span>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-open:bg-primary group-open:text-primary-foreground transition-colors">
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                </div>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===========================================
// CONTACT SECTION
// ===========================================
function ContactSection() {
  return (
    <section id="kontakt" className="min-h-screen flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 bg-card p-8 lg:p-16 flex flex-col justify-center">
        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
          {contactContent.badge}
        </span>
        <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
          {contactContent.title}
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-md">{contactContent.description}</p>

        <div className="space-y-6">
          <a href={COMPANY.phoneLink} className="flex items-center group p-4 rounded-xl hover:bg-muted transition-all">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm uppercase tracking-wide">Telefon</p>
              <p className="text-foreground text-xl font-bold">{COMPANY.phone}</p>
            </div>
          </a>

          <div className="flex items-center p-4 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-6">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm uppercase tracking-wide">Lokalizacja</p>
              <p className="text-foreground text-xl font-bold">{contactContent.region}</p>
            </div>
          </div>

          <div className="flex items-center p-4 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-6">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm uppercase tracking-wide">Godziny</p>
              <p className="text-foreground text-xl font-bold">{contactContent.hours}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 bg-muted/30 p-8 lg:p-16 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-foreground mb-8">{contactContent.formTitle}</h3>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Imię</label>
              <input
                type="text"
                placeholder="Twoje imię"
                className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Telefon</label>
              <input
                type="tel"
                placeholder="Numer telefonu"
                className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Opis prac</label>
            <textarea
              placeholder="Opisz krótko, co trzeba zrobić..."
              rows={5}
              className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all"
          >
            {contactContent.submitText}
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  )
}

// ===========================================
// FOOTER
// ===========================================
function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center font-bold rounded-lg">
              R
            </div>
            <span className="font-bold text-foreground">{COMPANY.name}</span>
          </div>
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} {COMPANY.name} {COMPANY.owner}. Wszelkie prawa zastrzeżone.
          </p>
          <a href={COMPANY.phoneLink} className="text-primary font-semibold hover:underline">
            {COMPANY.phone}
          </a>
        </div>
      </div>
    </footer>
  )
}

// ===========================================
// MAIN PAGE
// ===========================================
export default function RemonterPage() {
  return (
    <main>
      <NavSection />
      <HeroSection />
      <WhyUsSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
