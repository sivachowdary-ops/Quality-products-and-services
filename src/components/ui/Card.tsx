import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, interactive, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-[var(--color-surface-white)] rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] border border-[#E8EAED] p-6 md:p-8",
          interactive &&
            "hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-transform duration-[var(--animate-base)] ease-out cursor-pointer will-change-transform",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

type SquareImageCardProps = CardProps & {
  imageUrl: string;
  imageAlt: string;
  categoryLabel?: string;
  title: string;
  description?: string;
};

export const SquareImageCard = React.forwardRef<HTMLDivElement, SquareImageCardProps>(
  ({ className, imageUrl, imageAlt, categoryLabel, title, description, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        interactive
        className={cn("p-0 md:p-0 overflow-hidden group", className)}
        {...props}
      >
        <div className="relative aspect-square overflow-hidden rounded-t-[var(--radius-lg)]">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-[var(--animate-base)] ease-[var(--ease-out)] group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {categoryLabel && (
            <div className="absolute top-4 left-4 bg-[var(--color-surface-white)] text-[var(--color-text-on-light)] px-3 py-1 rounded-[var(--radius-sm)] text-sm shadow-sm z-10 font-medium">
              {categoryLabel}
            </div>
          )}
        </div>
        <div className="p-6 md:p-8">
          <h4 className="text-lg font-semibold mb-2">{title}</h4>
          {description && (
            <p className="text-[var(--color-text-on-light-muted)] text-sm">{description}</p>
          )}
        </div>
      </Card>
    );
  }
);
SquareImageCard.displayName = "SquareImageCard";
