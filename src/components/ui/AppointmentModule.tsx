import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  Clock,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface AppointmentTopic {
  id: string;
  label: string;
  duration: string;
  description: string;
}

export interface AppointmentSlot {
  id: string;
  label: string;
  dayName: string;
  dateLabel: string;
}

export interface AppointmentBookingPayload {
  topic: AppointmentTopic;
  slot: AppointmentSlot;
  time: string;
  channel: string;
  clientName: string;
  companyName: string;
  contactInfo: string;
}

export interface AppointmentModuleProps {
  topics?: AppointmentTopic[];
  dates?: AppointmentSlot[];
  timeSlots?: string[];
  channels?: string[];
  badgeText?: string;
  heading?: string;
  description?: string;
  ctaLabel?: string;
  className?: string;
  onConfirm?: (booking: AppointmentBookingPayload) => void;
}

type BookingStep = "start" | "topic" | "date" | "time" | "details" | "booked";

const DEFAULT_TOPICS: AppointmentTopic[] = [
  {
    id: "consultation",
    label: "General Consultation",
    duration: "30 min",
    description: "Initial discovery and scope assessment.",
  },
  {
    id: "review",
    label: "Annual Review",
    duration: "45 min",
    description: "Comprehensive compliance and ledger check.",
  },
];

const DEFAULT_DATES: AppointmentSlot[] = [
  { id: "d1", label: "Tomorrow", dayName: "Thu", dateLabel: "14 Nov" },
  { id: "d2", label: "Next Day", dayName: "Fri", dateLabel: "15 Nov" },
  { id: "d3", label: "Monday", dayName: "Mon", dateLabel: "18 Nov" },
  { id: "d4", label: "Tuesday", dayName: "Tue", dateLabel: "19 Nov" },
];

const DEFAULT_TIMES = [
  "09:00",
  "10:00",
  "11:30",
  "13:30",
  "15:00",
  "16:30",
  "17:30",
];

const DEFAULT_CHANNELS = ["Yüz Yüze · Ofis", "Çevrimiçi · Video", "Telefon"];

export function AppointmentModule({
  topics = DEFAULT_TOPICS,
  dates = DEFAULT_DATES,
  timeSlots = DEFAULT_TIMES,
  channels = DEFAULT_CHANNELS,
  badgeText = "Booking Flow",
  heading = "Schedule Consultation",
  description = "Select topic, date, and preferred time slot.",
  ctaLabel = "Start Booking",
  className,
  onConfirm,
}: AppointmentModuleProps) {
  const [step, setStep] = useState<BookingStep>("start");
  const [selectedTopic, setSelectedTopic] = useState<AppointmentTopic>(topics[0]);
  const [selectedDate, setSelectedDate] = useState<AppointmentSlot>(dates[0]);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState<number>(1);
  const [selectedChannel, setSelectedChannel] = useState<string>(channels[0]);
  const [clientName, setClientName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  const selectedTime = timeSlots[selectedTimeIndex] ?? timeSlots[0];

  const stepOrder: BookingStep[] = [
    "start",
    "topic",
    "date",
    "time",
    "details",
    "booked",
  ];
  const currentStepIndex = stepOrder.indexOf(step);

  const handleConfirm = (event: React.FormEvent) => {
    event.preventDefault();
    const payload: AppointmentBookingPayload = {
      topic: selectedTopic,
      slot: selectedDate,
      time: selectedTime,
      channel: selectedChannel,
      clientName: clientName.trim() || "Kurumsal Yetkili",
      companyName: companyName.trim() || "Mükellef A.Ş.",
      contactInfo: contactInfo.trim() || "İletişim bilgisi iletildi",
    };
    onConfirm?.(payload);
    setStep("booked");
  };

  const resetFlow = () => {
    setStep("topic");
  };

  return (
    <motion.div
      layout
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border/80 bg-card/85 p-6 shadow-sm backdrop-blur-sm sm:p-8",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-5">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            <Sparkles className="h-3 w-3" />
            {badgeText}
          </span>
          <h3 className="mt-2.5 font-serif text-2xl font-semibold tracking-tight text-foreground">
            {heading}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>

        <div className="flex items-center gap-1.5" aria-label="Booking progress">
          {["topic", "date", "time", "details", "booked"].map((stepKey, idx) => {
            const active = currentStepIndex >= idx + 1;
            return (
              <span
                key={stepKey}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  active ? "w-6 bg-primary" : "w-2 bg-border",
                )}
              />
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        <AnimatePresence mode="wait">
          {step === "start" && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border/70 bg-background/70 p-6 sm:flex-row sm:items-center"
            >
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Hazır Takvim Özeti
                </p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-foreground">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-2.5 py-1 font-medium">
                    <UserCheck className="h-3.5 w-3.5 text-primary" />
                    {selectedTopic.label}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-2.5 py-1 font-medium">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    {selectedDate.dateLabel}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-2.5 py-1 font-medium">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                    {selectedTime}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep("topic")}
                className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {ctaLabel}
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          )}

          {step === "topic" && (
            <motion.div
              key="topic"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-5"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {topics.map((topic) => {
                  const isSelected = topic.id === selectedTopic.id;
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setSelectedTopic(topic)}
                      className={cn(
                        "flex cursor-pointer flex-col items-start rounded-2xl border p-4 text-left transition-all",
                        isSelected
                          ? "border-primary bg-primary/10 ring-1 ring-primary"
                          : "border-border/70 bg-background/60 hover:border-primary/40",
                      )}
                    >
                      <div className="flex w-full items-center justify-between gap-2">
                        <span className="font-serif text-base font-semibold text-foreground">
                          {topic.label}
                        </span>
                        <span className="rounded-full bg-background px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                          {topic.duration}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        {topic.description}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <div className="flex flex-wrap gap-2">
                  {channels.map((ch) => (
                    <button
                      key={ch}
                      type="button"
                      onClick={() => setSelectedChannel(ch)}
                      className={cn(
                        "cursor-pointer rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                        selectedChannel === ch
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {ch}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setStep("date")}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground"
                >
                  Tarih Seçimi
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          )}

          {step === "date" && (
            <motion.div
              key="date"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-5"
            >
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {dates.map((slot) => {
                  const isSelected = slot.id === selectedDate.id;
                  return (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => setSelectedDate(slot)}
                      className={cn(
                        "flex cursor-pointer flex-col items-center justify-center rounded-2xl border px-3 py-4 text-center transition-all",
                        isSelected
                          ? "border-primary bg-primary text-primary-foreground shadow-sm"
                          : "border-border/70 bg-background/70 text-foreground hover:border-primary/40",
                      )}
                    >
                      <span
                        className={cn(
                          "text-[11px] font-semibold uppercase tracking-[0.16em]",
                          isSelected
                            ? "text-primary-foreground/80"
                            : "text-muted-foreground",
                        )}
                      >
                        {slot.dayName}
                      </span>
                      <span className="mt-1 font-serif text-lg font-semibold">
                        {slot.dateLabel}
                      </span>
                      <span
                        className={cn(
                          "mt-0.5 text-[11px]",
                          isSelected
                            ? "text-primary-foreground/85"
                            : "text-muted-foreground",
                        )}
                      >
                        {slot.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onClick={() => setStep("topic")}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Geri
                </button>
                <button
                  type="button"
                  onClick={() => setStep("time")}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground"
                >
                  Saat Reel Seçici
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          )}

          {step === "time" && (
            <motion.div
              key="time"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-5"
            >
              <div className="rounded-2xl border border-border/70 bg-background/70 p-4 sm:p-5">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-semibold uppercase tracking-[0.16em]">
                    Saat Dilimi Seçimi · {selectedDate.dateLabel}
                  </span>
                  <span className="font-mono text-primary">TSİ (UTC+3)</span>
                </div>

                {/* Tactile Date/Time Reel bar inspired by Arc UI Date Reel */}
                <div className="mt-4 flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Önceki saat dilimi"
                    onClick={() =>
                      setSelectedTimeIndex((prev) => Math.max(0, prev - 1))
                    }
                    disabled={selectedTimeIndex === 0}
                    className="inline-flex h-10 w-9 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:border-primary/50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                  </button>

                  <div className="flex flex-1 items-center gap-2 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {timeSlots.map((slotTime, index) => {
                      const distance = Math.abs(index - selectedTimeIndex);
                      const isSelected = index === selectedTimeIndex;
                      return (
                        <button
                          key={slotTime}
                          type="button"
                          onClick={() => setSelectedTimeIndex(index)}
                          className={cn(
                            "relative shrink-0 cursor-pointer rounded-2xl border px-4 py-3 font-mono text-sm font-semibold transition-all duration-200",
                            isSelected
                              ? "scale-105 border-primary bg-primary text-primary-foreground shadow-sm"
                              : distance === 1
                                ? "border-border bg-card text-foreground opacity-90 hover:border-primary/40"
                                : "border-border/60 bg-card/50 text-muted-foreground opacity-65 hover:opacity-100",
                          )}
                        >
                          {slotTime}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    aria-label="Sonraki saat dilimi"
                    onClick={() =>
                      setSelectedTimeIndex((prev) =>
                        Math.min(timeSlots.length - 1, prev + 1),
                      )
                    }
                    disabled={selectedTimeIndex === timeSlots.length - 1}
                    className="inline-flex h-10 w-9 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:border-primary/50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep("date")}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Geri
                </button>
                <button
                  type="button"
                  onClick={() => setStep("details")}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground"
                >
                  Bilgileri Tamamla
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          )}

          {step === "details" && (
            <motion.form
              key="details"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              onSubmit={handleConfirm}
              className="space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-3">
                <label htmlFor="ymm-client-name" className="block space-y-1.5 text-xs">
                  <span className="font-semibold text-foreground">
                    Ad Soyad
                  </span>
                  <input
                    id="ymm-client-name"
                    name="clientName"
                    type="text"
                    autoComplete="name"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Örn. Emre Kaya"
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </label>
                <label htmlFor="ymm-company-name" className="block space-y-1.5 text-xs">
                  <span className="font-semibold text-foreground">
                    Şirket / Unvan
                  </span>
                  <input
                    id="ymm-company-name"
                    name="companyName"
                    type="text"
                    autoComplete="organization"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Örn. Anadolu Lojistik A.Ş."
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </label>
                <label htmlFor="ymm-contact-info" className="block space-y-1.5 text-xs">
                  <span className="font-semibold text-foreground">
                    Telefon veya E-posta
                  </span>
                  <input
                    id="ymm-contact-info"
                    name="contactInfo"
                    type="text"
                    autoComplete="email"
                    required
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder="0532 ... / kurumsal@..."
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </label>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep("time")}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Geri
                </button>
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground"
                >
                  <Check className="h-3.5 w-3.5" />
                  Randevuyu Onayla
                </button>
              </div>
            </motion.form>
          )}

          {step === "booked" && (
            <motion.div
              key="booked"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col justify-between gap-6 rounded-2xl border border-primary/35 bg-primary/8 p-6 sm:flex-row sm:items-center"
            >
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  <Check className="h-4 w-4" />
                  Randevu Ön Kaydı Oluşturuldu
                </div>
                <p className="font-serif text-xl font-semibold text-foreground">
                  {selectedTopic.label} · {selectedDate.dateLabel} ({selectedTime})
                </p>
                <p className="text-xs text-muted-foreground">
                  {companyName || "Kurumsal Mükellef"} adına{" "}
                  <strong className="text-foreground">{selectedChannel}</strong>{" "}
                  görüşme talebi müşavir sekreteryasına iletildi.
                </p>
              </div>

              <button
                type="button"
                onClick={resetFlow}
                className="shrink-0 cursor-pointer rounded-full border border-primary/40 bg-background px-5 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Yeni Randevu Oluştur
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default AppointmentModule;
