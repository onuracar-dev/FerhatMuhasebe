"use client";

import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  title: string;
  description: string;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ items, className, ...props }, ref) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const innerRef = useRef<HTMLDivElement>(null);

    // Merge forwarded ref and inner ref
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          innerRef.current &&
          !innerRef.current.contains(event.target as Node)
        ) {
          setActiveIndex(null);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleAccordion = (index: number) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    return (
      <div ref={innerRef} className={cn("w-full", className)} {...props}>
        <div className="mx-auto w-full max-w-3xl divide-y divide-border/50 border-y border-border/50">
          {items.map((item, index) => (
            <div key={index} className="transition-colors">
              <button
                type="button"
                aria-expanded={activeIndex === index}
                className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left text-base font-medium text-foreground transition-colors hover:text-primary"
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.title}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0 text-lg font-normal text-muted-foreground"
                >
                  {activeIndex === index ? "−" : "+"}
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div
                      className="cursor-pointer pb-5 pr-8 text-sm leading-relaxed text-muted-foreground"
                      onClick={() => toggleAccordion(index)}
                    >
                      {item.description}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

Accordion.displayName = "Accordion";

export default Accordion;

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
 * X: https://x.com/srbh_s
 */
