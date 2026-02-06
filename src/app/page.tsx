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
// PORTFOLIO MOSAIC SECTION
// ===========================================
function PortfolioMosaicSection() {
  // Użyj pierwszych 6 unikalnych projektów z portfolioContent
  const mosaicProjects = portfolioContent.projects.slice(0, 6)
  // Indeksy projektów które mają być wyższe (row-span-2)
  const tallIndices = [1, 4]

  return (
    <section className="w-full bg-background py-24 px-4 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
            Inspiracje
          </span>
          <h2 className="text-foreground font-serif text-4xl md:text-5xl font-normal mt-3">
            Wybrane Realizacje
          </h2>
          <p className="text-muted-foreground mt-4 font-light max-w-2xl mx-auto">
            Każdy projekt to osobna historia. Zobacz efekty naszej pracy.
          </p>
        </div>

        {/* Mosaic Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          style={{ gridAutoRows: "280px" }}
        >
          {mosaicProjects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden ${tallIndices.includes(index) ? 'lg:row-span-2' : ''}`}
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
                <h3 className="text-white font-serif text-xl italic">
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
            <span className="text-lg font-serif italic">Chcesz podobny efekt?</span>
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


// Wariant 6: Accordion/Expand - rozwijane karty
function GalleryVariant6() {
  const [expanded, setExpanded] = useState<number | null>(0)
  const projects = portfolioContent.projects.slice(0, 5)

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Wariant 6</span>
          <h2 className="text-3xl font-bold text-foreground mt-2">Accordion</h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 h-[500px]">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setExpanded(index)}
              className={`relative overflow-hidden rounded-sm cursor-pointer transition-all duration-500 ${expanded === index ? 'flex-[3]' : 'flex-1'}`}
            >
              <Image src={project.image} alt={project.title} fill className="object-cover" />
              <div className={`absolute inset-0 transition-colors duration-300 ${expanded === index ? 'bg-black/40' : 'bg-black/60 hover:bg-black/50'}`} />
              <div className={`absolute inset-0 p-6 flex flex-col justify-end transition-opacity duration-300 ${expanded === index ? 'opacity-100' : 'opacity-0 lg:opacity-100'}`}>
                <span className="text-primary text-xs font-bold uppercase tracking-wider">{project.category}</span>
                <h3 className={`text-white font-bold mt-2 transition-all duration-300 ${expanded === index ? 'text-2xl' : 'text-sm lg:writing-vertical lg:rotate-180'}`}>
                  {project.title}
                </h3>
                {expanded === index && (
                  <p className="text-white/70 text-sm mt-2 animate-fade-in">{project.specs}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Separator dla wariantów galerii
function GalleryVariantsSeparator() {
  return (
    <div className="py-12 bg-muted border-y-4 border-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-foreground">Galeria realizacji</h2>
        <p className="text-muted-foreground mt-2">Masonry Grid</p>
      </div>
    </div>
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
// CONTACT SECTION
// ===========================================
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Imię jest wymagane"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Imię musi mieć min. 2 znaki"
    }

    // Phone validation (Polish format)
    const phoneClean = formData.phone.replace(/\s/g, "")
    if (!phoneClean) {
      newErrors.phone = "Numer telefonu jest wymagany"
    } else if (!/^(\+48)?[0-9]{9}$/.test(phoneClean)) {
      newErrors.phone = "Nieprawidłowy format (np. 607176748)"
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Opis prac jest wymagany"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Opis musi mieć min. 10 znaków"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus("success")
      setFormData({ name: "", phone: "", message: "" })
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

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
                      className="flex items-center gap-6 p-6 rounded-sm border border-border/60 bg-white/50 backdrop-blur-sm hover:border-primary/50 hover:bg-white hover:shadow-lg transition-all duration-300 group"
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
               <div className="bg-white border border-border/40 rounded-sm p-8 md:p-12 shadow-xl relative overflow-hidden h-full flex flex-col justify-center">
                {/* Subtle pattern inside form */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <h3 className="text-2xl font-bold text-foreground mb-8 relative z-10">
                  {contactContent.formTitle}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10 flex-1 flex flex-col" noValidate>
                  {submitStatus === "success" && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-sm flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      <span>Dziękujemy! Odezwiemy się wkrótce.</span>
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-sm">
                      Wystąpił błąd. Spróbuj ponownie lub zadzwoń bezpośrednio.
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name field */}
                    <div>
                      <label className="block text-sm font-bold text-foreground/70 mb-2 ml-1">
                        Imię
                      </label>
                      <input
                        type="text"
                        placeholder="Twoje imię"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={`w-full bg-muted/20 border rounded-sm px-5 py-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all duration-300 shadow-sm ${
                          errors.name ? "border-red-400 bg-red-50/50" : "border-border/60"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone field */}
                    <div>
                      <label className="block text-sm font-bold text-foreground/70 mb-2 ml-1">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        placeholder="Numer telefonu"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className={`w-full bg-muted/20 border rounded-sm px-5 py-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all duration-300 shadow-sm ${
                          errors.phone ? "border-red-400 bg-red-50/50" : "border-border/60"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Message field */}
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-bold text-foreground/70 mb-2 ml-1">
                        Opis prac
                      </label>
                      <textarea
                        placeholder="Opisz krótko, co trzeba zrobić..."
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className={`w-full bg-muted/20 border rounded-sm px-5 py-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all duration-300 shadow-sm min-h-[180px] resize-none ${
                          errors.message ? "border-red-400 bg-red-50/50" : "border-border/60"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1 ml-1">{errors.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-auto pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground py-4 rounded-sm font-bold hover:bg-primary/90 transition-all hover:shadow-lg shadow-primary/25 flex items-center justify-center gap-3 group mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Wysyłanie...</span>
                        </>
                      ) : (
                        <>
                          <span>{contactContent.submitText}</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
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
// CONTACT WITH MAP SECTION
// Mapa Google po lewej, formularz i dane po prawej
// ===========================================
function ContactWithMap() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-0 max-w-6xl mx-auto overflow-hidden rounded-sm border border-border shadow-xl">
          {/* Left - Google Map */}
          <div className="min-h-[500px] lg:min-h-[600px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.892456789!2d20.6234!3d50.8789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJana%20Nowaka-Jeziora%C5%84skiego%2073%2C%2025-432%20Kielce!5e0!3m2!1spl!2spl!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja LECH-BUD"
            />
          </div>

          {/* Right - Form & Info */}
          <div className="bg-card p-8 lg:p-12 flex flex-col justify-center">
            <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">Kontakt</span>
            <h2 className="text-3xl font-bold text-foreground mb-2">Skontaktuj się z nami</h2>
            <p className="text-muted-foreground mb-8">Umów bezpłatne oględziny i wycenę</p>

            <form className="space-y-4 mb-8">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Imię</label>
                <input type="text" placeholder="Twoje imię" className="w-full px-4 py-3 bg-muted/30 border border-border rounded-sm focus:border-primary focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Telefon</label>
                <input type="tel" placeholder="Numer telefonu" className="w-full px-4 py-3 bg-muted/30 border border-border rounded-sm focus:border-primary focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Opis prac</label>
                <textarea placeholder="Opisz krótko, co trzeba zrobić..." rows={4} className="w-full px-4 py-3 bg-muted/30 border border-border rounded-sm focus:border-primary focus:outline-none transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full bg-primary text-primary-foreground py-4 rounded-sm font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                Wyślij zapytanie
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="pt-6 border-t border-border space-y-4">
              <a href="tel:607176748" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">Telefon</span>
                  <span className="font-bold">607 176 748</span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-foreground">
                <div className="w-10 h-10 bg-muted rounded-sm flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">Adres</span>
                  <span className="font-medium">Jana Nowaka-Jeziorańskiego 73, 25-432 Kielce</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-foreground">
                <div className="w-10 h-10 bg-muted rounded-sm flex items-center justify-center">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">Godziny pracy</span>
                  <span className="font-medium">wt-pt od 07:00</span>
                </div>
              </div>
            </div>
          </div>
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
        <ContactSection />
        <ContactWithMap />
        <Footer />
        <ThemeSwitcher />
      </main>
    </>
  )
}
