"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, ArrowRight, ShieldCheck } from "lucide-react"
import { heroContent as defaultHeroContent } from "@/content/lech-bud/hero"

interface HeroSectionProps {
  content?: typeof defaultHeroContent
  heroImage?: string
  heroImages?: string[]
  heroImageAlt?: string
  phone?: string
}

export function HeroSection({
  content = defaultHeroContent,
  heroImage = "/heroLech.webp",
  heroImages,
  heroImageAlt = "Realizacja",
  phone = "607176748",
}: HeroSectionProps) {
  const heroContent = content
  const images = heroImages || [heroImage]
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleImageClick = () => {
    if (images.length > 1) {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Background image */}
      <div
        className={`absolute inset-0 ${images.length > 1 ? "cursor-pointer" : ""}`}
        onClick={handleImageClick}
      >
        {images.map((img, idx) => (
          <Image
            key={img}
            src={img}
            alt={heroImageAlt}
            fill
            className={`object-cover transition-opacity duration-700 ${idx === currentIndex ? "opacity-100" : "opacity-0"}`}
            priority={idx === 0}
            sizes="100vw"
          />
        ))}
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 via-50% to-background/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
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
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold rounded-sm shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              {heroContent.ctaPrimary.text}
            </a>
            {heroContent.ctaSecondary && (
              <a
                href="#realizacje"
                className="inline-flex items-center justify-center gap-2 bg-muted text-foreground border border-border px-8 py-4 text-lg font-semibold rounded-sm hover:bg-muted/80 transition-all hover:border-primary/50"
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
