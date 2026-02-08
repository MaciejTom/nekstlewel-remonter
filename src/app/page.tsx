"use client"

import { useState } from "react"

// Sections
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
import { ControlPanel } from "@/components/ui/control-panel"
import { ThemeSwitcher } from "@/components/theme-switcher"

// Content
import { servicesEditorialContent } from "@/content/lech-bud/services-editorial"
import { portfolioContent } from "@/content/lech-bud/portfolio"

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
        <GallerySection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
        <FooterSection />

        {/* Dev Tools */}
        <ThemeSwitcher />
        <ControlPanel />
      </main>
    </>
  )
}
