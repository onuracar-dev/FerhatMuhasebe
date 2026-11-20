import { ArrowRight, ShieldCheck } from "lucide-react";
import BlurText from "@/components/BlurText";
import { useSwipeTheme } from "@/hooks/use-swipe-theme";

const HERO_METRICS = [
  { value: "₺48 Milyar+", label: "Tasdik Edilen İşlem Hacmi" },
  { value: "320+", label: "Holding ve Kurumsal Müvekkil" },
  { value: "24 Yıl", label: "Kesintisiz YMM & Denetim" },
] as const;

export function HeroSection() {
  const { theme } = useSwipeTheme();
  const heroImage =
    theme === "dark" ? "/images/hero-gold.jpg" : "/images/hero-cobalt.jpg";

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center overflow-hidden border-b border-border"
    >
      <img
        src={heroImage}
        alt="Ferhat Muhasebe kurumsal mali müşavirlik mimarisi"
        className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col justify-between px-6 py-20 sm:py-24">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-4 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur-md">
            <ShieldCheck className="h-4 w-4 shrink-0" />
            <span>3568 Sayılı Kanun · Yetkili Yeminli Mali Müşavirlik</span>
          </div>

          <BlurText
            as="h1"
            text="Mali Risklere Karşı Kurumsal Güvence ve Tam Denetim."
            delay={45}
            animateBy="words"
            direction="bottom"
            trigger="load"
            blur={8}
            distance={18}
            className="text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]"
          />

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Ferhat Muhasebe; tam tasdik, KDV iadesi, vergi uyuşmazlıkları ve
            uluslararası şirket birleşmelerinde sermayenizi mutlak mevzuat
            disipliniyle korur.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              type="button"
              onClick={() => scrollTo("iletisim")}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
            >
              <span>Danışmanlık Al</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo("hizmetler")}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card/95 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:border-primary/60 hover:bg-accent"
            >
              <span>Hizmetleri İncele</span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 border-t border-border/80 pt-8 sm:grid-cols-3">
          {HERO_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-border bg-card/90 p-5 backdrop-blur-md"
            >
              <p className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                {metric.value}
              </p>
              <p className="mt-1 text-xs font-medium text-muted-foreground">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
