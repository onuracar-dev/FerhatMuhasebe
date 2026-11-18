import { Moon, Sun } from "lucide-react";
import { useSwipeTheme } from "@/hooks/use-swipe-theme";

export function ThemeToggleButton() {
  const { theme, triggerSwipe, isAnimating } = useSwipeTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => triggerSwipe(isDark ? "right-to-left" : "left-to-right")}
      disabled={isAnimating}
      aria-label={isDark ? "Kobalt Gündüz Temasına Geç" : "Altın Gece Temasına Geç"}
      className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-foreground/30 disabled:opacity-60"
    >
      {isDark ? (
        <>
          <Sun className="h-3.5 w-3.5 text-primary" />
          <span>Aydınlık Mod</span>
        </>
      ) : (
        <>
          <Moon className="h-3.5 w-3.5 text-primary" />
          <span>Karanlık Mod</span>
        </>
      )}
    </button>
  );
}

