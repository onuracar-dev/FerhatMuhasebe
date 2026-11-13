import { createContext, useContext } from "react";

export type SwipeDirection =
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "left-to-right"
  | "right-to-left"
  | "top-to-bottom"
  | "bottom-to-top"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export interface ThemeContextType {
  theme: "light" | "dark";
  direction: SwipeDirection;
  triggerSwipe: (dir?: SwipeDirection) => void;
  isAnimating: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useSwipeTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useSwipeTheme must be used within a SwipeThemeProvider");
  }
  return context;
}
