import { cn } from "@/lib/utils";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "whatsapp";
  asChild?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-[var(--radius-md)] px-6 py-3 font-semibold transition-all duration-[var(--animate-fast)] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-[var(--color-brand-gold)] text-[var(--color-brand-navy)] hover:bg-[var(--color-brand-gold-light)] active:bg-[#C29322] focus:ring-[var(--color-brand-gold)]",
      secondary:
        "bg-transparent border-2 border-current hover:bg-[var(--color-surface-white)]/10 focus:ring-current",
      whatsapp:
        "bg-[#25D366] text-white hover:bg-[#20bd5a] active:bg-[#1da851] focus:ring-[#25D366]",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
