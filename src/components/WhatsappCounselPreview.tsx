import { useState } from "react";
import { Laptop, MessageCircle, Smartphone } from "lucide-react";
import { MobileMockup, type ChatMessage as MobileChatMessage } from "@/components/ui/MobileMockup";
import { MacbookMockup, type ChatMessage as DesktopChatMessage } from "@/components/ui/MacbookMockup";
import { cn } from "@/lib/utils";

const MOBILE_MESSAGES: MobileChatMessage[] = [
  {
    id: 1,
    sender: "Mükellef A.Ş. Finans Direktörü",
    avatarInitial: "M",
    text: "Ferhat Bey merhaba, Q3 ihracat KDV iade dosyamızı GİB listesine yükledik.",
    isCurrentUser: false,
    timestamp: "09:42",
  },
  {
    id: 2,
    sender: "Mükellef A.Ş. Finans Direktörü",
    avatarInitial: "M",
    text: "YMM tasdik raporunun vergi dairesi kontrolünden ne zaman geçmesini öngörüyorsunuz?",
    isCurrentUser: false,
    timestamp: "09:42",
  },
  {
    id: 3,
    sender: "Ferhat Yılmaz, YMM",
    avatarInitial: "FY",
    text: "Karşıt incelemelerin %95'i tamamlandı. Alt firma risk analizinde temiz onay aldık.",
    isCurrentUser: true,
    timestamp: "09:44",
  },
  {
    id: 4,
    sender: "Ferhat Yılmaz, YMM",
    avatarInitial: "FY",
    isImage: true,
    imageUrl: "/images/service-tax.jpg",
    imageCaption: "İade tasdik raporu elektronik imzaya hazır.",
    isCurrentUser: true,
    timestamp: "09:45",
  },
  {
    id: 5,
    sender: "Mükellef A.Ş. Finans Direktörü",
    avatarInitial: "M",
    text: "Harika hız, öğleden sonra imzalı PDF'i bekliyoruz.",
    isCurrentUser: false,
    timestamp: "09:46",
  },
];

const DESKTOP_MESSAGES: DesktopChatMessage[] = [
  {
    id: 1,
    sender: "Ferhat Yılmaz, YMM",
    avatarInitial: "FY",
    text: "Merhaba Selin Hanım, yıllık Tam Tasdik ön mizan kontrolü tamamlandı. Enflasyon düzeltmesi farklarını tabloya işledik.",
    isCurrentUser: false,
    timestamp: "10:41",
  },
  {
    id: 2,
    sender: "CFO Ofisi",
    avatarInitial: "CF",
    text: "Teşekkürler Ferhat Bey. Amortisman ayrımı için ek notları Yönetim Kurulu sunumuna ekliyorum.",
    isCurrentUser: true,
    timestamp: "10:42",
  },
  {
    id: 3,
    sender: "Ferhat Yılmaz, YMM",
    avatarInitial: "FY",
    text: "Detaylı mevzuat değerlendirmesini sesli not olarak paylaştım:",
    isCurrentUser: false,
    timestamp: "10:42",
    isAudio: true,
    audioDuration: "0:32",
  },
  {
    id: 4,
    sender: "CFO Ofisi",
    avatarInitial: "CF",
    text: "Dinledim, vergi yükü optimizasyonu beklediğimizden daha net olmuş. Onaylıyoruz.",
    isCurrentUser: true,
    timestamp: "10:43",
    reaction: "✓ 2",
  },
];

export function WhatsappCounselPreview() {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");

  return (
    <div className="mt-10 rounded-3xl border border-border/70 bg-card/50 p-6 sm:p-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            7/24 Dijital Danışma Hattı
          </p>
          <h3 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Vergi Denetimi ve Anlık İade Takibi{" "}
            <span className="italic text-primary">Doğrudan Cebinize Gelsin</span>
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Tam Tasdik, KDV iade karşıt incelemeleri ve acil vergi müfettişi
            görüşmelerinde dosya sorumlunuzla WhatsApp kurumsal hattı üzerinden
            anlık evrak ve durum paylaşımı yapın.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex rounded-xl border border-border/80 bg-background p-1">
            <button
              type="button"
              onClick={() => setDevice("desktop")}
              className={cn(
                "inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors cursor-pointer",
                device === "desktop"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Laptop className="h-3.5 w-3.5" />
              Masaüstü Hattı
            </button>
            <button
              type="button"
              onClick={() => setDevice("mobile")}
              className={cn(
                "inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors cursor-pointer",
                device === "mobile"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Smartphone className="h-3.5 w-3.5" />
              Mobil Hattı
            </button>
          </div>

          <a
            href="https://wa.me/905324102400"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-emerald-600/30 bg-emerald-600/10 px-4 py-2.5 text-xs font-semibold text-emerald-700 transition-colors hover:bg-emerald-600 hover:text-white dark:border-emerald-400/30 dark:text-emerald-300 dark:hover:bg-emerald-500 dark:hover:text-neutral-950"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            WhatsApp ile Yazın
          </a>
        </div>
      </div>

      <div className="mt-8 flex min-h-[420px] items-center justify-center overflow-x-auto rounded-2xl border border-border/50 bg-background/60 px-4 py-8">
        {device === "desktop" ? (
          <MacbookMockup
            headerTitle="Ferhat Yılmaz, YMM"
            headerSubtitle="çevrimiçi · kurumsal destek"
            avatarUrl="/images/hero-cobalt.jpg"
            avatarFallback="FY"
            userAvatarUrl="/images/service-strategy.jpg"
            messages={DESKTOP_MESSAGES}
            autoPlay
          />
        ) : (
          <MobileMockup
            headerTitle="Ferhat Yılmaz, YMM"
            headerSubtitle="çevrimiçi"
            avatarUrl="/images/hero-cobalt.jpg"
            avatarFallback="FY"
            messages={MOBILE_MESSAGES}
            autoPlay
          />
        )}
      </div>
    </div>
  );
}
