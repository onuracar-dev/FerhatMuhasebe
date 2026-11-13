import SwipeThemeProvider from "@/components/ui/SwipeThemeProvider";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { NavbarDock } from "@/components/NavbarDock";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSealBand } from "@/components/sections/TrustSealBand";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ReferencesSection } from "@/components/sections/ReferencesSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { LocationSection } from "@/components/sections/LocationSection";

const CURRENT_YEAR = new Date().getFullYear();

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
        <AboutSection />
        <ServicesSection />
        <FaqSection />
        <ReferencesSection />
        <BlogSection />
        <ContactSection />
        <LocationSection />
      </main>

      <footer className="border-t border-border/60 bg-background py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-sm font-semibold text-foreground">
              Ferhat Yılmaz Yeminli Mali Müşavirlik A.Ş.
            </p>
            <p className="mt-1">
              TÜRMOB Sicil: 34102847 · İstanbul YMM Odası Üyesi · Tam Tasdik &amp; Vergi Danışmanlığı
            </p>
          </div>
          <p>
            © {CURRENT_YEAR} Ferhat Yılmaz YMM. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
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
