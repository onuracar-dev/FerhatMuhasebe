import BlurText from "@/components/BlurText";
import { useSwipeTheme } from "@/hooks/use-swipe-theme";

export function HeroSection() {
  const { theme } = useSwipeTheme();
  const heroImage =
    theme === "dark" ? "/images/hero-gold.jpg" : "/images/hero-cobalt.jpg";

  return (
    <section
      id="hero"
      className="relative flex min-h-[88vh] items-center overflow-hidden"
    >
      <img
        src={heroImage}
        alt="Görünmeyen mali ve vergi dalgalarına karşı sarsılmaz duruş"
        className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
        <div className="max-w-lg space-y-4">
          <BlurText
            as="h1"
            text="Görünmeyen dalgalar büyümeden önce denge."
            delay={45}
            animateBy="words"
            direction="bottom"
            trigger="load"
            blur={8}
            distance={18}
            className="text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]"
          />

          <p className="text-base font-normal leading-relaxed text-muted-foreground sm:text-lg">
            Ferhat Yılmaz Yeminli Mali Müşavirlik.
          </p>
        </div>
      </div>
    </section>
  );
}
