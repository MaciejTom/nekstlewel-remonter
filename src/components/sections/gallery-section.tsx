"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { portfolioContent } from "@/content/lech-bud/portfolio"

interface GallerySliderProps {
  projects: typeof portfolioContent.projects
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

export function GallerySection() {
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
