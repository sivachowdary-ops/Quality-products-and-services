import { cn } from "@/lib/utils";
import React from "react";

type SectionHeadingProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  subtitle?: string;
  variant?: "on-light" | "on-dark";
};

export const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ className, title, subtitle, variant = "on-light", ...props }, ref) => {
    const isDark = variant === "on-dark";
    
    return (
      <div
        ref={ref}
        className={cn("text-center", className)}
        {...props}
      >
        <h2
          className={cn(
            "text-3xl md:text-4xl font-bold mb-4",
            isDark ? "text-[var(--color-text-on-dark)]" : "text-[var(--color-text-on-light)]"
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={cn(
              "max-w-2xl mx-auto text-base",
              isDark ? "text-[var(--color-text-on-dark-muted)]" : "text-[var(--color-text-on-light-muted)]"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    );
  }
);
SectionHeading.displayName = "SectionHeading";
