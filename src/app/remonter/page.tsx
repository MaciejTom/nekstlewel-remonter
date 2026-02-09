"use client"

import { useState } from "react"

// Sections - reusing from shared components
import { NavSection } from "@/components/sections/nav-section"
import { HeroSection } from "@/components/sections/hero-section"
import { WhyUsSection } from "@/components/sections/why-us-section"
import { ServicesEditorialSection } from "@/components/sections/services-editorial-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { ProcessSection } from "@/components/sections/process-section"
import { FaqSection } from "@/components/sections/faq-section"
import { ContactSection } from "@/components/sections/contact-section"
import { FooterSection } from "@/components/sections/footer-section"

// UI Components
import { Lightbox } from "@/components/ui/lightbox"

// Content - remonter specific
import { heroContent } from "@/content/remonter/hero"
import { whyUsContent } from "@/content/remonter/why-us"
import { servicesEditorialContent } from "@/content/remonter/services-editorial"
import { portfolioContent } from "@/content/remonter/portfolio"
import { processContent } from "@/content/remonter/process"
import { faqContent } from "@/content/remonter/faq"
import { contactContent } from "@/content/remonter/contact"

// Config
const BRAND = {
  name: "REMONTER",
  letter: "R",
  phone: "123456789",
  phoneFormatted: "123 456 789",
  homeHref: "/remonter",
  description: "Kompleksowe wykończenia mieszkań i domów pod klucz. Remonty, gładzie, malowanie, płytki, podłogi. Kazimierza Wielka i okolice.",
  badge: "Wykończenia pod klucz",
  copyright: "REMONTER Kamil Makieła",
  whatsappNumber: "48123456789",
  location: "Kazimierza Wielka i okolice",
}

export default function RemonterPage() {
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
        <NavSection
          brandName={BRAND.name}
          brandLetter={BRAND.letter}
          phone={BRAND.phone}
          phoneFormatted={BRAND.phoneFormatted}
          homeHref={BRAND.homeHref}
        />
        <HeroSection
          content={heroContent}
          heroImages={[
            "/images/remonter/newHero.jpg",
            "/images/remonter/newHero2.jpg",
            "/images/remonter/newHero3.jpg",
          ]}
          heroImageAlt="Wykończenia wnętrz REMONTER"
          phone={BRAND.phone}
        />
        <WhyUsSection
          content={whyUsContent}
          iconMap={{
            Handshake: "/images/remonter/icons/Whisk_142f20ca50ad58f8f334cc4ab808b9fedr-removebg-preview.png",
            Clock: "/images/remonter/icons/4-removebg-preview.png",
            Wrench: "/images/remonter/icons/3-removebg-preview.png",
            MapPin: "/images/remonter/icons/2-removebg-preview.png",
          }}
        />
        <ServicesEditorialSection id="uslugi" content={servicesEditorialContent} />
        <GallerySection content={portfolioContent} />
        <ProcessSection content={processContent} />
        <FaqSection content={faqContent} />
        <ContactSection content={contactContent} />
        <FooterSection
          brandName={BRAND.name}
          brandDescription={BRAND.description}
          badge={BRAND.badge}
          phone={BRAND.phone}
          phoneFormatted={BRAND.phoneFormatted}
          hours={contactContent.hours}
          location={BRAND.location}
          copyright={BRAND.copyright}
          whatsappNumber={BRAND.whatsappNumber}
        />
      </main>
    </>
  )
}
