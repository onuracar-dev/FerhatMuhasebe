"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface ClientCardProps {
  name?: string;
  country?: string;
  image?: string;
  service?: string;
  sector?: string;
  complianceRate?: number;
  yearsActive?: number;
  className?: string;
}

const GRADIENTS = {
  green: { from: "#22c55e", to: "#4ade80" },
  blue: { from: "#3b82f6", to: "#0f3d9e" },
  orange: { from: "#f59e0b", to: "#d8af5b" },
  primary: { from: "#0f3d9e", to: "#3b82f6" },
} as const;

type GradientVariant = keyof typeof GRADIENTS;

const CLIENT_PROFILES = [
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?auto=format&fit=crop&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&h=256&q=80",
];

function CircularProgress({
  value,
  size = 28,
  strokeWidth = 3,
  id,
  variant = "primary",
}: {
  value: number;
  size?: number;
  strokeWidth?: number;
  id: string;
  variant?: GradientVariant;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;
  const colors = GRADIENTS[variant];

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        className="h-full w-full -rotate-90 transform"
        viewBox={`0 0 ${size} ${size}`}
      >
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.from} />
            <stop offset="100%" stopColor={colors.to} />
          </linearGradient>
        </defs>
        <circle
          className="text-muted-foreground"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="transition-all duration-1000 ease-in-out"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke={`url(#${id})`}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{ filter: `drop-shadow(0 0 2px ${colors.from}40)` }}
        />
      </svg>
    </div>
  );
}

export function ClientCard({
  name = "Anadolu Sanayi Holding A.Ş.",
  country = "İstanbul, Türkiye",
  image,
  service = "Tam Tasdik, Konsolide Vergi Denetimi ve Uluslararası Teşvik Danışmanlığı.",
  sector = "BIST 100 · Sanayi",
  complianceRate = 100,
  yearsActive = 12,
  className,
}: ClientCardProps) {
  const idPrefix = React.useId().replace(/:/g, "");
  const yearsPercentage = Math.min(Math.max((yearsActive / 20) * 100, 15), 100);
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="relative grid grid-cols-[3.75rem_minmax(0,1fr)] grid-rows-1 items-stretch gap-2.5 overflow-hidden">
      <div className="relative w-15">
        {isExpanded ? (
          <div className="invisible flex w-full flex-col gap-1.5 p-1" aria-hidden>
            {Array.from({ length: 4 }, (_, idx) => (
              <div key={idx} className="aspect-square w-13" />
            ))}
          </div>
        ) : (
          <motion.div
            key="sidebar"
            layoutId={`${idPrefix}-wrapper`}
            className="z-10 flex w-full flex-col gap-1.5 border border-border bg-card p-1 shadow-sm"
            style={{ borderRadius: "14.4px" }}
            transition={{ type: "spring", stiffness: 350, damping: 35 }}
          >
            {CLIENT_PROFILES.slice(0, 3).map((src, idx) => (
              <motion.div
                key={idx}
                layoutId={`${idPrefix}-profile-${idx}`}
                className="aspect-square w-13 shrink-0 overflow-hidden"
                style={{ borderRadius: "12px" }}
                transition={{ type: "spring", stiffness: 350, damping: 35 }}
              >
                <motion.img
                  layout
                  src={src}
                  alt="Denetim ekibi uzmanı"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            ))}
            {CLIENT_PROFILES.length > 3 && (
              <motion.button
                type="button"
                layoutId={`${idPrefix}-counter`}
                className="flex aspect-square w-full shrink-0 cursor-pointer items-center justify-center rounded-xl bg-muted text-xs font-semibold text-muted-foreground hover:text-primary"
                onClick={(event) => {
                  event.stopPropagation();
                  setIsExpanded(true);
                }}
                transition={{ type: "spring", stiffness: 350, damping: 35 }}
              >
                +{CLIENT_PROFILES.length - 3}
              </motion.button>
            )}
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="expanded"
            layoutId={`${idPrefix}-wrapper`}
            className="absolute inset-0 z-30 flex h-full flex-col gap-3 overflow-hidden border border-border bg-card p-3 shadow-md"
            style={{ borderRadius: "14.4px" }}
            transition={{ type: "spring", stiffness: 350, damping: 35 }}
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              layout="position"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center justify-between gap-2"
            >
              <motion.button
                type="button"
                layout="position"
                onClick={() => setIsExpanded(false)}
                className="flex cursor-pointer items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="size-3.5" />
                Geri Dön
              </motion.button>
              <span className="text-[11px] font-medium text-primary">
                Atanan Denetim Ekibi
              </span>
            </motion.div>

            <div className="flex flex-row flex-wrap content-start gap-1.5 overflow-y-auto pr-1">
              {CLIENT_PROFILES.map((src, idx) => (
                <motion.div
                  key={idx}
                  layoutId={`${idPrefix}-profile-${idx}`}
                  className="z-40 aspect-square w-[54px] shrink-0 overflow-hidden"
                  style={{ borderRadius: "12px" }}
                  transition={{ type: "spring", stiffness: 350, damping: 35 }}
                >
                  <motion.img
                    layout
                    src={src}
                    alt="Denetim ekibi uzmanı"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={cn(
          "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card transition-[box-shadow] duration-150 ease-out",
          isExpanded ? "shadow-none" : "shadow-sm",
          className,
        )}
      >
        <div className="space-y-3.5 p-4">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border bg-primary/10">
                {image ? (
                  <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs font-bold text-primary">
                    {name
                      .split(" ")
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
              </div>
              <div className="min-w-0">
                <h3 className="truncate text-sm font-semibold tracking-tight text-foreground">
                  {name}
                </h3>
                <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                  <MapPin className="size-3 shrink-0" />
                  <span className="truncate">{country}</span>
                </div>
              </div>
            </div>
          </div>
          <span className="inline-block rounded-full border border-border bg-secondary/70 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
            {sector}
          </span>
          <p className="line-clamp-4 text-sm leading-relaxed text-muted-foreground">
            {service}
          </p>
        </div>

        <div className="mt-2 flex items-center gap-3 border-t border-border/60 bg-muted/40 p-4">
          <div className="flex flex-1 items-center justify-center gap-2.5">
            <CircularProgress
              id={`compliance-${idPrefix}`}
              value={complianceRate}
              variant="blue"
              size={34}
            />
            <div className="flex flex-col gap-0.5">
              <span className="text-[11px] leading-none text-muted-foreground">
                Mevzuat Uyumu
              </span>
              <span className="text-sm font-semibold text-foreground">
                %{complianceRate}
              </span>
            </div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="ml-0.5 flex flex-1 items-center justify-start gap-2.5">
            <CircularProgress
              id={`years-${idPrefix}`}
              value={yearsPercentage}
              variant="orange"
              size={34}
            />
            <div className="flex flex-col gap-0.5">
              <span className="text-[11px] leading-none text-muted-foreground">
                İşbirliği
              </span>
              <span className="text-sm font-semibold text-foreground">
                {yearsActive} Yıl
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
