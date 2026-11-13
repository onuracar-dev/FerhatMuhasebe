import { useRef, useState } from "react";

export interface InteractiveBookProps {
  title: string;
  category: string;
  coverImage: string;
  year?: string;
  excerpt?: string;
  onOpen?: () => void;
}

export function InteractiveBook({
  title,
  category,
  coverImage,
  year = "2026",
  excerpt,
  onOpen,
}: InteractiveBookProps) {
  const bookRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!bookRef.current) return;

    const rect = bookRef.current.getBoundingClientRect();
    const cursorX = e.clientX;
    const bookCenterX = rect.left + rect.width / 2;
    const distanceFromCenter = (cursorX - bookCenterX) / (rect.width / 2);
    const targetProgress = lerp(1, 0, (distanceFromCenter + 1) / 2);

    setProgress(Math.max(0, Math.min(1, targetProgress)));
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handlePointerMove(e);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setProgress(0);
  };

  const handlePointerLeave = () => {
    if (!isDragging) {
      setProgress(0);
    }
  };

  const totalPages = 12;
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    const rotationAngle = (i + 1) * 11;
    const isLastPage = i === totalPages;

    pages.push(
      <div
        key={i}
        className="absolute h-56 w-40 rounded-r-xl border border-border bg-card p-3.5 text-[10px] leading-relaxed text-muted-foreground shadow-xs"
        style={
          {
            transformStyle: "preserve-3d",
            transformOrigin: "left",
            transform: `rotateY(calc(var(--book-progress) * ${-rotationAngle}deg))`,
            zIndex: 50 + i,
            backfaceVisibility: "visible",
            "--book-progress": progress,
          } as React.CSSProperties
        }
      >
        {isLastPage && excerpt ? (
          <div className="flex h-full flex-col justify-between overflow-hidden">
            <p className="font-semibold uppercase tracking-wider text-primary text-[9px]">
              Özet Not
            </p>
            <p className="line-clamp-6 text-[10px] text-foreground/80">
              {excerpt}
            </p>
            <span className="text-[9px] font-medium text-primary">
              YMM Ferhat Yılmaz
            </span>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="flex h-68 w-full items-center justify-center overflow-visible">
      <div
        ref={bookRef}
        onClick={onOpen}
        className="relative h-56 w-40 translate-x-10 cursor-pointer will-change-transform touch-none sm:translate-x-14"
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerLeave}
        style={
          {
            perspective: "1500px",
            transformStyle: "preserve-3d",
            "--book-progress": progress,
          } as React.CSSProperties
        }
      >
        {/* Back Cover */}
        <div
          className="absolute h-56 w-40 rounded-r-xl border-2 border-border bg-secondary"
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "left",
            boxShadow: "0 10px 24px rgba(0,0,0,0.14)",
            zIndex: 1,
          }}
        />

        {/* Animated Pages */}
        {pages}

        {/* Front Cover */}
        <div
          className="absolute h-56 w-40 overflow-hidden border border-border bg-card"
          style={
            {
              transformStyle: "preserve-3d",
              transformOrigin: "left center",
              transform: `rotateY(calc(var(--book-progress) * -162deg))`,
              boxShadow: "0 10px 22px rgba(0, 0, 0, 0.16)",
              borderRadius: "0 10px 10px 0",
              zIndex: 200,
              "--book-progress": progress,
            } as React.CSSProperties
          }
        >
          {/* Cover image strip */}
          <div className="relative h-[46%] w-full overflow-hidden border-b border-border bg-primary">
            <img
              src={coverImage}
              alt={title}
              className="h-full w-full object-cover opacity-90"
            />
            <span className="absolute top-2 right-2 rounded-full bg-background/85 px-2 py-0.5 text-[9px] font-semibold text-foreground backdrop-blur-xs">
              {year}
            </span>
          </div>

          {/* Spine edge */}
          <div className="absolute inset-y-0 left-0 z-30 flex w-2.5 flex-row justify-end bg-primary/80">
            <div className="h-full w-0.5 bg-background/25" />
            <div className="h-full w-0.5 bg-foreground/20" />
          </div>

          {/* Cover Typography */}
          <div
            className="flex h-[54%] flex-col justify-between p-3 pl-4"
            style={{ backfaceVisibility: "hidden" }}
          >
            <span className="text-[9px] font-semibold uppercase tracking-wider text-primary">
              {category}
            </span>
            <p className="font-serif text-xs font-semibold leading-snug text-foreground line-clamp-3">
              {title}
            </p>
            <span className="text-[9px] text-muted-foreground">
              Ferhat Yılmaz YMM
            </span>
          </div>

          {/* Inner cover label */}
          <div
            className="absolute top-1/2 right-1/2 px-3 text-center text-xs font-semibold text-primary"
            style={{
              transform: "translate(50%, -50%) rotateY(180deg) scaleX(-1)",
              backfaceVisibility: "hidden",
            }}
          >
            YMM Rapor Arşivi
          </div>
        </div>
      </div>
    </div>
  );
}
