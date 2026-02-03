import type { ServiceIconGridContent } from "@/types"
import Image from "next/image"

const s = {
  section: "bg-background py-24",
  container: "container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl",

  // Left: large icon/graphic
  imageCol: "flex items-center justify-center",
  imageWrap: "w-full max-w-sm",
  image: "w-full h-auto",

  // Right: content
  contentCol: "flex flex-col",
  tagline: "text-sm font-medium text-primary tracking-wider uppercase mb-3",
  title: "text-3xl sm:text-4xl font-bold text-foreground mb-10",

  // Items
  items: "space-y-8",
  item: "flex gap-5",
  iconWrap: "w-14 h-14 shrink-0",
  icon: "w-full h-full object-contain",
  itemContent: "flex flex-col",
  itemTitle: "text-lg font-semibold text-foreground mb-2",
  itemDesc: "text-sm text-muted-foreground leading-relaxed",
}

interface Props {
  content: ServiceIconGridContent
  iconSrc?: string
  heroImageSrc?: string
}

export function WhyUsSplitSection({
  content,
  iconSrc = "/images/tom-art/icons/wrench.png",
  heroImageSrc = "/images/tom-art/icons/wrench.png"
}: Props) {
  const { tagline, title, services } = content

  return (
    <section className={s.section}>
      <div className={s.container}>
        {/* Left: large hero icon/image */}
        <div className={s.imageCol}>
          <div className={s.imageWrap}>
            <Image
              src={heroImageSrc}
              alt=""
              width={400}
              height={400}
              className={s.image}
            />
          </div>
        </div>

        {/* Right: content */}
        <div className={s.contentCol}>
          {tagline && <span className={s.tagline}>{tagline}</span>}
          <h2 className={s.title}>{title}</h2>

          <div className={s.items}>
            {services.map((item, i) => (
              <div key={i} className={s.item}>
                <div className={s.iconWrap}>
                  <Image
                    src={iconSrc}
                    alt=""
                    width={56}
                    height={56}
                    className={s.icon}
                  />
                </div>
                <div className={s.itemContent}>
                  <h3 className={s.itemTitle}>{item.title}</h3>
                  <p className={s.itemDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
