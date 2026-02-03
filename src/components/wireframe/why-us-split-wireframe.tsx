import type { ServiceIconGridContent } from "@/types"
import { ImageIcon } from "lucide-react"

const w = {
  section: "bg-background py-24 border-y border-dashed border-border",
  container: "container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",

  // Left: image
  imageCol: "flex items-center justify-center",
  imagePlaceholder: "w-full max-w-md aspect-square bg-muted flex items-center justify-center",
  imageIcon: "w-16 h-16 text-muted-foreground/30",
  imageLabel: "text-xs text-muted-foreground/50 mt-2",

  // Right: content
  contentCol: "flex flex-col",
  tagline: "text-xs text-muted-foreground uppercase tracking-widest mb-4",
  title: "text-4xl font-semibold text-foreground mb-10",

  // Items
  items: "space-y-6",
  item: "flex gap-4",
  iconBox: "w-12 h-12 border border-dashed border-border flex items-center justify-center shrink-0",
  iconLabel: "text-[8px] text-muted-foreground/50",
  itemContent: "flex flex-col",
  itemTitle: "text-sm font-semibold text-foreground mb-1",
  itemDesc: "text-xs text-muted-foreground leading-relaxed",
}

interface Props {
  content: ServiceIconGridContent
}

export function WhyUsSplitWireframe({ content }: Props) {
  const { tagline, title, services } = content

  return (
    <section className={w.section}>
      <div className={w.container}>
        {/* Left: image placeholder */}
        <div className={w.imageCol}>
          <div className={w.imagePlaceholder}>
            <div className="flex flex-col items-center gap-2">
              <ImageIcon className={w.imageIcon} />
              <span className={w.imageLabel}>image / graphic</span>
            </div>
          </div>
        </div>

        {/* Right: content */}
        <div className={w.contentCol}>
          {tagline && <span className={w.tagline}>{tagline}</span>}
          <h2 className={w.title}>{title}</h2>

          <div className={w.items}>
            {services.map((item, i) => (
              <div key={i} className={w.item}>
                <div className={w.iconBox}>
                  <span className={w.iconLabel}>icon</span>
                </div>
                <div className={w.itemContent}>
                  <h3 className={w.itemTitle}>{item.title}</h3>
                  <p className={w.itemDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
