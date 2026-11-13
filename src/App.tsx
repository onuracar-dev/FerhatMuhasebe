import SwipeThemeProvider from "@/components/ui/SwipeThemeProvider";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { NavbarDock } from "@/components/NavbarDock";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSealBand } from "@/components/sections/TrustSealBand";

function MainSiteShell() {
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
        <HeroSection />
        <TrustSealBand />
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
