import React from "react";
import { SquareImageCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Bolt } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Nut & Bolts Fasteners | Quality Products & Services",
  description: "B2B industrial fasteners supplier: hex bolts, hex nuts, high-tensile 8.8/10.9 fasteners, threaded rods, expansion anchor bolts, washers, and stainless steel fasteners across India.",
};

export default function NutsBoltsPage() {
  const subCategories = [
    { 
      title: "Hex Head Machine Bolts", 
      img: "/images/subcategories/nuts-bolts.webp", 
      desc: "Mild steel, high-tensile Grade 8.8 / 10.9, and SS 304/316 hex head bolts in full and half-threaded specifications." 
    },
    { 
      title: "Hex Nuts & Heavy Nuts", 
      img: "/images/subcategories/nuts-bolts.webp", 
      desc: "Standard metric and imperial hex nuts, heavy hex structural nuts, square nuts, and wing nuts with zinc or black oxide finishes." 
    },
    { 
      title: "Threaded Rods & Stud Bolts", 
      img: "/images/subcategories/fastener-threaded-rods.webp", 
      desc: "1-meter and 2-meter continuous fully threaded rods, double-end stud bolts for MEP piping, HVAC hanging, and civil tie-backs." 
    },
    { 
      title: "Concrete Anchor Fasteners", 
      img: "/images/subcategories/fastener-anchor-bolts.webp", 
      desc: "Heavy-duty wedge anchors, sleeve anchors, drop-in anchors, and through bolts for heavy structural fixing in concrete and masonry." 
    },
    { 
      title: "Socket Head Cap Screws (Allen)", 
      img: "/images/subcategories/nuts-bolts.webp", 
      desc: "High-grade alloy steel internal hex socket head cap screws, countersunk socket screws, and grub screws for precision machinery." 
    },
    { 
      title: "Plain & Spring Lock Washers", 
      img: "/images/subcategories/nuts-bolts.webp", 
      desc: "DIN 125 flat washers, DIN 127 spring lock washers, star washers, and heavy square bevelled washers for vibration resistance." 
    },
    { 
      title: "Nyloc & Flange Lock Nuts", 
      img: "/images/subcategories/nuts-bolts.webp", 
      desc: "Nylon insert lock nuts (Nyloc) and serrated flange nuts designed to prevent accidental loosening under extreme mechanical vibration." 
    },
    { 
      title: "Carriage & Foundation Bolts", 
      img: "/images/subcategories/fastener-threaded-rods.webp", 
      desc: "Round dome head square neck coach bolts and L-type / J-type structural foundation anchor bolts for steel framing." 
    },
  ];

  return (
    <div>
      {/* Category Hero */}
      <section className="relative bg-[var(--color-brand-navy)] py-20 overflow-hidden flex items-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/subcategories/nuts-bolts.webp" 
            alt="Nut & Bolts Fasteners Background" 
            fill 
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[var(--color-brand-navy)] opacity-60 z-5" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-brand-gold)] rounded-full mb-6 text-[var(--color-brand-navy)] shadow-md">
            <Bolt className="w-8 h-8" />
          </div>
          <h1 className="text-[var(--color-text-on-dark)] text-4xl md:text-5xl font-bold font-heading mb-4">
            Nut & Bolts Fasteners
          </h1>
          <p className="text-[var(--color-text-on-dark-muted)] text-lg max-w-2xl mx-auto">
            Industrial grade MS, high-tensile, and stainless steel fasteners engineered for heavy civil, mechanical, structural, and electrical installations.
          </p>
        </div>
      </section>

      {/* Bulk Enquiry CTA (Top) */}
      <section className="bg-[var(--color-surface-grey)] py-8 border-b border-[#E8EAED]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[var(--color-text-on-light)] mb-1">Bulk Fastener Supply</h3>
            <p className="text-[var(--color-text-on-light-muted)]">Custom diameters (M4 to M36), lengths, and bulk packaging options with test certificate support.</p>
          </div>
          <Button variant="whatsapp" asChild>
            <a href="https://wa.me/919993454442?text=Hi%2C%20I%20have%20a%20bulk%20requirement%20for%20Nut%20%26%20Bolts%20Fasteners.%20Please%20share%20pricing.">
              Enquire for Bulk Order
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
                  <a href={`https://wa.me/919993454442?text=Hi%2C%20I%20have%20a%20requirement%20for%20${encodeURIComponent(cat.title)}.%20Please%20share%20specifications%20and%20pricing.`}>
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
