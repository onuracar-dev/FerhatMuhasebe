import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { InteractiveBook } from "@/components/3d-book";

interface BlogPost {
  id: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  coverImage: string;
  excerpt: string;
  content: string[];
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "enflasyon-duzeltmesi",
    category: "Vergi Hukuku",
    title: "Enflasyon Düzeltmesi ve Özkaynak Koruması",
    date: "12 Kasım 2026",
    readTime: "6 dk",
    coverImage: "/images/blog-ledger.jpg",
    excerpt:
      "Parasal olmayan kıymetlerin düzeltilmesinde grup şirketlerinin karşılaştığı bilanço etkileri.",
    content: [
      "Enflasyon düzeltmesi uygulaması, yalnızca teknik bir muhasebe endeksleme işlemi değil; şirketlerin özsermaye yapısını, dağıtılabilir kâr potansiyelini ve finansman gider kısıtlamasını doğrudan şekillendiren stratejik bir vergi kararıdır.",
      "Özellikle yüksek stok devir hızına sahip sanayi işletmeleri ile yoğun sabit kıymet yatırımı yapan gruplarda düzeltme katsayılarının doğru seçilmesi ve toplulaştırılmış yöntem tercihlerinin simülasyonla test edilmesi hayati önem taşır.",
      "Tam tasdik denetimi kapsamında yürüttüğümüz ön incelemelerde, dönem sonu kapanışından önce bilanço kalemlerinin sınıflandırma hatalarını ayıklayarak gereksiz vergi yüklerinin önüne geçiyoruz.",
    ],
  },
  {
    id: "arge-teknopark-istisna",
    category: "Teşvik & İstisna",
    title: "Teknopark ve Ar-Ge Merkezlerinde YMM Kriterleri",
    date: "28 Ekim 2026",
    readTime: "5 dk",
    coverImage: "/images/about-archive.jpg",
    excerpt:
      "Yazılım ihracatı, patent şartları ve girişim sermayesi fonu yükümlülüklerinin inceleme riskleri.",
    content: [
      "4691 ve 5746 sayılı kanunlar kapsamında sağlanan kurumlar vergisi, gelir vergisi stopajı ve KDV istisnaları teknoloji şirketleri için önemli bir sermaye kalkanı oluşturur.",
      "Ancak proje kodları bazında maliyet ayrıştırmasının yapılmaması, dışarıda geçirilen süre bildirimlerindeki tutarsızlıklar ve istisna kazancın %3'lük fon ayırma zorunluluğunun atlanması vergi incelemelerinde ciddi tarhiyatlara yol açabilmektedir.",
      "YMM tasdik sürecinde Ar-Ge personel zaman çizelgelerini, fatura akışını ve proje çıktısını tek bir denetim izinde birleştirerek istisnanın tartışmasız korunmasını sağlıyoruz.",
    ],
  },
  {
    id: "transfer-fiyatlandirmasi",
    category: "Uluslararası Vergi",
    title: "Sınır Ötesi İşlemlerde Transfer Fiyatlandırması",
    date: "14 Ekim 2026",
    readTime: "7 dk",
    coverImage: "/images/service-strategy.jpg",
    excerpt:
      "Çok uluslu yapılarda emsallere uygunluk analizi ve Ülke Bazlı Raporlama esasları.",
    content: [
      "Yurt dışı iştirakler ile yürütülen yönetim hizmet bedeli, gayri maddi hak (royalty) ve grup içi finansman işlemleri, Maliye İdaresi'nin veri analitiği odaklı denetimlerinin merkezinde yer almaktadır.",
      "OECD rehberleri ile uyumlu hazırlanan yerel dosya ve ana dosya (Master File) dokümantasyonu, ilişkili taraf işlemlerinde örtülü kazanç dağıtımı eleştirilerine karşı en güçlü hukuki dayanaktır.",
      "Uluslararası yatırım projelerinizde çifte vergilendirmeyi önleme anlaşmalarının sunduğu stopaj indirimlerinden yararlanırken tam uyumlu emsal analiz raporları oluşturuyoruz.",
    ],
  },
];

export function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="border-t border-border/50 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-xl space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Yayınlar
          </p>
          <h2 className="text-3xl font-medium leading-[1.14] tracking-[-0.025em] text-foreground sm:text-4xl">
            Vergi rehberleri ve makaleler.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between rounded-2xl border border-border/50 bg-card/40 p-6 transition-colors hover:border-border"
            >
              <div>
                <div className="mb-6 py-2">
                  <InteractiveBook
                    title={post.title}
                    category={post.category}
                    coverImage={post.coverImage}
                    excerpt={post.excerpt}
                    onOpen={() => setSelectedPost(post)}
                  />
                </div>

                <p className="text-xs text-muted-foreground">
                  {post.date} · {post.readTime}
                </p>

                <h3 className="mt-2 text-lg font-medium leading-snug tracking-[-0.015em] text-foreground">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedPost(post)}
                className="mt-6 inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                <span>Okumaya devam et</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>

      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setSelectedPost(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="blog-modal-title"
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border/60 bg-card p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPost(null)}
              aria-label="Kapat"
              className="absolute top-5 right-5 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border/60 bg-background text-foreground transition-colors hover:border-foreground/40"
            >
              <X className="h-4 w-4" />
            </button>

            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {selectedPost.category}
            </p>

            <h3
              id="blog-modal-title"
              className="mt-3 text-2xl font-medium leading-tight tracking-tight sm:text-3xl"
            >
              {selectedPost.title}
            </h3>

            <p className="mt-2 text-xs text-muted-foreground">
              YMM Ferhat Yılmaz · {selectedPost.date} · {selectedPost.readTime}
            </p>

            <div className="mt-6 overflow-hidden rounded-xl border border-border/50">
              <img
                src={selectedPost.coverImage}
                alt={selectedPost.title}
                className="h-52 w-full object-cover"
              />
            </div>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/90">
              {selectedPost.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
