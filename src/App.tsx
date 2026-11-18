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
      <header className="fixed top-0 inset-x-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <a href="#hero" className="flex items-center gap-2.5 text-foreground">
            <span className="text-sm font-bold tracking-tight">
              Ferhat Yılmaz
            </span>
            <span className="text-xs font-normal text-muted-foreground">
              YMM
            </span>
          </a>

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

      <footer className="border-t border-border/50 bg-background py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p className="font-medium text-foreground">
            Ferhat Yılmaz Yeminli Mali Müşavirlik A.Ş. · TÜRMOB Sicil 34102847
          </p>
          <p>
            © {CURRENT_YEAR} Ferhat Yılmaz YMM
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
