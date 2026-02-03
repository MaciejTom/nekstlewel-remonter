import type { ServiceIconGridContent } from "@/types"

const w = {
  section: "bg-background py-24 border-y border-dashed border-border",
  container: "container mx-auto px-6",

  // Header
  header: "text-center mb-16",
  tagline: "text-xs text-muted-foreground uppercase tracking-widest mb-4",
  title: "text-4xl font-semibold text-foreground",

  // Grid
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto",

  // Card
  card: "border border-dashed border-border p-8 text-center",
  iconBox: "w-16 h-16 mx-auto border border-dashed border-border flex items-center justify-center mb-6",
  iconLabel: "text-[8px] text-muted-foreground/50",
  cardTitle: "text-sm font-semibold text-foreground mb-3",
  cardDesc: "text-xs text-muted-foreground leading-relaxed",
}

interface Props {
  content: ServiceIconGridContent
}

export function WhyUsCardsWireframe({ content }: Props) {
  const { tagline, title, services } = content

  return (
    <section className={w.section}>
      <div className={w.container}>
        <div className={w.header}>
          {tagline && <span className={w.tagline}>{tagline}</span>}
          <h2 className={w.title}>{title}</h2>
        </div>

        <div className={w.grid}>
          {services.map((item, i) => (
            <div key={i} className={w.card}>
              <div className={w.iconBox}>
                <span className={w.iconLabel}>icon</span>
              </div>
              <h3 className={w.cardTitle}>{item.title}</h3>
              <p className={w.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
