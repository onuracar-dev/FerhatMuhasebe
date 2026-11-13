import { ClientCard } from "@/components/client-card";

const REFERENCES = [
  {
    name: "Marmara Enerji & Altyapı Grubu",
    country: "İstanbul · 14 İştirak",
    sector: "Enerji & Altyapı",
    service:
      "Yıllık tam tasdik, yenilenebilir enerji yatırım teşvik belgesi kapanışları ve uluslararası proje finansmanı vergi danışmanlığı.",
    complianceRate: 100,
    yearsActive: 14,
  },
  {
    name: "Ege Otomotiv İhracat A.Ş.",
    country: "İzmir · Avrupa İhracatı",
    sector: "Otomotiv & İhracat",
    service:
      "Aylık ortalama ₺180M tutarlı ihracat KDV iadesi tasdik süreçleri, transfer fiyatlandırması ve gümrük vergi denetimi.",
    complianceRate: 100,
    yearsActive: 11,
  },
  {
    name: "Kuzey Teknoloji & Fintech Holding",
    country: "Ankara · 6 Şirket",
    sector: "Teknopark & Yazılım",
    service:
      "Ar-Ge ve Teknopark vergi istisnaları tasdiki, Seri-C yatırım turu vergi incelemesi (Tax Due Diligence) ve M&A yapılandırması.",
    complianceRate: 100,
    yearsActive: 8,
  },
] as const;

export function ReferencesSection() {
  return (
    <section id="referanslar" className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Kurumsal Referanslar
            </p>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Sektör Liderlerinin Güvenini Taşıyoruz
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Her müvekkil grubuna özel atanan kıdemli YMM denetim ekipleri ile
            sıfır mevzuat sürprizi ve tam zamanında tasdik güvencesi.
          </p>
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
