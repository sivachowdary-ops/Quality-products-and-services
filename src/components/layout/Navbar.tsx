"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown, Wrench, Shield, Sparkles, FlameKindling, HardHat, Package } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Products",
    href: "/services",
    dropdown: [
      { name: "Fire Fighting Equipment", href: "/services/fire-safety-equipment", icon: FlameKindling },
      { name: "Safety Equipment", href: "/services/fire-safety-equipment", icon: HardHat },
      { name: "Cleaning & Sanitary Supplies", href: "/services/cleaning-supplies", icon: Sparkles },
    ],
  },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Construction & Interior Works", href: "/services/construction-works", icon: Wrench },
    ],
  },
  { name: "Location", href: "/location" },
  { name: "Contact Us", href: "/contact" },
  { name: "FAQs", href: "/faqs" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-[var(--color-brand-navy)] shadow-md",
        scrolled ? "py-2" : "py-3"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] rounded-sm">
          <Image src="/logo.webp" alt="Quality Products & Services Logo" width={44} height={44} className="rounded-lg" />
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base md:text-lg text-[var(--color-text-on-dark)] leading-tight">
              Quality Products
            </span>
            <span className="text-[var(--color-brand-gold)] text-[10px] md:text-xs font-semibold tracking-widest uppercase">
              & Services
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || 
              (link.name === "Products" && (pathname.startsWith("/services/fire") || pathname.startsWith("/services/cleaning"))) ||
              (link.name === "Services" && pathname.startsWith("/services/construction"));
            
            return (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 py-2 text-[var(--color-text-on-dark)] font-medium text-sm hover:text-[var(--color-brand-gold)] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] rounded-sm",
                    isActive && "text-[var(--color-brand-gold)]"
                  )}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
                </Link>
                {isActive && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-brand-gold)] rounded-full" />
                )}

                {/* Dropdown */}
                {link.dropdown && (
                  <div className="absolute top-full pt-4 left-1/2 -translate-x-1/2 opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out w-72 pointer-events-none group-hover:pointer-events-auto">
                    <div className="bg-[var(--color-surface-white)] rounded-[var(--radius-lg)] shadow-[var(--shadow-card-hover)] p-3 flex flex-col gap-1 border border-[#E8EAED]">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-[var(--radius-md)] hover:bg-[var(--color-surface-grey)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] text-[var(--color-text-on-light)]"
                        >
                          <subItem.icon className={cn("w-5 h-5", subItem.name.includes("Fire") ? "text-[var(--color-brand-red)]" : "text-[var(--color-brand-gold)]")} />
                          <span className="font-medium text-sm">{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button variant="primary" asChild>
            <a href="https://wa.me/919993454442?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote." target="_blank" rel="noopener noreferrer">
              Get a Quote
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[var(--color-text-on-dark)] p-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] rounded-sm z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[var(--color-brand-navy)] shadow-lg border-t border-[var(--color-brand-navy-light)] max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col px-4 py-4 gap-0">
            {NAV_LINKS.map((link) => (
              <React.Fragment key={link.name}>
                {link.dropdown ? (
                  <>
                    <button
                      className="w-full py-4 text-[var(--color-text-on-dark)] font-medium text-lg border-b border-[var(--color-brand-navy-light)] flex items-center justify-between focus:outline-none"
                      onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                    >
                      {link.name}
                      <ChevronDown className={cn("w-5 h-5 transition-transform", mobileExpanded === link.name && "rotate-180")} />
                    </button>
                    {mobileExpanded === link.name && (
                      <div className="flex flex-col pl-4 py-2 gap-1 border-b border-[var(--color-brand-navy-light)] bg-[var(--color-brand-navy-light)]/10">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center gap-3 py-3 px-2 text-[var(--color-text-on-dark-muted)] hover:text-[var(--color-brand-gold)] focus:outline-none rounded-sm min-h-[44px]"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <subItem.icon className="w-5 h-5 shrink-0" />
                            <span className="text-base">{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="py-4 text-[var(--color-text-on-dark)] font-medium text-lg border-b border-[var(--color-brand-navy-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] rounded-sm min-h-[44px] flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
            <div className="pt-6 pb-4">
              <Button variant="primary" className="w-full" asChild>
                <a href="https://wa.me/919993454442?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote." target="_blank" rel="noopener noreferrer">
                  Get a Quote
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
