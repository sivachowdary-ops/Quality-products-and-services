import React from "react";
import { SquareImageCard } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Wrench } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Industrial Tools & Spares | Quality Products & Services",
  description: "Comprehensive B2B supplier of industrial hand tools, cordless power tools, heavy workshop saws, precision drill bits, and abrasive cutting blades across India.",
};

export default function IndustrialToolsSparesPage() {
  const subCategories = [
    { 
      title: "Hand Tools & Manual Equipment", 
      img: "/images/subcategories/tools-hand-manual.webp", 
      desc: "Complete manual toolkit: claw & sledge hammers, pipe wrenches, pliers, chisels, spirit levels, tape measures, masonry trowels, utility knives, and bolt cutters." 
    },
    { 
      title: "Power Tools & Cordless Machinery", 
      img: "/images/subcategories/tools-power-machinery.webp", 
      desc: "High-performance cordless drills, impact drivers, electric nail guns, circular saws, chain saws, orbital sanders, jigsaws, and portable air compressors." 
    },
    { 
      title: "Drill Bits & Drilling Accessories", 
      img: "/images/subcategories/tools-drill-bits.webp", 
      desc: "Comprehensive boring bits: hardened masonry bits, HSS twist drills, cone step drills, tile & glass bits, forstner bits, auger bits, and countersinks." 
    },
    { 
      title: "Cutting Blades & Abrasive Discs", 
      img: "/images/subcategories/tools-cutting-blades.webp", 
      desc: "Diamond marble/granite cutting blades, TCT wood blades, steel cut-off wheels, flap discs, metal grinding wheels, and non-woven polishing pads." 
    },
    { 
      title: "Workshop Saws & Cutting Machinery", 
      img: "/images/subcategories/tools-workshop-saws.webp", 
      desc: "Heavy-duty workshop machinery: compound miter saws, industrial chop saws, jobsite table saws, wet tile cutting saws, scroll saws, and flooring saws." 
    },
  ];

  return (
    <div>
      {/* Category Hero */}
      <section className="relative bg-[var(--color-brand-navy)] py-20 overflow-hidden flex items-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/industrial-tools-spares.webp" 
            alt="Industrial Tools and Spares Background" 
            fill 
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[var(--color-brand-navy)] opacity-60 z-5" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-brand-gold)] rounded-full mb-6 text-[var(--color-brand-navy)] shadow-md">
            <Wrench className="w-8 h-8" />
          </div>
          <h1 className="text-[var(--color-text-on-dark)] text-4xl md:text-5xl font-bold font-heading mb-4">
            Industrial Tools & Spares
          </h1>
          <p className="text-[var(--color-text-on-dark-muted)] text-lg max-w-2xl mx-auto">
            Your single-source B2B procurement partner for premium hand tools, cordless power tools, precision drill bits, abrasive cutting discs, and heavy workshop cutting machinery.
          </p>
        </div>
      </section>

      {/* Bulk Enquiry CTA (Top) */}
      <section className="bg-[var(--color-surface-grey)] py-8 border-b border-[#E8EAED]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[var(--color-text-on-light)] mb-1">Workshop & Enterprise Procurement</h3>
            <p className="text-[var(--color-text-on-light-muted)]">Supplying industrial toolkits, machine spares, and consumables with bulk B2B rates across India.</p>
          </div>
          <Button variant="whatsapp" asChild>
            <a href="https://wa.me/919993454442?text=Hi%2C%20I%20have%20a%20bulk%20requirement%20for%20Industrial%20Tools%20%26%20Spares.%20Please%20share%20catalog%20and%20pricing.">
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
                  <a href={`https://wa.me/919993454442?text=Hi%2C%20I%20have%20a%20requirement%20for%20${encodeURIComponent(cat.title)}.%20Please%20share%20available%20models%20and%20pricing.`}>
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
