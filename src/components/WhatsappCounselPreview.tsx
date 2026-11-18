import { useState } from "react";
import { ArrowUpRight, Laptop, Smartphone } from "lucide-react";
import { MobileMockup, type ChatMessage as MobileChatMessage } from "@/components/ui/MobileMockup";
import { MacbookMockup, type ChatMessage as DesktopChatMessage } from "@/components/ui/MacbookMockup";
import { cn } from "@/lib/utils";

const MOBILE_MESSAGES: MobileChatMessage[] = [
  {
    id: 1,
    sender: "Mükellef A.Ş.",
    avatarInitial: "M",
    text: "Ferhat Bey merhaba, Q3 ihracat KDV iade dosyamızı GİB listesine yükledik.",
    isCurrentUser: false,
    timestamp: "09:42",
  },
  {
    id: 2,
    sender: "Mükellef A.Ş.",
    avatarInitial: "M",
    text: "YMM tasdik raporunun vergi dairesi kontrolünden ne zaman geçmesini öngörüyorsunuz?",
    isCurrentUser: false,
    timestamp: "09:42",
  },
  {
    id: 3,
    sender: "Ferhat Muhasebe, YMM",
    avatarInitial: "FM",
    text: "Karşıt incelemelerin %95'i tamamlandı. Alt firma risk analizinde temiz onay aldık.",
    isCurrentUser: true,
    timestamp: "09:44",
  },
  {
    id: 4,
    sender: "Ferhat Muhasebe, YMM",
    avatarInitial: "FM",
    isImage: true,
    imageUrl: "/images/service-tax.jpg",
    imageCaption: "İade tasdik raporu elektronik imzaya hazır.",
    isCurrentUser: true,
    timestamp: "09:45",
  },
  {
    id: 5,
    sender: "Mükellef A.Ş.",
    avatarInitial: "M",
    text: "Teşekkürler, öğleden sonra imzalı PDF'i bekliyoruz.",
    isCurrentUser: false,
    timestamp: "09:46",
  },
];

const DESKTOP_MESSAGES: DesktopChatMessage[] = [
  {
    id: 1,
    sender: "Ferhat Muhasebe, YMM",
    avatarInitial: "FM",
    text: "Merhaba Selin Hanım, yıllık Tam Tasdik ön mizan kontrolü tamamlandı. Enflasyon düzeltmesi farklarını işledik.",
    isCurrentUser: false,
    timestamp: "10:41",
  },
  {
    id: 2,
    sender: "CFO Ofisi",
    avatarInitial: "CF",
    text: "Teşekkürler Ferhat Bey. Amortisman notlarını Yönetim Kurulu sunumuna ekliyorum.",
    isCurrentUser: true,
    timestamp: "10:42",
  },
  {
    id: 3,
    sender: "Ferhat Muhasebe, YMM",
    avatarInitial: "FM",
    text: "Detaylı mevzuat özetini sesli not olarak ilettim:",
    isCurrentUser: false,
    timestamp: "10:42",
    isAudio: true,
    audioDuration: "0:32",
  },
  {
    id: 4,
    sender: "CFO Ofisi",
    avatarInitial: "CF",
    text: "Dinledim, vergi yükü optimizasyonu netleşmiş. Onaylıyoruz.",
    isCurrentUser: true,
    timestamp: "10:43",
    reaction: "✓ 2",
  },
];

export function WhatsappCounselPreview() {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");

  return (
    <div className="mt-14 rounded-2xl border border-border/50 bg-card/30 p-6 sm:p-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-lg space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            WhatsApp Danışma Hattı
          </p>
          <h3 className="text-2xl font-medium tracking-[-0.02em] text-foreground">
            Anlık dosya ve iade takibi.
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="inline-flex rounded-full border border-border/60 bg-background p-0.5">
            <button
              type="button"
              onClick={() => setDevice("desktop")}
              className={cn(
                "inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors",
                device === "desktop"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Laptop className="h-3.5 w-3.5" />
              Masaüstü
            </button>
            <button
              type="button"
              onClick={() => setDevice("mobile")}
              className={cn(
                "inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors",
                device === "mobile"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Smartphone className="h-3.5 w-3.5" />
              Mobil
            </button>
          </div>

          <a
            href="https://wa.me/905324102400"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-foreground transition-colors hover:text-primary"
          >
            WhatsApp ile yazın
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <div className="mt-10 flex min-h-[400px] items-center justify-center overflow-x-auto">
        {device === "desktop" ? (
          <MacbookMockup
            headerTitle="Ferhat Muhasebe, YMM"
            headerSubtitle="çevrimiçi"
            avatarUrl="/images/hero-cobalt.jpg"
            avatarFallback="FM"
            userAvatarUrl="/images/service-strategy.jpg"
            messages={DESKTOP_MESSAGES}
            autoPlay
          />
        ) : (
          <MobileMockup
            headerTitle="Ferhat Muhasebe, YMM"
            headerSubtitle="çevrimiçi"
            avatarUrl="/images/hero-cobalt.jpg"
            avatarFallback="FM"
            messages={MOBILE_MESSAGES}
            autoPlay
          />
        )}
      </div>
    </div>
  );
}
