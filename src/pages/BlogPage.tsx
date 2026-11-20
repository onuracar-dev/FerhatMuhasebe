import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BlogSection } from "@/components/sections/BlogSection";

export function BlogPage() {
  return (
    <div className="pt-12">
      <div className="mx-auto max-w-6xl px-6 pt-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Ana Sayfaya Dön
        </Link>
      </div>
      <BlogSection />
    </div>
  );
}
