import { Link, useNavigate } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

const CURRENT_YEAR = new Date().getFullYear();

export function SiteFooter() {
  const navigate = useNavigate();

  const goToSection = (hash: string) => {
    navigate("/");
    window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="space-y-4 md:col-span-5">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <BrandLogo />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              3568 sayılı Kanun kapsamında tam tasdik, KDV iadesi, vergi
              uyuşmazlıkları ve kurumsal denetim alanlarında 24 yıllık mevzuat
              güvencesi.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="https://linkedin.com/in/ferhatmuhasebe"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/ferhatmuhasebe.ymm"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/FerhatMuhasebeYMM"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Facebook
              </a>
            </div>
          </div>

          <div className="space-y-3 md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-foreground">
              Sayfalar
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="hover:text-primary"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/referanslar" className="hover:text-primary">
                  Referanslar
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary">
                  Blog &amp; Rehberler
                </Link>
              </li>
              <li>
                <Link to="/kvkk" className="hover:text-primary">
                  KVKK Aydınlatma
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-foreground">
              Kurumsal
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <button
                  type="button"
                  onClick={() => goToSection("hakkimizda")}
                  className="cursor-pointer hover:text-primary"
                >
                  Hakkımızda
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => goToSection("hizmetler")}
                  className="cursor-pointer hover:text-primary"
                >
                  Hizmetler
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => goToSection("iletisim")}
                  className="cursor-pointer hover:text-primary"
                >
                  İletişim
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => goToSection("harita")}
                  className="cursor-pointer hover:text-primary"
                >
                  Ofis Konumları
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3 md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-foreground">
              Merkez İletişim
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Büyükdere Cad. No: 185, Kanyon Ofis Kat: 14, Levent / İstanbul</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+902122844000" className="hover:text-primary">
                  +90 (212) 284 40 00
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:danisma@ferhatymm.com.tr"
                  className="hover:text-primary"
                >
                  danisma@ferhatymm.com.tr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/70 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            Ferhat Muhasebe Yeminli Mali Müşavirlik A.Ş. · TÜRMOB Sicil: 34102847 ·
            İstanbul YMM Odası Üyesi
          </p>
          <p>© {CURRENT_YEAR} Ferhat Muhasebe. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
