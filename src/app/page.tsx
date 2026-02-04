"use client"

import { useState, useEffect, useRef } from "react"
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
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Menu,
  Clock,
  ShieldCheck,
  X,
} from "lucide-react"
import Image from "next/image"
import { ServicesEditorialSection } from "@/components/sections/services-editorial-section"

import { heroContent } from "@/content/lech-bud/hero"
import { servicesEditorialContent } from "@/content/lech-bud/services-editorial"
import { processContent } from "@/content/lech-bud/process"
import { whyUsContent } from "@/content/lech-bud/why-us"
import { portfolioContent } from "@/content/lech-bud/portfolio"
import { faqContent } from "@/content/lech-bud/faq"
import { contactContent } from "@/content/lech-bud/contact"

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
  { label: "Dlaczego my", href: "#dlaczego" },
  { label: "Usługi", href: "#uslugi" },
  { label: "Realizacje", href: "#realizacje" },
  { label: "Proces", href: "#proces" },
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
          ? "bg-background/95 backdrop-blur-md border-b border-border/10 shadow-sm h-20"
          : "bg-transparent border-b border-transparent h-24"
      }`}
    >
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl rounded-sm">
              L
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">LECH-BUD</span>
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
            href="tel:607176748"
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            607 176 748
          </a>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2 text-foreground hover:bg-muted rounded-sm transition-colors">
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
          src="/heroLech.jpg"
          alt="Realizacja Lech-Bud"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 via-50% to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 py-40 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          {heroContent.badge && (
            <span className="inline-flex items-center gap-2 bg-gold/10 text-gold border border-gold/20 px-4 py-2 text-sm font-semibold tracking-wide rounded-sm mb-8 animate-fade-up backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4" />
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
              href="tel:607176748"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold rounded-sm shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              {heroContent.ctaPrimary.text}
            </a>
            {heroContent.ctaSecondary && (
              <a
                href="#realizacje"
                className="inline-flex items-center justify-center gap-2 bg-white text-foreground border border-border px-8 py-4 text-lg font-semibold rounded-sm hover:bg-muted transition-all hover:border-primary/50"
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
// PROCESS SECTION
// ===========================================
function ProcessSection() {
  return (
    <section id="proces" className="bg-background py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 h2-accent-center tracking-tight">
            {processContent.title}
          </h2>
          {processContent.subtitle && (
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              {processContent.subtitle}
            </p>
          )}
        </div>

        {/* Steps - horizontal grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {processContent.steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Connecting arrow (hidden on mobile and last item) */}
              {index < processContent.steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 z-10">
                  <ChevronRight className="w-6 h-6 text-primary/30" />
                </div>
              )}

              {/* Card */}
              <div className="bg-card border border-border/50 rounded-sm p-6 h-full hover:shadow-lg transition-all group-hover:-translate-y-2 group-hover:border-primary/30 relative overflow-hidden">
                {/* Large number background */}
                <span className="absolute -top-4 -right-2 text-[120px] font-bold text-primary/5 leading-none select-none">
                  {index + 1}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-sm text-lg font-bold mb-4">
                    {index + 1}
                  </span>
                  <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">
                    {step.badge}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===========================================
// WHY US SECTION
// ===========================================
const iconImageMap: Record<string, string> = {
  Clock: "/images/lech-bud/Whisk_c259a637d38e05184f441dba9d60e8b9dr-removebg-preview.png",
  ShieldCheck: "/images/lech-bud/Whisk_0ff055529f5e3bbad9e46ad59dc41e6adr-removebg-preview (1).png",
  Building2: "/images/lech-bud/Whisk_5a4e3a2f16e5378a518405bddd9d228fdr-removebg-preview.png",
  CalendarCheck: "/images/lech-bud/checks.png",
}

function WhyUsSection() {
  return (
    <section id="dlaczego" className="bg-muted/40 py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px] translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-28 max-w-3xl mx-auto">
          <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block">
            {whyUsContent.tagline}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 h2-accent-center tracking-tight">{whyUsContent.title}</h2>
        </div>

        {/* USP grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {whyUsContent.services.map((usp, index) => {
            const iconSrc = iconImageMap[usp.icon] || iconImageMap.Clock

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
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors leading-tight">{usp.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
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
// GALLERY SLIDER (responsive: 1 mobile, 2 tablet, 4 desktop)
// ===========================================
function GallerySlider({ projects, onImageClick }: { projects: typeof portfolioContent.projects; onImageClick: (index: number) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const totalItems = projects.length

  const goNext = () => {
    setCurrentIndex(prev => (prev + 1) % totalItems)
  }

  const goPrev = () => {
    setCurrentIndex(prev => (prev === 0 ? totalItems - 1 : prev - 1))
  }

  // Swipe handlers
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > minSwipeDistance) goNext()
    if (distance < -minSwipeDistance) goPrev()
  }

  // Triple the projects for infinite loop illusion
  const extendedProjects = [...projects, ...projects, ...projects]

  return (
    <div className="relative px-8 md:px-0" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      {/* Navigation buttons */}
      <button
        onClick={goPrev}
        className="absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-primary/80 transition-all hover:scale-110"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={goNext}
        className="absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-primary/80 transition-all hover:scale-110"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Sliding container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(${-currentIndex} * var(--slide-width, 25%)))`,
          }}
        >
          {extendedProjects.map((project, i) => (
            <div
              key={i}
              onClick={() => onImageClick(i % totalItems)}
              className="group relative rounded-sm overflow-hidden shadow-lg flex-shrink-0 w-[calc(100%-0px)] sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] cursor-pointer"
            >
              <div className="relative bg-muted/20 aspect-[3/4]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <span className="inline-block bg-primary/90 text-primary-foreground text-xs font-semibold px-2 py-1 rounded-sm mb-2">
                  {project.category}
                </span>
                <h3 className="text-sm font-bold text-white mb-1 group-hover:text-primary transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-white/70 text-xs line-clamp-1">{project.specs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-primary w-6' : 'bg-foreground/20 hover:bg-foreground/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// ===========================================
// PORTFOLIO SECTION
// ===========================================
function PortfolioSection({ onImageClick }: { onImageClick: (index: number) => void }) {
  return (
    <section id="realizacje" className="bg-muted/30 py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block">
              {portfolioContent.tagline}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              {portfolioContent.title}{" "}
              <span className="text-primary">{portfolioContent.titleAccent}</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              {portfolioContent.subtitle}
            </p>
          </div>

          {/* Stats */}
          {portfolioContent.stats && (
            <div className="flex gap-8">
              {portfolioContent.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className={`text-4xl font-bold ${stat.highlight ? 'text-gold' : 'text-foreground'}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Horizontal scroll gallery */}
        <GallerySlider projects={portfolioContent.projects} onImageClick={onImageClick} />

        {/* Gallery button */}
        {portfolioContent.galleryButton && (
          <div className="text-center mt-12">
            <a
              href={portfolioContent.galleryButton.href}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              {portfolioContent.galleryButton.text}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        )}
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
            <a href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl rounded-sm">
                L
              </div>
              <span className="text-3xl font-bold text-white tracking-tight">LECH-BUD</span>
            </a>
            <p className="text-gray-300 leading-relaxed text-lg mb-8 max-w-md">
              40 lat doświadczenia w remontach wnętrz.<br/>
              Biurowce, domy kultury, wspólnoty mieszkaniowe i prywatne łazienki w Kielcach i okolicach.
            </p>
            {/* Certificate badge */}
            <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/20 rounded-sm px-4 py-2">
              <ShieldCheck className="w-5 h-5 text-gold" />
              <span className="text-gold text-sm font-semibold">Od 1986 roku</span>
            </div>
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
                <a href="tel:607176748" className="group flex items-center gap-4 hover:text-primary transition-colors">
                   <Phone className="w-8 h-8 text-primary" />
                   <div>
                      <span className="block text-xs text-gray-400 uppercase tracking-wider mb-0.5">Zadzwoń teraz</span>
                      <span className="text-2xl font-bold text-white group-hover:text-primary transition-colors">607 176 748</span>
                   </div>
                </a>
              </li>
              <li className="flex items-center gap-4">
                 <Clock className="w-8 h-8 text-primary/70" />
                 <div>
                    <span className="block text-xs text-gray-400 uppercase tracking-wider mb-0.5">Godziny pracy</span>
                    <span className="text-lg text-gray-200">wt-pt od 07:00</span>
                 </div>
              </li>
              <li className="flex items-center gap-4">
                 <MapPin className="w-8 h-8 text-primary/70" />
                 <div>
                    <span className="block text-xs text-gray-400 uppercase tracking-wider mb-0.5">Lokalizacja</span>
                    <span className="text-lg text-gray-200">Kielce i okolice</span>
                 </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10 mt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} LECH-BUD Leszek Kozieł. Wszelkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-6">
            <span className="text-gray-500">Realizacja: Nekst Lewel</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ===========================================
// LIGHTBOX COMPONENT (rendered at root level)
// ===========================================
function Lightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNext,
  onPrev
}: {
  isOpen: boolean
  onClose: () => void
  images: typeof portfolioContent.projects
  currentIndex: number
  onNext: () => void
  onPrev: () => void
}) {
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > 50) onNext()
    if (distance < -50) onPrev()
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/95 flex items-center justify-center"
      style={{ zIndex: 9999 }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all z-10"
      >
        <X className="w-6 h-6" />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="relative w-full h-full max-w-5xl max-h-[90vh] mx-4">
        <Image
          src={images[currentIndex].image}
          alt={images[currentIndex].title}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>

      <div className="absolute bottom-4 left-0 right-0 text-center text-white">
        <h3 className="text-xl font-bold mb-1">{images[currentIndex].title}</h3>
        <p className="text-white/70">{images[currentIndex].specs}</p>
        <p className="text-white/50 text-sm mt-2">{currentIndex + 1} / {images.length}</p>
      </div>
    </div>
  )
}

// ===========================================
// MAIN PAGE
// ===========================================
export default function HomePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const projects = portfolioContent.projects

  const openLightbox = (index: number) => {
    setLightboxIndex(index % projects.length)
    setLightboxOpen(true)
  }

  const lightboxNext = () => {
    setLightboxIndex(prev => (prev + 1) % projects.length)
  }

  const lightboxPrev = () => {
    setLightboxIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  return (
    <>
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={projects}
        currentIndex={lightboxIndex}
        onNext={lightboxNext}
        onPrev={lightboxPrev}
      />
      <main className="selection:bg-primary/20 selection:text-primary">
        <NavSection />
        <HeroSection />
        <WhyUsSection />
        <ServicesEditorialSection id="uslugi" content={servicesEditorialContent} />
        <PortfolioSection onImageClick={openLightbox} />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
