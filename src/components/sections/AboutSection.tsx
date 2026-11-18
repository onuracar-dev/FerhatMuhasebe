import { Timeline, type TimelineMilestone } from "@/components/ui/Timeline";

const CAREER_MILESTONES: TimelineMilestone[] = [
  {
    date: "2002",
    title: "Maliye Teftiş",
    description:
      "Hazine ve Maliye Bakanlığı bünyesinde büyük ölçekli holding ve banka denetimleri.",
    position: "top",
  },
  {
    date: "2008",
    title: "YMM Yetkisi",
    description:
      "3568 sayılı Kanun kapsamında bağımsız tam tasdik ve vergi danışmanlığı ofisinin kuruluşu.",
    position: "bottom",
  },
  {
    date: "2014",
    title: "Uluslararası M&A",
    description:
      "Doğrudan yabancı yatırımlarda Tax Due Diligence ve transfer fiyatlandırması masası.",
    position: "top",
  },
  {
    date: "2019",
    title: "Üç Büyük Merkez",
    description:
      "İstanbul Levent ardından Ankara ve İzmir ofisleriyle 320'yi aşkın kurumsal gruba erişim.",
    position: "bottom",
  },
  {
    date: "2023",
    title: "Dijital Risk Analizi",
    description:
      "e-Defter ve e-Fatura akışlarını tarayan erken uyarı denetim altyapısı.",
    position: "top",
  },
  {
    date: "2026",
    title: "₺48 Milyar+ Tasdik",
    description:
      "BIST 100 ve sanayi liderlerinin birincil Yeminli Mali Müşavirlik ortağı.",
    position: "bottom",
  },
];

export function AboutSection() {
  return (
    <section id="hakkimizda" className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-6xl px-6 pt-24 sm:pt-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Hakkımızda
            </p>
            <h2 className="text-3xl font-medium leading-[1.14] tracking-[-0.025em] text-foreground sm:text-4xl">
              Büyük dalgaları yaratan şey fırtına değil, zamanında fark
              edilmeyen bilanço açıklarıdır.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              Ferhat Muhasebe, kamu denetim geleneğinden gelen mevzuat
              titizliğini yönetim kurullarının karar hızıyla birleştirir.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-border/50">
              <img
                src="/images/about-archive.jpg"
                alt="Ferhat Muhasebe Kurumsal Arşivi"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <Timeline
        badge="Kariyer"
        heading="24 Yıllık Yolculuk"
        rangeLabel="2002–2026"
        milestones={CAREER_MILESTONES}
      />
    </section>
  );
}
