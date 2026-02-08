"use client"

import { ChevronRight } from "lucide-react"
import { processContent } from "@/content/lech-bud/process"

export function ProcessSection() {
  return (
    <section id="proces" className="bg-background py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 h2-accent-center tracking-tight">
            {processContent.title}
          </h2>
          {processContent.subtitle && (
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              {processContent.subtitle}
            </p>
          )}
        </div>

        {/* Steps - horizontal grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {processContent.steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Connecting arrow (hidden on mobile and last item) */}
              {index < processContent.steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 z-10">
                  <ChevronRight className="w-6 h-6 text-primary/30" />
                </div>
              )}

              {/* Card */}
              <div className="bg-card border border-border/50 rounded-sm p-6 h-full hover:shadow-lg transition-all group-hover:-translate-y-2 group-hover:border-primary/30 relative overflow-hidden">
                {/* Large number background */}
                <span className="absolute -top-4 -right-2 text-[120px] font-bold text-primary/5 leading-none select-none">
                  {index + 1}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-sm text-lg font-bold mb-4">
                    {index + 1}
                  </span>
                  <span className="text-sm font-bold text-primary tracking-widest uppercase mb-2 block">
                    {step.badge}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
