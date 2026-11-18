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
  badge = "Kariyer",
  heading = "Yolculuk",
  rangeLabel = "2002–2026",
  milestones,
  className,
}: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const trackX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const spineScale = useTransform(scrollYProgress, [0, 0.95], [0.08, 1]);

  return (
    <div ref={containerRef} className={cn("relative lg:h-[200vh]", className)}>
      <div className="hidden lg:sticky lg:top-16 lg:flex lg:h-[calc(100vh-4rem)] lg:flex-col lg:justify-center lg:overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-10 flex items-end justify-between gap-8">
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {badge} · {rangeLabel}
              </p>
              <h2 className="text-3xl font-medium leading-[1.14] tracking-[-0.025em] text-foreground">
                {heading}
              </h2>
            </div>

            <span className="inline-block h-[2px] w-20 overflow-hidden rounded-full bg-border/70">
              <motion.span
                className="block h-full origin-left bg-foreground"
                style={{ scaleX: scrollYProgress }}
              />
            </span>
          </div>

          <div className="relative h-[380px] overflow-hidden border-y border-border/50">
            <motion.div
              style={{ x: trackX }}
              className="relative flex h-full w-[180%] items-center"
            >
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-border/60" />
              <motion.div
                style={{ scaleX: spineScale }}
                className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 origin-left bg-primary"
              />

              <div className="relative z-10 grid w-full grid-cols-6 gap-8">
                {milestones.map((item, idx) => {
                  const isTop = item.position === "top";
                  return (
                    <div
                      key={item.date + idx}
                      className="relative flex h-[340px] flex-col justify-center"
                    >
                      <div
                        className={cn(
                          "relative flex flex-col gap-1.5 pl-4",
                          isTop ? "mb-auto pb-6 pt-4" : "mt-auto pb-4 pt-6",
                        )}
                      >
                        <span
                          className={cn(
                            "absolute left-0 w-px bg-border",
                            isTop ? "bottom-0 h-12" : "top-0 h-12",
                          )}
                        />
                        <span
                          className={cn(
                            "absolute -left-[3.5px] h-2 w-2 rounded-full bg-primary",
                            isTop ? "-bottom-[4px]" : "-top-[4px]",
                          )}
                        />
                        <span className="text-xs font-medium tracking-wider text-primary">
                          {item.date}
                        </span>
                        <h3 className="text-lg font-medium leading-snug tracking-[-0.015em] text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
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

      <div className="mx-auto max-w-6xl px-6 py-16 lg:hidden">
        <div className="mb-10 space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            {badge} · {rangeLabel}
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.025em] text-foreground">
            {heading}
          </h2>
        </div>

        <div className="relative space-y-8 border-l border-border/60 pl-6">
          {milestones.map((item, idx) => (
            <div key={item.date + idx} className="relative space-y-1">
              <span className="absolute -left-[28.5px] top-1.5 h-2 w-2 rounded-full bg-primary" />
              <span className="text-xs font-medium tracking-wider text-primary">
                {item.date}
              </span>
              <h3 className="text-lg font-medium text-foreground">
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
