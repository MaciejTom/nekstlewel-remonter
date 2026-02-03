"use client"

import { useState, useEffect } from "react"
import {
  Phone,
  MapPin,
  FileText,
  Paintbrush,
  Grid3X3,
  Palette,
  Hammer,
  Thermometer,
  Wrench,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  ClipboardList,
  Clock,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react"
import Image from "next/image"
import { ServicesEditorialSection } from "@/components/sections/services-editorial-section"

import { heroContent } from "@/content/tom-art/hero"
import { servicesContent } from "@/content/tom-art/services"
import { tomArtServicesEditorial } from "@/content/tom-art/services-editorial"
import { processContent } from "@/content/tom-art/process"
import { whyUsContent } from "@/content/tom-art/why-us"
import { aboutContent } from "@/content/tom-art/about"
import { faqContent } from "@/content/tom-art/faq"
import { contactContent } from "@/content/tom-art/contact"

// Icon map for dynamic icon rendering
const iconMap: Record<string, React.ElementType> = {
  Phone,
  MapPin,
  FileText,
  Paintbrush,
  Grid3X3,
  Palette,
  Hammer,
  Thermometer,
  Wrench,
  CheckCircle,
}

// ===========================================
// NAV SECTION
// ===========================================
const navLinks = [
  { label: "Uslugi", href: "#uslugi" },
  { label: "Proces", href: "#proces" },
  { label: "Dlaczego my", href: "#dlaczego" },
  { label: "O mnie", href: "#o-mnie" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
]

function NavSection() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    // Check initial
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/10 shadow-sm h-20"
          : "bg-transparent border-b border-transparent h-24"
      }`}
    >
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-foreground tracking-tight">
            TOM-ART
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
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
            href="tel:690651606"
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            690 651 606
          </a>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors">
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
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/tom-art/hero.webp"
          alt="Odnowione wnetrze domu"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 via-40% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 py-40 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          {heroContent.badge && (
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 text-sm font-semibold tracking-wide rounded-full mb-8 animate-fade-up border border-primary/20 backdrop-blur-sm">
              {heroContent.badge}
            </span>
          )}

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-8 animate-fade-up tracking-tight"
            style={{ animationDelay: "0.1s" }}
          >
            {heroContent.headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line === heroContent.headlineAccent ? (
                  <span className="text-primary relative inline-block">
                    {line}
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                    </svg>
                  </span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            {heroContent.subtitle}
          </p>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="tel:690651606"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              {heroContent.ctaPrimary.text}
            </a>
            {heroContent.ctaSecondary && (
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 bg-white text-foreground border border-border px-8 py-4 text-lg font-semibold rounded-xl hover:bg-muted transition-all hover:border-primary/50"
              >
                {heroContent.ctaSecondary.text}
                <ArrowRight className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {heroContent.scrollText && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/80 animate-bounce cursor-pointer hover:text-primary transition-colors">
          <span className="text-sm font-medium tracking-widest uppercase text-[10px]">{heroContent.scrollText}</span>
          <div className="w-8 h-12 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-current rounded-full animate-scroll" />
          </div>
        </div>
      )}
    </section>
  )
}

// ===========================================
// SERVICES SECTION
// ===========================================
function ServicesSection() {
  return (
    <section id="uslugi" className="bg-muted/30 py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block">
            {servicesContent.tagline}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 h2-accent-center tracking-tight">
            {servicesContent.title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {servicesContent.subtitle}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesContent.services.map((service, index) => {
            const Icon = iconMap[service.icon] || Hammer
            return (
              <div
                key={index}
                className="group bg-card p-10 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center mb-8 group-hover:from-primary group-hover:to-primary/90 transition-all duration-300 shadow-inner group-hover:shadow-lg group-hover:shadow-primary/30">
                  <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                {/* Text */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}

          {/* CTA Card */}
          {servicesContent.ctaCard && (
            <div className="bg-secondary text-secondary-foreground p-10 rounded-lg flex flex-col items-center justify-center text-center shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <h3 className="text-2xl font-bold mb-4 relative z-10">
                {servicesContent.ctaCard.title}
              </h3>
              {servicesContent.ctaCard.description && (
                <p className="text-secondary-foreground/80 mb-8 relative z-10 leading-relaxed">
                  {servicesContent.ctaCard.description}
                </p>
              )}
              <a
                href="tel:690651606"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1 relative z-10"
              >
                <Phone className="w-5 h-5" />
                {servicesContent.ctaCard.buttonText}
              </a>
            </div>
          )}
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
    <section id="proces" className="bg-background py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 h2-accent-center tracking-tight">
            {processContent.title}
          </h2>
          {processContent.subtitle && (
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              {processContent.subtitle}
            </p>
          )}
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[39px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-primary/20 via-primary/20 to-transparent hidden md:block" />

          <div className="space-y-12">
            {processContent.steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row gap-8 items-start group"
              >
                {/* Step number */}
                <div className="shrink-0 z-10">
                  <div className="w-20 h-20 bg-background border-4 border-muted rounded-full flex items-center justify-center group-hover:border-primary transition-colors duration-300 shadow-sm">
                    <span className="text-3xl font-bold text-muted-foreground/50 group-hover:text-primary transition-colors">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-card border border-border/50 rounded-lg p-8 shadow-sm hover:shadow-md transition-all flex-1 group-hover:-translate-y-1 group-hover:border-primary/20">
                  <span className="text-xs font-bold text-primary tracking-widest uppercase mb-3 block">
                    {step.badge}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ===========================================
// WHY US SECTION
// ===========================================
const iconImageMap: Record<string, string> = {
  Wrench: "/images/tom-art/icons/wrench.png",
  MapPin: "/images/tom-art/icons/map-pin.png",
  Phone: "/images/tom-art/icons/direct-contact.png",
  CheckCircle: "/images/tom-art/icons/checks.png",
}

function WhyUsSection() {
  return (
    <section id="dlaczego" className="bg-secondary text-secondary-foreground py-32 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-black/20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block">
            {whyUsContent.tagline}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">{whyUsContent.title}</h2>
        </div>

        {/* USP grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {whyUsContent.services.map((usp, index) => {
            const iconSrc = iconImageMap[usp.icon] || iconImageMap.Wrench

            return (
              <div key={index} className="group transition-all duration-300 flex flex-col items-center text-center gap-6 hover:-translate-y-2">
                {/* Icon Container */}
                <div className="relative w-32 h-32 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                   {/* Paint accent */}
                   <div className="absolute inset-0 flex items-center justify-center -z-10">
                      <svg viewBox="0 0 200 200" className="w-[180%] h-[180%] text-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" fill="currentColor">
                        <path d="M45.7,143.6c-13.8-13.8-15.9-37.3-6.1-54.6c6.2-10.8,17.5-17.7,29.7-19.3c15.6-2.1,31.6,1.4,45.6,8.8 c17.4,9.2,31.7,24.6,38.8,42.6c6.3,16.1,6.1,34.8-2.6,49.6c-7.8,13.2-21.7,22.3-36.8,25.4c-18.7,3.8-38.6-1.5-53.7-12.2 C53.2,178.6,47.8,162.9,45.7,143.6z" transform="rotate(-15 100 100) scale(1.2 0.8)"/>
                      </svg>
                      <svg viewBox="0 0 200 200" className="w-[160%] h-[160%] text-primary/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="currentColor">
                         <path d="M42.7,-63.3C54.6,-54.3,63.1,-41.8,69.2,-28.6C75.3,-15.4,79,-1.5,75.3,10.8C71.6,23.1,60.6,33.8,49.5,43.2C38.4,52.6,27.2,60.7,14.6,65.3C2,69.9,-12,71,-24.8,66.3C-37.6,61.6,-49.2,51.1,-58.4,39.2C-67.6,27.3,-74.4,14,-73.4,1.3C-72.4,-11.4,-63.6,-23.5,-53.4,-33.8C-43.2,-44.1,-31.6,-52.6,-19.6,-61.5C-7.6,-70.4,4.8,-79.7,17.4,-79.9C30,-80.1,42.7,-71.2,42.7,-63.3Z" transform="translate(100 100) scale(1.1)" />
                      </svg>
                   </div>

                   <Image
                     src={iconSrc}
                     alt={usp.title}
                     width={110}
                     height={110}
                     sizes="(max-width: 768px) 80px, 110px"
                     className="w-full h-full object-contain drop-shadow-2xl relative z-10"
                   />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors leading-tight">{usp.title}</h3>
                  <p className="text-secondary-foreground/70 leading-relaxed text-sm">
                    {usp.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ===========================================
// ABOUT SECTION
// ===========================================
function AboutSection() {
  return (
    <section id="o-mnie" className="bg-background pt-32 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          {/* Left - content */}
          <div className="order-2 lg:order-1">
            <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block">
              {aboutContent.tagline}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 h2-accent tracking-tight">
              {aboutContent.title}
            </h2>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-6 mb-10">
              {aboutContent.description.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {aboutContent.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-muted/30 p-3 rounded-md border border-border/50">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground font-semibold">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - image placeholder */}
          <div className="order-1 lg:order-2 relative">
             <div className="absolute -inset-4 bg-primary/5 rounded-xl -z-10 rotate-3" />
             <div className="relative aspect-[4/5] bg-muted rounded-lg overflow-hidden shadow-2xl border-8 border-card">
              {/* Placeholder for AI image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground bg-muted/50">
                <div className="w-24 h-24 border-4 border-dashed border-primary/20 rounded-full flex items-center justify-center mb-6 bg-background shadow-inner">
                  <span className="text-5xl font-bold text-primary/40">T</span>
                </div>
                <span className="text-lg font-medium text-foreground">Zdjecie wlasciciela</span>
                <span className="text-sm text-muted-foreground/60 mt-2">
                  (placeholder)
                </span>
              </div>
            </div>

            {/* Decorative card overlay */}
            <div className="absolute -bottom-10 -left-10 bg-card p-6 rounded-lg shadow-xl border border-border/50 max-w-[200px] hidden md:block animate-fade-up">
               <div className="flex items-center gap-2 mb-2">
                 <div className="flex -space-x-2">
                   {[1,2,3].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-card" />
                   ))}
                 </div>
               </div>
               <p className="text-sm font-bold text-foreground">Zadowoleni klienci</p>
               <div className="flex items-center gap-1 mt-1">
                 {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-4 bg-primary rounded-full" />)}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutCTASection() {
  return (
    <section className="bg-background pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-secondary rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Gotowy na zmiany w swoim domu?
              </h3>
              <p className="text-gray-400">
                Umów się na bezpłatną wycenę i sprawdź termin.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1 text-lg"
              >
                <ClipboardList className="w-6 h-6" />
                Zamów bezpłatną wycenę
              </a>
            </div>
          </div>
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
    <section id="faq" className="bg-muted/30 py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 h2-accent-center tracking-tight">
            {faqContent.title}
          </h2>
          {faqContent.subtitle && (
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              {faqContent.subtitle}
            </p>
          )}
        </div>

        {/* FAQ items */}
        <div className="max-w-3xl mx-auto space-y-6">
          {faqContent.items.map((item, index) => (
            <details
              key={index}
              className="group bg-card border border-border/50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <summary className="flex items-center justify-between p-8 cursor-pointer hover:bg-muted/30 transition-colors select-none">
                <span className="font-bold text-lg text-foreground pr-8">
                  {item.question}
                </span>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-open:bg-primary group-open:text-white transition-colors">
                  <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </div>
              </summary>
              <div className="px-8 pb-8 pt-0 text-muted-foreground leading-relaxed animate-fade-in">
                <div className="pt-4 border-t border-border/50">
                   {item.answer}
                </div>
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
    <section id="kontakt" className="bg-background py-32 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          {/* Left - info */}
          <div className="order-2 lg:order-1">
            {contactContent.badge && (
              <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block">
                {contactContent.badge}
              </span>
            )}
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 h2-accent tracking-tight">
              {contactContent.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              {contactContent.description}
            </p>

            {/* Contact items */}
            {contactContent.contactItems && (
              <div className="space-y-6">
                {contactContent.contactItems.map((item, i) => {
                  const Icon = iconMap[item.icon || "Phone"] || Phone

                  // Helper for labels
                  let subLabel = "Informacje"
                  if (item.icon === "Phone") subLabel = "Telefon"
                  if (item.icon === "MapPin") subLabel = "Lokalizacja"
                  if (item.icon === "FileText") subLabel = "Dane firmowe"

                  return (
                    <div
                      key={i}
                      className="flex items-center gap-6 p-6 rounded-lg border border-border/60 bg-white/50 backdrop-blur-sm hover:border-primary/50 hover:bg-white hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-border/50 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <span className="block text-sm text-muted-foreground mb-1 font-medium">{subLabel}</span>
                        {item.icon === "Phone" ? (
                           <a href={`tel:${item.label.replace(/\s/g, '')}`} className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                             {item.label}
                           </a>
                        ) : (
                           <span className="text-xl font-bold text-foreground block">
                             {item.label}
                           </span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Right - form */}
          <div className="order-1 lg:order-2 h-full">
            <div className="relative h-full">
               <div className="bg-white border border-border/40 rounded-xl p-8 md:p-12 shadow-xl relative overflow-hidden h-full flex flex-col justify-center">
                {/* Subtle pattern inside form */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <h3 className="text-2xl font-bold text-foreground mb-8 relative z-10">
                  {contactContent.formTitle}
                </h3>
                <form className="space-y-5 relative z-10 flex-1 flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {contactContent.fields.map((field, i) => (
                      <div
                        key={i}
                        className={field.half ? "" : "col-span-1 md:col-span-2"}
                      >
                        <label className="block text-sm font-bold text-foreground/70 mb-2 ml-1">
                          {field.label}
                        </label>
                        {field.type === "textarea" ? (
                          <textarea
                            placeholder={field.placeholder}
                            required
                            className="w-full bg-muted/20 border border-border/60 rounded-lg px-5 py-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all duration-300 shadow-sm min-h-[220px] resize-none"
                          />
                        ) : (
                          <input
                            type={field.type}
                            placeholder={field.placeholder}
                            required
                            className="w-full bg-muted/20 border border-border/60 rounded-lg px-5 py-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all duration-300 shadow-sm"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto pt-4">
                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold hover:bg-primary/90 transition-all hover:shadow-lg shadow-primary/25 flex items-center justify-center gap-3 group mt-4"
                    >
                      <span>{contactContent.submitText}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-xs text-center text-muted-foreground mt-4">
                      * Wycena jest całkowicie darmowa i niezobowiązująca.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ===========================================
// FOOTER
// ===========================================
function Footer() {
  return (
    <footer className="bg-secondary text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-5 pr-8">
            <a href="/" className="inline-block text-4xl font-bold tracking-tight mb-6 text-white">
              TOM-ART
            </a>
            <p className="text-gray-300 leading-relaxed text-lg mb-8 max-w-md">
              Profesjonalne usługi remontowo-wykończeniowe. <br/>
              Kompleksowe remonty wnętrz na terenie Rzepiennika i okolic Tarnowa.
            </p>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-xl mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-primary block"></span>
              Nawigacja
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary hover:pl-2 transition-all flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-xl mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-primary block"></span>
              Szybki kontakt
            </h4>
            <ul className="space-y-6">
              <li>
                <a href="tel:690651606" className="group flex items-center gap-4 hover:text-primary transition-colors">
                   <Phone className="w-8 h-8 text-primary" />
                   <div>
                      <span className="block text-xs text-gray-400 uppercase tracking-wider mb-0.5">Zadzwoń teraz</span>
                      <span className="text-2xl font-bold text-white group-hover:text-primary transition-colors">690 651 606</span>
                   </div>
                </a>
              </li>
              <li className="flex items-center gap-4">
                 <FileText className="w-8 h-8 text-primary/70" />
                 <div>
                    <span className="block text-xs text-gray-400 uppercase tracking-wider mb-0.5">Dane firmowe</span>
                    <span className="text-lg text-gray-200">NIP: 9930712739</span>
                 </div>
              </li>
              <li className="flex items-center gap-4">
                 <MapPin className="w-8 h-8 text-primary/70" />
                 <div>
                    <span className="block text-xs text-gray-400 uppercase tracking-wider mb-0.5">Lokalizacja</span>
                    <span className="text-lg text-gray-200">Rzepiennik Suchy i okolice</span>
                 </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10 mt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} TOM-ART Tomasz Wszołek. Wszelkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Polityka prywatności</a>
            <span className="w-1 h-1 bg-gray-600 rounded-full" />
            <a href="#" className="hover:text-primary transition-colors">Regulamin</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ===========================================
// MAIN PAGE
// ===========================================
export default function HomePage() {
  return (
    <main className="selection:bg-primary/20 selection:text-primary">
      <NavSection />
      <HeroSection />
      <ServicesEditorialSection content={tomArtServicesEditorial} />
      <ProcessSection />
      <WhyUsSection />
      <AboutSection />
      <AboutCTASection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
