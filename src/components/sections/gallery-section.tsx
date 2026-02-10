"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { portfolioContent as defaultPortfolioContent } from "@/content/remonter/portfolio"

interface GallerySliderProps {
  projects: typeof defaultPortfolioContent.projects
  onImageClick: (index: number) => void
}

export function GallerySlider({ projects, onImageClick }: GallerySliderProps) {
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

  const extendedProjects = [...projects, ...projects, ...projects]

  return (
    <div className="relative px-8 md:px-0" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      <button
        onClick={goPrev}
        aria-label="Poprzednie zdjęcie"
        className="absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-primary/80 transition-all hover:scale-110"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={goNext}
        aria-label="Następne zdjęcie"
        className="absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-primary/80 transition-all hover:scale-110"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

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
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent z-10" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <span className="inline-block bg-primary/90 text-primary-foreground text-xs font-semibold px-2 py-1 rounded-sm mb-2">
                  {project.category}
                </span>
                <h3 className="text-sm font-bold text-secondary-foreground mb-1 group-hover:text-primary transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-secondary-foreground/70 text-xs line-clamp-1">{project.specs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

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

interface GallerySectionProps {
  content?: typeof defaultPortfolioContent
}

export function GallerySection({ content = defaultPortfolioContent }: GallerySectionProps) {
  const portfolioContent = content
  const projectsWithSpan = portfolioContent.projects.map((project, index) => ({
    ...project,
    span: index === 1 || index === 4 ? "lg:row-span-2" : "",
  }))

  return (
    <section id="realizacje" className="w-full bg-muted/30 py-32 px-4 md:px-10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="mx-auto max-w-[1400px] relative z-10">
        <div className="text-center mb-20">
          <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block">
            {portfolioContent.tagline}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight h2-accent-center">
            {portfolioContent.title} <span className="text-primary">{portfolioContent.titleAccent}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {portfolioContent.subtitle}
          </p>

          {/* Stats */}
          {portfolioContent.stats && portfolioContent.stats.length > 0 && (
            <div className="flex justify-center gap-8 md:gap-16 mt-12">
              {portfolioContent.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className={`text-4xl md:text-5xl font-bold ${stat.highlight ? 'text-primary' : 'text-foreground'}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

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
                style={{ objectPosition: (project as any).objectPosition || "center" }}
              />
              <div className="absolute top-4 right-4 bg-secondary/80 backdrop-blur border border-primary/30 px-3 py-1 z-20">
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest">
                  {project.category}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-secondary-foreground font-bold text-xl">
                  {project.title}
                </h3>
                <p className="text-secondary-foreground/70 text-sm mt-1">{project.specs}</p>
              </div>
            </div>
          ))}
        </div>

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
