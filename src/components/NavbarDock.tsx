import { useState } from "react";
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

const SECTION_LINKS = [
  { id: "hakkimizda", label: "Hakkımızda", icon: <Building2 /> },
  { id: "hizmetler", label: "Hizmetler", icon: <Briefcase /> },
  { id: "referanslar", label: "Referanslar", icon: <Users /> },
  { id: "blog", label: "Blog", icon: <BookOpen /> },
  { id: "iletisim", label: "İletişim", icon: <PhoneCall /> },
  { id: "harita", label: "Konum", icon: <MapPin /> },
] as const;

export function NavbarDock() {
  const [activeId, setActiveId] = useState<string>("hakkimizda");

  const handleNavigate = (id: string) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const items: FloatingButtonGroupItem[] = SECTION_LINKS.map((sec) => ({
    id: sec.id,
    label: sec.label,
    icon: sec.icon,
    pressed: activeId === sec.id,
    onSelect: () => handleNavigate(sec.id),
  }));

  return (
    <div className="hidden lg:flex items-center">
      <FloatingButtonGroup
        items={items}
        label="Bölüm Gezinme Çubuğu"
        variant="muted"
        size="sm"
      />
    </div>
  );
}
