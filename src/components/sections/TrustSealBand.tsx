import { AnimatedPath } from "@/components/ui/AnimatedPath";

const YMM_SEAL_PATHS = [
  { d: "M60 12 A48 48 0 1 0 60 108 A48 48 0 1 0 60 12 Z", fill: "none", strokeWidth: "2" },
  { d: "M60 20 A40 40 0 1 0 60 100 A40 40 0 1 0 60 20 Z", fill: "none", strokeWidth: "1.2" },
  { d: "M60 32 L60 88", fill: "none", strokeWidth: "2.2" },
  { d: "M42 88 L78 88", fill: "none", strokeWidth: "2.2" },
  { d: "M34 45 L86 45", fill: "none", strokeWidth: "2" },
  { d: "M34 45 L26 67 L42 67 Z", fill: "none", strokeWidth: "1.8" },
  { d: "M86 45 L78 67 L94 67 Z", fill: "none", strokeWidth: "1.8" },
];

const SIGNATURE_PATHS = [
  {
    d: "M12 58 C24 22, 42 18, 36 52 C32 72, 48 38, 62 42 C72 44, 68 62, 82 54 C96 46, 108 32, 126 38 C142 44, 152 58, 174 48 C196 38, 224 46, 256 42",
    fill: "none",
    strokeWidth: "2.6",
  },
  {
    d: "M18 70 C82 64, 165 61, 248 66",
    fill: "none",
    strokeWidth: "1.6",
  },
];

export function TrustSealBand() {
  return (
    <section className="border-b border-border bg-card/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row">
        <div className="flex items-center gap-6">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-border bg-background p-2 text-primary shadow-sm">
            <AnimatedPath
              viewBox="0 0 120 120"
              paths={YMM_SEAL_PATHS}
              pathLengthDuration={1.4}
              pathDelay={0.14}
              className="h-full w-full"
            />
          </div>
          <div className="space-y-1.5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Resmî Tasdik ve İmza Yetkisi
            </p>
            <h2 className="font-serif text-xl font-semibold tracking-tight sm:text-2xl">
              3568 Sayılı Kanun Kapsamında Tam Yetkili YMM Mührü
            </h2>
            <p className="max-w-lg text-sm text-muted-foreground">
              Her mali tablo ve tam tasdik raporu, uluslararası denetim
              standartları ve Hazine &amp; Maliye Bakanlığı mevzuatına göre bizzat
              imzalanır ve mühürlenir.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end">
          <div className="w-56 text-primary">
            <AnimatedPath
              viewBox="0 0 270 84"
              paths={SIGNATURE_PATHS}
              pathLengthDuration={1.8}
              pathDelay={0.25}
              className="h-16 w-full"
            />
          </div>
          <span className="text-xs font-medium tracking-wide text-muted-foreground">
            YMM Ferhat Yılmaz — Kurucu Ortak (Sicil No: 34-0482)
          </span>
        </div>
      </div>
    </section>
  );
}
