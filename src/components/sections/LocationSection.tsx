import { useEffect, useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
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
  coordinates: [number, number];
  directionsUrl: string;
}

const OFFICES: OfficeLocation[] = [
  {
    id: "istanbul",
    city: "İstanbul · Merkez",
    title: "Levent Merkez Ofis",
    address: "Büyükdere Cad. No: 185, Kanyon Ofis Kat: 14, Şişli",
    phone: "+90 (212) 284 40 00",
    coordinates: [29.0115, 41.0789],
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=41.0789,29.0115",
  },
  {
    id: "ankara",
    city: "Ankara · Şube",
    title: "Çankaya Mevzuat Ofisi",
    address: "Söğütözü Cad. No: 14B, Armada Kule Kat: 9, Çankaya",
    phone: "+90 (312) 219 40 00",
    coordinates: [32.8096, 39.9136],
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=39.9136,32.8096",
  },
  {
    id: "izmir",
    city: "İzmir · Şube",
    title: "Bayraklı Ege Ofisi",
    address: "Anadolu Cad. No: 41, Folkart Towers A Kat: 18, Bayraklı",
    phone: "+90 (232) 488 40 00",
    coordinates: [27.1774, 38.4545],
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=38.4545,27.1774",
  },
];

function OfficeFlyController({ target }: { target: OfficeLocation }) {
  const { map, isLoaded } = useMap();

  useEffect(() => {
    if (!map || !isLoaded) return;
    map.flyTo({
      center: target.coordinates,
      zoom: 14.5,
      pitch: 28,
      duration: 1100,
    });
  }, [map, isLoaded, target]);

  return null;
}

export function LocationSection() {
  const [activeOffice, setActiveOffice] = useState<OfficeLocation>(OFFICES[0]);

  return (
    <section
      id="harita"
      className="relative border-t border-border/50 bg-background py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Konum
          </p>
          <h2 className="text-3xl font-medium leading-[1.14] tracking-[-0.025em] text-foreground sm:text-4xl">
            Üç stratejik merkez.
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="flex flex-col justify-between lg:col-span-5">
            <div className="divide-y divide-border/50 border-y border-border/50">
              {OFFICES.map((office) => {
                const isSelected = office.id === activeOffice.id;
                return (
                  <button
                    key={office.id}
                    type="button"
                    onClick={() => setActiveOffice(office)}
                    className={cn(
                      "w-full cursor-pointer py-5 text-left transition-colors",
                      isSelected ? "opacity-100" : "opacity-65 hover:opacity-100",
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={cn(
                          "text-xs font-medium uppercase tracking-[0.14em]",
                          isSelected ? "text-primary" : "text-muted-foreground",
                        )}
                      >
                        {office.city}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {office.phone}
                      </span>
                    </div>

                    <h3 className="mt-1.5 text-lg font-medium tracking-[-0.015em] text-foreground">
                      {office.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {office.address}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                Seçili ofis: {activeOffice.title}
              </span>
              <a
                href={activeOffice.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-foreground transition-colors hover:text-primary"
              >
                Yol tarifi al
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-border/50 bg-card sm:h-[460px]">
              <Map
                center={OFFICES[0].coordinates}
                zoom={14.5}
                pitch={28}
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
                            "flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-transform",
                            isSelected
                              ? "scale-105 border-primary-foreground/20 bg-primary text-primary-foreground"
                              : "border-border bg-background/95 text-foreground hover:scale-105",
                          )}
                        >
                          <MapPin className="h-3 w-3 shrink-0" />
                          <span>{office.city.split(" · ")[0]}</span>
                        </div>
                      </MarkerContent>

                      <MarkerTooltip>{office.title}</MarkerTooltip>

                      <MarkerPopup closeButton className="w-60">
                        <div className="space-y-1 pr-4">
                          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
                            {office.city}
                          </p>
                          <p className="text-sm font-medium text-foreground">
                            {office.title}
                          </p>
                          <p className="text-xs leading-relaxed text-muted-foreground">
                            {office.address}
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
