"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, MapPin } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { PortfolioContent } from "@/types"

// ============================================
// STYLES
// ============================================

const s = {
  section: "bg-secondary py-24 relative overflow-hidden",
  pattern: "absolute inset-0 opacity-[0.07]",
  container: "container mx-auto px-6 relative z-10",

  // Header
  header: "flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6",
  headerLeft: "",
  tagline: "text-primary font-mono text-sm tracking-widest uppercase mb-2 block",
  title: "text-4xl md:text-5xl font-bold text-secondary-foreground",
  titleAccent: "text-muted-foreground",

  // Stats
  statsWrapper: "flex gap-4",
  stat: "text-right",
  statValue: "text-3xl font-bold text-secondary-foreground",
  statValueHighlight: "text-3xl font-bold text-primary",
  statLabel: "text-xs text-secondary-foreground/60 uppercase",
  statDivider: "w-px h-12 bg-secondary-foreground/20",

  // Grid
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",

  // Project card
  card: "group relative overflow-hidden bg-card border border-secondary-foreground/10 hover:border-primary/30 transition-colors duration-300",
  cardFeatured: "col-span-1 md:col-span-2 row-span-2 aspect-[4/3] md:aspect-auto h-auto min-h-[400px]",
  cardNormal: "col-span-1 md:col-span-1 row-span-1 aspect-square h-auto",
  cardWide: "col-span-1 md:col-span-2 row-span-1 aspect-[2/1] h-auto",
  cardImage: "object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100",
  cardGradient: "absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-90",

  // Content
  cardContent: "absolute bottom-0 left-0 p-6 md:p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300",
  cardHeader: "flex items-center justify-between mb-2",
  cardBadge: "bg-primary/90 text-primary-foreground text-xs font-bold px-2 py-1 uppercase tracking-wider inline-block",
  cardArrow: "bg-secondary/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm",
  cardArrowIcon: "text-secondary-foreground w-5 h-5",
  cardTitle: "text-2xl font-bold text-secondary-foreground mb-1 group-hover:text-primary transition-colors",
  cardMeta: "flex items-center gap-4 text-sm text-secondary-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75",
  metaIcon: "w-3 h-3",
  metaDot: "w-1 h-1 bg-secondary-foreground/40 rounded-full",

  // Corners
  cornerTR: "absolute top-4 right-4 w-3 h-3 border-t border-r border-secondary-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity",
  cornerBL: "absolute bottom-4 left-4 w-3 h-3 border-b border-l border-secondary-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity",

  // Gallery button
  galleryBtn: "mt-12 text-center",
  galleryBtnInner: "border border-secondary-foreground/20 text-secondary-foreground px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-300",
} as const

// ============================================
// COMPONENT
// ============================================

interface PortfolioSectionProps {
  content: PortfolioContent
  className?: string
}

export function PortfolioSection({ content, className }: PortfolioSectionProps) {
  const {
    tagline,
    title,
    titleAccent,
    stats,
    projects,
    galleryButton,
  } = content

  const patternStyle = {
    backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
    backgroundSize: '40px 40px'
  }

  const getCardSize = (project: typeof projects[0]) => {
    if (project.featured) return s.cardFeatured
    if (project.wide) return s.cardWide
    return s.cardNormal
  }

  return (
    <section id="realizacje" className={cn(s.section, className)}>
      {/* Grid Pattern */}
      <div className={s.pattern} style={patternStyle} />

      <div className={s.container}>
        {/* Header */}
        <div className={s.header}>
          <div className={s.headerLeft}>
            {tagline && <span className={s.tagline}>{tagline}</span>}
            <h2 className={s.title}>
              {title}{' '}
              {titleAccent && <span className={s.titleAccent}>{titleAccent}</span>}
            </h2>
          </div>

          {stats && stats.length > 0 && (
            <div className={s.statsWrapper}>
              {stats.map((stat, index) => (
                <div key={index} className="contents">
                  <div className={s.stat}>
                    <div className={stat.highlight ? s.statValueHighlight : s.statValue}>
                      {stat.value}
                    </div>
                    <div className={s.statLabel}>{stat.label}</div>
                  </div>
                  {index < stats.length - 1 && <div className={s.statDivider} />}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Grid */}
        <div className={s.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(s.card, getCardSize(project))}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={s.cardImage}
              />

              <div className={s.cardGradient} />

              {/* Content */}
              <div className={s.cardContent}>
                <div className={s.cardHeader}>
                  <div className={s.cardBadge}>{project.category}</div>
                  <div className={s.cardArrow}>
                    <ArrowUpRight className={s.cardArrowIcon} />
                  </div>
                </div>

                <h3 className={s.cardTitle}>{project.title}</h3>

                <div className={s.cardMeta}>
                  <span className="flex items-center gap-1">
                    <MapPin className={s.metaIcon} /> {project.category}
                  </span>
                  <span className={s.metaDot} />
                  <span>{project.specs}</span>
                </div>
              </div>

              {/* Corners */}
              <div className={s.cornerTR} />
              <div className={s.cornerBL} />
            </motion.div>
          ))}
        </div>

        {/* Gallery Button */}
        {galleryButton && (
          <div className={s.galleryBtn}>
            <a href={galleryButton.href} className={s.galleryBtnInner}>
              {galleryButton.text}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
