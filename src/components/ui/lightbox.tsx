"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface LightboxImage {
  image: string
  title: string
  specs: string
}

interface LightboxProps {
  isOpen: boolean
  onClose: () => void
  images: LightboxImage[]
  currentIndex: number
  onNext: () => void
  onPrev: () => void
}

export function Lightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNext,
  onPrev
}: LightboxProps) {
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
        aria-label="Zamknij galerię"
        className="absolute top-4 right-4 w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all z-10"
      >
        <X className="w-6 h-6" />
      </button>

      <button
        onClick={onPrev}
        aria-label="Poprzednie zdjęcie"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={onNext}
        aria-label="Następne zdjęcie"
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
