import { Timeline, type TimelineMilestone } from "@/components/ui/Timeline";

const CAREER_MILESTONES: TimelineMilestone[] = [
  {
    date: "2002 · Başlangıç",
    title: "Maliye Teftiş & Hesap Uzmanlığı",
    description:
      "İstanbul Üniversitesi İktisat Fakültesi mezuniyetinin ardından Hazine ve Maliye Bakanlığı bünyesinde büyük ölçekli holding ve banka denetimlerinde görev aldı.",
    position: "top",
  },
  {
    date: "2008 · Ruhsat",
    title: "Yeminli Mali Müşavirlik Yetkisi",
    description:
      "3568 sayılı Kanun kapsamında Yeminli Mali Müşavir unvanını alarak bağımsız tam tasdik ve vergi danışmanlığı ofisini kurdu.",
    position: "bottom",
  },
  {
    date: "2014 · Genişleme",
    title: "Uluslararası M&A ve Denetim Masası",
    description:
      "Avrupa ve Körfez sermayeli doğrudan yabancı yatırımlarda Tax Due Diligence ve transfer fiyatlandırması birimini faaliyete geçirdi.",
    position: "top",
  },
  {
    date: "2019 · Ölçek",
    title: "100+ Kıdemli Denetçi & Uzman Kadro",
    description:
      "İstanbul Levent merkez ofisinin ardından Ankara ve İzmir temsilcilikleriyle Türkiye genelinde 320'yi aşkın kurumsal gruba hizmet vermeye başladı.",
    position: "bottom",
  },
  {
    date: "2023 · Teknoloji",
    title: "Dijital Karşıt İnceleme & Risk Motoru",
    description:
      "e-Defter ve e-Fatura verilerini gerçek zamanlı mevzuat senaryolarıyla tarayan tescilli vergi riski erken uyarı altyapısını devreye aldı.",
    position: "top",
  },
  {
    date: "2026 · Liderlik",
    title: "₺48 Milyar+ Tasdik Hacmiyle Sektör Zirvesi",
    description:
      "BIST 100 şirketleri, enerji devleri ve ihracat şampiyonlarının birincil YMM çözüm ortağı olarak Türkiye'nin en büyük yerli YMM yapılanması konumuna ulaştı.",
    position: "bottom",
  },
];

export function AboutSection() {
  return (
    <section id="hakkimizda" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 pt-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Hakkımızda &amp; Kurucu Profili
            </p>
            <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              “Büyük dalgaları yaratan şey fırtına değil, zamanında fark
              edilmeyen küçük açıklar ve bilanço kırılganlıklarıdır.”
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Kurucumuz <strong className="text-foreground">YMM Ferhat Yılmaz</strong>,
              kamu denetim geleneğinden gelen mevzuat titizliğini özel sektörün
              hız ve strateji ihtiyacıyla birleştirir. Ofisimiz; yalnızca geçmiş
              dönem beyannamelerini tasdik eden bir yapı değil, yönetim
              kurullarının finansal kararlarına kalkan olan stratejik bir akıl
              merkezidir.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
              <img
                src="/images/about-archive.jpg"
                alt="Ferhat Yılmaz YMM Kurumsal Arşivi ve Kütüphanesi"
                className="h-64 w-full object-cover"
              />
              <div className="grid grid-cols-3 divide-x divide-border border-t border-border p-4 text-center">
                <div>
                  <p className="font-serif text-xl font-semibold text-primary">
                    110+
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Uzman &amp; Denetçi
                  </p>
                </div>
                <div>
                  <p className="font-serif text-xl font-semibold text-primary">
                    3 İl
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    İstanbul · Ankara · İzmir
                  </p>
                </div>
                <div>
                  <p className="font-serif text-xl font-semibold text-primary">
                    %99.8
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Uzlaşma Başarısı
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Timeline
        badge="Kariyer Zaman Tüneli"
        heading="24 Yıllık Kurumsal Yolculuk"
        rangeLabel="2002–2026"
        summary="Hazine müfettişliği disiplininden Türkiye'nin en büyük yerli Yeminli Mali Müşavirlik yapısına uzanan kilometre taşlarımız."
        introImage="/images/about-archive.jpg"
        introImageAlt="Ferhat Yılmaz YMM Arşiv Kütüphanesi"
        milestones={CAREER_MILESTONES}
      />
    </section>
  );
}
