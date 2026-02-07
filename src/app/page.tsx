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
  Mail,
  Send,
  MessageSquare,
  User,
  Building2,
  Settings,
  Shuffle,
  RotateCcw,
  ArrowLeftRight,
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
import { ThemeSwitcher } from "@/components/theme-switcher"

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
          src="/heroLech.webp"
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
                  <span className="text-sm font-bold text-primary tracking-widest uppercase mb-2 block">
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
// GALLERY VARIANTS
// ===========================================

// Wariant 2: Mosaic Grid - układ z wyższymi zdjęciami
function GalleryVariant2() {
  // Definiujemy które projekty mają być wyższe (row-span-2)
  const projectsWithSpan = [
    { ...portfolioContent.projects[0], span: "" },
    { ...portfolioContent.projects[1], span: "lg:row-span-2" },
    { ...portfolioContent.projects[2], span: "" },
    { ...portfolioContent.projects[3], span: "" },
    { ...portfolioContent.projects[4], span: "lg:row-span-2" },
    { ...portfolioContent.projects[5], span: "" },
    { ...portfolioContent.projects[6], span: "" },
  ]

  return (
    <section id="realizacje" className="w-full bg-muted/30 py-24 px-4 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
            Portfolio
          </span>
          <h2 className="text-foreground text-4xl md:text-5xl font-bold mt-3">
            Nasze realizacje
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Każdy projekt to osobna historia. Zobacz efekty naszej pracy.
          </p>
        </div>

        {/* Mosaic Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          style={{ gridAutoRows: "280px" }}
        >
          {projectsWithSpan.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-sm ${project.span}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur border border-primary/30 px-3 py-1 z-20">
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest">
                  {project.category}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm mt-1">{project.specs}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 text-primary hover:text-foreground transition-colors group"
          >
            <span className="text-lg font-medium">Chcesz podobny efekt?</span>
            <span className="bg-primary text-primary-foreground px-6 py-3 font-bold tracking-widest uppercase text-sm group-hover:bg-foreground transition-colors">
              Napisz
            </span>
          </a>
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
              className="group bg-card border border-border/50 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all"
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
// FOOTER
// ===========================================
function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Brand Column */}
          <div>
            <div className="flex justify-center sm:justify-start">
              <a href="/" className="text-3xl font-bold text-foreground tracking-tight">
                LECH-BUD
              </a>
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-muted-foreground sm:max-w-xs sm:text-left">
              Firma remontowo-budowlana z 40-letnim doświadczeniem. Biurowce, domy kultury, wspólnoty mieszkaniowe i prywatne łazienki.
            </p>

            {/* Badge */}
            <div className="mt-6 inline-flex items-center gap-2 bg-gold/10 text-gold border border-gold/20 px-4 py-2 rounded-sm text-sm font-semibold">
              <ShieldCheck className="w-4 h-4" />
              Od 1986 roku
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
                    href="https://wa.me/48607176748"
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
                    href="tel:607176748"
                    className="flex items-center justify-center gap-2 sm:justify-start text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>607 176 748</span>
                  </a>
                </li>

                <li className="flex items-center justify-center gap-2 sm:justify-start text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>wt-pt od 07:00</span>
                </li>

                <li className="flex items-center justify-center gap-2 sm:justify-start text-muted-foreground">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Kielce i okolice</span>
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
              &copy; {new Date().getFullYear()} LECH-BUD Leszek Kozieł
            </p>
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
// CONTROL PANEL - Design System Dashboard
// ===========================================

// Rozszerzona paleta kolorów (70 kolorów)
const COLOR_PALETTE = [
  // Biele i kremowe
  '#ffffff', '#fefefe', '#fafafa', '#f5f5f5', '#fffbf5', '#fef7ed', '#fef3c7', '#fefce8',
  // Szare jasne
  '#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b',
  // Szare ciemne
  '#475569', '#334155', '#1e293b', '#0f172a', '#020617',
  // Czerwone
  '#fef2f2', '#fee2e2', '#fca5a5', '#f87171', '#ef4444', '#dc2626', '#b91c1c', '#991b1b', '#7f1d1d',
  // Pomarańczowe
  '#fff7ed', '#ffedd5', '#fdba74', '#fb923c', '#f97316', '#ea580c', '#c2410c', '#9a3412',
  // Żółte / Złote
  '#fefce8', '#fef08a', '#facc15', '#eab308', '#ca8a04', '#a16207', '#854d0e', '#d97706',
  // Zielone
  '#f0fdf4', '#dcfce7', '#86efac', '#4ade80', '#22c55e', '#16a34a', '#15803d', '#166534', '#14532d',
  // Cyjan / Teal
  '#f0fdfa', '#99f6e4', '#2dd4bf', '#14b8a6', '#0d9488', '#0f766e', '#115e59',
  // Niebieskie
  '#eff6ff', '#dbeafe', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#1e3a8a',
  // Granatowe / Navy
  '#1d3557', '#14213d', '#0a1628', '#172554',
  // Fioletowe
  '#faf5ff', '#e9d5ff', '#c084fc', '#a855f7', '#9333ea', '#7c3aed', '#6d28d9', '#5b21b6',
  // Różowe
  '#fdf2f8', '#fbcfe8', '#f472b6', '#ec4899', '#db2777', '#be185d',
  // Brązowe / Ciepłe
  '#fdf4e3', '#f3ede4', '#e8e1d5', '#d6ccc2', '#a8a29e', '#78716c', '#57534e', '#44403c',
  // Czarne
  '#171717', '#000000',
]

// Rozszerzona lista czcionek (24 opcje)
const FONT_OPTIONS = [
  // Sans-serif nowoczesne
  { name: 'Inter', family: "'Inter', sans-serif", category: 'sans' },
  { name: 'DM Sans', family: "'DM Sans', sans-serif", category: 'sans' },
  { name: 'Outfit', family: "'Outfit', sans-serif", category: 'sans' },
  { name: 'Plus Jakarta', family: "'Plus Jakarta Sans', sans-serif", category: 'sans' },
  { name: 'Manrope', family: "'Manrope', sans-serif", category: 'sans' },
  { name: 'Space Grotesk', family: "'Space Grotesk', sans-serif", category: 'sans' },
  { name: 'Bricolage', family: "'Bricolage Grotesque', sans-serif", category: 'sans' },
  { name: 'Syne', family: "'Syne', sans-serif", category: 'sans' },
  // Sans-serif klasyczne
  { name: 'Roboto', family: "'Roboto', sans-serif", category: 'sans' },
  { name: 'Open Sans', family: "'Open Sans', sans-serif", category: 'sans' },
  { name: 'Lato', family: "'Lato', sans-serif", category: 'sans' },
  { name: 'Montserrat', family: "'Montserrat', sans-serif", category: 'sans' },
  { name: 'Poppins', family: "'Poppins', sans-serif", category: 'sans' },
  { name: 'Raleway', family: "'Raleway', sans-serif", category: 'sans' },
  { name: 'Work Sans', family: "'Work Sans', sans-serif", category: 'sans' },
  { name: 'Rubik', family: "'Rubik', sans-serif", category: 'sans' },
  // Display / Nagłówkowe
  { name: 'Oswald', family: "'Oswald', sans-serif", category: 'display' },
  { name: 'Bebas Neue', family: "'Bebas Neue', sans-serif", category: 'display' },
  { name: 'Archivo Black', family: "'Archivo Black', sans-serif", category: 'display' },
  // Serif
  { name: 'Playfair', family: "'Playfair Display', serif", category: 'serif' },
  { name: 'Cormorant', family: "'Cormorant Garamond', serif", category: 'serif' },
  { name: 'Libre Baskerville', family: "'Libre Baskerville', serif", category: 'serif' },
  { name: 'Merriweather', family: "'Merriweather', serif", category: 'serif' },
  { name: 'DM Serif', family: "'DM Serif Display', serif", category: 'serif' },
]

// Presety tematów (12 gotowych kombinacji)
const THEME_PRESETS = [
  {
    name: 'Warm Classic',
    desc: 'Kremowy + Granat + Czerwony',
    background: '#fffbf5',
    foreground: '#1d3557',
    primary: '#e63946',
    muted: '#f3ede4',
    border: '#e8e1d5',
    font: 'Inter',
  },
  {
    name: 'Industrial Orange',
    desc: 'Ciemny + Pomarańcz',
    background: '#0f172a',
    foreground: '#f1f5f9',
    primary: '#f97316',
    muted: '#1e293b',
    border: '#334155',
    font: 'Oswald',
  },
  {
    name: 'Industrial Yellow',
    desc: 'Ciemny + Żółty',
    background: '#171717',
    foreground: '#fafafa',
    primary: '#eab308',
    muted: '#262626',
    border: '#404040',
    font: 'Space Grotesk',
  },
  {
    name: 'Clean Blue',
    desc: 'Biały + Niebieski',
    background: '#ffffff',
    foreground: '#1e293b',
    primary: '#2563eb',
    muted: '#f1f5f9',
    border: '#e2e8f0',
    font: 'DM Sans',
  },
  {
    name: 'Trust Navy',
    desc: 'Jasny + Navy + Niebieski',
    background: '#f8fafc',
    foreground: '#14213d',
    primary: '#1d4ed8',
    muted: '#e2e8f0',
    border: '#cbd5e1',
    font: 'Plus Jakarta',
  },
  {
    name: 'Premium Gold',
    desc: 'Ciemny + Złoto',
    background: '#0a1628',
    foreground: '#fef7ed',
    primary: '#d97706',
    muted: '#172554',
    border: '#1e3a8a',
    font: 'Playfair',
  },
  {
    name: 'Nature Green',
    desc: 'Jasny + Zielony',
    background: '#fafafa',
    foreground: '#14532d',
    primary: '#16a34a',
    muted: '#f0fdf4',
    border: '#dcfce7',
    font: 'Outfit',
  },
  {
    name: 'Modern Minimal',
    desc: 'Biały + Czarny',
    background: '#ffffff',
    foreground: '#171717',
    primary: '#171717',
    muted: '#f5f5f5',
    border: '#e5e5e5',
    font: 'Manrope',
  },
  {
    name: 'Bold Red',
    desc: 'Biały + Czerwony mocny',
    background: '#fefefe',
    foreground: '#1e293b',
    primary: '#dc2626',
    muted: '#fef2f2',
    border: '#fca5a5',
    font: 'Bebas Neue',
  },
  {
    name: 'Elegant Purple',
    desc: 'Jasny + Fiolet',
    background: '#faf5ff',
    foreground: '#3b0764',
    primary: '#7c3aed',
    muted: '#e9d5ff',
    border: '#c084fc',
    font: 'Cormorant',
  },
  {
    name: 'Dark Slate',
    desc: 'Slate ciemny + Cyan',
    background: '#0f172a',
    foreground: '#e2e8f0',
    primary: '#14b8a6',
    muted: '#1e293b',
    border: '#334155',
    font: 'Bricolage',
  },
  {
    name: 'Warm Earth',
    desc: 'Beżowy + Brąz',
    background: '#fdf4e3',
    foreground: '#44403c',
    primary: '#78716c',
    muted: '#f3ede4',
    border: '#d6ccc2',
    font: 'Libre Baskerville',
  },
]

// Opcje zaokrągleń
const RADIUS_OPTIONS = [
  { name: 'Ostre', value: '0' },
  { name: 'Lekkie', value: '0.25rem' },
  { name: 'Normalne', value: '0.5rem' },
  { name: 'Okrągłe', value: '1rem' },
  { name: 'Bardzo okrągłe', value: '1.5rem' },
]

// Opcje cieni
const SHADOW_OPTIONS = [
  { name: 'Brak', value: 'none' },
  { name: 'Subtelne', value: 'subtle' },
  { name: 'Normalne', value: 'normal' },
  { name: 'Mocne', value: 'strong' },
]

function ControlPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'presets' | 'colors' | 'typography' | 'effects'>('presets')

  // Stan kolorów
  const [bgColor, setBgColor] = useState('#fffbf5')
  const [fgColor, setFgColor] = useState('#1d3557')
  const [primaryColor, setPrimaryColor] = useState('#e63946')
  const [mutedColor, setMutedColor] = useState('#f3ede4')
  const [borderColor, setBorderColor] = useState('#e8e1d5')

  // Stan typografii
  const [currentFont, setCurrentFont] = useState('Inter')

  // Stan efektów
  const [radius, setRadius] = useState('0.5rem')
  const [shadowIntensity, setShadowIntensity] = useState('normal')

  // Aktywny preset
  const [activePreset, setActivePreset] = useState('Warm Classic')

  // Efekt do aktualizacji wszystkich CSS variables
  useEffect(() => {
    const root = document.documentElement

    // Kolory główne
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

    // Kolory pochodne (card, secondary)
    root.style.setProperty('--card', bgColor === '#ffffff' || bgColor === '#fefefe' || bgColor === '#fafafa' ? '#ffffff' : bgColor)
    root.style.setProperty('--secondary', fgColor)
    root.style.setProperty('--secondary-foreground', bgColor)
  }, [bgColor, fgColor, primaryColor, mutedColor, borderColor])

  // Efekt do zmiany czcionki - ustawia zmienne CSS dla body i nagłówków
  useEffect(() => {
    const font = FONT_OPTIONS.find(f => f.name === currentFont)
    if (font) {
      document.documentElement.style.setProperty('--body-font', font.family)
      document.documentElement.style.setProperty('--heading-font', font.family)
    }
  }, [currentFont])

  // Efekt do zmiany zaokrągleń
  useEffect(() => {
    document.documentElement.style.setProperty('--radius', radius)
  }, [radius])

  // Efekt do zmiany cieni
  useEffect(() => {
    const root = document.documentElement
    const shadowMap: Record<string, { base: string; lg: string }> = {
      none: {
        base: 'none',
        lg: 'none',
      },
      subtle: {
        base: '0px 1px 3px rgba(0,0,0,0.05)',
        lg: '0px 4px 12px rgba(0,0,0,0.05)',
      },
      normal: {
        base: '0px 2px 6px rgba(0,0,0,0.08)',
        lg: '0px 8px 24px rgba(0,0,0,0.1)',
      },
      strong: {
        base: '0px 4px 12px rgba(0,0,0,0.15)',
        lg: '0px 16px 48px rgba(0,0,0,0.2)',
      },
    }
    const shadows = shadowMap[shadowIntensity]
    root.style.setProperty('--shadow-sm', shadows.base)
    root.style.setProperty('--shadow', shadows.base)
    root.style.setProperty('--shadow-md', shadows.lg)
    root.style.setProperty('--shadow-lg', shadows.lg)
    root.style.setProperty('--shadow-xl', shadows.lg)
  }, [shadowIntensity])

  // Zastosuj preset
  const applyPreset = (preset: typeof THEME_PRESETS[0]) => {
    setBgColor(preset.background)
    setFgColor(preset.foreground)
    setPrimaryColor(preset.primary)
    setMutedColor(preset.muted)
    setBorderColor(preset.border)
    setCurrentFont(preset.font)
    setActivePreset(preset.name)
  }

  // Losuj wszystko
  const randomizeAll = () => {
    const randomPreset = THEME_PRESETS[Math.floor(Math.random() * THEME_PRESETS.length)]
    applyPreset(randomPreset)
    setRadius(RADIUS_OPTIONS[Math.floor(Math.random() * RADIUS_OPTIONS.length)].value)
    setShadowIntensity(SHADOW_OPTIONS[Math.floor(Math.random() * SHADOW_OPTIONS.length)].value)
    setActivePreset('')
  }

  // Reset
  const resetToDefault = () => {
    applyPreset(THEME_PRESETS[0])
    setRadius('0.5rem')
    setShadowIntensity('normal')
    document.body.style.fontFamily = ''
  }

  // Kolorowy swatch
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
      {/* Przycisk toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-all duration-300"
        style={{ transform: isOpen ? 'translateX(340px) translateY(-50%)' : 'translateY(-50%)' }}
        aria-label={isOpen ? 'Zamknij panel' : 'Otwórz panel kontrolny'}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Settings className="w-5 h-5" />}
      </button>

      {/* Panel */}
      <div
        className={`fixed left-0 top-0 h-screen w-[340px] bg-black text-white z-50 overflow-y-auto transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-5 space-y-5">
          {/* Nagłówek */}
          <div className="pb-3 border-b border-white/20">
            <h2 className="text-lg font-bold tracking-tight">Design System</h2>
            <p className="text-xs text-white/50 mt-1">Zmiany widoczne na żywo</p>
          </div>

          {/* Tabs */}
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

          {/* PRESETY TAB */}
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
                    {/* Preview kolorów */}
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

          {/* KOLORY TAB */}
          {activeTab === 'colors' && (
            <div className="space-y-5">
              {/* Background */}
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

              {/* Foreground */}
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

              {/* Primary */}
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

              {/* Muted */}
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

              {/* Border */}
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

          {/* TYPOGRAFIA TAB */}
          {activeTab === 'typography' && (
            <div className="space-y-4">
              {/* Sans-serif nowoczesne */}
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

              {/* Sans-serif klasyczne */}
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

              {/* Display */}
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

              {/* Serif */}
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

              {/* Aktualny font */}
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-[10px] text-white/50 mb-1">Aktywna czcionka:</p>
                <p className="text-lg font-bold" style={{ fontFamily: FONT_OPTIONS.find(f => f.name === currentFont)?.family }}>{currentFont}</p>
              </div>
            </div>
          )}

          {/* EFEKTY TAB */}
          {activeTab === 'effects' && (
            <div className="space-y-5">
              {/* Zaokrąglenia */}
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

              {/* Cienie */}
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

              {/* Preview */}
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

          {/* Szybkie akcje */}
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
          </div>

          {/* Stopka */}
          <div className="pt-3 border-t border-white/20 text-center">
            <p className="text-[10px] text-white/30 uppercase tracking-widest">LECH-BUD Design System</p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

// ===========================================
// CONTACT SECTION
// ===========================================
function ContactVariant16() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row overflow-hidden">
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
                <label className="block text-sm font-semibold text-foreground" htmlFor="name16">Imię</label>
                <input
                  className="w-full px-4 py-3 bg-muted border border-border text-foreground rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  id="name16"
                  name="name"
                  placeholder="Twoje imię"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-foreground" htmlFor="phone16">Telefon</label>
                <input
                  className="w-full px-4 py-3 bg-muted border border-border text-foreground rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  id="phone16"
                  name="phone"
                  placeholder="Numer telefonu"
                  type="tel"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-foreground" htmlFor="message16">Opis prac</label>
              <textarea
                className="w-full px-4 py-3 bg-muted border border-border text-foreground rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                id="message16"
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
        <GalleryVariant2 />

        <ProcessSection />
        <FaqSection />

        {/* ========== WARIANTY KONTAKT ========== */}
        <ContactVariant16 />

        <Footer />
        <ThemeSwitcher />
        <ControlPanel />
      </main>
    </>
  )
}
