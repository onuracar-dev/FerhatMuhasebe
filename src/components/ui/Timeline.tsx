import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

export interface TimelineMilestone {
  date: string;
  title: string;
  description: string;
  position: "top" | "bottom";
}

export interface TimelineProps {
  badge?: string;
  heading?: string;
  rangeLabel?: string;
  summary?: string;
  introImage?: string;
  introImageAlt?: string;
  milestones: TimelineMilestone[];
  className?: string;
}

export function Timeline({
  badge = "Storyline",
  heading = "Product Storyline",
  rangeLabel = "2020–2026",
  summary,
  introImage,
  introImageAlt = "Timeline intro",
  milestones,
  className,
}: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const trackX = useTransform(scrollYProgress, [0, 1], ["0%", "-52%"]);
  const spineScale = useTransform(scrollYProgress, [0, 0.95], [0.08, 1]);

  return (
    <div ref={containerRef} className={cn("relative lg:h-[220vh]", className)}>
      {/* Desktop: Sticky horizontal storyline inspired by Hyperiux Timeline */}
      <div className="hidden lg:sticky lg:top-16 lg:flex lg:h-[calc(100vh-4rem)] lg:flex-col lg:justify-center lg:overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mb-8 flex items-end justify-between gap-8">
            <div className="flex items-center gap-6">
              {introImage && (
                <div className="h-24 w-36 shrink-0 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                  <img
                    src={introImage}
                    alt={introImageAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>{badge}</span>
                  <span className="text-muted-foreground">· {rangeLabel}</span>
                </div>
                <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground">
                  {heading}
                </h2>
                {summary && (
                  <p className="max-w-xl text-sm text-muted-foreground">
                    {summary}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <span>Aşağı kaydırarak ilerleyin</span>
              <span className="inline-block h-1.5 w-16 overflow-hidden rounded-full bg-border">
                <motion.span
                  className="block h-full bg-primary origin-left"
                  style={{ scaleX: scrollYProgress }}
                />
              </span>
            </div>
          </div>

          <div className="relative h-[430px] overflow-hidden rounded-3xl border border-border bg-card/70 px-10 shadow-sm">
            <motion.div
              style={{ x: trackX }}
              className="relative flex h-full w-[190%] items-center"
            >
              {/* Central horizontal axis */}
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-border" />
              <motion.div
                style={{ scaleX: spineScale }}
                className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 origin-left bg-primary"
              />

              <div className="relative z-10 grid w-full grid-cols-6 gap-6">
                {milestones.map((item, idx) => {
                  const isTop = item.position === "top";
                  return (
                    <div
                      key={item.date + idx}
                      className="relative flex h-[380px] flex-col justify-center"
                    >
                      <div
                        className={cn(
                          "relative flex flex-col gap-1.5 pl-4",
                          isTop
                            ? "mb-auto pb-8 pt-2"
                            : "mt-auto pb-2 pt-8"
                        )}
                      >
                        {/* Vertical stem connecting to central axis */}
                        <span
                          className={cn(
                            "absolute left-0 w-px bg-primary/70",
                            isTop ? "bottom-0 h-14" : "top-0 h-14"
                          )}
                        />
                        {/* Node dot on the axis */}
                        <span
                          className={cn(
                            "absolute -left-[4.5px] h-2.5 w-2.5 rounded-full border-2 border-background bg-primary",
                            isTop ? "-bottom-[5px]" : "-top-[5px]"
                          )}
                        />
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                          {item.date}
                        </span>
                        <h3 className="font-serif text-lg font-semibold leading-snug text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet fallback vertical timeline */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:hidden">
        <div className="mb-8 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span>{badge} · {rangeLabel}</span>
          </div>
          <h2 className="font-serif text-3xl font-semibold tracking-tight">
            {heading}
          </h2>
          {summary && (
            <p className="text-sm text-muted-foreground">{summary}</p>
          )}
        </div>

        <div className="relative space-y-8 border-l border-primary/40 pl-6">
          {milestones.map((item, idx) => (
            <div key={item.date + idx} className="relative space-y-1">
              <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                {item.date}
              </span>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
