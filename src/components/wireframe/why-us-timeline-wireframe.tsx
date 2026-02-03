import type { ServiceIconGridContent } from "@/types"

const w = {
  section: "bg-background py-24 border-y border-dashed border-border",
  container: "container mx-auto px-6",

  // Header
  header: "text-center mb-16",
  tagline: "text-xs text-muted-foreground uppercase tracking-widest mb-4",
  title: "text-4xl font-semibold text-foreground",

  // Timeline
  timeline: "relative max-w-5xl mx-auto",
  line: "hidden lg:block absolute top-10 left-[10%] right-[10%] border-t-2 border-dashed border-border",
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative",

  // Item
  item: "text-center",
  iconBox: "w-20 h-20 mx-auto border-2 border-dashed border-border rounded-full flex items-center justify-center mb-6 bg-background relative z-10",
  iconLabel: "text-[8px] text-muted-foreground/50",
  itemTitle: "text-sm font-semibold text-foreground mb-2",
  itemDesc: "text-xs text-muted-foreground leading-relaxed max-w-[200px] mx-auto",
}

interface Props {
  content: ServiceIconGridContent
}

export function WhyUsTimelineWireframe({ content }: Props) {
  const { tagline, title, services } = content

  return (
    <section className={w.section}>
      <div className={w.container}>
        <div className={w.header}>
          {tagline && <span className={w.tagline}>{tagline}</span>}
          <h2 className={w.title}>{title}</h2>
        </div>

        <div className={w.timeline}>
          <div className={w.line} />
          <div className={w.grid}>
            {services.map((item, i) => (
              <div key={i} className={w.item}>
                <div className={w.iconBox}>
                  <span className={w.iconLabel}>icon</span>
                </div>
                <h3 className={w.itemTitle}>{item.title}</h3>
                <p className={w.itemDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
