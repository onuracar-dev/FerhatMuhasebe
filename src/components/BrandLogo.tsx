import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  showText?: boolean;
  size?: "md" | "lg";
}

/**
 * Kurumsal Mali Müşavirlik (MM) monogram SVG logosu.
 */
export function BrandLogo({
  className,
  showText = true,
  size = "md",
}: BrandLogoProps) {
  const iconBox = size === "lg" ? "h-12 w-12" : "h-11 w-11";

  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <div
        className={cn(
          "relative flex shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm",
          iconBox,
        )}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <rect
            x="2.5"
            y="2.5"
            width="35"
            height="35"
            rx="7.5"
            stroke="currentColor"
            strokeOpacity="0.28"
            strokeWidth="1.5"
          />
          <path
            d="M8.5 29V11H12.2L16.5 20.8L20.8 11H24.5V29H21.2V17.4L17.4 25.8H15.6L11.8 17.4V29H8.5Z"
            fill="currentColor"
          />
          <path
            d="M23.5 29V11H27.2L30.5 18.8L33.8 11H31.5"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0"
          />
          <path
            d="M25.5 29V11H29.1L31.5 17.2V29H28.3V19.6L26.2 24.4L25.5 22.8V29Z"
            fill="currentColor"
            fillOpacity="0.88"
          />
          <path
            d="M8.5 32H31.5"
            stroke="currentColor"
            strokeOpacity="0.55"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="text-base font-bold tracking-tight text-foreground sm:text-lg">
            Ferhat Muhasebe
          </span>
          <span className="text-xs font-medium text-muted-foreground">
            Yeminli Mali Müşavirlik
          </span>
        </div>
      )}
    </div>
  );
}
