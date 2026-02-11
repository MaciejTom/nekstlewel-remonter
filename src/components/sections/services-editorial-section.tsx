import Image from "next/image"
import type { ServiceEditorialContent } from "@/types"
import { Home, Hammer, Paintbrush, Bath, Layers, CheckCircle, Phone } from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
  construction: Hammer,
  format_paint: Paintbrush,
  bathroom: Bath,
  stairs: Layers,
  phone: Phone,
}

const s = {
  // Section
  section: "relative min-h-screen w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden",
  gradient: "absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent opacity-50 pointer-events-none",
  container: "max-w-7xl mx-auto flex flex-col items-center relative z-10",

  // Header
  header: "text-center max-w-3xl mb-24 relative z-10",
  title: "text-4xl md:text-5xl font-bold text-foreground mb-6 relative inline-block tracking-tight",
  titleBreak: "block mt-2",
  titleUnderline: "absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary opacity-80",
  subtitle: "text-muted-foreground text-lg md:text-xl leading-relaxed mt-8 max-w-2xl mx-auto",

  // Services list
  list: "w-full flex flex-col gap-24 lg:gap-32",

  // Service row
  row: "group flex flex-col lg:flex-row items-center gap-12 lg:gap-20 animate-fade-up",
  rowReverse: "group flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 animate-fade-up",

  // Image
  imageCol: "w-full lg:w-1/2 relative perspective-1000",
  imageBorderLeft: "absolute top-4 -left-4 w-full h-full bg-primary/10 hidden lg:block -z-10 transition-transform duration-500 group-hover:rotate-0 group-hover:translate-x-2 group-hover:translate-y-2",
  imageBorderRight: "absolute top-4 -right-4 w-full h-full bg-secondary/10 hidden lg:block -z-10 transition-transform duration-500 group-hover:rotate-0 group-hover:-translate-x-2 group-hover:translate-y-2",
  imageWrap: "relative h-72 sm:h-96 lg:h-[450px] w-full shadow-xl border border-border/50 bg-muted rounded-sm overflow-hidden",
  image: "object-cover transition-transform duration-700 group-hover:scale-105",

  // Content
  contentCol: "w-full lg:w-1/2",
  contentColReverse: "w-full lg:w-1/2 lg:text-right",

  // Step badge
  badge: "flex items-center gap-4 mb-6",
  badgeReverse: "flex items-center gap-4 mb-6 lg:flex-row-reverse",
  iconCircle: "flex items-center justify-center w-14 h-14 bg-primary/10 text-primary shadow-sm border border-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 rounded-sm",
  stepLabel: "uppercase tracking-widest text-xs font-bold text-primary",

  // Service text
  serviceTitle: "text-3xl font-bold text-foreground mb-6 tracking-tight",
  serviceDesc: "text-muted-foreground text-lg leading-relaxed mb-8",

  // Features
  featureList: "space-y-4",
  featureListReverse: "space-y-4 flex flex-col lg:items-end",
  featureItem: "flex items-center gap-3 p-2 hover:bg-muted/50 transition-colors -ml-2 pl-2",
  featureItemReverse: "flex items-center gap-3 lg:flex-row-reverse p-2 hover:bg-muted/50 transition-colors -mr-2 pr-2",
  featureIcon: "text-primary w-5 h-5 mt-0.5 flex-shrink-0",
  featureText: "font-medium text-foreground/90",

  // CTA
  cta: "mt-24 lg:mt-32 w-full max-w-7xl bg-secondary text-secondary-foreground rounded-sm p-8 md:p-12 animate-fade-up relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8",
  ctaTitle: "text-2xl md:text-3xl text-secondary-foreground font-bold mb-2 md:mb-0 tracking-tight relative z-10",
  ctaDesc: "text-secondary-foreground/70 relative z-10",
  ctaButton: "bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-10 shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 text-lg rounded-sm relative z-10 shrink-0",
}

interface ServicesEditorialSectionProps {
  content: ServiceEditorialContent
  className?: string
  id?: string
}

export function ServicesEditorialSection({ content, className, id }: ServicesEditorialSectionProps) {
  const { title, titleBreak, subtitle, services, cta } = content

  return (
    <section id={id} className={`${s.section} ${className ?? ""}`}>
      {/* Gradient overlay */}
      <div className={s.gradient} />

      <div className={s.container}>
        {/* Header */}
        <div className={s.header}>
          <h2 className={s.title}>
            {title}
            {titleBreak && <span className={s.titleBreak}>{titleBreak}</span>}
            <span className={s.titleUnderline} />
          </h2>
          <p className={s.subtitle}>{subtitle}</p>
        </div>

        {/* Services */}
        <div className={s.list}>
          {services.map((service, index) => {
            const isEven = index % 2 === 1

            return (
              <div key={index} className={isEven ? s.rowReverse : s.row}>
                {/* Image */}
                <div className={s.imageCol}>
                  <div className={isEven ? s.imageBorderRight : s.imageBorderLeft} />
                  <div className={s.imageWrap}>
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className={s.image}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={isEven ? s.contentColReverse : s.contentCol}>
                  {/* Step badge */}
                  <div className={isEven ? s.badgeReverse : s.badge}>
                    <span className={s.iconCircle}>
                      {(() => {
                        const IconComponent = iconMap[service.icon]
                        return IconComponent ? <IconComponent className="w-6 h-6" /> : null
                      })()}
                    </span>
                    <span className={s.stepLabel}>{service.step}</span>
                  </div>

                  {/* Title & description */}
                  <h3 className={s.serviceTitle}>{service.title}</h3>
                  <p className={s.serviceDesc}>{service.description}</p>

                  {/* Features */}
                  <ul className={isEven ? s.featureListReverse : s.featureList}>
                    {service.features.map((feature, i) => (
                      <li key={i} className={isEven ? s.featureItemReverse : s.featureItem}>
                        <CheckCircle className={s.featureIcon} />
                        <span className={s.featureText}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        {cta && (
          <div className={s.cta}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-foreground/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <p className={s.ctaTitle}>{cta.title}</p>
              <p className={s.ctaDesc}>{cta.description}</p>
            </div>
            <a href="tel:609643576" className={s.ctaButton}>
              {cta.buttonIcon && (() => {
                const IconComponent = iconMap[cta.buttonIcon]
                return IconComponent ? <IconComponent className="w-6 h-6" /> : null
              })()}
              {cta.buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
