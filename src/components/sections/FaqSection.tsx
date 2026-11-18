import { Accordion, type AccordionItem } from "@/components/ui/Accordion";

const FAQ_ITEMS: AccordionItem[] = [
  {
    title: "Tam Tasdik sözleşmesi ne zaman yapılmalıdır?",
    description:
      "Hesap döneminin ilk ayı içinde düzenlenmesi, sınırsız KDV iadesi ve sürekli ön denetim güvencesi sağlar.",
  },
  {
    title: "KDV iadesi süreci ortalama kaç günde sonuçlanır?",
    description:
      "Dijital karşıt inceleme altyapımız sayesinde eksiksiz dosyalar ortalama 14–21 iş günü içinde sonuçlandırılır.",
  },
  {
    title: "Vergi incelemesi başladıktan sonra destek alınabilir mi?",
    description:
      "Tutanak aşamasından uzlaşma ve teknik mütalaa süreçlerine kadar her adımda şirketinizi temsil ediyoruz.",
  },
  {
    title: "Birleşme ve devirlerde YMM raporu neden gereklidir?",
    description:
      "Özsermaye tespiti ve geçmiş dönem risk analizi, işlemin hukuki geçerliliği ve değerleme doğruluğu için zorunludur.",
  },
];

export function FaqSection() {
  return (
    <section className="border-t border-border/50 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl space-y-3 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Sıkça Sorulan Sorular
          </p>
          <h2 className="text-3xl font-medium leading-[1.14] tracking-[-0.025em] text-foreground sm:text-4xl">
            Tasdik ve denetim süreçleri.
          </h2>
        </div>

        <Accordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}
