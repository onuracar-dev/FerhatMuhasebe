import { AnimatedPath } from "@/components/ui/AnimatedPath";

const AUTHORITY_METRICS = [
  { value: "₺48 Milyar+", label: "Tasdik edilen yıllık işlem hacmi" },
  { value: "320+", label: "Holding ve kurumsal müvekkil" },
  { value: "24 Yıl", label: "Kesintisiz YMM ve vergi denetimi" },
] as const;

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
    <section className="border-t border-border/50 bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-16 px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {AUTHORITY_METRICS.map((metric) => (
            <div key={metric.label} className="space-y-2">
              <p className="text-3xl font-medium tracking-[-0.025em] text-foreground sm:text-4xl">
                {metric.value}
              </p>
              <p className="text-sm font-normal leading-relaxed text-muted-foreground">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-8 border-t border-border/50 pt-12 md:flex-row md:items-center">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center text-primary">
              <AnimatedPath
                viewBox="0 0 120 120"
                paths={YMM_SEAL_PATHS}
                pathLengthDuration={1.4}
                pathDelay={0.14}
                className="h-full w-full"
              />
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                3568 Sayılı Kanun · Resmî Tasdik Yetkisi
              </p>
              <p className="text-lg font-medium tracking-tight text-foreground sm:text-xl">
                Tam Yetkili Yeminli Mali Müşavirlik Mührü
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <div className="w-44 text-primary">
              <AnimatedPath
                viewBox="0 0 270 84"
                paths={SIGNATURE_PATHS}
                pathLengthDuration={1.8}
                pathDelay={0.25}
                className="h-12 w-full"
              />
            </div>
            <span className="text-xs text-muted-foreground">
              YMM Ferhat Yılmaz · Sicil 34-0482
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
