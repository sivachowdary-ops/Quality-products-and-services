"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type HorizontalScrollProps = {
  children: React.ReactNode;
  className?: string;
};

export const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children, className }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className={cn("relative group", className)}>
      {/* Scroll buttons (visible on hover, hidden on touch) */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[var(--color-surface-white)] border border-[#E8EAED] rounded-full items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-[var(--color-text-on-light)]" />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[var(--color-surface-white)] border border-[#E8EAED] rounded-full items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-[var(--color-text-on-light)]" />
        </button>
      )}

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-2 -mx-1 px-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {React.Children.map(children, (child) => (
          <div className="snap-start">{child}</div>
        ))}
      </div>

      {/* Gradient fade hints */}
      {canScrollRight && (
        <div className="absolute right-0 top-0 bottom-2 w-12 bg-gradient-to-l from-[var(--color-surface-white)] to-transparent pointer-events-none" />
      )}
      {canScrollLeft && (
        <div className="absolute left-0 top-0 bottom-2 w-12 bg-gradient-to-r from-[var(--color-surface-white)] to-transparent pointer-events-none" />
      )}
    </div>
  );
};
