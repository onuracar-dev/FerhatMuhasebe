import { useEffect, useState } from "react";
import { Building2, Clock, ExternalLink, MapPin, Phone } from "lucide-react";
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MarkerTooltip,
  useMap,
} from "@/components/ui/map";
import { cn } from "@/lib/utils";

interface OfficeLocation {
  id: string;
  city: string;
  title: string;
  address: string;
  phone: string;
  hours: string;
  coordinates: [number, number];
  transit: string;
  directionsUrl: string;
}

const OFFICES: OfficeLocation[] = [
  {
    id: "istanbul",
    city: "İstanbul · Merkez",
    title: "Levent Merkez Ofis",
    address: "Büyükdere Cad. No: 185, Kanyon Ofis Kat: 14, 34394 Şişli / İstanbul",
    phone: "+90 (212) 284 40 00",
    hours: "Hafta içi 08:30 – 18:30",
    coordinates: [29.0115, 41.0789],
    transit: "M2 Levent Metro (Doğrudan bağlantı · 2 dk yürüme)",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=41.0789,29.0115",
  },
  {
    id: "ankara",
    city: "Ankara · Şube",
    title: "Çankaya Mevzuat & Kurumlar Ofisi",
    address: "Söğütözü Cad. No: 14B, Armada İş Kulesi Kat: 9, Çankaya / Ankara",
    phone: "+90 (312) 219 40 00",
    hours: "Hafta içi 09:00 – 18:00",
    coordinates: [32.8096, 39.9136],
    transit: "Ankaray Söğütözü Durağı · Maliye & GİB Merkezine 8 dk",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=39.9136,32.8096",
  },
  {
    id: "izmir",
    city: "İzmir · Şube",
    title: "Bayraklı Ege Serbest Bölge Masası",
    address: "Adalet Mah. Anadolu Cad. No: 41, Folkart Towers A Kule Kat: 18, Bayraklı / İzmir",
    phone: "+90 (232) 488 40 00",
    hours: "Hafta içi 09:00 – 18:00",
    coordinates: [27.1774, 38.4545],
    transit: "İZBAN Salhane İstasyonu (4 dk yürüme mesafesi)",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=38.4545,27.1774",
  },
];

function OfficeFlyController({
  target,
}: {
  target: OfficeLocation;
}) {
  const { map, isLoaded } = useMap();

  useEffect(() => {
    if (!map || !isLoaded) return;
    map.flyTo({
      center: target.coordinates,
      zoom: 14.5,
      pitch: 32,
      duration: 1200,
    });
  }, [map, isLoaded, target]);

  return null;
}

export function LocationSection() {
  const [activeOffice, setActiveOffice] = useState<OfficeLocation>(OFFICES[0]);

  return (
    <section
      id="harita"
      className="relative border-t border-border/60 bg-background py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Haritada Yerimiz
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Türkiye Genelinde{" "}
              <span className="italic text-primary">Üç Stratejik Ofis</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              İstanbul Levent merkez ofisimizin yanı sıra vergi incelemeleri ve
              KDV iade süreçleri için Ankara ve İzmir irtibat şubelerimizde yüz
              yüze danışmanlık sunuyoruz.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            {OFFICES.map((office) => {
              const isSelected = office.id === activeOffice.id;
              return (
                <button
                  key={office.id}
                  type="button"
                  onClick={() => setActiveOffice(office)}
                  className={cn(
                    "w-full cursor-pointer rounded-2xl border p-5 text-left transition-all duration-200",
                    isSelected
                      ? "border-primary bg-primary/8 ring-1 ring-primary/60"
                      : "border-border/70 bg-card/50 hover:border-primary/40 hover:bg-card",
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                      <Building2 className="h-3.5 w-3.5" />
                      {office.city}
                    </span>
                    {isSelected && (
                      <span className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold text-primary-foreground">
                        Haritada Odaklı
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2 font-serif text-lg font-semibold text-foreground">
                    {office.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {office.address}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-border/50 pt-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-primary" />
                      {office.phone}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-primary" />
                      {office.hours}
                    </span>
                  </div>
                </button>
              );
            })}

            <div className="rounded-2xl border border-border/70 bg-card/40 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Ulaşım Notu · {activeOffice.title}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-foreground">
                {activeOffice.transit}
              </p>
              <a
                href={activeOffice.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                Google Haritalar ile Yol Tarifi Al
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative h-[440px] w-full overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm sm:h-[520px]">
              <Map
                center={OFFICES[0].coordinates}
                zoom={14.5}
                pitch={30}
                className="h-full w-full"
              >
                <OfficeFlyController target={activeOffice} />
                <MapControls
                  position="bottom-right"
                  showZoom
                  showCompass
                  showFullscreen
                />

                {OFFICES.map((office) => {
                  const isSelected = office.id === activeOffice.id;
                  return (
                    <MapMarker
                      key={office.id}
                      longitude={office.coordinates[0]}
                      latitude={office.coordinates[1]}
                      onClick={() => setActiveOffice(office)}
                    >
                      <MarkerContent>
                        <div
                          className={cn(
                            "flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold shadow-md transition-transform",
                            isSelected
                              ? "scale-105 border-primary-foreground/30 bg-primary text-primary-foreground"
                              : "border-border bg-background/95 text-foreground hover:scale-105",
                          )}
                        >
                          <MapPin className="h-3.5 w-3.5 shrink-0" />
                          <span>{office.city.split(" · ")[0]}</span>
                        </div>
                      </MarkerContent>

                      <MarkerTooltip>{office.title}</MarkerTooltip>

                      <MarkerPopup closeButton className="w-64">
                        <div className="space-y-1.5 pr-4">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                            {office.city}
                          </p>
                          <p className="font-serif text-sm font-semibold text-foreground">
                            {office.title}
                          </p>
                          <p className="text-xs leading-relaxed text-muted-foreground">
                            {office.address}
                          </p>
                          <p className="pt-1 text-xs font-medium text-foreground">
                            {office.phone}
                          </p>
                        </div>
                      </MarkerPopup>
                    </MapMarker>
                  );
                })}
              </Map>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
