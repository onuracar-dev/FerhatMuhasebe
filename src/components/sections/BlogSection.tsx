import { useState } from "react";
import { ArrowUpRight, BookOpen, Calendar, Clock, X } from "lucide-react";
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
    title: "Enflasyon Düzeltmesi ve Özkaynak Koruması Stratejileri",
    date: "12 Kasım 2026",
    readTime: "6 dk okuma",
    coverImage: "/images/blog-ledger.jpg",
    excerpt:
      "Parasal olmayan kıymetlerin düzeltilmesinde grup şirketlerinin karşılaştığı gizli matrah etkileri ve bilanço optimizasyonu.",
    content: [
      "Enflasyon düzeltmesi uygulaması, yalnızca teknik bir muhasebe endeksleme işlemi değil; şirketlerin özsermaye yapısını, dağıtılabilir kâr potansiyelini ve finansman gider kısıtlamasını doğrudan şekillendiren stratejik bir vergi kararıdır.",
      "Özellikle yüksek stok devir hızına sahip sanayi işletmeleri ile yoğun sabit kıymet yatırımı yapan gruplarda düzeltme katsayılarının doğru seçilmesi ve toplulaştırılmış yöntem tercihlerinin simülasyonla test edilmesi hayati önem taşır.",
      "Tam tasdik denetimi kapsamında yürüttüğümüz ön incelemelerde, dönem sonu kapanışından önce bilanço kalemlerinin sınıflandırma hatalarını ayıklayarak gereksiz vergi yüklerinin önüne geçiyoruz.",
    ],
  },
  {
    id: "arge-teknopark-istisna",
    category: "Teşvik & İstisna",
    title: "Teknopark ve Ar-Ge Merkezlerinde YMM Tasdik Kriterleri",
    date: "28 Ekim 2026",
    readTime: "5 dk okuma",
    coverImage: "/images/about-archive.jpg",
    excerpt:
      "Yazılım ihracatı, patent tescil şartları ve girişim sermayesi fonu yükümlülüklerinin inceleme riskleri.",
    content: [
      "4691 ve 5746 sayılı kanunlar kapsamında sağlanan kurumlar vergisi, gelir vergisi stopajı ve KDV istisnaları teknoloji şirketleri için önemli bir sermaye kalkanı oluşturur.",
      "Ancak proje kodları bazında maliyet ayrıştırmasının yapılmaması, dışarıda geçirilen süre bildirimlerindeki tutarsızlıklar ve istisna kazancın %3'lük fon ayırma zorunluluğunun atlanması vergi incelemelerinde ciddi tarhiyatlara yol açabilmektedir.",
      "YMM tasdik sürecinde Ar-Ge personel zaman çizelgelerini, fatura akışını ve proje çıktısını tek bir denetim izinde birleştirerek istisnanın tartışmasız korunmasını sağlıyoruz.",
    ],
  },
  {
    id: "transfer-fiyatlandirmasi",
    category: "Uluslararası Vergi",
    title: "Sınır Ötesi Grup İşlemlerinde Transfer Fiyatlandırması",
    date: "14 Ekim 2026",
    readTime: "7 dk okuma",
    coverImage: "/images/service-strategy.jpg",
    excerpt:
      "Çok uluslu yapılarda emsallere uygunluk analizi, Ülke Bazlı Raporlama (CbCR) ve peşin fiyatlandırma anlaşmaları.",
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
    <section id="blog" className="border-b border-border bg-card/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Makaleler ve Vergi Rehberleri
            </p>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Mevzuata Yön Veren Yayınlar
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Kitapların üzerinde imlecinizi gezdirerek sayfaları aralayın; tam
            metni okumak için dilediğiniz yayına tıklayın.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/40"
            >
              <div>
                <div className="mb-5 rounded-2xl border border-border/70 bg-secondary/40 py-4">
                  <InteractiveBook
                    title={post.title}
                    category={post.category}
                    coverImage={post.coverImage}
                    excerpt={post.excerpt}
                    onOpen={() => setSelectedPost(post)}
                  />
                </div>

                <div className="mb-2.5 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    {post.date}
                  </span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-semibold leading-snug tracking-tight text-foreground">
                  {post.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedPost(post)}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform group-hover:translate-x-0.5 cursor-pointer"
              >
                <BookOpen className="h-4 w-4" />
                <span>Makaleyi Oku</span>
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
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-border bg-card p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPost(null)}
              aria-label="Kapat"
              className="absolute top-5 right-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground hover:border-primary cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

            <span className="inline-block rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-primary">
              {selectedPost.category}
            </span>

            <h3
              id="blog-modal-title"
              className="mt-4 font-serif text-2xl font-semibold leading-tight sm:text-3xl"
            >
              {selectedPost.title}
            </h3>

            <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
              <span>YMM Ferhat Yılmaz</span>
              <span>·</span>
              <span>{selectedPost.date}</span>
              <span>·</span>
              <span>{selectedPost.readTime}</span>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <img
                src={selectedPost.coverImage}
                alt={selectedPost.title}
                className="h-52 w-full object-cover"
              />
            </div>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/90 sm:text-base">
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
