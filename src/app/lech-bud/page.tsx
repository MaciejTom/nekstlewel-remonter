"use client"

import { useState, useEffect } from "react"
import {
  Phone,
  MapPin,
  FileText,
  Paintbrush,
  Building2,
  Home,
  Users,
  Clock,
  ShieldCheck,
  CalendarCheck,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  Menu,
  Star,
  Bath,
} from "lucide-react"
import Image from "next/image"

// Content imports - LECH-BUD
import { heroContent } from "@/content/lech-bud/hero"
import { servicesEditorialContent } from "@/content/lech-bud/services-editorial"
import { ServicesEditorialSection } from "@/components/sections/services-editorial-section"
import { processContent } from "@/content/lech-bud/process"
import { whyUsContent } from "@/content/lech-bud/why-us"
import { portfolioContent } from "@/content/lech-bud/portfolio"
import { reviewsContent } from "@/content/lech-bud/reviews"
import { faqContent } from "@/content/lech-bud/faq"
import { contactContent } from "@/content/lech-bud/contact"

// Icon map for dynamic icon rendering
const iconMap: Record<string, React.ElementType> = {
  Phone,
  MapPin,
  FileText,
  Paintbrush,
  Building2,
  Home,
  Users,
  Clock,
  ShieldCheck,
  CalendarCheck,
  CheckCircle,
  Bath,
}

// ===========================================
// NAV SECTION
// ===========================================
const navLinks = [
  { label: "Dlaczego my", href: "#dlaczego" },
  { label: "Usługi", href: "#uslugi" },
  { label: "Realizacje", href: "#realizacje" },
  { label: "Opinie", href: "#opinie" },
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
          <a href="/" className="text-2xl font-bold text-foreground tracking-tight">
            LECH-BUD
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
          quality={90}
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
// PORTFOLIO SECTION
// ===========================================
function PortfolioSection() {
  return (
    <section id="realizacje" className="bg-secondary text-secondary-foreground py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

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
            <p className="text-secondary-foreground/70 mt-4 text-lg">
              {portfolioContent.subtitle}
            </p>
          </div>

          {/* Stats */}
          {portfolioContent.stats && (
            <div className="flex gap-8">
              {portfolioContent.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className={`text-4xl font-bold ${stat.highlight ? 'text-gold' : 'text-white'}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-secondary-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioContent.projects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-sm overflow-hidden ${
                project.featured ? 'md:col-span-2 md:row-span-2' : ''
              } ${project.wide ? 'md:col-span-2' : ''}`}
            >
              {/* Image */}
              <div className={`relative bg-muted/20 ${project.featured ? 'aspect-[4/3]' : 'aspect-[3/2]'}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes={project.featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <span className="inline-block bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-sm mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm">{project.specs}</p>
              </div>
            </div>
          ))}
        </div>

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
// WHY US SECTION
// ===========================================
function WhyUsSection() {
  return (
    <section id="dlaczego" className="bg-background py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block">
            {whyUsContent.tagline}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 h2-accent-center tracking-tight">
            {whyUsContent.title}
          </h2>
        </div>

        {/* USP grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {whyUsContent.services.map((usp, index) => {
            const Icon = iconMap[usp.icon] || CheckCircle

            // Logic for distinct styling
            const isGold = ["Clock", "ShieldCheck"].includes(usp.icon)

            const cardBorderClass = isGold
              ? "border-gold/20 hover:border-gold/50"
              : "border-border/50 hover:border-primary/30"

            const iconBgClass = isGold
              ? "bg-gold/10 text-gold ring-1 ring-gold/20"
              : "bg-primary/10 text-primary ring-1 ring-primary/20"

            const iconShadowClass = isGold
               ? "shadow-gold/10"
               : "shadow-primary/10"

            return (
              <div key={index} className={`group text-center p-8 rounded-sm border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${cardBorderClass}`}>
                {/* Icon Container */}
                <div className="relative w-20 h-20 mx-auto mb-6">
                  {/* Backdrop */}
                  <div className={`absolute inset-0 opacity-20 rotate-3 transition-transform group-hover:rotate-6 rounded-sm ${isGold ? "bg-gold" : "bg-primary"}`} />

                  {/* Icon Box */}
                  <div className={`relative w-full h-full flex items-center justify-center shadow-lg transition-shadow rounded-sm ${iconBgClass} ${iconShadowClass}`}>
                    <Icon className="w-10 h-10" />
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-foreground transition-colors">
                  {usp.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {usp.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ===========================================
// REVIEWS SECTION (NOWA)
// ===========================================
function ReviewsSection() {
  // Take only first 2 reviews to keep it neat as requested
  const displayReviews = reviewsContent.reviews.slice(0, 2)

  return (
    <section id="opinie" className="bg-muted/50 py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block">
            Zaufali nam
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 h2-accent-center tracking-tight">
            {reviewsContent.title}
          </h2>
        </div>

        {/* Reviews grid - Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {displayReviews.map((review, index) => (
            <div
              key={index}
              className="bg-background relative p-10 rounded-sm shadow-xl border-t-4 border-primary group hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl text-foreground font-medium leading-relaxed mb-8 relative z-10">
                "{review.quote}"
              </blockquote>

              {/* Author / Signature */}
              <div className="flex items-center gap-4 border-t border-border/50 pt-6">
                <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-sm flex items-center justify-center text-lg font-bold">
                  {review.authorName.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-foreground text-lg">{review.authorName}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">{review.authorLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom link */}
        {reviewsContent.bottomLink && (
          <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors border-b border-primary/20 hover:border-primary pb-0.5">
              {reviewsContent.bottomLink.text}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

// ===========================================
// PROCESS SECTION (DARK MODE)
// ===========================================
function ProcessSection() {
  return (
    <section id="proces" className="bg-secondary text-secondary-foreground py-32 relative overflow-hidden">
       {/* Background noise texture */}
       <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Sticky Header */}
          <div className="lg:sticky lg:top-32 h-fit">
            <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block">
              Jak pracujemy
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 h2-accent tracking-tight">
              {processContent.title}
            </h2>
            {processContent.subtitle && (
              <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-md">
                {processContent.subtitle}
              </p>
            )}
            
            {/* Quick Contact Box */}
            <div className="hidden lg:block bg-white/5 border border-white/10 rounded-sm p-8 backdrop-blur-sm">
              <h4 className="text-white font-bold mb-2">Masz pytania co do procesu?</h4>
              <p className="text-gray-400 text-sm mb-4">Chętnie wyjaśnimy każdy etap współpracy.</p>
              <a href="tel:607176748" className="text-primary font-bold hover:text-white transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" />
                607 176 748
              </a>
            </div>
          </div>

          {/* Right: Timeline Steps */}
          <div className="relative pl-8 md:pl-0">
            {/* Timeline Line */}
            <div className="absolute left-[0px] md:left-8 top-4 bottom-4 w-[2px] bg-white/10" />

            <div className="space-y-16">
              {processContent.steps.map((step, index) => (
                <div key={index} className="relative pl-8 md:pl-24">
                  
                  {/* Number Badge */}
                  <div className="absolute left-[-20px] md:left-0 top-0 w-16 h-16 bg-secondary border border-primary text-primary rounded-sm flex items-center justify-center text-2xl font-bold shadow-xl shadow-black/20 z-10">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div>
                    <span className="text-xs font-bold text-primary/80 tracking-widest uppercase mb-2 block">
                      {step.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
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

                  let subLabel = "Informacje"
                  if (item.icon === "Phone") subLabel = "Telefon"
                  if (item.icon === "MapPin") subLabel = "Lokalizacja"
                  if (item.icon === "Clock") subLabel = "Godziny pracy"

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
                            className="w-full bg-muted/20 border border-border/60 rounded-sm px-5 py-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all duration-300 shadow-sm min-h-[180px] resize-none"
                          />
                        ) : (
                          <input
                            type={field.type}
                            placeholder={field.placeholder}
                            required
                            className="w-full bg-muted/20 border border-border/60 rounded-sm px-5 py-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all duration-300 shadow-sm"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto pt-4">
                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground py-4 rounded-sm font-bold hover:bg-primary/90 transition-all hover:shadow-lg shadow-primary/25 flex items-center justify-center gap-3 group mt-4"
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
              LECH-BUD
            </a>
            <p className="text-gray-300 leading-relaxed text-lg mb-8 max-w-md">
              Firma remontowo-budowlana z 40-letnim doświadczeniem. <br/>
              Biurowce, domy kultury, wspólnoty mieszkaniowe. Kielce i okolice.
            </p>
            {/* Certyfikat badge */}
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-sm text-sm font-semibold">
              <ShieldCheck className="w-5 h-5" />
              Certyfikat Firma Godna Zaufania
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
                 <MapPin className="w-8 h-8 text-primary/70" />
                 <div>
                    <span className="block text-xs text-gray-400 uppercase tracking-wider mb-0.5">Lokalizacja</span>
                    <span className="text-lg text-gray-200">Kielce i okolice</span>
                 </div>
              </li>
              <li className="flex items-center gap-4">
                 <Clock className="w-8 h-8 text-primary/70" />
                 <div>
                    <span className="block text-xs text-gray-400 uppercase tracking-wider mb-0.5">Godziny</span>
                    <span className="text-lg text-gray-200">wt-pt od 07:00</span>
                 </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10 mt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Lech-Bud Leszek Kozieł. Wszelkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-6">
            <span className="text-gold">Od 1986 roku</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full" />
            <a href="#" className="hover:text-primary transition-colors">Polityka prywatności</a>
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
      <HeroSection />        {/* 1. HERO */}
      <WhyUsSection />       {/* 2. DLACZEGO LECH-BUD */}
      <ServicesEditorialSection id="uslugi" content={servicesEditorialContent} className="!bg-muted/30" />    {/* 3. USŁUGI */}
      <PortfolioSection />   {/* 4. REALIZACJE */}
      <ReviewsSection />     {/* 5. OPINIE */}
      <ProcessSection />     {/* 6. JAK PRACUJEMY */}
      <FaqSection />         {/* 7. FAQ */}
      <ContactSection />     {/* 8. KONTAKT */}
      <Footer />
    </main>
  )
}
