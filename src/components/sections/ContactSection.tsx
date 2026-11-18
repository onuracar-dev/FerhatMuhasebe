import { LinkedinCard } from "@/components/ui/LinkedInCard";
import { InstagramCard } from "@/components/ui/InstagramCard";
import { FacebookCard } from "@/components/ui/FacebookCard";
import { WhatsappCounselPreview } from "@/components/WhatsappCounselPreview";

const CONTACT_CHANNELS = [
  {
    label: "Müşavirlik Santrali",
    value: "+90 (212) 284 40 00",
    detail: "Hafta içi 08:30 – 18:30",
    href: "tel:+902122844000",
  },
  {
    label: "Vergi Denetim Acil Hattı",
    value: "+90 (532) 410 24 00",
    detail: "7/24 KDV ve inceleme desteği",
    href: "tel:+905324102400",
  },
  {
    label: "Resmî İletişim",
    value: "danisma@ferhatymm.com.tr",
    detail: "KEP: ferhatyilmaz.ymm@hs01.kep.tr",
    href: "mailto:danisma@ferhatymm.com.tr",
  },
  {
    label: "Merkez Ofis",
    value: "Büyükdere Cad. No: 185",
    detail: "Levent, İstanbul",
    href: "#harita",
  },
] as const;

export function ContactSection() {
  return (
    <section
      id="iletisim"
      className="relative border-t border-border/50 bg-background py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            İletişim
          </p>
          <h2 className="text-3xl font-medium leading-[1.14] tracking-[-0.025em] text-foreground sm:text-4xl">
            Aracısız ve doğrudan erişim.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_CHANNELS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group block border-t border-border/60 pt-5 transition-colors hover:border-foreground/50"
            >
              <p className="text-xs font-medium text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-2 text-lg font-medium leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
                {item.value}
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {item.detail}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-border/50 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Dijital Kanallar
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <LinkedinCard
              username="ferhatyilmazymm"
              name="Ferhat Yılmaz, YMM"
              headline="Kurucu Ortak · Tam Tasdik, KDV İadesi & Vergi Uyuşmazlıkları"
              location="Levent, İstanbul · Türkiye"
              connections="4.850+"
              avatarUrl="/images/hero-cobalt.jpg"
              bannerUrl="/images/about-archive.jpg"
              text="Ağ:"
              linkText="LinkedIn"
              labelClassName="text-sm text-muted-foreground"
              linkClassName="text-sm font-medium text-foreground hover:text-primary"
              popoverClassName="border-border/70 bg-card/95"
            />

            <InstagramCard
              username="ferhatyilmaz.ymm"
              name="Ferhat Yılmaz YMM"
              bio="Yeminli Mali Müşavirlik · Haftalık mevzuat özetleri ve ofis gündemi."
              posts="342"
              followers="18.4B"
              following="124"
              avatarUrl="/images/service-strategy.jpg"
              text="Yayın:"
              linkText="Instagram"
              labelClassName="text-sm text-muted-foreground"
              linkClassName="text-sm font-medium text-foreground hover:text-primary"
              popoverClassName="border-border/70 bg-card/95"
            />

            <FacebookCard
              username="FerhatYilmazYMM"
              name="Ferhat Yılmaz YMM & Denetim"
              bio="Kurumsal mevzuat duyuruları ve vergi takvimi hatırlatmaları."
              friends="6.2B"
              mutualFriends="48"
              avatarUrl="/images/blog-ledger.jpg"
              bannerUrl="/images/service-audit.jpg"
              text="Bülten:"
              linkText="Facebook"
              labelClassName="text-sm text-muted-foreground"
              linkClassName="text-sm font-medium text-foreground hover:text-primary"
              popoverClassName="border-border/70 bg-card/95"
            />
          </div>
        </div>

        <WhatsappCounselPreview />
      </div>
    </section>
  );
}
