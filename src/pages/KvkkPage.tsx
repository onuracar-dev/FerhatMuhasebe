import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export function KvkkPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24 sm:py-28">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Ana Sayfaya Dön
      </Link>

      <div className="mt-8 space-y-4 border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          <ShieldCheck className="h-4 w-4" />
          6698 Sayılı Kanun
        </div>
        <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Kişisel Verilerin Korunması ve Aydınlatma Metni (KVKK)
        </h1>
        <p className="text-sm text-muted-foreground">
          Veri Sorumlusu: Ferhat Muhasebe Yeminli Mali Müşavirlik A.Ş.
        </p>
      </div>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-foreground sm:text-base">
        <section className="space-y-2">
          <h2 className="text-lg font-medium text-foreground">
            1. Veri Sorumlusunun Kimliği
          </h2>
          <p className="text-muted-foreground">
            6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca,
            kişisel verileriniz veri sorumlusu sıfatıyla Büyükdere Cad. No: 185,
            Kanyon Ofis Kat: 14 Levent / İstanbul adresinde mukim{" "}
            <strong className="text-foreground">
              Ferhat Muhasebe Yeminli Mali Müşavirlik A.Ş.
            </strong>{" "}
            tarafından hukuka ve dürüstlük kurallarına uygun olarak işlenmektedir.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-foreground">
            2. İşleme Amaçları ve Hukuki Sebepler
          </h2>
          <p className="text-muted-foreground">
            İletişim kanallarımız üzerinden paylaşılan kimlik, iletişim ve
            kurumsal vergi danışmanlığı taleplerine ilişkin bilgiler; 3568
            sayılı Serbest Muhasebeci Mali Müşavirlik ve Yeminli Mali
            Müşavirlik Kanunu kapsamındaki tasdik, denetim ve danışmanlık
            sözleşmelerinin kurulması ve mevzuat yükümlülüklerinin yerine
            getirilmesi amacıyla işlenir.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-foreground">
            3. Üçüncü Kişilere Aktarım ve Saklama
          </h2>
          <p className="text-muted-foreground">
            3568 sayılı Meslek Yasası gereği mesleki sır saklama yükümlülüğü
            esastır. Veriler yalnızca kanunen yetkili kamu kurumları (Hazine ve
            Maliye Bakanlığı, Gelir İdaresi Başkanlığı, Vergi Denetim Kurulu) ile
            yasal zorunluluk hâllerinde paylaşılır; ticari amaçla üçüncü kişilere
            aktarılmaz.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-foreground">
            4. KVKK Madde 11 Kapsamındaki Haklarınız
          </h2>
          <p className="text-muted-foreground">
            Kişisel verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini
            veya silinmesini talep etme haklarınızı{" "}
            <a
              href="mailto:danisma@ferhatymm.com.tr"
              className="font-medium text-primary underline"
            >
              danisma@ferhatymm.com.tr
            </a>{" "}
            veya KEP adresimiz (ferhatmuhasebe.ymm@hs01.kep.tr) üzerinden
            iletebilirsiniz.
          </p>
        </section>
      </div>
    </div>
  );
}
