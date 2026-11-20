import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Search, X } from "lucide-react";

interface SearchEntry {
  id: string;
  title: string;
  category: string;
  keywords: string;
  to: string;
  hash?: string;
}

const SEARCH_INDEX: SearchEntry[] = [
  {
    id: "home",
    title: "Ana Sayfa",
    category: "Sayfa",
    keywords: "ana sayfa ferhat muhasebe ymm vitrin",
    to: "/",
  },
  {
    id: "refs",
    title: "Kurumsal Referanslar",
    category: "Sayfa",
    keywords: "referanslar marmara enerji ege otomotiv kuzey teknoloji",
    to: "/referanslar",
  },
  {
    id: "blog",
    title: "Vergi Rehberleri ve Makaleler",
    category: "Sayfa",
    keywords: "blog yayınlar makaleler vergi rehberleri",
    to: "/blog",
  },
  {
    id: "kvkk",
    title: "KVKK Aydınlatma Metni ve Gizlilik",
    category: "Sayfa",
    keywords: "kvkk 6698 kişisel veriler çerez aydınlatma metni",
    to: "/kvkk",
  },
  {
    id: "about",
    title: "Hakkımızda ve 24 Yıllık Yolculuk",
    category: "Bölüm",
    keywords: "hakkımızda tarihçe kariyer zaman tüneli 2002 2026",
    to: "/",
    hash: "hakkimizda",
  },
  {
    id: "audit",
    title: "Tam Tasdik ve Bağımsız Denetim",
    category: "Hizmet",
    keywords: "tam tasdik kurumlar vergisi denetim rapor",
    to: "/",
    hash: "hizmetler",
  },
  {
    id: "kdv",
    title: "KDV İadesi ve Vergi Planlaması",
    category: "Hizmet",
    keywords: "kdv iade ihracat indirimli oran nakit akışı",
    to: "/",
    hash: "hizmetler",
  },
  {
    id: "dispute",
    title: "Vergi İnceleme ve Uzlaşma",
    category: "Hizmet",
    keywords: "vergi inceleme müfettiş tutanak uzlaşma savunma",
    to: "/",
    hash: "hizmetler",
  },
  {
    id: "ma",
    title: "M&A ve Uluslararası Mevzuat",
    category: "Hizmet",
    keywords: "birleşme devir due diligence transfer fiyatlandırması",
    to: "/",
    hash: "hizmetler",
  },
  {
    id: "article-1",
    title: "Enflasyon Düzeltmesi ve Özkaynak Koruması",
    category: "Makale",
    keywords: "enflasyon düzeltmesi bilanço özkaynak",
    to: "/blog",
  },
  {
    id: "article-2",
    title: "Teknopark ve Ar-Ge Merkezlerinde YMM Kriterleri",
    category: "Makale",
    keywords: "teknopark ar-ge 4691 5746 istisna fon",
    to: "/blog",
  },
  {
    id: "article-3",
    title: "Sınır Ötesi İşlemlerde Transfer Fiyatlandırması",
    category: "Makale",
    keywords: "transfer fiyatlandırması oecd cbcr yurt dışı",
    to: "/blog",
  },
  {
    id: "contact",
    title: "İletişim Kanalları ve WhatsApp Hattı",
    category: "İletişim",
    keywords: "telefon e-posta kep whatsapp acil hat sosyal medya",
    to: "/",
    hash: "iletisim",
  },
  {
    id: "map",
    title: "İstanbul, Ankara ve İzmir Ofis Konumları",
    category: "Konum",
    keywords: "harita levent çankaya bayraklı adres yol tarifi",
    to: "/",
    hash: "harita",
  },
];

interface CommandSearchDialogProps {
  open: boolean;
  onClose: () => void;
}

export function CommandSearchDialog({ open, onClose }: CommandSearchDialogProps) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("tr-TR");
    if (!q) return SEARCH_INDEX.slice(0, 7);
    return SEARCH_INDEX.filter(
      (item) =>
        item.title.toLocaleLowerCase("tr-TR").includes(q) ||
        item.category.toLocaleLowerCase("tr-TR").includes(q) ||
        item.keywords.toLocaleLowerCase("tr-TR").includes(q),
    );
  }, [query]);

  if (!open) return null;

  const handleSelect = (item: SearchEntry) => {
    onClose();
    setQuery("");
    navigate(item.to);
    if (item.hash) {
      window.setTimeout(() => {
        document.getElementById(item.hash!)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-24 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site içi arama"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
      >
        <div className="flex items-center gap-3 border-b border-border px-4 py-3.5">
          <Search className="h-5 w-5 shrink-0 text-primary" />
          <input
            type="search"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Hizmet, makale, sayfa veya ofis ara..."
            className="w-full bg-transparent text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Aramayı kapat"
            className="inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-96 divide-y divide-border/50 overflow-y-auto p-2">
          {results.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-muted-foreground">
              “{query}” için sonuç bulunamadı.
            </p>
          ) : (
            results.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-xl px-3.5 py-3 text-left transition-colors hover:bg-accent"
              >
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {item.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.category}</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
