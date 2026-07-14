import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-brand-navy)] text-[var(--color-text-on-dark)] pt-16 pb-8 border-t-4 border-[var(--color-brand-gold)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-6 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] rounded-sm">
              <Image src="/logo.webp" alt="Quality Products & Services Logo" width={44} height={44} className="rounded-lg bg-white" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg md:text-xl text-[var(--color-text-on-dark)] leading-tight">
                  Quality Products
                </span>
                <span className="text-[var(--color-brand-gold)] text-[10px] md:text-xs font-semibold tracking-widest uppercase">
                  & Services
                </span>
              </div>
            </Link>
            <p className="text-[var(--color-text-on-dark-muted)] text-sm mb-6 leading-relaxed">
              Complete Solutions Under One Roof. We supply premium safety, fire, housekeeping, stationery, and electrical products across India, and offer professional construction and interior works in AP & Telangana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {["Home", "About Us", "Location", "Contact Us", "FAQs"].map((link) => (
                <li key={link}>
                  <Link 
                    href={`/${link === "Home" ? "" : link.toLowerCase().replace(" ", "-")}`}
                    className="text-[var(--color-text-on-dark-muted)] hover:text-[var(--color-brand-gold)] transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] rounded-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Services Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Products</h4>
            <ul className="flex flex-col gap-2 mb-6">
              <li>
                <Link href="/products/fire-equipment" className="text-[var(--color-text-on-dark-muted)] hover:text-[var(--color-brand-gold)] transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] rounded-sm">
                  Fire Fighting Equipment
                </Link>
              </li>
              <li>
                <Link href="/products/safety-equipment" className="text-[var(--color-text-on-dark-muted)] hover:text-[var(--color-brand-gold)] transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] rounded-sm">
                  Safety Equipment
                </Link>
              </li>
              <li>
                <Link href="/products/housekeeping-sanitary-solutions" className="text-[var(--color-text-on-dark-muted)] hover:text-[var(--color-brand-gold)] transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] rounded-sm">
                  Housekeeping & Sanitary
                </Link>
              </li>
              <li>
                <Link href="/products/stationery-solutions" className="text-[var(--color-text-on-dark-muted)] hover:text-[var(--color-brand-gold)] transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] rounded-sm">
                  Stationery Solutions
                </Link>
              </li>
              <li>
                <Link href="/products/electrical-materials" className="text-[var(--color-text-on-dark-muted)] hover:text-[var(--color-brand-gold)] transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] rounded-sm">
                  Electrical Materials
                </Link>
              </li>
            </ul>

            <h4 className="font-heading font-semibold text-base mb-2">Services</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/services/construction-works" className="text-[var(--color-text-on-dark-muted)] hover:text-[var(--color-brand-gold)] transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] rounded-sm">
                  Construction Works
                </Link>
              </li>
              <li>
                <Link href="/services/interior-works" className="text-[var(--color-text-on-dark-muted)] hover:text-[var(--color-brand-gold)] transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] rounded-sm">
                  Interior Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-brand-gold)] shrink-0 mt-0.5" />
                <span className="text-[var(--color-text-on-dark-muted)] text-sm">
                  Flat No. 47, Venkata Rama Residency,<br />
                  Road No. 3, Sri Sai Nagar, KPHB,<br />
                  Hyderabad – 500085
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--color-brand-gold)] shrink-0" />
                <a href="tel:+919993454442" className="text-[var(--color-text-on-dark)] text-sm font-medium hover:text-[var(--color-brand-gold)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] rounded-sm">9993454442</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--color-brand-gold)] shrink-0" />
                <a href="mailto:qualityproductsandservices999@gmail.com" className="text-[var(--color-text-on-dark-muted)] text-sm hover:text-[var(--color-brand-gold)] break-all focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] rounded-sm">
                  qualityproductsandservices999@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[var(--color-brand-gold)] shrink-0" />
                <span className="text-[var(--color-text-on-dark-muted)] text-sm">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--color-brand-navy-light)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--color-text-on-dark-muted)] text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Quality Products & Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-[var(--color-text-on-dark-muted)] text-sm hover:text-[var(--color-brand-gold)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] rounded-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
