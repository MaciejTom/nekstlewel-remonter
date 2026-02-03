import type { ServiceIconGridContent } from "@/types"
import Image from "next/image"

const s = {
  section: "bg-secondary text-secondary-foreground py-24",
  container: "container mx-auto px-6",

  // Header
  header: "text-center mb-16",
  tagline: "text-sm font-medium text-primary tracking-wider uppercase mb-3",
  title: "text-3xl sm:text-4xl font-bold",

  // Timeline
  timeline: "relative max-w-5xl mx-auto",
  line: "hidden lg:block absolute top-12 left-[12%] right-[12%] border-t-2 border-primary/30",
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative",

  // Item
  item: "text-center",
  iconWrap: "w-24 h-24 mx-auto mb-6 bg-card rounded-full p-4 shadow-lg relative z-10",
  icon: "w-full h-full object-contain",
  itemTitle: "text-lg font-semibold mb-2",
  itemDesc: "text-sm text-secondary-foreground/80 leading-relaxed max-w-[220px] mx-auto",
}

interface Props {
  content: ServiceIconGridContent
  iconSrc?: string
}

export function WhyUsTimelineSection({ content, iconSrc = "/images/tom-art/icons/wrench.png" }: Props) {
  const { tagline, title, services } = content

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          {tagline && <span className={s.tagline}>{tagline}</span>}
          <h2 className={s.title}>{title}</h2>
        </div>

        <div className={s.timeline}>
          <div className={s.line} />
          <div className={s.grid}>
            {services.map((item, i) => (
              <div key={i} className={s.item}>
                <div className={s.iconWrap}>
                  <Image
                    src={iconSrc}
                    alt=""
                    width={96}
                    height={96}
                    className={s.icon}
                  />
                </div>
                <h3 className={s.itemTitle}>{item.title}</h3>
                <p className={s.itemDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
