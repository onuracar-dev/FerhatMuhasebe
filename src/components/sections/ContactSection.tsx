import { Building2, Clock, Mail, PhoneCall, ShieldCheck } from "lucide-react";
import { LinkedinCard } from "@/components/ui/LinkedInCard";
import { InstagramCard } from "@/components/ui/InstagramCard";
import { FacebookCard } from "@/components/ui/FacebookCard";

const CONTACT_CHANNELS = [
  {
    icon: PhoneCall,
    label: "Doğrudan Müşavirlik Hattı",
    value: "+90 (212) 284 40 00",
    detail: "Hafta içi 08:30 – 18:30 kurumsal santral ve sekreterya",
    href: "tel:+902122844000",
  },
  {
    icon: ShieldCheck,
    label: "Vergi İnceleme & KDV Acil Hattı",
    value: "+90 (532) 410 24 00",
    detail: "Tutanağa bağlanacak acil vergi denetimleri için 7/24 destek",
    href: "tel:+905324102400",
  },
  {
    icon: Mail,
    label: "Resmi Başvuru & Evrak İletimi",
    value: "danisma@ferhatymm.com.tr",
    detail: "KEP: ferhatyilmaz.ymm@hs01.kep.tr",
    href: "mailto:danisma@ferhatymm.com.tr",
  },
  {
    icon: Building2,
    label: "İstanbul Merkez Ofis",
    value: "Büyükdere Cad. No: 185, Kanyon Ofis Kat: 14",
    detail: "34394 Levent / Şişli — Ankara & İzmir irtibat şubeleriyle",
    href: "#harita",
  },
];

export function ContactSection() {
  return (
    <section
      id="iletisim"
      className="relative border-t border-border/60 bg-background py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              İletişim Kanalları
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              İlk Görüşmeden Tam Tasdik Raporuna{" "}
              <span className="italic text-primary">Aracısız Erişim</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Tüm denetim süreçleri bizzat Yeminli Mali Müşavir Ferhat Yılmaz ve
              sektörel vergi direktörleri tarafından yönetilir. Doğrudan telefon,
              kurumsal e-posta veya dijital sosyal kanallar üzerinden ekibimize
              ulaşabilirsiniz.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_CHANNELS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="group flex flex-col justify-between rounded-2xl border border-border/70 bg-card/60 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card"
              >
                <div>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/80 bg-background text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1.5 font-serif text-lg font-semibold leading-snug text-foreground">
                    {item.value}
                  </p>
                </div>
                <p className="mt-4 border-t border-border/50 pt-3 text-xs leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </a>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-border/70 bg-card/40 px-6 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Clock className="h-3.5 w-3.5" />
              Dijital Yayın & Sosyal Ağlar
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Güncel Danıştay içtihatları, Resmî Gazete tebliğ özetleri ve vergi
              planlama notları için kartların üzerine gelerek profilleri
              inceleyin.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <LinkedinCard
              username="ferhatyilmazymm"
              name="Ferhat Yılmaz, YMM"
              headline="Kurucu Ortak · Tam Tasdik, KDV İadesi & Vergi Uyuşmazlıkları"
              location="Levent, İstanbul · Türkiye"
              connections="4.850+"
              avatarUrl="/images/hero-cobalt.jpg"
              bannerUrl="/images/about-archive.jpg"
              text="Profesyonel ağ:"
              linkText="LinkedIn"
              labelClassName="text-sm sm:text-base text-muted-foreground"
              linkClassName="text-sm sm:text-base font-semibold text-foreground hover:text-primary"
              popoverClassName="border-border bg-card/95"
            />

            <InstagramCard
              username="ferhatyilmaz.ymm"
              name="Ferhat Yılmaz YMM"
              bio="Yeminli Mali Müşavirlik · Resmî Gazete notları, sermaye şirketleri için haftalık vergi özetleri ve ofis gündemi."
              posts="342"
              followers="18.4B"
              following="124"
              avatarUrl="/images/service-strategy.jpg"
              text="Günlük özet:"
              linkText="Instagram"
              labelClassName="text-sm sm:text-base text-muted-foreground"
              linkClassName="text-sm sm:text-base font-semibold text-foreground hover:text-primary"
              popoverClassName="border-border bg-card/95"
            />

            <FacebookCard
              username="FerhatYilmazYMM"
              name="Ferhat Yılmaz YMM & Bağımsız Denetim"
              bio="KOBİ, holding ve sanayi kuruluşları için mevzuat duyuruları, webinar davetleri ve vergi takvimi hatırlatmaları."
              friends="6.2B"
              mutualFriends="48"
              avatarUrl="/images/blog-ledger.jpg"
              bannerUrl="/images/service-audit.jpg"
              text="Mevzuat bülteni:"
              linkText="Facebook"
              labelClassName="text-sm sm:text-base text-muted-foreground"
              linkClassName="text-sm sm:text-base font-semibold text-foreground hover:text-primary"
              popoverClassName="border-border bg-card/95"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
