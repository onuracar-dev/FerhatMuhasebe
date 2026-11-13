"use client";

import React, { useState, useEffect } from "react";
import { flushSync } from "react-dom";
import {
  ThemeContext,
  type SwipeDirection,
  type ThemeContextType,
} from "@/hooks/use-swipe-theme";

const THEME_STORAGE_KEY = "ferhat-ymm-theme";

interface DocumentWithViewTransition {
  startViewTransition?: (callback: () => void) => {
    ready: Promise<void>;
    finished?: Promise<void>;
  };
}

interface CustomWindow extends Window {
  __viewTransitionStyleCount?: number;
}

const normalizeDirection = (dir: SwipeDirection): SwipeDirection => {
  switch (dir) {
    case "left":
      return "left-to-right";
    case "right":
      return "right-to-left";
    case "top":
      return "top-to-bottom";
    case "bottom":
      return "bottom-to-top";
    default:
      return dir;
  }
};

const getClipPathKeyframes = (dir: SwipeDirection, angle: number) => {
  const rad = ((angle - 90) * Math.PI) / 180;
  const skew = Math.tan(rad) * 100;
  const pad = Math.abs(skew);

  switch (dir) {
    case "left-to-right":
      return [
        {
          clipPath: `polygon(${-10 - pad}% 0, ${-10 - pad}% 0, ${
            -10 - pad - skew
          }% 100%, ${-10 - pad - skew}% 100%)`,
        },
        {
          clipPath: `polygon(${-10 - pad}% 0, ${110 + pad}% 0, ${
            110 + pad - skew
          }% 100%, ${-10 - pad - skew}% 100%)`,
        },
      ];
    case "right-to-left":
      return [
        {
          clipPath: `polygon(${110 + pad}% 0, ${110 + pad}% 0, ${
            110 + pad - skew
          }% 100%, ${110 + pad - skew}% 100%)`,
        },
        {
          clipPath: `polygon(${-10 - pad}% 0, ${110 + pad}% 0, ${
            110 + pad - skew
          }% 100%, ${-10 - pad - skew}% 100%)`,
        },
      ];
    case "top-to-bottom": {
      const radV = (angle * Math.PI) / 180;
      const skewV = Math.tan(radV) * 100;
      const padV = Math.abs(skewV);
      return [
        {
          clipPath: `polygon(0 ${-10 - padV}%, 100% ${-10 - padV - skewV}%, 100% ${
            -10 - padV - skewV
          }%, 0 ${-10 - padV}%)`,
        },
        {
          clipPath: `polygon(0 ${-10 - padV}%, 100% ${-10 - padV - skewV}%, 100% ${
            110 + padV - skewV
          }%, 0 ${110 + padV}%)`,
        },
      ];
    }
    case "bottom-to-top": {
      const radV2 = (angle * Math.PI) / 180;
      const skewV2 = Math.tan(radV2) * 100;
      const padV2 = Math.abs(skewV2);
      return [
        {
          clipPath: `polygon(0 ${110 + padV2}%, 100% ${110 + padV2 - skewV2}%, 100% ${
            110 + padV2 - skewV2
          }%, 0 ${110 + padV2}%)`,
        },
        {
          clipPath: `polygon(0 ${-10 - padV2}%, 100% ${-10 - padV2 - skewV2}%, 100% ${
            110 + padV2 - skewV2
          }%, 0 ${110 + padV2}%)`,
        },
      ];
    }
    case "top-left":
      return [
        { clipPath: "polygon(0 0, 0 0, 0 0)" },
        { clipPath: "polygon(0 0, 200% 0, 0 200%)" },
      ];
    case "top-right":
      return [
        { clipPath: "polygon(100% 0, 100% 0, 100% 0)" },
        { clipPath: "polygon(100% 0, -100% 0, 100% 200%)" },
      ];
    case "bottom-left":
      return [
        { clipPath: "polygon(0 100%, 0 100%, 0 100%)" },
        { clipPath: "polygon(0 100%, 200% 100%, 0 -100%)" },
      ];
    case "bottom-right":
      return [
        { clipPath: "polygon(100% 100%, 100% 100%, 100% 100%)" },
        { clipPath: "polygon(100% 100%, -100% 100%, 100% -100%)" },
      ];
    default:
      return [];
  }
};

export interface SwipeThemeProviderProps {
  children?: React.ReactNode;
  duration?: number;
  easing?: string;
  onSwipe?: () => void;
  theme?: "light" | "dark";
  onThemeChange?: (theme: "light" | "dark") => void;
  getKeyframes?: (dir: SwipeDirection) => Keyframe[] | PropertyIndexedKeyframes;
  direction?: SwipeDirection;
  angle?: number;
}

export default function SwipeThemeProvider({
  children,
  duration = 650,
  easing = "ease-in-out",
  onSwipe,
  theme: themeProp,
  onThemeChange,
  getKeyframes,
  direction: defaultDirection = "left",
  angle = 0,
}: SwipeThemeProviderProps) {
  const [localTheme, setLocalTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === "dark" || saved === "light") {
        return saved;
      }
      return document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
    }
    return "light";
  });
  const [isAnimating, setIsAnimating] = useState(false);

  const isControlled = themeProp !== undefined;
  const activeTheme = isControlled ? themeProp : localTheme;

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", activeTheme);
    if (activeTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [activeTheme]);

  useEffect(() => {
    const styleId = "great-ui-view-transition-styles";
    let styleEl = document.getElementById(styleId) as HTMLStyleElement;
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = styleId;
      styleEl.innerHTML = `
        ::view-transition-old(root),
        ::view-transition-new(root) {
          animation: none !important;
          mix-blend-mode: normal !important;
          display: block !important;
          height: 100% !important;
          width: 100% !important;
          object-fit: cover !important;
        }
        ::view-transition-image-pair(root) {
          isolation: auto !important;
        }
        ::view-transition-old(root) {
          z-index: 1 !important;
        }
        ::view-transition-new(root) {
          z-index: 9999 !important;
        }
      `;
      document.head.appendChild(styleEl);
    }

    if (typeof window !== "undefined") {
      (window as unknown as CustomWindow).__viewTransitionStyleCount =
        ((window as unknown as CustomWindow).__viewTransitionStyleCount || 0) +
        1;
    }

    return () => {
      if (typeof window !== "undefined") {
        (window as unknown as CustomWindow).__viewTransitionStyleCount =
          Math.max(
            0,
            ((window as unknown as CustomWindow).__viewTransitionStyleCount ||
              0) - 1,
          );
        if (
          (window as unknown as CustomWindow).__viewTransitionStyleCount === 0
        ) {
          const el = document.getElementById(styleId);
          if (el) el.remove();
        }
      }
    };
  }, []);

  const triggerSwipe = (customDir?: SwipeDirection) => {
    if (typeof window !== "undefined") {
      window.getSelection()?.removeAllRanges();
    }

    if (isAnimating) return;

    const activeDir = normalizeDirection(customDir || defaultDirection);
    const defaultAngleForDir =
      activeDir === "top-to-bottom" || activeDir === "bottom-to-top" ? 0 : 90;
    const activeAngle = defaultAngleForDir + angle;
    const targetTheme = activeTheme === "light" ? "dark" : "light";

    const applyThemeChange = () => {
      if (!isControlled) {
        setLocalTheme(targetTheme);
      }

      const root = document.documentElement;
      root.setAttribute("data-theme", targetTheme);
      if (targetTheme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      window.localStorage.setItem(THEME_STORAGE_KEY, targetTheme);

      if (onThemeChange) {
        onThemeChange(targetTheme);
      }
    };

    const doc = document as unknown as DocumentWithViewTransition;

    if (
      typeof window === "undefined" ||
      !doc.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      applyThemeChange();
      if (onSwipe) onSwipe();
      return;
    }

    setIsAnimating(true);

    const rawKeyframes = getKeyframes
      ? getKeyframes(activeDir)
      : getClipPathKeyframes(activeDir, activeAngle);

    let fromClip = "";
    let toClip = "";
    if (Array.isArray(rawKeyframes) && rawKeyframes.length >= 2) {
      fromClip = (rawKeyframes[0] as { clipPath?: string }).clipPath || "";
      toClip = (rawKeyframes[1] as { clipPath?: string }).clipPath || "";
    }

    const animStyleId = "great-ui-swipe-anim-style";
    let styleEl = document.getElementById(
      animStyleId,
    ) as HTMLStyleElement | null;
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = animStyleId;
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = `
      @keyframes great-ui-swipe-wipe {
        from {
          clip-path: ${fromClip};
          -webkit-clip-path: ${fromClip};
        }
        to {
          clip-path: ${toClip};
          -webkit-clip-path: ${toClip};
        }
      }
      ::view-transition-new(root) {
        animation: great-ui-swipe-wipe ${duration}ms ${easing} both !important;
      }
    `;

    const cleanup = () => {
      const el = document.getElementById(animStyleId);
      if (el) el.remove();
      setIsAnimating(false);
    };

    try {
      const transition = doc.startViewTransition(() => {
        flushSync(() => {
          applyThemeChange();
          if (onSwipe) onSwipe();
        });
      });

      if (transition && transition.finished) {
        transition.finished.then(cleanup).catch(cleanup);
      } else {
        setTimeout(cleanup, duration);
      }
    } catch {
      cleanup();
      applyThemeChange();
      if (onSwipe) onSwipe();
    }
  };

  const contextValue: ThemeContextType = {
    theme: activeTheme,
    direction: defaultDirection,
    triggerSwipe,
    isAnimating,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Great UI Component
 *
 * Built with React, TypeScript, Tailwind CSS, and Framer Motion.
 * Designed to be accessible, customizable, and production-ready.
 *
 * Website: https://great-ui.com
 * GitHub: https://github.com/Saurabh-2607/GreatUI
 * X (Great UI): https://x.com/GreatUIHQ
 *
 * Released under the Great UI Custom License Agreement.
 * Contributions, issues, and feature requests are always welcome.
 *
 * Author: Saurabh Sharma
 * X: https://x.com/srbh_here
 */
