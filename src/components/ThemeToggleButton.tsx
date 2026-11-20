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
      className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-accent disabled:opacity-60"
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

