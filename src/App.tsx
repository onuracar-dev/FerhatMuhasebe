import SwipeThemeProvider from "@/components/ui/SwipeThemeProvider";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { NavbarDock } from "@/components/NavbarDock";
import { useSwipeTheme } from "@/hooks/use-swipe-theme";

function MainSiteShell() {
  const { theme } = useSwipeTheme();
  const heroImage =
    theme === "dark" ? "/images/hero-gold.jpg" : "/images/hero-cobalt.jpg";

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <header className="fixed top-0 inset-x-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-xs font-bold tracking-wider text-primary-foreground">
              FY
            </span>
            <div className="leading-tight">
              <p className="font-serif text-base font-semibold tracking-tight">
                Ferhat Yılmaz
              </p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Yeminli Mali Müşavirlik
              </p>
            </div>
          </div>

          <NavbarDock />

          <ThemeToggleButton />
        </div>
      </header>

      <main className="pt-16">
        <section className="relative min-h-[88vh] overflow-hidden border-b border-border">
          <img
            src={heroImage}
            alt="Görünmeyen mali risklere karşı sarsılmaz duruş"
            className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 py-20">
            <div className="max-w-2xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/85 px-3.5 py-1 text-xs font-medium tracking-wide text-primary backdrop-blur-sm">
                T.C. Hazine ve Maliye Bakanlığı Ruhsatlı YMM
              </span>
              <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
                Türkiye&apos;nin En Büyük Yeminli Mali Müşaviri ile Güvendesiniz
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Görünmeyen vergi, denetim ve mevzuat dalgaları büyümeden önce
                sermayenizi stratejik öngörü ve mutlak mevzuat hâkimiyetiyle
                koruyoruz.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <SwipeThemeProvider direction="left-to-right" angle={12} duration={580}>
      <MainSiteShell />
    </SwipeThemeProvider>
  );
}

export default App;
