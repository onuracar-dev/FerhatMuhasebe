import { AccordionOS, type AccordionItem } from "@/components/accordionos";

const YMM_SERVICES: AccordionItem[] = [
  {
    id: "tam-tasdik",
    title: "Tam Tasdik & Denetim",
    badge: "01",
    claim:
      "Kurumlar vergisi beyannamelerinin mevzuata tam uyumu ve yıllık tam tasdik güvencesi.",
    image: "/images/service-audit.jpg",
    alt: "Tam tasdik ve bağımsız denetim illüstrasyonu",
  },
  {
    id: "vergi-iade",
    title: "KDV İadesi & Planlama",
    badge: "02",
    claim:
      "İhracat ve indirimli oran KDV iade süreçlerinde hızlı raporlama ile güçlü nakit akışı.",
    image: "/images/service-tax.jpg",
    alt: "Vergi planlaması ve KDV iadesi illüstrasyonu",
  },
  {
    id: "vergi-uyusmazlik",
    title: "Vergi İnceleme & Uzlaşma",
    badge: "03",
    claim:
      "Müfettiş incelemelerinde teknik savunma ve tarhiyat öncesi uzlaşma temsili.",
    image: "/images/service-strategy.jpg",
    alt: "Vergi inceleme ve stratejik rehberlik illüstrasyonu",
  },
  {
    id: "uluslararasi-danismanlik",
    title: "M&A & Uluslararası Mevzuat",
    badge: "04",
    claim:
      "Birleşme, devir ve transfer fiyatlandırması süreçlerinde uçtan uca mali danışmanlık.",
    image: "/images/service-global.jpg",
    alt: "Uluslararası mevzuat ve pusula illüstrasyonu",
  },
];

export function ServicesSection() {
  return (
    <section
      id="hizmetler"
      className="border-t border-border/50 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-xl space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Hizmetler
          </p>
          <h2 className="text-3xl font-medium leading-[1.14] tracking-[-0.025em] text-foreground sm:text-4xl">
            Dört temel uzmanlıkta denetim.
          </h2>
        </div>

        <AccordionOS
          items={YMM_SERVICES}
          staticImage="/images/hero-cobalt.jpg"
          containerWidth="100%"
          containerHeight={500}
          autoPlay
          autoPlayInterval={4800}
          pauseOnHover
        />
      </div>
    </section>
  );
}
