import React from "react";
import { SquareImageCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Boxes } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "MS Binding Wire | Quality Products & Services",
  description: "B2B supplier of annealed mild steel MS binding wire (16G, 18G, 20G), galvanized iron GI wire, double loop ties, and cut wire coils for construction rebar tying across India.",
};

export default function MSBindingWirePage() {
  const subCategories = [
    { 
      title: "18 Gauge (1.2mm) MS Binding Wire", 
      img: "/images/subcategories/ms-binding-wire.webp", 
      desc: "The standard high-flexibility black annealed binding wire for tying TMT reinforcement rebar bars on concrete slabs, columns, and beams." 
    },
    { 
      title: "20 Gauge (0.9mm) Soft Annealed Wire", 
      img: "/images/subcategories/ms-binding-wire.webp", 
      desc: "Super-soft pliable wire tailored for delicate civil works, mesh tying, false ceiling framework wire hanging, and light shuttering." 
    },
    { 
      title: "16 Gauge (1.6mm) Heavy Civil Wire", 
      img: "/images/subcategories/ms-binding-wire.webp", 
      desc: "Heavy-gauge thick annealed wire for bridge construction, industrial foundations, heavy column cages, and pre-cast concrete structures." 
    },
    { 
      title: "Galvanized Iron (GI) Binding Wire", 
      img: "/images/subcategories/ms-binding-wire.webp", 
      desc: "Zinc-coated rust-resistant wire for coastal projects, exterior fencing, damp environments, and exposed structural rebar tying." 
    },
    { 
      title: "Double Loop Rebar Ties & Tools", 
      img: "/images/subcategories/wire-loop-ties.webp", 
      desc: "Pre-formed loop wire ties with manual spiral twister tools for 3x faster reinforcement bar tying on high-speed construction sites." 
    },
    { 
      title: "Bulk 25kg / 50kg Industrial Wire Coils", 
      img: "/images/subcategories/ms-binding-wire.webp", 
      desc: "Tightly strapped, oil-coated, rust-preventive wrapped 25kg and 50kg bundle coils supplied at manufacturer wholesale rates across India." 
    },
  ];

  return (
    <div>
      {/* Category Hero */}
      <section className="relative bg-[var(--color-brand-navy)] py-20 overflow-hidden flex items-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/subcategories/ms-binding-wire.webp" 
            alt="MS Binding Wire Background" 
            fill 
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[var(--color-brand-navy)] opacity-60 z-5" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-brand-gold)] rounded-full mb-6 text-[var(--color-brand-navy)] shadow-md">
            <Boxes className="w-8 h-8" />
          </div>
          <h1 className="text-[var(--color-text-on-dark)] text-4xl md:text-5xl font-bold font-heading mb-4">
            MS Binding Wire
          </h1>
          <p className="text-[var(--color-text-on-dark-muted)] text-lg max-w-2xl mx-auto">
            Soft-annealed high tensile mild steel binding wire engineered for strong, knot-friendly, and non-snapping rebar tying in civil construction.
          </p>
        </div>
      </section>

      {/* Bulk Enquiry CTA (Top) */}
      <section className="bg-[var(--color-surface-grey)] py-8 border-b border-[#E8EAED]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[var(--color-text-on-light)] mb-1">Direct Wholesale & Ton-Scale Supply</h3>
            <p className="text-[var(--color-text-on-light-muted)]">We supply bulk bundles (16G, 18G, 20G, GI) directly to developers, contractors, and project sites across India.</p>
          </div>
          <Button variant="whatsapp" asChild>
            <a href="https://wa.me/919993454442?text=Hi%2C%20I%20have%20a%20bulk%20requirement%20for%20MS%20Binding%20Wire.%20Please%20share%20ton%20pricing.">
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
