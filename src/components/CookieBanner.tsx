import { useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

const KVKK_STORAGE_KEY = "ferhat-muhasebe-kvkk-accepted";

export function CookieBanner() {
  const [dismissed, setDismissed] = useState<boolean>(() => {
    try {
      return localStorage.getItem(KVKK_STORAGE_KEY) === "1";
    } catch {
      return false;
    }
  });

  if (dismissed) return null;

  const accept = () => {
    try {
      localStorage.setItem(KVKK_STORAGE_KEY, "1");
    } catch {
      // ignore storage errors
    }
    setDismissed(true);
  };

  return (
    <aside
      aria-label="KVKK ve Çerez Bildirimi"
      className="fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-4xl rounded-2xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur-md sm:flex sm:items-center sm:justify-between sm:gap-6 sm:px-6"
    >
      <div className="flex items-start gap-3">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <p className="text-xs leading-relaxed text-foreground sm:text-sm">
          6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında
          yalnızca tema ve gezinme deneyimi için zorunlu yerel depolama
          kullanılmaktadır.{" "}
          <Link
            to="/kvkk"
            className="font-medium text-primary underline underline-offset-4"
          >
            KVKK Aydınlatma Metnini İncele
          </Link>
        </p>
      </div>

      <div className="mt-3 flex shrink-0 items-center gap-2 sm:mt-0">
        <button
          type="button"
          onClick={accept}
          className="cursor-pointer rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Anladım
        </button>
      </div>
    </aside>
  );
}
