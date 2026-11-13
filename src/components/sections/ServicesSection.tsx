import { AccordionOS, type AccordionItem } from "@/components/accordionos";

const YMM_SERVICES: AccordionItem[] = [
  {
    id: "tam-tasdik",
    title: "Tam Tasdik & Bağımsız Denetim",
    badge: "01",
    claim:
      "Kurumlar vergisi beyannamelerinizin mevzuata tam uyumu, mali tabloların bağımsız denetimi ve yıllık tam tasdik raporlaması ile tam güvence.",
    image: "/images/service-audit.jpg",
    alt: "Tam tasdik ve bağımsız denetim illüstrasyonu",
  },
  {
    id: "vergi-iade",
    title: "KDV İadesi & Vergi Planlaması",
    badge: "02",
    claim:
      "İhracat, indirimli oran ve yatırım teşvik belgeli işlemlerde hızlı KDV iade tasdik süreçleri ile nakit akışınızı güçlendiren vergi mühendisliği.",
    image: "/images/service-tax.jpg",
    alt: "Vergi planlaması ve KDV iadesi terazi illüstrasyonu",
  },
  {
    id: "vergi-uyusmazlik",
    title: "Vergi İnceleme & Uzlaşma",
    badge: "03",
    claim:
      "Vergi müfettişi incelemelerinde teknik savunma, tarhiyat öncesi ve sonrası uzlaşma temsili ile olası cezai risklerin kökünden yönetimi.",
    image: "/images/service-strategy.jpg",
    alt: "Vergi inceleme ve stratejik rehberlik deniz feneri illüstrasyonu",
  },
  {
    id: "uluslararasi-danismanlik",
    title: "M&A & Uluslararası Mevzuat",
    badge: "04",
    claim:
      "Şirket birleşme, bölünme ve devir (Due Diligence) denetimleri ile çifte vergilendirmeyi önleme anlaşmaları ve transfer fiyatlandırması raporları.",
    image: "/images/service-global.jpg",
    alt: "Uluslararası mevzuat ve pusula illüstrasyonu",
  },
];

export function ServicesSection() {
  return (
    <section id="hizmetler" className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Hizmet Alanlarımız
            </p>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Dört Temel Uzmanlıkta Kesintisiz Denetim
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Her işletmenin sermaye yapısı ve sektör regülasyonuna özel tasarlanan
            Yeminli Mali Müşavirlik çözümlerimizle tanışın.
          </p>
        </div>

        <AccordionOS
          items={YMM_SERVICES}
          staticImage="/images/hero-cobalt.jpg"
          containerWidth="100%"
          containerHeight={540}
          autoPlay
          autoPlayInterval={4800}
          pauseOnHover
        />
      </div>
    </section>
  );
}
