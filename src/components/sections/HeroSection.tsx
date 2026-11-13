import { ArrowRight, ShieldCheck } from "lucide-react";
import BlurText from "@/components/BlurText";
import { useSwipeTheme } from "@/hooks/use-swipe-theme";

const AUTHORITY_METRICS = [
  { value: "₺48 Milyar+", label: "Tasdik Edilen İşlem Hacmi" },
  { value: "320+", label: "Holding ve BIST Kurumsal Müvekkil" },
  { value: "24 Yıl", label: "Kesintisiz YMM & Vergi Denetimi" },
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
      className="relative min-h-[92vh] overflow-hidden border-b border-border"
    >
      <img
        src={heroImage}
        alt="Görünmeyen mali ve vergi dalgalarına karşı sarsılmaz duruş"
        className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-between px-6 py-16 sm:py-24">
        <div className="max-w-2xl space-y-7 pt-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-4 py-1.5 text-xs font-medium tracking-wide text-primary shadow-sm backdrop-blur-md">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>TÜRKİYE&apos;NİN EN BÜYÜK YEMİNLİ MALİ MÜŞAVİRLİK OFİSİ</span>
          </div>

          <BlurText
            as="h1"
            text="Görünmeyen Dalgalar Büyümeden Önce Dengeyi Kuruyoruz."
            delay={55}
            animateBy="words"
            direction="bottom"
            trigger="load"
            blur={10}
            distance={24}
            className="font-serif text-4xl font-semibold leading-[1.06] tracking-tight text-foreground sm:text-6xl"
          />

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Ferhat Yılmaz Yeminli Mali Müşavirlik; vergi uyuşmazlıkları, tam
            tasdik, uluslararası transfer fiyatlandırması ve birleşme
            denetimlerinde sermayenizi görünmeyen risklere karşı mutlak
            mevzuat hâkimiyetiyle korur.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              type="button"
              onClick={() => scrollTo("iletisim")}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Özel Danışmanlık Planla</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo("hizmetler")}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:border-primary/50 hover:bg-accent cursor-pointer"
            >
              <span>Hizmet Alanlarımız</span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 border-t border-border/80 pt-8 sm:grid-cols-3">
          {AUTHORITY_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-border/80 bg-card/80 p-5 backdrop-blur-md"
            >
              <p className="font-serif text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
                {metric.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
