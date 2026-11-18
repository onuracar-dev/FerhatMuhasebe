import { ClientCard } from "@/components/client-card";

const REFERENCES = [
  {
    name: "Marmara Enerji Grubu",
    country: "İstanbul · 14 İştirak",
    sector: "Enerji",
    service:
      "Yıllık tam tasdik, yatırım teşvik kapanışları ve uluslararası proje finansmanı danışmanlığı.",
    complianceRate: 100,
    yearsActive: 14,
  },
  {
    name: "Ege Otomotiv A.Ş.",
    country: "İzmir · Avrupa İhracatı",
    sector: "Otomotiv",
    service:
      "İhracat KDV iadesi tasdik süreçleri, transfer fiyatlandırması ve gümrük vergi denetimi.",
    complianceRate: 100,
    yearsActive: 11,
  },
  {
    name: "Kuzey Teknoloji Holding",
    country: "Ankara · 6 Şirket",
    sector: "Yazılım",
    service:
      "Ar-Ge ve Teknopark istisna tasdiki ile yatırım turu vergi incelemeleri.",
    complianceRate: 100,
    yearsActive: 8,
  },
] as const;

export function ReferencesSection() {
  return (
    <section
      id="referanslar"
      className="border-t border-border/50 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-xl space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Referanslar
          </p>
          <h2 className="text-3xl font-medium leading-[1.14] tracking-[-0.025em] text-foreground sm:text-4xl">
            Sektör liderlerinin tercihi.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {REFERENCES.map((ref) => (
            <ClientCard
              key={ref.name}
              name={ref.name}
              country={ref.country}
              sector={ref.sector}
              service={ref.service}
              complianceRate={ref.complianceRate}
              yearsActive={ref.yearsActive}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
