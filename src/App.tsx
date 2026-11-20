import { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import SwipeThemeProvider from "@/components/ui/SwipeThemeProvider";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { NavbarDock } from "@/components/NavbarDock";
import { BrandLogo } from "@/components/BrandLogo";
import { CommandSearchDialog } from "@/components/CommandSearchDialog";
import { SiteFooter } from "@/components/SiteFooter";
import { CookieBanner } from "@/components/CookieBanner";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSealBand } from "@/components/sections/TrustSealBand";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ReferencesSection } from "@/components/sections/ReferencesSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { ReferencesPage } from "@/pages/ReferencesPage";
import { BlogPage } from "@/pages/BlogPage";
import { KvkkPage } from "@/pages/KvkkPage";

function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSealBand />
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ReferencesSection previewOnly />
      <BlogSection previewOnly />
      <ContactSection />
      <LocationSection />
    </>
  );
}

function MainSiteShell() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const goToHash = (hash: string) => {
    setMobileMenuOpen(false);
    navigate("/");
    window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
          <Link
            to="/"
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="shrink-0"
          >
            <BrandLogo />
          </Link>

          <NavbarDock />

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Site içi arama"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-accent"
            >
              <Search className="h-4 w-4 text-primary" />
              <span className="hidden sm:inline">Ara</span>
              <kbd className="hidden rounded border border-border bg-muted px-1.5 py-0.5 text-[11px] text-muted-foreground xl:inline">
                ⌘K
              </kbd>
            </button>

            <ThemeToggleButton />

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={mobileMenuOpen}
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-foreground lg:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav
            aria-label="Mobil gezinme menüsü"
            className="border-t border-border bg-background px-6 py-4 lg:hidden"
          >
            <div className="flex flex-col space-y-3 text-base font-medium">
              <button
                type="button"
                onClick={() => goToHash("hakkimizda")}
                className="cursor-pointer py-1 text-left text-foreground hover:text-primary"
              >
                Hakkımızda
              </button>
              <button
                type="button"
                onClick={() => goToHash("hizmetler")}
                className="cursor-pointer py-1 text-left text-foreground hover:text-primary"
              >
                Hizmetler
              </button>
              <Link
                to="/referanslar"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-foreground hover:text-primary"
              >
                Referanslar
              </Link>
              <Link
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-foreground hover:text-primary"
              >
                Blog
              </Link>
              <button
                type="button"
                onClick={() => goToHash("iletisim")}
                className="cursor-pointer py-1 text-left text-foreground hover:text-primary"
              >
                İletişim
              </button>
              <button
                type="button"
                onClick={() => goToHash("harita")}
                className="cursor-pointer py-1 text-left text-foreground hover:text-primary"
              >
                Konum
              </button>
              <Link
                to="/kvkk"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-sm text-muted-foreground hover:text-primary"
              >
                KVKK Aydınlatma Metni
              </Link>
            </div>
          </nav>
        )}
      </header>

      <main className="overflow-x-clip pt-[72px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/referanslar" element={<ReferencesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/kvkk" element={<KvkkPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <SiteFooter />
      <CookieBanner />
      <CommandSearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
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
