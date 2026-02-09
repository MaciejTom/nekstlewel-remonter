"use client"

import Image from "next/image"
import { whyUsContent as defaultWhyUsContent } from "@/content/lech-bud/why-us"

const defaultIconImageMap: Record<string, string> = {
  Clock: "/images/lech-bud/Whisk_c259a637d38e05184f441dba9d60e8b9dr-removebg-preview.png",
  ShieldCheck: "/images/lech-bud/Whisk_0ff055529f5e3bbad9e46ad59dc41e6adr-removebg-preview (1).png",
  Building2: "/images/lech-bud/Whisk_5a4e3a2f16e5378a518405bddd9d228fdr-removebg-preview.png",
  CalendarCheck: "/images/lech-bud/checks.png",
  Handshake: "/images/lech-bud/Whisk_0ff055529f5e3bbad9e46ad59dc41e6adr-removebg-preview (1).png",
  Wrench: "/images/lech-bud/Whisk_5a4e3a2f16e5378a518405bddd9d228fdr-removebg-preview.png",
  MapPin: "/images/lech-bud/checks.png",
}

interface WhyUsSectionProps {
  content?: typeof defaultWhyUsContent
  iconMap?: Record<string, string>
}

export function WhyUsSection({
  content = defaultWhyUsContent,
  iconMap = defaultIconImageMap,
}: WhyUsSectionProps) {
  const whyUsContent = content
  const iconImageMap = iconMap
  return (
    <section id="dlaczego" className="bg-muted/40 py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px] translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-28 max-w-3xl mx-auto">
          <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block">
            {whyUsContent.tagline}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 h2-accent-center tracking-tight">{whyUsContent.title}</h2>
        </div>

        {/* USP grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {whyUsContent.services.map((usp, index) => {
            const iconSrc = iconImageMap[usp.icon] || iconImageMap.Clock

            return (
              <div key={index} className="group transition-all duration-300 flex flex-col items-center text-center gap-6 hover:-translate-y-2">
                {/* Icon Container */}
                <div className="relative w-40 h-40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                   {/* Paint accent */}
                   <div className="absolute inset-0 flex items-center justify-center -z-10">
                      <svg viewBox="0 0 200 200" className="w-[180%] h-[180%] text-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" fill="currentColor">
                        <path d="M45.7,143.6c-13.8-13.8-15.9-37.3-6.1-54.6c6.2-10.8,17.5-17.7,29.7-19.3c15.6-2.1,31.6,1.4,45.6,8.8 c17.4,9.2,31.7,24.6,38.8,42.6c6.3,16.1,6.1,34.8-2.6,49.6c-7.8,13.2-21.7,22.3-36.8,25.4c-18.7,3.8-38.6-1.5-53.7-12.2 C53.2,178.6,47.8,162.9,45.7,143.6z" transform="rotate(-15 100 100) scale(1.2 0.8)"/>
                      </svg>
                      <svg viewBox="0 0 200 200" className="w-[160%] h-[160%] text-primary/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="currentColor">
                         <path d="M42.7,-63.3C54.6,-54.3,63.1,-41.8,69.2,-28.6C75.3,-15.4,79,-1.5,75.3,10.8C71.6,23.1,60.6,33.8,49.5,43.2C38.4,52.6,27.2,60.7,14.6,65.3C2,69.9,-12,71,-24.8,66.3C-37.6,61.6,-49.2,51.1,-58.4,39.2C-67.6,27.3,-74.4,14,-73.4,1.3C-72.4,-11.4,-63.6,-23.5,-53.4,-33.8C-43.2,-44.1,-31.6,-52.6,-19.6,-61.5C-7.6,-70.4,4.8,-79.7,17.4,-79.9C30,-80.1,42.7,-71.2,42.7,-63.3Z" transform="translate(100 100) scale(1.1)" />
                      </svg>
                   </div>

                   <Image
                     src={iconSrc}
                     alt={usp.title}
                     width={140}
                     height={140}
                     sizes="(max-width: 768px) 100px, 140px"
                     className="w-full h-full object-contain drop-shadow-2xl relative z-10"
                   />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors leading-tight">{usp.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {usp.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
