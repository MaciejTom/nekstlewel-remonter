import type { ServiceIconGridContent } from "@/types"
import Image from "next/image"

const s = {
  section: "bg-muted/30 py-24",
  container: "container mx-auto px-6",

  // Header
  header: "text-center mb-16",
  tagline: "text-sm font-medium text-primary tracking-wider uppercase mb-3",
  title: "text-3xl sm:text-4xl font-bold text-foreground",

  // Grid
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto",

  // Card
  card: "bg-card border border-border/50 rounded-xl p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
  iconWrap: "w-20 h-20 mx-auto mb-6",
  icon: "w-full h-full object-contain",
  cardTitle: "text-lg font-semibold text-foreground mb-3",
  cardDesc: "text-sm text-muted-foreground leading-relaxed",
}

interface Props {
  content: ServiceIconGridContent
  iconSrc?: string
}

export function WhyUsCardsSection({ content, iconSrc = "/images/tom-art/icons/wrench.png" }: Props) {
  const { tagline, title, services } = content

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          {tagline && <span className={s.tagline}>{tagline}</span>}
          <h2 className={s.title}>{title}</h2>
        </div>

        <div className={s.grid}>
          {services.map((item, i) => (
            <div key={i} className={s.card}>
              <div className={s.iconWrap}>
                <Image
                  src={iconSrc}
                  alt=""
                  width={80}
                  height={80}
                  className={s.icon}
                />
              </div>
              <h3 className={s.cardTitle}>{item.title}</h3>
              <p className={s.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
