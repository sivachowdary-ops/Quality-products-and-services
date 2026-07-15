import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SquareImageCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Housekeeping & Sanitary Solutions | Quality Products & Services",
  description: "Cleaning chemicals, floor care, hand hygiene, paper products, bins, cleaning tools, sponges, gloves, sanitary products, and dispensers across India.",
};

export default function HousekeepingSanitarySolutionsPage() {
  const subCategories = [
    { title: "Cleaning Chemicals", img: "/images/subcategories/cleaning-chemicals.webp", desc: "Floor cleaners, toilet bowl cleaners, glass cleaners, and surface sanitizers." },
    { title: "Floor Care", img: "/images/subcategories/mop-broom.webp", desc: "Mops, squeegees, caution wet floor boards, and commercial wringer buckets." },
    { title: "Hand Hygiene", img: "/images/subcategories/house-hand-hygiene.webp", desc: "Premium liquid hand wash, hand sanitizers, and anti-bacterial soaps." },
    { title: "Paper Products", img: "/images/subcategories/house-paper.webp", desc: "Toilet rolls, paper towels, C-fold tissues, and paper napkin packs." },
    { title: "Bins & Dustbins", img: "/images/subcategories/garbage-bins.webp", desc: "Push-top waste bins, pedal dustbins, and large trash collection bins." },
    { title: "Cleaning Tools", img: "/images/subcategories/house-cleaning-tools.webp", desc: "Soft brooms, hard brushes, dustpans, and window cleaning glass wipers." },
    { title: "Sponges & Scrubbers", img: "/images/subcategories/house-sponges.webp", desc: "Multipurpose kitchen sponges, heavy-duty scrub pads, and metal steel scrubbers." },
    { title: "Gloves", img: "/images/subcategories/house-gloves.webp", desc: "Reusable latex cleaning gloves, nitrile disposable gloves, and household gloves." },
    { title: "Sanitary Products", img: "/images/subcategories/house-sanitary.webp", desc: "Urinal screens, toilet bowl brushes, air freshener gels, and urinal blocks." },
    { title: "Dispensers", img: "/images/subcategories/soap-dispenser.webp", desc: "Automatic sensor hand wash dispensers and wall-mounted tissue towel holders." },
  ];

  return (
    <div>
      {/* Category Hero */}
      <section className="relative bg-[var(--color-brand-navy)] py-20 overflow-hidden flex items-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/housekeeping-sanitary.webp" 
            alt="Housekeeping & Sanitary Solutions Background" 
            fill 
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[var(--color-brand-navy)] opacity-60 z-5" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-brand-gold)] rounded-full mb-6 text-[var(--color-brand-navy)] shadow-md">
            <Sparkles className="w-8 h-8" />
          </div>
          <h1 className="text-[var(--color-text-on-dark)] text-4xl md:text-5xl font-bold font-heading mb-4">
            Housekeeping & Sanitary Solutions
          </h1>
          <p className="text-[var(--color-text-on-dark-muted)] text-lg max-w-2xl mx-auto">
            Comprehensive facility housekeeping supplies, professional floor care, hand hygiene, and tissue products delivered across India.
          </p>
        </div>
      </section>

      {/* Corporate Framing Section */}
      <section className="py-16 bg-[var(--color-surface-grey)] border-b border-[#E8EAED]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading 
            title="Supply for Offices, Hotels & Facilities" 
            subtitle="We cater to the bulk supply needs of corporate offices, hospitality businesses, and large-scale facility management companies across India."
          />
          <Button variant="whatsapp" className="mt-8 shadow-lg text-lg px-8 py-4" asChild>
            <a href="https://wa.me/919993454442?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20bulk%20housekeeping%20%26%20sanitary%20solutions.">
              Enquire for Bulk Corporate Orders
            </a>
          </Button>
        </div>
      </section>

      {/* Sub-categories Grid */}
      <section className="py-16 md:py-24 bg-[var(--color-surface-white)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {subCategories.map((cat, i) => (
              <div key={i} className="flex flex-col h-full">
                <SquareImageCard 
                  imageUrl={cat.img}
                  imageAlt={cat.title}
                  title={cat.title}
                  description={cat.desc}
                  className="h-full flex-1"
                />
                <Button variant="whatsapp" className="w-full mt-4 rounded-t-none" asChild>
                  <a href={`https://wa.me/919993454442?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20bulk%20housekeeping%20%26%20sanitary%20supplies%20(${encodeURIComponent(cat.title)}).`}>
                    Enquire on WhatsApp
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
