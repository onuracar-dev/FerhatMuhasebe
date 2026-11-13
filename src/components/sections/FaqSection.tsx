import { Accordion, type AccordionItem } from "@/components/ui/Accordion";

const FAQ_ITEMS: AccordionItem[] = [
  {
    title: "Tam Tasdik sözleşmesi ne zaman yapılmalıdır ve şirkete ne kazandırır?",
    description:
      "Tam Tasdik sözleşmesinin hesap döneminin ilk ayı (genellikle Ocak) içinde düzenlenmesi, işletmeye sınırsız tutarda KDV iadesi alma hakkı ve Maliye nezdinde öncelikli mevzuat güvencesi sağlar. Sürekli denetim sayesinde yıl sonu kapanışında sürpriz vergi riskleri ortaya çıkmadan önlenir.",
  },
  {
    title: "YMM tasdikli KDV iadesi süreci ortalama kaç günde sonuçlanır?",
    description:
      "Dijital karşıt inceleme ve YMM Raporu hazırlık altyapımız sayesinde eksiksiz evraklı ihracat ve indirimli oran KDV iade dosyaları ortalama 14–21 iş günü içerisinde vergi dairesi nezdinde sonuçlandırılmaktadır.",
  },
  {
    title: "Vergi incelemesi başladıktan sonra YMM desteği alabilir miyiz?",
    description:
      "Evet. Vergi müfettişi tutanak aşamasından tarhiyat öncesi/sonrası uzlaşma ve vergi mahkemesi teknik mütalaa süreçlerine kadar tüm safhalarda şirketiniz adına teknik savunma ve mevzuat analizi yürütüyoruz.",
  },
  {
    title: "Şirket birleşme ve devirlerinde (M&A) YMM raporu neden kritiktir?",
    description:
      "Devir, bölünme ve nevi değişikliği işlemlerinde özsermaye tespiti ile geçmiş dönem gizli vergi risklerinin ortaya çıkarılması (Tax Due Diligence) işlemin hukuken geçerliliği ve değerleme doğruluğu için zorunludur.",
  },
  {
    title: "Bilgi güvenliği ve ticari sır gizliliği nasıl korunuyor?",
    description:
      "3568 sayılı Meslek Yasası gereği tüm ortaklarımız ve denetçilerimiz yasal sır saklama yükümlülüğü altındadır; ayrıca tüm finansal veri paylaşımları KVKK ve ISO 27001 uyumlu şifreli kanallar üzerinden yürütülür.",
  },
];

export function FaqSection() {
  return (
    <section className="border-b border-border bg-card/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Sıkça Sorulan Sorular
          </p>
          <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
            Tasdik ve Denetim Süreçleri Hakkında Merak Edilenler
          </h2>
        </div>

        <Accordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}
