import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BookOpen,
  Briefcase,
  Building2,
  MapPin,
  PhoneCall,
  Users,
} from "lucide-react";
import {
  FloatingButtonGroup,
  type FloatingButtonGroupItem,
} from "@/components/arc/floating-button-group/floating-button-group";

interface NavTarget {
  id: string;
  label: string;
  icon: React.ReactNode;
  route: string;
  hash?: string;
}

const SECTION_LINKS: NavTarget[] = [
  { id: "hakkimizda", label: "Hakkımızda", icon: <Building2 />, route: "/", hash: "hakkimizda" },
  { id: "hizmetler", label: "Hizmetler", icon: <Briefcase />, route: "/", hash: "hizmetler" },
  { id: "referanslar", label: "Referanslar", icon: <Users />, route: "/referanslar" },
  { id: "blog", label: "Blog", icon: <BookOpen />, route: "/blog" },
  { id: "iletisim", label: "İletişim", icon: <PhoneCall />, route: "/", hash: "iletisim" },
  { id: "harita", label: "Konum", icon: <MapPin />, route: "/", hash: "harita" },
];

const HEADER_OFFSET = 76;

function scrollToSectionId(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  return true;
}

export function NavbarDock() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeHash, setActiveHash] = useState<string>("hakkimizda");

  useEffect(() => {
    if (location.pathname !== "/") return;

    const sectionIds = ["hakkimizda", "hizmetler", "iletisim", "harita"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHash(entry.target.id);
          }
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleNavigate = (item: NavTarget) => {
    if (item.route !== "/") {
      navigate(item.route);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (item.hash) {
      setActiveHash(item.hash);
    }

    if (location.pathname !== "/") {
      navigate("/");
      if (item.hash) {
        const targetHash = item.hash;
        window.setTimeout(() => {
          if (!scrollToSectionId(targetHash)) {
            window.setTimeout(() => scrollToSectionId(targetHash), 140);
          }
        }, 80);
      }
      return;
    }

    if (item.hash) {
      scrollToSectionId(item.hash);
    }
  };

  const items: FloatingButtonGroupItem[] = SECTION_LINKS.map((sec) => {
    const isPressed =
      sec.route !== "/"
        ? location.pathname === sec.route
        : location.pathname === "/" && activeHash === sec.hash;

    return {
      id: sec.id,
      label: sec.label,
      icon: sec.icon,
      pressed: isPressed,
      onSelect: () => handleNavigate(sec),
    };
  });

  return (
    <div className="hidden lg:flex items-center">
      <FloatingButtonGroup
        items={items}
        label="Bölüm Gezinme Çubuğu"
        variant="muted"
        size="md"
      />
    </div>
  );
}
