import React from "react";
import { SquareImageCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Layers } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Aluminium Ladders | Quality Products & Services",
  description: "B2B supplier of industrial aluminium step ladders, extension ladders, telescopic ladders, multi-purpose folding ladders, and mobile scaffolding towers across India.",
};

export default function AluminiumLaddersPage() {
  const subCategories = [
    { 
      title: "Self-Supporting A-Type Step Ladders", 
      img: "/images/subcategories/ladder-step-a-type.webp", 
      desc: "Heavy-duty industrial aluminium A-frame step ladders with wide slip-resistant ribbed steps, tool tray, and safety locking hinges." 
    },
    { 
      title: "Multi-Purpose Folding Ladders", 
      img: "/images/subcategories/ladder-multipurpose.webp", 
      desc: "Articulated 4-fold multi-position ladders convertible to step ladder, straight wall ladder, standoff, or work platform scaffolding." 
    },
    { 
      title: "Extension & Telescopic Ladders", 
      img: "/images/subcategories/ladder-extension.webp", 
      desc: "2-section and 3-section rope/pulley sliding extension ladders and compact telescopic ladders for high-reach maintenance." 
    },
    { 
      title: "Platform & Step Stool Ladders", 
      img: "/images/subcategories/ladder-platform-stool.webp", 
      desc: "Wide platform standing ladders with high safety guardrails for warehouse picking, facility maintenance, and painting." 
    },
    { 
      title: "Straight Single Wall Ladders", 
      img: "/images/subcategories/ladder-straight-single.webp", 
      desc: "Rigid single-section aluminium wall leaning ladders with heavy-duty side rails and non-skid rubber shoe grips." 
    },
    { 
      title: "Mobile Tower Scaffolding Ladders", 
      img: "/images/subcategories/ladder-mobile-tower.webp", 
      desc: "Modular aluminium mobile tower scaffolds with caster wheels, outriggers, and trapdoor platforms for heavy industrial sites." 
    },
  ];

  return (
    <div>
      {/* Category Hero */}
      <section className="relative bg-[var(--color-brand-navy)] py-20 overflow-hidden flex items-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/subcategories/aluminium-ladders.webp" 
            alt="Aluminium Ladders Background" 
            fill 
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[var(--color-brand-navy)] opacity-60 z-5" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-brand-gold)] rounded-full mb-6 text-[var(--color-brand-navy)] shadow-md">
            <Layers className="w-8 h-8" />
          </div>
          <h1 className="text-[var(--color-text-on-dark)] text-4xl md:text-5xl font-bold font-heading mb-4">
            Aluminium Ladders
          </h1>
          <p className="text-[var(--color-text-on-dark-muted)] text-lg max-w-2xl mx-auto">
            Engineered for strength, safety, and durability. Supplying step ladders, extension ladders, and mobile work towers to commercial, warehouse, and construction sites across India.
          </p>
        </div>
      </section>

      {/* Bulk Enquiry CTA (Top) */}
      <section className="bg-[var(--color-surface-grey)] py-8 border-b border-[#E8EAED]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[var(--color-text-on-light)] mb-1">Commercial & Bulk Supply</h3>
            <p className="text-[var(--color-text-on-light-muted)]">We supply certified industrial-grade aluminium ladders with wholesale volume pricing across India.</p>
          </div>
          <Button variant="whatsapp" asChild>
            <a href="https://wa.me/919993454442?text=Hi%2C%20I%20have%20a%20requirement%20for%20Aluminium%20Ladders.%20Please%20share%20details.">
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
